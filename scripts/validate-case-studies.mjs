import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(repositoryRoot, "dist");
const routes = [
  {
    route: "safapac",
    title: "SAFAPAC",
    adjacent: "AnotherEdenAI"
  },
  {
    route: "airis",
    title: "AIRIS",
    adjacent: "SAFAPAC"
  },
  {
    route: "anotheredenai",
    title: "AnotherEdenAI",
    adjacent: "SAFAPAC"
  }
];
const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const { route, title, adjacent } of routes) {
  const filePath = path.join(distRoot, route, "index.html");

  try {
    await access(filePath);
  } catch {
    failures.push(`${route}: missing static output ${route}/index.html`);
    continue;
  }

  const html = await readFile(filePath, "utf8");
  const normalizedHtml = html.toLowerCase().replaceAll("’", "'");
  const h1Count = (html.match(/<h1\b/g) ?? []).length;

  assert(h1Count === 1, `${route}: expected one page-level h1, found ${h1Count}`);
  assert(html.includes(title), `${route}: missing case-study title`);
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
    const requiredSafapac = [
      "backend &amp; aws engineering for sustainable aviation fuel analysis",
      "aws-hosted internal pilot",
      "6 tea researchers",
      "5 airbus staff",
      "total co2 emissions",
      "carbon intensity",
      "carbon-conversion efficiency",
      "cash flow",
      "npv",
      "irr",
      "payback",
      "independent regression contracts",
      "approved v1.1 dataset",
      "process-feedstock-country relationships",
      "33,047 governed defaults across 12 processes, 22 feedstocks, and 217 countries",
      "draft, publish, and rollback workflows",
      "core superadmin backend apis are complete and meeting-approved",
      "frontend implementation is in progress",
      "direct add, modify, and delete support",
      "33 full calculation-engine executions",
      "reusable prepared inputs",
      "targeted npv projections",
      "50 ms p95 across 10 staging acceptance cycles",
      "$51.27/month average from march–august 2026 across 20 billed aws services",
      "expired tls certificate",
      "automated certificate renewal",
      "six-hour automatic staging shutdown",
    ];
    for (const phrase of requiredSafapac) {
      assert(html.toLowerCase().includes(phrase), `safapac: missing approved narrative evidence: ${phrase}`);
    }
    for (const phrase of ["Terraform-managed", "OIDC authentication", "SSM-based deployment execution", "reduce configuration drift"]) {
      assert(html.toLowerCase().includes(phrase.toLowerCase()), `safapac: missing approved cloud-delivery evidence: ${phrase}`);
    }
    for (const prohibited of [
      "deployed beta",
      "internal validation",
      "productionized",
      "superadmin fully completed",
      "domain experts independently managing everything",
      "worldwide adoption",
      "built the whole product alone",
      "percentage speedup",
    ]) {
      assert(!html.toLowerCase().includes(prohibited), `safapac: prohibited or stale claim is present: ${prohibited}`);
    }
    for (const unsupported of ["Kubernetes", "EKS", "ECS", "Helm", "ArgoCD", "Prometheus", "Grafana"]) {
      assert(!html.toLowerCase().includes(unsupported.toLowerCase()), `safapac: unsupported infrastructure claim is present: ${unsupported}`);
    }
  }
  if (route === "airis") {
    const requiredAiris = [
      "Applied-AI engineering experiments",
      "6-scenario/10-turn controlled experiment",
      "541k to 20.9k local-context tokens",
      "96.1% reduction",
      "10/10 citation checks passed",
      "citation checks does not prove that answer quality universally improved",
      "4.8 seconds at 10 concurrent users",
      "51.0 seconds at 50 concurrent users",
      "76.9% of request time",
      "outbound-LLM behavior",
      "recommendations were reviewed and accepted",
      "several were subsequently incorporated into the senior engineer's implementation",
    ];
    for (const phrase of requiredAiris) {
      assert(normalizedHtml.includes(phrase.toLowerCase()), `airis: missing approved narrative evidence: ${phrase}`);
    }
    for (const prohibited of [
      "implemented every recommendation",
      "implemented all recommendations",
      "we support 50 concurrent users",
      "we achieved universal answer-quality improvement",
      "production-ready",
      "overall architecture owner",
      "10/10 citation checks proved answer quality",
    ]) {
      assert(!normalizedHtml.includes(prohibited), `airis: prohibited or overclaiming wording is present: ${prohibited}`);
    }
  }
  const expectedVisuals = route === "safapac"
    ? ["safapac-transition", "safapac-delivery"]
    : route === "airis"
      ? ["airis-context-experiment", "airis-concurrency-diagnosis", "airis-load-testing"]
      : ["anotheredenai-pipeline", "anotheredenai-guardrails"];
  for (const visualId of expectedVisuals) {
    assert(html.includes(`id="${visualId}"`), `${route}: missing visual ${visualId}`);
  }
  if (route === "safapac") {
    assert(html.indexOf('id="role-and-approach"') < html.indexOf('id="safapac-transition"'), "safapac: transformation visual is not integrated after Role and approach");
    assert(html.indexOf('id="engineering-decisions"') < html.indexOf('id="safapac-delivery"'), "safapac: delivery visual is not integrated after Engineering decisions");
  } else if (route === "airis") {
    assert(html.indexOf('id="controlled-context-experiment"') < html.indexOf('id="airis-context-experiment"'), "airis: context visual is not integrated after Controlled context experiment");
    assert(html.indexOf('id="concurrency-and-bottleneck-diagnosis"') < html.indexOf('id="airis-concurrency-diagnosis"'), "airis: diagnosis visual is not integrated after Concurrency and bottleneck diagnosis");
    assert(html.indexOf('id="engineering-outcome-and-attribution"') < html.indexOf('id="airis-load-testing"'), "airis: handoff visual is not integrated after Engineering outcome and attribution");
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
  console.log("Validated case studies: typed content, concise scope/status presentation, contents navigation, adjacent work, and public-contact boundary.");
}
