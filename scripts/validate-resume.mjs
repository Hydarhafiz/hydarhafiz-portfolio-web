import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const relativePdfPath = process.argv[2];
const variantIndex = process.argv.indexOf("--variant");
const variant = variantIndex === -1 ? "public" : process.argv[variantIndex + 1];

if (!relativePdfPath || !new Set(["public", "application"]).has(variant)) {
  throw new Error("Usage: node scripts/validate-resume.mjs <pdf> --variant <public|application>");
}

const pdfPath = resolve(root, relativePdfPath);
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

const requiredPhrases = [
  "Hydar Hafiz bin Hydzelan",
  "Backend Software Engineer",
  "Aerospace Malaysia Innovation Centre",
  "SAFAPAC",
  "AIRIS",
  "PETRONAS Digital",
  "AnotherEdenAI",
  "AWS Certified Machine Learning Engineer",
  "Available November 2026",
  "five TEA-SAF domain researchers",
  "one frontend developer",
  "five-person Airbus internal pilot group",
];

for (const phrase of requiredPhrases) {
  if (!normalizedText.includes(phrase.toLowerCase())) {
    throw new Error(`Required CV phrase is missing: ${phrase}`);
  }
}

const prohibitedClaims = [
  "graduate computer science student",
  "40%",
  "95% calculation accuracy",
  "200+ users",
  "<50ms",
  "terengganu",
];

for (const claim of prohibitedClaims) {
  if (normalizedText.includes(claim)) {
    throw new Error(`Prohibited stale or unsupported CV claim is present: ${claim}`);
  }
}

const malaysiaPhonePattern = /\+?60[\s-]?1\d(?:[\s-]?\d){7,8}/;
if (variant === "public" && malaysiaPhonePattern.test(text)) {
  throw new Error("Public resume must not contain a Malaysian phone number.");
}

if (variant === "application") {
  const privateContactPath = resolve(root, ".private/resume-contact.json");
  if (!existsSync(privateContactPath)) {
    throw new Error("Private contact data is required to validate the application resume.");
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
const requiredLinkFragments = ["mailto:", "linkedin.com/in/", "github.com/Hydarhafiz"];

for (const fragment of requiredLinkFragments) {
  if (!urls.some((url) => url.includes(fragment))) {
    throw new Error(`Expected PDF link is missing: ${fragment}`);
  }
}

const metadata = await document.getMetadata();
const title = metadata.info?.Title || "";
if (!title.includes("Hydar Hafiz bin Hydzelan") || !title.includes("Resume")) {
  throw new Error("PDF title metadata is missing or inaccurate.");
}

console.log(
  `Validated ${variant} resume: one page, ${text.length} extracted characters, ${urls.length} links, accurate title metadata.`,
);
