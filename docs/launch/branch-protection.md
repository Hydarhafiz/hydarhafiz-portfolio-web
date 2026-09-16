# Direct `main` release policy

This is the sanitized release-policy record for Feature 6B. This repository is maintained and released by one developer, so ordinary pushes to `main` are intentionally allowed. A pull request and reviewer approval are not required. Do not use the GitHub API or store a GitHub token for this operation.

Cloudflare Pages and GitHub Actions remain the post-push release checks: a push to `main` starts the Node 22 CI workflow and the Pages production deployment. If either check fails, pause further releases, diagnose the commit, and use the successful Pages deployment history for rollback.

## Policy

Target repository: `Hydarhafiz/hydarhafiz-portfolio-web`  
Target branch: `main`  
Release owner: Hydar

If a GitHub ruleset is used for basic destructive-action safety, target `main` with these settings. Do not enable a rule that blocks Hydar's ordinary direct pushes:

| Setting | Required state |
| --- | --- |
| Direct pushes to `main` | Allowed for Hydar |
| Require a pull request before merging | Off |
| Required approvals | `0` (no PR gate) |
| CI status after a push | `CI / Validate (Node 22)` must pass |
| Cloudflare Pages status after a push | The `main` production deployment must succeed |
| Force pushes | Off |
| Branch deletion | Off |
| Merge queue | Off |

Do not enable required approving reviews, CODEOWNERS review, a second reviewer, a merge queue, or required pre-merge checks that turn this solo release path into a reviewer- or PR-dependent workflow. Commit signing and linear history are outside this feature unless a later repository policy explicitly admits them.

## Manual configuration sequence

1. In GitHub, open **Settings → Rules → Rulesets** or **Settings → Branches**, depending on the repository UI.
2. If a rule targets `main`, leave the pull-request requirement and required approvals disabled so direct pushes remain available.
3. Keep force-push and branch-deletion allowances disabled; these restrictions do not prevent ordinary pushes.
4. Push an approved commit directly to `main` and confirm that `CI / Validate (Node 22)` passes.
5. Confirm that the same `main` update starts and completes the Cloudflare Pages production deployment.
6. If either post-push check fails, do not make another release push until the failure is understood or the last successful Pages deployment is restored.

The exact Cloudflare deployment/check label may vary by Pages project. Record only its displayed name if it is useful for operations; the release contract is the successful production deployment from `main`, not a pre-merge status gate.

## Sanitized verification record

Do not record account IDs, tokens, private dashboard exports, or raw deployment logs.

| Item | Result | Date / note |
| --- | --- | --- |
| Direct push to `main` | Verified | Hydar's `main` push triggered the release checks |
| PR required for `main` | Off by policy | No pull request or reviewer dependency |
| `CI / Validate (Node 22)` passing | Verified | Node 22 validation passed on the `main` push |
| Cloudflare Pages production deployment | Verified | The `main` deployment completed successfully |
| Force-push disabled | Recommended | Keep disabled if a GitHub ruleset is used |
| Branch deletion disabled | Recommended | Keep disabled if a GitHub ruleset is used |
| Required approval count | `0` / not applicable | No PR gate is configured |

## First-party references

- [Managing protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [GitHub status checks](https://docs.github.com/en/pull-requests/reference/status-checks)
