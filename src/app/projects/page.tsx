import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProjectGrid, ProjectRows } from "@/components/Projects";
import { external, Section } from "@/components/Section";
import { featuredProjects, otherProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI projects, Linux desktop apps and open-source contributions by Talha Çağlar.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <Nav current="projects" />
      <main className="flex-1 px-5 md:px-10">
        <div className="mx-auto max-w-[var(--frame)] border-x border-line">
          <section className="px-6 py-16 md:px-10 md:py-20">
            <h1 className="type-display rise">Projects</h1>
            <p className="type-lead rise mt-5 max-w-[58ch] text-muted">
              AI projects, Linux desktop apps and developer tools. Project cards include GitHub and Arch User
              Repository links where available.
            </p>
          </section>

          <Section title="Selected">
            <ProjectGrid projects={featuredProjects} />
          </Section>

          <Section title="More" list>
            <ProjectRows projects={otherProjects} />
          </Section>

          <Section title="Contributions">
            <h3 className="type-item">
              <a href="https://github.com/fornhere/orvant/pull/5" {...external} className="link-quiet">
                Orvant pull request #5
              </a>
            </h3>
            <p className="type-small mt-1 max-w-[78ch] text-muted">
              Submitted a fix and regression test to keep cancelled tasks from triggering project-wide warnings.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
