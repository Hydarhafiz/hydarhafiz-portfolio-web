# Active milestone 7: Evidence-aligned resumes and portfolio

- Status: active
- Activated: 2026-09-16
- Predecessor: Milestone 6 deployment and launch, completed 2026-09-16
- Approved authority: current repository behavior, this milestone, and the committed `docs/career/` registry, with `docs/career/claim-policy.md` governing every public claim

## Outcome

Replace the currently consistent but partly over-claimed career package with three genuinely targeted, one-page application resumes and a recruiter-readable portfolio whose SAFAPAC, AIRIS, and AnotherEdenAI narratives are traceable to the audited career registry.

The Backend resume should lead with Python/FastAPI/PostgreSQL and calculation-contract work; the Cloud resume with evidence-backed infrastructure and delivery controls; and the Applied-AI resume with bounded AI architecture, evaluation discipline, and AIRIS investigation work. The public homepage and balanced resume remain one coherent `Software Engineer — Backend, Cloud & Applied AI` presentation rather than exposing a public profile selector.

## Why this milestone is next

The launch milestone is complete and the current build is healthy, but the 2026-09-16 evidence audit changed the claim boundary after the present resume and site copy were written. Current source and rendered output still describe SAFAPAC as `deployed beta`, `productionized`, and an operated staging/production estate even though `CUR-SAF-01` prohibits deployment/production wording without a sanitized release record and `CUR-SAF-02` leaves live operations conditional. Existing validators assert some of that stale wording, so passing checks currently prove internal consistency rather than registry compliance.

The existing architecture is still suitable: `resume/career-data.json` stores shared facts, profile configurations select and order them, the website consumes only the balanced profile, and project narratives live in typed MDX. The milestone therefore refreshes evidence and validation in place instead of creating separate data stores, resume templates, or portfolio sites.

## Shared boundaries

- Treat `docs/career/{README,claim-policy,SAFAPAC,AIRIS,AnotherEdenAI,job-market-findings}.md` as read-only claim authority during product features. Change one of those sources only through a separately approved evidence-audit feature with stronger evidence. Presentation companions such as `profile-alignment.md` and the launch draft may be reconciled in 7G, but they cannot authorize a claim.
- Do not introduce or strengthen a quantitative result, business impact, implementation attribution, production claim, completion claim, or scale claim beyond the registry's allowed channel and wording boundary.
- A desired stronger statement becomes an explicit evidence-gap checkpoint. Until resolved, omit it or use the weakest registry-authorized fallback; do not block unrelated safe content.
- Preserve temporal and environment qualifiers such as `historical`, `audited snapshot`, `controlled local benchmark`, `tested environment`, `estimate`, and `target/design` wherever the registry requires them.
- Keep SAFAPAC employer/team boundaries, AIRIS recommendation-versus-implementation ownership, and AnotherEdenAI active-development/evaluation boundaries explicit.
- Keep private resumes, the contact overlay, historical source archives, render intermediates, and raw audit material ignored and untracked. Never copy confidential source text, formulas, internal identifiers, screenshots, credentials, or the phone number into public files.
- Reuse the shared career model and renderer. Add shared evidence facts with stable IDs, then let each profile select/order its own subset. Do not fork the resume into independent content files or templates.
- The tracked default PDF and `/resume` page remain balanced and phone-free. Backend, Cloud, and Applied-AI PDFs remain ignored application artifacts and are not linked from the public site.
- Preserve the approved umbrella identity and target-role hierarchy: Backend is the foundation; Cloud/DevOps is a substantial evidence-backed path; Applied AI is an emerging specialization. Do not imply senior, platform/SRE, traditional MLOps, or production-AI maturity without new evidence.
- Each feature runs in one fresh chat, owns exactly one focused feature commit, and stops after its completion. The next feature starts from repository evidence in another fresh chat; no chat silently advances into the next feature.
- Each feature handoff must repeat its allowed paths from this milestone. Any write outside them requires a milestone decision rather than incidental scope expansion.
- Temporary audits, rendered HTML, screenshots, extracted PDF text, and comparison output are local/generated. Promote only durable validators, approved public content, the balanced PDF, and canonical documentation; purge the rest before each feature commit.

## Feature sequence

### Feature 7A — Backend resume content and rendering

