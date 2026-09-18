# Portfolio Content Contract

- Version: 0.2
- Status: approved
- Approved by: Hydar Hafiz Hydzelan
- Approved: 2026-09-18
- Applies to: Milestone 7 portfolio resynchronization
- Supersedes: Portfolio Content Contract v0.1 draft and conflicting earlier portfolio/career wording

## Purpose

This document is the human-approved career-content authority for the Milestone 7 resynchronization of `hydarhafiz.com`.

It governs:

- public positioning and project hierarchy;
- facts, metrics, denominators, qualifiers, and attribution;
- project maturity and current-status wording;
- case-study narrative and required engineering stories;
- homepage summaries and evidence cards;
- About/Experience wording;
- the balanced public resume's content boundary;
- confidentiality and prohibited claims.

`docs/core/milestone.md` is the executable implementation contract. It controls feature order, scope, acceptance criteria, validation, and commit boundaries, but it must implement this content contract without independently auditing, weakening, reinterpreting, or removing approved content.

## Authority boundary

For Milestone 7 career content, this file is the sole authority.

The following are subordinate inputs:

1. The latest private Backend, Cloud/DevOps, and Applied-AI application resumes are content-selection and visual-design baselines for the balanced public resume.
2. Current repository behavior is authoritative for technical implementation behavior.
3. Sanitized project evidence may provide additional implementation detail.
4. Existing pages, validators, `docs/career/`, and older content/disclosure documents are migration inputs or historical support only.

No subordinate source may override, downgrade, reinterpret, or remove a decision explicitly approved here. A stale statement does not become authoritative merely because it is already implemented or tested.

If implementation exposes a genuine factual contradiction, privacy risk, security issue, or impossible-to-represent requirement, stop and ask Hydar. Do not resolve it by silently falling back to an older document.

## Editing rule

The approved meaning, evidence, numbers, denominator, attribution, maturity, and confidentiality boundaries are locked.

Implementation may make minor edits for grammar, responsive layout, accessibility, and repetition. It may not materially change the meaning, introduce a stronger claim, or omit a required boundary without Hydar's approval.

## 1. Site-wide positioning

### Primary identity

**Backend Engineer building production cloud and AI systems.**

Backend Engineering is the foundation. Cloud/DevOps and Applied AI are evidence-backed differentiators and extensions of the same engineering identity.

Do not present Hydar as three unrelated engineers.

### Hero supporting copy

> I build Python/FastAPI backends, AWS delivery systems and reliability-focused AI applications. My work spans API and data design, infrastructure automation, performance engineering and constrained LLM workflows where correctness matters.

Small grammatical adjustments are allowed, but the Backend-first hierarchy must remain.

### Engineering pillars

| Pillar | Public positioning |
| --- | --- |
| Backend Engineering | Python, FastAPI, PostgreSQL, API design, calculation systems, data workflows, and performance engineering |
| Cloud & DevOps | AWS, Terraform, Docker, GitHub Actions, OIDC, deployment reliability, rollback, and cost-aware operations |
| Applied AI | RAG/GraphRAG, Neo4j, LangGraph, evaluation, workload analysis, structured validation, and deterministic safeguards |

### Career and location boundaries

- Primary identity: Backend Engineer.
- Public resume identity: **Backend Engineer | Cloud & Applied AI**.
- Current job-location focus: Kuala Lumpur and Selangor.
- Remove `open to relocation across Malaysia`, `opportunities across Malaysia`, and equivalent Malaysia-wide availability language.
- Do not imply senior, SRE/platform, traditional MLOps, or production-AI maturity.

## 2. Public project hierarchy

| Priority | Project | Portfolio role |
| --- | --- | --- |
| Flagship | SAFAPAC | Deep professional backend/cloud case study |
| Major case study | AIRIS | Applied-AI evaluation and performance-engineering case study |
| Major personal project | AnotherEdenAI | Reliability-focused AI architecture and evaluation case study |
| Supporting case study | SAF Sky Quest | Real-event cloud deployment and operational-lifecycle story |
| Experience only | PETRONAS Digital internship | Professional experience depth, not another flagship route |

