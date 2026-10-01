import { roles, education } from "@/data/background";

export function Experience() {
  return (
    <section id="experience" className="technical-grid py-16 sm:py-24 lg:py-32">
      <div className="site-shell">
        <div className="border-b hairline pb-9 sm:pb-12">
          <p className="section-kicker text-[var(--oxide)]">Experience</p>
          <h2 className="display-title mt-7">Work and education</h2>
        </div>

        <ol className="experience-timeline" aria-label="Work experience in reverse chronological order">
          {roles.map((role, index) => (
            <li
              key={role.id}
              className="experience-entry grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 border-b hairline py-7 sm:grid-cols-[3rem_minmax(11rem,0.55fr)_minmax(0,1fr)] sm:gap-8 sm:py-10"
            >
              <span className="timeline-node row-span-2 sm:row-span-1" aria-hidden="true">
                <i className={role.current ? "timeline-node-current" : ""} />
                <b>{String(roles.length - index).padStart(2, "0")}</b>
              </span>
              <div className="min-w-0">
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
              <div className="min-w-0">
                <h3 className="break-words font-display text-[1.8rem] font-bold uppercase leading-none tracking-[-0.025em] sm:text-4xl">
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

        <div className="mt-12 grid border-y hairline sm:mt-16 sm:grid-cols-[minmax(12rem,0.6fr)_minmax(0,1.4fr)]">
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