- Type/status: build; planned
- Outcome: produce a one-page Backend Software Engineer application resume that prioritizes evidenced backend/data/calculation work and removes unsupported deployment or impact language.
- Registry inputs: `docs/career/README.md`; `claim-policy.md`; `SAFAPAC.md` (`SAF-OWN-01`, `SAF-SCOPE-01`, `SAF-CALC-01`, `SAF-DEFAULT-01`, `SAF-PERF-01`, and `CUR-SAF-*`); `AIRIS.md` (`AIR-ROLE-01` only as supporting experience unless another allowed claim earns space); `AnotherEdenAI.md` (`AE-ARCH-01`, `AE-EVAL-01`, `AE-SEARCH-01`); `job-market-findings.md`; and the current private Backend PDF as wording/layout input only.
- Scope: curate shared backend evidence items and the `backend` profile selection/order; refine the shared renderer or print CSS only where the Backend artifact proves a rendering need; add profile-aware validation for claim qualifiers and forbidden wording; render the ignored Backend PDF.
- Non-goals: rewriting the Cloud or Applied-AI profile, regenerating the tracked balanced PDF, changing case studies, adding unverified counts, or redesigning the resume template.
- Allowed paths: `resume/career-data.json`, `resume/resolve-profile.mjs`, `resume/resolve-profile.d.mts`, `resume/resume.css`, `scripts/render-resume.mjs`, `scripts/validate-resume.mjs`, `package.json` only if an existing resume command must be composed, `.private/Hydar_Hafiz_Resume_Backend.pdf` as an ignored output, and `docs/core/milestone.md`.
- Acceptance:
  - `7A-01`: the title, summary, capabilities, and evidence order clearly target Python/FastAPI/PostgreSQL backend roles without implying seniority or general product ownership.
  - `7A-02`: SAFAPAC wording describes contribution, contracts, validation, and testability within the registry boundary; `deployed`, `productionized`, live operations, customer impact, and unsupported collaboration counts are absent.
  - `7A-03`: every included number or outcome is mapped to a registry ID and retains required snapshot/local/test qualifiers; conditional metrics are omitted unless their upgrade evidence is accepted first. Any retained AnotherEdenAI architecture statement uses historical-snapshot wording unless its public source revision is freshly checked.
  - `7A-04`: the ignored application PDF is one readable A4 page with ordered searchable text, correct metadata and links, natural Backend keywords, and the private phone only through the existing contact overlay.
  - `7A-05`: changes to shared source or rendering do not alter the selected content of the Cloud, AI, or default profiles except for removal of a registry-prohibited shared statement; all affected profiles still resolve and validate structurally.
- Verification: `npm run resume:render:backend`; `npm run resume:validate:backend`; `npm run profile:self-test`; a resolver snapshot/assertion covering all four profiles; `node --check` for touched scripts; `git diff --check`; and a local extracted-text comparison against the approved Backend selection.
- Claim-safety check: create a temporary bullet-to-registry mapping during execution, fail the validator on `deployed beta`, `productionized`, unqualified production/staging operation, unsupported user/team counts, or unqualified local metrics, then purge the mapping unless a small reusable machine-readable contract is needed by the validator.
- Human checkpoint: only if retaining `Owned backend, database, and AWS delivery` under `SAF-OWN-01`. Repository evidence cannot prove the assignment boundary; ask Hydar to confirm that exact bounded responsibility. If not confirmed, use a contribution-led fallback and continue.
- Route/commit: `builder-executor -> tdd-loop`; one Backend-resume feature commit containing source, durable validation, and milestone status. The ignored PDF is manually reviewed but never staged.

### Feature 7B — Cloud/DevOps resume content and rendering

