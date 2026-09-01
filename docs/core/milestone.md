# Completed milestone: Case-study content

- Status: completed on 2026-09-01
- Activated: 2026-09-01

## Outcome

Produce disclosure-reviewed, public-safe case-study content for the portfolio without beginning Astro/MDX implementation, UX/UI specification, deployment, domain configuration, or external launch work. The content must be reusable by the later Astro/MDX milestone and preserve the approved hierarchy:

1. SAFAPAC — primary professional case study
2. AnotherEdenAI — primary personal case study
3. AIRIS — compact supporting contribution

The completed Milestone 1 plan remains preserved in Git history. This file is the reusable active-milestone plan and will be reused after Milestone 2 completion.

## Shared content contract

Every package will be authored as framework-neutral structured editorial content that can later become an Astro/MDX content entry. The durable shape is:

- identity: stable slug, title, project type, hierarchy, dates/context, and current status;
- summary: one-sentence positioning and a short recruiter-readable overview;
- narrative: context, problem, role, approach, engineering decisions, trade-offs, evidence, outcome, and limitations;
- capabilities: only technologies connected to an evidenced contribution;
- visuals: stable visual IDs, purpose, elements, relationships, alt text, caption, source class, and explicit exclusions;
- disclosure: review state, allowed claim classes, forbidden claim classes, and maturity/ownership wording;
- sources: public links or sanitized source categories only; never private file contents, internal URLs, credentials, customer data, or copied employer artifacts.

The content contract must remain readable without a site runtime. It must not assume page components, routes, responsive states, animation behavior, or a final visual design system.

## Public-safety rules

- Private portfolio-source material is evidence only. It is never staged, quoted, reproduced, screenshotted, or visually copied.
- SAFAPAC diagrams and AIRIS diagrams are newly redrawn and sanitized. They may show role-level systems, boundaries, sequence, and generalized engineering decisions, but not proprietary formulas, internal screenshots, copied diagrams, customer/stakeholder data, credentials, internal URLs, infrastructure identifiers, detailed security configuration, costs, or unapproved performance results.
- SAFAPAC uses deployed beta/internal-validation wording. It may describe Hydar inheriting early boilerplate and substantially rebuilding and productionizing his assigned backend, database, and AWS scope; it must not imply sole authorship of the whole product.
- AIRIS remains a supporting contribution. It may describe workload/concurrency testing, bottleneck diagnosis, optimization research, engineering handoff, and stakeholder training; it must not claim architecture ownership, implementation of recommendations, or resulting production improvements.
- AnotherEdenAI is actively developed. It may describe public repository implementation, but must not claim production maturity, completed evaluation, proven recommendation quality, or live deployment without current evidence.
- The public site and content must not expose the phone number.

## Feature sequence

### Feature 2A — SAFAPAC flagship content package

- Type: build (content and evidence)
- Status: completed
- Outcome: deliver the primary professional case-study narrative and a sanitized visual contract set.
- Scope: structured narrative covering the inherited-system transition, backend/database ownership, calculation traceability and validation work, AWS delivery, collaboration boundaries, beta/internal-validation context, and defensible outcomes; newly redrawn transformation timeline and high-level deployment architecture contracts.
- Non-goals: copied source material, confidential formulas or reports, exact rollout size or geography, unapproved metrics, internal screenshots, detailed security configuration, product UI specification, or claims that Hydar built the whole system alone.
- Entry gate: current canonical boundary, career data, recruiter package, and private evidence classes are reconciled; important claim provenance is mapped without copying private content.
- Exit gate: every public claim is disclosure-reviewed, every visual is sanitized and newly redrawn, structured content is framework-neutral, and the public-boundary check passes.
- Durable outputs:
  - `docs/content/contract.md`: framework-neutral content and visual-contract schema shared by the later packages.
  - `docs/content/case-studies/safapac.md`: structured narrative source with front matter, recruiter summary, narrative sections, capabilities, limitations, and disclosure state.
  - `docs/content/visual-contracts/safapac.md`: contracts for a transformation timeline and a high-level deployment/delivery architecture; this is a drawing specification, not a copied diagram or final UI asset.
  - `docs/content/disclosure/safapac.md`: claim-level allow/exclude record naming only approved canonical sources or sanitized private-evidence categories.
