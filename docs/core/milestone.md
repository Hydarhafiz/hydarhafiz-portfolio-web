# Active milestone: Deployment and launch

- Status: active
- Activated: 2026-09-05
- Approved scope: acquire and connect `hydarhafiz.com`, launch the Astro portfolio through Cloudflare Pages with a protected production path, complete live-site checks, and add the live domain to the balanced and targeted resume outputs after launch

## Outcome

Publish the existing recruiter-facing portfolio at `https://hydarhafiz.com` through a controlled Cloudflare Pages release path. Pull requests must receive a Cloudflare preview and pass the repository's CI checks before Hydar merges them into protected `main`; Hydar remains the sole release approver. The live site must use one canonical apex domain, HTTPS, aggregate privacy-conscious analytics, and a documented rollback path.

After the live-domain and launch checks pass, the canonical resume source and all four generated profiles (`default`, `backend`, `cloud`, and `ai`) must include `https://hydarhafiz.com`. The tracked public PDF remains balanced and phone-free; targeted application PDFs remain local and ignored. A customized LinkedIn announcement is drafted after launch for Hydar's review and manual publication.

## Shared boundaries

- Keep the Astro site static and the public repository disclosure-safe. Do not add credentials, API tokens, private contact data, registrar auth codes, or Cloudflare account details to Git.
- Use `hydarhafiz.com` as the canonical apex host. Attach both the apex and `www` as needed for routing, then permanently redirect `www` to the apex while preserving paths and query strings. Redirect the production `pages.dev` hostname to the canonical domain when Cloudflare supports the configured rule.
- Domain acquisition is the first operational gate. Prefer registering through Cloudflare Registrar when the desired `.com` is available and the account setup is acceptable; otherwise register with a reputable registrar, add the zone to Cloudflare, and update the registrar's nameservers. A registrar transfer to Cloudflare is optional and is not required for Pages hosting.
- Preserve any existing DNS records before changing nameservers. Handle DNSSEC deliberately: disable stale registrar DS/DNSSEC state before delegation changes, then re-enable it through the active provider only after the zone is healthy.
- Connect the GitHub repository through Cloudflare Pages Git integration. Do not use Direct Upload or store a deployment token in the repository.
- Protect `main` by requiring pull requests, successful site CI, and successful Cloudflare deployment checks; disallow direct force-push/deletion. Do not require an additional reviewer approval because this is a solo repository.
- Use Cloudflare Web Analytics for aggregate usage and performance only. Do not add a contact form, behavioral profiling, private analytics data, or a public phone number.
- Add the domain to resume outputs only after the site is live and all launch checks pass. The public default PDF is the only tracked regenerated PDF; Backend, Cloud, and Applied AI variants use the existing ignored private-contact workflow and are never linked from the site.
- Do not publish LinkedIn content automatically, modify the separate AnotherEdenAI repository, or broaden the portfolio's career claims during launch.

## Feature sequence

### Feature 6A — Domain acquisition and Cloudflare DNS onboarding

- Type: configuration / operational migration
- Status: planned
- Outcome: establish verified ownership and authoritative DNS control for `hydarhafiz.com` before the first production deployment.
- Scope: beginner-safe domain registration or transfer guidance; Cloudflare account/domain onboarding; DNS-record inventory and preservation; nameserver delegation; DNSSEC checks; domain status verification; and a concise operator runbook recording the safe order of actions.
- Non-goals: buying a domain automatically, storing payment details or authorization codes, transferring a domain when nameserver delegation is sufficient, changing unrelated DNS records, or publishing the site before the zone is ready.
- Entry gate: Milestone 6 approved; Hydar can access the registrar and Cloudflare account dashboards and is ready to make the external purchase/configuration decisions.
- Exit gate: the domain is registered, the Cloudflare zone is active, the assigned nameservers are authoritative, required DNS records are preserved, registrar/Cloudflare email verification is complete, and no unresolved DNSSEC or transfer-lock condition remains.
- Acceptance:
  - 6A-01: `hydarhafiz.com` is registered to Hydar's intended account, with renewal and registrant-email ownership understood.
  - 6A-02: If registered outside Cloudflare, the zone is onboarded using a full DNS setup and the registrar lists exactly the assigned Cloudflare nameservers; if transferred, the transfer prerequisites and authorization step are completed through the registrar and Cloudflare dashboards.
  - 6A-03: Existing records are reviewed before delegation; DNSSEC/DS records do not leave the zone stuck or unreachable; nameserver propagation is verified with independent DNS lookups.
  - 6A-04: No credential, payment detail, authorization code, or private registrar output enters the repository or the durable documentation.
- Durable evidence: sanitized onboarding/launch runbook and the relevant first-party source links; temporary screenshots, auth codes, dashboard exports, and command output remain local and are purged.
- Route: `builder-executor -> tdd-loop` for repository-side runbook/validation work, with an explicit manual operational checkpoint for purchase, delegation, and verification.
- Human checkpoint: Hydar must perform or approve the domain purchase/transfer, DNS changes, and Cloudflare account authorization. Do not proceed to Pages integration until the zone is active.
- Commit boundary: one focused feature commit for any durable runbook/validation changes owned by this feature; external account state is verified manually and is not represented by secrets in Git.

