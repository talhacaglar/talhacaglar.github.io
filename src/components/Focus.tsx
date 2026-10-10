import { ArrowUpRight } from "lucide-react";
import { focusAreas } from "@/data/focus";

export function Focus() {
  return (
    <section id="focus" className="border-b hairline py-16 sm:py-24 lg:py-32">
      <div className="site-shell">
        <div className="grid gap-5 border-b hairline pb-9 sm:gap-8 sm:pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.55fr)] lg:items-end">
          <div>
            <p className="section-kicker text-[var(--oxide)]">Focus · {focusAreas.length}</p>
            <h2 className="display-title mt-7">What I work on</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--steel-dark)] lg:pb-1 lg:text-lg">
            Three areas, each backed by work you can check on this page or on GitHub.
          </p>
        </div>

        <ol className="grid border-l hairline lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <li key={area.id} className="focus-area flex flex-col border-b border-r hairline p-6 sm:p-8 lg:p-10">
              <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[var(--oxide)]">
                0{index + 1}
              </span>
              <h3 className="mt-6 font-display text-[2.4rem] font-bold uppercase leading-[0.9] tracking-[-0.03em] sm:text-5xl">
                {area.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-[var(--ink-soft)]">{area.summary}</p>

              <ul className="mt-auto pt-8" aria-label={`${area.title} evidence`}>
                {area.evidence.map((item) => {
                  const external = item.href.startsWith("http");
                  return (
                    <li key={item.label} className="border-t hairline">
                      <a
                        href={item.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex min-h-14 items-center justify-between gap-4 py-3 transition-colors hover:text-[var(--oxide)]"
                      >
                        <span className="min-w-0">
                          <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em]">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-sm text-[var(--steel-dark)]">{item.detail}</span>
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-[var(--steel-dark)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--oxide)]"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
