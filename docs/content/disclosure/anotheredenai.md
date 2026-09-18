# AnotherEdenAI disclosure record

Review state: approved

This record keeps the Feature 7D case study grounded in the public repository and the human-approved Milestone 7 content contract while separating implementation evidence from maturity claims.

| Claim area | Public treatment | Public authority | Excluded detail |
| --- | --- | --- | --- |
| Identity and status | Present AnotherEdenAI as a major personal case study and actively developed project beginning January 2026. | Human-approved Milestone 7 content contract; public repository | Production-grade, completed, or live-service wording. |
| Graph foundation | Describe ETL, Pydantic models, idempotent loading, Neo4j entities, and retrieval context visible in public source. | Public README and `src/etl/loader.py` | Unverified data quality, completeness, or production readiness. |
| Workflow | Describe LangGraph orchestration, typed state, candidate preparation, bounded validation/correction/fallback, and formatting. | Public `src/workflow/graph.py`, `state.py`, `candidates.py`, and `nodes/format.py` | Guaranteed recommendation quality, factuality, or success. |
| Web path | Describe FastAPI request handling and HTMX/SSE progress/result delivery. | Public `src/web/routes/api.py` and `src/web/streaming.py` | Live deployment, uptime, traffic, or service availability. |
| Reliability | Explain that legality and feasibility checks precede bounded analyzer calls, infeasible cases make zero analyzer calls, and deterministic fallback protects the result path. | Human-approved Milestone 7 content contract; public source and tests | Guaranteed recommendations, zero-error AI, or claims that safeguards prove quality. |
| Coverage and evaluation | Show 367/367 canonical character forms/styles, 31 evaluation cases, and recall/precision changing from 76.1%/66.0% to 93.5%/37.1% together with the human-review consequence. | Human-approved Milestone 7 content contract; accepted portfolio evidence snapshot | 93.5% accuracy, accepted final quality, or reduced human-review effort without measurement. |
| Current work | State that evaluation gates, recommendation reliability, graph quality, cost control, and deployment decisions remain open. | Human-approved Milestone 7 content contract and public roadmap | Any implied completion date or maturity milestone. |
| Visuals | Use newly drawn public-source-grounded pipeline and guardrail flows. | Public source structure | Copied code screenshots, private artifacts, raw prompts, secrets, and unsupported metrics. |

## Public-source review notes

- Reviewed public `main` revision `b56766c` on 2026-09-01 for implementation boundaries; Feature 7D adds only the approved portfolio evidence and recruiter-readable interpretation.
- The public README currently uses maturity wording that conflicts with the approved portfolio boundary. The case study must not repeat that wording; it uses `actively developed` and states current limitations instead.
- The separate AnotherEdenAI repository is outside this feature's write scope and must not be modified.

## Manual review questions

- Does every implementation claim correspond to a current public file or approved profile wording?
- Is `actively developed` visible in the entry and nearby visual context?
- Are the 367/367 and 31-case evidence boundaries clear, and are recall/precision paired with the human-review consequence?
- Are evaluation, recommendation quality, deployment, and cost/performance claims clearly marked as incomplete, active, or excluded?
- Are the diagrams newly drawn and free of private material or copied code/screenshots?
- Do alt text, captions, public source links, and exclusions remain attached?
- Is the public phone number absent?

Hydar answered these questions affirmatively against the current public-source draft on 2026-09-01. The narrative and visual contracts are approved for staging within the documented active-development boundary.
