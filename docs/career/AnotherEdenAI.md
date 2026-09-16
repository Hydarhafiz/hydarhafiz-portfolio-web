# AnotherEdenAI Career Evidence

Status: Audited snapshot evidence with public-repository availability check
Last audited: 2026-09-16

## Narrative boundary

AnotherEdenAI is strongest as a reliability-focused applied-AI engineering case study: structured game knowledge, deterministic legality and bounded search, conservative evidence states, and constrained LLM authority. It is active development, not a proven production recommender.

## Claims

### AE-ARCH-01 - Deterministic/LLM authority boundary

- Status/confidence: `VERIFIED-HISTORICAL`, high for the supplied project snapshot; the live public repository was reachable but was not locally available for a reproducible full audit.
- Meaning: Deterministic backend code owns legal retrieval, kit materialization, candidate generation, validation, fallback, and guardrails; the analyzer is restricted to ranking/refining supplied candidates with at most one correction path.
- Evidence class: `HISTORICAL_SNAPSHOT` pending live-repository confirmation.
- Sources: `portfolio source/Personal projects/AnotherEdenAI/docs/core/{architecture.md,SCHEMA.md,milestone.md,roadmap.md}`; `portfolio source/Personal projects/AnotherEdenAI/Anotheredenai metrics.txt`; live availability check at `https://github.com/Hydarhafiz/AnotherEdenAI`.
- Allowed: resume, portfolio, interview after live-repository confirmation.
- Safe wording: `Designed a roster-aware recommendation pipeline where deterministic code owns legality and bounded candidate generation while the LLM is constrained to ranking, refinement, and explanation.`
- Do not claim: the LLM cannot hallucinate; all outputs are factually correct; optimal teams or guaranteed clears.
- Last audited: snapshot sources and live public-repository availability rechecked, 2026-09-16.

### AE-DATA-01 - Legal-kit completeness

- Status/confidence: `VERIFIED-HISTORICAL`, high for the supplied accepted replay.
- Meaning: 367/367 canonical character forms/styles had complete legal-kit receipts in the accepted replay.
- Evidence class: accepted replay artifact in snapshot.
- Sources: `Anotheredenai metrics.txt`; referenced `kit_catalog.json` and C6 replay evidence.
- Allowed: resume, portfolio, interview.
- Safe wording: `Maintained complete legal-kit receipts for 367/367 canonical character forms/styles in the accepted replay.`
- Do not claim: complete strategic understanding for all 367; all possible game content; current live Neo4j state without a current replay.
- Last audited: snapshot metric source rechecked, 2026-09-16.

### AE-DATA-02 - Audited graph/catalog breadth

- Status/confidence: `VERIFIED-HISTORICAL`, high.
- Meaning: The last audited replay recorded 5,123 parsed combat facts, plus inventories of 668 Grasta, 61 Ore, 888 equipment rows, and 12 mechanic references.
- Evidence class: `HISTORICAL_SNAPSHOT`.
- Sources: `Anotheredenai metrics.txt`; accepted C6 replay evidence referenced there.
- Allowed: portfolio/interview; resume only if space and wording justify it.
- Safe wording: `The last audited replay modeled 5,123 parsed combat facts across a broader equipment and mechanic catalog.`
- Do not claim: current live database totals; optimizer coverage for all equipment; strategic correctness from inventory size.
- Conflict: local parsed artifacts later differed from the committed skill/passive snapshot; live counts are unauthorized until reconciled and replayed.
- Last audited: snapshot metric source rechecked, 2026-09-16.

### AE-EVAL-01 - Deterministic legality evaluation

- Status/confidence: `VERIFIED-HISTORICAL`, high for the supplied audit/replay.
- Meaning: 31 cases passed: 20 feasible, 10 infeasible, and 1 fixed-roster stress case; infeasible cases made zero analyzer calls.
- Evidence class: accepted evaluation artifact/test.
- Sources: `Anotheredenai metrics.txt`; referenced H03 replay evidence and evaluation test.
- Allowed: resume, portfolio, interview.
- Safe wording: `Verified deterministic feasibility and legality across 31 cases, including infeasible cases that made zero LLM analyzer calls.`
- Do not claim: 31 real gameplay wins; comprehensive recommendation quality; production reliability.
- Last audited: snapshot metric source rechecked, 2026-09-16.

### AE-SEARCH-01 - Bounded candidate generation

- Status/confidence: `VERIFIED-HISTORICAL`, high for the supplied architecture/configuration snapshot.
- Meaning: Candidate generation uses 3 archetypes x 6 slots, beam width at most 50, branching cap 12, and at most 10 returned candidates.
- Evidence class: `TARGET-DESIGN` implemented in code; limits are architecture, not achieved quality.
- Sources: `Anotheredenai metrics.txt`; referenced `src/workflow/lineup_generation.py`.
- Allowed: resume, portfolio, interview as design limits.
- Safe wording: `Bounded combinatorial search with explicit beam, branching, and candidate caps before LLM review.`
- Do not claim: globally optimal search; representative latency or quality; ten diverse candidates are always available.
- Last audited: C2 snapshot artifact identity rechecked, 2026-09-16.