- Type/status: build; planned after 7A
- Outcome: produce a one-page Cloud & DevOps Engineer application resume centered on evidenced AWS/IaC/delivery controls without presenting repository-defined infrastructure as a proven live production estate.
- Registry inputs: `docs/career/README.md`; `claim-policy.md`; `SAFAPAC.md` (`SAF-OWN-01`, `SAF-OPS-01`, `SAF-OPS-02`, `SAF-CALC-01`, `CUR-SAF-01`, `CUR-SAF-02`, `CUR-SAF-03`); and `job-market-findings.md` for targeting diagnosis, not as proof of operational experience.
- Scope: curate cloud evidence items and the `cloud` selection/order; emphasize Terraform, Docker, GitHub Actions, OIDC, SSM, Linux/Nginx, security/release controls, and application-to-infrastructure understanding only at the evidence level the registry permits; render and validate the ignored Cloud PDF.
- Non-goals: claiming successful production deployment, uptime, incident reduction, cost savings, Kubernetes, broad SRE/platform ownership, or inventing troubleshooting/backup/recovery incidents because job descriptions value them.
- Allowed paths: `resume/career-data.json`, `resume/resolve-profile.mjs`, `resume/resolve-profile.d.mts`, `resume/resume.css`, `scripts/render-resume.mjs`, `scripts/validate-resume.mjs`, `package.json` only for existing resume command composition, `.private/Hydar_Hafiz_Resume_Cloud.pdf` as an ignored output, and `docs/core/milestone.md`.
- Acceptance:
  - `7B-01`: the title, summary, capability order, and first experience bullets make the Cloud/IaC delivery story scannable without obscuring the Backend foundation.
  - `7B-02`: architecture estimates are labelled as design/estimate; repository controls are described as defined or verified in the audited archive; no wording implies applied production infrastructure or an operated live estate without upgraded evidence.
  - `7B-03`: no unsupported Kubernetes, SRE, observability, incident, backup/recovery, scale, savings, or production-performance claim is added to close a market gap.
  - `7B-04`: the ignored PDF meets the same one-page, searchable, link, metadata, contact, and natural-keyword contract as 7A, with no cramped or clipped cloud capability block.
  - `7B-05`: shared changes leave the other three profile resolutions structurally valid and claim-safe.
- Verification: `npm run resume:render:cloud`; `npm run resume:validate:cloud`; all-profile resolver assertions; `npm run profile:self-test`; `node --check` for touched scripts; `git diff --check`; and local extracted-text/layout review.
- Claim-safety check: validator coverage must distinguish `designed/defined/configured` from `deployed/operated/achieved`, reject unqualified `staging and production`, and reject cost/capacity language without `estimated` or `target/design` as required.
- Human checkpoint: only if Hydar wants live-operation, successful-deployment, or production-environment wording. Require a sanitized deployment/release or operational record plus bounded responsibility confirmation; otherwise retain the archive/design fallback and continue.
- Route/commit: `builder-executor -> tdd-loop`; one Cloud-resume feature commit. The targeted PDF remains ignored.

### Feature 7C — Applied-AI resume content and rendering

- Type/status: build; planned after 7B
- Outcome: produce a one-page Applied AI Engineer application resume that leads with deterministic/LLM boundaries, evaluation discipline, and AI workload investigation rather than unsupported model-quality or production-AI claims.
- Registry inputs: `docs/career/README.md`; `claim-policy.md`; all claims in `AIRIS.md`, especially `AIR-LOAD-01..03`, `AIR-TOKEN-01`, `AIR-ATTR-01`, and `AIR-ROLE-01`; all claims in `AnotherEdenAI.md`, especially `AE-ARCH-01`, `AE-EVAL-01`, `AE-SEARCH-01`, `AE-GUARD-01`, `AE-TEST-01`, and the `AE-EVAL-02` trade-off; plus current private AI PDF wording.
- Scope: curate AI evidence items and the `ai` selection/order; preserve AIRIS recommendation/implementation attribution; use current AnotherEdenAI implementation language only after a source check at an identified public revision, otherwise use registry-authorized historical-snapshot wording; render and validate the ignored AI PDF.
- Non-goals: `93.5% accuracy`, hallucination elimination, optimal/guaranteed recommendations, measured cost savings, all-tests-pass wording, production readiness, or accepted C2 quality.
- Allowed paths: `resume/career-data.json`, `resume/resolve-profile.mjs`, `resume/resolve-profile.d.mts`, `resume/resume.css`, `scripts/render-resume.mjs`, `scripts/validate-resume.mjs`, `docs/core/planning-sources.md` only for an identified fresh public-source revision or an unresolved availability gap, `package.json` only for existing resume command composition, `.private/Hydar_Hafiz_Resume_AI.pdf` as an ignored output, and `docs/core/milestone.md`.
- Acceptance:
  - `7C-01`: the summary and first evidence items communicate reliable applied-AI engineering through structured retrieval, deterministic legality/search, bounded analyzer authority, validation, fallback, and evaluation.
  - `7C-02`: AIRIS bullets state testing, diagnosis, reporting, and recommendations for senior review; they never imply Hydar implemented later changes or produced a measured production improvement.
  - `7C-03`: every AnotherEdenAI implementation claim is tied either to a fresh identified source revision or an explicit audited-snapshot qualifier; any evaluation metric includes its denominator and adverse trade-off where required.
  - `7C-04`: the ignored PDF satisfies the one-page ATS/render/contact contract and uses natural Applied-AI keywords without keyword stuffing or unsupported MLOps terminology.
  - `7C-05`: shared changes leave Backend, Cloud, and default profile resolution claim-safe.
