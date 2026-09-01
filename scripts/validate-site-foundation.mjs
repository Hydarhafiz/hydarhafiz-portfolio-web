import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(repositoryRoot, "dist");

const routes = [
  ["/", "index.html"],
  ["/safapac", path.join("safapac", "index.html")],
  ["/anotheredenai", path.join("anotheredenai", "index.html")],
  ["/resume", path.join("resume", "index.html")],
  ["/404", "404.html"]
];

const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const [route, relativePath] of routes) {
  const filePath = path.join(distRoot, relativePath);

  try {
    await access(filePath);
  } catch {
    failures.push(`${route}: missing static output ${relativePath}`);
    continue;
  }

  const html = await readFile(filePath, "utf8");
  const h1Count = (html.match(/<h1\b/g) ?? []).length;

  assert(html.includes('<html lang="en">'), `${route}: missing document language`);
  assert(html.includes('<main id="main-content" tabindex="-1">'), `${route}: missing focus target main landmark`);
  assert(html.includes('class="skip-link"'), `${route}: missing skip link`);
  assert(html.includes('class="site-header"'), `${route}: missing shared header`);
  assert(html.includes('class="site-footer"'), `${route}: missing shared footer`);
  assert(html.includes('data-theme-toggle'), `${route}: missing theme control`);
  assert(html.includes('data-mobile-nav'), `${route}: missing mobile navigation disclosure`);
  assert(h1Count === 1, `${route}: expected one page-level h1, found ${h1Count}`);
}

const notFound = await readFile(path.join(distRoot, "404.html"), "utf8");
assert(notFound.includes("This route does not exist."), "404: missing recovery heading");
assert(notFound.includes('href="/"'), "404: missing home recovery link");
assert(notFound.includes('href="/#work"'), "404: missing work recovery link");
assert(notFound.includes('href="/resume"'), "404: missing resume recovery link");

const stylesheet = await readFile(path.join(distRoot, "_astro", (await readFile(path.join(distRoot, "index.html"), "utf8")).match(/href="(\/_astro\/[^\"]+\.css)"/)?.[1]?.split("/").at(-1) ?? ""), "utf8").catch(() => "");
assert(stylesheet.includes("prefers-reduced-motion"), "stylesheet: missing reduced-motion behavior");
assert(stylesheet.includes("--canvas"), "stylesheet: missing design tokens");

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated Astro foundation: ${routes.length} static routes, shared semantics, recovery links, theme/navigation controls, and reduced-motion tokens.`);
}
