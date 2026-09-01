# Hydar Hafiz portfolio UX/UI specification

Status: Milestone 3 approved-scope working specification

Date: 2026-09-01

## 1. Product brief

This is a recruiter-readable portfolio for Hydar Hafiz bin Hydzelan, positioned as a Backend Software Engineer based in Bangi, Selangor, Malaysia. The first public launch should help a recruiter or hiring manager understand Hydar's backend, cloud, and applied-AI strengths quickly, then provide enough engineering substance for a closer read.

Primary user goals:

1. Understand Hydar's role, location, availability, and backend positioning within the first screenful.
2. Scan selected work and distinguish professional ownership from personal-project ownership and supporting contribution.
3. Open a case study and understand the problem, contribution boundary, engineering decisions, evidence, limitations, and current status.
4. Download the public resume or continue to email, LinkedIn, and GitHub.

Secondary user goals:

- See a coherent technical point of view around reliable backend and applied-AI systems.
- Find public implementation evidence for AnotherEdenAI without mistaking active development for production maturity.
- Read the site comfortably on a phone, with a keyboard, at high zoom, and in either supported theme.

Design success means that hierarchy, status, contribution boundaries, and limitations remain understandable without color, animation, private context, or a site-specific interaction. The interface must never add a claim that is absent from the approved source content.

## 2. Authority and non-negotiable boundaries

The implementation team must treat these sources as the content authority, in order:

1. Current repository behavior and verified public/generated artifacts.
2. `resume/career-data.json` and `docs/career/profile-alignment.md` for approved career facts and public wording.
3. `docs/core/architecture.md`, `docs/core/content-boundary.md`, `docs/core/planning-sources.md`, and `docs/core/roadmap.md`.
4. The approved Milestone 2 content, disclosure, and visual contracts under `docs/content/`.

The following are fixed product constraints:

- SAFAPAC is the primary professional case study.
- AnotherEdenAI is the primary personal case study and must be labelled `actively developed`.
- AIRIS is a compact supporting contribution; it must not become a fourth flagship or a dedicated route.
- SAFAPAC retains `deployed beta / internal validation` wording and Hydar's assigned backend, database, calculation-traceability, validation, testability, documentation, and AWS delivery boundary.
- AIRIS retains workload/concurrency testing, bottleneck diagnosis, optimization research, accepted engineering handoff, and stakeholder training wording without architecture ownership, recommendation implementation, or production-improvement claims.
- No phone number is shown anywhere in the public site.
- No confidential employer material, copied diagrams, private screenshots, internal URLs, credentials, customer/stakeholder data, proprietary formulas, exact private metrics, or unapproved performance/evaluation claims are presented.

The approved visual contracts are drawing specifications, not source images. Any later asset must be newly drawn or recreated from the contract and reviewed for disclosure before staging.

## 3. Technical-editorial design direction

### 3.1 Editorial character

The visual language is a calm technical editorial: strong typographic hierarchy, generous whitespace, short readable measure, ruled sections, quiet metadata, and diagrams that explain engineering relationships. It should feel authored and precise rather than like a template or a product dashboard.

Use:

- Off-white paper-like light foundation, charcoal text, restrained blue-teal accents, and quiet border rules.
- A small index system such as `01`, `02`, `03` for major sections and case-study chapters.
- Short labels, captions, status markers, and source notes that make context visible before detail.
- Flat surfaces with a border and occasional restrained shadow; cards are grouping devices, not floating glass panels.
- Original line diagrams, timelines, and flow structures with consistent stroke, node, and label treatment.
- Project anchors that change motif and accent subtly while remaining one coherent site.

Avoid:

- Terminal or hacker styling, fake command prompts, code rain, or monospaced body copy.
- Generic AI neon imagery, glowing network globes, decorative particle fields, and stock technology photography.
- Excessive glassmorphism, gradients used as the primary hierarchy, oversized logo walls, and dashboard-like metric tiles.
- Animation-showcase behavior, automatic carousels, scroll hijacking, parallax, and hidden content revealed only by motion.
- Self-rated skill bars or levels. Capabilities are grouped evidence, not scores.

### 3.2 Layout and spacing

The later implementation should express these as design tokens rather than scattered values.

| Token | Direction | Requirement |
| --- | --- | --- |
| Page width | wide | Keep primary content within approximately 72rem; let diagrams use the available figure width without making prose lines too long. |
| Reading measure | all | Keep long-form prose near 65–75 characters per line. |
| Page gutter | compact / standard / wide | Start at 1rem, grow to 1.5rem, and cap near 2.5rem as viewport width increases. |
| Section rhythm | all | Use a visible change of rhythm between chapters; prefer a small set of spacing steps over arbitrary margins. |
| Surface depth | all | Use borders and tonal shifts first; use shadows only to separate interactive overlays or the header from content. |
| Diagram padding | all | Give labels and focusable links breathing room; never crop a caption or legend to preserve a visual ratio. |

