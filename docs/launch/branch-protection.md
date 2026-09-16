# Protected `main` policy

This is the sanitized branch-policy record for Feature 6B. Apply the settings in GitHub repository settings after the Cloudflare Pages Git integration has produced its first check. Do not use the GitHub API or store a GitHub token for this operation.

## Policy

Target repository: `Hydarhafiz/hydarhafiz-portfolio-web`  
Target branch: `main`  
Release owner: Hydar

Configure a branch protection rule for `main` with these settings:

| Setting | Required state |
| --- | --- |
| Require a pull request before merging | On |
| Required approvals | `0` (no mandatory reviewer approval) |
| Require status checks before merging | On |
| Required CI check | `CI / Validate (Node 22)` |
| Required Cloudflare check | The exact successful Pages check produced by the connected project; record its displayed name after the test PR |
| Require branches to be up to date | On, so `main` is tested against its current base |
| Do not allow bypassing the above settings | On, including administrators |
| Allow force pushes | Off |
| Allow deletions | Off |
| Merge queue | Off |

Do not enable required approving reviews, CODEOWNERS review, a second reviewer, or any setting that turns this solo release path into a reviewer-dependent workflow. Commit signing and linear history are outside this feature unless a later repository policy explicitly admits them.

## Manual configuration sequence

1. In GitHub, open **Settings → Rules → Rulesets** or **Settings → Branches**, depending on the repository UI, and create a rule targeting `main`.
2. Enable the pull-request requirement, the two successful status checks above, up-to-date branches, and administrator enforcement.
3. Leave required approvals at `0`; keep force-push and branch-deletion allowances disabled.
4. Save the rule and verify that the test pull request cannot merge while either CI or Pages is failing or missing.
5. Merge the test only after both checks pass, then confirm that a `main` update starts the production Pages deployment.

GitHub's required checks are selected from checks that have already reported for the repository. Do not guess the Cloudflare check's label: select the successful Pages check from the test pull request, then preserve the exact label in this record. Avoid duplicate job names across workflows because ambiguous checks can block a protected branch.

## Sanitized verification record

Complete this table after the manual checkpoint. Do not record account IDs, tokens, private dashboard exports, or raw deployment logs.

| Item | Result | Date / note |
| --- | --- | --- |
| PR required for `main` | Pending manual configuration |  |
| `CI / Validate (Node 22)` required and passing | Pending manual configuration |  |
| Cloudflare Pages check required and passing | Pending manual configuration | Record the exact displayed check name only |
| Administrator bypass disabled | Pending manual configuration |  |
| Force-push disabled | Pending manual configuration |  |
| Branch deletion disabled | Pending manual configuration |  |
| Required approval count is `0` | Pending manual configuration |  |
| `main` production deployment observed | Pending manual configuration | Record sanitized commit/date context only |

## First-party references

- [Managing protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [GitHub status checks](https://docs.github.com/en/pull-requests/reference/status-checks)