The homepage and navigation must preserve this hierarchy.

## 3. Homepage content contract

### Evidence cards

Use four compact, contextual evidence cards:

| Evidence | Required context |
| --- | --- |
| **33,047 governed defaults** | SAFAPAC, across 12 processes, 22 feedstocks, and 217 countries |
| **50 ms p95** | SAFAPAC 33-point sensitivity workflow, measured across 10 staging acceptance cycles |
| **96.1% less local RAG context** | AIRIS controlled 6-scenario/10-turn experiment, with 10/10 citation checks passed |
| **367/367 legal-kit coverage** | AnotherEdenAI canonical character forms/styles at the approved portfolio evidence snapshot |

Do not display these as context-free giant numbers. The project and denominator belong with the metric.

### Homepage order

1. Hero and role positioning.
2. Four contextual evidence cards.
3. Featured projects: SAFAPAC, AIRIS, AnotherEdenAI.
4. Supporting project: SAF Sky Quest.
5. Engineering focus: Backend, Cloud & DevOps, Applied AI.
6. Professional experience.
7. Education and certifications.
8. Contact, LinkedIn, and GitHub.

### Site-wide factual corrections

- AnotherEdenAI starts in **January 2026**, not December 2025.
- SAFAPAC is an **AWS-hosted internal pilot**.
- The public site exposes one balanced, phone-free resume.
- The three targeted application resumes remain private and are not linked from the public site.

## 4. SAFAPAC case-study contract

### Public title

**SAFAPAC - Backend & AWS Engineering for Sustainable Aviation Fuel Analysis**

### Approved introduction

> SAFAPAC is an internal techno-economic analysis platform for Sustainable Aviation Fuel research. I took substantial ownership of its FastAPI/PostgreSQL backend and AWS delivery, evolving an incomplete local prototype into an AWS-hosted internal pilot supporting 6 TEA researchers and 5 Airbus staff.

### Ownership boundary

Hydar's responsibility:

`Backend | Database | Calculation Integration | Superadmin APIs | AWS / DevOps`

Do not claim:

- frontend ownership;
- SAF research-methodology authorship;
- sole ownership of the complete product;
- that the whole application was built alone or entirely from scratch.

### Starting problem

The page must explain that SAFAPAC began as an incomplete local application around a specialist TEA calculation workflow. The engineering problem included:

- completing and redesigning backend functionality;
- translating evolving expert methodology into stable software contracts;
- managing large selector-dependent default datasets;
- creating a repeatable, cost-aware AWS delivery path for internal researchers.

### Turning expert methodology into executable contracts

The calculation engine crossed several specialist domains.

Hydar worked with:

- LCA/carbon specialists on total CO2 emissions, carbon intensity, and carbon-conversion efficiency;
- TEA/business specialists on cash flow, NPV, IRR, and payback behavior.

Approved narrative:

> Instead of treating the application's existing output as automatically correct, I asked domain experts for known input/output expectations and converted those independently established expectations into repeatable regression contracts.

The page may explain the calculation scope at a high level, including capital, OPEX, revenue, cash flow, NPV, IRR, payback, sustainability, and LCCA. It must not publish proprietary formulas or fixture values.

### Engineering decision: do not invent domain data

Required story:

> A later TEA methodology revision contained reference data for process technologies that had not yet been formally incorporated into the application's approved default dataset. Adding them directly would have required assumptions about process, feedstock, and country relationships that had not been approved. I retained the approved v1.1 default dataset and used the Superadmin direction to let domain experts introduce future processes and values explicitly.

Intended message:

**Domain-authority discipline is more important than coding every value found in a newer document.**

Do not say Hydar implemented all technologies appearing in the later methodology.

## 5. SAFAPAC Superadmin and default governance

### Approved scale