- Verification: fresh read-only source/revision check when available; `npm run resume:render:ai`; `npm run resume:validate:ai`; all-profile resolver assertions; `npm run profile:self-test`; `node --check`; `git diff --check`; and local extracted-text/layout review.
- Claim-safety check: validator coverage rejects causal implementation language for AIRIS and rejects `accuracy`, `production-ready`, `hallucination-free`, guaranteed outcomes, unqualified live counts, token savings, or all-555-tests-pass wording. It must distinguish configured bounds from achieved outcomes.
- Human checkpoint: none by default. If stronger C2 or current-live behavior wording is desired, create an evidence-gap checkpoint; C2 acceptance additionally requires the registry's human precision/review-timing decision. The default feature omits that stronger claim and continues.
- Route/commit: `builder-executor -> tdd-loop`; one Applied-AI-resume feature commit. The targeted PDF remains ignored.

### Feature 7D — SAFAPAC portfolio case study

- Type/status: build; planned after 7C
- Outcome: replace the current deployment-led SAFAPAC page with a defensible historical professional case study about backend/data/calculation contracts and AWS pilot/delivery design.
- Registry inputs: `docs/career/README.md`; `claim-policy.md`; all of `SAFAPAC.md`, with special enforcement of `CUR-SAF-01..04`; `docs/core/content-boundary.md`; and the current SAFAPAC MDX, framework-neutral narrative, disclosure record, and visuals as wording being audited rather than proof.
- Scope: rewrite the SAFAPAC content and status; keep employer/team attribution and confidentiality boundaries; update its original visuals and validator expectations where their `beta delivered`, production, or live-operation semantics conflict with the registry; retain the existing route and shared case-study shell.
- Non-goals: reproducing raw archive material, publishing formulas/defaults/internal topology, asserting deployment, adding conditional `30,000+` records, or using repository inventory counts without the registry's required identity upgrade.
- Allowed paths: `src/content/case-studies/safapac.mdx`, `docs/content/case-studies/safapac.md`, `docs/content/disclosure/safapac.md`, `docs/content/visual-contracts/safapac.md`, `docs/core/content-boundary.md`, the SAFAPAC-specific sections of `docs/ux-ui/specification.md`, `src/pages/safapac.astro`, `src/components/CaseStudyPage.astro`, `src/components/SafapacTransition.astro`, `src/components/SafapacDelivery.astro`, `src/components/SafapacSectionHeading.astro`, `src/styles/global.css`, `scripts/validate-case-studies.mjs`, `scripts/validate-visuals.mjs`, `docs/core/planning-sources.md` only for an accepted evidence upgrade/gap, and `docs/core/milestone.md`.
- Acceptance:
  - `7D-01`: page status, summary, narrative, visuals, captions, alt text, and metadata contain no `deployed beta`, `productionized`, `beta delivered`, operated-live-estate, or implied customer/adoption claim.
  - `7D-02`: the story clearly separates self-attested responsibility, verified historical repository behavior, target/design architecture, local benchmarks, and unresolved live-operation evidence.
  - `7D-03`: calculation/default-governance details appear only at the implementation state and channel authorized by the registry; conditional or identity-gated metrics are absent unless their checkpoint passes first.
  - `7D-04`: the page remains recruiter-readable, navigable, responsive, keyboard accessible, theme-safe, and useful even when all unresolved metrics are omitted.
  - `7D-05`: public output contains no proprietary formula, source excerpt, private identifier, copied diagram, internal URL, or private source path.
- Verification: `ASTRO_TELEMETRY_DISABLED=1 npm run check`; build; `npm run case-studies:validate`; `npm run visuals:validate`; `npm run site:validate`; `bash scripts/check-public-boundary.sh`; a registry-ID claim scan; and `git diff --check`.
- Claim-safety check: every material status, ownership, implementation, metric, and outcome sentence must cite a SAF registry ID in the temporary audit. The validator must make the current prohibited deployment/production wording fail.
- Human checkpoint: bounded ownership wording under `SAF-OWN-01` requires Hydar's confirmation. Deployment/live-operation wording requires the registry's sanitized operational proof and is otherwise excluded. The feature proceeds with a historical/design narrative if neither upgrade is supplied.
- Route/commit: `contract-auditor -> builder-executor -> tdd-loop`; one SAFAPAC case-study feature commit.

