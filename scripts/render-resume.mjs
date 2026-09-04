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

function link(url, label, ariaLabel = label) {
  return `<a href="${escapeHtml(url)}" aria-label="${escapeHtml(ariaLabel)}">${escapeHtml(label)}</a>`;
}

function loadResumeFonts() {
  const fontDirectory = join(root, "node_modules/@fontsource/source-sans-3/files");
  const faces = [
    [400, "source-sans-3-latin-400-normal.woff2"],
    [600, "source-sans-3-latin-600-normal.woff2"],
    [700, "source-sans-3-latin-700-normal.woff2"],
  ];

  return faces
    .map(([weight, filename]) => {
      const encodedFont = readFileSync(join(fontDirectory, filename)).toString("base64");
      return `@font-face {
        font-family: "Source Sans 3";
        font-style: normal;
        font-weight: ${weight};
        font-display: block;
        src: url("data:font/woff2;base64,${encodedFont}") format("woff2");
      }`;
    })
    .join("\n");
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
      <ul>${entry.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
    </article>`;
}

function renderHtml(data, phone, css) {
  const contactItems = [
    link(`mailto:${data.basics.email}`, data.basics.email, "Email Hydar"),
    ...(phone ? [link(`tel:${phone.replaceAll(" ", "")}`, phone, "Call Hydar")] : []),
    ...data.basics.links.map((item) => link(item.url, item.display, item.label)),
  ];

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
      <p class="meta">${escapeHtml(data.basics.location)}<span class="separator">•</span>${escapeHtml(data.basics.mobility)}<span class="separator">•</span>${escapeHtml(data.basics.availability)}</p>
      <p class="contact">${contactItems.join('<span class="separator">•</span>')}</p>
    </header>
    <main>
      <section aria-labelledby="summary-heading">
        <h2 id="summary-heading">Professional Summary</h2>
        <p class="summary">${escapeHtml(data.summary)}</p>
      </section>
      <section aria-labelledby="capabilities-heading">
        <h2 id="capabilities-heading">Technical Capabilities</h2>
        ${data.capabilities
          .map(
            (capability) =>
              `<p class="capability"><strong>${escapeHtml(capability.category)}:</strong> ${escapeHtml(capability.items.join(" · "))}</p>`,
          )
          .join("")}
      </section>
      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading">Professional Experience</h2>
        ${data.experience.map(renderEntry).join("")}
      </section>
      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading">Selected Project</h2>
        ${data.projects.map(renderEntry).join("")}
      </section>
      <section aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <div class="education">
          <div class="entry-heading">
            <h3>${escapeHtml(data.education.qualification)} — ${escapeHtml(data.education.institution)}</h3>
            <span class="dates">${escapeHtml(data.education.dates)}</span>
          </div>
          <p>${escapeHtml(data.education.detail)}</p>
        </div>
      </section>
      <section aria-labelledby="certifications-heading">
        <h2 id="certifications-heading">Certifications</h2>
        <ul class="certification-list">
          ${data.certifications
            .map(
              (certification) =>
                `<li>${link(certification.url, certification.name, `Verify ${certification.name}`)} — ${escapeHtml(certification.issued)}</li>`,
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
    "/snap/bin/chromium",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/google-chrome",
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
const css = `${loadResumeFonts()}\n${readFileSync(join(root, "resume/resume.css"), "utf8")}`;
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
    [
      "--headless",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--no-pdf-header-footer",
      `--user-data-dir=${join(temporaryDirectory, "chromium-profile")}`,
      `--print-to-pdf=${outputPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { encoding: "utf8" },
  );

  if (result.status !== 0 || !existsSync(outputPath)) {
    throw new Error(`Chromium PDF rendering failed: ${result.stderr || result.stdout}`);
  }

  console.log(`Rendered ${profile}/${contactPolicy} resume: ${outputPath}`);
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
