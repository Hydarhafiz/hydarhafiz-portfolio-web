import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(repositoryRoot, "dist");
const routes = [
  {
    route: "safapac",
    title: "SAFAPAC",
    status: "Deployed beta / internal validation",
    adjacent: "AnotherEdenAI"
  },
  {
    route: "anotheredenai",
    title: "AnotherEdenAI",
    status: "Actively developed",
    adjacent: "SAFAPAC"
  }
];
const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const { route, title, status, adjacent } of routes) {
  const filePath = path.join(distRoot, route, "index.html");

  try {
    await access(filePath);
  } catch {
    failures.push(`${route}: missing static output ${route}/index.html`);
    continue;
  }

  const html = await readFile(filePath, "utf8");
  const h1Count = (html.match(/<h1\b/g) ?? []).length;

  assert(h1Count === 1, `${route}: expected one page-level h1, found ${h1Count}`);
  assert(html.includes(title), `${route}: missing case-study title`);
  assert(html.includes(status), `${route}: missing approved maturity/status label`);
  assert(html.includes("Scope &amp; status"), `${route}: missing concise scope/status callout`);
  assert(html.includes("Project scope"), `${route}: missing project scope label`);
  assert(!html.includes("Sources &amp; context"), `${route}: verbose source/context block should not be visible`);
  assert(!html.includes("What this page does not claim"), `${route}: verbose disclosure exclusion list should not be visible`);
  assert(html.includes("On this page"), `${route}: missing contents navigation`);
  assert(!html.includes("Visual map"), `${route}: isolated visual map section remains`);
  assert(html.includes("Read this visual as text"), `${route}: missing collapsed visual text alternatives`);
  assert(html.includes(`case-study--${route}`), `${route}: missing project page accent scope`);
  assert(html.includes("Adjacent work"), `${route}: missing adjacent-work navigation`);
  assert(html.includes(adjacent), `${route}: missing adjacent flagship work link`);
  assert(!html.includes('href="/airis"'), `${route}: adjacent work must not link to the AIRIS supporting contribution route`);
  assert(html.includes('href="/#work"'), `${route}: missing Featured work recovery link`);
  if (route === "anotheredenai") {
    assert(html.includes('href="https://github.com/Hydarhafiz/AnotherEdenAI"'), "anotheredenai: missing public repository link");
    for (const phrase of ["typed graph retrieval", "deterministic candidate generation", "constrained LLM refinement", "structured validation", "degraded backend fallback", "opt-in evaluation harness"]) {
      assert(html.toLowerCase().includes(phrase.toLowerCase()), `anotheredenai: missing recruiter-readable AI evidence: ${phrase}`);
    }
    assert(!html.toLowerCase().includes("production-grade"), "anotheredenai: unsupported production-grade claim is present");
    assert(!html.toLowerCase().includes("completed evaluation"), "anotheredenai: unsupported completed-evaluation claim is present");
  }
  if (route === "safapac") {
    for (const phrase of ["Terraform-managed", "OIDC authentication", "SSM-based deployment execution", "reduce configuration drift"]) {
      assert(html.toLowerCase().includes(phrase.toLowerCase()), `safapac: missing approved cloud-delivery evidence: ${phrase}`);
    }
    for (const unsupported of ["Kubernetes", "EKS", "ECS", "Helm", "ArgoCD", "Prometheus", "Grafana"]) {
      assert(!html.toLowerCase().includes(unsupported.toLowerCase()), `safapac: unsupported infrastructure claim is present: ${unsupported}`);
    }
  }
  const expectedVisuals = route === "safapac"
    ? ["safapac-transition", "safapac-delivery"]
    : ["anotheredenai-pipeline", "anotheredenai-guardrails"];
  for (const visualId of expectedVisuals) {
    assert(html.includes(`id="${visualId}"`), `${route}: missing visual ${visualId}`);
  }
  if (route === "safapac") {
    assert(html.indexOf('id="role-and-approach"') < html.indexOf('id="safapac-transition"'), "safapac: transformation visual is not integrated after Role and approach");
    assert(html.indexOf('id="engineering-decisions"') < html.indexOf('id="safapac-delivery"'), "safapac: delivery visual is not integrated after Engineering decisions");
  } else {
    assert(html.indexOf('id="pipeline"') < html.indexOf('id="anotheredenai-pipeline"'), "anotheredenai: architecture visual is not integrated after Pipeline");
    assert(html.indexOf('id="reliability-boundary"') < html.indexOf('id="anotheredenai-guardrails"'), "anotheredenai: safeguards visual is not integrated after Reliability boundary");
  }
  assert(!html.toLowerCase().includes("whatsapp"), `${route}: must not expose a phone/WhatsApp contact`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validated flagship case studies: typed content, concise scope/status presentation, contents navigation, adjacent work, and public-contact boundary.");
}
