# talhacaglar.github.io

Personal portfolio. Next.js 16 (App Router) + Tailwind v4, built as a static
export.

Live at **https://talhacaglar.github.io/**

The public repository contains the source and deploys its static export through
GitHub Actions. The Pages artifact contains only the generated `out/` directory.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Design system

Modeled on [cobanov.dev](https://cobanov.dev/): a black page, a hairline frame,
and rows where a section title sits in a narrow column beside its content.

- Black, white and neutral greys, plus one blue, `--accent`. Blue only marks
  state: hover, focus, finished topics, the email underline and the LLM step in
  a system sketch
- Geist for everything, Geist Mono for dates, statuses and stacks. Weights stay
  at 400 and 500
- Motion is limited to the hero rising once on load and small hover changes
- Rows are the default layout. The home page order is Learning, Projects,
  Experience, Certificates, Contact; `/projects/` adds the smaller projects
- Project cards use a real 16:9 screenshot (`public/projects/*.webp`). Projects
  with no public repository draw their pipeline in `src/components/Sketches.tsx`
  instead, and every box in a sketch has to be a step the CV describes
- `src/data/learning.ts` is a log: move topics from `next` to `done` as courses
  progress
- Copy stays short, plain and factual
- Open Graph image, sitemap and structured data ship with the export

Personal facts and work records live in `src/data/`. Keep them factual, in step
with the current CV, and do not add decorative or invented claims.

The CV source is `print/cv-ai.html`; `scripts/build-print.sh` renders it to
`public/resume/`. The portfolio PDFs in `public/portfolio/` still describe the
earlier positioning and are not linked from the site.

## Verify before deploying

```bash
npm run lint
npm run build
npx serve@latest out -p 4321
```

Check 320 / 390 / 768 / 1440 widths: no horizontal overflow, Turkish glyphs
(`Ç ğ ı ş İ`) render correctly, every project, course and certificate link
resolves, both CVs download, and reduced motion leaves all content visible.

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
- The project stays compatible with `output: "export"`; do not introduce server
  actions, cookies, runtime route handlers or the default image optimizer.
