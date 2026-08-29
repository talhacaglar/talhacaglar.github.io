import { roles, education } from "@/data/background";

export function Experience() {
  return (
    <section id="experience" className="technical-grid py-24 sm:py-28 lg:py-36">
      <div className="site-shell">
        <div className="border-b hairline pb-12">
          <p className="section-kicker text-[var(--oxide)]">Experience</p>
          <h2 className="display-title mt-7">Work and education</h2>
        </div>

        <ol>
          {roles.map((role, index) => (
            <li
              key={role.id}
              className="grid gap-5 border-b hairline py-8 sm:grid-cols-[2.5rem_minmax(11rem,0.55fr)_minmax(0,1fr)] sm:gap-8 sm:py-10"
            >
              <span className="font-mono text-[0.65rem] font-semibold text-[var(--oxide)]">0{index + 1}</span>
              <div>
                <p className="font-mono text-[0.65rem] font-semibold uppercase leading-5 tracking-[0.1em] text-[var(--steel-dark)]">
                  {role.date}
                </p>
                {role.current && (
                  <span className="mt-3 inline-flex items-center gap-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[var(--oxide)]">
                    <span className="h-1.5 w-1.5 bg-current" aria-hidden="true" />
                    Current
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold uppercase leading-none tracking-[-0.025em] sm:text-4xl">
                  {role.company}
                </h3>
                <p className="mt-3 text-base text-[var(--ink-soft)]">{role.role}</p>
                {role.location && (
                  <p className="mt-3 font-mono text-[0.65rem] text-[var(--steel-dark)]">{role.location}</p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid border-y hairline sm:grid-cols-[minmax(12rem,0.6fr)_minmax(0,1.4fr)]">
          <div className="border-b hairline bg-[var(--ink)] p-6 text-[var(--paper)] sm:border-b-0 sm:border-r sm:p-8">
            <p className="section-kicker text-[var(--oxide)]">Education</p>
            <p className="mt-8 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--steel)]">
              {education.date}
            </p>
          </div>
          <div className="bg-[var(--surface)] p-6 sm:p-8 lg:p-10">
            <h3 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.025em] sm:text-4xl">
              {education.school}
            </h3>
            <p className="mt-4 text-base text-[var(--steel-dark)] sm:text-lg">{education.degree}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