### Feature 6B — CI, Cloudflare Pages integration, and protected production path

- Type: build / configuration
- Status: planned
- Outcome: make every proposed release buildable, previewable, and merge-gated before it can reach production.
- Scope: a Node 22 CI workflow using the existing lockfile and public-safe validators; Cloudflare Pages Git integration for `Hydarhafiz/hydarhafiz-portfolio-web`; `npm run build` to `dist`; PR previews for non-production branches; production deployment from `main`; and GitHub protection settings matching the solo-release policy.
- Non-goals: a second deployment provider, Direct Upload, a Cloudflare API-token workflow, a new formatter/linter dependency, a merge queue, mandatory reviewer approval, or changes to the application beyond deployment/build requirements.
- Entry gate: 6A passes; the GitHub repository and Cloudflare account are accessible to Hydar; current local checks remain green.
- Exit gate: a test PR produces a Cloudflare preview and CI status; a controlled `main` deployment reaches the Pages project; protected-branch settings require PR + checks and prevent direct destructive pushes; no secret is committed.
- Acceptance:
  - 6B-01: CI installs from `package-lock.json` on Node 22 and runs `astro check`, the static build, public-boundary validation, resume/public-site validators, and `git diff --check` or their centralized equivalents without reading `.private` or other private evidence.
  - 6B-02: Cloudflare Pages is connected to the GitHub repository with production branch `main`, build command `npm run build`, output directory `dist`, and preview deployments enabled for pull requests/non-production branches.
  - 6B-03: `main` requires a pull request and successful named CI/Cloudflare checks, disallows force-push and deletion, and does not require a second reviewer.
  - 6B-04: A preview and production deployment expose the expected static route set without relying on a runtime server or undocumented environment secret.
- Durable evidence: CI workflow, deployment setup runbook, branch-policy record, and durable validators; deployment IDs and ephemeral logs are not committed unless a later release record requires them.
- Route: `builder-executor -> tdd-loop`.
- Human checkpoint: Hydar must authorize the GitHub/Cloudflare connection and manually configure branch protection. The agent must not accept or request credentials in chat or inspect credential files.
- Commit boundary: one focused feature commit containing the CI/build configuration, validators, runbook updates, and milestone status for this feature.

### Feature 6C — Canonical live launch, analytics, and rollback readiness

- Type: build / release configuration
- Status: planned
- Outcome: serve the reviewed portfolio at the canonical domain with correct metadata, redirects, aggregate analytics, and a recoverable production release.
- Scope: production URL configuration in Astro; canonical and social metadata; static robots/sitemap output or an equivalent verified SEO surface; Cloudflare custom-domain attachment; apex/`www` and `pages.dev` redirect rules; HTTPS verification; Cloudflare Web Analytics enablement; final automated/manual launch checks; and rollback runbook verification.
- Non-goals: analytics dashboards containing personal data, custom tracking code unrelated to aggregate analytics, SEO claims based on search ranking, server-side features, public phone exposure, or a visual redesign.
- Entry gate: 6B passes and the Cloudflare Pages project has a successful production deployment available.
- Exit gate: `https://hydarhafiz.com` serves the intended release; alternate hosts redirect consistently; all required routes, links, metadata, accessibility, responsive, theme, disclosure, and resume-download checks pass; analytics is confirmed aggregate-only; and a successful production deployment is identified as the rollback target.
- Acceptance:
  - 6C-01: Astro emits `https://hydarhafiz.com` as the canonical site identity, page canonical URLs, and social URL metadata without stale localhost, Pages, or `www` URLs.
  - 6C-02: The homepage, `/safapac`, `/anotheredenai`, `/resume`, resume PDF, and 404 recovery path work over HTTPS; the public phone-free boundary and approved maturity/ownership wording remain intact.
  - 6C-03: `www.hydarhafiz.com` redirects to the apex with a permanent redirect while preserving the requested path/query; the production `pages.dev` hostname is redirected or otherwise prevented from becoming the canonical public URL.
  - 6C-04: Cloudflare Web Analytics is enabled through the approved aggregate mechanism and verified on valid HTML output without adding private or behavioral data collection to the application.
  - 6C-05: Manual checks cover normal browser use, keyboard/focus behavior, 320px/400% reflow, light/dark themes, reduced motion, print/PDF behavior, link targets, metadata, disclosure safety, and a known-good production rollback path.
- Durable evidence: canonical metadata/SEO validator, launch checklist, sanitized release notes, and rollback instructions. Screenshots, rendered comparisons, analytics exports, and temporary logs remain local unless independently needed as release evidence.
- Route: `builder-executor -> tdd-loop`.
- Human checkpoint: Hydar must approve the first production release, custom-domain/redirect settings, analytics activation, and required manual browser/accessibility/rollback checks.
- Commit boundary: one focused feature commit containing site hardening, validators, and durable launch documentation; external deployment state is verified separately.

