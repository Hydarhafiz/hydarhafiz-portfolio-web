# AnotherEdenAI disclosure record

Review state: approved

This record keeps the case study grounded in the public repository while separating implementation evidence from maturity claims.

| Claim area | Public treatment | Public authority | Excluded detail |
| --- | --- | --- | --- |
| Identity and status | Present AnotherEdenAI as a primary personal case study and actively developed project. | Approved recruiter-profile contract; public repository | Production-grade, completed, or live-service wording. |
| Graph foundation | Describe ETL, Pydantic models, idempotent loading, Neo4j entities, and retrieval context visible in public source. | Public README and `src/etl/loader.py` | Unverified data quality, completeness, or production readiness. |
| Workflow | Describe LangGraph orchestration, typed state, candidate preparation, bounded validation/correction/fallback, and formatting. | Public `src/workflow/graph.py`, `state.py`, `candidates.py`, and `nodes/format.py` | Guaranteed recommendation quality, factuality, or success. |
| Web path | Describe FastAPI request handling and HTMX/SSE progress/result delivery. | Public `src/web/routes/api.py` and `src/web/streaming.py` | Live deployment, uptime, traffic, or service availability. |
| Reliability | Describe explicit validation and graceful failure boundaries as implemented safeguards. | Public source and tests | Completed evaluation, measured cost/performance, or claims that safeguards prove quality. |
| Current work | State that evaluation, recommendation reliability, graph quality, cost control, and deployment decisions remain active/future work. | Approved recruiter-profile contract and public roadmap | Any implied completion date or maturity milestone. |
| Visuals | Use newly drawn public-source-grounded pipeline and guardrail flows. | Public source structure | Copied code screenshots, private artifacts, raw prompts, secrets, and unsupported metrics. |

## Public-source review notes

- Reviewed public `main` revision `b56766c` on 2026-09-01.
- The public README currently uses maturity wording that conflicts with the approved portfolio boundary. The case study must not repeat that wording; it uses `actively developed` and states current limitations instead.
- The separate AnotherEdenAI repository is outside this feature's write scope and must not be modified.

## Manual review questions

- Does every implementation claim correspond to a current public file or approved profile wording?
- Is `actively developed` visible in the entry and nearby visual context?
- Are evaluation, recommendation quality, deployment, and cost/performance claims clearly marked as incomplete, active, or excluded?
- Are the diagrams newly drawn and free of private material or copied code/screenshots?
- Do alt text, captions, public source links, and exclusions remain attached?
- Is the public phone number absent?

Hydar answered these questions affirmatively against the current public-source draft on 2026-09-01. The narrative and visual contracts are approved for staging within the documented active-development boundary.