- **33,047 default records**.
- **12 processes**.
- **22 feedstocks**.
- **217 countries**.

### Approved workflow

The Superadmin backend governs draft, publish, and rollback workflows and has been handed to the frontend developer.

### Current factual status

As of 17 September 2026:

- Core Superadmin backend APIs are finished.
- The core design was reviewed and approved in the project meeting.
- Backend handoff to the frontend developer is complete.
- Frontend implementation is in progress.
- Backend cleanup/refactoring of experimental or stale APIs remains.
- Direct add/modify/delete functionality for the current active default set remains to be completed.

### Approved portfolio copy direction

> SAFAPAC contains 33,047 default records spanning 12 processes, 22 feedstocks, and 217 countries. Previously, changing application defaults could require updating external data and reseeding the deployed application. I built the Superadmin backend around governed draft, publish, and rollback workflows and handed the approved APIs to the frontend developer. The remaining backend work focuses on direct management of the active default set so domain experts can add, modify, and remove approved values without returning to the previous Excel-to-deploy-to-EC2 reseeding workflow.

### Prohibited completion claims

Do not say:

- `Eliminated Excel`.
- `Domain experts now manage everything independently`.
- `Superadmin is fully completed`.
- `The previous workflow has already been completely replaced`.

Those statements require later completion and actual use evidence.

## 6. SAFAPAC performance engineering

### Before

`33 sensitivity points -> prepare inputs -> execute the full TEA calculation engine -> repeat 33 times`

### After

`prepare reusable inputs once -> vary the sensitivity parameter -> run targeted NPV projection -> return the 33-point result`

### Locked metric

> Refactored the 33-point sensitivity workflow from 33 complete calculation-engine executions into reusable prepared inputs and targeted NPV projections, reaching **50 ms p95 across 10 staging acceptance cycles**.

Do not invent:

- percentage speedup;
- old p95 or old total runtime;
- production throughput;
- benchmark extrapolation beyond the ten staging acceptance cycles.

## 7. SAFAPAC AWS and DevOps

### Architecture story

The page should explain the reason for infrastructure choices rather than listing service logos.

The pilot used a lean architecture appropriate to its internal scale:

- S3/CloudFront for frontend delivery;
- EC2 for backend compute;
- private PostgreSQL RDS;
- Cognito authentication;
- Nginx and Let's Encrypt/Certbot for HTTPS;
- no unnecessary Application Load Balancer at pilot scale.

### Infrastructure stack

`Terraform | VPC | EC2 | RDS | S3 | CloudFront | Cognito | Docker | Nginx | GitHub Actions | OIDC | SSM`

### Approved operating-cost fact

> Operated the dedicated SAFAPAC AWS account at an average infrastructure cost of **$51.27/month from March-August 2026 across 20 billed AWS services**.

### TLS reliability story

> A TLS certificate expiry disrupted application access for domain experts during deployment. I restored HTTPS and then automated certificate renewal so certificate lifecycle management no longer depended on manual intervention.

Use `automated renewal`. Do not say the system waits until the certificate has expired before renewing it.

### Staging, rollback, and cost control

> I introduced Terraform-managed staging to validate application releases, infrastructure changes, and rollback behavior before production promotion. Because staging was needed primarily around release work, I implemented an automatic six-hour shutdown policy to reduce the risk of forgotten temporary infrastructure generating unnecessary AWS cost.

The six-hour shutdown is a completed implementation.

### SAFAPAC current-status block

**Current status - September 2026**

> AWS-hosted internal pilot. The core Superadmin backend has been approved and handed over to frontend development. Current backend work is limited to cleanup/refactoring and direct active-default management APIs.

## 8. AIRIS case-study contract

### Public title

**AIRIS - Evaluating and Optimizing Enterprise RAG Workloads**

### Approved introduction

> On AIRIS, I worked primarily on applied-AI engineering experiments: measuring retrieval and LLM behavior, reducing unnecessary context, and tracing concurrency bottlenecks rather than changing the system based on intuition.

