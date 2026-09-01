# Active milestone: Portfolio implementation

- Status: active on 2026-09-01
- Activated: 2026-09-01
- Approved scope: implement the first public Astro/TypeScript/MDX portfolio from the approved UX/UI and content contracts

## Outcome

Build the static portfolio experience defined by `docs/ux-ui/specification.md`, using Astro with strict TypeScript, Git-maintained content, accessible responsive presentation, and reusable components. Keep the site recruiter-readable and preserve all approved case-study hierarchy, maturity wording, contribution boundaries, public contact rules, and visual exclusions.

The launch route set is fixed:

- `/` — recruiter-oriented homepage
- `/safapac` — primary professional case study
- `/anotheredenai` — primary personal case study, labelled actively developed
- `/resume` — semantic public resume and PDF action
- custom 404 fallback

AIRIS remains a compact supporting contribution on the homepage and has no dedicated route.

## Shared implementation boundaries

- Source authority remains current repository behavior and verified artifacts, then `resume/career-data.json`, `docs/career/profile-alignment.md`, the approved architecture/boundary/planning documents, and approved Milestone 2 content/visual/disclosure contracts.
- The UX/UI contract in `docs/ux-ui/specification.md` governs visual direction, page hierarchy, responsive states, accessibility, theme behavior, motion, and implementation handoff.
- Use static rendering by default. Hydrate only theme persistence/toggle, mobile navigation, and contents disclosure when needed.
- Keep capabilities, AMIC/PETRONAS experience, credentials, contact links, and selected work visible on the homepage without dedicated About, Skills, Experience, AIRIS, Blog, Writing, or Notes routes.
- Never publish the phone number, private resume overlay, confidential employer material, private screenshots/reports, copied diagrams, internal URLs, credentials, customer/stakeholder data, proprietary formulas, unsupported metrics, or unsupported maturity/ownership/performance claims.
- Do not modify the separate AnotherEdenAI repository, deploy, configure the domain, enable analytics, or publish LinkedIn content in this milestone.

## Feature sequence

### Feature 4A — Astro site foundation

- Type: build
- Status: completed
- Outcome: create the runnable Astro application foundation with the shared site shell and accessible 404 page.
- Scope: Astro/TypeScript project configuration; package scripts and dependency lockfile; global design tokens and Source Sans 3 loading; responsive primitives; shared `SiteLayout`, skip link, header/navigation, mobile navigation, footer, theme toggle, and 404 components; launch route placeholders that do not invent case-study content; and foundation-level validation.
- Non-goals: MDX/content collection implementation, homepage copy, case-study narratives, final project visuals, resume data rendering, deployment, domain, analytics, contact form, or external profile updates.
- Entry gate: approved UX/UI specification and this active milestone are present; worktree is clean; existing resume/content assets remain untouched.
- Exit gate: local Astro dev/build path works; foundation routes render with semantic landmarks; theme and mobile navigation are keyboard-operable; responsive overflow is controlled; 404 recovery works; no unapproved content or private data is introduced.
- Durable outputs: Astro project configuration, reusable shell/components/styles, 404 route, package scripts/lockfile, and capability-focused foundation checks.
- Evidence: `ASTRO_TELEMETRY_DISABLED=1 npm run check`, `ASTRO_TELEMETRY_DISABLED=1 npm run build`, `npm run site:validate`, `git diff --check`, and `bash scripts/check-public-boundary.sh` pass; Hydar manually confirmed the initial design and navigation behavior on 2026-09-01.
- Acceptance:
  - 4A-01: The repository runs an Astro static build with strict TypeScript configuration and scripts documented through package commands.
  - 4A-02: Every page foundation uses the shared shell with skip link, semantic header/nav/main/footer landmarks, one page H1, responsive gutters, and the approved Source Sans 3/local-font direction.
  - 4A-03: Light-first theme tokens and an accessible theme toggle support light/dark states without relying on color alone or causing a theme flash where the implementation can prevent it.
  - 4A-04: Mobile navigation is a real disclosure with accessible state, keyboard operation, Escape close, focus restoration, and no keyboard trap.
  - 4A-05: The custom 404 page provides clear recovery links to home, work, and resume while preserving the global shell.
  - 4A-06: The foundation reflows at the approved compact/standard/wide states and does not introduce page-level horizontal overflow.
  - 4A-07: No case-study claim, private artifact, phone number, deployment configuration, analytics, or external launch work enters the feature.
