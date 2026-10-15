import { ArrowUpRight } from "lucide-react";
import { focusAreas } from "@/data/focus";

export function Focus() {
  return (
    <section id="focus" className="section">
      <div className="shell">
        <div className="reveal">
          <h2 className="section-title">What I work on</h2>
          <p className="section-lead">Three areas I keep coming back to, each with work you can check.</p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <article key={area.id} className="reveal flex flex-col" style={{ "--i": index } as React.CSSProperties}>
              <h3 className="text-[1.375rem] font-semibold leading-tight tracking-[-0.02em]">{area.title}</h3>
              <p className="mt-3 text-[var(--ash)]">{area.summary}</p>

              <ul className="mt-6 space-y-1 border-t border-[var(--line)] pt-4" aria-label={`${area.title} evidence`}>
                {area.evidence.map((item) => {
                  const external = item.href.startsWith("http");
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group -mx-3 flex items-baseline justify-between gap-4 rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[var(--dusk)]"
                      >
                        <span className="min-w-0">
                          <span className="font-medium">{item.label}</span>
                          <span className="block text-sm text-[var(--smoke)]">{item.detail}</span>
                        </span>
                        {external && (
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 translate-y-0.5 text-[var(--smoke)] transition-all duration-300 group-hover:-translate-y-0 group-hover:translate-x-0.5 group-hover:text-[var(--glow)]"
                            aria-hidden="true"
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
