import Link from "next/link";
import { CvMenu } from "@/components/CvMenu";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProjectGrid } from "@/components/Projects";
import { external, Section } from "@/components/Section";
import { roles } from "@/data/background";
import { certifications } from "@/data/certifications";
import { courses, type Course } from "@/data/learning";
import { featuredProjects, otherProjects, projectCount } from "@/data/projects";
import { cv, EMAIL, socials } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Talha Çağlar",
  url: "https://talhacaglar.github.io/",
  email: `mailto:${EMAIL}`,
  jobTitle: "AI Engineer Candidate",
  homeLocation: { "@type": "Place", name: "Bursa, Türkiye" },
  sameAs: socials.map((social) => social.href),
  knowsAbout: [
    "AI Engineering",
    "LLM Applications",
    "Structured Outputs",
    "Prompt Engineering",
    "Python",
    "FastAPI",
    "Pydantic",
    "Open Source",
  ],
  owns: [...featuredProjects, ...otherProjects]
    .filter((project) => project.url)
    .map((project) => ({
      "@type": "SoftwareSourceCode",
      name: project.name,
      description: project.description,
      codeRepository: project.url,
    })),
};

function Topics({ label, items, done = false }: { label: string; items: string[]; done?: boolean }) {
  return (
    <p className="type-meta mt-1 flex gap-2">
      <span className="w-8 shrink-0">{label}</span>
      <span className={done ? "text-accent" : undefined}>{items.join(" · ")}</span>
    </p>
  );
}

function CourseRow({ course }: { course: Course }) {
  return (
    <li className="grid gap-1.5 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
      <div className="min-w-0">
        <h3 className="type-item">
          {course.href ? (
            <a href={course.href} {...external} className="link-quiet">
              {course.title}
            </a>
          ) : (
            course.title
          )}
        </h3>
        <p className="type-small mt-1 max-w-[78ch] text-muted">
          {course.provider}
          {course.summary && `. ${course.summary}`}
        </p>
        {course.done && (
          <div className="mt-2.5">
            <Topics label="done" items={course.done} done />
            {course.next && <Topics label="next" items={course.next} />}
          </div>
        )}
      </div>
      <p className="type-meta flex shrink-0 items-center gap-2 self-start sm:pt-1">
        <span className="chip">{course.status}</span>
        {course.date && <span>{course.date}</span>}
      </p>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main className="flex-1 px-5 md:px-10">
        <div className="mx-auto max-w-[var(--frame)] border-x border-line">
          <section className="px-6 py-16 md:px-10 md:py-20">
            <h1 className="type-display rise">Talha Çağlar</h1>
            <p className="type-lead rise mt-5 max-w-[58ch] text-muted">
              Final-year computer engineering student moving into AI engineering. I build LLM applications that check
              the model&apos;s output before anyone sees it: a bank statement analyzer, a video pipeline, an Nmap
              assistant. Mostly Python, FastAPI and Pydantic.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-2 sm:gap-3">
              <a href="#projects" className="btn btn-solid">
                See the projects
              </a>
              <CvMenu variant="button" />
            </div>
          </section>

          <Section id="learning" title="Learning" list>
            <ul className="divide-y divide-line">
              {courses.map((course) => (
                <CourseRow key={course.id} course={course} />
              ))}
            </ul>
          </Section>

          <Section id="projects" title="Projects">
            <ProjectGrid projects={featuredProjects} />
            <Link
              href="/projects/"
              className="type-small group/all mt-9 inline-flex items-center gap-1.5 text-accent transition-colors duration-150 hover:text-accent-text"
            >
              See all {projectCount} projects
              <span aria-hidden="true" className="transition-transform duration-150 group-hover/all:translate-x-0.5">
                →
              </span>
            </Link>
          </Section>

          <Section id="experience" title="Experience" list>
            <ul className="divide-y divide-line">
              {roles.map((role) => (
                <li key={role.id} className="py-4">
                  <div className="grid gap-x-6 gap-y-0.5 sm:grid-cols-[1fr_auto] sm:items-baseline">
                    <h3 className="type-item">{role.company}</h3>
                    <p className="type-small text-muted sm:col-start-1 sm:row-start-2">{role.role}</p>
                    <p className="type-meta mt-0.5 sm:col-start-2 sm:row-start-1 sm:mt-0">{role.date}</p>
                  </div>
                  {role.summary && <p className="type-small mt-1 max-w-[78ch] text-muted">{role.summary}</p>}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="certificates" title="Certificates" list>
            <ul className="divide-y divide-line">
              {certifications.map((cert) => (
                <li key={cert.id} className="py-4">
                  <div className="flex items-baseline gap-x-3">
                    <h3 className="type-item min-w-0">{cert.name}</h3>
                    <a href={cert.url} {...external} className="type-meta link-quiet ml-auto shrink-0">
                      verify
                    </a>
                  </div>
                  <p className="type-small mt-1 text-muted">
                    {cert.detail} <span className="type-meta ml-1">{cert.date}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="contact" title="Contact">
            <a
              href={`mailto:${EMAIL}`}
              className="text-lg break-all text-ink underline decoration-accent decoration-1 underline-offset-[0.25em] transition-colors duration-150 hover:text-accent sm:text-2xl"
            >
              {EMAIL}
            </a>
            <p className="type-lead mt-4 max-w-[58ch] text-muted">
              Based in Bursa, Türkiye. I expect to graduate in June 2027, and I&apos;m open to AI engineering internships
              and junior roles.
            </p>
            <p className="type-small mt-4 text-muted">
              <a href={cv.en} download className="underline decoration-line underline-offset-4 link-quiet">
                CV in English
              </a>
              <span aria-hidden="true"> · </span>
              <a href={cv.tr} download hrefLang="tr" className="underline decoration-line underline-offset-4 link-quiet">
                CV in Turkish
              </a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
