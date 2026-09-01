# AnotherEdenAI visual contracts

Status: approved. Both visuals are newly drawn and disclosure-reviewed; no screenshot is required.

## `anotheredenai-pipeline`

- Type: public-source-grounded system flow.
- Purpose: show the implemented path from source data to a roster-aware recommendation result without implying production maturity.
- Elements:
  - `Selected source data`
  - `ETL models and loader`
  - `Neo4j graph`
  - `Query and roster input`
  - `LangGraph workflow`
  - `Candidate preparation`
  - `Bounded analysis`
  - `Typed formatter`
  - `FastAPI + HTMX/SSE web result`
- Relationships: source data flows through ETL into Neo4j; query and roster input enters workflow orchestration; retrieval supplies candidate preparation and analysis; typed formatting produces a result or failure path; SSE carries progress to the web layer.
- Implemented/future note: show the listed path as implemented in the reviewed public source; label evaluation, recommendation optimization, graph cleanup, cost control, and deployment as active or future work outside the flow.
- Source links: `README.md`, `src/etl/loader.py`, `src/workflow/graph.py`, `src/web/streaming.py` in the public repository.
- Exclusions: production-ready labels, live-service claims, completed evaluation, recommendation-quality claims, private model configuration, credentials, database access details, copied code screenshots, and unsupported measurements.
- Alt text: `A left-to-right flow moves selected source data through ETL models and an idempotent loader into a Neo4j graph. A query and roster enter the LangGraph workflow, which prepares candidates, performs bounded analysis, validates typed output, and sends progress and a final result or failure through FastAPI and HTMX/SSE.`
- Caption: `AnotherEdenAI's public implementation path from graph ETL to a typed, streaming recommendation workflow.`
- Source class: `newly-redrawn` from the current public repository.

## `anotheredenai-guardrails`

- Type: validation and fallback flow.
- Purpose: make the project's hard-field and bounded-analysis safeguards understandable without treating them as proof of final recommendation quality.
- Elements:
  - `Canonical request and roster resolution`
  - `Graph and mechanic retrieval`
  - `Candidate legality boundary`
  - `Bounded query validation/retry`
  - `Bounded analysis correction/fallback`
  - `Pydantic output and legality validation`
  - `Typed recommendation result`
  - `Graceful failure`
- Relationships: invalid or incomplete retrieval may return through a bounded retry path; valid retrieval enters candidate preparation; analysis correction remains bounded; formatter validation branches to a typed result or graceful failure.
- Implemented/future note: show retry, correction, fallback, and legality paths as public implementation boundaries; do not label them as independently evaluated quality guarantees.
- Source links: `src/workflow/state.py`, `src/workflow/graph.py`, `src/workflow/candidates.py`, `src/workflow/nodes/format.py`, `src/workflow/production.py`, and `src/web/streaming.py` in the public repository.
- Exclusions: guaranteed factuality, win-rate or success-rate claims, production maturity, live deployment, model/provider credentials, raw prompts, private logs, and measured cost/performance outcomes.
- Alt text: `A guarded recommendation flow resolves a typed request and roster, retrieves graph context, prepares legal candidates, runs bounded validation and analysis correction, and then branches through typed output and legality validation to either a recommendation result or graceful failure.`
- Caption: `Typed and bounded safeguards around AnotherEdenAI's public recommendation workflow.`
- Source class: `newly-redrawn` from the current public repository.

## Redraw checklist

- [x] Visuals are drawn from the public source structure, not copied from private material.
- [x] Active-development status is visible in the caption or adjacent content.
- [x] Implemented paths are distinct from evaluation, deployment, and future-work claims.
- [x] Alt text, public source links, and exclusions remain attached to each contract.
- [x] Hydar manually approves the wording and visual scope before staging.
