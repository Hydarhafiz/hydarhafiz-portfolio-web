# AIRIS Career Evidence

Status: Audited historical/local evidence registry
Last audited: 2026-09-16

## Narrative boundary

Hydar's strongest supported AIRIS story is rigorous evaluation and diagnosis: designing workload/token experiments, isolating bottlenecks, preserving quality caveats, and delivering recommendations for senior review. Implementation ownership and production impact must not be inferred from later code similarity.

## Claims

### AIR-LOAD-01 - Three-workflow concurrency analysis

- Status/confidence: `VERIFIED-HISTORICAL`, medium-high.
- Meaning: The archived analysis covered RAG Chat, Gap Analysis, and Policy Insight through stepped concurrency tests, including RAG tiers up to 50 users.
- Evidence class: `HISTORICAL_SNAPSHOT` and `AUDIT_RESULT`.
- Sources: `AIRIS contribution metrics.txt`; archive `locust/LOAD-TEST-REPORT.md` referenced by the audit.
- Allowed: resume, portfolio, interview with `benchmarked/tested` wording.
- Safe wording: `Benchmarked three AI workflows through stepped load and concurrency tests.`
- Do not claim: AIRIS supported 50 production users; every tier used the same duration/spawn rate; production SLA or capacity.
- Gap: raw ignored CSVs are historical working evidence and not complete reproducible release artifacts.
- Last audited: archive metric source and current wording rechecked, 2026-09-16.

### AIR-LOAD-02 - RAG bottleneck signal

- Status/confidence: `VERIFIED-HISTORICAL`, medium.
- Meaning: In the tested local/historical environment, average vector-search time rose from 4.8 seconds at 10 users to 51.0 seconds at 50 users, increasing from 30.5% to 76.9% of request time.
- Evidence class: `LOCAL_EXPERIMENT` / historical load artifact.
- Sources: `AIRIS contribution metrics.txt`; archived load-test report and referenced performance summary CSV.
- Allowed: resume (compressed), portfolio, interview with tested-environment qualification.
- Safe wording: `Identified vector-search/GPU saturation in stepped load tests, with average vector-search time rising from 4.8s at 10 users to 51.0s at 50 users.`
- Do not claim: production latency; a permanent root cause across deployments; that Hydar implemented or validated the final fix.
- Last audited: archive metric source and current wording rechecked, 2026-09-16.

### AIR-LOAD-03 - Analysis breadth and recommendations

- Status/confidence: `VERIFIED-HISTORICAL`, high for the count; medium for each root-cause interpretation.
- Meaning: The report documented ten named bottleneck findings/recommendations across the three workflows.
- Evidence class: `AUDIT_RESULT`.
- Sources: `AIRIS contribution metrics.txt`; archived load-test report summaries.
- Allowed: resume, portfolio, interview.
- Safe wording: `Documented ten bottleneck findings and recommendations spanning GPU contention, unbounded work, connection reuse, rate limits, VLM pooling, and memory behavior.`
- Do not claim: ten independently proven root causes; ten production fixes; measured incident reduction.
- Last audited: archive metric source and current wording rechecked, 2026-09-16.

### AIR-TOKEN-01 - Accepted local RAG token experiment

- Status/confidence: `VERIFIED-HISTORICAL`, medium-high for the accepted local artifact recorded in the archive.
- Meaning: An accepted v2 local controlled comparison measured 541,343 to 20,894 total local tokens across 6 scenarios/10 turns, a 96.1% reduction, while 10/10 citation checks passed.
- Evidence class: `LOCAL_EXPERIMENT` with accepted artifact.
- Sources: `AIRIS contribution metrics.txt`; underlying `ragchat-qwen36-comparison.json` and artifact manifest referenced there.
- Allowed: resume only with strict local-experiment qualification; portfolio and interview preferred.
- Safe wording: `Measured 96.1% fewer tokens in a controlled local RAG experiment across 6 scenarios/10 turns, with 10/10 citation checks passing.`
- Do not claim: 96.1% production cost savings; provider-billing reduction; production latency/quality improvement.
- Gap: confirm artifact and Git authorship in the actual repository.
- Last audited: archive metric source and current wording rechecked, 2026-09-16.

