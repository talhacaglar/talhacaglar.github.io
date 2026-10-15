import { roles, education } from "@/data/background";

function Entry({
  date,
  title,
  subtitle,
  location,
  summary,
  index,
}: {
  date: string;
  title: string;
  subtitle: string;
  location?: string;
  summary?: string;
  index: number;
}) {
  return (
    <li
      className="reveal grid gap-x-12 gap-y-2 border-b border-[var(--line)] py-8 md:grid-cols-[13rem_minmax(0,1fr)]"
      style={{ "--i": index } as React.CSSProperties}
    >
      <p className="text-sm leading-6 text-[var(--smoke)] md:pt-1.5">{date}</p>
      <div className="min-w-0">
        <h4 className="text-[1.375rem] font-semibold leading-snug tracking-[-0.02em]">{title}</h4>
        <p className="mt-1 text-[var(--chalk)]">{subtitle}</p>
        {location && <p className="mt-0.5 text-sm text-[var(--smoke)]">{location}</p>}
        {summary && <p className="mt-4 max-w-2xl text-[var(--ash)]">{summary}</p>}
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <div className="reveal">
          <h2 className="section-title">Experience</h2>
          <p className="section-lead">Internships and programs where I got to learn on real systems.</p>
        </div>

        <h3 className="sr-only">Work</h3>
        <ol className="mt-10 border-t border-[var(--line)]">
          {roles.map((role, index) => (
            <Entry
              key={role.id}
              date={role.date}
              title={role.company}
              subtitle={role.role}
              location={role.location}
              summary={role.summary}
              index={index}
            />
          ))}
        </ol>

        <h3 className="reveal mt-16 text-[1.0625rem] font-semibold text-[var(--ash)]">Education</h3>
        <ol className="mt-4 border-t border-[var(--line)]">
          <Entry date={education.date} title={education.school} subtitle={education.degree} index={0} />
        </ol>
      </div>
    </section>
  );
}
