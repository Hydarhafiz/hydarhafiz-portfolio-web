# Canonical live launch

Feature 6C hardens the repository for `https://hydarhafiz.com` and records the external Cloudflare checks that cannot be represented safely in Git. The site remains a static Astro build; the repository does not contain Cloudflare credentials, account identifiers, analytics tokens, or private launch evidence.

## Repository contract

- `astro.config.mjs` declares `https://hydarhafiz.com` as the Astro site URL.
- Every HTML route emits a page-specific canonical URL, OpenGraph URL, Twitter URL, title, description, and robots directive.
- `public/robots.txt` points crawlers to the canonical `sitemap.xml`.
- `public/sitemap.xml` lists only the homepage, two approved case studies, and the semantic resume page. The 404 recovery route is excluded.
- Cloudflare Pages Web Analytics is enabled through the Pages dashboard's aggregate mechanism. No Google Analytics, tag manager, custom event tracking, profiling, or application-owned analytics code belongs in the site.

Run the repository-side checks from a clean production build:

```text
ASTRO_TELEMETRY_DISABLED=1 npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run launch:validate
```

The launch validator also checks the public phone-free boundary, private-path markers, valid HTML required for Pages analytics injection, canonical metadata, route outputs, the PDF output, and the 404 recovery page.

## Cloudflare launch sequence

Complete these steps only after Feature 6B's successful production deployment is available.

1. In the Pages project, add `hydarhafiz.com` under **Custom domains** and wait for the apex domain, certificate, and deployment status to become active. The apex must be attached through Pages; a manually created DNS record alone is not sufficient.
2. Add `www.hydarhafiz.com` as needed for the redirect. In Cloudflare **Bulk Redirects**, create a permanent `301` from `www.hydarhafiz.com` to `https://hydarhafiz.com`, preserving the query string, matching subpaths, preserving the path suffix, and including subdomains as appropriate for the list.
3. In the same way, create a permanent `301` from the Pages production hostname (`<project>.pages.dev`) to `https://hydarhafiz.com`. Preserve the query string and path suffix. Keep the actual project hostname in the Cloudflare dashboard or sanitized release record; do not invent or commit an account identifier.
4. Confirm `https://hydarhafiz.com` has a valid certificate and that HTTP requests are upgraded to HTTPS. Check the apex, `www`, and Pages host separately; each alternate host must land on the canonical apex without losing path or query data.
5. In the Pages project, open **Metrics → Web Analytics → Enable**. Pages injects the aggregate beacon on the next deployment. Do not paste a token into this repository and do not add a second analytics implementation.
6. Keep the first successful canonical production deployment available. Record only its public commit/date context as the rollback target; deployment IDs, dashboard exports, and raw logs remain local.

Cloudflare's current guidance: [custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/), [`www` to apex redirects](https://developers.cloudflare.com/pages/how-to/www-redirect/), [Pages-host redirect](https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/), [Pages Web Analytics](https://developers.cloudflare.com/pages/how-to/web-analytics/), and [Pages rollbacks](https://developers.cloudflare.com/pages/configuration/rollbacks/).

## Live checks

From a machine with network access, run the repository validator after the production deployment. Supply the public Pages hostname shown in the dashboard:

```text
npm run launch:live -- --pages-host=<project>.pages.dev
```

The command checks the canonical HTTPS routes, PDF content type, 404 recovery response, Web Analytics beacon, and permanent `www`/Pages redirects while preserving `/resume?launch_check=1`. It does not accept or print credentials.

Then complete these browser checks at `https://hydarhafiz.com`:

- Open `/`, `/safapac`, `/anotheredenai`, `/resume`, the PDF download, and an unknown path.
- Use keyboard-only navigation: skip link, menus, theme control, disclosure controls, links, and visible focus all remain usable.
- Check 320px and 400% zoom/reflow without horizontal clipping or loss of content.
- Check light and dark themes, `prefers-reduced-motion`, normal links, external-link targets, print preview, and PDF searchability.
- Inspect page source for the canonical URL, social URL metadata, robots/sitemap links, and only aggregate Cloudflare analytics. Confirm no phone number, private contact marker, Pages hostname, or `www` URL is exposed as the canonical identity.

## Rollback verification

The rollback target must be a successful **production** deployment from the Pages deployment history; a preview deployment is not a valid target.

1. Before launch, identify the most recent known-good production deployment and record its public commit/date context in the release note or operator checklist.
2. If launch checks fail, stop further promotion. In Pages, open **Deployments**, choose the known-good successful production deployment, and use **Rollback to this deployment**.
3. Re-run the HTTPS route, canonical metadata, redirect, analytics, PDF, 404, disclosure, and browser checks after rollback.
4. Keep the failed commit and raw dashboard output local while the issue is investigated. Do not delete the known-good deployment.

### Operator completion record

Fill this only after the external checks have actually passed. Keep account IDs, tokens, screenshots, and deployment IDs out of Git.

| Check | Result | Sanitized evidence |
| --- | --- | --- |
| Apex custom domain and HTTPS | Passed — 2026-09-16 | Confirmed by Hydar; public URL/status checked |
| `www` → apex redirect | Passed — 2026-09-16 | Confirmed by Hydar; path/query preservation checked |
| Pages host → apex redirect | Passed — 2026-09-16 | Confirmed by Hydar; path/query preservation checked |
| Aggregate Web Analytics | Passed — 2026-09-16 | Confirmed by Hydar; aggregate beacon observed on valid HTML |
| Known-good production rollback target | Passed — 2026-09-16 | Confirmed by Hydar; successful production target identified |
| Browser/accessibility/responsive/print checks | Passed — 2026-09-16 | Confirmed by Hydar; no follow-up recorded |