### Controlled context experiment

Locked evidence:

- **6 scenarios**.
- **10 turns**.
- **541k to 20.9k local-context tokens**.
- **96.1% reduction**.
- **10/10 citation checks passed**.

Approved narrative:

> I designed a controlled RAG comparison to measure whether large amounts of locally supplied context were necessary. Across six scenarios and ten turns, the optimized approach reduced local context from 541k to 20.9k tokens while retaining all 10 citation checks used in the experiment.

Passing citation checks does not prove that answer quality universally improved. Keep those ideas separate.

### Concurrency and bottleneck investigation

Locked evidence:

- Vector-search latency: **4.8 seconds at 10 concurrent users**.
- Vector-search latency: **51.0 seconds at 50 concurrent users**.
- At 50 users, vector search represented **76.9% of request time**.

Approved narrative:

> Instead of treating increasing end-to-end latency as a generic AI-performance problem, I decomposed request time by subsystem. As concurrency increased, vector-search latency grew from 4.8 seconds at 10 users to 51.0 seconds at 50 users, where it represented 76.9% of request time. The testing also surfaced outbound-LLM behavior as another optimization area.

### Outcome and attribution

> I presented the findings and remediation options to the senior engineer. The recommendations were reviewed and accepted during engineering discussions, and several were subsequently incorporated into his implementation.

Hydar diagnosed, tested, reported, and recommended. Do not imply that he personally implemented every later optimization or produced an independently measured production improvement.

## 9. AnotherEdenAI case-study contract

### Public title

**AnotherEdenAI - A Roster-Aware GraphRAG Team Recommender with Deterministic Guardrails**

### Project date and status

- Start date: **January 2026**.
- Public status: **Active development**.

Do not expose internal development labels such as `C1.1` or `C2`.

Recruiters should see a plain-language progress summary, architecture state, coverage/evaluation counts, and paired evaluation percentages. Do not invent an overall project-completion percentage.

### Approved introduction

> AnotherEdenAI explores a specific AI-reliability problem: how to use an LLM for game recommendations without allowing it to become the authority for roster legality, mechanics, or candidate construction. Deterministic software retrieves facts and generates legal candidate teams, while the LLM is restricted to ranking, refinement, and explanation.

### Core engineering principle

**The model may reason about legal candidates; it may not redefine what is legal.**

### Architecture flow

`User question and roster -> graph retrieval -> deterministic candidate generation -> legality and feasibility checks -> bounded analyzer call -> validation and correction -> deterministic fallback -> explanation`

### Legal-data completeness

Approved evidence:

- **367/367 canonical character forms/styles**.
- Complete legal-kit data for the accepted portfolio evidence snapshot.

### Deterministic feasibility

Approved evidence:

- **31 evaluation cases**.
- Infeasible cases make **zero analyzer calls**.

The intended engineering message is that legality and feasibility can be established before paying for or trusting an LLM call. Do not rewrite this as `AI successfully answered 31 questions`.

### Evaluation trade-off

Approved held-out evidence:

- Recall: **76.1% to 93.5%**.
- Precision: **66.0% to 37.1%**.

Approved narrative:

> One extraction change substantially increased recall on held-out evidence, but precision fell at the same time. Rather than reporting 93.5% recall alone as an accuracy improvement, I kept the change at a human-review checkpoint because the additional coverage came with substantially more false positives.

Do not call this `93.5% accuracy`.

### Prohibited AI claims

Do not claim:

- eliminated hallucinations;
- guaranteed optimal or winning teams;
- guaranteed recommendations;
- zero-error AI;
- accepted final quality;
- production readiness;
- reduced human-review effort without measurement.

## 10. SAF Sky Quest supporting case study

### Public title

**SAF Sky Quest - Rapid AWS Deployment for an Airbus Education Event**

### Context

