import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const facts = [
  { value: "Computer Engineering", label: "Degree" },
  { value: "Arch Linux", label: "Primary environment" },
  { value: "Security", label: "Area of interest" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="technical-grid relative flex items-stretch overflow-hidden border-b hairline pt-[calc(var(--nav-height)+var(--safe-top))] lg:min-h-[100svh]"
    >
      <div className="hero-scan" aria-hidden="true" />
      <div className="site-shell relative z-10 flex flex-col lg:min-h-[calc(100svh-var(--nav-height)-var(--safe-top))]">
        <div className="hero-reveal hero-reveal-1 flex items-center justify-between border-x border-b hairline px-4 py-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-6">
          <span>Portfolio / 2026</span>
          <span className="flex items-center gap-2 text-[var(--oxide)]">
            <span className="status-pulse h-2 w-2 bg-current" aria-hidden="true" />
            <span className="sm:hidden">Open to work</span>
            <span className="hidden sm:inline">Open to opportunities</span>
          </span>
        </div>

        <div className="flex flex-1 border-x hairline">
          <div className="relative flex w-full flex-col justify-between overflow-hidden px-4 pb-7 pt-8 sm:px-6 sm:py-11 lg:py-14">
            <div
              className="absolute right-0 top-0 h-24 w-3 bg-[var(--oxide)] sm:h-32 sm:w-4"
              aria-hidden="true"
            />
            <h1 className="hero-reveal hero-reveal-2 mx-auto max-w-4xl pb-[0.06em] text-center font-display text-[clamp(3.9rem,18vw,6.5rem)] font-extrabold uppercase leading-[0.78] tracking-[-0.06em] sm:text-[clamp(6.5rem,12.5vw,12.5rem)]">
              <span className="block">Talha</span>
              <span className="block text-[var(--oxide)]">Çağlar</span>
            </h1>

            <div className="hero-reveal hero-reveal-3 mt-8 grid max-w-5xl gap-5 border-t hairline pt-6 sm:mt-12 sm:grid-cols-[minmax(11rem,0.55fr)_minmax(0,1fr)] sm:gap-8 lg:mt-8">
              <p className="section-kicker self-start text-[var(--oxide)]">Linux / Security</p>
              <div>
                <p className="max-w-lg font-display text-[clamp(1.5rem,3.1vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.025em]">
                  Computer engineering student focused on Linux, security, and desktop software.
                </p>
                <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--ink-soft)] sm:mt-5 sm:text-base sm:leading-7">
                  I work on local-first applications, terminal tools, and security-focused systems.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                  <a href="#projects" className="hero-action inline-flex min-h-11 items-center gap-2 bg-[var(--paper)] px-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink)] transition-colors hover:bg-[var(--oxide)] sm:gap-3 sm:px-4">
                    Explore projects <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a href="#contact" className="hero-action inline-flex min-h-11 items-center gap-2 border hairline px-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] transition-colors hover:border-[var(--oxide)] hover:text-[var(--oxide)] sm:gap-3 sm:px-4">
                    Contact <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="hero-reveal hero-reveal-4 grid border-x border-t hairline sm:grid-cols-3" aria-label="Key facts">
          {facts.map((fact, index) => (
            <li
              key={fact.label}
              className={`flex items-center justify-between gap-4 border-b hairline px-4 py-4 sm:min-h-24 sm:flex-col sm:items-start sm:justify-between sm:border-b-0 sm:px-6 sm:py-5 ${
                index < facts.length - 1 ? "sm:border-r" : ""
              }`}
            >
              <span className="font-display text-xl font-bold uppercase leading-none tracking-[-0.02em] sm:text-3xl">
                {fact.value}
              </span>
              <span className="shrink-0 text-right font-mono text-[0.59rem] font-semibold uppercase tracking-[0.1em] text-[var(--steel-dark)] sm:text-left sm:text-[0.65rem] sm:tracking-[0.14em]">
                {fact.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
