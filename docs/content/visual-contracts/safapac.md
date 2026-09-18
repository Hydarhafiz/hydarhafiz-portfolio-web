# SAFAPAC visual contracts

Status: approved for Feature 7B.

SAFAPAC is the flagship professional case study. These two figures should make Hydar's assigned engineering scope and the AWS-hosted internal-pilot boundary legible before any technical detail is read. Apply the shared accessible diagram rules.

## `safapac-transition`

- Type: primary transformation visual.
- Recruiter takeaway: Hydar inherited an incomplete local application, rebuilt his assigned scope, and delivered an AWS-hosted internal pilot boundary.
- Title: `What I rebuilt at SAFAPAC`
- Main story: `Incomplete local application → Hydar's scope → Pilot delivery`.

### Visible content

| Area | Label | Supporting phrase | Treatment |
| --- | --- | --- | --- |
| Start | `Incomplete local application` | `Specialist workflow foundation` | Small, quiet anchor |
| Center | `Hydar's scope` | `Backend + PostgreSQL` · `Traceable calculations` · `Container delivery` · `AWS operations` | Largest, strongest accent |
| Result | `Pilot delivery` | `AWS-hosted internal pilot` | Filled outcome anchor |
| Context | `TEA researchers` · `Frontend partner` · `Airbus staff` | None | Muted context rail, not stages |

### Low-fidelity content mockup

```text
WHAT HYDAR REBUILT AT SAFAPAC

[ INCOMPLETE LOCAL APP ] ─→ [ HYDAR'S SCOPE ]  ─────→  [ PILOT DELIVERY ]
  Specialist workflow        Backend + PostgreSQL        AWS-hosted internal pilot
                             Traceable calculations
                             Container delivery
                             AWS operations

          context: TEA researchers · Frontend partner · Airbus staff
```

The center block must be visibly larger than either outer anchor. Context labels sit above or below the main path with no sequential arrows. On compact screens, stack the three anchors vertically and move the context row after the result.

Placement: render immediately after the `Role and approach` heading in the case-study narrative.

### Accessibility and disclosure

- Alt text: `A three-part transformation map shows Hydar's assigned SAFAPAC work between an incomplete local application and an AWS-hosted internal pilot. The dominant center scope covers backend and PostgreSQL, traceable calculations, container delivery, and AWS operations; TEA researchers, a frontend partner, and Airbus staff appear as context.`
- Caption: `Hydar's assigned engineering scope moved SAFAPAC from an incomplete local application toward an AWS-hosted internal pilot.`
- The collapsed text alternative names the three main states first, then identifies TEA researchers, the frontend partner, and Airbus staff as collaboration or validation context.
- Do not show proprietary formulas, defaults, report excerpts, exact metrics, customer data, internal URLs, environment identifiers, copied source diagrams, or claims of sole authorship or broad production maturity.

## `safapac-delivery`

- Type: secondary compact architecture visual.
- Recruiter takeaway: SAFAPAC connects from web to data through a clear service path supported by container, CI, AWS, and authentication concerns within the internal pilot.
- Title: `How SAFAPAC gets delivered`
- Main story: `Web app → HTTPS / Nginx → FastAPI → PostgreSQL`.

### Visible content

| Area | Label | Treatment |
| --- | --- | --- |
| Path | `Web app` → `HTTPS / Nginx` → `FastAPI` → `PostgreSQL` | Solid arrows; use the same neutral compact card treatment for each service |
| Platform | `Docker` · `CI` · `AWS` · `Auth` | Quiet supporting band, not a second process |

### Low-fidelity content mockup

```text
HOW SAFAPAC GETS DELIVERED

[ WEB APP ]  ──→  [ HTTPS / NGINX ]  ──→  [ FASTAPI ]  ──→  [ POSTGRESQL ]
                                             │
                         supports:  Docker · CI · AWS · Auth
```

The primary chain is the only strong relationship. The platform band supports the chain through a quiet rule or subtle upward links; it is not a linear sequence. On compact screens, stack the primary path and wrap the platform labels below it without shrinking the text into tiny nodes.

Placement: render immediately after the `Engineering decisions` heading in the case-study narrative.

### Accessibility and disclosure

- Alt text: `A compact SAFAPAC delivery path connects a web app through HTTPS and Nginx to a FastAPI backend and PostgreSQL. Docker, CI, AWS, and authentication form a supporting platform layer for the AWS-hosted internal pilot.`
- Caption: `High-level web-to-data delivery within Hydar's SAFAPAC backend, database, and AWS delivery scope.`
- The collapsed text alternative describes the four-part path first and the platform labels second; it must not imply a specific identity topology or expose internal configuration.
- Do not show account IDs, regions, instance sizes, costs, subnet or security-group topology, ports, credentials, internal URLs, customer data, copied cloud diagrams, or detailed security configuration.

## Contract boundary

Both figures are newly redrawn from the approved portfolio content contract and sanitized professional evidence. SAFAPAC remains an AWS-hosted internal pilot; no proprietary implementation detail or unsupported metric is part of the visual contract.

Hydar approved the revised titles, labels, shared rules, and mockups before implementation resumed.
