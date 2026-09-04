# AnotherEdenAI visual contracts

Status: approved for the Feature 4D visual rebuild.

AnotherEdenAI is the primary personal case study and must remain labelled actively developed. The visuals should communicate the system shape and its reliability boundaries without presenting evaluation, production maturity, or recommendation-quality claims. Apply the [shared Feature 4D diagram rules](./shared.md).

## `anotheredenai-pipeline`

- Type: primary three-layer architecture visual.
- Recruiter takeaway: user input and graph-backed knowledge feed one recommendation engine with typed boundaries.
- Title: `How AnotherEdenAI generates a recommendation`
- Main story: `User input + Knowledge base → Recommendation engine`.

### Visible content

| Layer | Label | Short content | Treatment |
| --- | --- | --- | --- |
| Top | `User input` | `Query + roster` | Quiet entry layer |
| Middle | `Recommendation engine` | `Prepare candidates` · `Analyze with LangGraph` · `Validate or fall back` | Largest, strongest accent |
| Bottom | `Knowledge base` | `Source data → ETL → Neo4j` | Supporting foundation |
| Interface | `FastAPI` on the request connector · `HTMX / SSE` for progress and result | None | Delivery/interface labels, not pipeline stages |

### Low-fidelity content mockup

```text
HOW ANOTHEREDENAI IS STRUCTURED

┌───────────────────┐                         ┌──────────────────────────────┐
│ USER INPUT        │                         │ KNOWLEDGE BASE                │
│ Query + roster    │                         │ Source data → ETL → Neo4j    │
└─────────┬─────────┘                         └──────────────┬───────────────┘
          ↓ request · FastAPI                              ↓ graph context
          └──────────────────┐              ┌───────────────┘
                             ▼              ▼
                 ┌────────────────────────────────┐
                 │ RECOMMENDATION ENGINE           │
                 │ Prepare candidates              │
                 │ Analyze with LangGraph          │
                 │ Validate or fall back           │
                 └────────────────────────────────┘

                 interface: HTMX / SSE · progress + result
```

The top row presents user input and knowledge as peer inputs. Both relationships point downward into the dominant recommendation engine, matching the expected top-to-bottom reading pattern. `FastAPI` belongs on the request connection, while `HTMX / SSE` labels progress and result delivery from the application; neither is another stage. On compact screens, stack the two input blocks first, then the engine, while preserving that order and the downward relationships; give the stacked cards a shared centered width and center the engine content.

Placement: render immediately after the `Pipeline` heading, beside the architecture narrative.

### Accessibility and disclosure

- Alt text: `A three-part architecture places user input and a knowledge base side by side above a dominant recommendation engine. Query and roster input, plus graph context from source data through ETL into Neo4j, flow downward to candidate preparation, LangGraph analysis, and typed validation or fallback; FastAPI and SSE appear as interface technology.`
- Caption: `An actively developed recommendation system combining typed workflow logic with graph-backed knowledge.`
- The collapsed text alternative describes the two top inputs first, then the recommendation engine, without repeating every visible label or presenting knowledge retrieval as a later sequential stage.
- Do not show production-ready labels, live-service claims, completed evaluation, recommendation-quality claims, private model configuration, credentials, database access details, copied code screenshots, or unsupported measurements.

## `anotheredenai-guardrails`

- Type: secondary four-card safeguard strip.
- Recruiter takeaway: recommendation output is constrained, checked, and given an explicit failure path.
- Title: `How AnotherEdenAI validates recommendations`
- Main story: four safeguards around one recommendation boundary; this is not a process flow.

### Visible content

| Card | Short label | Supporting phrase |
| --- | --- | --- |
| 1 | `Legality rules` | `Bound candidates` |
| 2 | `Retry limits` | `Correct within bounds` |
| 3 | `Typed output` | `Reject malformed results` |
| 4 | `Fallback path` | `Return clear failure` |

Outcome strip: `Valid result  |  Clear failure`.

### Low-fidelity content mockup

```text
HOW ANOTHEREDENAI CHECKS OUTPUT

[ LEGALITY RULES ]  [ RETRY LIMITS ]  [ TYPED OUTPUT ]  [ FALLBACK PATH ]
   Bound candidates     Correct within     Reject malformed    Return clear
                         bounds             results             failure

                 ───── recommendation boundary ─────
                       [ VALID RESULT | CLEAR FAILURE ]
```

Do not connect the four cards into a chain or loop. A shared rule, brace, or quiet boundary line is enough to show that all four safeguards surround the recommendation boundary. On compact screens, use a two-by-two grid or a vertical stack, then the outcome strip.

Placement: render immediately after the `Reliability boundary` heading, beside the validation narrative.

### Accessibility and disclosure

- Alt text: `Four safeguard cards surround AnotherEdenAI's recommendation boundary: legality rules, retry limits, typed output validation, and a fallback path. The shared outcome is a valid result or a clear failure, not a claim of guaranteed recommendation quality.`
- Caption: `Four bounded checks around AnotherEdenAI's AI-assisted recommendation output.`
- The collapsed text alternative lists the four independent safeguards and the result/failure boundary without inventing a sequence.
- Do not show guaranteed factuality, success rates, production maturity, live deployment, model or provider credentials, raw prompts, private logs, or measured cost/performance outcomes.

## Contract boundary

Both figures are newly redrawn from the current public repository and approved active-development boundary. FastAPI, HTMX/SSE, LangGraph, typed validation, fallback, ETL, and Neo4j describe the public project shape; they do not establish production readiness or evaluated recommendation quality.

Hydar approved the revised titles, labels, shared rules, and mockups for both AnotherEdenAI visuals before implementation resumed.
