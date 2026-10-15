# talhacaglar.github.io

Personal portfolio. Next.js 16 (App Router) + Tailwind v4 + Framer Motion,
built as a static export.

Live at **https://talhacaglar.github.io/**

The public repository contains the source and deploys its static export through
GitHub Actions. The Pages artifact contains only the generated `out/` directory.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Design system

Lights off, lamp on: a quiet walnut-and-ash room where one warm light does the
talking.

- Brown-grey palette (`--night`, `--dusk`, bone `--chalk`, taupe `--ash`) with a
  single honey accent, `--glow`, used as light: rings, halos, focus, the open
  project. Never as a large flat fill; no purple
- Bricolage Grotesque for everything, JetBrains Mono only for the terminal motif
  (`~/clar`, the `$` prompt)
- The hero is the one orchestrated moment: the ring draws, the room lights, the
  name rises and the prompt types itself. Pure CSS, so it never waits on hydration
- Section headings carry a small ring that lights up as the section arrives;
  content reveals are opted into by an inline script in `layout.tsx` and stay
  visible without JS or with reduced motion
- Projects are one accordion for every breakpoint, with problem / approach /
  result evidence inside
- Interaction motion answers an action: the nav indicator glides, accordions
  open with height, copy buttons swap their label
- Copy stays short, conversational and factual
- Open Graph image, sitemap and structured data ship with the export

Personal facts and work records live in `src/data/`. Keep them factual and do
not add decorative or invented claims.

## Verify before deploying

```bash
npm run lint
npm run build
npx serve@latest out -p 4321
```

Check 390 / 768 / 1440 widths: no horizontal overflow, Turkish glyphs
(`Ç ğ ı ş`) render correctly, project selection works by keyboard and pointer,
every project and certificate link resolves, the mobile dialog traps focus and
closes on selection/Escape, and reduced motion leaves all content visible.

In restricted sandboxes Turbopack may be unable to bind its internal CSS worker
port. That is an environment limitation; use `next build --webpack` for the
equivalent production verification there.

## Deploy

```bash
./scripts/deploy.sh -n   # lint + build without pushing
./scripts/deploy.sh      # verify, then push main to trigger Pages
```

Deployment is an explicit operation. The script refuses to deploy a dirty tree;
the workflow performs the production build and publishes `out/` as a Pages
artifact without rewriting Git history.

## Gotchas

- Never add an unlayered rule to `globals.css`. Tailwind v4 utilities live in
  `@layer utilities`, so unlayered rules silently outrank them.
- All fonts need `latin-ext`, or Turkish characters fall back to a system face.
- `lucide-react` does not ship brand icons. GitHub, LinkedIn and Telegram remain
  hand-written SVGs in `src/components/ui/icons.tsx`.
- The project stays compatible with `output: "export"`; do not introduce server
  actions, cookies, runtime route handlers or the default image optimizer.
