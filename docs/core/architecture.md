# Approved architecture

## Public site

- Framework: Astro with strict TypeScript.
- Content: Git-maintained MDX content collections.
- Visuals: Mermaid for simple flows; original Astro/SVG or selective React components for important diagrams, timelines, responsibility breakdowns, and engineering decisions.
- Rendering: static by default, with client-side hydration only where interaction provides clear value.
- Hosting: Cloudflare Pages with GitHub pull-request previews and production deployment from protected `main`.
- Domain: canonical `https://hydarhafiz.com` with one consistent apex/`www` redirect and HTTPS.
- Analytics: Cloudflare Web Analytics for aggregate usage and performance only.
- Contact: email, LinkedIn, GitHub, and resume download; no contact form.

## Launch operations

- Acquire `hydarhafiz.com` before Pages launch. Cloudflare Registrar registration is the simplest single-provider path when the `.com` is available; external registration plus Cloudflare full DNS is also valid. A registrar transfer to Cloudflare is optional and must not be confused with merely delegating DNS.
- For external registration, review/import records, handle DNSSEC/DS state, update the registrar to exactly the Cloudflare-assigned nameservers, and verify the zone is active before attaching the apex custom domain in Pages.
- Connect the GitHub repository through Pages Git integration with `main` as production, PR/non-production branches as previews, `npm run build` as the build command, and `dist` as the output directory. Do not use Direct Upload or repository-held Cloudflare credentials.
- Protect `main` with required pull requests, CI, and Cloudflare deployment checks; prevent force-push and deletion. No additional reviewer is required for the solo repository.
- Configure the Pages custom domain for the apex and the `www` host as needed, redirect `www` to the apex while preserving path/query, and redirect the production `pages.dev` host to the canonical domain where supported.
- Enable Cloudflare Web Analytics only after a successful deployment and verify the resulting behavior remains aggregate-only.
- Keep `https://hydarhafiz.com` out of resume outputs until the live-domain and launch gates pass. Then add one Website link to the canonical career source so the default and three targeted profiles resolve it consistently.

## Information architecture

The first launch contains a homepage, SAFAPAC case study, AnotherEdenAI case study, semantic resume page/PDF, and accessible 404 page.

The homepage must expose:

1. The `Software Engineer — Backend, Cloud & Applied AI` umbrella identity and primary calls to action, with Backend presented as the strongest foundation.
2. SAFAPAC and AnotherEdenAI as flagship work.
3. AMIC and PETRONAS experience.
4. A compact AIRIS supporting contribution.
5. A compact capability section grouped as Backend, Cloud & DevOps, Applied AI, and Supporting Technologies. Every technology must connect to project or experience evidence; no self-rated levels.
6. Certifications and contact links.

Dedicated About, Skills, Experience, AIRIS, Blog, Writing, and Notes routes are deferred. The MDX/content model must allow `/writing` or `/notes` later without restructuring the site.

## Visual direction

- Clean technical-editorial design.
- Light-first with an accessible optional dark theme.
- Off-white and charcoal foundation with restrained blue-teal accents.
- Strong typography, whitespace, responsive behavior, and limited purposeful animation.
- Consistent design language with different project anchors:
  - SAFAPAC: transformation timeline and deployment architecture.
  - AnotherEdenAI: graph/recommendation pipeline and public implementation visuals.
  - AIRIS: compact concurrency/load-testing flow.

Avoid terminal/hacker styling, generic AI neon imagery, excessive glassmorphism, animation-showcase behavior, and generic corporate landing-page composition.

## Resume generation

- One canonical structured evidence model stores identity, official titles/dates, evidence-bearing experience/project bullets, capabilities, education, and certifications.
- Four profile configurations (`default`, `backend`, `cloud`, and `ai`) select and order shared facts while owning only their headline, summary emphasis, capability order, and evidence priority.
- Profile emphasis and contact privacy are independent inputs. The tracked default profile is public and phone-free; ignored application outputs may use the private contact overlay.
- The website and semantic resume consume the resolved default profile; all PDFs use the same resolver and semantic single-column HTML with dedicated print CSS.
- Chromium produces deterministic, searchable PDFs.
- The public website exposes only the balanced resume artifact and omits the phone number.
- An ignored private overlay supplies the phone number for the application CV.
- Targeted Backend, Cloud, and Applied AI PDFs remain ignored application artifacts and are not normal portfolio navigation choices.
- After live launch verification, the shared public Website link `https://hydarhafiz.com` is included in the default and all targeted profiles, followed by a production redeploy of the semantic resume page.
- Public phone exposure remains a reversible future policy switch.

## Operations and quality

- Pull requests receive isolated preview deployments.
- Production deploys only from protected `main` after the repository's Node/Astro checks, static build, public-boundary checks, resume validation, and accessibility/site validators pass.
- No credentials or cloud secrets belong in Git.
- Git and Cloudflare deployment history provide rollback; only successful production deployments are valid rollback targets.
