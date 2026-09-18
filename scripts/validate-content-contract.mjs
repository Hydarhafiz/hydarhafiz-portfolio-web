import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(join(fileURLToPath(new URL(".", import.meta.url)), ".."));
const source = JSON.parse(readFileSync(join(root, "resume/career-data.json"), "utf8"));
const contract = source.portfolioContract;
const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const expectedOrder = ["safapac", "airis", "anotheredenai", "saf-sky-quest"];
const expectedRoutes = ["/safapac", "/airis", "/anotheredenai", "/saf-sky-quest"];
const expectedSurface = [
  "flagship professional case study",
  "major applied-AI case study",
  "major personal case study",
  "supporting cloud-deployment case study",
];

assert(contract?.authority === "docs/core/milestone.md", "Portfolio contract must name milestone.md as its authority.");
assert(contract?.identity?.primary === "Backend Engineer", "Portfolio contract must keep Backend Engineer as the primary identity.");
assert(
  contract?.identity?.hero === "Backend Engineer building production cloud and AI systems.",
  "Portfolio contract hero does not match the approved milestone wording.",
);
assert(
  contract?.identity?.publicResumeHeadline === "Backend Engineer | Cloud & Applied AI",
  "Portfolio contract public resume headline does not match the approved milestone wording.",
);
assert(
  contract?.identity?.locationTargeting === "Kuala Lumpur / Selangor",
  "Portfolio contract location targeting must remain Kuala Lumpur / Selangor.",
);

const projects = contract?.projectOrder ?? [];
assert(JSON.stringify(projects.map((project) => project.id)) === JSON.stringify(expectedOrder), "Project hierarchy/order is not SAFAPAC -> AIRIS -> AnotherEdenAI -> SAF Sky Quest.");
assert(JSON.stringify(projects.map((project) => project.route)) === JSON.stringify(expectedRoutes), "Project routes do not preserve the approved navigation foundation.");
assert(JSON.stringify(projects.map((project) => project.surface)) === JSON.stringify(expectedSurface), "Project surfaces do not preserve the approved hierarchy.");
assert(projects.find((project) => project.id === "anotheredenai")?.startDate === "January 2026", "AnotherEdenAI must start in January 2026.");

const publicResume = contract?.publicResume;
assert(publicResume?.route === "/resume", "Public resume route is missing from the portfolio contract.");
assert(publicResume?.profile === "one balanced public profile", "Public resume must remain one balanced profile.");
assert(publicResume?.phoneFree === true, "Public resume must remain phone-free.");
assert(publicResume?.targetedProfilesPrivate === true, "Targeted resumes must remain private and unlinked.");

const requiredMetricContexts = new Map([
  ["33,047 governed defaults", ["SAFAPAC", "12 processes", "22 feedstocks", "217 countries"]],
  ["50 ms p95", ["SAFAPAC", "33-point sensitivity workflow", "10 staging acceptance cycles"]],
  ["96.1% less local RAG context", ["AIRIS", "6-scenario/10-turn controlled experiment", "541k to 20.9k local-context tokens", "10/10 citation checks passed"]],
  ["367/367 legal-kit coverage", ["AnotherEdenAI", "canonical character forms/styles", "accepted portfolio evidence snapshot"]],
]);

for (const [value, context] of requiredMetricContexts) {
  const metric = contract?.metrics?.find((candidate) => candidate.value === value);
  assert(metric, `Missing approved metric contract: ${value}`);
  if (!metric) continue;
  for (const phrase of context) {
    assert(metric.project === phrase || metric.requiredContext?.includes(phrase), `${value} is missing its required context: ${phrase}`);
  }
}

function publicSourceText() {
  const sourceFiles = [
    join(root, "src/pages/index.astro"),
    join(root, "src/pages/resume.astro"),
    join(root, "src/components/ResumePage.astro"),
    ...readdirSync(join(root, "src/content/case-studies"))
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => join(root, "src/content/case-studies", file)),
  ];
  return sourceFiles.map((file) => readFileSync(file, "utf8")).join("\n").toLowerCase();
}

const renderedSource = publicSourceText();
for (const phrase of contract?.forbiddenPublicWording ?? []) {
  assert(!renderedSource.includes(phrase.toLowerCase()), `Forbidden global public wording remains in implementation source: ${phrase}`);
}

function missingMetricContext(value, context, text) {
  if (!text.includes(value.toLowerCase())) return [];
  return context.filter((phrase) => !text.includes(phrase.toLowerCase()));
}

function assertMetricContext(value, context, text) {
  for (const phrase of missingMetricContext(value, context, text)) {
    assert(false, `${value} is rendered without its required context: ${phrase}`);
  }
}

for (const [value, context] of requiredMetricContexts) {
  assertMetricContext(value.toLowerCase(), context.map((phrase) => phrase.toLowerCase()), renderedSource);
}

if (process.argv.includes("--self-test")) {
  const metric = requiredMetricContexts.get("50 ms p95");
  const safeText = ["SAFAPAC", "50 ms p95", ...metric].join(" ").toLowerCase();
  const incompleteText = safeText.replace("10 staging acceptance cycles", "10 cycles");
  const metricContext = ["SAFAPAC", "33-point sensitivity workflow", "10 staging acceptance cycles"];
  assert(missingMetricContext("50 ms p95", metricContext, safeText).length === 0, "Metric-context self-test rejected complete context.");
  assert(missingMetricContext("50 ms p95", metricContext, incompleteText).includes("10 staging acceptance cycles"), "Metric-context self-test did not reject stripped context.");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validated Milestone 7 content contract: authority, positioning, hierarchy, resume privacy, metric context, and global wording boundaries.");
}
