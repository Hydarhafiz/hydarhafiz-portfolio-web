# AIRIS visual contract

Status: approved for the Feature 4D visual rebuild.

AIRIS is a compact supporting contribution, not a flagship case study. The visual should show what Hydar contributed and what the work produced without presenting ownership of the overall AIRIS architecture or claiming a resulting production improvement. Apply the [shared Feature 4D diagram rules](./shared.md).

## `airis-load-testing`

- Type: compact three-stage contribution path.
- Recruiter takeaway: Hydar tested a workload, investigated bottlenecks, and handed findings to engineering with accepted follow-on outcomes.
- Title: `From workload testing to engineering handoff`
- Main story: `Test workload → Diagnose bottlenecks → Handoff findings`.

### Visible content

| Stage | Label | Supporting phrase | Treatment |
| --- | --- | --- | --- |
| 1 | `Test workload` | `Controlled testing` | Entry stage |
| 2 | `Diagnose bottlenecks` | `Optimization research` | Slightly dominant middle stage |
| 3 | `Handoff findings` | None | Final stage with outcome tags |
| Outcomes | `Senior-engineer accepted` · `Stakeholder training` | None | Tags attached to stage 3 |

Disclosure note: `No resulting production improvement is claimed.`

### Low-fidelity content mockup

```text
HYDAR'S AIRIS CONTRIBUTION

[ 01 TEST WORKLOAD ]  ──→  [ 02 DIAGNOSE BOTTLENECKS ]  ──→  [ 03 HANDOFF FINDINGS ]
    Controlled testing          Optimization research          • Senior-engineer accepted
                                                               • Stakeholder training

                     No resulting production improvement is claimed.
```

Use one solid stepped path. Outcomes attach to the handoff stage and are not additional stages. Do not draw a connector from diagnosis or research to a production improvement. On compact screens, stack the stages vertically and keep the two outcome tags with stage 3.

Placement: render directly inside the AIRIS supporting-contribution narrative on the homepage, immediately after its summary and metadata.

### Accessibility and disclosure

- Alt text: `A compact three-stage AIRIS contribution path shows controlled workload testing, bottleneck diagnosis with optimization research, and an engineering handoff with senior-engineer acceptance and stakeholder training as outcomes. No resulting production improvement is claimed.`
- Caption: `Supporting contribution: controlled testing, bottleneck diagnosis, and an accepted engineering handoff. No resulting production improvement is claimed.`
- The collapsed text alternative lists the three stages, then the two handoff outcomes, then the disclosure boundary.
- Do not show exact workload or concurrency values, latency, throughput or error measurements, service names, ports, endpoints, model names, prompts, configuration, infrastructure topology, dashboards, private reports, stakeholder data, copied diagrams, or implemented-recommendation claims.

## Contract boundary

This is a newly redrawn, recruiter-facing summary of testing, bottleneck diagnosis, optimization research, engineering handoff, senior-engineer acceptance, and stakeholder training. It remains explicitly a supporting contribution, and the no-production-improvement boundary must remain legible but visually quiet.

Hydar approved the revised title, labels, shared rules, and mockup before implementation resumed.