### Feature 7E — AIRIS portfolio case study

- Type/status: build; planned after 7D
- Outcome: add a dedicated but explicitly supporting AIRIS case-study route that demonstrates measurement quality, bottleneck isolation, controlled token experimentation, and recommendation handoff without implying implementation or production impact.
- Registry inputs: `docs/career/README.md`; `claim-policy.md`; all of `AIRIS.md`; `docs/core/content-boundary.md`; and the existing AIRIS compact MDX/disclosure/visual sources.
- Scope: create `/airis`; expand the approved supporting narrative using registry-authorized historical/local evidence; preserve the supporting hierarchy on the homepage and adjacent navigation; adapt the shared case-study shell and AIRIS visual as needed; add the route to static validation and sitemap surfaces.
- Non-goals: promoting AIRIS above the two flagship projects, publishing private report/configuration detail, claiming supported production concurrency, fixes, cost savings, adoption, or recommendation implementation.
- Allowed paths: `src/content/case-studies/airis.mdx`, `docs/content/case-studies/airis.md`, `docs/content/disclosure/airis.md`, `docs/content/visual-contracts/airis.md`, `docs/core/architecture.md`, the AIRIS route/hierarchy sections of `docs/ux-ui/specification.md`, `src/pages/airis.astro`, `src/pages/index.astro` only for the case-study link, `src/components/CaseStudyPage.astro`, `src/components/CaseStudyCard.astro`, `src/components/AirisLoadTesting.astro`, `src/styles/global.css`, `src/content.config.ts` only if supporting-route schema needs clarification, `public/sitemap.xml`, `scripts/validate-case-studies.mjs`, `scripts/validate-homepage.mjs`, `scripts/validate-site-foundation.mjs`, `scripts/validate-visuals.mjs`, and `docs/core/milestone.md`.
- Acceptance:
  - `7E-01`: `/airis` is statically built and linked as a supporting contribution, while SAFAPAC and AnotherEdenAI remain the primary professional/personal case studies.
  - `7E-02`: the page explains the three-workflow test scope, bottleneck analysis, and recommendation handoff; exact load/token metrics appear only with historical/tested/local denominators and registry-authorized wording.
  - `7E-03`: the local RAG experiment, if used, retains `controlled local`, `6 scenarios/10 turns`, and `10/10 citation checks`; it is never translated into provider cost or production savings.
  - `7E-04`: recommendation-versus-implementation ownership is explicit in prose, visual semantics, captions, and alt text; no connector or outcome implies a production fix.
  - `7E-05`: the page passes the shared accessibility, responsive, theme, disclosure, and route/navigation contracts.
- Verification: Astro check/build; `npm run site:validate`; `npm run homepage:validate`; `npm run case-studies:validate`; `npm run visuals:validate`; public-boundary scan; registry-ID claim scan; sitemap check; and `git diff --check`.
- Claim-safety check: validate required environment/denominator qualifiers and reject `supported 50 users`, production latency/cost/reliability improvement, implementation causality, or disclosure of private service/configuration details.
- Human checkpoint: none for the registry-authorized narrative. Any claim that a recommendation was implemented or improved production becomes a separate evidence gap requiring a causal PR/commit/issue/review record; omit it and continue.
- Route/commit: `builder-executor -> tdd-loop`; one AIRIS case-study feature commit.

### Feature 7F — AnotherEdenAI portfolio case study