The grid is editorial rather than card-dense. On wide screens, a page may use a readable main column with a narrow metadata or table-of-contents rail. On compact screens, everything becomes one ordered column.

### 3.3 Typography

Use the locally pinned Source Sans 3 family already used by the resume so the public package has a coherent voice and does not depend on a remote font service. Use weight and size contrast instead of many families.

- Display heading: strong, compact sans; use a fluid size roughly in the 2.75–5rem range with a tight line height.
- Page and section headings: clear stepped hierarchy; never skip heading levels for visual size.
- Body: approximately 1rem with a comfortable 1.55–1.7 line height.
- Metadata: smaller text with increased letter spacing and sentence case or restrained uppercase; never use low contrast to make it disappear.
- Labels and status: short, explicit text. A status label must still make sense when its color is removed.
- Code or source identifiers: use a system monospace only for small, purposeful identifiers, never for paragraphs.

Links are visibly links through color plus underline or a clear adjacent affordance. Hover should refine the treatment, not be the only way to discover interactivity.

### 3.4 Color and project anchors

These are starting tokens for implementation and must be contrast-tested in both themes before release. The semantic role is more important than the literal value.

| Role | Light treatment | Dark treatment | Use |
| --- | --- | --- | --- |
| `canvas` | warm off-white, approximately `#F6F4EF` | deep charcoal, approximately `#11191D` | Page background. |
| `surface` | white, approximately `#FFFFFF` | blue-charcoal, approximately `#1A262B` | Figures, callouts, and grouped content. |
| `surface-muted` | pale blue-grey, approximately `#EEF2F1` | lighter blue-charcoal, approximately `#223237` | Secondary grouping and code/source notes. |
| `text` | charcoal, approximately `#17212B` | near-white, approximately `#F4F6F5` | Body and headings. |
| `text-muted` | slate, approximately `#4B5A61` | pale slate, approximately `#B7C5C7` | Supporting metadata; still readable. |
| `border` | cool grey, approximately `#C8D2D3` | muted slate, approximately `#42545A` | Rules, card edges, diagram structure. |
| `accent` | deep blue-teal, approximately `#0E6277` | bright muted teal, approximately `#70C5C9` | Links, primary actions, active navigation. |
| `accent-soft` | pale teal, approximately `#DCECEF` | deep teal tint, approximately `#233F43` | Non-text project washes and selected states. |
| `focus` | dark amber, approximately `#8A4B00` | warm amber, approximately `#F3B562` | Focus ring and attention state; verify against each surface. |

Project anchors are semantic accents, not separate themes:

- SAFAPAC: blue-teal, ordered transformation timeline, delivery boundaries, and responsibility lanes.
- AnotherEdenAI: restrained blue-violet secondary accent, graph nodes, guarded branches, and an explicit active-development marker.
- AIRIS: restrained warm amber secondary accent, signal/observation markers, and a compact handoff flow.

Anchor accents may tint rules, small labels, and diagram nodes. Body text, status meaning, and interaction state must not depend on anchor color alone. Each status must include a text label and each diagram must have a caption/alternative.

## 4. Information architecture and page hierarchy

### 4.1 Launch routes

```text
/
├── selected work
│   ├── /safapac
│   └── /anotheredenai
├── /resume
└── 404 fallback
```

There is no work index page at launch. The homepage is the recruiter entry point and links directly to the two flagship case studies. AIRIS is presented in the homepage work section and may be referenced in the homepage AMIC experience block—not as `/airis`.

Reserved future concepts such as `/writing` or `/notes` may be accommodated by the content model, but they are not navigation items or routes in this milestone. About, Skills, Experience, AIRIS, Blog, Writing, and Notes routes remain deferred.

### 4.2 Global shell

Every page uses the same shell:

1. Skip-to-content link, visible on focus.
2. Header with the Hydar wordmark/name, primary navigation, theme control, and a compact menu control on small screens.
3. Main content with exactly one page-level `h1`.
4. Footer with email, LinkedIn, GitHub, public resume link, current availability where useful, and copyright/identity text if desired.

Primary navigation labels should be `Work` (homepage work anchor), `Resume`, and a direct `Contact` or `Email` action. Case-study pages can include breadcrumbs and previous/next work links without adding a work index route.

The header must not imply that the domain is live before deployment. The portfolio URL itself is only added to external profiles after the later launch milestone confirms the domain is live.

### 4.3 Hierarchy rules

