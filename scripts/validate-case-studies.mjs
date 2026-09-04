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
  assert(html.includes("Adjacent work"), `${route}: missing adjacent-work navigation`);
  assert(html.includes(adjacent), `${route}: missing adjacent flagship work link`);
  assert(html.includes('href="/#work"'), `${route}: missing Featured work recovery link`);
  if (route === "anotheredenai") {
    assert(html.includes('href="https://github.com/Hydarhafiz/AnotherEdenAI"'), "anotheredenai: missing public repository link");
  }
  assert(!html.toLowerCase().includes("whatsapp"), `${route}: must not expose a phone/WhatsApp contact`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validated flagship case studies: typed content, concise scope/status presentation, contents navigation, adjacent work, and public-contact boundary.");
}
