import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const readRepositoryFile = (relativePath) => readFile(path.join(repositoryRoot, relativePath), "utf8");

const packageJson = JSON.parse(await readRepositoryFile("package.json"));
const packageLock = JSON.parse(await readRepositoryFile("package-lock.json"));
const astroConfig = await readRepositoryFile("astro.config.mjs");
const workflow = await readRepositoryFile(".github/workflows/ci.yml");
const resumeRenderer = await readRepositoryFile("scripts/render-resume.mjs");
const pagesRunbook = await readRepositoryFile("docs/launch/pages-deployment.md");
const branchPolicy = await readRepositoryFile("docs/launch/branch-protection.md");

assert(packageJson.engines?.node === ">=22", "package.json: Node.js engine must remain >=22");
assert(packageJson.scripts?.check === "astro check", "package.json: Astro check script is missing");
assert(packageJson.scripts?.build === "astro build", "package.json: static build script is missing");
assert(
  packageJson.scripts?.["deployment:validate"] === "node scripts/validate-deployment-contract.mjs",
  "package.json: deployment validator script is missing",
);
assert(packageLock.lockfileVersion === 3, "package-lock.json: npm lockfile version must remain 3");
assert(astroConfig.includes('output: "static"'), "astro.config.mjs: deployment must remain static");
assert(workflow.includes('CI: "true"'), ".github/workflows/ci.yml: CI runtime flag must be explicit");
assert(workflow.includes("runs-on: ubuntu-24.04"), ".github/workflows/ci.yml: runner image must be pinned for browser compatibility");
assert(workflow.includes("CHROMIUM_PATH: /usr/bin/google-chrome"), ".github/workflows/ci.yml: CI browser path must be explicit");
assert(resumeRenderer.includes("process.env.CHROMIUM_PATH"), "scripts/render-resume.mjs: CI browser path override is missing");
assert(resumeRenderer.includes("timeout: chromiumTimeoutMs"), "scripts/render-resume.mjs: Chromium render timeout is missing");
assert(
  /if \(process\.env\.CI === "true"\)[\s\S]*?chromiumArguments\.unshift\("--no-sandbox"\)/.test(resumeRenderer),
  "scripts/render-resume.mjs: Chromium no-sandbox fallback must be CI-only",
);

for (const requirement of [
  "name: CI",
  "pull_request:",
  "push:",
  "branches:",
  "- main",
  "permissions:",
  "contents: read",
  "actions/checkout@v7",
  "actions/setup-node@v7",
  "node-version: 22",
  "cache: npm",
  "npm ci",
  "ASTRO_TELEMETRY_DISABLED=1 npm run check",
  "ASTRO_TELEMETRY_DISABLED=1 npm run build",
  "npm run deployment:validate",
  "npm run site:validate",
  "npm run homepage:validate",
  "npm run case-studies:validate",
  "npm run visuals:validate",
  "npm run resume:check",
  "npm run resume:page:validate",
  "npm run profile:self-test",
  "bash scripts/check-public-boundary.sh --self-test",
  "bash scripts/check-public-boundary.sh",
  "git diff --check",
]) {
  assert(workflow.includes(requirement), `.github/workflows/ci.yml: missing ${requirement}`);
}

for (const privateReference of [
  ".private",
  "portfolio source",
  "CLOUDFLARE_API_TOKEN",
  "secrets.",
  "wrangler",
]) {
  assert(!workflow.toLowerCase().includes(privateReference.toLowerCase()), `.github/workflows/ci.yml: private reference is present: ${privateReference}`);
}

for (const requirement of [
  "Hydarhafiz/hydarhafiz-portfolio-web",
  "production branch",
  "`main`",
  "`npm run build`",
  "`dist`",
  "`NODE_VERSION`",
  "direct push",
  "automatic production deployments",
  "non-production branches",
  "Direct Upload",
  "Cloudflare API token",
]) {
  assert(pagesRunbook.includes(requirement), `docs/launch/pages-deployment.md: missing ${requirement}`);
}

for (const requirement of [
  "Direct `main` release policy",
  "Direct pushes to `main` | Allowed for Hydar",
  "Require a pull request before merging | Off",
  "Force pushes | Off",
  "Branch deletion | Off",
  "CI / Validate (Node 22)",
  "Cloudflare Pages",
  "0",
]) {
  assert(branchPolicy.includes(requirement), `docs/launch/branch-protection.md: missing ${requirement}`);
}

const staticOutputs = [
  "index.html",
  path.join("safapac", "index.html"),
  path.join("anotheredenai", "index.html"),
  path.join("resume", "index.html"),
  "404.html",
  path.join("resume", "hydar-hafiz-bin-hydzelan-resume.pdf"),
];

for (const relativePath of staticOutputs) {
  try {
    await access(path.join(repositoryRoot, "dist", relativePath));
  } catch {
    failures.push(`dist: missing expected static output ${relativePath}`);
  }
}

const staticOutputFiles = await Promise.all(
  ["index.html", path.join("safapac", "index.html"), path.join("anotheredenai", "index.html"), path.join("resume", "index.html"), "404.html"].map(
    (relativePath) => readRepositoryFile(path.join("dist", relativePath)),
  ),
);

for (const [index, html] of staticOutputFiles.entries()) {
  assert(!html.includes(".private"), `dist HTML ${index}: private path leaked into static output`);
  assert(!html.includes("resume-contact"), `dist HTML ${index}: private contact reference leaked into static output`);
  assert(!html.includes("CLOUDFLARE_API_TOKEN"), `dist HTML ${index}: deployment credential reference leaked into static output`);
}

try {
  await access(path.join(repositoryRoot, "dist", "_worker.js"));
  failures.push("dist: runtime worker output is not allowed for this static deployment");
} catch {
  // Static Astro output correctly has no runtime worker.
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validated deployment contract: Node 22 lockfile install, public-safe CI, static routes, Pages settings, and direct-main policy.");
}