### AE-EVAL-02 - C2 recall/precision trade-off

- Status/confidence: `VERIFIED-HISTORICAL`, high for the supplied local held-out evaluation.
- Meaning: On 46 adjudicated held-out occurrences across 21 witnesses, recall rose from 76.1% to 93.5% while precision fell from 66.0% to 37.1%.
- Evidence class: held-out local evaluation.
- Sources: `Anotheredenai metrics.txt`; `feature_c2_scoped_classification.json` in supplied snapshot.
- Allowed: portfolio/interview only, with both sides presented together.
- Safe wording: `A held-out extraction study improved recall from 76.1% to 93.5%, but precision fell from 66.0% to 37.1%, triggering a human review checkpoint before further rollout.`
- Do not claim: 93.5% accuracy; improved overall quality; reduced human review; accepted production classifier.
- Current decision: do not treat C2 as an accepted Milestone 6 baseline or proceed to the next dependent feature without the required human review/timing checkpoint.
- Last audited: snapshot metric source rechecked, 2026-09-16.

### AE-GUARD-01 - Analyzer call and usage guardrails

- Status/confidence: `VERIFIED-HISTORICAL`, high for configured guardrails in the supplied snapshot.
- Meaning: The supplied audit found one initial analyzer call plus at most one fragment-only correction, output caps, and per-call/cumulative usage guards.
- Evidence class: implemented configuration and tests.
- Sources: `Anotheredenai metrics.txt`; referenced `src/workflow/analyzer.py`.
- Allowed: resume, portfolio, interview as configured architecture.
- Safe wording: `Constrained analyzer authority to one initial call plus at most one fragment-only correction, with structured validation, output limits, usage guards, and deterministic fallback.`
- Do not claim: inputs are preflight-capped at 20k; guaranteed spend ceiling; observed production cost reduction. The prior H1 experiment recorded all 16 prompts above the 20k target.
- Last audited: snapshot metric source rechecked, 2026-09-16.

### AE-TEST-01 - Test inventory

- Status/confidence: `VERIFIED-HISTORICAL`, high at the supplied audit time.
- Meaning: 555 tests were collected; 30 focused analyzer/search/evaluation tests passed in the recorded audit.
- Evidence class: `AUDIT_RESULT`.
- Sources: `Anotheredenai metrics.txt` and recorded pytest commands.
- Allowed: resume/portfolio only with exact collection/pass distinction.
- Safe wording: `Maintained a 555-test inventory, with 30 critical analyzer/search/evaluation tests freshly passing in the audited run.`
- Do not claim: all 555 tests pass; coverage percentage; production correctness.
- Last audited: snapshot metric source rechecked, 2026-09-16.

## Allowed summary themes

- Structured Neo4j/GraphRAG knowledge instead of ungrounded prompt-only recommendation.
- Deterministic legality, bounded search, and constrained LLM authority.
- Explicit unknown/ambiguous/rejected states rather than converting missing evidence into absence.
- Reproducible boss corpus and evaluation fixtures.
- Honest evaluation gates that stop on harmful precision/quality trade-offs.

## Do not claim

- Hallucinations eliminated.
- Guaranteed legal, optimal, winning, or clear-capable teams in every case.
- Production-ready recommendation quality, real-player adoption, or measured gameplay outcomes.
- `93.5% accuracy` or reduced review effort from C2.
- `93% token reduction` from the historical 601,000-token observation and current guardrail.
- Current Neo4j node/relationship totals without a fresh accepted replay.

## Current wording audit

| ID | Current wording/source | Verdict and safe disposition | Missing evidence |
| --- | --- | --- | --- |
| `CUR-AE-01` | The live public README describes the project as `production-grade`. | `PROHIBITED` for resume/portfolio use. The registry and portfolio retain `actively developed`; implementation presence is not production readiness. | Completed evaluation, operational release, and accepted quality evidence. |
| `CUR-AE-02` | Portfolio/resume architecture wording about deterministic candidates, validation, bounded correction, fallback, and evaluation harness. | `CONDITIONAL` when described as current implementation because the live repository was not locally reproduced. Safe as `historical snapshot` evidence or after a fresh public-source audit. | Local checkout at an identified commit plus focused tests/evidence. |
| `CUR-AE-03` | Any `93.5% accuracy`, reduced review, hallucination-free, optimal-team, guaranteed-clear, or token-savings claim. | `PROHIBITED`. The C2 result is a recall gain paired with a precision regression; other safeguards are design/implementation boundaries, not outcome proof. | A pre-registered, accepted evaluation that resolves the trade-off and measures the claimed outcome. |
