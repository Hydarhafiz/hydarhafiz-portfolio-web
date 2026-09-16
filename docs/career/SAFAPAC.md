# SAFAPAC Career Evidence

Status: Audited historical evidence registry
Last audited: 2026-09-16

## Narrative boundary

The strongest safe story is a substantial backend/data/calculation contribution with governed-default and infrastructure design evidence. The SAFAPAC repository is available only as a gitignored historical archive in this audit; its implementation facts must not be described as currently deployed or live.

## Claims

### SAF-OWN-01 - Backend, database, and AWS responsibility

- Status/confidence: `SELF-ATTESTED`, medium-high; repeated in all three current resumes.
- Meaning: Hydar owned substantial backend, database, and AWS delivery responsibility for SAFAPAC during the AMIC contract.
- Evidence class: `CURRENT_MARKETING_COPY` plus `SELF_ATTESTATION`; supporting technical breadth exists in the source archive.
- Sources: current Backend/Cloud/AI resume PDFs; SAFAPAC archive architecture, schema, deployment, and milestone documents.
- Allowed: resume, portfolio, interview after user confirms the responsibility wording.
- Safe wording: `Owned backend, database, and AWS delivery for SAFAPAC.`
- Do not claim: sole ownership of the entire product; sole frontend ownership; sole authorship of all archived code; customer adoption or business success.
- Gap: Git authorship/project-assignment evidence should be checked before adding stronger sole-ownership language.
- Last audited: archive and current wording rechecked, 2026-09-16.

### SAF-SCOPE-01 - Backend and data-model scope

- Status/confidence: `VERIFIED-HISTORICAL`, high for the named archive audit; not verified against a currently accessible SAFAPAC checkout.
- Meaning: The audited repository contained 90 meaningful FastAPI endpoint declarations across 12 router modules, 34 mapped PostgreSQL tables, and 24 Alembic migrations.
- Evidence class: `AUDIT_RESULT`.
- Sources: `SAFAPAC contribution metrics.txt`; underlying paths `backend/app/api/endpoints/*.py`, `backend/app/models/*.py`, and `backend/alembic/versions/` in the audited repository.
- Allowed: interview with archive qualification; resume/portfolio only after a current repository identity is available.
- Safe wording: `Built and evolved a FastAPI/PostgreSQL backend spanning 90 endpoint declarations, 34 mapped tables, and 24 schema migrations.`
- Do not claim: 90 independently used production APIs; 34 business capabilities; adoption, throughput, or quality from counts alone.
- Gap: verify the audited commit/current HEAD identity.
- Last audited: supplied metric audit identity and archive locators rechecked, 2026-09-16.

### SAF-CALC-01 - Versioned calculation contracts and independent cases

- Status/confidence: `VERIFIED-HISTORICAL`, high for the named archive audit.
- Meaning: The audited repository had a 16-module calculation engine, 42 formula IDs in the v1 manifest, explicit v1/v0 compatibility, a basis-gated v1.0.1 amendment, two independent v1 reference cases, seven boundary cases, and 70 passing focused calculation tests.
- Evidence class: `CURRENT_REPOSITORY` through supplied `AUDIT_RESULT`.
- Sources: SAFAPAC archive `docs/core/v1-formula-contract.md`, `docs/core/v1-authority-addendum.md`, formula manifest/report sources, and `SAFAPAC contribution metrics.txt`.
- Allowed: interview with historical-archive qualification; resume/portfolio only if the wording explicitly names the audited archive or current identity is verified.
- Safe wording: `Introduced versioned calculation/default contracts and independent reference-case validation, with 42 formula IDs and 70 focused contract tests in the audited repository.`
- Do not claim: formulas are error-free; domain correctness is universally proven; all backend tests pass; every formula was personally authored without Git attribution evidence.
- Gap: verify personal contribution boundaries and current HEAD.
- Last audited: archive and current wording rechecked, 2026-09-16.

