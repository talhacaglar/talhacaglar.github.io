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
public one contains compiled HTML, CSS and JS only. Production source maps are
disabled; no `.tsx` is published.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Design system

The site is a warm, dark work index rather than a card-based portfolio.

- Neutral graphite surfaces, chalk-white type and a restrained copper accent;
  no purple, gradients or glass effects
- Barlow Condensed for identity, Manrope for body copy, IBM Plex Mono for data
- A desktop Work Index drives a sticky Project Inspector; mobile renders the
  same project information inline
- Certifications are a document archive; experience is an aligned record
- Copy stays short, conversational and factual
- Motion is limited to the hero reveal, mobile navigation and inspector change

Personal facts and work records live in `src/data/`. Keep them factual and do
not add decorative or invented claims.

## Verify before deploying

```bash
npm run lint
npm run build
npx serve@latest out -p 4321
```

Check 390 / 768 / 1440 widths: no horizontal overflow, Turkish glyphs
(`Ç ğ ı ş`) render correctly, the project inspector follows hover and keyboard
focus, every project and certificate link resolves, the mobile index closes on
selection/Escape, and reduced motion leaves all content visible.

In restricted sandboxes Turbopack may be unable to bind its internal CSS worker
port. That is an environment limitation; use `next build --webpack` for the
equivalent production verification there.

## Deploy

```bash
./scripts/deploy.sh -n   # build and list what would be published
./scripts/deploy.sh      # build and force-push out/ to the public repo
```

The published branch is a build artifact, so each deploy replaces it. Deployment
is an explicit operation; do not run it as part of routine design work.

## Gotchas

- Never add an unlayered rule to `globals.css`. Tailwind v4 utilities live in
  `@layer utilities`, so unlayered rules silently outrank them.
- All fonts need `latin-ext`, or Turkish characters fall back to a system face.
- `lucide-react` does not ship brand icons. GitHub, LinkedIn and Telegram remain
  hand-written SVGs in `src/components/ui/icons.tsx`.
- The project stays compatible with `output: "export"`; do not introduce server
  actions, cookies, runtime route handlers or the default image optimizer.