- Narrative contract: introduce SAFAPAC as a deployed beta/internal-validation platform; explain the inherited early-boilerplate starting point; distinguish Hydar's backend, database, calculation-traceability, validation, testability, documentation, containerized delivery, and AWS operations scope from the wider product; identify collaboration with five TEA-SAF domain researchers and one frontend developer; keep the separate five-person Airbus internal pilot group as validation context; close with defensible outcomes and explicit limitations.
- Visual contract rules:
  - `safapac-transition` shows the generalized progression from inherited application scope through backend/data and calculation workflow strengthening to delivery and beta/internal validation, with ownership lanes and no confidential implementation detail.
  - `safapac-delivery` shows only role-level delivery relationships among the user-facing application, backend/API, PostgreSQL data, container/CI delivery, and the approved AWS service categories; it excludes formulas, internal endpoints, account/region identifiers, network topology, secrets, customer data, and detailed security configuration.
  - Both contracts require a plain-language alt text, a caption, allowed-claim notes, excluded-claim notes, and an explicit `newly redrawn` status before staging.
- Evidence strategy: use the approved career/profile contract and canonical disclosure rules as public authority; use private AMIC documentation only to verify claim provenance; validate the durable paths with `git diff --check`, `bash scripts/check-public-boundary.sh`, and manual claim/visual review. No private PDF text, image, diagram, generated screenshot, or detailed audit ledger is retained.
- Acceptance:
  - 2A-01: Narrative preserves SAFAPAC as the primary professional case study and uses the approved deployed beta/internal-validation status.
  - 2A-02: Role, collaboration counts, ownership boundary, technologies, and outcomes match the approved career/profile contract.
  - 2A-03: Transformation and deployment visuals expose only generalized, public-safe relationships and include alt text and exclusions.
  - 2A-04: No private artifact, proprietary formula, internal identifier, copied screenshot/diagram, phone number, or unsupported claim enters the durable content.
- Durable evidence: framework-neutral SAFAPAC content entry, visual contracts, sanitized claim/disclosure record, and source notes that identify only approved public links or private evidence categories.
- Route: `contract-auditor -> feature-planner -> builder-executor -> tdd-loop`
- Human checkpoint: passed — Hydar approved the narrative and both newly redrawn visual contracts for disclosure on 2026-09-01.
- Evidence: framework-neutral content, visual and disclosure records are present; `git diff --check`, staged-path inspection, `bash scripts/check-public-boundary.sh`, and content-specific private-marker checks pass.
- Commit boundary: one completed-feature commit containing the durable SAFAPAC content, evidence/disclosure record, validation updates, and milestone progress.

### Feature 2B — AnotherEdenAI flagship content package

- Type: build (content and public-source evidence)
- Status: completed
- Outcome: deliver the primary personal case-study narrative and public-repository-grounded visual contract set.
- Scope: structured narrative covering the graph ETL, Neo4j retrieval, LangGraph workflow, typed validation, bounded retry/correction/fallback behavior, candidate preparation, and streaming web path; newly drawn graph/recommendation pipeline and validation/fallback visual contracts based on the current public repository.
- Non-goals: changing the separate AnotherEdenAI repository, claiming production maturity or completed evaluation, claiming proven recommendation quality or cost/performance improvement, claiming live deployment, or beginning portfolio UI design.
- Entry gate: public repository HEAD and relevant first-party source files are rechecked at execution time; active-development wording remains explicit.
- Exit gate: every implementation claim links to current public evidence, current work and limitations are visible, visuals distinguish implemented paths from future work, and public-boundary checks pass.
- Durable outputs:
  - `docs/content/case-studies/anotheredenai.md`: structured personal-project narrative with active-development status, public-source links, implementation claims, and explicit limitations.
  - `docs/content/visual-contracts/anotheredenai.md`: contracts for the public ETL/recommendation pipeline and its typed validation/correction/fallback boundary.
  - `docs/content/disclosure/anotheredenai.md`: claim/source record that quarantines stale README maturity wording and records the current public-source review state.
