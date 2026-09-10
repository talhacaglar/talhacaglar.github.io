import { ArrowUpRight } from "lucide-react";

const facts = [
  { value: "Computer Engineering", label: "Degree" },
  { value: "Arch Linux", label: "Primary environment" },
  { value: "Security", label: "Area of interest" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="technical-grid relative flex min-h-[100svh] items-stretch overflow-hidden border-b hairline pt-[calc(var(--nav-height)+var(--safe-top))]"
    >
      <div className="hero-scan" aria-hidden="true" />
      <div className="site-shell relative z-10 flex min-h-[calc(100svh-var(--nav-height)-var(--safe-top))] flex-col">
        <div className="hero-reveal hero-reveal-1 flex items-center justify-between border-x border-b hairline px-4 py-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-6">
          <span>Portfolio / 2026</span>
          <span className="flex items-center gap-2 text-[var(--oxide)]">
            <span className="status-pulse h-2 w-2 bg-current" aria-hidden="true" />
            Open to opportunities
          </span>
        </div>

        <div className="flex flex-1 border-x hairline">
          <div className="relative flex min-h-[56svh] w-full flex-col justify-between overflow-hidden px-4 py-9 sm:px-6 sm:py-11 lg:min-h-0 lg:py-14">
            <div
              className="absolute right-0 top-0 h-24 w-3 bg-[var(--oxide)] sm:h-32 sm:w-4"
              aria-hidden="true"
            />
            <h1 className="hero-reveal hero-reveal-2 mx-auto max-w-4xl pb-[0.06em] text-center font-display text-[clamp(5.15rem,12.5vw,12.5rem)] font-extrabold uppercase leading-[0.74] tracking-[-0.06em]">
              <span className="block">Talha</span>
              <span className="block text-[var(--oxide)]">Çağlar</span>
            </h1>

            <div className="hero-reveal hero-reveal-3 mt-12 grid max-w-5xl gap-8 border-t hairline pt-7 sm:grid-cols-[minmax(11rem,0.55fr)_minmax(0,1fr)] lg:mt-8">
              <p className="section-kicker self-start text-[var(--oxide)]">Linux / Security</p>
              <div>
                <p className="max-w-lg font-display text-[clamp(1.8rem,3.1vw,2.75rem)] font-semibold leading-[0.98] tracking-[-0.025em]">
                  Computer engineering student focused on Linux, security, and desktop software.
                </p>
                <p className="mt-5 max-w-lg text-base leading-7 text-[var(--ink-soft)]">
                  I work on local-first applications, terminal tools, and security-focused systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="hero-reveal hero-reveal-4 grid border-x border-t hairline sm:grid-cols-3" aria-label="Key facts">
          {facts.map((fact, index) => (
            <li
              key={fact.label}
              className={`flex items-baseline justify-between gap-4 border-b hairline px-4 py-5 sm:min-h-24 sm:flex-col sm:items-start sm:justify-between sm:border-b-0 sm:px-6 sm:py-5 ${
                index < facts.length - 1 ? "sm:border-r" : ""
              }`}
            >
              <span className="font-display text-2xl font-bold uppercase leading-none tracking-[-0.02em] sm:text-3xl">
                {fact.value}
              </span>
              <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--steel-dark)]">
                {fact.label}
              </span>
            </li>
          ))}
        </ul>

        <a href="#contact" className="sr-only">
          Contact Talha Çağlar <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
