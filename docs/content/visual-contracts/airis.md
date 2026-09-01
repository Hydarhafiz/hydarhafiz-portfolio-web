# AIRIS visual contract

Status: approved. The visual is newly redrawn and disclosure-reviewed.

## `airis-load-testing`

- Type: compact concurrency and load-testing flow.
- Purpose: explain the supporting engineering contribution from workload design through diagnosis and handoff without exposing private test data or implying implementation ownership.
- Elements:
  - `Representative AI workload scenarios`
  - `Controlled concurrent requests`
  - `Observed behavior signals`
  - `Bottleneck diagnosis`
  - `Optimization research`
  - `Engineering handoff`
  - `Senior-engineer acceptance`
  - `Stakeholder training`
- Relationships: workload scenarios produce controlled concurrent requests; observations inform bottleneck hypotheses; hypotheses lead to optimization research; research is documented in a handoff; the accepted handoff supports stakeholder training. The flow must not connect research directly to a claimed production improvement.
- Allowed labels: generic workload, concurrency, observation, diagnosis, research, handoff, acceptance, and training terms; qualitative signal labels such as `latency`, `errors`, and `throughput` only when no values are shown.
- Exclusions: exact request/concurrency values, latency/throughput/error measurements, service names, ports, endpoints, model names, prompts, configuration, infrastructure topology, dashboards, report figures, private documents, stakeholder data, copied diagrams, and implemented-recommendation or production-improvement claims.
- Alt text: `A compact flow starts with representative AI workload scenarios and controlled concurrent requests, passes through observed behavior signals and bottleneck diagnosis, and continues to optimization research, an engineering handoff accepted by the senior engineer, and stakeholder training. The flow does not claim a resulting production improvement.`
- Caption: `AIRIS supporting contribution: from concurrency testing and bottleneck diagnosis to an accepted engineering handoff and stakeholder training.`
- Source class: `newly-redrawn` from the approved career/profile contract, disclosure boundary, and sanitized AMIC evidence.

## Redraw checklist

- [x] Shapes and labels are drawn from scratch.
- [x] No private report, dashboard, screenshot, diagram, value, URL, service identifier, or configuration is used as a visual source.
- [x] The supporting-contribution boundary is visible in the caption or adjacent content.
- [x] No arrow implies that researched recommendations were implemented or improved production performance.
- [x] Alt text and exclusions remain attached to the final asset contract.
- [x] Hydar manually approves disclosure before staging.
