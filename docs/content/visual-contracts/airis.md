# AIRIS visual contract

Status: approved for Milestone 7 Feature 7C.

AIRIS is the major applied-AI case study. The visuals should show the controlled experiment, bottleneck diagnosis, and accepted engineering handoff without presenting ownership of the overall AIRIS architecture or claiming a resulting production improvement. Apply the [shared diagram rules](./shared.md).

## `airis-context-experiment`

- Type: three-anchor evidence path.
- Recruiter takeaway: A controlled RAG experiment reduced supplied context while retaining the defined citation checks.
- Title: `Reduce context, retain checks`.
- Main story: `Experiment scope → Local-context reduction → Citation checks`.

Visible content:

| Stage | Label | Supporting phrase | Treatment |
| --- | --- | --- | --- |
| 1 | `Experiment` | `6 scenarios · 10 turns` | Entry stage |
| 2 | `Local context` | `541k → 20.9k tokens` and `96.1% reduction` | Dominant middle stage |
| 3 | `Citation checks` | `10/10 passed` | Final stage |

The quiet boundary note says: `Citation checks do not prove universal answer quality.` On compact screens, stack the stages vertically without horizontal scrolling.

Accessibility text: `A three-stage AIRIS controlled experiment shows six scenarios and ten turns, local context reduced from 541k to 20.9k tokens by 96.1%, and 10/10 citation checks passed. Citation checks do not prove universal answer quality.`

Caption: `Controlled AIRIS experiment: 96.1% less local context across six scenarios and ten turns, with 10/10 citation checks passed.`

Placement: render directly after the controlled context experiment narrative on `/airis`.

## `airis-concurrency-diagnosis`

- Type: three-anchor observed bottleneck comparison.
- Recruiter takeaway: Subsystem decomposition showed vector search dominating request time at the higher tested concurrency.
- Title: `Vector search dominated request time`.
- Main story: `10 users → 50 users → Request-time share`.

Visible anchors:

- `10 concurrent users` · `4.8 seconds vector-search latency`;
- `50 concurrent users` · `51.0 seconds vector-search latency`;
- `At 50 users` · `76.9% of request time`.

The quiet boundary note states that outbound-LLM behavior surfaced as another optimization area and that the figures do not claim supported production concurrency or a resulting production improvement. Render after the concurrency diagnosis narrative.

## `airis-load-testing`

- Type: compact three-stage engineering handoff path.
- Recruiter takeaway: Hydar tested, diagnosed, and handed accepted recommendations to the senior engineer, with later implementation attribution preserved.
- Title: `From diagnosis to recommendation`.
- Main story: `Test workload → Diagnose bottlenecks → Handoff recommendations`.
- Outcomes: `Recommendations accepted` · `Stakeholder training`.
- Boundary note: `Several recommendations were later incorporated into the senior engineer's implementation; no production improvement is claimed.`
- Render after the engineering outcome and attribution narrative.

## Contract boundary

These are newly redrawn, recruiter-facing summaries of approved AIRIS evidence. They must preserve measurement context, distinguish citation checks from universal answer quality, and keep later implementation attributed to the senior engineer. No visual may imply production improvement, supported production concurrency, or overall architecture ownership.
