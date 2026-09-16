import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(repositoryRoot, "dist");
const canonicalOrigin = "https://hydarhafiz.com";
const liveMode = process.argv.includes("--live");
const pagesHostArgument = process.argv.find((argument) => argument.startsWith("--pages-host="));
const pagesHost = pagesHostArgument?.slice("--pages-host=".length).replace(/^https?:\/\//, "").replace(/\/$/, "");

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const readRepositoryFile = (relativePath) => readFile(path.join(repositoryRoot, relativePath), "utf8");
const readBuiltFile = (relativePath) => readFile(path.join(distRoot, relativePath), "utf8");

const staticRoutes = [
  ["/", "index.html"],
  ["/safapac", path.join("safapac", "index.html")],
  ["/anotheredenai", path.join("anotheredenai", "index.html")],
  ["/resume", path.join("resume", "index.html")],
  ["/404", "404.html"]
];

const expectedCanonicalUrl = (route) => new URL(route, `${canonicalOrigin}/`).toString();

const findMetaContent = (html, attribute, value) => {
  const tag = html.match(new RegExp(`<meta\\b[^>]*${attribute}="${value}"[^>]*>`, "i"))?.[0];
  return tag?.match(/\bcontent="([^"]*)"/i)?.[1] ?? null;
};

const validateHtmlDocument = (route, html) => {
  assert(html.toLowerCase().startsWith("<!doctype html>"), `${route}: missing HTML doctype`);
  assert(html.includes('<html lang="en">'), `${route}: missing document language`);
  assert(html.includes("<head>"), `${route}: missing head element`);
  assert(html.includes("</head>"), `${route}: missing head closing tag`);
  assert(html.includes("<body>"), `${route}: missing body element`);
  assert(html.includes("</html>"), `${route}: missing html closing tag`);
  assert(!/(localhost|127\.0\.0\.1|pages\.dev|www\.hydarhafiz\.com)/i.test(html), `${route}: stale non-canonical host leaked into HTML`);
  assert(!html.includes(".private"), `${route}: private path leaked into HTML`);
  assert(!html.includes("resume-contact"), `${route}: private resume contact marker leaked into HTML`);
  assert(!html.includes("CLOUDFLARE_API_TOKEN"), `${route}: deployment credential marker leaked into HTML`);
  assert(!/(googletagmanager|google-analytics|gtag\(|dataLayer|facebook\.net\/en_US\/fbevents)/i.test(html), `${route}: unrelated behavioral analytics code is present`);
};

const validateStaticContract = async () => {
  const astroConfig = await readRepositoryFile("astro.config.mjs");
  const layout = await readRepositoryFile("src/layouts/SiteLayout.astro");
  const launchRunbook = await readRepositoryFile("docs/launch/live-launch.md");
  const robots = await readBuiltFile("robots.txt");
  const sitemap = await readBuiltFile("sitemap.xml");

  assert(astroConfig.includes('site: "https://hydarhafiz.com"'), "astro.config.mjs: canonical site URL is missing");
  assert(layout.includes('name="robots"'), "SiteLayout: robots metadata is missing");
  assert(layout.includes('property="og:url"'), "SiteLayout: OpenGraph URL metadata is missing");
  assert(layout.includes('name="twitter:url"'), "SiteLayout: Twitter URL metadata is missing");
  assert(launchRunbook.includes("Web Analytics"), "live launch runbook: analytics procedure is missing");
  assert(launchRunbook.includes("rollback"), "live launch runbook: rollback procedure is missing");

  assert(robots.includes("User-agent: *"), "robots.txt: wildcard user-agent is missing");
  assert(robots.includes("Allow: /"), "robots.txt: site-wide allow rule is missing");
  assert(robots.includes(`${canonicalOrigin}/sitemap.xml`), "robots.txt: canonical sitemap URL is missing");
  assert(sitemap.includes("<urlset"), "sitemap.xml: urlset is missing");
  for (const route of staticRoutes.slice(0, -1).map(([route]) => route)) {
    assert(sitemap.includes(`<loc>${expectedCanonicalUrl(route)}</loc>`), `sitemap.xml: missing canonical route ${route}`);
  }
  assert(!sitemap.includes("404"), "sitemap.xml: recovery route must not be indexed");

  for (const [route, relativePath] of staticRoutes) {
    let html;
    try {
      html = await readBuiltFile(relativePath);
    } catch {
      failures.push(`${route}: missing built output ${relativePath}`);
      continue;
    }

    validateHtmlDocument(route, html);
    const canonicalUrl = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    assert(canonicalUrl === expectedCanonicalUrl(route), `${route}: canonical URL must be ${expectedCanonicalUrl(route)}`);
    assert(findMetaContent(html, "property", "og:url") === expectedCanonicalUrl(route), `${route}: OpenGraph URL must match canonical URL`);
    assert(findMetaContent(html, "name", "twitter:url") === expectedCanonicalUrl(route), `${route}: Twitter URL must match canonical URL`);
    assert(findMetaContent(html, "property", "og:title"), `${route}: OpenGraph title is missing`);
    assert(findMetaContent(html, "property", "og:description"), `${route}: OpenGraph description is missing`);
    assert(findMetaContent(html, "name", "twitter:card") === "summary", `${route}: Twitter card metadata is missing`);
  }

  const notFound = await readBuiltFile("404.html");
  assert(findMetaContent(notFound, "name", "robots") === "noindex, follow", "404: recovery page must be noindex");
  assert(notFound.includes("This route does not exist."), "404: recovery heading is missing");
  assert(notFound.includes('href="/"'), "404: home recovery link is missing");
  assert(notFound.includes('href="/resume"'), "404: resume recovery link is missing");
};

const assertLiveResponse = async (url, expectedStatus = 200) => {
  const response = await fetch(url, { redirect: "follow" });
  assert(response.status === expectedStatus, `${url}: expected HTTP ${expectedStatus}, received ${response.status}`);
  assert(new URL(response.url).protocol === "https:", `${url}: final URL is not HTTPS`);
  return response;
};

const validateLiveContract = async () => {
  const livePages = ["/", "/safapac", "/anotheredenai", "/resume"];
  for (const route of livePages) {
    const response = await assertLiveResponse(`${canonicalOrigin}${route}`);
    const html = await response.text();
    validateHtmlDocument(route, html);
    assert(findMetaContent(html, "property", "og:url") === expectedCanonicalUrl(route), `${route}: live OpenGraph URL is not canonical`);
    assert(html.includes("static.cloudflareinsights.com/beacon.min.js") || html.includes("/cdn-cgi/rum"), `${route}: Cloudflare Web Analytics beacon was not observed`);
  }

  const pdfResponse = await assertLiveResponse(`${canonicalOrigin}/resume/hydar-hafiz-bin-hydzelan-resume.pdf`);
  assert(pdfResponse.headers.get("content-type")?.includes("application/pdf"), "live resume PDF: response is not an application/pdf");

  const notFoundResponse = await assertLiveResponse(`${canonicalOrigin}/launch-check-missing-route`, 404);
  assert((await notFoundResponse.text()).includes("This route does not exist."), "live 404: recovery page is missing");

  const wwwResponse = await fetch(`https://www.hydarhafiz.com/resume?launch_check=1`, { redirect: "manual" });
  assert([301, 308].includes(wwwResponse.status), `www redirect: expected permanent redirect, received ${wwwResponse.status}`);
  const wwwLocation = wwwResponse.headers.get("location");
  if (wwwLocation) {
    const target = new URL(wwwLocation, "https://www.hydarhafiz.com");
    assert(target.origin === canonicalOrigin, "www redirect: destination must be the canonical apex");
    assert(target.pathname === "/resume", "www redirect: requested path was not preserved");
    assert(target.search === "?launch_check=1", "www redirect: query string was not preserved");
  } else {
    failures.push("www redirect: Location header is missing");
  }

  if (pagesHost) {
    const pagesResponse = await fetch(`https://${pagesHost}/resume?launch_check=1`, { redirect: "manual" });
    assert([301, 308].includes(pagesResponse.status), `${pagesHost}: expected permanent redirect, received ${pagesResponse.status}`);
    const pagesLocation = pagesResponse.headers.get("location");
    if (pagesLocation) {
      const target = new URL(pagesLocation, `https://${pagesHost}`);
      assert(target.origin === canonicalOrigin, `${pagesHost}: destination must be the canonical apex`);
      assert(target.pathname === "/resume", `${pagesHost}: requested path was not preserved`);
      assert(target.search === "?launch_check=1", `${pagesHost}: query string was not preserved`);
    } else {
      failures.push(`${pagesHost}: Location header is missing`);
    }
  } else {
    console.log("Skipped pages.dev live redirect; rerun with --pages-host=<project>.pages.dev after Pages project setup.");
  }
};

try {
  await validateStaticContract();
  if (liveMode) await validateLiveContract();
} catch (error) {
  failures.push(`launch validator error: ${error instanceof Error ? error.message : String(error)}`);
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(liveMode
    ? "Validated live launch contract: HTTPS routes, canonical metadata, public boundary, analytics beacon, and redirects."
    : "Validated launch contract: canonical metadata, static SEO files, valid HTML output, and aggregate-analytics boundary.");
}
