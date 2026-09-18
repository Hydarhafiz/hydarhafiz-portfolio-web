# Resume generation

The resume is generated from the canonical evidence in `career-data.json`, the shared selector in `resolve-profile.mjs`, and `resume.css`. Four profiles reuse the same employment, project, education, certification, and public Website link facts while changing only headline, summary, capability selection/order, and evidence order. The balanced public profile is the single approved public selection; its source-to-public decisions are recorded in [`docs/content/resume-source-map.md`](../docs/content/resume-source-map.md).

## Balanced public resume

```bash
npm run resume:check
```

This writes `public/resume/hydar-hafiz-bin-hydzelan-resume.pdf`. It is one searchable A4 page with a monochrome single-column serif layout and must not contain a phone number.

## Targeted application resumes

The ignored `.private/resume-contact.json` supplies the phone number locally. Generate and validate the Backend, Cloud, and Applied AI profiles together:

```bash
npm run resume:check:all
```

This writes:

- `.private/Hydar_Hafiz_Resume_Backend.pdf`
- `.private/Hydar_Hafiz_Resume_Cloud.pdf`
- `.private/Hydar_Hafiz_Resume_AI.pdf`

Never stage or publish the private input or targeted outputs. Resume profile (`default`, `backend`, `cloud`, or `ai`) and contact policy (`public` or `application`) are independent renderer arguments.

Every validator requires one A4 page, ordered extractable text, profile-specific natural keywords, shared official titles and evidence, working contact links, accurate title metadata, and absence of prohibited stale claims. Body copy remains left-aligned for recruiter scanning; dates use the right edge as a visual anchor. The PDF and `/resume` page use the same `Summary` → `Technical Skills` → `Professional Experience` → `Personal Project` → `Education & Certifications` sequence.
