# SAF Sky Quest — Rapid AWS Deployment for an Airbus Education Event

This is the durable content contract for the compact SAF Sky Quest supporting case study. It implements the approved Milestone 7 content contract without presenting the event deployment as frontend product ownership or interpreting the underlying registration data.

## Public narrative

SAF Sky Quest was a gamified quiz for an Airbus educational activation in Thailand from **15–25 August 2026**. It introduced primary- and secondary-school audiences to Sustainable Aviation Fuel and common recyclable/biofuel feedstock concepts. Participants scoring at least **8/10** were eligible for event rewards.

The frontend application was developed by another developer. Hydar owned the rapid hosting and event-infrastructure lifecycle: receiving the finished application, deploying it to AWS Lightsail, configuring the custom domain and Caddy HTTPS, operating the service during the activation, exporting runtime data, and decommissioning the infrastructure afterward.

The approved public event measure is **29 registration records captured**. It must not be reinterpreted as 29 students, schools, or unique users because the underlying Thai registration data has not been interpreted sufficiently to establish identity or uniqueness.

## Public boundary

- Keep SAF Sky Quest visibly supporting and below SAFAPAC, AIRIS, and AnotherEdenAI in project hierarchy.
- Attribute frontend implementation to another developer and Hydar's deployment, domain/HTTPS, operations, export, and decommissioning responsibilities explicitly.
- Do not publish runtime data, participant identities, event records, or an interpretation of the 29 records.
- Use the exact lifecycle: receive finished application → deploy to AWS Lightsail → configure custom domain and Caddy HTTPS → operate during the activation → export runtime data → decommission infrastructure.

## Visual contract

Use the companion `saf-sky-quest-lifecycle` visual to group the six lifecycle steps into three ordered stages. The visual must retain a linear accessible fallback and must not imply that Hydar developed the frontend application.
