# SAF Sky Quest visual contract

Status: approved for Milestone 7 Feature 7E.

SAF Sky Quest is the supporting cloud-deployment case study. Its visual should show a real-event delivery lifecycle, with teammate attribution and the closeout step visible without publishing runtime data. Apply the [shared diagram rules](./shared.md).

## `saf-sky-quest-lifecycle`

- Type: compact three-stage deployment lifecycle.
- Recruiter takeaway: Hydar took a finished frontend application through hosting, event operation, data export, and infrastructure closeout.
- Title: `From finished app to event closeout`.
- Main story: `Handoff and deploy → Activation → Closeout`.

### Visible content

| Stage | Label | Supporting phrase | Treatment |
| --- | --- | --- | --- |
| 1 | `Handoff & deploy` | `Receive finished app` · `AWS Lightsail` | Entry stage; the frontend is received from another developer. |
| 2 | `Activation` | `Custom domain + Caddy HTTPS` · `Operate event` | Dominant delivery/operations stage. |
| 3 | `Closeout` | `Export runtime data` · `Decommission` | Explicit lifecycle completion, without displaying the data. |

Ownership rail: `Frontend application · another developer` and `Cloud delivery + event operations · Hydar`.

### Accessibility and disclosure

- Alt text: `A three-stage SAF Sky Quest deployment lifecycle groups six steps: receive the finished frontend application and deploy it to AWS Lightsail; configure a custom domain and Caddy HTTPS and operate during the Thailand activation; export runtime data and decommission the infrastructure. The frontend was developed by another developer; Hydar owned cloud delivery and event operations.`
- Caption: `Hydar's rapid hosting and event-infrastructure lifecycle for the SAF Sky Quest activation.`
- The collapsed text alternative lists all six lifecycle steps in order and preserves frontend attribution.
- Do not show runtime records, participant identities, account or resource identifiers, private URLs, credentials, or unsupported event-impact claims.