- Type/status: build; planned after 7E
- Outcome: deepen the active-development case study with audited architecture, deterministic legality/search evidence, guardrails, and the honest C2 recall/precision gate.
- Registry inputs: `docs/career/README.md`; `claim-policy.md`; all of `AnotherEdenAI.md`; `docs/core/content-boundary.md`; current AnotherEdenAI MDX/framework-neutral/disclosure/visual sources; and a fresh public-repository source identity when available.
- Scope: recheck the public project at an identified revision; reconcile current implementation wording; add only registry-authorized historical/evaluation facts with their qualifiers; make the C2 adverse trade-off and unresolved review gate legible; update diagrams and validators where needed.
- Non-goals: changing the AnotherEdenAI repository, completing its C2 review, claiming production readiness/live deployment, presenting 93.5% as accuracy, claiming reduced review effort, or publishing current graph totals without a fresh accepted replay.
- Allowed paths: `src/content/case-studies/anotheredenai.mdx`, `docs/content/case-studies/anotheredenai.md`, `docs/content/disclosure/anotheredenai.md`, `docs/content/visual-contracts/anotheredenai.md`, `src/pages/anotheredenai.astro`, `src/components/CaseStudyPage.astro`, `src/components/AnotherEdenAIPipeline.astro`, `src/components/AnotherEdenAIGuardrails.astro`, `src/components/AnotherEdenAISectionHeading.astro`, `src/styles/global.css`, `scripts/validate-case-studies.mjs`, `scripts/validate-visuals.mjs`, `docs/core/planning-sources.md` for the checked revision/gap, and `docs/core/milestone.md`.
- Acceptance:
  - `7F-01`: every current implementation statement is reproduced at a named public revision or recast as historical-snapshot evidence; the page remains labelled `actively developed`.
  - `7F-02`: deterministic legality, bounded search, constrained analyzer authority, structured validation, and fallback are explained as architecture/guardrails rather than guaranteed outcomes.
  - `7F-03`: if shown, `367/367`, `31 cases`, bounded-search values, test inventory, or graph/catalog counts retain their exact registry meanings and temporal/collection/pass qualifications.
  - `7F-04`: the C2 section presents recall and precision together, names the held-out denominator, and states that the precision regression triggered a review checkpoint; it does not imply accepted quality or reduced labor.
  - `7F-05`: public content and visuals remain responsive, accessible, source-safe, and free of unsupported maturity, factuality, quality, cost, and gameplay-success claims.
- Verification: fresh source/revision audit or explicit unavailable-source fallback; Astro check/build; case-study, visual, site, and public-boundary validators; registry-ID claim scan; link check to the public repository; and `git diff --check`.
- Claim-safety check: validator scenarios must reject `production-grade`, `93.5% accuracy`, hallucination elimination, guaranteed legal/optimal/winning teams, all-555-tests-pass, current live graph counts, and token/cost reduction claims.
- Human checkpoint: none for presenting the unresolved C2 trade-off. Only a proposal to call C2 accepted or claim review improvement requires the registry-defined human review/timing checkpoint; absent that decision, keep the no-go state and continue.
- Route/commit: `contract-auditor -> builder-executor -> tdd-loop`; one AnotherEdenAI case-study feature commit.

### Feature 7G — Homepage, balanced resume, and cross-page positioning

- Type/status: build/documentation; planned after 7F
- Outcome: reconcile the homepage, project cards, semantic resume, tracked balanced PDF, metadata, and recruiter-facing guidance around the completed targeted resumes and case studies.
- Registry inputs: every file in `docs/career/`, with project-specific wording governed by the three evidence files and global wording governed by `claim-policy.md`; `job-market-findings.md` informs hierarchy only and does not authorize claims.
- Scope: select the balanced profile from the shared evidence items produced in 7A-7C; regenerate the public phone-free PDF; revise homepage/about/project positioning and links; align site metadata and the semantic resume; reconcile committed LinkedIn/GitHub guidance and the old launch draft so neither remains an `approved` source of prohibited wording. No external profile is changed or post published.
- Non-goals: public resume selectors, separate portfolio variants, external account edits, a visual redesign, new routes beyond the approved AIRIS route, or new claims.
- Allowed paths: `resume/career-data.json`, `resume/resolve-profile.mjs`, `resume/resolve-profile.d.mts`, `resume/resume.css`, `public/resume/hydar-hafiz-bin-hydzelan-resume.pdf`, `src/pages/index.astro`, `src/pages/resume.astro`, `src/components/ResumePage.astro`, `src/components/ExperienceList.astro`, `src/components/SkillExpertise.astro`, `src/components/CaseStudyCard.astro`, `src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`, `src/layouts/SiteLayout.astro`, `src/styles/global.css`, `docs/career/profile-alignment.md`, `docs/career/linkedin-announcement-draft.md`, `README.md`, `scripts/validate-homepage.mjs`, `scripts/validate-resume-page.mjs`, `scripts/validate-resume.mjs`, `scripts/validate-profile-alignment.mjs`, `scripts/validate-linkedin-launch.mjs`, a new `scripts/validate-career-claims.mjs` if cross-surface assertions cannot fit cleanly in the existing validators, and `docs/core/milestone.md`.
- Acceptance:
  - `7G-01`: the homepage and balanced resume lead with Backend while giving Cloud/DevOps and Applied AI distinct evidence-backed paths under the approved umbrella identity.
  - `7G-02`: SAFAPAC, AIRIS, and AnotherEdenAI summaries/statuses match their completed case studies and registry boundaries; all three case studies are reachable with the intended flagship/supporting hierarchy.
  - `7G-03`: the default profile uses only shared approved facts, remains balanced rather than becoming a fourth targeted resume, and produces a one-page searchable phone-free PDF plus matching `/resume` page.
  - `7G-04`: recruiter-facing guidance and the launch draft are either reconciled to the new claim-safe copy or clearly marked superseded; no file remains authoritative for registry-prohibited deployment/production language.
  - `7G-05`: titles, dates, availability, links, certification facts, maturity labels, ownership boundaries, and public-contact policy are consistent across homepage, resume page/PDF, case-study cards, footer/header, metadata, README, and committed guidance.