- Narrative contract: introduce AnotherEdenAI as an actively developed personal project; explain the problem as source-grounded lineup recommendations constrained by a player's roster; trace the public implementation from wiki ETL through Pydantic models and idempotent Neo4j loading, graph retrieval and LangGraph orchestration, candidate preparation, bounded analysis, typed output validation, and SSE progress delivery; close with current evaluation, recommendation reliability, graph quality, and cost-control work as active limitations.
- Public-source contract: implementation claims must be traceable to the current public repository's README and first-party source files for graph wiring, shared state, candidate preparation, typed formatting, streaming, and loading. The public repository's current opening uses stronger maturity wording than this portfolio allows; the case study must use the approved active-development wording and must not imply that repository activity proves production readiness.
- Visual contract rules:
  - `anotheredenai-pipeline` shows the public data-to-recommendation path: source data and ETL, Neo4j graph, roster/query input, LangGraph workflow, candidate preparation, analysis, typed formatting, and SSE/web result delivery.
  - `anotheredenai-guardrails` shows the public hard-field boundary: canonical input and retrieval, candidate legality constraints, bounded validation/correction/fallback handling, typed output formatting, and graceful failure paths.
  - Both contracts must carry public source links, active-development status, alt text, captions, implemented-vs-future notes, and explicit exclusions for production, evaluation, deployment, quality, and measured-improvement claims.
- Evidence strategy: use the current public repository as the implementation oracle and the approved recruiter/profile contract as the public wording boundary. Recheck the public HEAD before staging; validate the durable paths with `git diff --check`, `bash scripts/check-public-boundary.sh`, and content-specific source/claim checks. Do not modify the separate AnotherEdenAI repository.
- Acceptance:
  - 2B-01: Narrative identifies AnotherEdenAI as an actively developed personal project and preserves the approved public-description boundary.
  - 2B-02: Graph, workflow, validation, and streaming claims are traceable to the current public repository rather than private copies or assumptions.
  - 2B-03: Visual contracts include alt text, public source links, status labels, and explicit exclusions for maturity/evaluation/deployment claims.
  - 2B-04: No completed-quality, production, live-deployment, guaranteed-factuality, or unsupported measured-improvement claim is published.
- Durable evidence: framework-neutral AnotherEdenAI content entry, public-source note, visual contracts, and source-gap note if the public README remains stale.
- Route: `feature-planner -> builder-executor -> tdd-loop`
- Human checkpoint: passed — Hydar approved the active-development wording and both public-source-grounded visual contracts on 2026-09-01.
- Evidence: current public source review recorded at revision `b56766c`; framework-neutral content, visual and disclosure records are present; `git diff --check`, staged-path inspection, `bash scripts/check-public-boundary.sh`, and content-specific source/claim checks pass.
- Commit boundary: one completed-feature commit containing the durable AnotherEdenAI content, visual contracts, source notes, validation updates, and milestone progress.

### Feature 2C — AIRIS supporting contribution package

- Type: build (content and evidence)
- Status: completed
- Outcome: deliver a compact supporting-contribution narrative and a sanitized concurrency/load-testing visual contract.
- Scope: structured narrative covering AI workload/concurrency testing, bottleneck diagnosis, optimization research, accepted engineering handoff, and stakeholder training; newly redrawn flow from test workload through observations, diagnosis, research, handoff, and training.
- Non-goals: architecture ownership, implementation of recommendations, production performance claims, confidential load-test values, internal dashboards/reports, copied visuals, or a dedicated AIRIS route.
- Entry gate: AIRIS claims are separated from SAFAPAC ownership and reconciled with the approved profile contract and private evidence categories.
- Exit gate: the contribution remains compact and accurately scoped, the visual is sanitized and newly redrawn, and the public-boundary check passes.
- Durable outputs:
  - `docs/content/case-studies/airis.md`: compact supporting-contribution entry with approved role language, contribution narrative, limitations, and disclosure state.
  - `docs/content/visual-contracts/airis.md`: one newly redrawn concurrency/load-testing flow contract showing generalized workload, observation, diagnosis, research, handoff, and training stages.
  - `docs/content/disclosure/airis.md`: claim/source record that keeps detailed private architecture, configuration, metrics, and report material excluded.
