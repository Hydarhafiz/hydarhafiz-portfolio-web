import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const profilePath = join(root, "docs/career/profile-alignment.md");
const careerDataPath = join(root, "resume/career-data.json");
const profile = readFileSync(profilePath, "utf8");
const careerData = JSON.parse(readFileSync(careerDataPath, "utf8"));

function extractTextBlock(profileText, marker) {
  const escapedMarker = marker.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<!-- ${escapedMarker} -->\\s*\\x60\\x60\\x60text\\n([\\s\\S]*?)\\n\\x60\\x60\\x60`);
  const match = profileText.match(pattern);
  if (!match) {
    throw new Error(`Missing marked copy block: ${marker}`);
  }
  return match[1].trim();
}

const requiredFacts = [
  careerData.basics.name,
  careerData.basics.title,
  careerData.basics.location,
  "November 2026",
  "Aerospace Malaysia Innovation Centre",
  "SAFAPAC",
  "five TEA-SAF domain researchers",
  "one frontend developer",
  "five-person Airbus internal pilot group",
  "AIRIS",
  "PETRONAS Digital",
  "AnotherEdenAI",
  "Active development",
  "AWS Certified Machine Learning Engineer – Associate",
  "AWS Certified Cloud Practitioner",
  "Microsoft Certified: Azure AI Fundamentals",
];

const prohibitedClaims = [
  "production-grade",
  "production ready",
  "production-ready",
  "fully complete",
  "graduate computer science student",
  "40%",
  "95% calculation accuracy",
  "200+ users",
  "<50ms",
];

const lengthContracts = [
  ["linkedin-headline", 220],
  ["github-bio", 160],
  ["anothereden-repo-description", 350],
];

const requiredUrls = [
  careerData.basics.email,
  ...careerData.basics.links.map((link) => link.url),
  careerData.projects[0].url,
  ...careerData.certifications.map((certification) => certification.url),
];

function validateProfile(profileText) {
  const blocks = [...profileText.matchAll(/```text\n([\s\S]*?)\n```/g)].map((match) => match[1].trim());
  if (blocks.length < 9) {
    throw new Error(`Expected at least 9 ready-to-paste copy blocks; found ${blocks.length}.`);
  }

  const publicCopy = blocks.join("\n");
  const normalizedCopy = publicCopy.toLowerCase();
  const normalizedProfile = profileText.toLowerCase();

  for (const fact of requiredFacts) {
    if (!normalizedProfile.includes(fact.toLowerCase())) {
      throw new Error(`Required career fact is missing from the profile package: ${fact}`);
    }
  }

  for (const claim of prohibitedClaims) {
    if (normalizedCopy.includes(claim)) {
      throw new Error(`Prohibited or stale claim is present in ready-to-paste copy: ${claim}`);
    }
  }

  const phonePattern = /\+?60[\s-]?1\d(?:[\s-]?\d){7,8}/;
  if (phonePattern.test(publicCopy)) {
    throw new Error("Public profile copy must not contain a Malaysian phone number.");
  }

  for (const [marker, maximum] of lengthContracts) {
    const content = extractTextBlock(profileText, marker);
    if (content.length > maximum) {
      throw new Error(`${marker} exceeds ${maximum} characters; found ${content.length}.`);
    }
  }

  for (const url of requiredUrls) {
    if (!profileText.includes(url)) {
      throw new Error(`Required profile or credential reference is missing: ${url}`);
    }
  }

  const checklistItems = profileText.match(/^- \[[ x]\] /gm) ?? [];
  if (checklistItems.length < 20) {
    throw new Error(`External update checklist is incomplete; found ${checklistItems.length} items.`);
  }

  return { blocks: blocks.length, checklistItems: checklistItems.length };
}

function replaceTextBlock(profileText, marker, replacement) {
  const existing = extractTextBlock(profileText, marker);
  return profileText.replace(existing, replacement);
}

function expectFailure(label, profileText, expectedMessage) {
  try {
    validateProfile(profileText);
  } catch (error) {
    if (!String(error.message).includes(expectedMessage)) {
      throw new Error(`${label} failed for the wrong reason: ${error.message}`);
    }
    return;
  }
  throw new Error(`${label} unexpectedly passed.`);
}

const result = validateProfile(profile);

if (process.argv.includes("--self-test")) {
  expectFailure(
    "prohibited-claim scenario",
    replaceTextBlock(profile, "github-bio", `${extractTextBlock(profile, "github-bio")} production-grade`),
    "Prohibited or stale claim",
  );
  expectFailure(
    "missing-fact scenario",
    profile.replaceAll(careerData.basics.name, "Hydar"),
    "Required career fact",
  );
  expectFailure(
    "field-length scenario",
    replaceTextBlock(profile, "linkedin-headline", "Backend Software Engineer ".repeat(12).trim()),
    "exceeds 220 characters",
  );
  expectFailure(
    "public-phone scenario",
    replaceTextBlock(
      profile,
      "github-bio",
      `${extractTextBlock(profile, "github-bio")} ${["+60", "12", "345", "6789"].join(" ")}`,
    ),
    "must not contain a Malaysian phone number",
  );
  console.log("Profile validator self-test passed: prohibited claim, required fact, length, and public-phone failures detected.");
}

console.log(
  `Validated recruiter-profile package: ${result.blocks} copy blocks, ${result.checklistItems} checklist items, and platform field lengths within limits.`,
);
