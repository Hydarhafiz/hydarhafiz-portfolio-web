# Cloudflare Pages Git deployment

This runbook completes the repository-side contract for Feature 6B. The external GitHub authorization and Cloudflare dashboard changes are manual operations. Never put a Cloudflare API token, GitHub credential, account identifier, deployment secret, or private evidence in this repository.

## Target configuration

Use the existing Cloudflare zone and the GitHub repository `Hydarhafiz/hydarhafiz-portfolio-web`.

| Pages setting | Required value |
| --- | --- |
| Connection | GitHub Git integration |
| Repository | `Hydarhafiz/hydarhafiz-portfolio-web` |
| Root directory | `/` (repository root) |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js build version | `22` through the non-secret `NODE_VERSION` build variable, if the project is not already on the Pages v3 image |
| Preview deployments | Optional for non-production branches; no PR workflow required |

The site is Astro static output. Pages installs the repository dependencies and publishes the contents of `dist`; it does not need a runtime server, Pages Functions, a Worker, Direct Upload, or a repository-held deployment token.

## Connect the repository

1. Open Cloudflare **Workers & Pages**, create or select the Pages project, and choose **Import an existing Git repository**.
2. Authorize the Cloudflare GitHub integration for the `Hydarhafiz/hydarhafiz-portfolio-web` repository. Approve only the repository access needed for this project.
3. Enter the target configuration above. Leave the root directory at the repository root and do not add an install command that bypasses the committed `package-lock.json`.
4. Confirm that the production branch is `main`, that automatic production deployments are enabled for `main`, and optionally enable previews for non-production branches.
5. Save and deploy. Keep the first successful production deployment available; its deployment history is the rollback source for the later launch work.

Cloudflare's Git integration can supply a preview URL for a non-production branch. The release path does not depend on a pull request or preview: Hydar pushes the approved commit directly to `main`, then verifies the `CI / Validate (Node 22)` result and the Cloudflare Pages production deployment.

## Controlled test

After connecting the integration, perform one controlled direct push to `main` using an approved repository commit.

1. Confirm the CI check is named `CI / Validate (Node 22)` and passes.
2. Confirm the Pages production deployment from `main` reports success.
3. Inspect `/`, `/safapac`, `/anotheredenai`, `/resume`, the PDF download, and an unknown path on the Pages deployment URL. The output must be static and must not expose private contact material.
4. Optionally push a non-production branch and confirm that its preview behaves the same way; this is not a release prerequisite.

The canonical-domain redirect, `www` handling, analytics, and live launch checks belong to Feature 6C. Do not use this setup as authorization to change DNS, activate analytics, or publish a release beyond the Pages connection and controlled deployment test.

## Recovery

Do not delete a successful deployment while testing. If a later Pages build fails, use the Pages deployment history to identify the last successful production deployment and pause further promotion until the failing commit is understood. Record only the sanitized deployment date/commit context needed by the launch record; deployment IDs and raw dashboard logs remain ephemeral.

## First-party references

- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [Cloudflare Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Cloudflare Pages build image and Node.js version](https://developers.cloudflare.com/pages/configuration/build-image/)
- [Cloudflare Astro deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
