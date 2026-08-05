#!/usr/bin/env bash
#
# Publish the built site to the public Pages repo.
#
# The source lives in a PRIVATE repo; GitHub Pages on the Free plan can only
# serve from a PUBLIC one. So this pushes only the contents of out/ — compiled
# HTML, CSS and JS, no sources and no source maps — to the public repo, which
# exists purely to be served.
#
# Usage:  ./scripts/deploy.sh  [-n]
#           -n   build and show what would be published, without pushing
#
set -euo pipefail

PAGES_REPO="${PAGES_REPO:-https://github.com/talhacaglar/talhacaglar.github.io.git}"
PAGES_BRANCH="${PAGES_BRANCH:-main}"

DRY_RUN=0
[[ "${1:-}" == "-n" ]] && DRY_RUN=1

cd "$(dirname "$0")/.."
ROOT="$(pwd)"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "warning: working tree is dirty — publishing the build from it anyway." >&2
fi

SRC_SHA="$(git rev-parse --short HEAD)"
SRC_SUBJECT="$(git log -1 --pretty=%s)"

echo "==> Building"
npm run build

# Pages would otherwise treat _next/ as a Jekyll internal and drop it.
[[ -f "$ROOT/out/.nojekyll" ]] || touch "$ROOT/out/.nojekyll"

STAGING="$(mktemp -d)"
trap 'rm -rf "$STAGING"' EXIT
cp -a "$ROOT/out/." "$STAGING/"

echo "==> Publishing $(find "$STAGING" -type f | wc -l) files ($(du -sh "$STAGING" | cut -f1))"

if [[ "$DRY_RUN" == "1" ]]; then
  echo "--- dry run, nothing pushed. Contents: ---"
  (cd "$STAGING" && find . -maxdepth 1 | sort)
  exit 0
fi

cd "$STAGING"
git init -q -b "$PAGES_BRANCH"
git add -A
git -c user.name="$(git -C "$ROOT" config user.name)" \
    -c user.email="$(git -C "$ROOT" config user.email)" \
    commit -q -m "Deploy $SRC_SHA — $SRC_SUBJECT"

# The published branch is a build artefact, not history worth keeping, so each
# deploy replaces it outright.
git push -q --force "$PAGES_REPO" "$PAGES_BRANCH"

echo "==> Deployed $SRC_SHA to $PAGES_BRANCH"
echo "    https://talhacaglar.github.io/"