| Priority | Content | Presentation |
| --- | --- | --- |
| 1 | Backend positioning and primary CTA | Homepage hero and first action group. |
| 2 | SAFAPAC | Largest selected-work treatment; primary professional label is visible before the title or immediately beside it. |
| 3 | AnotherEdenAI | Equally deliberate flagship treatment, with `Actively developed` visible in the card and page header. |
| 4 | AMIC/PETRONAS experience and capabilities | Scannable homepage sections, not separate routes. |
| 5 | AIRIS | Compact supporting contribution subordinate to the flagships. |
| 6 | Certifications, resume, and contact | Clear conversion/support sections near the lower homepage and in the footer. |

## 5. Shared component and content presentation contract

### 5.1 Component hierarchy

The implementation should keep the visual system in reusable components with content supplied by data/MDX. Names below are conceptual contracts, not final code requirements.

```text
SiteLayout
├── SkipLink
├── SiteHeader
│   ├── BrandLink
│   ├── PrimaryNav
│   ├── ThemeToggle
│   └── MobileNavDisclosure
├── Main
│   └── Page-specific content
└── SiteFooter

Editorial primitives
├── Breadcrumbs
├── PageIntro
├── SectionHeading
├── MetadataList
├── StatusBadge
├── CallToAction
├── Prose
├── BoundaryCallout
├── SourceList
└── AdjacentWorkNav

Homepage blocks
├── HeroPanel
├── SelectedWork
│   ├── FeaturedCaseStudyCard
│   └── SupportingContributionCard
├── ExperienceList
├── CapabilityGroups
├── CertificationList
└── ContactPanel

Case-study blocks
├── CaseStudyHeader
├── CaseStudyToc
├── NarrativeSection
├── DecisionList
├── VisualFigure
│   ├── FigureCanvas
│   ├── FigureLegend
│   └── FigureFallback
├── EvidenceCallout
├── LimitationsSection
└── AdjacentWorkNav

Resume and fallback
├── ResumePage
├── ResumeEntry
├── CredentialList
└── NotFoundPage
```

### 5.2 Framework-neutral content mapping

The shared content envelope in `docs/content/contract.md` remains the source shape. UI components must not duplicate case-study claims in component code.

| Content contract field | Presentation |
| --- | --- |
| `identity` fields | Page title, hierarchy label, status badge, period, context, and breadcrumb metadata. |
| `summary` | Page intro and homepage card summary. Keep the homepage version shorter when needed; do not change its claim boundary. |
| Narrative entries | Ordered sections keyed by stable narrative IDs such as `context`, `problem`, `role`, `approach`, `decisions`, `trade-offs`, `evidence`, `outcome`, and `limitations`. |
| `role` | A visible contribution-boundary line near the page title and, where necessary, a boundary callout. |
| `capabilities` | Evidence-bearing grouped tags/list items. Show the supporting contribution in text; do not render levels or scores. |
| `visuals` | `VisualFigure` with contract ID, title, drawing, caption, alt text, source class, and exclusions. |
| `disclosure` | Visible maturity/boundary callout and limitations content. Never expose private source paths or internal review notes. |
| `sources` | Public links or sanitized source categories in a compact source note. Do not link to private material. |

`VisualFigure` must have a visible title or lead-in, a caption, a plain-language text alternative, and an adjacent explanation when the relationships are important to the narrative. If a visual cannot be understood at compact width, the same sequence or relationships must be provided as a linear accessible fallback.

### 5.3 Content presentation rules

- Use short paragraphs, bullets, and subheadings for recruiter scanning; keep the technical narrative intact on the case-study pages.
- Put status and contribution boundary before the reader reaches deep detail.
- Use `<dl>`-like metadata for period, context, role, and status where appropriate; use lists for capabilities and decisions.
- Limit badges to meaningful metadata: hierarchy, status, and public-source/newly-redrawn context. Do not turn every technology into a pill.
- Preserve limitations as a first-class section. Never hide them behind a required click.
- External links should have descriptive labels. A new tab is not required; if used, announce it.
- Render only approved public links. Disclosure source categories may be shown as plain text, never as private filenames or paths.

## 6. Page specifications

### 6.1 Homepage `/`

Purpose: establish positioning, evidence hierarchy, and clear next actions in one focused recruiter entry point.

#### Order and content

1. **Hero / positioning**
   - Eyebrow: `Backend Software Engineer`.
   - H1: a concise backend/reliability/applied-AI positioning statement sourced from the approved profile and resume language.
   - Supporting copy: Python, FastAPI, PostgreSQL, AWS, and applied-AI systems; keep the sentence factual and compact.
   - Metadata: `Bangi, Selangor, Malaysia` and `Available November 2026`.
   - Primary CTA: `View selected work` to the work anchor.
   - Secondary CTAs: `Download resume` and a clearly labelled email/LinkedIn/GitHub action.
   - Optional side panel: a small editorial index of `Backend`, `Cloud & DevOps`, and `Applied AI`, not a skill scorecard.

