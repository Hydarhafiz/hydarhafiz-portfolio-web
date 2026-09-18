import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(repositoryRoot, "dist");
const stylesheet = await readFile(path.join(repositoryRoot, "src/styles/global.css"), "utf8");
const visualSpecs = [
  ["safapac", ["safapac-transition", "safapac-delivery"]],
  ["airis", ["airis-context-experiment", "airis-concurrency-diagnosis", "airis-load-testing"]],
  ["anotheredenai", ["anotheredenai-pipeline", "anotheredenai-guardrails"]],
  ["saf-sky-quest", ["saf-sky-quest-lifecycle"]]
];
const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const normalizeHtmlText = (html) => html
  .replaceAll("&#39;", "'")
  .replaceAll("’", "'")
  .replaceAll("&amp;", "&")
  .replaceAll("&mdash;", "—");

for (const [route, visualIds] of visualSpecs) {
  const relativePath = route === "homepage" ? "index.html" : path.join(route, "index.html");
  const filePath = path.join(distRoot, relativePath);

  try {
    await access(filePath);
  } catch {
    failures.push(`${route}: missing static output ${relativePath}`);
    continue;
  }

  const html = await readFile(filePath, "utf8");
  assert(html.includes("Read this visual as text"), `${route}: missing collapsed visual text alternative`);
  assert(!html.includes("Accessible reading"), `${route}: legacy visible accessibility block remains`);
  assert(!html.includes("Open step-by-step fallback"), `${route}: legacy expanded fallback label remains`);
  for (const visualId of visualIds) {
    assert(html.includes(`id="${visualId}"`), `${route}: missing visual figure ${visualId}`);
  }
}

const homepage = await readFile(path.join(distRoot, "index.html"), "utf8");
const homepageText = normalizeHtmlText(homepage);
assert(homepageText.includes("Major applied-AI case study"), "Homepage: AIRIS major-case-study hierarchy is missing");
assert(homepageText.includes("AIRIS — Evaluating and Optimizing Enterprise RAG Workloads"), "Homepage: AIRIS title is missing from the case card");

const airis = await readFile(path.join(distRoot, "airis", "index.html"), "utf8");
const airisText = normalizeHtmlText(airis);
assert(airis.includes("visual-figure--airis"), "AIRIS: visual is missing its project accent scope");
assert(airisText.includes("Reduce context, retain checks"), "AIRIS: context visual title does not match the approved visual contract");
assert(airisText.includes("Vector search dominated request time"), "AIRIS: bottleneck visual title does not match the approved visual contract");
assert(airisText.includes("From diagnosis to recommendation"), "AIRIS: handoff visual title does not match the approved visual contract");
assert(airisText.includes("96.1% less local context across six scenarios and ten turns"), "AIRIS: context visual caption is missing approved scope");
assert(airisText.includes("4.8 seconds"), "AIRIS: lower-concurrency observation is missing");
assert(airisText.includes("51.0 seconds"), "AIRIS: higher-concurrency observation is missing");
assert(airisText.includes("76.9%"), "AIRIS: request-time share is missing");
assert(airisText.includes("Several recommendations were later incorporated into the senior engineer's implementation"), "AIRIS: later implementation attribution is missing");
assert(airisText.includes("Citation checks do not prove universal answer quality."), "AIRIS: citation-check boundary is missing");

const safapac = await readFile(path.join(distRoot, "safapac", "index.html"), "utf8");
const safapacText = normalizeHtmlText(safapac);
assert(safapacText.includes("What I rebuilt at SAFAPAC"), "SAFAPAC: transformation title does not match the approved visual contract");
assert(safapac.includes("visual-figure--safapac"), "SAFAPAC: visual is missing its project accent scope");
assert(!safapacText.includes("Hydar's backend"), "SAFAPAC: delivery path should not overstate FastAPI as the complete contribution");
assert(!safapacText.includes("Beta delivery"), "SAFAPAC: delivery visual should not repeat the beta status as an isolated tag");
assert(!safapacText.includes("Internal validation"), "SAFAPAC: stale internal-validation wording remains in the visual");
assert(safapacText.includes("Hydar's assigned engineering scope moved SAFAPAC from an incomplete local application toward an AWS-hosted internal pilot."), "SAFAPAC: transition caption does not match the approved visual contract");
assert(safapacText.includes("Hydar's scope"), "SAFAPAC: dominant engineering scope is missing");
assert(safapacText.includes("Pilot delivery"), "SAFAPAC: pilot outcome anchor is missing");
assert(safapacText.includes("AWS-hosted internal pilot"), "SAFAPAC: internal-pilot outcome is missing");
assert(safapacText.includes("High-level web-to-data delivery within Hydar's SAFAPAC backend, database, and AWS delivery scope."), "SAFAPAC: delivery caption does not match the approved visual contract");
assert(safapacText.includes("Supports"), "SAFAPAC: supporting platform layer is missing");