- Location: Thailand.
- Activation dates: **15-25 August 2026**.
- Audience context: primary- and secondary-school students.
- Purpose: introduce Sustainable Aviation Fuel and common recyclable/biofuel feedstock concepts through a short gamified quiz.
- Participants scoring at least **8/10** were eligible for event rewards.

### Ownership boundary

The frontend application was developed by another developer. Hydar owned rapid cloud deployment and event infrastructure.

### Delivery lifecycle

`Receive finished application -> deploy to AWS Lightsail -> configure custom domain and Caddy HTTPS -> operate during the activation -> export runtime data -> decommission infrastructure`

### Event evidence

Use:

- **29 registration records captured**, or
- **29 runtime registration records captured**.

Do not say:

- 29 students;
- 29 schools;
- 29 unique users.

The underlying Thai registration data has not been interpreted sufficiently to establish identity or uniqueness.

## 11. PETRONAS Digital experience

PETRONAS remains in the Experience section rather than receiving a flagship project page.

Approved summary:

> **Web & Mobile Development Intern - PETRONAS Digital**
>
> Contributed within a five-person team building a MEAN/Ionic booking prototype for staff and intern onboarding. Worked on Angular floor/desk views and paired on mobile booking, QR check-in, Android deployment, and development documentation.

An expandable experience section may provide additional implementation lessons, but it must not compete visually with the AMIC work.

## 12. About and Experience positioning

Approved About direction:

> I'm a Backend Engineer focused on building reliable software systems from API and data design through cloud delivery.
>
> My recent work at Aerospace Malaysia Innovation Centre spans FastAPI/PostgreSQL backend ownership, AWS infrastructure and DevOps, domain-heavy calculation systems, and applied-AI evaluation. I also build AI systems where deterministic software constrains what an LLM is allowed to decide.
>
> I use Cloud/DevOps and Applied AI as extensions of backend engineering rather than separate identities.

The page may adapt this text for length, but it must retain the same professional hierarchy.

## 13. Balanced public resume contract

### Public/private boundary

The website exposes one balanced public resume, not the three targeted application variants.

The public resume is:

- headed **Backend Engineer | Cloud & Applied AI**;
- one A4 page;
- searchable and ATS-readable;
- phone-free;
- available through the public `/resume` page and PDF download.

The targeted Backend, Cloud/DevOps, and Applied-AI PDFs remain private application assets and are not linked from the website.

### Private resume baselines

The implementation must inspect these latest files from `.private/`:

- `.private/Hydar Hafiz Hydzelan - Backend engineer(5).pdf`
- `.private/Hydar Hafiz Hydzelan - Cloud engineer(3).pdf`
- `.private/Hydar Hafiz Hydzelan - Applied AI engineer(3).pdf`

They define the approved content-selection pool and shared visual-design baseline. This content contract wins if a private PDF contains older or less precise project-status wording.

If a named PDF is unavailable, implementation must stop at an input checkpoint. Do not reconstruct it from `docs/career/` or an older generated resume.

### Content composition

The balanced resume should select, rather than concatenate, the strongest relevant material from all three variants:

- SAFAPAC: backend ownership, Superadmin/default governance, calculation/performance engineering, and AWS delivery.
- AIRIS: controlled RAG experiment and concurrency/bottleneck analysis.
- AnotherEdenAI: deterministic/LLM authority boundary, feasibility evaluation, and coverage.
- SAF Sky Quest: compact cloud-deployment evidence when it fits without crowding stronger material.
- PETRONAS: internship collaboration and delivery experience.
- Education and certifications: preserve the approved facts shared by the three variants.

Every public-resume statement must be traceable to one or more named private PDFs or to a more precise/newer requirement in this content contract.

### Visual-design contract

The public PDF must reproduce the three resumes' shared visual language:

- one-page A4 layout;
- monochrome, single-column composition;
- classic serif typography;
- large uppercase name and balanced role title;
- compact contact row and separate link row;
- uppercase bold section headings with thin horizontal rules;
- right-aligned employment/project dates;
- concise indented bullet lists;
- selective bold emphasis for ownership, technology, and measured evidence;
- dense but readable spacing with no clipping or overlap.

