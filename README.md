# talhacaglar.github.io — source

Personal portfolio. Next.js 16 (App Router) + Tailwind v4 + Framer Motion,
built as a static export.

Live at **https://talhacaglar.github.io/**

## Why there are two repositories

| Repo | Visibility | Contents |
|---|---|---|
| `talhacaglar/portfolio` | **private** | this source |
| `talhacaglar/talhacaglar.github.io` | public | build output only |

GitHub Pages on the Free plan can only serve from a public repository, so the
public one exists purely to be served: it holds the compiled HTML, CSS and JS
and nothing else. Production source maps are off, so no `.tsx` is published.

If the account ever moves to GitHub Pro — free through the
[Student Developer Pack](https://education.github.com/pack) — Pages can serve
straight from a private repo and the two can be collapsed back into one.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Verify before deploying

`npm run build` passing is not sufficient — it will not catch a clipped hero or
a stripped CSS property. Serve the real export and look at it:

```bash
npm run build
npx serve@latest out -p 4321
```

Walk 390 / 768 / 1440 and check: no console errors, no horizontal overflow,
Turkish glyphs (`Ç ğ ı ş`) render in the display face, every project and
certificate link resolves, card hover tilts, the nav indicator follows the
section, and reduced motion still shows every card.

## Deploy

```bash
./scripts/deploy.sh -n   # build and list what would be published
./scripts/deploy.sh      # build and force-push out/ to the public repo
```

The published branch is a build artefact, so each deploy replaces it.

## Content lives in `src/data/`

`projects.ts`, `certifications.ts`, `background.ts`. Everything shown on the
site must map to something real and checkable — `lang` and `updated` on a
project mirror the GitHub API, so keep them in step with the repo.

## Gotchas

- **Never add an unlayered rule to `globals.css`.** Tailwind v4 puts utilities
  in `@layer utilities`; an unlayered rule outranks every one of them. Base
  rules go in `@layer base`, component classes in `@layer components`.
- **Write `-webkit-backdrop-filter` before `backdrop-filter`.** Lightning CSS
  deduplicates the pair against its browser targets and keeps the last one; with
  the standard property first it drops it, and every glass surface silently
  loses its blur.
- **All fonts need `latin-ext`**, or Turkish characters fall back to a system
  face.
- `lucide-react` no longer ships brand icons — GitHub/LinkedIn/Telegram are
  hand-written SVGs in `src/components/ui/icons.tsx`.
