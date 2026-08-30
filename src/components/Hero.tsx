import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { ArtifactStack } from "@/components/ArtifactStack";

const facts = [
  { value: "Computer Engineering", label: "Studying" },
  { value: "Arch Linux", label: "Daily system" },
  { value: "Security", label: "Building depth" },
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
            Available for new work
          </span>
        </div>

        <div className="grid flex-1 border-x hairline lg:grid-cols-[minmax(0,1.04fr)_minmax(28rem,0.96fr)]">
          <div className="relative flex min-h-[56svh] flex-col justify-between overflow-hidden border-b hairline px-4 py-9 sm:px-6 sm:py-11 lg:min-h-0 lg:border-b-0 lg:border-r lg:py-14">
            <div
              className="absolute right-0 top-0 h-24 w-3 bg-[var(--oxide)] sm:h-32 sm:w-4"
              aria-hidden="true"
            />
            <h1 className="hero-reveal hero-reveal-2 max-w-4xl pb-[0.06em] font-display text-[clamp(5.15rem,12.5vw,12.5rem)] font-extrabold uppercase leading-[0.74] tracking-[-0.06em]">
              <span className="block">Talha</span>
              <span className="block text-[var(--oxide)]">Çağlar</span>
            </h1>

            <div className="hero-reveal hero-reveal-3 mt-12 grid gap-8 border-t hairline pt-7 sm:grid-cols-[minmax(11rem,0.55fr)_minmax(0,1fr)] lg:mt-8">
              <p className="section-kicker self-start text-[var(--oxide)]">Linux / Security</p>
              <div>
                <p className="max-w-lg font-display text-[clamp(1.8rem,3.1vw,2.75rem)] font-semibold leading-[0.98] tracking-[-0.025em]">
                  Computer engineering student building useful systems.
                </p>
                <p className="mt-5 max-w-lg text-base leading-7 text-[var(--ink-soft)]">
                  Local-first desktop tools, terminal workflows, and security-minded infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-reveal hero-reveal-3 flex min-h-[33rem] flex-col border-b hairline p-4 sm:p-6 lg:min-h-0 lg:border-b-0 lg:p-8 xl:p-10">
            <ArtifactStack />

            <div className="mt-5 grid gap-4 border-t hairline pt-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <p className="max-w-sm text-sm leading-6 text-[var(--steel)]">
                Real interfaces from selected projects. Move across the stack to inspect its depth.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <a
                  href="#projects"
                  className="group inline-flex min-h-11 items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
                >
                  See the work
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
                </a>
                <a
                  href="/resume/talha-caglar-resume.pdf"
                  download
                  className="group inline-flex min-h-11 items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--oxide)]"
                >
                  Résumé
                  <FileDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
                </a>
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