### AIR-ATTR-01 - Recommendation versus implementation attribution

- Status/confidence: `CONDITIONAL`, high confidence in the restriction.
- Meaning: Later review reportedly found several related patterns in the main branch, including shared throttling and connection reuse. Similarity and timing do not prove Hydar caused or implemented them.
- Evidence class: historical repository comparison plus missing causal provenance.
- Sources: prior career discussion; supplied AIRIS audit notes that Git history attributes key reports/artifacts to Hydar but not later production changes.
- Allowed: portfolio/interview only as a carefully qualified follow-up.
- Safe wording: `Delivered semaphore, queueing, and connection-reuse recommendations for senior engineering review; a later repository comparison found some related patterns in the main branch.`
- Do not claim: `my recommendations were implemented`; `I implemented the production semaphore/queue`; production gains caused by the report.
- Required upgrade evidence: PR, commit, issue, meeting note, or message explicitly linking a recommendation to a change and identifying implementation authorship.
- Last audited: archive metric source and current wording rechecked, 2026-09-16.

### AIR-ROLE-01 - Contribution boundary

- Status/confidence: `SELF-ATTESTED` supported by report authorship signals, medium-high.
- Meaning: Hydar designed tests, analyzed results, authored optimization recommendations/reports, and handed them to senior engineering/project leadership; he should not claim ownership of unrelated main-branch production implementation.
- Evidence class: `SELF_ATTESTATION`, Git attribution reported by audit, and artifact authorship.
- Sources: current resumes; `AIRIS contribution metrics.txt`; Git commits named in that audit.
- Allowed: resume, portfolio, interview.
- Safe wording: `Designed AI workload and concurrency tests, analyzed bottlenecks, and authored optimization recommendations for senior review.`
- Do not claim: overall AIRIS architecture ownership; implementation of all later changes; production outcome ownership.
- Last audited: archive metric source and current wording rechecked, 2026-09-16.

## Allowed summary themes

- Multi-workflow AI performance investigation.
- Subsystem-level bottleneck isolation rather than generic load reporting.
- Controlled token/quality experiments with explicit caveats.
- Evidence packages and recommendations for senior review.
- Mature separation of measurements, hypotheses, implementation ownership, and production claims.

## Do not claim

- Production cost reduction, provider-billing savings, adoption, uptime, or post-change production performance.
- `Supported 50 concurrent users` from a stress test with high latency and a recorded failure.
- Fixed Policy Insight reliability; the supplied audit records substantial remaining failures.
- Gap Analysis 30-user failure rate where report and retained CSV conflict.
- Horizon Scanning's 62.18% token reduction as an achievement without its recorded quality degradation.
- Exact test duration/ramp for every archived tier without retained execution proof.

## Current wording audit

| ID | Current wording/source | Verdict and safe disposition | Missing evidence |
| --- | --- | --- | --- |
| `CUR-AIR-01` | Resume says Hydar designed tests, analyzed bottlenecks, and authored recommendations for senior review. | `SELF-ATTESTED` but bounded and consistent with archived report-attribution signals; safe only without production-impact or implementation claims. | Assignment/handoff record for stronger ownership wording. |
| `CUR-AIR-02` | Any claim that AIRIS supported a user count, saved cost, improved production performance, or fixed reliability. | `PROHIBITED`. The retained evidence is controlled/local or conflicting historical output. | Production telemetry or a causal change record with before/after evidence. |
| `CUR-AIR-03` | Any claim that later semaphore, queueing, or connection-reuse code implemented Hydar's recommendations. | `PROHIBITED`. Similarity and timing do not establish causality. | PR, commit, issue, or review record explicitly linking recommendation, implementation, and author. |
