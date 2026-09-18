import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";
import { listCareerProfiles, resolveCareerProfile } from "../resume/resolve-profile.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function readArgument(name, fallback = undefined) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderRichText(value) {
  return escapeHtml(value).replaceAll(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function link(url, label, ariaLabel = label) {
  return `<a href="${escapeHtml(url)}" aria-label="${escapeHtml(ariaLabel)}">${escapeHtml(label)}</a>`;
}

function renderEntry(entry) {
  const projectLink = entry.url
    ? `<p class="context">${link(entry.url, entry.context, `${entry.name} source repository`)}</p>`
    : "";
  const organization = entry.organization
    ? `${escapeHtml(entry.role)} — ${escapeHtml(entry.organization)}`
    : escapeHtml(entry.name);

  return `
    <article class="entry">
      <div class="entry-heading">
        <h3>${organization}</h3>
        <span class="dates">${escapeHtml(entry.dates)}</span>
      </div>
      ${projectLink}
      <ul>${entry.bullets.map((bullet) => `<li>${renderRichText(bullet)}</li>`).join("")}</ul>
    </article>`;
}

function renderHtml(data, phone, css) {
  const contactItems = [
    link(`mailto:${data.basics.email}`, data.basics.email, "Email Hydar"),
    ...(phone ? [link(`tel:${phone.replaceAll(" ", "")}`, phone, "Call Hydar")] : []),
    ...data.basics.links.map((item) => link(item.url, item.display, item.label)),
  ];
  const resumeLocation = data.basics.resumeLocation ?? data.basics.location;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="${escapeHtml(data.basics.name)}">
    <meta name="description" content="Resume of ${escapeHtml(data.basics.name)}, ${escapeHtml(data.basics.title)}">
    <title>${escapeHtml(data.basics.name)} — ${escapeHtml(data.basics.title)} Resume</title>
    <style>${css}</style>
  </head>
  <body>
    <header>
      <h1>${escapeHtml(data.basics.name)}</h1>
      <p class="headline">${escapeHtml(data.basics.title)}</p>
      <p class="meta">${escapeHtml(resumeLocation)}<span class="separator">|</span>${escapeHtml(data.basics.availability)}</p>
      <p class="contact">${contactItems.join('<span class="separator">|</span>')}</p>
    </header>
    <main>
      <section aria-labelledby="summary-heading">
        <h2 id="summary-heading">Summary</h2>
        <p class="summary">${renderRichText(data.summary)}</p>
      </section>
      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading">Technical Skills</h2>
        ${data.capabilities
          .map(
            (capability) =>
              `<p class="capability"><strong>${escapeHtml(capability.category)}:</strong> ${capability.items.map(escapeHtml).join(" · ")}</p>`,
          )
          .join("")}
      </section>
      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading">Professional Experience</h2>
        ${data.experience.map(renderEntry).join("")}
      </section>
      <section aria-labelledby="project-heading">
        <h2 id="project-heading">Personal Project</h2>
        ${data.projects.map(renderEntry).join("")}
      </section>
      <section aria-labelledby="credentials-heading">
        <h2 id="credentials-heading">Education &amp; Certifications</h2>
        <div class="education">
          <div class="entry-heading">
            <h3>${escapeHtml(data.education.qualification)} — ${escapeHtml(data.education.institution)}</h3>
            <span class="dates">${escapeHtml(data.education.dates)}</span>
          </div>
          <p>${escapeHtml(data.education.detail)}</p>
        </div>
        <ul class="certification-list">
          ${data.certifications
            .map(
              (certification) =>
                `<li>${link(certification.url, certification.name, `Verify ${certification.name}`)} <span class="certification-date">(${escapeHtml(certification.issued)})</span></li>`,
            )
            .join("")}
        </ul>
      </section>
    </main>
  </body>
</html>`;
}

function findChromium(explicitPath) {
  const candidates = [
    explicitPath,
    process.env.CHROMIUM_PATH,
    "/usr/bin/google-chrome",
    "/snap/bin/chromium",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);

  const chromium = candidates.find((candidate) => existsSync(candidate));
  if (!chromium) {
    throw new Error("Chromium was not found. Pass its path with --chromium.");
  }
  return chromium;
}

const profile = readArgument("--profile", "default");
const contactPolicy = readArgument("--contact", "public");
if (!listCareerProfiles().includes(profile)) {
  throw new Error("--profile must be default, backend, cloud, or ai.");
}
if (!new Set(["public", "application"]).has(contactPolicy)) {
  throw new Error("--contact must be either public or application.");
}

const careerSource = JSON.parse(readFileSync(join(root, "resume/career-data.json"), "utf8"));
const careerData = resolveCareerProfile(careerSource, profile);
const css = readFileSync(join(root, "resume/resume.css"), "utf8");
let phone = null;

if (contactPolicy === "application") {
  const privateContactPath = join(root, ".private/resume-contact.json");
  if (!existsSync(privateContactPath)) {
    throw new Error("Private contact data is missing; create .private/resume-contact.json locally.");
  }
  const privateContact = JSON.parse(readFileSync(privateContactPath, "utf8"));
  phone = privateContact.phone;
  if (typeof phone !== "string" || phone.trim().length === 0) {
    throw new Error("Private contact data must contain a non-empty phone string.");
  }
}

const profileSuffix = {
  default: "",
  backend: "_Backend",
  cloud: "_Cloud",
  ai: "_AI",
}[profile];
const defaultOutput = profile === "default" && contactPolicy === "public"
  ? "public/resume/hydar-hafiz-bin-hydzelan-resume.pdf"
  : `.private/Hydar_Hafiz_Resume${profileSuffix}.pdf`;
const outputPath = resolve(root, readArgument("--output", defaultOutput));
const htmlOutput = readArgument("--html-output");
const chromium = findChromium(readArgument("--chromium"));
mkdirSync(join(root, ".private"), { recursive: true });
const temporaryDirectory = mkdtempSync(join(root, ".private/render-"));
const htmlPath = join(temporaryDirectory, `${profile}-${contactPolicy}-resume.html`);
const chromiumArguments = [
  "--headless",
  "--disable-gpu",
  "--disable-dev-shm-usage",
  "--disable-background-networking",
  "--disable-extensions",
  "--no-first-run",
  "--no-pdf-header-footer",
  `--user-data-dir=${join(temporaryDirectory, "chromium-profile")}`,
  `--print-to-pdf=${outputPath}`,
  pathToFileURL(htmlPath).href,
];

if (process.env.CI === "true") {
  chromiumArguments.unshift("--no-sandbox");
}

const chromiumTimeoutMs = process.env.CI === "true" ? 60_000 : 120_000;

try {
  const html = renderHtml(careerData, phone, css);
  writeFileSync(htmlPath, html, "utf8");

  if (htmlOutput) {
    const resolvedHtmlOutput = resolve(root, htmlOutput);
    mkdirSync(dirname(resolvedHtmlOutput), { recursive: true });
    writeFileSync(resolvedHtmlOutput, html, "utf8");
  }

  mkdirSync(dirname(outputPath), { recursive: true });
  const result = spawnSync(
    chromium,
    chromiumArguments,
    { encoding: "utf8", killSignal: "SIGKILL", timeout: chromiumTimeoutMs },
  );

  if (result.error || result.status !== 0 || !existsSync(outputPath)) {
    const details = result.error?.message || result.stderr || result.stdout || "no diagnostic output";
    throw new Error(`Chromium PDF rendering failed: ${details}`);
  }

  console.log(`Rendered ${profile}/${contactPolicy} resume: ${outputPath}`);
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
