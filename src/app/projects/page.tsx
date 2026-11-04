import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProjectGrid, ProjectRows } from "@/components/Projects";
import { Section } from "@/components/Section";
import { featuredProjects, otherProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI projects, desktop apps on the AUR and smaller tools by Talha Çağlar.",
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
              AI projects first, then desktop apps and smaller tools. The first three have no public repository, so
              their cards show how the system works. Everything else is on GitHub.
            </p>
          </section>

          <Section title="Selected">
            <ProjectGrid projects={featuredProjects} />
          </Section>

          <Section title="More" list>
            <ProjectRows projects={otherProjects} />
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
