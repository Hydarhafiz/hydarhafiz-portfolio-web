# SAFAPAC visual contracts

Status: approved. Both visuals are newly redrawn and disclosure-reviewed.

## `safapac-transition`

- Type: transformation timeline with responsibility lanes.
- Purpose: show how Hydar's assigned engineering scope moved from an inherited early-boilerplate starting point toward a more traceable, testable, and operationally dependable beta/internal-validation platform.
- Elements:
  - `Inherited application scope`
  - `Backend and PostgreSQL restructuring`
  - `Calculation boundary, traceability, and validation`
  - `Containerized CI/delivery and AWS operations`
  - `Deployed beta / internal validation`
  - Role lanes for `Hydar's assigned scope`, `TEA-SAF domain collaboration`, `frontend collaboration`, and `Airbus internal pilot validation`
- Relationships: left-to-right progression; collaboration lanes may connect to the engineering stages but must not imply that Hydar owned collaborators' work or the full product.
- Allowed labels: the generic stages above, approved technologies at category level, and the approved collaboration counts.
- Exclusions: proprietary formulas, report excerpts, exact metrics, customer data, internal URLs, environment names, infrastructure identifiers, copied source diagrams, and any claim of sole authorship.
- Alt text: `A left-to-right timeline shows an inherited application being strengthened through backend and data restructuring, traceable calculation and validation work, and containerized cloud delivery before deployed beta and internal validation. Separate lanes distinguish Hydar's assigned scope, domain and frontend collaboration, and Airbus pilot validation.`
- Caption: `From inherited application scope to a more traceable and deployable SAFAPAC beta — Hydar's assigned contribution shown with collaboration boundaries.`
- Source class: `newly-redrawn` from approved career/profile claims, disclosure rules, and sanitized professional evidence.

## `safapac-delivery`

- Type: high-level deployment and delivery architecture flow.
- Purpose: explain the delivery relationships Hydar operated without exposing proprietary infrastructure detail.
- Elements:
  - `Analyst-facing web application`
  - `HTTPS / Nginx edge`
  - `FastAPI backend`
  - `PostgreSQL data`
  - `Container image and CI delivery`
  - `AWS service categories: VPC, EC2/RDS, S3/CloudFront, Cognito`
  - `Beta / internal-validation environment`
- Relationships: user-facing application reaches the backend through HTTPS; the backend reads/writes PostgreSQL; CI publishes a containerized delivery path; the approved AWS categories host or support the application, data, static delivery, and authentication concerns at a high level.
- Allowed labels: service names already present in the approved public career/profile contract; generic arrows for request, data, image delivery, and authentication.
- Exclusions: account IDs, region, instance sizes, costs, subnet/security-group topology, ports, credentials, internal URLs, customer data, copied cloud diagrams, and detailed security configuration.
- Alt text: `A sanitized architecture flow connects an analyst-facing web application through HTTPS and Nginx to a FastAPI backend and PostgreSQL data, with containerized CI delivery and high-level AWS service categories supporting deployment, static delivery, and authentication.`
- Caption: `High-level SAFAPAC delivery relationships within Hydar's assigned backend, database, and AWS operations scope.`
- Source class: `newly-redrawn` from the approved career/profile contract and sanitized professional evidence.

## Redraw checklist

- [x] Shapes and labels are drawn from scratch.
- [x] No private screenshot, report, diagram, URL, identifier, or measurement is used as a visual source.
- [x] The beta/internal-validation status is visible in the caption or adjacent text.
- [x] Alt text and exclusions remain attached to the final asset contract.
- [x] Hydar manually approves disclosure before staging.