### SAF-DEFAULT-01 - Governed selector-aware defaults

- Status/confidence: `CONDITIONAL`, medium.
- Meaning: SAFAPAC evolved from simpler defaults/reseeding toward selector-aware governed defaults with source/authority, versioning, publication, and rollback concepts. The exact operational before/after story and record count need a source-grounded audit.
- Evidence class: `ACCEPTED_DOCUMENT`, `HISTORICAL_SNAPSHOT`, and `SELF_ATTESTATION`.
- Sources: SAFAPAC archive README and core schema/architecture/milestone/default-authority documents; conversation history reports repeated Excel reseeding and a domain-expert superadmin goal.
- Allowed: portfolio/interview only after the audit separates implemented behavior from planned/in-progress work.
- Safe wording: `Designed selector-aware, versioned default-governance workflows to replace repeated developer-managed data refreshes.`
- Do not claim: the workflow fully removed Excel/manual reseeding; domain experts currently operate it independently; measured time savings; every scope combination is complete; 30,000 independent datasets.
- Gap: verify implemented draft/publish/rollback behavior, user-facing completion, and accepted operational handoff.
- Last audited: archive and current wording rechecked, 2026-09-16.

### SAF-DEFAULT-02 - `30,000+` scoped default-value records

- Status/confidence: `CONDITIONAL`, low-medium until count provenance is reproduced.
- Meaning: Prior discussion reports more than 30,000 scoped default-value records across selector combinations. This may be a useful scale metric, but its query, denominator, snapshot, and distinction from complete datasets are not present in the supplied metric audit.
- Evidence class: `SELF_ATTESTATION` pending `CURRENT_REPOSITORY` or database/export proof.
- Sources: prior career discussion; related SAFAPAC schema/default documents.
- Allowed: internal planning only until verified.
- Safe wording: `Only after verification: designed governance for 30,000+ scoped default-value records across process/feedstock/country selectors.`
- Do not claim: 30,000 unique complete datasets; 30,000 users/configurations; current live count; domain completeness.
- Required upgrade evidence: reproducible query or accepted sanitized export; table/scope definition; distinct-row denominator; snapshot/version/date.
- Last audited: archive and current wording rechecked, 2026-09-16.

### SAF-OPS-01 - Local prototype to AWS pilot

- Status/confidence: `CONDITIONAL`, medium-high.
- Meaning: The AWS pilot document defines a lean Malaysia-region architecture for 3-7 internal users and roughly USD 44.37/month; later archive documentation contains staging and promotion controls. The design document's checklist and estimates do not alone prove deployment. Separate operational evidence is required for `deployed` or `productionized` wording.
- Evidence class: `TARGET-DESIGN`, `ESTIMATE`, plus historical operational documents.
- Sources: `SAFAPAC_ AWS Small Scale Testing - Pilot Infrastructure Documentation(4).pdf`; SAFAPAC archive staging/production runbooks and milestone; current resumes.
- Allowed: portfolio/interview now as a design story; resume only with carefully audited implementation wording.
- Safe wording: `Designed a lean AWS pilot architecture for 3-7 internal users at an estimated USD 44.37/month, using EC2, private RDS, S3/CloudFront, Cognito, Route 53, Nginx, and TLS.`
- Do not claim from this source alone: achieved 3-7-user capacity; actual monthly bill; large-scale production traffic; successful production deployment; 100-user capacity.
- Gap: identify durable proof of actual staging/production deployment and Hydar's operational ownership.
- Last audited: pilot PDF identity and archive controls rechecked, 2026-09-16.

### SAF-OPS-02 - Infrastructure and delivery safeguards