- Verification: render/validate the default resume; validate all four resolved profiles; Astro check/build; homepage, resume-page, profile, LinkedIn-copy, case-study, site, visual, and public-boundary validators; metadata/link checks; `git diff --check`; and local public-PDF text/layout review.
- Claim-safety check: build a durable validator contract that compares shared public claims and prohibited phrase/context rules across source JSON, generated PDF text, built pages, README, and recruiter guidance. Phrase matching supplements, but does not replace, a registry-ID review of material claims.
- Human checkpoint: none for content authority. Defer subjective final visual/PDF approval to 7H so this feature does not duplicate the required manual checkpoint.
- Route/commit: `builder-executor -> tdd-loop`; one cross-page positioning feature commit containing the regenerated tracked balanced PDF.

### Feature 7H — Final ATS, public-claim, attribution, accessibility, responsiveness, and consistency audit

- Type/status: verification-only / evidence remediation; planned last
- Outcome: prove that all milestone outputs are technically sound, recruiter-usable, and registry-safe, repair only discovered contract/evidence gaps, then close the milestone.
- Registry inputs: all of `docs/career/`; all completed feature commits; current generated PDFs/pages; `docs/core/architecture.md`; `content-boundary.md`; and the validators/tests that claim completion.
- Scope: independent claim trace across source, selectors, PDFs, MDX, built pages, visuals, metadata, guidance, and validators; ATS extraction and one-page review for all four profiles; public/private boundary review; attribution and temporal-qualifier review; keyboard/semantics/contrast/reflow/theme/reduced-motion/print checks; cross-route content consistency; durable regression remediation; milestone/roadmap completion update.
- Non-goals: new positioning, new content themes, stronger claims, visual redesign, deployment/account changes, external profile publication, or unrelated cleanup.
- Allowed paths: `resume/{career-data.json,resolve-profile.mjs,resolve-profile.d.mts,resume.css}`, `public/resume/hydar-hafiz-bin-hydzelan-resume.pdf`, `.private/Hydar_Hafiz_Resume_{Backend,Cloud,AI}.pdf` and `.private/render-*` as ignored/generated outputs only, `src/pages/{index,resume,safapac,airis,anotheredenai,404}.astro`, `src/content/case-studies/{safapac,airis,anotheredenai}.mdx`, `src/components/{AirisLoadTesting,AnotherEdenAIGuardrails,AnotherEdenAIPipeline,AnotherEdenAISectionHeading,CaseStudyCard,CaseStudyPage,ExperienceList,ResumePage,SafapacDelivery,SafapacSectionHeading,SafapacTransition,SiteFooter,SiteHeader,SkillExpertise,VisualFigure}.astro`, `src/layouts/SiteLayout.astro`, `src/styles/global.css`, `docs/content/case-studies/{safapac,airis,anotheredenai}.md`, `docs/content/disclosure/{safapac,airis,anotheredenai}.md`, `docs/content/visual-contracts/{shared,safapac,airis,anotheredenai}.md`, `docs/career/{profile-alignment,linkedin-announcement-draft}.md`, `docs/core/{architecture,content-boundary,milestone,roadmap,planning-sources}.md`, the AIRIS/SAFAPAC sections of `docs/ux-ui/specification.md`, `README.md`, `public/sitemap.xml`, `scripts/{render-resume,validate-resume,validate-resume-page,validate-homepage,validate-case-studies,validate-visuals,validate-site-foundation,validate-profile-alignment,validate-linkedin-launch,validate-career-claims}.mjs`, `scripts/check-public-boundary.sh`, and `package.json`, only when needed to repair an audit failure. Core registry claim files remain read-only unless a separately approved evidence audit is opened.
- Acceptance:
  - `7H-01`: default, Backend, Cloud, and Applied-AI PDFs are each one A4 page, searchable, logically ordered, accurately titled, naturally keyworded, link-valid, unclipped at normal review scale, and compliant with public/application contact policy.
  - `7H-02`: every material public quantitative/result/impact/attribution/production/completion/scale claim has an allowed registry ID, channel, state, denominator, qualifier, and attribution boundary; zero conditional/prohibited claim leaks remain.
  - `7H-03`: repository checks cover negative claim scenarios as well as required copy, and self-tests prove the validators fail on representative prohibited SAFAPAC, AIRIS, and AnotherEdenAI wording.
  - `7H-04`: homepage, `/resume`, `/safapac`, `/airis`, `/anotheredenai`, 404, navigation, metadata, sitemap, and PDF download remain usable with keyboard navigation, visible focus, semantic headings/landmarks, accessible names/text alternatives, light/dark themes, reduced motion, 320px reflow, 400% zoom, and print/PDF behavior.
  - `7H-05`: public-boundary checks prove no private contact/source/archive material is tracked or emitted; ignored targeted PDFs and temporary audit/render artifacts are purged or retained only in their approved ignored location.
  - `7H-06`: dates, titles, status/maturity labels, availability, links, project hierarchy, and ownership wording agree across every public and recruiter-facing surface.
  - `7H-07`: the milestone and roadmap accurately record completion, durable checks, manual evidence, and residual evidence gaps without claiming those gaps were resolved.