Preserve this section order:

1. Summary.
2. Technical Skills.
3. Professional Experience.
4. Personal Project.
5. Education & Certifications.

### Public header content

Include:

- Hydar Hafiz Hydzelan;
- balanced role title;
- email;
- Bangi, Selangor;
- `Available November 2026`;
- LinkedIn;
- GitHub;
- `hydarhafiz.com`.

Exclude the private phone number.

### Semantic resume page

The `/resume` route must use the same resolved content, order, hierarchy, and emphasis. It may adapt layout for narrow screens and accessibility rather than forcing print dimensions onto the browser page.

## 14. Site-wide claim rules

### Metrics retain context

Good:

> 50 ms p95 across 10 staging acceptance cycles.

Bad:

> 50 ms backend.

Good:

> 96.1% local-context reduction across 6 scenarios and 10 turns, with 10/10 citation checks passed.

Bad:

> 96% more efficient AI.

### Ownership verbs

Use:

- `I built` for Hydar's implementation.
- `I worked with` for domain-expert collaboration.
- explicit teammate attribution where frontend ownership belongs to another developer.
- `recommendations were subsequently incorporated` where the senior engineer implemented later AIRIS changes.

Do not use wording that transfers another person's implementation ownership to Hydar.

### Project maturity

Use `AWS-hosted internal pilot` for SAFAPAC.

Do not upgrade it to a worldwide production platform or imply unsupported organizational adoption.

Use `Active development` for AnotherEdenAI.

### Confidentiality

Do not publish:

- proprietary calculation formulas;
- internal expected-value fixtures;
- raw expert documents;
- copied internal diagrams or screenshots;
- AWS account/resource identifiers;
- credentials or detailed security configuration;
- internal URLs;
- internal user data;
- raw event participant records;
- client-sensitive implementation details;
- private phone/contact overlays.

## 15. Intended recruiter conclusion

The portfolio should demonstrate through evidence, not unsupported slogans, that:

### Backend

Hydar can take ownership of a non-trivial Python/PostgreSQL system, work through domain-heavy requirements, design APIs and data workflows, validate specialist calculations, and remove repeated execution work.

### Cloud

Hydar can provision, deploy, troubleshoot, and operate AWS infrastructure with IaC, CI/CD, rollback, TLS lifecycle management, staging controls, and cost awareness.

### Applied AI

Hydar treats LLM systems as software systems requiring deterministic boundaries, evaluation, measurement, structured validation, bottleneck diagnosis, and failure handling rather than prompt engineering alone.

## 16. Implementation handoff

Codex must:

- read this complete contract before implementing a Milestone 7 feature;
- use `docs/core/milestone.md` for feature sequencing and acceptance criteria;
- preserve the meaning of all approved content here;
- update stale validators when they enforce superseded wording;
- escalate only a genuine factual, privacy, security, schema, or impossible-to-represent contradiction;
- never use `docs/career/` to audit, weaken, or remove approved content;
- keep temporary audit/render material ignored or purge it before the feature commit;
- avoid external publication or account changes unless Hydar separately authorizes them.

## Version history

### v0.1 - review draft

Established the Backend-first positioning, project hierarchy, SAFAPAC/AIRIS/AnotherEdenAI narratives, SAF Sky Quest supporting case study, public-resume direction, and site-wide claim rules.

### v0.2 - approved

- Approved the v0.1 substance.
- Replaced public AnotherEdenAI milestone labels such as `C1.1` and `C2` with recruiter-readable progress evidence.
- Required the paired recall and precision percentages to be shown together.
- Prohibited inventing an overall AnotherEdenAI completion percentage.
- Established this file as the sole Milestone 7 career-content authority.
- Clarified that `docs/core/milestone.md` governs execution while the latest private resumes govern public-resume content selection and visual design only within this contract.
