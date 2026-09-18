# Career Evidence Registry

Status: Audited standalone research baseline
Last audited: 2026-09-16

This directory is the durable claim and positioning memory for Hydar Hafiz's resumes, portfolio, LinkedIn material, recruiter communication, and interview preparation. It records what the 2026-09-16 repository-local audit can prove; it does not authorize a resume or site rewrite.

It exists so a fresh ChatGPT or Codex conversation does not have to reconstruct months of project history from one enormous prompt. Raw evidence may remain local and gitignored; the durable conclusions, qualifications, conflicts, and claim boundaries live here.

## Authority model

Use sources in this order:

1. Current underlying project behavior plus authoritative tests, fixtures, accepted artifacts, and versioned source contracts.
2. Accepted current milestone/architecture documentation that agrees with implementation evidence.
3. Reproducible audit outputs with exact source locators and clear current/historical/local qualifications.
4. Historical snapshots and gitignored source archives.
5. Current resume and portfolio wording.
6. Self-attested operational history or conversation notes.
7. Inference.

Lower layers can identify what to investigate. They cannot silently override a higher layer or upgrade an unsupported claim.

The active software milestone remains governed by `docs/core/milestone.md`. During Milestone 7, that milestone is the sole authority for public career meaning and wording; this registry is supporting historical research and evidence context only. `.sdd/` remains reconstructable execution cache and must never be the only home of a durable claim decision.

## Registry map

| File | Purpose |
| --- | --- |
| `claim-policy.md` | Shared evidence classes, wording rules, and anti-hallucination boundary |
| `SAFAPAC.md` | Backend, database, calculation, defaults-governance, and AWS evidence |
| `AIRIS.md` | AI workload analysis, token experiments, recommendations, and attribution boundary |
| `AnotherEdenAI.md` | Personal-project architecture, evaluation evidence, limitations, and current status |
| `job-market-findings.md` | Evidence-based application targeting and resume-message findings |

## Claim entry contract

Every material claim contains:

- a stable project-prefixed ID;
- status and confidence;
- evidence class;
- exact source locator;
- explicit state (`current`, `historical`, `local-only`, `estimated`, `target/design`, or `self-attested`);
- allowed usage channels;
- safe wording;
- prohibited wording;
- attribution and causality boundary;
- unresolved gap or conflict;
- last-audited date.

Do not delete a rejected or conditional claim merely to make the registry look cleaner. Preserve the reason while the risk remains relevant. Git stores ordinary wording evolution; this registry stores current truth and currently important caveats.

## Local source manifest

These files are audit inputs, not tracked public assets. The hashes identify the local copies inspected on 2026-09-16. They neither make a raw archive current authority nor expose its contents.

| Local input | SHA-256 inspected | Role |
| --- | --- | --- |
| SAFAPAC architecture source | `39db7481923075a0c2385c14d46f4529e3190c1a34908c4d23c2404dac49361e` | Historical implementation/design context |
| `SAFAPAC contribution metrics.txt` | `8d6ab383b4fd8c8884bf95ca3c7f237e317ccf6e98a96c9fa40f424f4ea4555e` | Metric audit |
| `AIRIS contribution metrics.txt` | `cf48eca95be6fb5534c9516f94d2885fc7c568bbf0b98854b5bed4a989918dda` | Metric audit |
| `Anotheredenai metrics.txt` | `e04a105d124bbbade82f6b8f9e46f40317d444f7afd2c8810b22b9e6dce46928` | Metric and acceptance-state audit |
| SAFAPAC AWS pilot PDF | `095d3c639fab8d4d9e3d38ca0f58accc31f1d6be9d1a6e84a1cd81a4990e2fd9` | Pilot design and estimate, not deployment proof |
| AnotherEdenAI C1.1 artifact | `a2f1bbb8b9d603ea831d24c8ed018a13bf7e01f4f129da56e6ec3f51660b37fd` | Historical source-fidelity artifact |
| AnotherEdenAI C1 artifact | `993d57474feae1e0cdc2f212c5d4a955ae4f87f68991943a721feb706def4be2` | Historical structural-evidence artifact |
| AnotherEdenAI C2 artifact | `fe6930227b766fcdbe2e72d874e41a281826098b23e721ae2c07df780c30d769` | Historical recall/precision evaluation artifact |
| AnotherEdenAI high-value artifact | `b76d3c26f101585eb431d9a6f9818755c431f510d6cbff702bd2d3d3998cf7bb` | Historical extraction artifact |
| Current private Backend/Cloud/AI PDFs | `84d2350f5bfd9f1c492062b5fbd0b8c851d391147afebf0e8971604e29a4cc5d`; `ce59b72b7fc27f54b3c2ce16ccfc237531ed5bb82d13c2731f33318b298cfba7`; `ca50b7ba754f86b5374a601ef4a73ac5bc89f52a321bb84639bb4c439cb7ba5f` | Private wording inputs; identities only, never stage or quote contact data |

## Required workflow

1. Audit evidence before planning a career refresh.
2. Update this registry without rewriting resumes or the site in the same feature.
3. Treat the completed evidence baseline as the input to a later, separately approved resume/portfolio feature.
4. Reconstruct later work from Git, `docs/core/milestone.md`, this registry, and current files.

## Global constraint for later features

No resume or portfolio feature may introduce a quantitative result, business impact, implementation attribution, production claim, completion claim, or scale claim absent from this registry. If stronger wording is desired, return to evidence audit rather than infer it.