- Status/confidence: `VERIFIED-HISTORICAL`, high for repository-defined controls; live execution remains unproven.
- Meaning: The audited repository defined 9 Terraform modules, 40 AWS resource blocks across 29 resource types, 6 GitHub Actions workflows, 6 OIDC token grants, 3 Trivy scan steps, and 104 passing CI/IaC contract tests.
- Evidence class: `AUDIT_RESULT` and repository-defined controls.
- Sources: `SAFAPAC contribution metrics.txt`; SAFAPAC archive deployment/milestone documents.
- Allowed: interview with `defined/verified by archive contract tests` wording; public use requires a current source identity or explicit historical qualification.
- Safe wording: `Defined AWS infrastructure and guarded delivery through Terraform, GitHub Actions, OIDC, SSM, and container scanning; the audited CI/IaC contract suite passed 104 tests.`
- Do not claim: every Terraform resource was applied to production; CI controls prevented a measured number of incidents; production Terraform is complete.
- Gap: distinguish staging-live, production-live, and repository-only controls.
- Last audited: archive and current wording rechecked, 2026-09-16.

### SAF-PERF-01 - Runtime-default retrieval benchmark

- Status/confidence: `VERIFIED-HISTORICAL`, high for the recorded local benchmark.
- Meaning: A committed disposable local-PostgreSQL benchmark recorded p95 retrieval improvement from 75.125 ms (`n=5`) to 8.245 ms (`n=10`), 89.02% lower, on 360 envelopes and 5,837 catalog fields.
- Evidence class: `LOCAL_EXPERIMENT`.
- Sources: `SAFAPAC contribution metrics.txt`; underlying `artifacts/evidence/runtime-default-performance.json` and focused contract test.
- Allowed: resume/portfolio only when `controlled local PostgreSQL benchmark` is explicit.
- Safe wording: `Reduced p95 default retrieval latency by 89% in a controlled local PostgreSQL benchmark.`
- Do not claim: 89% faster in production; general API latency improvement; representative production sample size.
- Gap: verify artifact identity/current relevance before use.
- Last audited: archive and current wording rechecked, 2026-09-16.

## Allowed summary themes

- Backend/database/AWS responsibility, with teammate and frontend boundaries preserved.
- Substantial API/schema evolution.
- Versioned calculation/default contracts and independent reference validation.
- Lean AWS pilot architecture and guarded deployment design.
- Controlled local performance improvement with explicit benchmark qualification.

## Do not claim

- Proven production scale, uptime, customer adoption, revenue, or business savings.
- 50/100-user supported capacity from a Locust configuration or roadmap target.
- All 443 backend tests pass; the audit established collection, not a completed full-suite result.
- Roughly 170 countries as current verified calculation coverage without an authoritative query.
- `deployed-beta` or `productionized` solely because current resume copy says so.

## Current wording audit

| ID | Current wording/source | Verdict and safe disposition | Missing evidence |
| --- | --- | --- | --- |
| `CUR-SAF-01` | Resume and site call SAFAPAC `deployed beta`, `productionized`, or a staging/production delivery. | `PROHIBITED` until an accepted deployment record identifies an environment, release, and successful operational verification. Archive topology/runbooks are not that proof. | Sanitized deployment/release record and owner confirmation. |
| `CUR-SAF-02` | Resume says Hydar `operated` VPC, EC2/RDS, S3/CloudFront, Cognito, Linux, Nginx, and HTTPS. | `CONDITIONAL`; archive shows planned/defined infrastructure and delivery controls, not operation of a live estate. | Role/assignment evidence and sanitized operational records. |
| `CUR-SAF-03` | Resume/site say Hydar owned all backend, database, and AWS delivery. | `SELF-ATTESTED`; retain only as a bounded personal-responsibility statement after Hydar confirms it. Do not expand to sole ownership. | Assignment, review, or Git attribution evidence. |
| `CUR-SAF-04` | Any `30,000+` default-record story. | `CONDITIONAL`, internal-only. Never describe it as datasets, users, current data, or full coverage. | Reproducible query/export with table, filters, denominator, snapshot, and date. |
