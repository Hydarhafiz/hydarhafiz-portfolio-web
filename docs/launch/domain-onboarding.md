# `hydarhafiz.com` domain and Cloudflare onboarding

This runbook is the first gate of Milestone 6. Follow it in order. Do not put passwords, payment details, registrar transfer codes, Cloudflare API tokens, screenshots containing private information, or account identifiers in this repository.

## Current launch state

The launch used the external-registrar path: `hydarhafiz.com` is registered through Exabytes for a five-year term, the domain is active, the registrant email is verified, and auto-renew is enabled. Cloudflare is authoritative for the zone and the Pages custom domain is live. DNSSEC is intentionally off and Exabytes has no DS records, so there is no unresolved DNSSEC delegation mismatch.

## Recommended path for this project

For a new project, registering directly through Cloudflare Registrar is the simplest path when the exact `.com` is available and the renewal terms are acceptable: Cloudflare automatically uses its authoritative nameservers for domains registered there. For this launch, the domain was registered through Exabytes and delegated to Cloudflare; a registrar transfer is optional and is not required for Pages hosting.

If the exact domain is unavailable through Cloudflare, register it with another reputable registrar and delegate its DNS to Cloudflare. Moving the registrar to Cloudflare is optional; Pages hosting only needs the domain's DNS control. A newly registered domain will normally not be eligible for immediate registrar transfer because transfer rules commonly include a 60-day registration/transfer restriction.

References: [register a new domain](https://developers.cloudflare.com/registrar/get-started/register-domain/), [Cloudflare full DNS setup](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/), [transfer a domain to Cloudflare](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/).

## Path A: register through Cloudflare Registrar (alternative)

1. Create or sign in to a Cloudflare account and verify its email address.
2. Open the domain registration flow and search for the exact `hydarhafiz.com` name.
3. Confirm availability, first-year price, renewal price, privacy/registrant terms, and the account that will own the registration. The final availability check occurs at checkout, so do not rely only on a cached search result.
4. Purchase the domain yourself. Keep payment and registrant information in the Cloudflare account only.
5. Complete any registrant-email verification promptly. An unverified registrant email can place the domain on hold.
6. Confirm the domain appears as active in Cloudflare and record no private account information in Git.

When this path is complete, continue to [Pages setup](#cloudflare-pages-setup) after confirming the zone is active.

## Path B: register elsewhere and use Cloudflare DNS (used for this launch)

1. Register `hydarhafiz.com` with the registrar of your choice. Enable auto-renewal and verify the registrant email.
2. Before changing nameservers, inspect the registrar's DNS records. Preserve any existing `MX`, `TXT`, `CNAME`, or other records that are still needed. A new domain may have no useful records, but it must still be checked.
3. Add `hydarhafiz.com` to Cloudflare as a domain using the full/primary DNS setup. Review Cloudflare's imported records before continuing.
4. Check whether DNSSEC is enabled at the registrar. If it is enabled, remove/disable the registrar's DS/DNSSEC state before changing nameservers. Do not leave stale DS records pointing at the old provider.
5. Copy the two nameservers assigned by Cloudflare exactly. At the registrar, remove old or extra authoritative nameservers and add only the assigned Cloudflare nameservers.
6. Wait for the Cloudflare zone to become `Active`. Propagation can take up to 24 hours.
7. Verify independently from a terminal without exposing any account information:

   ```text
   dig NS hydarhafiz.com @1.1.1.1
   dig NS hydarhafiz.com @8.8.8.8
   dig +trace hydarhafiz.com
   ```

   The results should show the exact Cloudflare nameservers assigned to this zone.

8. Re-enable DNSSEC only after the Cloudflare zone is active and the provider gives the new DNSSEC/DS values. Verify the domain again after enabling it.

References: [change nameservers](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/), [DNS setup troubleshooting](https://developers.cloudflare.com/dns/zone-setups/full-setup/troubleshooting/).

## Optional registrar transfer

A registrar transfer is not required for this portfolio. Consider it only if keeping registration and DNS in one Cloudflare account is worth the transfer wait and you understand the current registrar's terms.

Before transferring, confirm the domain is old enough, has not recently transferred or changed registrant details, has a verified email, is unlocked, and has no DNSSEC/DS conflict. Then request the registrar's authorization/EPP code and enter it only in the authenticated Cloudflare transfer flow. Never copy the code into chat, Git, or this runbook.

If a transfer is started, wait for the registrar/registry process to finish and confirm the Cloudflare zone remains active before proceeding. Do not start a transfer merely to make Pages work.

## Cloudflare Pages setup after the zone is active

Do not perform this section until the domain/zone gate passes.

1. In Cloudflare Pages, create or connect a project from the GitHub repository `Hydarhafiz/hydarhafiz-portfolio-web` using Git integration.
2. Set the production branch to `main`.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Enable pull-request and non-production branch previews. Do not use Direct Upload for this project.
5. Add `hydarhafiz.com` as the Pages custom domain through the Pages dashboard. For the apex domain, let Pages create or verify the Cloudflare DNS record; do not rely on a manually created CNAME alone.
6. Add `www.hydarhafiz.com` if needed for the redirect, then create a permanent redirect from `www` to `https://hydarhafiz.com` that preserves the path and query string.
7. Keep the Pages `*.pages.dev` URL available until the custom-domain deployment has passed launch checks. Then redirect it to the canonical domain if the configured Cloudflare rule supports that behavior.

References: [Pages Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/), [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/), [redirect `www` to the apex](https://developers.cloudflare.com/pages/how-to/www-redirect/).

## Stop conditions

Stop and ask for help if any of these occur:

- `hydarhafiz.com` is unavailable or the checkout price/renewal terms are not acceptable.
- The registrar or Cloudflare account requests information you do not understand.
- Cloudflare remains pending after the propagation window, nameservers do not match exactly, or DNSSEC/DS records are unclear.
- Existing email or other DNS records would be removed or changed unexpectedly.
- Pages reports a domain, certificate, DNS, build, or permission error.

Do not bypass a stop condition by adding a token, changing unrelated DNS, switching to Direct Upload, or committing a credential. Once the zone is active and nameserver verification passes, continue with the Pages custom-domain setup and the remaining launch checks in Milestone 6.