2. **Selected work**
   - Section intro explains that these are selected engineering contributions.
   - SAFAPAC appears first as the largest featured card, marked `Primary professional case study` and `Deployed beta / internal validation`.
   - AnotherEdenAI appears second as a flagship card, marked `Primary personal case study` and `Actively developed`.
   - Each card shows summary, role/context, period, 2–4 evidence-bearing capability labels, and a `Read case study` link.
   - AIRIS appears as a compact supporting row/card marked `Supporting contribution`, with no visual weight equal to the flagships and no route link required.

3. **Experience**
   - AMIC first, with the approved Backend Software Developer (Contract) dates and a concise version of the SAFAPAC/AIRIS contribution boundary.
   - PETRONAS Digital second, framed as collaborative Web & Mobile Development Intern work on a MEAN/Ionic onboarding prototype.
   - Keep experience content on the homepage; do not create an Experience route.

4. **Capabilities backed by work**
   - Four exact groups: `Backend`, `Cloud & DevOps`, `Applied AI`, and `Supporting Technologies`.
   - Each group presents technologies as a readable list and may include a one-line evidence link/anchor to the relevant work or experience.
   - Do not add self-rated levels, unsupported technologies, or a separate Skills page.

5. **Credentials**
   - Show the three approved certifications with issuing organization, issue month/year, and verification links.
   - Education may appear as a compact supporting item, using the approved institution, qualification, and dates.

6. **Contact / availability**
   - Repeat `Available November 2026` and the Malaysia-first positioning.
   - Show email, LinkedIn, GitHub, and resume download.
   - Never show the phone number, application CV, interview logistics, or private contact details.

#### Homepage visual behavior

The hero is text-led and can use a quiet ruled index or small diagrammatic mark. It must not use a generic AI illustration. Selected work uses editorial cards with an accent rule and a small project motif; the two flagships remain recognizable without their accent color.

On compact screens, the order is hero, primary CTA, SAFAPAC, AnotherEdenAI, AIRIS, experience, capabilities, credentials, contact. The first CTA and status labels must remain above the fold after normal browser chrome and must not be hidden in a carousel.

### 6.2 SAFAPAC `/safapac`

Purpose: show the primary professional case study with a clear personal contribution boundary and public-safe engineering narrative.

#### Header

- Breadcrumb: `Home / Selected work / SAFAPAC`.
- Hierarchy label: `Primary professional case study`.
- Status: `Deployed beta / internal validation`.
- H1: `SAFAPAC`.
- Summary: use the approved one-sentence summary.
- Metadata: `November 2025 – October 2026`, `Aerospace Malaysia Innovation Centre in collaboration with Airbus`, and `Backend Software Developer (Contract)`.
- Boundary callout near the header: Hydar inherited an early boilerplate implementation and substantially rebuilt and productionized the assigned backend, database, calculation-traceability, validation, testability, documentation, and AWS delivery scope. This is not a whole-product or sole-authorship claim.

#### Narrative order

1. Context and sustainable aviation fuel analysis purpose.
2. Problem in the inherited application scope.
3. Role and approach across backend, PostgreSQL, calculation workflows, and delivery.
4. Engineering decisions and trade-offs.
5. Collaboration boundary: five TEA-SAF domain researchers, one frontend developer, and a separate five-person Airbus internal pilot group as validation context.
6. `safapac-transition` visual.
7. `safapac-delivery` visual.
8. Outcome: traceability, validation, testability, documentation, and release reliability in the deployed beta/internal-validation context.
9. Limitations: no proprietary formulas/defaults, rollout size/geography, private artifacts, costs, or unapproved measurements.

The page may use a desktop table-of-contents rail keyed to these sections. On small screens it becomes an inline, keyboard-operable contents disclosure or an ordered list before the narrative.

#### Visual treatment

Use a blue-teal ordered transformation motif. The transition timeline is the primary visual: inherited scope, backend/data restructuring, calculation boundary and validation, containerized CI/delivery and AWS operations, then deployed beta/internal validation. Responsibility lanes must be labelled in text and not imply Hydar owned collaborators' work.

The delivery figure is a separate high-level relationship diagram connecting analyst-facing web application, HTTPS/Nginx edge, FastAPI backend, PostgreSQL data, container/CI delivery, and approved AWS service categories. It must not show formulas, internal endpoints, account/region identifiers, network topology, secrets, customer data, detailed security configuration, or copied cloud diagrams.

Use the exact approved alt text and captions from `docs/content/visual-contracts/safapac.md` at implementation time. Keep `newly-redrawn` visible in internal production metadata, not as an unnecessary public claim.

### 6.3 AnotherEdenAI `/anotheredenai`

Purpose: show the primary personal case study as an active engineering project with public-source-grounded implementation detail and explicit maturity limits.

#### Header

