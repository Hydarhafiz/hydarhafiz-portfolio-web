# Active milestone: Job-search foundation

## Outcome

Make Hydar ready to apply for backend software engineering roles with a confidentially safe public repository, a defensible one-page application CV, and consistent recruiter-facing profile copy. Portfolio implementation is outside this milestone.

## Feature A — Public-safe repository foundation

- Type: build
- Status: completed
- Route: `contract-auditor -> feature-planner -> builder-executor -> tdd-loop`
- Outcome: protect private evidence before the first commit and establish canonical program decisions.
- Scope: defensive ignores, prohibited-path automation, public README, roadmap, active milestone, architecture, disclosure boundary, and planning sources.
- Non-goals: Astro scaffolding, CV content/rendering, case-study prose, deployment, moving or deleting private source files.
- Acceptance:
  - A-01: Confidential references, the stale CV, private outputs, environment files, and ephemeral SDD state are ignored.
  - A-02: A durable script and CI workflow reject prohibited tracked paths and pass their own boundary test.
  - A-03: Canonical documentation preserves the approved career, content, architecture, privacy, and milestone decisions without confidential implementation detail.
  - A-04: The first feature commit contains only public-safe files; ignored private sources remain local and unmodified.
- Manual checkpoint: none.
- Evidence: boundary script syntax and self-tests pass; workflow YAML parses; Git ignore checks confirm private references, stale CV, and ephemeral SDD state remain excluded; final staged-path inspection contains only public-safe feature files.
- Commit boundary: one completed-feature commit.

## Feature B — ATS-ready CV V2

- Type: build
- Status: pending
- Route: `feature-planner -> builder-executor -> tdd-loop`
- Outcome: generate a recruiter-scannable, one-page backend CV from structured verified career data.
- Scope: semantic resume source, print CSS, automated Chromium rendering, a public PDF without phone, and an ignored private application PDF with phone.
- Non-goals: multi-page CV, photo, self-rated skill levels, unsupported metrics, or DOCX at launch.
- Acceptance:
  - B-01: CV uses the approved backend/cloud/applied-AI positioning and accurate evidence hierarchy.
  - B-02: Public and private outputs share professional content; only the private variant contains the phone number.
  - B-03: PDF is one page with selectable text, sensible extraction order, working links, and accurate metadata.
  - B-04: No stale or unsupported percentage, performance, accuracy, or ownership claim remains.
- Manual checkpoint: user approves final CV wording and rendered application PDF.
- Commit boundary: one completed-feature commit containing only public-safe artifacts.

## Feature C — Recruiter-profile alignment package

- Type: build
- Status: pending
- Route: `feature-planner -> builder-executor -> tdd-loop`
- Outcome: provide consistent, ready-to-apply LinkedIn and GitHub profile copy and a calibrated AnotherEdenAI public-description contract.
- Scope: headline, About/summary, location and availability, AMIC/PETRONAS descriptions, project summaries, capability groupings, and an external-update checklist.
- Non-goals: publishing to external accounts without authorization, modifying the separate AnotherEdenAI repository without its own safe write scope, or claiming unfinished work as complete.
- Acceptance:
  - C-01: Identity, dates, role, location, availability, certifications, and project ownership match the CV contract.
  - C-02: AnotherEdenAI is described as actively developed and does not use unsupported production or completion claims.
  - C-03: LinkedIn and GitHub updates are concise and ready for the user to apply.
- Manual checkpoint: user reviews external-facing copy before updating accounts.
- Commit boundary: one completed-feature commit.

## Milestone exit gate

- Private application CV is accurate, approved, one page, and includes the phone number.
- Public resume omits the phone number.
- LinkedIn/GitHub alignment copy is approved and ready to apply.
- Public repository contains no prohibited source or private-contact material.
- Applications can begin without waiting for the portfolio site or AnotherEdenAI completion.