- Route: `builder-executor -> tdd-loop`
- Human checkpoint: manual visual and keyboard review of the foundation before Feature 4B content integration.
- Commit boundary: one detailed feature commit containing only the foundation implementation, durable checks, and milestone progress.

### Feature 4B — content collection and homepage

- Type: build
- Status: active
- Outcome: map the framework-neutral content and approved career facts into typed Astro content presentation and the recruiter homepage.
- Scope: MDX/content collection schema, approved content entries, homepage hero, selected work hierarchy, AMIC/PETRONAS experience, AIRIS compact contribution, capability groups, certifications, education, contact links, and public resume CTA.
- Non-goals: changing source claims, adding metrics, creating dedicated experience/skills/AIRIS routes, phone exposure, or implementing case-study page layouts.
- Route: `builder-executor -> tdd-loop`

### Feature 4C — flagship case-study routes

- Type: build
- Status: pending
- Outcome: implement reusable case-study presentation for `/safapac` and `/anotheredenai` from the approved structured content.
- Scope: case-study layout, metadata/status/boundary callouts, narrative sections, contents navigation, limitations, source notes, and adjacent-work navigation.
- Non-goals: changing content contracts, claiming production/evaluation maturity, adding screenshots, or implementing unapproved visuals.
- Route: `builder-executor -> tdd-loop`

### Feature 4D — approved visuals and AIRIS presentation

- Type: build
- Status: pending
- Outcome: recreate the approved SAFAPAC, AnotherEdenAI, and AIRIS visuals as accessible original SVG/Astro or appropriately simple Mermaid components.
- Scope: `safapac-transition`, `safapac-delivery`, `anotheredenai-pipeline`, `anotheredenai-guardrails`, and `airis-load-testing`, including captions, approved alt text, legends, responsive transformations, linear fallbacks, and disclosure-safe labels.
- Non-goals: copied diagrams/screenshots, private source reproduction, interactive claims, invented metrics, or diagram behavior that hides content behind animation.
- Route: `builder-executor -> tdd-loop`

### Feature 4E — semantic resume and launch-quality accessibility

- Type: build
- Status: pending
- Outcome: implement the semantic public resume page/PDF action and complete cross-route accessibility, responsive, theme, and content-boundary hardening.
- Scope: `/resume`, public PDF link, career-data reconciliation, print behavior, keyboard/screen-reader review, contrast and reduced-motion checks, responsive checks, SEO basics, and final feature-level content validation.
- Non-goals: deployment, Cloudflare Pages, domain, analytics, LinkedIn launch, or private application resume exposure.
- Route: `builder-executor -> tdd-loop`

## Verification and retention

- Each feature must have an ignored `.sdd/active/milestone-4/<feature>.json` handoff before writes and must stage only its allowed durable paths.
- Keep permanent capability tests/validators that protect supported site behavior; purge handoffs, command ledgers, generated renders, exploratory screenshots, and temporary fixtures after each feature.
- Foundation verification starts with the narrowest Astro/static checks, then broader build and accessibility checks. Manual keyboard, theme, responsive, and visual review is required at the feature checkpoint because it cannot be established by static checks alone.
- At Milestone 4 completion, run the repository-wide test/fixture/artifact disposition sweep and leave deployment/launch work for Milestone 5.

## Milestone exit gate

- [ ] All five launch routes and the custom 404 page are implemented from approved sources.
- [ ] SAFAPAC remains the primary professional case study; AnotherEdenAI remains the primary personal case study and actively developed; AIRIS remains supporting and compact.
- [ ] The site is static by default, strict TypeScript, responsive, keyboard-accessible, theme-aware, reduced-motion aware, and free of page-level overflow.
- [ ] All approved visuals are original/accessible and preserve captions, alternatives, source boundaries, and exclusions.
- [ ] Public resume and homepage facts remain reconciled with career sources, and the phone number remains absent.
- [ ] Astro/type/build/accessibility/content-boundary checks pass; deployment, domain, analytics, and LinkedIn work remain deferred.

Next human checkpoint: review the implemented Feature 4A foundation visually and with keyboard navigation before Feature 4B content integration.