- Breadcrumb: `Home / Selected work / AnotherEdenAI`.
- Hierarchy label: `Primary personal case study`.
- Status: `Actively developed` must be visible in the eyebrow, badge, and/or first metadata group.
- H1: `AnotherEdenAI`.
- Summary: use the approved source-grounded summary.
- Metadata: `December 2025 – Present`, `Personal project`, and a public repository link.
- A short note should state that evaluation, recommendation reliability, graph quality, cost control, and deployment decisions remain active work.

#### Narrative order

1. Problem: source-grounded, roster-constrained lineup recommendations.
2. Pipeline from selected source data through ETL models/loaders and Neo4j.
3. Request, roster, graph retrieval, and LangGraph orchestration.
4. Candidate preparation and hard legality fields.
5. Bounded query validation/retry, analysis correction/fallback, typed formatting, and graceful failure.
6. `anotheredenai-pipeline` visual.
7. `anotheredenai-guardrails` visual.
8. Current status and active/future work.
9. Limitations: no production readiness, completed evaluation, proven quality, live deployment, guaranteed factuality, or measured cost/performance improvement.

#### Visual treatment

Use a restrained blue-violet secondary accent inside the shared blue-teal system. The pipeline figure uses connected graph/flow nodes but remains a readable technical diagram, not a glowing AI network. The guardrails figure uses explicit branches for bounded retry/correction/fallback and two labelled outcomes: typed recommendation result or graceful failure.

The page must distinguish implemented public paths from evaluation/deployment/future work with text labels, a legend, or adjacent notes. A dotted or muted future-work treatment may support the distinction, but a solid/dashed line must never be the sole encoding. No private prompts, model credentials/configuration, raw logs, copied code screenshots, or unsupported measurements are shown.

Use the exact approved alt text, captions, public source links, and exclusions from `docs/content/visual-contracts/anotheredenai.md` at implementation time. Make the public repository link explicit; do not imply that repository activity proves production readiness.

### 6.4 Resume `/resume`

Purpose: provide a semantic, readable web resume and a direct download of the approved public PDF.

#### Order and content

1. Page header with full name, `Backend Software Engineer`, Bangi/Selangor/Malaysia, and contact links.
2. `Download public resume (PDF)` as the primary action; identify it as a PDF download and keep it adjacent to the web version.
3. Summary matching the public resume/career data.
4. Experience: AMIC then PETRONAS Digital with approved titles, dates, and public-safe bullets.
5. Selected project: AnotherEdenAI with active-development label and public repository link.
6. Capabilities in the four approved groups.
7. Education and certifications with verification links.
8. Footer contact links.

The web version is not a new claim source. It should be generated from the same structured career facts or a deliberately reconciled content source so dates, titles, technologies, and links cannot drift. The public version must never contain the phone number. Do not expose the ignored private application resume or private overlay.

The page must remain useful without downloading the PDF. On print, preserve semantic order, link destinations where practical, readable contrast, and a clean single-column output; print styling is a later implementation concern, not a reason to embed a PDF as the only content.

### 6.5 404 fallback

Purpose: recover a reader without blame or visual noise.

- Use one H1 such as `This route does not exist.`
- Show a compact `404` marker and a short explanation.
- Provide clearly labelled links to `Return home`, `Selected work`, and `Resume`.
- Keep the same header/footer and theme behavior as every other page.
- A small editorial line or broken-index motif is acceptable; do not use a terminal error screen, flashing warning, or inaccessible illustration.
- The page must announce the failure through its heading and document title, not only through color or a number.

## 7. Responsive states and layout behavior

Use three behavior states. Exact breakpoint values may be tuned in implementation, but the structural behavior is fixed.

| State | Approximate viewport | Layout behavior |
| --- | --- | --- |
| Wide | 1024px and above | Full header navigation; generous two-column hero/metadata options; two-column selected-work grid; case-study content plus optional sticky contents rail; horizontal diagrams when they remain legible. |
| Standard | 641–1023px | Header may retain navigation until space is constrained; hero and cards can stack; contents rail becomes a normal block; diagrams use fewer columns and larger labels rather than shrinking below legibility. |
| Compact | 640px and below | Single-column flow; menu disclosure; stacked metadata; full-width CTAs where helpful; vertical or stepped diagrams; no horizontal page overflow; AIRIS remains visibly compact. |

Common rules:

- Use fluid type and spacing within each state; do not let a display heading collide with the header or CTA.
- Preserve reading order when columns collapse: title/status, summary, boundary, narrative, figure, caption, limitations, next action.
- Do not use horizontal scrolling for prose, nav, cards, or metadata. An inherently wide diagram may use a contained scroll region only if a complete linear alternative is present and the page itself remains non-scrolling horizontally.
- Long technology labels wrap naturally; never truncate approved names with ellipses when that changes meaning.
- Links and buttons remain at least comfortably finger-sized; target approximately 44px minimum hit area.
- Sticky elements must stop before the footer and must not cover focused content or the mobile menu.

