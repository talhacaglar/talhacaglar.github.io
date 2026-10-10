#!/usr/bin/env bash
#
# Render the print documents (CV and portfolio) in print/ to PDF with headless Chrome.
#
# Usage:  ./scripts/build-print.sh
#
set -euo pipefail

cd "$(dirname "$0")/.."
ROOT="$(pwd)"
CHROME="${CHROME:-$(command -v google-chrome-stable || command -v chromium)}"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

render() {
  local page="$1" lang="$2" out="$3"
  mkdir -p "$(dirname "$out")"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --user-data-dir="$PROFILE" \
    --run-all-compositor-stages-before-draw --virtual-time-budget=15000 \
    --print-to-pdf="$out" "file://$ROOT/print/$page?lang=$lang" >/dev/null 2>&1
  echo "==> $out ($(pdfinfo "$out" | awk '/^Pages/ {print $2}') pages)"
}

render cv.html tr public/resume/Talha-Caglar-CV.pdf
render cv.html en public/resume/Talha-Caglar-CV-EN.pdf
if [[ -f print/portfolio.html ]]; then
  render portfolio.html tr public/portfolio/Talha-Caglar-Portfolyo.pdf
  render portfolio.html en public/portfolio/Talha-Caglar-Portfolio-EN.pdf
fi
