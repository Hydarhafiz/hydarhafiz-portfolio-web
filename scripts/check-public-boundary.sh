#!/usr/bin/env bash

set -euo pipefail

is_prohibited_path() {
  local path="$1"

  case "$path" in
    "portfolio source"|"portfolio source/"*|\
    "Hydar Hafiz Hydzelan - Resume(Software AI Engineer).pdf"|\
    ".sdd"|".sdd/"*|\
    ".private"|".private/"*|\
    ".env"|".env."*|*/.env|*/.env.*|\
    *.pem|*.key|*.p12|*.pfx|\
    id_rsa|id_ed25519|*/id_rsa|*/id_ed25519|\
    *:Zone.Identifier)
      return 0
      ;;
    *)
      return 1
      ;;
  esac
}

run_self_test() {
  local path
  local failed=0
  local -a prohibited_paths=(
    "portfolio source/internal-report.pdf"
    "Hydar Hafiz Hydzelan - Resume(Software AI Engineer).pdf"
    ".sdd/active/milestone/feature.json"
    ".private/contact.json"
    ".env.production"
    "config/.env"
    "credentials/deploy.key"
  )
  local -a public_paths=(
    "README.md"
    "docs/core/architecture.md"
    "public/resume/hydar-hafiz-bin-hydzelan-resume.pdf"
    "src/content/work/safapac.mdx"
  )

  for path in "${prohibited_paths[@]}"; do
    if ! is_prohibited_path "$path"; then
      printf 'Expected prohibited path was accepted: %s\n' "$path" >&2
      failed=1
    fi
  done

  for path in "${public_paths[@]}"; do
    if is_prohibited_path "$path"; then
      printf 'Expected public path was rejected: %s\n' "$path" >&2
      failed=1
    fi
  done

  if (( failed != 0 )); then
    return 1
  fi

  printf 'Public-boundary self-test passed.\n'
}

scan_tracked_files() {
  local path
  local failed=0

  while IFS= read -r -d '' path; do
    if is_prohibited_path "$path"; then
      printf 'Prohibited path is tracked: %s\n' "$path" >&2
      failed=1
    fi
  done < <(git ls-files --cached -z)

  if (( failed != 0 )); then
    printf 'Public repository boundary check failed.\n' >&2
    return 1
  fi

  printf 'Tracked paths satisfy the public repository boundary.\n'
}

case "${1:-}" in
  --self-test)
    run_self_test
    ;;
  "")
    scan_tracked_files
    ;;
  *)
    printf 'Usage: %s [--self-test]\n' "$0" >&2
    exit 2
    ;;
esac