- Verification: `npm run resume:check:all`; all resolver/validator self-tests; `ASTRO_TELEMETRY_DISABLED=1 npm run check`; build; every site/homepage/case-study/visual/resume/profile/public-boundary validator; `git diff --check`; targeted searches for registry-prohibited language; PDF extraction/link/metadata inspection; and a clean/known worktree audit. Live-site verification occurs only after the eventual committed release reaches Cloudflare and is not needed to truthfully complete repository implementation.
- Claim-safety check: `contract-auditor` traces registry IDs to all material copy and tests, records gaps without upgrading them, and confirms validator assertions no longer encode prohibited old claims.
- Human checkpoint: Hydar reviews the four PDFs at normal scale and manually checks representative desktop/mobile pages at 320px and 400% zoom, keyboard focus/order, light/dark themes, reduced motion, and print/download behavior. Repository automation cannot prove subjective readability or browser rendering. Any failure is repaired inside 7H and rechecked before completion.
- Route/commit: `contract-auditor -> tdd-loop`; one final audit/remediation feature commit including durable validators, the tracked balanced PDF if regenerated, milestone/roadmap completion, and promote-or-purge cleanup.

## Ordering and fresh-chat handoff

Run `7A -> 7B -> 7C -> 7D -> 7E -> 7F -> 7G -> 7H`. Resume features establish safe shared evidence items before the balanced profile consumes them. Case-study features then establish the long-form source for project summaries. Cross-page positioning runs only after both groups are stable, and the final audit remains independent of the implementation chats.

For every new feature chat use:

`Use $sdd-router to execute Feature 7X from docs/core/milestone.md. Reconstruct the ignored handoff, stay inside its allowed paths, and stop after the one feature commit and any required human checkpoint.`

## Milestone exit gate

- [ ] All eight features have one focused commit and no active `.sdd/` handoff remains.
- [ ] Three targeted application resumes and the balanced public resume pass their ATS/render/contact contracts.
- [ ] SAFAPAC, AIRIS, and AnotherEdenAI have recruiter-readable, registry-traceable case studies with correct hierarchy and no prohibited claims.
- [ ] Homepage, semantic resume, project cards, metadata, README, and committed recruiter guidance agree on positioning, dates, statuses, ownership, and links.
- [ ] Automated negative tests reject the prior SAFAPAC deployment/production wording, AIRIS causal-impact wording, and AnotherEdenAI maturity/accuracy wording.
- [ ] Accessibility, responsiveness, theme, reduced-motion, print, public-boundary, and manual readability checks pass.
- [ ] Residual evidence gaps remain explicit; no gap is converted into a stronger claim by prose alone.

Hydar approved and activated this milestone on 2026-09-16. Each feature begins only in its own fresh chat and stays within its recorded boundary. Milestone approval does not authorize external publication, deployment/account changes, or edits to another repository.
