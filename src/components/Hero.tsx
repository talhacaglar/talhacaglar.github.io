import { ArrowDown, ArrowUpRight } from "lucide-react";

const facts = [
  { value: "Computer Engineering", label: "Studying" },
  { value: "Arch Linux", label: "Daily setup" },
  { value: "Security", label: "Learning" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="technical-grid relative flex min-h-[100svh] items-stretch overflow-hidden border-b hairline pt-[calc(var(--nav-height)+var(--safe-top))]"
    >
      <div className="site-shell flex min-h-[calc(100svh-var(--nav-height)-var(--safe-top))] flex-col">
        <div className="hero-reveal hero-reveal-1 flex items-center justify-between border-x border-b hairline px-4 py-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-6">
          <span>Portfolio / 2026</span>
          <span className="flex items-center gap-2 text-[var(--oxide)]">
            <span className="h-2 w-2 bg-current" aria-hidden="true" />
            Available for new work
          </span>
        </div>

        <div className="grid flex-1 border-x hairline lg:grid-cols-[minmax(0,1.65fr)_minmax(20rem,0.65fr)]">
          <div className="relative flex min-h-[52svh] items-end overflow-hidden border-b hairline px-4 py-10 sm:px-6 lg:min-h-0 lg:items-center lg:border-b-0 lg:border-r lg:py-14">
            <div
              className="absolute right-0 top-0 h-24 w-3 bg-[var(--oxide)] sm:h-32 sm:w-4"
              aria-hidden="true"
            />
            <h1 className="hero-reveal hero-reveal-2 pb-[0.06em] font-display text-[clamp(5.5rem,19vw,15rem)] font-extrabold uppercase leading-[0.76] tracking-[-0.06em] lg:-translate-y-5 xl:-translate-y-8">
              <span className="block">Talha</span>
              <span className="block text-[var(--oxide)]">Çağlar</span>
            </h1>
          </div>

          <div className="hero-reveal hero-reveal-3 flex flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14">
            <div>
              <p className="section-kicker text-[var(--oxide)]">Linux / Security</p>
              <p className="mt-8 max-w-md font-display text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-none tracking-[-0.025em]">
                Computer engineering student
              </p>
              <p className="mt-7 max-w-md text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
                I build small tools around Linux, security and everyday problems.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t hairline pt-6">
              <a
                href="#projects"
                className="group inline-flex min-h-11 items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.12em]"
              >
                See my work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="group inline-flex min-h-11 items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--oxide)]"
              >
                Say hello
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <ul className="hero-reveal hero-reveal-4 grid border-x border-t hairline sm:grid-cols-3" aria-label="Key facts">
          {facts.map((fact, index) => (
            <li
              key={fact.label}
              className={`flex items-baseline justify-between gap-4 border-b hairline px-4 py-5 sm:min-h-28 sm:flex-col sm:items-start sm:justify-between sm:border-b-0 sm:px-6 sm:py-6 ${
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
      </div>
    </section>
  );
}
