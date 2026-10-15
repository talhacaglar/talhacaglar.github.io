export function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center pt-[calc(var(--nav-height)+var(--safe-top))] md:min-h-[100svh]"
    >
      <div className="shell flex flex-col items-start gap-10 py-16 sm:py-20 md:flex-row md:items-center md:gap-16 lg:gap-24">
        <div className="hero-ring ml-2 md:ml-0" aria-hidden="true">
          <div className="hero-halo">
            <span />
          </div>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="var(--dusk)" />
            <circle
              className="hero-ring-stroke"
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="var(--glow)"
              strokeWidth="1.3"
              pathLength={1}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <span className="hero-ring-label">~/clar</span>
        </div>

        <div className="min-w-0 max-w-[38rem]">
          <h1
            className="hero-rise text-[clamp(3rem,9vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.028em] [font-stretch:90%]"
            style={{ "--d": "0.3s" } as React.CSSProperties}
          >
            Talha Çağlar
          </h1>

          <p
            className="hero-rise hero-prompt mt-5 font-mono whitespace-nowrap text-[var(--ash)]"
            style={{ "--d": "0.55s" } as React.CSSProperties}
          >
            <span className="text-[var(--glow)]">$ </span>
            <span className="hero-typed">curious since childhood, learning by building</span>
            <span className="hero-caret" aria-hidden="true" />
          </p>

          <div className="hero-rise" style={{ "--d": "0.8s" } as React.CSSProperties}>
            <p className="mt-8 text-lg leading-8 text-[var(--ash)]">
              Computer engineering student. I&apos;ve been curious about technology since I was a kid, and that never wore
              off. I love researching and learning new things, and I learn best by building small projects of my own.
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--ash)]">
              I build my projects with AI and use it a lot, every day: planning, writing code, researching and picking
              up new things faster. I also want to know how it works under the hood, not just use it.
            </p>
          </div>

          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ "--d": "1s" } as React.CSSProperties}
          >
            <a href="#projects" className="pill pill-solid">
              See my projects
            </a>
            <a href="#contact" className="pill pill-ghost">
              Get in touch
            </a>
            <span className="ml-1 flex items-center gap-2.5 text-sm text-[var(--smoke)]">
              <span className="status-dot" aria-hidden="true" />
              Open to opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