### Feature 6D — Post-live resume domain update and LinkedIn announcement draft

- Type: build / documentation
- Status: planned
- Outcome: align the four resume profiles and recruiter-facing launch message with the verified live portfolio URL.
- Scope: add the canonical Website link to the shared resume source; regenerate and validate the balanced public PDF plus Backend, Cloud, and Applied AI variants; rebuild the semantic resume page; reconcile recruiter-profile guidance/README wording; and draft a customized LinkedIn post for manual review.
- Non-goals: adding the phone to public outputs, exposing targeted PDFs, adding a public profile selector, publishing to LinkedIn automatically, or changing career claims merely because the site launched.
- Entry gate: 6C-01 through 6C-05 pass against the live domain, including HTTPS and canonical redirect checks.
- Exit gate: all four PDFs extract the exact live domain; the tracked default remains one-page, searchable, balanced, and phone-free; targeted files remain ignored; the live `/resume` page and PDF link are redeployed and verified; and Hydar has a ready-to-review LinkedIn draft.
- Acceptance:
  - 6D-01: `resume/career-data.json` contains one public Website link for `https://hydarhafiz.com`, and the shared resolver feeds it to `default`, `backend`, `cloud`, and `ai` without duplicating career records.
  - 6D-02: The tracked `public/resume/hydar-hafiz-bin-hydzelan-resume.pdf` and all three ignored application PDFs contain the exact domain, preserve their profile-specific emphasis, remain one readable searchable A4 page, and keep the public default phone-free.
  - 6D-03: The semantic `/resume` page, homepage/footer contact surfaces, PDF download, and profile-alignment guidance use the verified domain without exposing `.private` material.
  - 6D-04: A customized LinkedIn post names the shared software-engineering identity and Backend, Cloud/DevOps, and Applied AI availability; it is presented to Hydar for review and is not published by automation.
- Durable evidence: profile-aware resume validator, tracked balanced PDF, source/provenance notes, reconciled recruiter guidance, and the reviewed launch-copy draft. Targeted PDFs, private contact data, rendered HTML, extraction logs, and post-iteration drafts remain ignored/local.
- Route: `builder-executor -> tdd-loop`.
- Human checkpoint: Hydar reviews the four resume outputs and LinkedIn draft, then manually chooses whether and when to publish the post.
- Commit boundary: one focused feature commit containing the canonical resume URL change, balanced PDF, semantic/recruiter documentation updates, and milestone status. Targeted PDFs and private data are never staged.

## Verification and retention

- Use the existing Node/Astro toolchain and lockfile. Do not add a formatter, linter, dependency, or CI policy unless an implementation blocker makes it necessary and Hydar approves it.
- Required repository checks include `ASTRO_TELEMETRY_DISABLED=1 npm run check`, `ASTRO_TELEMETRY_DISABLED=1 npm run build`, `npm run site:validate`, `npm run homepage:validate`, `npm run case-studies:validate`, `npm run visuals:validate`, `npm run resume:check`, `npm run resume:page:validate`, `npm run profile:self-test`, `bash scripts/check-public-boundary.sh`, and `git diff --check`, with the CI workflow using the public-safe subset appropriate to a clean checkout.
- Required live checks include DNS nameserver resolution, HTTPS certificate and status checks, canonical/alternate-host redirects, all launch routes, PDF download/searchability, metadata, accessibility/responsive/theme behavior, analytics presence, and rollback-target availability.
- Keep durable capability validators, the balanced public PDF, canonical launch docs, and any independently required release evidence. Purge `.sdd/`, targeted PDFs, private contact data, screenshots, rendered comparisons, extraction logs, dashboard exports, DNS/auth/payment details, and failed-attempt output when their role ends.

## Milestone exit gate

- [ ] `hydarhafiz.com` is registered and its Cloudflare DNS zone is active and verified.
- [ ] GitHub PR previews, CI checks, Cloudflare Pages production deployment, and protected `main` operate together with no mandatory reviewer dependency.
- [ ] The live site serves the approved route set over HTTPS with canonical apex metadata, consistent redirects, aggregate analytics, and a verified rollback path.
- [ ] Final disclosure, accessibility, responsive, theme, SEO, link, print, and public-boundary checks pass against the live release.
- [ ] After live verification, the default, Backend, Cloud, and Applied AI resume outputs include `https://hydarhafiz.com`; the tracked default remains balanced and phone-free, and targeted variants remain private.
- [ ] Hydar reviews the customized LinkedIn announcement and publishes it manually only if he chooses.
- [ ] Each completed feature has one focused detailed commit containing its durable code/tests/docs, with temporary outputs and `.sdd/` state purged.

Milestone 6 was explicitly activated by Hydar on 2026-09-05. Domain acquisition and Cloudflare onboarding are the first human-dependent checkpoint; no purchase, transfer, DNS mutation, account connection, analytics activation, or external profile publication is authorized by this planning task alone.