### 7.1 Visual-contract responsive transformations

| Visual | Wide | Standard | Compact and fallback |
| --- | --- | --- | --- |
| `safapac-transition` | Horizontal stages with responsibility lanes and a clear start/end. | Stage groups can wrap into two rows while lanes remain labelled. | Vertical ordered timeline; each stage includes its lane/ownership note in text. |
| `safapac-delivery` | High-level left-to-right application, edge, API, data, CI, and AWS relationships. | Two-row flow with readable labels and grouped AWS categories. | Ordered vertical flow with relationship verbs in the adjacent text; no service label is hidden. |
| `anotheredenai-pipeline` | Source-to-web flow with graph and workflow boundaries. | Group ETL, graph, workflow, and web delivery into readable bands. | Vertical numbered stages with a text alternative; keep `actively developed` visible. |
| `anotheredenai-guardrails` | Branching validation/correction/fallback flow with result/failure outcomes. | Branches stack or step down while retaining the two outcomes. | Linear sequence followed by an explicit `result or graceful failure` branch list. |
| `airis-load-testing` | Compact single-row workload-to-handoff flow. | Wrapped stages with signal labels. | Vertical flow; keep the gap between research/handoff and any production result explicit. |

## 8. Accessibility and semantic requirements

Target WCAG 2.2 AA behavior as the implementation baseline. Accessibility is part of the content contract, not a later polish pass.

### 8.1 Semantics and structure

- Use `header`, `nav`, `main`, `section`, `article`, and `footer` landmarks with useful accessible names when multiple instances exist.
- Use one page-level H1, then ordered H2/H3 headings. Do not choose heading level from font size alone.
- Use lists for capabilities, decisions, navigation, and sequential flow stages. Use definition-list semantics for metadata where appropriate.
- Use real links for navigation and external destinations; use buttons only for actions such as theme/menu/contents toggles.
- Mark the current route with `aria-current` and expose expanded/collapsed state for disclosures with `aria-expanded` and `aria-controls`.
- Use descriptive link text such as `Read the SAFAPAC case study` rather than repeated `Read more` labels.
- Preserve document title and language metadata per route; use `lang="en"` unless the approved copy later requires a different language.

### 8.2 Keyboard and focus

- The first focusable control is the skip link; it moves focus to the main content.
- Every navigation link, CTA, theme control, menu control, contents control, source link, and figure interaction is reachable in a logical DOM order.
- Focus indicators are always visible, use at least a 2px high-contrast ring/outline plus sufficient offset, and are not removed for mouse users.
- Mobile navigation and contents disclosures open with Enter/Space, close with Escape, and return focus to their controlling button when closed. They must not create a keyboard trap.
- A keyboard user can reach the same case-study narrative, figure alternative, limitations, and contact actions without hover, drag, gesture, or animation.
- Do not move focus during passive scroll or section reveal. If a real modal is later introduced, trap and restore focus according to its dialog semantics; no modal is required by this specification.

### 8.3 Contrast, status, and zoom

- Verify normal text at least 4.5:1, large text at least 3:1, and controls/meaningful graphical boundaries at least 3:1 against adjacent colors.
- Test every light/dark token pair, project anchor, link state, border, focus ring, status badge, diagram label, and disabled-looking state. Do not rely on approximate token values without an actual contrast check.
- Never communicate hierarchy, maturity, validation, failure, or ownership by color alone. Pair color with words, labels, shape, position, or line style.
- The page must reflow without loss of content or function at 320 CSS pixels and at 400% zoom. The only permitted contained overflow is an inherently wide diagram with a complete linear alternative.
- Preserve text as selectable HTML/SVG text where possible; do not bake important labels into raster images.

### 8.4 Visual alternatives

- Every approved visual renders with its contract title, caption, source class as appropriate, exact approved alt text, and exclusions represented in the surrounding narrative where needed.
- A decorative motif uses an empty alternative and never carries an engineering claim.
- A meaningful figure uses an accessible image/figure name plus a nearby structured text fallback. The fallback must describe stages, relationships, and outcomes, not just repeat the title.
- Mermaid or SVG output must not be the only place where a relationship or status is available. Ensure labels are exposed to assistive technology and remain legible in both themes.
- Do not ship screenshots for SAFAPAC or AIRIS. AnotherEdenAI screenshots are not required; public-source-grounded original visuals are the approved default.

### 8.5 Motion and vestibular safety

- Honor `prefers-reduced-motion: reduce` globally. Remove reveal translations, diagram drawing, parallax, and nonessential transitions while preserving state and content.
- Never autoplay video, loop a decorative animation, flash, shake, or make a user wait for content to become readable.
- Ensure motion does not cause focus movement, layout jumps, or loss of the current reading location.

## 9. Light and dark theme behavior

