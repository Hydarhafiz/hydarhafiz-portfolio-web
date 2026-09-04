import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { resolveCareerProfile } from "../resume/resolve-profile.mjs";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resumePath = path.join(repositoryRoot, "dist", "resume", "index.html");
const careerSource = JSON.parse(await readFile(path.join(repositoryRoot, "resume/career-data.json"), "utf8"));
const careerData = resolveCareerProfile(careerSource, "default");

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

try {
  await access(resumePath);
} catch {
  failures.push("/resume: missing built resume page; run the Astro build first");
}

if (failures.length === 0) {
  const html = await readFile(resumePath, "utf8");
  const readableHtml = html.replaceAll("&amp;", "&");
  const h1Count = (html.match(/<h1\b/g) ?? []).length;
  const phonePattern = /\+?60[\s-]?1\d(?:[\s-]?\d){7,8}/;

  assert(h1Count === 1, `/resume: expected one page-level h1, found ${h1Count}`);
  assert(/class="[^\"]*\bresume-page\b/.test(html), "/resume: missing semantic resume page wrapper");
  assert(html.includes('href="/resume/hydar-hafiz-bin-hydzelan-resume.pdf"'), "/resume: missing public PDF action");
  assert(html.includes('download="Hydar_Hafiz_Resume.pdf"'), "/resume: public PDF action must use the approved download name");
  assert(html.includes('aria-label="Public resume contact links"'), "/resume: missing contact navigation label");
  assert(html.includes('aria-labelledby="resume-contents-title"'), "/resume: missing resume contents navigation label");
  assert(html.includes('id="summary"'), "/resume: missing professional summary anchor");
  assert(html.includes('id="capabilities"'), "/resume: missing capabilities anchor");
  assert(html.includes('id="experience"'), "/resume: missing experience anchor");
  assert(html.includes('id="project"'), "/resume: missing selected project anchor");
  assert(html.includes('id="credentials"'), "/resume: missing credentials anchor");
  assert(!phonePattern.test(html), "/resume: public page contains a Malaysian phone number");
  assert(!html.includes(".private") && !html.includes("resume-contact"), "/resume: private contact references leaked into public HTML");

  for (const phrase of [
    careerData.basics.name,
    careerData.basics.title,
    careerData.basics.location,
    careerData.basics.availability,
    careerData.summary,
    ...careerData.experience.flatMap((entry) => [entry.role, entry.organization, ...entry.bullets]),
    ...careerData.projects.flatMap((project) => [project.name, project.context, ...project.bullets]),
    careerData.education.institution,
    careerData.education.qualification,
    ...careerData.certifications.map((certification) => certification.name),
  ]) {
    assert(readableHtml.includes(phrase), `/resume: career-data phrase missing: ${phrase}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validated public resume page: semantic sections, career-data reconciliation, PDF action, contact links, and phone boundary.");
}
