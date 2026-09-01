# Framework-neutral portfolio content contract

Status: Milestone 2 working contract. This is editorial source material, not an Astro content collection or UI implementation.

## Entry envelope

Each case-study or supporting-contribution entry carries:

```yaml
slug: stable-kebab-case-id
title: public title
kind: case-study | supporting-contribution
hierarchy: primary-professional | primary-personal | supporting
status: current public maturity/status label
period: public date or context range
context: organization, collaboration, or personal-project context
summary: short recruiter-readable overview
role: personal contribution boundary
capabilities:
  - name: technology or capability
    evidence: contribution that supports the name
narrative:
  - id: context | problem | role | approach | decisions | trade-offs | evidence | outcome | limitations
    heading: section heading
    body: public-safe editorial text
visuals:
  - id: stable-visual-id
    type: diagram | flow | timeline | screenshot
    purpose: why the visual exists
    elements: allowed nodes, labels, or regions
    relationships: allowed edges or sequence
    alt_text: plain-language description
    caption: public caption
    source_class: public-source | newly-redrawn | approved-public-artifact
    exclusions: prohibited detail list
disclosure:
  review_state: draft-pending-manual-review | approved
  allowed_claims: claim categories that may be published
  excluded_claims: claim categories that must not be published
  maturity_boundary: exact status language to preserve
sources:
  - public link or sanitized source category
```

## Editorial invariants

- The hierarchy value is part of the content contract, not a presentation preference.
- `role` describes Hydar's contribution and must not silently expand to team or product ownership.
- Every capability has an evidence-bearing contribution; unsupported skill lists are not valid content.
- `limitations` is required when the source has unresolved maturity, rollout, evaluation, result, or ownership boundaries.
- A visual is not ready for staging unless it has alt text, a caption, a source class, exclusions, and a disclosure state.
- `approved` means the manual disclosure review has actually passed. Draft content must remain `draft-pending-manual-review`.
- Source categories may establish provenance without exposing private paths, report text, copied diagrams, internal URLs, credentials, customer data, or sensitive measurements.

## Visual source policy

- SAFAPAC and AIRIS diagrams use `newly-redrawn` and must show only sanitized, role-level relationships.
- AnotherEdenAI visuals may use current public-source material, but the contract must identify the public source and preserve active-development wording. A newly drawn visual remains the default for architecture flows.
- A screenshot is never required to prove a claim. If a future screenshot is proposed, it needs a separate manual review for source, attribution, current state, and accidental private data.