Light is the canonical first-visit presentation. Provide an explicit, labelled theme toggle that switches between light and dark and persists the user's choice for later visits. If a later implementation chooses to follow the operating-system preference before a saved choice, it must still keep the light presentation as the documented fallback and avoid a flash of the wrong theme.

Theme requirements:

- Switch canvas, surface, text, border, accent, focus, and project-anchor tokens semantically; do not invert a screenshot or diagram as a blanket filter.
- Keep the same information hierarchy, spacing, typography, labels, figure relationships, and status wording in both themes.
- Draw diagrams from theme-aware tokens so lines, labels, nodes, captions, and branches remain visible. Do not use a white-background image that becomes an unreadable dark-theme rectangle.
- The toggle has an accessible name that states the action, such as `Switch to dark theme`, and its state is perceivable without its icon.
- Avoid pure black/pure white fields, low-contrast grey text, and color combinations that make professional status or future-work distinctions ambiguous.
- Test theme switching at page load, after navigation, with keyboard focus on the control, and with reduced motion enabled.

## 10. Purposeful animation guidance

Animation is optional support for orientation, never the site's identity.

Allowed, if it improves comprehension and remains subtle:

- A short 160–240ms opacity/translate-in for the initial page intro or a newly entered section, with a small translation of roughly 4–8px.
- A 100–160ms color/border transition for link, button, theme, and card focus/hover states.
- A restrained line or stage emphasis when a reader intentionally focuses a diagram item, provided the static state is already understandable.

Rules:

- No essential copy, caption, status, or action is delayed by animation.
- Do not animate every card independently or create a long stagger that makes recruiters wait.
- No parallax, scroll hijacking, infinite loops, auto-advancing carousels, fake terminal typing, particle systems, or glowing AI-network effects.
- The reduced-motion mode removes movement and drawing effects, leaves color/state changes brief or absent, and never removes the figure or its explanation.
- Hover and focus must remain usable on touch and keyboard; do not make a hover-only interaction.

## 11. Astro/TypeScript/MDX implementation handoff

This section is the handoff for the later implementation milestone. It is guidance, not product code.

### 11.1 Rendering and routes

- Use Astro with strict TypeScript and static rendering by default, matching `docs/core/architecture.md`.
- Implement the launch route set as `/`, `/safapac`, `/anotheredenai`, `/resume`, and a custom 404 page.
- Keep the shell, typography, tokens, and common interactions in reusable layout/components. Avoid route-specific copies of the same navigation, status, metadata, or figure behavior.
- Use Git-maintained MDX/content collections for case studies. The collection schema should preserve the framework-neutral envelope: identity, summary, role, narrative IDs, capabilities/evidence, visual contracts, disclosure state, and sources.
- Keep resume facts reconciled to `resume/career-data.json` and the approved public PDF. The implementation must not read or expose `.private` inputs.

### 11.2 Component boundaries and hydration

- Prefer static Astro components for prose, cards, metadata, figures, source notes, and the footer.
- Hydrate only interaction that provides clear value: theme persistence/toggle, mobile navigation, and an optional contents disclosure. A client-side framework island is not needed for static editorial content.
- If React is used for an important interactive diagram, keep its inputs typed and bounded to the approved visual contract; do not invent an API or copy confidential data into props.
- Keep interaction state local and URL/bookmark behavior predictable. Native links and browser history should work without JavaScript where practical.

### 11.3 Visual implementation

- Recreate each approved visual from its contract as original SVG/Astro markup or a simple Mermaid flow where the relationship remains legible and accessible.
- Use Mermaid only for genuinely simple flows. Use hand-authored SVG/Astro or a selective React component for the responsibility timeline, deployment architecture, graph/recommendation pipeline, and guarded branches when Mermaid output would be too rigid or inaccessible.
- Give every figure a stable semantic ID matching the contract, visible caption, exact approved alt text, and a linear fallback.
- Keep SAFAPAC and AIRIS diagrams newly redrawn and role-level. Keep AnotherEdenAI diagrams grounded in the public source structure and actively-developed wording.
- Do not add screenshots, private reports, copied diagrams, proprietary formulas, internal identifiers, detailed cloud topology, model configuration, or invented metrics during visual implementation.

### 11.4 Suggested implementation sequence

The later builder/tdd workflow can split implementation into feature-level commits using this order:

1. Site shell, typography/tokens, responsive primitives, theme control, navigation, and 404.
2. MDX/content collection schema and homepage data presentation.
3. Shared case-study template plus SAFAPAC and AnotherEdenAI routes.
4. Original visual components and AIRIS compact presentation.
5. Semantic resume page/PDF integration, accessibility refinements, responsive checks, and final content-boundary verification.

This sequence does not authorize implementation in Milestone 3. It only prevents the later milestone from coupling all page-specific markup together.

### 11.5 Later verification contract

Before launch implementation is considered complete, the later workflow should include:

