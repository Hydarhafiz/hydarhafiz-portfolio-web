# Feature 4D shared diagram rules

Status: approved for Feature 4D implementation.

These rules apply to all five Feature 4D visuals. The visuals are static editorial portfolio infographics for recruiter and hiring-manager scanning, not interactive architecture documentation.

## Shared visual system

- Give each figure one direct, sentence-case takeaway title of roughly 4–8 words.
- Show one visual sentence: at most three primary anchors for transformation or layered visuals. The required SAFAPAC delivery path is the single four-anchor exception; use exactly four compact cards only for the AnotherEdenAI safeguard strip.
- Keep visible labels to 1–3 words. Supporting text is optional and should be no longer than one short phrase.
- Use one shape family: soft rectangular cards with a restrained border or accent edge. Create hierarchy with size, position, weight, and fill—not rows of equally weighted boxes.
- Use one connector language: solid `→` for the main relationship; quiet dotted rules or a boundary rail for context and supporting platform concerns. Do not use loops or arrows that imply unapproved outcomes.
- Use one color logic: the homepage/global brand remains cyan-teal; SAFAPAC uses a distinct aerospace blue, AnotherEdenAI uses violet, and AIRIS uses amber. Define each project through the shared `--project-accent`, `--project-accent-soft`, `--project-accent-border`, and `--project-accent-hover` tokens. Visuals alias those page tokens through `--visual-accent` and `--visual-soft`. Hydar-owned scope is the strongest persistent emphasis, the result is a filled/high-contrast anchor, and collaboration or platform context is muted.
- Use shared semantic states: neutral cards use the surface and border; Hydar-owned/primary contribution uses the project accent; support/context uses muted text and quiet rules; outcomes use the project accent with high contrast; connectors use the project accent; hover/focus adds only a subtle accent border or soft background.
- Keep components and stages neutral by default. Persistent fills are reserved for genuine ownership, the dominant system anchor, or an outcome—not an arbitrary intermediate stage. Hover/focus is decorative and must not carry meaning.
- Use a consistent spacing rhythm with generous whitespace. The default visible structure is title, visual, and one concise caption; do not repeat the visual as a prominent paragraph below it.
- Keep `Read this visual as text` available as a collapsed native disclosure. Its DOM order follows the main story, then supporting context, then boundaries.
- On narrow screens, compose intentional vertical diagrams without horizontal scrolling: use content-driven heights, compact padding and connector gaps, center the flowchart content and connectors, and keep labels within roughly two lines.
- Use the same semantic theme tokens in light and dark modes. All text, borders, focus indicators, and controls must meet the repository accessibility contract in both themes.
- Animation is optional and ornamental only: a short entrance or connector reveal may support orientation, but it must never carry meaning, gate content, or imply a process that the static visual does not show. Respect reduced-motion preferences.
- Never render confidential employer material, copied/private diagrams or screenshots, private URLs, unsupported production or evaluation claims, unapproved metrics, or phone numbers.

## Project-page inheritance

- Keep the portfolio's canvas, surfaces, typography, spacing, borders, navigation, and interaction patterns shared across routes.
- Apply the project token at the case-study page boundary so section eyebrows, numbers, scope labels, metadata highlights, selected borders, links, and diagram accents inherit one project identity without recoloring main headings or body copy.
- SAFAPAC and AnotherEdenAI detail pages use their project token; the homepage keeps the global brand token while the AIRIS supporting visual uses the AIRIS token locally.

The implementation palette is centralized in the global stylesheet: SAFAPAC uses aerospace blue (`#1b4f91`, dark mode `#8fc2ff`), AnotherEdenAI uses violet (`#6246a8`, dark mode `#c2b0ff`), and AIRIS uses amber (`#9a5700`, dark mode `#ffc266`). Each also has coordinated soft, border, and hover tokens.

## Implementation handoff

The later Astro/TypeScript/MDX milestone should implement these as semantic, CSS-led figures using the existing `VisualFigure` wrapper. Keep the visible labels in the markup, keep the alternative text concise and non-duplicative, and treat all visual layout changes as responsive presentation—not as new product behavior.
