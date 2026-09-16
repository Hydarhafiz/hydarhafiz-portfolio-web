import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const draft = await readFile(path.join(repositoryRoot, "docs/career/linkedin-announcement-draft.md"), "utf8");
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const phrase of [
  "reviewed and approved by Hydar",
  "Hydar Hafiz bin Hydzelan",
  "Software Engineer — Backend, Cloud & Applied AI",
  "Backend Software Engineer",
  "Cloud & DevOps Engineer",
  "Applied AI Engineer",
  "November 2026",
  "https://hydarhafiz.com",
  "SAFAPAC",
  "AnotherEdenAI",
  "AIRIS",
]) {
  assert(draft.includes(phrase), `LinkedIn launch draft: missing ${phrase}`);
}

assert(/manual(?:ly)?/i.test(draft), "LinkedIn launch draft: manual publication boundary is missing");
assert(!/\+?60[\s-]?1\d(?:[\s-]?\d){7,8}/.test(draft), "LinkedIn launch draft: Malaysian phone number is not allowed");
assert(!/(production-ready|production ready|fully complete|guaranteed|automatically publish)/i.test(draft), "LinkedIn launch draft: unsupported or automated-publication claim is present");

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validated LinkedIn launch draft: identity, target roles, live portfolio URL, availability, public boundary, and manual-publication rule.");
}