const anotherEdenAI = await readFile(path.join(distRoot, "anotheredenai", "index.html"), "utf8");
const anotherEdenAIText = normalizeHtmlText(anotherEdenAI);
assert(stylesheet.includes(".visual-art--anotheredenai-pipeline") && stylesheet.includes("justify-self: center;"), "AnotherEdenAI: mobile recommendation-engine card is missing centered placement");
assert(stylesheet.includes("width: min(100%, 32rem);"), "AnotherEdenAI: mobile architecture cards are missing a shared width");
assert(anotherEdenAIText.includes("How AnotherEdenAI generates a recommendation"), "AnotherEdenAI: architecture title does not match the approved visual contract");
assert(anotherEdenAI.includes("visual-figure--anotheredenai"), "AnotherEdenAI: visual is missing its project accent scope");
assert(anotherEdenAIText.includes("An actively developed recommendation system combining typed workflow logic with graph-backed knowledge."), "AnotherEdenAI: pipeline caption does not match the approved visual contract");
assert(anotherEdenAIText.includes("Recommendation engine"), "AnotherEdenAI: recommendation engine layer is missing");
assert(anotherEdenAIText.includes("Knowledge base"), "AnotherEdenAI: knowledge base is missing");
assert(anotherEdenAIText.includes("User input"), "AnotherEdenAI: user input layer is missing");
assert(anotherEdenAIText.includes("Source data → ETL → Neo4j"), "AnotherEdenAI: knowledge path is missing");
assert(anotherEdenAIText.includes("Generate legal candidates"), "AnotherEdenAI: deterministic candidate generation is missing");
assert(anotherEdenAIText.includes("Check legality + feasibility"), "AnotherEdenAI: legality/feasibility boundary is missing");
assert(anotherEdenAIText.includes("Bounded LangGraph analysis"), "AnotherEdenAI: bounded analyzer boundary is missing");
assert(anotherEdenAIText.includes("Validate, correct, or fall back"), "AnotherEdenAI: recommendation boundary is missing");
assert(anotherEdenAIText.includes("Four bounded checks around AnotherEdenAI's AI-assisted recommendation output."), "AnotherEdenAI: guardrails caption does not match the approved visual contract");
assert(anotherEdenAIText.includes("How AnotherEdenAI validates recommendations"), "AnotherEdenAI: safeguards title does not match the approved visual contract");
assert(anotherEdenAIText.includes("Legality rules"), "AnotherEdenAI: legality safeguard is missing");
assert(anotherEdenAIText.includes("Fallback path"), "AnotherEdenAI: fallback safeguard is missing");

const safSkyQuest = await readFile(path.join(distRoot, "saf-sky-quest", "index.html"), "utf8");
const safSkyQuestText = normalizeHtmlText(safSkyQuest);
assert(safSkyQuest.includes("visual-figure--saf-sky-quest"), "SAF Sky Quest: visual is missing its supporting-project accent scope");
assert(safSkyQuestText.includes("From finished app to event closeout"), "SAF Sky Quest: lifecycle title does not match the approved visual contract");
assert(safSkyQuestText.includes("Hydar's rapid hosting and event-infrastructure lifecycle for the SAF Sky Quest activation."), "SAF Sky Quest: lifecycle caption is missing approved ownership context");
assert(safSkyQuestText.includes("Frontend application"), "SAF Sky Quest: frontend attribution is missing from the lifecycle visual");
assert(safSkyQuestText.includes("Cloud delivery + event operations"), "SAF Sky Quest: Hydar's delivery scope is missing from the lifecycle visual");
assert(safSkyQuestText.includes("Receive finished app"), "SAF Sky Quest: receive step is missing");
assert(safSkyQuestText.includes("AWS Lightsail"), "SAF Sky Quest: Lightsail step is missing");
assert(safSkyQuestText.includes("Custom domain + Caddy HTTPS"), "SAF Sky Quest: domain/HTTPS step is missing");
assert(safSkyQuestText.includes("Export runtime data"), "SAF Sky Quest: export step is missing");
assert(safSkyQuestText.includes("Decommission"), "SAF Sky Quest: decommission step is missing");
assert(!safSkyQuestText.includes("29 students"), "SAF Sky Quest: visual must not interpret records as students");
assert(!safSkyQuestText.includes("29 unique users"), "SAF Sky Quest: visual must not interpret records as unique users");

for (const [route, html] of [["homepage", homepage], ["safapac", safapac], ["airis", airis], ["anotheredenai", anotherEdenAI]]) {
  assert(!html.toLowerCase().includes("whatsapp"), `${route}: visual presentation must not expose a phone/WhatsApp contact`);
  assert(!html.includes("private screenshot"), `${route}: visual presentation must not expose private screenshots`);
  assert(!html.includes("copied diagram"), `${route}: visual presentation must not expose copied diagrams`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validated approved visuals: original figure IDs, captions, text alternatives, linear fallbacks, and public-boundary exclusions.");
}
