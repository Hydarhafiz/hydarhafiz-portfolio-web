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
| Preview deployments | Enabled for pull requests and non-production branches |

The site is Astro static output. Pages installs the repository dependencies and publishes the contents of `dist`; it does not need a runtime server, Pages Functions, a Worker, Direct Upload, or a repository-held deployment token.

## Connect the repository

1. Open Cloudflare **Workers & Pages**, create or select the Pages project, and choose **Import an existing Git repository**.
2. Authorize the Cloudflare GitHub integration for the `Hydarhafiz/hydarhafiz-portfolio-web` repository. Approve only the repository access needed for this project.
3. Enter the target configuration above. Leave the root directory at the repository root and do not add an install command that bypasses the committed `package-lock.json`.
4. Confirm that the production branch is `main`, that preview branch deployments are enabled, and that automatic production deployments are enabled for `main`.
5. Save and deploy. Keep the first successful production deployment available; its deployment history is the rollback source for the later launch work.

Cloudflare's Git integration supplies a preview URL and a deployment status check for a pull request. A pull request from this repository should receive both the `CI / Validate (Node 22)` check and a Cloudflare Pages preview/check before it is merged. Pull requests from forks may not receive a Pages preview, so the launch test should use a branch in this repository.

## Controlled test

After connecting the integration, open a small test pull request from a non-production branch.

1. Confirm the CI check is named `CI / Validate (Node 22)` and passes.
2. Confirm the Pages check reports success and links to a preview deployment.
3. Inspect `/`, `/safapac`, `/anotheredenai`, `/resume`, the PDF download, and an unknown path on the preview URL. The output must be static and must not expose private contact material.
4. Do not merge until the branch protection record has been configured with the exact Cloudflare check name shown by GitHub.
5. After the protected merge, confirm that the `main` commit produces the first expected production deployment.

The canonical-domain redirect, `www` handling, analytics, and live launch checks belong to Feature 6C. Do not use this setup as authorization to change DNS, activate analytics, or publish a release beyond the Pages connection and controlled deployment test.

## Recovery

Do not delete a successful deployment while testing. If a later Pages build fails, use the Pages deployment history to identify the last successful production deployment and pause further promotion until the failing commit is understood. Record only the sanitized deployment date/commit context needed by the launch record; deployment IDs and raw dashboard logs remain ephemeral.

## First-party references

- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [Cloudflare Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Cloudflare Pages build image and Node.js version](https://developers.cloudflare.com/pages/configuration/build-image/)
- [Cloudflare Astro deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
