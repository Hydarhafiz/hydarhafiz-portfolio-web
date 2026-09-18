# SAFAPAC — Backend & AWS Engineering for Sustainable Aviation Fuel Analysis

Status: AWS-hosted internal pilot

This is the durable content contract for the flagship SAFAPAC case study. It preserves the approved narrative boundary without reproducing proprietary formulas, default data, raw expert material, or internal infrastructure detail.

## Approved entry

- Hierarchy: primary professional / flagship.
- Route: `/safapac`.
- Context: Aerospace Malaysia Innovation Centre in collaboration with Airbus.
- Period: November 2025 – October 2026.
- Role: Backend Software Developer (Contract), with backend, database, calculation integration, Superadmin API, and AWS/DevOps responsibility.
- Supporting context: 6 TEA researchers and 5 Airbus staff.

## Required narrative

### Starting problem

Describe the incomplete local application, specialist calculation workflow, evolving expert methodology, large selector-dependent defaults, and need for repeatable AWS delivery.

### Turning methodology into executable contracts

Describe collaboration with LCA/carbon specialists on total CO2 emissions, carbon intensity, and carbon-conversion efficiency, and with TEA/business specialists on cash flow, NPV, IRR, and payback. State that expert input/output expectations became independent regression contracts rather than using current application output as the oracle.

### A boundary deliberately not automated

Explain that newer methodology material contained process/reference data not yet incorporated into the approved default workbook/application mapping. Hydar retained the approved v1.1 dataset rather than inventing process-feedstock-country relationships and used Superadmin direction for explicit future values.

### Default governance

Use **33,047 governed defaults across 12 processes, 22 feedstocks, and 217 countries**, with draft, publish, and rollback workflows and an approved backend handoff to the frontend developer.

### Current Superadmin status

State that core backend APIs are complete and meeting-approved, the frontend handoff is complete and frontend implementation is in progress, and remaining backend work is stale/experimental API cleanup plus direct add/modify/delete support for the active default set.

### Sensitivity redesign

State that the 33-point sensitivity workflow replaced 33 full calculation-engine executions with reusable prepared inputs and targeted NPV projections, with a verified **50 ms p95 across 10 staging acceptance cycles**. Do not add an old runtime or percentage speedup.

### AWS delivery

Explain the lean pilot rationale for Terraform, VPC, EC2, private RDS, S3/CloudFront, Cognito, Docker, Nginx, GitHub Actions, OIDC, and SSM. The approved operating-cost fact is **$51.27/month average from March–August 2026 across 20 billed AWS services**.

### TLS reliability

State that an expired certificate disrupted expert access, HTTPS was restored, and certificate renewal was automated so it now occurs automatically.

### Deployment safety and cost control

State that Terraform-managed staging validates releases, infrastructure changes, and rollback behavior, and that the implemented **six-hour automatic staging shutdown** reduces forgotten temporary-resource cost.

### Current state

Use the exact boundary: AWS-hosted internal pilot; core Superadmin backend approved and handed to frontend development; remaining backend work limited to cleanup/refactoring and direct active-default CRUD.

## Disclosure and attribution boundary

Hydar owns the assigned backend, database, calculation integration, Superadmin API, and AWS/DevOps scope. The frontend belongs to another developer; methodology ownership belongs to domain specialists. Do not claim sole product ownership, frontend ownership, SAF methodology authorship, worldwide adoption, unsupported production maturity, completed Superadmin workflows, or independent domain-expert management before the workflow is complete and used. Do not publish proprietary formulas, expected numeric fixtures, raw expert documents, internal identifiers, secrets, internal user data, or client-sensitive configuration.

## Visual contracts

Use the two newly redrawn figures in `docs/content/visual-contracts/safapac.md`: the transformation map after `Role and approach` and the high-level delivery path after `Engineering decisions`. Both must retain accessible alt text, captions, linear text alternatives, and the AWS-hosted internal-pilot boundary.
