# Resume generation

The resume is generated from `career-data.json` and `resume.css` with a semantic, single-column HTML template. The renderer embeds the pinned Source Sans 3 files locally so PDF typography is deterministic and does not depend on a machine's installed fonts or a remote font service.

## Public variant

```bash
npm run resume:check
```

This writes `public/resume/hydar-hafiz-bin-hydzelan-resume.pdf`. It must not contain a phone number.

## Private application variant

The ignored `.private/resume-contact.json` supplies the phone number locally.

```bash
npm run resume:check:all
```

This also writes `.private/hydar-hafiz-bin-hydzelan-application-resume.pdf`. Never stage or publish the private input or output.

Both validators require one A4 page, extractable text, expected ATS keywords and verified SAFAPAC collaboration counts, working contact links, accurate title metadata, and absence of prohibited stale claims. Body copy remains left-aligned for recruiter scanning; dates use the right edge as a visual anchor.
