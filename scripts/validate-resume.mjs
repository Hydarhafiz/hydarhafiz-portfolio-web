import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { listCareerProfiles, resolveCareerProfile } from "../resume/resolve-profile.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const relativePdfPath = process.argv[2];

function readArgument(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

const profile = readArgument("--profile", "default");
const contactPolicy = readArgument("--contact", "public");

if (!relativePdfPath || !listCareerProfiles().includes(profile) || !new Set(["public", "application"]).has(contactPolicy)) {
  throw new Error("Usage: node scripts/validate-resume.mjs <pdf> --profile <default|backend|cloud|ai> --contact <public|application>");
}

const careerSource = JSON.parse(readFileSync(resolve(root, "resume/career-data.json"), "utf8"));
const careerData = resolveCareerProfile(careerSource, profile);
const pdfPath = resolve(root, relativePdfPath);

function validateAllProfileResolutions(source) {
  const expectedProfiles = ["default", "backend", "cloud", "ai"];
  const profiles = listCareerProfiles();
  if (JSON.stringify(profiles) !== JSON.stringify(expectedProfiles)) {
    throw new Error(`Resolver profile set changed unexpectedly: ${profiles.join(", ")}`);
  }

  const resolved = profiles.map((profileId) => resolveCareerProfile(source, profileId));
  for (const [index, resolvedProfile] of resolved.entries()) {
    if (
      !resolvedProfile.basics.title
      || !resolvedProfile.summary
      || resolvedProfile.capabilities.length === 0
      || resolvedProfile.experience.length === 0
      || resolvedProfile.projects.length === 0
    ) {
      throw new Error(`Resolver snapshot is incomplete for profile: ${profiles[index]}`);
    }
  }

  return profiles;
}

function selectedBulletRecords(source, profileId) {
  const profileSource = source.profiles?.[profileId];
  const experience = source.experience.flatMap((entry) => {
    const selectedIds = profileSource.experienceBullets?.[entry.id] ?? [];
    return selectedIds.map((id) => entry.bullets.find((bullet) => bullet.id === id));
  });
  const projects = source.projects.flatMap((project) => {
    const selectedIds = profileSource.projectBullets?.[project.id] ?? [];
    return selectedIds.map((id) => project.bullets.find((bullet) => bullet.id === id));
  });
  return [...experience, ...projects].filter(Boolean);
}

const resolvedProfiles = validateAllProfileResolutions(careerSource);

const profileClaimContracts = {
  backend: {
    requiredPhrases: [
      "Backend Software Engineer",
      "Python/FastAPI",
      "PostgreSQL",
      "REST APIs",
      "calculation contracts",
      "validation",
      "testability",
      "Pytest",
      "Pydantic",
    ],
    forbiddenPatterns: [
      /deployed[- ]beta/i,
      /productionized/i,
      /\b(?:staging|production)\s+(?:delivery|environment|operations?|estate)\b/i,
      /\blive\s+operations?\b/i,
      /\boperated\s+(?:the|a|an)\b/i,
      /\bcustomer\s+(?:adoption|impact|success)\b/i,
      /\b(?:five|one)[-\s]+(?:TEA-SAF|frontend|person)\b/i,
      /\b\d[\d,]*\+?\s+users?\b/i,
      /\b(?:30,000|50|100|200\+)\b/i,
    ],
  },
};

function validateProfileClaimContract(source, profileId, data, extractedText) {
  const contract = profileClaimContracts[profileId];
  if (!contract) return;

  const normalizedExtractedText = extractedText.toLowerCase();
  const selectedBullets = selectedBulletRecords(source, profileId);
  const selectedText = [
    data.basics.title,
    data.summary,
    ...data.capabilities.flatMap((group) => [group.category, ...group.items]),
    ...selectedBullets.map((bullet) => bullet.text),
  ].join(" ");
  const normalizedSelectedText = selectedText.toLowerCase();

  for (const phrase of contract.requiredPhrases) {
    if (!normalizedSelectedText.includes(phrase.toLowerCase())) {
      throw new Error(`Required ${profileId} claim-safe phrase is missing: ${phrase}`);
    }
    if (!normalizedExtractedText.includes(phrase.toLowerCase())) {
      throw new Error(`Required ${profileId} claim-safe phrase is missing from PDF: ${phrase}`);
    }
  }

  for (const pattern of contract.forbiddenPatterns) {
    if (pattern.test(selectedText) || pattern.test(extractedText)) {
      throw new Error(`Forbidden ${profileId} claim wording is present: ${pattern}`);
    }
  }

  for (const bullet of selectedBullets) {
    const hasMaterialMetricOrOutcome = /(?:\b\d[\d,.]*\+?\b|%|\bp\d+\b|\b(?:reduced|improved|measured|passed|supported|operated|deployed|productionized)\b)/i.test(
      bullet.text,
    );
    if (hasMaterialMetricOrOutcome && !Array.isArray(bullet.registryIds)) {
      throw new Error(`Material Backend bullet is missing registry mapping: ${bullet.id}`);
    }
    if (!bullet.registryIds) continue;
    if (bullet.registryIds.length === 0 || bullet.registryIds.some((id) => typeof id !== "string" || id.length === 0)) {
      throw new Error(`Invalid registry mapping for Backend bullet: ${bullet.id}`);
    }
    for (const qualifier of bullet.requiredQualifiers ?? []) {
      if (!bullet.text.toLowerCase().includes(qualifier.toLowerCase())) {
        throw new Error(`Backend bullet ${bullet.id} is missing qualifier: ${qualifier}`);
      }
      if (!normalizedExtractedText.includes(qualifier.toLowerCase())) {
        throw new Error(`Backend PDF is missing qualifier for ${bullet.id}: ${qualifier}`);
      }
    }
    for (const marker of bullet.claimMarkers ?? []) {
      if (!bullet.text.toLowerCase().includes(marker.toLowerCase())) {
        throw new Error(`Backend source is missing mapped claim marker for ${bullet.id}: ${marker}`);
      }
      if (!normalizedExtractedText.includes(marker.toLowerCase())) {
        throw new Error(`Backend PDF is missing mapped claim marker for ${bullet.id}: ${marker}`);
      }
    }
  }
}

function expectClaimFailure(label, callback, expectedMessage) {
  try {
    callback();
  } catch (error) {
    if (!String(error.message).includes(expectedMessage)) {
      throw new Error(`${label} failed for the wrong reason: ${error.message}`);
    }
    return;
  }
  throw new Error(`${label} unexpectedly passed.`);
}

if (process.argv.includes("--self-test")) {
  const backendSource = JSON.parse(JSON.stringify(careerSource));
  const backendData = resolveCareerProfile(backendSource, "backend");
  const safeBackendText = [
    backendData.basics.title,
    backendData.summary,
    ...backendData.capabilities.flatMap((group) => [group.category, ...group.items]),
    ...selectedBulletRecords(backendSource, "backend").map((bullet) => bullet.text),
  ].join(" ");

  expectClaimFailure(
    "deployed-beta scenario",
    () => validateProfileClaimContract(backendSource, "backend", backendData, `${safeBackendText} deployed beta`),
    "Forbidden backend claim wording",
  );
  expectClaimFailure(
    "productionized scenario",
    () => validateProfileClaimContract(backendSource, "backend", backendData, `${safeBackendText} productionized`),
    "Forbidden backend claim wording",
  );
  expectClaimFailure(
    "unsupported-user-count scenario",
    () => validateProfileClaimContract(backendSource, "backend", backendData, `${safeBackendText} 50 users`),
    "Forbidden backend claim wording",
  );
  expectClaimFailure(
    "unqualified-local-metric scenario",
    () => validateProfileClaimContract(
      backendSource,
      "backend",
      backendData,
      safeBackendText.replace("controlled local PostgreSQL benchmark", "benchmark"),
    ),
    "missing qualifier",
  );

  const unmappedMetric = backendSource.experience
    .find((entry) => entry.id === "amic")
    .bullets.find((bullet) => bullet.id === "safapac-runtime-benchmark");
  delete unmappedMetric.registryIds;
  expectClaimFailure(
    "unmapped-metric scenario",
    () => validateProfileClaimContract(backendSource, "backend", backendData, safeBackendText),
    "missing registry mapping",
  );
  console.log("Resume claim validator self-test passed: prohibited wording, unsupported count, qualifier, and registry-mapping failures detected.");
}

if (!existsSync(pdfPath) || statSync(pdfPath).size < 10_000) {
  throw new Error("Resume PDF is missing or unexpectedly small.");
}

const document = await getDocument({ data: new Uint8Array(readFileSync(pdfPath)) }).promise;
if (document.numPages !== 1) {
  throw new Error(`Resume must contain exactly one page; found ${document.numPages}.`);
}

const page = await document.getPage(1);
const textContent = await page.getTextContent();
const text = textContent.items.map((item) => item.str).join(" ").replaceAll(/\s+/g, " ").trim();
const normalizedText = text.toLowerCase();

validateProfileClaimContract(careerSource, profile, careerData, text);

const requiredPhrases = [
  careerData.basics.name,
  careerData.basics.title,
  careerData.basics.location,
  careerData.basics.availability,
  careerData.summary,
  ...careerData.capabilities.flatMap((group) => [group.category, ...group.items]),
  ...careerData.experience.flatMap((entry) => [entry.role, entry.organization, entry.dates, ...entry.bullets]),
  ...careerData.projects.flatMap((project) => [project.name, project.context, project.dates, ...project.bullets]),
  careerData.education.institution,
  careerData.education.qualification,
  ...careerData.certifications.map((certification) => certification.name),
];

for (const phrase of requiredPhrases) {
  if (!normalizedText.includes(phrase.toLowerCase())) {
    throw new Error(`Required resume phrase is missing: ${phrase}`);
  }
}

const keywordRequirements = {
  default: ["Python", "FastAPI", "PostgreSQL", "AWS", "Terraform", "OIDC", "SSM", "Docker", "Neo4j", "Structured Validation"],
  backend: ["Backend Software Engineer", "REST APIs", "Async Python", "Pytest", "Pydantic"],
  cloud: [
    "Cloud & DevOps Engineer",
    "AWS",
    "Terraform",
    "Infrastructure as Code",
    "Docker",
    "GitHub Actions",
    "CI/CD",
    "EC2",
    "RDS",
    "S3",
    "CloudFront",
    "Cognito",
    "Linux",
    "Nginx",
    "OIDC",
    "SSM",
  ],
  ai: ["Applied AI Engineer", "RAG / GraphRAG", "Knowledge Graphs", "LangGraph", "AI Evaluation", "Token & Cost Controls"],
};

for (const keyword of keywordRequirements[profile]) {
  if (!normalizedText.includes(keyword.toLowerCase())) {
    throw new Error(`Required ${profile} keyword is missing: ${keyword}`);
  }
}

const headingOrder = [
  "professional summary",
  "technical capabilities",
  "professional experience",
  "selected project",
  "education",
  "certifications",
];
let previousIndex = -1;
for (const heading of headingOrder) {
  const index = normalizedText.indexOf(heading, previousIndex + 1);
  if (index === -1) throw new Error(`Resume extraction order is invalid at: ${heading}`);
  previousIndex = index;
}

const prohibitedClaims = [
  "graduate computer science student",
  "40%",
  "95% calculation accuracy",
  "200+ users",
  "<50ms",
  "production-grade",
  "production ready",
  "kubernetes",
  "eks",
  "ecs",
  "helm",
  "argocd",
  "prometheus",
  "grafana",
  "site reliability engineer",
  "platform engineer",
  "implemented airis optimization",
  "model registry",
  "feature store",
  "drift monitoring",
];

for (const claim of prohibitedClaims) {
  if (normalizedText.includes(claim)) {
    throw new Error(`Prohibited stale or unsupported resume claim is present: ${claim}`);
  }
}

const malaysiaPhonePattern = /\+?60[\s-]?1\d(?:[\s-]?\d){7,8}/;
if (contactPolicy === "public" && malaysiaPhonePattern.test(text)) {
  throw new Error("Public resume must not contain a Malaysian phone number.");
}

if (contactPolicy === "application") {
  const privateContactPath = resolve(root, ".private/resume-contact.json");
  if (!existsSync(privateContactPath)) {
    throw new Error("Private contact data is required to validate an application resume.");
  }
  const { phone } = JSON.parse(readFileSync(privateContactPath, "utf8"));
  const digits = String(phone).replaceAll(/\D/g, "");
  const extractedDigits = text.replaceAll(/\D/g, "");
  if (!digits || !extractedDigits.includes(digits)) {
    throw new Error("Application resume does not contain the configured private phone number.");
  }
}

const annotations = await page.getAnnotations();
const urls = annotations.map((annotation) => annotation.url || annotation.unsafeUrl).filter(Boolean);
const normalizeLink = (url) => {
  if (!url.startsWith("http")) return url;
  const parsedUrl = new URL(url);
  return parsedUrl.pathname === "/" ? parsedUrl.origin : parsedUrl.toString();
};
for (const expectedUrl of [
  `mailto:${careerData.basics.email}`,
  ...careerData.basics.links.map((link) => link.url),
]) {
  if (!urls.some((url) => normalizeLink(url) === normalizeLink(expectedUrl))) {
    throw new Error(`Expected PDF link is missing: ${expectedUrl}`);
  }
}

const metadata = await document.getMetadata();
const title = metadata.info?.Title || "";
if (!title.includes(careerData.basics.name) || !title.includes(careerData.basics.title) || !title.includes("Resume")) {
  throw new Error("PDF title metadata is missing or inaccurate.");
}

console.log(
  `Validated ${profile}/${contactPolicy} resume: one page, ${text.length} extracted characters, ${urls.length} links, ordered ATS text, accurate metadata, and ${resolvedProfiles.length} profile resolutions.`,
);
