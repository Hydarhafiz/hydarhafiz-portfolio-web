# Planning sources and authority

## Authority order

1. Current public repository behavior and verified generated artifacts.
2. Hydar's explicit career, ownership, privacy, disclosure, and scope decisions.
3. Approved canonical roadmap, milestone, architecture, and content-boundary documents.
4. Sanitized conclusions drawn from private evidence, never the private files themselves.
5. Public first-party documentation and public project repositories.

## Approved private evidence classes

Private local references include the earlier CV, AMIC project documentation and reports, the PETRONAS internship presentation, and working project documentation. They establish claim provenance but are prohibited from Git and public reproduction unless a specific item is independently cleared.

## Public sources

- AMIC public website: https://amic.my/
- AnotherEdenAI repository: https://github.com/Hydarhafiz/AnotherEdenAI
- AWS certification badge pages supplied by Hydar
- Microsoft credential page supplied by Hydar
- Astro documentation: https://docs.astro.build/
- Cloudflare Pages Git integration: https://developers.cloudflare.com/pages/configuration/git-integration/
- Cloudflare Pages Git setup: https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare Pages custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Cloudflare Pages `www` redirect guidance: https://developers.cloudflare.com/pages/how-to/www-redirect/
- Cloudflare Pages Web Analytics: https://developers.cloudflare.com/pages/how-to/web-analytics/
- Cloudflare Pages rollbacks: https://developers.cloudflare.com/pages/configuration/rollbacks/
- Cloudflare DNS full setup and nameserver verification: https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
- Cloudflare Registrar domain registration: https://developers.cloudflare.com/registrar/get-started/register-domain/
- Cloudflare Registrar domain transfer: https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/
- GitHub protected branches: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches
- GitHub Actions workflow syntax: https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax

## Milestone 2 source verification

- The public AnotherEdenAI repository was rechecked on 2026-09-01 at public `main` revision `b56766c`. The README and first-party source confirm the graph ETL, Neo4j model, LangGraph workflow, typed validation/correction paths, candidate preparation, and SSE web path used by the planned narrative. The repository's current opening still uses maturity language that conflicts with the approved active-development contract; the portfolio must follow the approved contract and must not infer production readiness from repository activity.
- The same public `main` revision `b56766c` was reverified on 2026-09-05 for the career-positioning revision. First-party `src/workflow/production.py`, `lineup_generation.py`, `analyzer.py`, `graph.py`, formatting code, and workflow/evaluation tests support typed deterministic retrieval, backend candidate generation, structured candidate validation, bounded analyzer correction, provider-neutral adapters, output-token limits and usage capture, degraded backend fallback, and an opt-in evaluation harness. These support recruiter-readable architecture and control claims, but not completed evaluation, proven recommendation quality, measured savings, live deployment, or production-readiness language.
- Public-source implementation claims for AnotherEdenAI must be rechecked at feature execution time because the repository remains actively developed.
- SAFAPAC and AIRIS source materials remain local evidence only. Future durable source notes may name approved source categories and public links, but may not reproduce private report text, screenshots, diagrams, formulas, internal identifiers, or sensitive measurements.
- On 2026-09-05, Hydar explicitly confirmed personal implementation of SAFAPAC infrastructure through Terraform, Docker, GHCR, GitHub Actions, GitHub OIDC authentication to AWS, SSM-based deployment execution, VPC, EC2, RDS, S3, CloudFront, Cognito, Nginx, HTTPS, and staging/production environments. Public wording may describe Terraform-backed environment consistency and configuration-drift reduction plus short-lived OIDC authentication and SSM deployment execution, without exposing configuration detail or implying unsupported platform/SRE scope.
- AIRIS evidence review confirms that detailed architecture, service configuration, model details, security material, and performance/optimization artifacts are private source material. The portfolio contribution is limited to the approved workload/concurrency testing, bottleneck diagnosis, optimization research, accepted engineering handoff, and stakeholder training claims.
- On 2026-09-05, Hydar clarified that his AIRIS deliverable was testing and optimization reporting used jointly with the senior developer/project manager to identify improvements. Hydar proposed recommendations; the senior developer/project manager retained final decisions and implementation ownership.

## Milestone 6 launch authority and source notes

- On 2026-09-05, Hydar authorized Milestone 6 and explicitly approved adding `https://hydarhafiz.com` to the default, Backend, Cloud, and Applied AI resume outputs only after the site is live and launch checks pass.
- On 2026-09-05, Hydar approved a solo protected-branch policy: pull requests and passing CI/Cloudflare checks are required for `main`, but an additional reviewer approval is not required.
- As of 2026-09-05, `hydarhafiz.com` was not yet registered. Domain purchase or transfer/control and Cloudflare DNS onboarding are therefore the first human-dependent gate.
- Cloudflare's current Pages Git integration supports connected GitHub repositories, PR preview URLs, branch deployment controls, and deployment status checks. Production branch and preview behavior must be confirmed in the Pages dashboard after connection.
- Cloudflare's current custom-domain guidance requires an apex domain to be a Cloudflare zone with nameserver control. Manually creating only a CNAME without associating the custom domain in Pages is not an accepted setup.
- Cloudflare's current full-DNS guidance requires reviewing records and handling DNSSEC/DS state before replacing nameservers. Propagation can take time, so nameserver authority must be independently verified before Pages setup.
- Cloudflare Registrar can register available domains with Cloudflare nameservers automatically. A domain bought elsewhere can use Cloudflare DNS without moving the registrar; a registrar transfer is optional and has separate age, lock, verification, and authorization-code constraints.
- Cloudflare Pages provides one-click Web Analytics enablement and injects its beacon on a subsequent valid HTML deployment. Launch verification must confirm only the approved aggregate analytics behavior.
- Cloudflare Pages can roll back to any successful production deployment; preview deployments are not valid rollback targets. The launch checklist must record a known successful production target without storing credentials.
- GitHub protected branches support required pull requests and status checks, as well as force-push/deletion restrictions. The planned solo policy intentionally omits mandatory reviewer approval while retaining the required checks.

## Known gaps and conservative policy

- Exact SAFAPAC rollout size and geographic use are not verified; do not publish a user count or deployment-region claim.
- SAFAPAC formula/default data continues to be validated; retain beta/internal-validation wording.
- AIRIS recommendation implementation and resulting performance are outside Hydar's ownership; claim only his testing, analysis, reporting, recommendations, handoff, and training contribution.
- AnotherEdenAI evaluation and deployment remain active work; do not use production-grade or completed-quality language.
- Domain availability was not verified during planning; registration availability and pricing must be checked at the registrar checkout or Cloudflare purchase flow immediately before any purchase decision.
- Registrar account, Cloudflare account, payment, DNS, and GitHub authorization state are external and credential-dependent. The agent must not inspect or retain those credentials.