- Narrative contract: identify AIRIS as a supporting contribution at AMIC; describe AI workload and concurrency testing, bottleneck diagnosis, optimization research, an optimization/testing handoff accepted by the senior engineer, and stakeholder training; state that Hydar did not own the overall AIRIS architecture or implement the recommendations; close with the absence of public production-improvement claims.
- Visual contract rules: `airis-load-testing` uses generalized stages for test workload, concurrent requests, observed signals, bottleneck diagnosis, optimization research, engineering handoff, and stakeholder training. It may name Locust as an approved supporting technology when tied to the testing contribution, but it must not show private service names, ports, model/configuration details, exact load values, dashboards, report figures, customer data, or resulting performance claims. It requires `newly-redrawn` status, alt text, caption, source class, and exclusions.
- Evidence strategy: use the approved career/profile and disclosure contracts as public authority; use private AIRIS evidence only to confirm the contribution boundary; validate the durable paths with `git diff --check`, `bash scripts/check-public-boundary.sh`, and content-specific exclusion checks. Do not retain private report excerpts or detailed audit ledgers.
- Acceptance:
  - 2C-01: AIRIS is presented as a supporting contribution, not a flagship or architecture-ownership claim.
  - 2C-02: Testing, diagnosis, research, handoff, and training claims are preserved without claiming recommendation implementation or resulting production improvement.
  - 2C-03: The concurrency/load-testing visual contract contains only generalized stages, roles, and signals, with alt text and exclusions.
  - 2C-04: No private report content, internal metric, copied diagram, internal identifier, phone number, or unsupported result enters the durable content.
- Durable evidence: framework-neutral AIRIS content entry, sanitized visual contract, and claim/disclosure record.
- Route: `contract-auditor -> feature-planner -> builder-executor -> tdd-loop`
- Human checkpoint: passed — Hydar approved the contribution boundary and newly redrawn load-testing visual on 2026-09-01.
- Evidence: framework-neutral content, visual and disclosure records are present; `git diff --check`, staged-path inspection, `bash scripts/check-public-boundary.sh`, and content-specific exclusion checks pass.
- Commit boundary: one completed-feature commit containing the durable AIRIS content, evidence/disclosure record, validation updates, and milestone progress.

## Milestone exit gate

- [x] SAFAPAC narrative and visual contracts pass manual disclosure review.
- [x] AnotherEdenAI narrative and visual contracts are grounded in the current public repository and retain active-development wording.
- [x] AIRIS narrative and sanitized concurrency/load-testing visual contract preserve the supporting-contribution boundary.
- [x] All packages use the shared framework-neutral structured content contract and include limitations, provenance class, alt text, and exclusions.
- [x] No confidential employer material, phone number, copied visual, or unsupported maturity/ownership/performance claim is present.
- [x] Public-boundary validation and content-specific checks pass.
- [x] UX/UI specification, Astro/MDX implementation, deployment, domain configuration, and LinkedIn launch work remain deferred to later milestones.

## Completion summary

Milestone 2 delivered disclosure-reviewed, framework-neutral content packages for the approved hierarchy: SAFAPAC as the primary professional case study, AnotherEdenAI as the primary personal case study, and AIRIS as a compact supporting contribution. Each package includes structured narrative content, disclosure boundaries, and visual contracts with alt text and explicit exclusions. SAFAPAC and AIRIS visuals are newly redrawn and sanitized; AnotherEdenAI visuals are grounded in the current public repository and retain actively-developed wording. UX/UI specification, Astro/MDX implementation, deployment, domain configuration, and launch publishing remain deferred.

## Planning decisions and gaps

- The approved hierarchy is fixed for this milestone; no case study may displace SAFAPAC or AnotherEdenAI as a flagship.
- The content source is framework-neutral editorial Markdown/structured data. It is not the later Astro content collection or UI implementation.
- SAFAPAC and AIRIS require source-authority/disclosure auditing before content implementation. AnotherEdenAI requires a fresh public-source check at execution time.
- Exact SAFAPAC rollout size/geography, SAFAPAC formula/default validation, AIRIS recommendation implementation/results, and AnotherEdenAI evaluation/deployment remain intentionally unresolved and must be represented as limitations rather than filled with assumptions.
- A stale maturity statement in the current public AnotherEdenAI README is an external-source gap. The portfolio content follows the approved active-development contract; changing the external repository is outside this milestone.