- TypeScript/static checks and Astro build output validation.
- Existing public resume and profile validation commands where the implementation consumes those sources.
- `bash scripts/check-public-boundary.sh`, `git diff --check`, and manual claim/disclosure review.
- Keyboard-only navigation through every route, visible focus review, screen-reader landmark/heading/link review, and 320px/400% reflow checks.
- Light/dark contrast review, reduced-motion review, and manual responsive checks at the three defined states.
- Verification that all figures retain captions, alternatives, source/exclusion boundaries, and no unsupported claim.
- Manual visual review of homepage hierarchy, case-study readability, resume print behavior, mobile navigation, and 404 recovery.

Deployment, Cloudflare Pages, domain, analytics, and LinkedIn launch checks remain Milestone 5 concerns.

## 12. External UI generator prompt

The following is the single implementation-ready prompt to use if an external UI generator is engaged later. It is deliberately constrained to this approved specification:

```text
Design a static, recruiter-readable portfolio for Hydar Hafiz bin Hydzelan, positioned as a Backend Software Engineer in Bangi, Selangor, Malaysia. Use the attached UX/UI specification and approved framework-neutral content contracts as the only product source of truth.

Create the launch experience for exactly these routes: /, /safapac, /anotheredenai, /resume, and an accessible 404 fallback. Use a calm technical-editorial direction: light-first off-white/charcoal foundation, restrained blue-teal accents, strong Source Sans 3 typography, generous whitespace, ruled sections, short readable prose measure, and original explanatory diagrams. The page must feel authored and precise, not like a dashboard or generic corporate landing page.

Preserve this hierarchy in every composition: SAFAPAC is the primary professional case study; AnotherEdenAI is the primary personal case study and must visibly say Actively developed; AIRIS is a compact supporting contribution and has no dedicated route. Preserve the exact approved maturity and ownership boundaries: SAFAPAC says Deployed beta / internal validation and describes Hydar's assigned backend, database, calculation-traceability, validation, testability, documentation, and AWS delivery scope; AIRIS remains a testing/diagnosis/research/handoff/training contribution without architecture ownership or claimed production improvement.

Specify and prototype responsive wide, standard, and compact states. Include a keyboard-operable mobile navigation, skip link, visible focus, semantic landmarks and heading order, text alternatives for every meaningful visual, non-color status labels, 320px reflow, 400% zoom support, light/dark theme behavior, and prefers-reduced-motion behavior. Make all links and controls understandable without hover, animation, or color. Keep the public resume phone-free and expose only email, LinkedIn, GitHub, and the public resume action.

Use original diagrams based only on these approved visual contracts: SAFAPAC transformation timeline and high-level delivery architecture; AnotherEdenAI public ETL/graph/recommendation pipeline and bounded validation/correction/fallback flow; AIRIS compact concurrency/load-testing flow. Do not add screenshots, copied diagrams, private reports, proprietary formulas, internal URLs, credentials, infrastructure identifiers, customer data, model configuration, exact metrics, production claims, completed evaluation claims, guaranteed quality claims, or invented APIs.

Return a component-level design and content presentation plan suitable for later Astro with strict TypeScript and Git-maintained MDX collections. Keep static editorial content server-rendered and limit hydration to theme, menu, or contents interactions. Do not implement deployment, Cloudflare, domain, analytics, contact forms, external repository changes, or LinkedIn publishing. Any generated code is unimplemented input and must be verified later through the builder-executor -> tdd-loop route.
```

If an external UI generator is used, a preview is design input only; generated code is unimplemented and must return through the later `builder-executor -> tdd-loop` route. No generator output, prompt iteration, screenshot, render comparison, or temporary design artifact belongs in this repository's durable UX/UI contract unless it is deliberately promoted as a final, disclosure-reviewed product decision.


## 13. Completion checklist for Milestone 3

- [x] Technical-editorial, light-first visual direction defined with restrained project anchors and explicit anti-patterns.
- [x] Launch information architecture and page hierarchy defined for the homepage, SAFAPAC, AnotherEdenAI, resume, and 404 page.
- [x] Shared component hierarchy and framework-neutral content presentation mapped.
- [x] Wide, standard, and compact responsive behavior defined, including all approved visual contracts.
- [x] Semantic, keyboard, focus, contrast, zoom/reflow, reduced-motion, and visual-alternative requirements defined.
- [x] Light/dark behavior and accessible theme control defined.
- [x] Purposeful animation guidance and reduced-motion behavior defined.
- [x] SAFAPAC, AnotherEdenAI, and AIRIS treatment preserves the approved hierarchy and disclosure boundaries.
- [x] Astro/TypeScript/MDX handoff guidance defined without beginning implementation.

Next human checkpoint: Hydar approves this UX/UI specification before Milestone 4 portfolio implementation begins.
