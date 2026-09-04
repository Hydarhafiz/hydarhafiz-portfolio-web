import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const homepagePath = path.join(repositoryRoot, "dist", "index.html");
const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

try {
  await access(homepagePath);
} catch {
  console.error("Homepage: missing dist/index.html; run the production build first.");
  process.exitCode = 1;
}

if (failures.length === 0) {
  const html = await readFile(homepagePath, "utf8");
  const h1Count = (html.match(/<h1\b/g) ?? []).length;

  assert(h1Count === 1, `Homepage: expected one page-level h1, found ${h1Count}`);
  assert(html.includes("Hi, I'm Hydar"), "Homepage: missing requested hero introduction");
  assert(html.includes("Software Engineer — Backend, Cloud &amp; Applied AI"), "Homepage: missing umbrella engineering identity");
  assert(html.includes("Engineering focus"), "Homepage: missing engineering-focus label");
  assert(html.includes("Portrait of Hydar Hafiz bin Hydzelan"), "Homepage: missing accessible profile portrait");
  assert(html.includes("About me"), "Homepage: missing About me section");
  assert(html.includes('section id="about" class="home-section home-section--tinted"'), "Homepage: About me must use the alternating tinted band");
  assert(html.includes("Featured work"), "Homepage: missing Featured work heading");
  assert(html.includes("Work experience"), "Homepage: missing Work experience heading");
  assert(html.includes("Skills &amp; expertise"), "Homepage: missing Skills & expertise heading");
  assert(!html.includes("Systems with a visible engineering boundary."), "Homepage: obsolete work section description remains");
  assert(!html.includes("A primary professional case study, a primary personal project, and one compact supporting contribution."), "Homepage: obsolete work section intro remains");
  assert(!html.includes("Tools are useful when they clarify the work."), "Homepage: obsolete capabilities description remains");
  assert((html.match(/class="skill-card"/g) ?? []).length >= 20, "Homepage: expected individual skill/expertise cards");
  assert((html.match(/<svg/g) ?? []).length >= 10, "Homepage: expected bundled expertise logos");
  assert((html.match(/class="characteristic-card__logo"/g) ?? []).length === 3, "Homepage: expected one logo per characteristic card");
  assert(html.indexOf('id="about"') < html.indexOf('id="work"'), "Homepage: About me must precede Featured work");
  assert(html.includes('id="work"'), "Homepage: missing selected-work landmark");
  assert(html.includes("Primary professional case study"), "Homepage: missing SAFAPAC hierarchy label");
  assert(html.includes("Primary personal case study"), "Homepage: missing AnotherEdenAI hierarchy label");
  assert(html.includes("Supporting contribution"), "Homepage: missing AIRIS supporting label");
  assert(html.includes("SAFAPAC"), "Homepage: missing SAFAPAC content");
  assert(html.includes("AnotherEdenAI"), "Homepage: missing AnotherEdenAI content");
  assert(html.includes('href="https://github.com/Hydarhafiz/AnotherEdenAI"'), "Homepage: missing direct AnotherEdenAI GitHub link");
  assert(html.includes("AIRIS"), "Homepage: missing AIRIS content");
  assert(html.includes("Terraform-managed AWS delivery"), "Homepage: missing approved Terraform/AWS positioning");
  assert(html.includes("optimization recommendations for senior developer/project manager review"), "Homepage: AIRIS recommendation and review boundary is missing");
  assert(!html.includes('href="/airis"'), "Homepage: AIRIS must remain a supporting contribution without a dedicated route");
  assert(html.indexOf('home-introduction__portrait') < html.indexOf('home-introduction__actions'), "Homepage: portrait should precede hero actions in mobile reading order");
  assert(html.includes('id="airis-load-testing"'), "Homepage: missing AIRIS visual");
  assert(html.includes('class="supporting-card__visual"'), "Homepage: AIRIS visual is not integrated into its contribution card");
  assert(html.includes("Supporting contribution: controlled testing, bottleneck diagnosis, and an accepted engineering handoff. No resulting production improvement is claimed."), "Homepage: missing AIRIS visual caption");
  assert(html.includes("Aerospace Malaysia Innovation Centre"), "Homepage: missing AMIC experience");
  assert(html.includes("PETRONAS Digital Sdn Bhd"), "Homepage: missing PETRONAS experience");
  for (const heading of ["Backend", "Cloud &amp; DevOps", "Applied AI", "Supporting Technologies"]) {
    assert(html.includes(heading), `Homepage: missing capability group ${heading}`);
  }
  assert(html.includes("AWS Certified Machine Learning"), "Homepage: missing primary certification");
  assert(html.includes("Machine learning engineering on AWS."), "Homepage: missing certification description");
  assert(html.includes("Credential ID"), "Homepage: missing credential identifiers");
  assert(html.includes("7e465217-d4bb-4080-a529-259747407fa3"), "Homepage: missing AWS ML credential identifier");
  assert(html.includes("b8964358-719b-4a4d-81c2-a0e1e6602550"), "Homepage: missing AWS Cloud credential identifier");
  assert(html.includes("255781426dc44f9c"), "Homepage: missing Azure credential identifier");
  assert((html.match(/class="credential-card"/g) ?? []).length === 3, "Homepage: expected three certification cards");
  assert(html.includes('class="credential-card credential-card--education"'), "Homepage: missing dedicated education card");
  assert(html.includes("Universiti Teknologi PETRONAS"), "Homepage: missing education");
  assert(html.includes("mailto:shogunix.chan@gmail.com"), "Homepage: missing public email contact");
  assert(html.includes("linkedin.com/in/hydar-hafiz-356128233"), "Homepage: missing LinkedIn contact");
  assert(html.includes("github.com/Hydarhafiz"), "Homepage: missing GitHub contact");
  assert(html.includes('href="/resume"'), "Homepage: missing public resume CTA");
  assert(html.includes('href="/resume/hydar-hafiz-bin-hydzelan-resume.pdf"'), "Homepage: missing direct balanced-resume download");
  assert(html.includes('download="Hydar_Hafiz_Resume.pdf"'), "Homepage: balanced-resume download name is missing");
  assert(!html.toLowerCase().includes("whatsapp"), "Homepage: must not expose a phone/WhatsApp contact");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validated homepage: approved work hierarchy, career content, capabilities, credentials, contact links, single h1, and public-contact boundary.");
}
