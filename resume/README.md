# Resume generation

The resume is generated from the canonical evidence in `career-data.json`, the shared selector in `resolve-profile.mjs`, and `resume.css`. Four profiles reuse the same employment, project, education, and certification facts while changing only headline, summary, capability selection/order, and evidence order. The renderer embeds the pinned Source Sans 3 files locally so PDF typography is deterministic and does not depend on a machine's installed fonts or a remote font service.

## Balanced public resume

```bash
npm run resume:check
```

This writes `public/resume/hydar-hafiz-bin-hydzelan-resume.pdf`. It must not contain a phone number.

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

Every validator requires one A4 page, ordered extractable text, profile-specific natural keywords, shared official titles and evidence, working contact links, accurate title metadata, and absence of prohibited stale claims. Body copy remains left-aligned for recruiter scanning; dates use the right edge as a visual anchor.
