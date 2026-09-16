# Career Claim Policy

Status: Audited registry policy
Last audited: 2026-09-16

## Evidence statuses

| Status | Meaning | Public use |
| --- | --- | --- |
| `VERIFIED-CURRENT` | Reproducible against current authoritative code, test, fixture, artifact, or accepted system evidence | Allowed within recorded channel and wording bounds |
| `VERIFIED-HISTORICAL` | Proven for an identified past snapshot or experiment | Allowed only with date/snapshot/local qualification |
| `SELF-ATTESTED` | Hydar directly reports an event or responsibility, but repository evidence alone does not prove it | Allowed only when explicitly approved and not contradicted; prefer interview/context over headline metrics |
| `CONDITIONAL` | Plausible and partly supported, but a conflict, missing denominator, attribution question, or incomplete verification remains | Do not publish stronger wording until checkpoint resolves |
| `TARGET-DESIGN` | Budget, limit, capacity target, configuration, or planned acceptance threshold | May describe design intent; never describe as achieved performance |
| `PROHIBITED` | Misleading, contradicted, causally unsupported, confidential, or materially unverified | Do not use publicly |

## Evidence classes

- `CURRENT_REPOSITORY`: current code, tests, authoritative fixtures, accepted artifacts, or queried system state.
- `ACCEPTED_DOCUMENT`: versioned current contract, milestone, architecture, runbook, or formal report consistent with current behavior.
- `AUDIT_RESULT`: reproducible audit with exact locators and commands.
- `HISTORICAL_SNAPSHOT`: archived repository/document/export; must be dated or otherwise identified.
- `LOCAL_EXPERIMENT`: controlled non-production benchmark or evaluation.
- `ESTIMATE`: modeled cost, capacity, savings, or extrapolation.
- `SELF_ATTESTATION`: owner-reported history not independently proven by repository evidence.
- `CURRENT_MARKETING_COPY`: resume/portfolio wording being audited; never self-validating.

## Wording rules

1. State what was owned, built, measured, or recommended before claiming impact.
2. Pair every metric with its denominator and environment when those change its meaning.
3. Say `defined in Terraform` when live application is not proven; say `deployed` only when operational evidence supports it.
4. Say `controlled local benchmark/experiment` for local results. Never shorten it into a production result.
5. Say `estimated` for modeled cloud cost or provider-cost calculations.
6. Say `collected`, `passed`, or `replayed` only for the exact verified set. Test collection is not a passing suite.
7. Distinguish `recommended`, `implemented by Hydar`, `implemented by another contributor`, and `later observed in the codebase`.
8. Later architectural similarity does not establish that a recommendation caused a change.
9. Inventory size does not establish adoption, performance, completeness, or business impact.
10. Preserve negative evidence and measured trade-offs. A recall gain paired with a precision loss may not be advertised as overall accuracy improvement.

## Required claim state and attribution

Every claim entry must state whether its evidence is `current`, `historical`, `local-only`, `estimated`, `target/design`, or `self-attested`. `VERIFIED-CURRENT` is reserved for a presently reproducible authoritative source; an audit report that says “current” about an inaccessible archive is still historical evidence for this registry.

Every claim also needs an attribution boundary. Technical presence in a repository does not prove sole authorship, operational ownership, deployment, adoption, or causation. A later similar pattern does not prove that a recommendation caused the change. If a source cannot settle a material boundary, use the weakest safe wording and name the missing evidence.

## Public-safety questions

Before authorizing a claim, verify:

- Is the underlying information suitable for a public repository/resume?
- Does it reveal confidential formulas, data, customer information, internal endpoints, account details, or credentials?
- Is the source licensed/approved for this use?
- Does the wording preserve employer and teammate attribution?
- Could a reasonable reader interpret an estimate, target, prototype, staging state, or local experiment as production impact?

If any answer is unclear, keep the source gitignored, record only a sanitized claim summary, and mark the wording `CONDITIONAL`.

## Claim upgrade rule

A stronger claim requires stronger evidence, not merely more confident prose.

Examples:

- `planned 50-user test` cannot become `supported 50 users` without accepted result evidence.
- `patterns later appear in main` cannot become `my recommendations were implemented` without provenance linking the report to the change.
- `30,000+ records reported` cannot become `30,000 datasets` and remains conditional until the query, export, or accepted artifact establishes the count and denominator.
- `40,000-token usage guard` cannot become `inputs capped at 20,000 tokens` when observed calls exceeded the target.

## Conflict rule

When sources disagree:

1. preserve both exact observations;
2. prefer the higher-authority and more recent source;
3. use the weakest wording both sources support;
4. record the missing check needed to resolve the conflict;
5. ask for a human decision only when evidence cannot settle an important authority question.

## Registry maintenance

- Update `Last audited` when the source was actually rechecked, not when wording was merely edited.
- Retire stale claims explicitly when their risk remains relevant.
- Keep raw/private sources ignored; store checksums and sanitized locators when needed.
- Never rely on `.sdd/` as the only location of an accepted claim decision.
