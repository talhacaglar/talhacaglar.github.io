#!/usr/bin/env bash
#
# Verify and publish the site through the repository's GitHub Pages workflow.
#
# The source repository owns the Pages deployment. Pushing main triggers
# .github/workflows/deploy.yml, which builds and uploads the static out/
# directory without replacing source history.
#
# Usage:  ./scripts/deploy.sh  [-n]
#           -n   lint and build without pushing
#
set -euo pipefail

DEPLOY_REMOTE="${DEPLOY_REMOTE:-origin}"
DEPLOY_BRANCH="${DEPLOY_BRANCH:-main}"

DRY_RUN=0
[[ "${1:-}" == "-n" ]] && DRY_RUN=1

cd "$(dirname "$0")/.."
ROOT="$(pwd)"

echo "==> Linting"
npm run lint

echo "==> Building static export"
npm run build

echo "==> Verified $(find "$ROOT/out" -type f | wc -l) files ($(du -sh "$ROOT/out" | cut -f1))"

if [[ "$DRY_RUN" == "1" ]]; then
  echo "==> Dry run complete; nothing pushed"
  exit 0
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "error: commit the verified changes before deploying." >&2
  exit 1
fi

echo "==> Pushing $(git rev-parse --short HEAD) to ${DEPLOY_REMOTE}/${DEPLOY_BRANCH}"
git push "$DEPLOY_REMOTE" "HEAD:${DEPLOY_BRANCH}"

echo "==> GitHub Pages workflow triggered"
echo "    https://github.com/talhacaglar/talhacaglar.github.io/actions"
