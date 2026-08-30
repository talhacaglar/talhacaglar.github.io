"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects, type Project } from "@/data/projects";

function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.media) {
    return (
      <div className="project-visual project-visual-image">
        <Image
          src={project.media.src}
          alt={project.media.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 56vw"
          className="object-cover transition-transform duration-700 group-hover/visual:scale-[1.018]"
          style={{ objectPosition: project.media.position ?? "center" }}
        />
        <div className="project-visual-scan" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`project-visual project-schematic project-schematic-${project.id}`} aria-label={`${project.name} system diagram`}>
      <div className="project-schematic-grid" aria-hidden="true" />
      <div className="project-schematic-head">
        <span>{project.category}</span>
        <span>SYS / {project.lang}</span>
      </div>
      <div className="project-schematic-body">
        <div className="project-schematic-mark" aria-hidden="true">{project.name.slice(0, 2)}</div>
        <div className="project-schematic-route" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
        <div className="project-schematic-stack">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span key={tag}><b>0{index + 1}</b>{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-schematic-foot">
        <span>{project.signal}</span>
        <span>Updated {project.updated}</span>
      </div>
    </div>
  );
}

function CaseStudy({ project }: { project: Project }) {
  if (!project.caseStudy) return null;

  const rows = [
    { label: "Problem", text: project.caseStudy.problem },
    { label: "Decision", text: project.caseStudy.decision },
    { label: "Result", text: project.caseStudy.result },
  ];

  return (
    <dl className="mt-8 grid border-l border-t dark-hairline sm:grid-cols-3">
      {rows.map((row) => (
        <div key={row.label} className="border-b border-r dark-hairline p-5">
          <dt className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[var(--oxide)]">
            {row.label}
          </dt>
          <dd className="mt-3 text-sm leading-6 text-[var(--steel)]">{row.text}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectDetails({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <div className="group/visual overflow-hidden border dark-hairline bg-[var(--canvas)]">
        <ProjectVisual project={project} priority={index === 0} />
      </div>

      <div className="mt-8 flex flex-col gap-6 border-b dark-hairline pb-7 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.13em] text-[var(--oxide)]">
            Selected work / 0{index + 1}
          </p>
          <h3 className="mt-3 font-display text-[clamp(3.7rem,6vw,6.6rem)] font-bold uppercase leading-[0.8] tracking-[-0.045em]">
            {project.name}
          </h3>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/source inline-flex min-h-12 shrink-0 items-center gap-3 border dark-hairline px-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] transition-colors hover:border-[var(--oxide)] hover:bg-[var(--oxide)] hover:text-[var(--ink)]"
        >
          View source
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/source:translate-x-1 group-hover/source:-translate-y-1" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[var(--steel)]">
        <span>{project.category}</span>
        <span>{project.signal} · Updated {project.updated}</span>
      </div>

      <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
        {project.description}
      </p>

      <CaseStudy project={project} />

      {project.highlights && (
        <ul className="mt-7 grid gap-3 border-t dark-hairline pt-6 text-sm leading-6 text-[var(--steel)] sm:grid-cols-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="grid grid-cols-[1rem_1fr] gap-3">
              <span className="mt-[0.7rem] h-1.5 w-1.5 bg-[var(--oxide)]" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border-b border-[var(--oxide)] pb-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.1em]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
}

function MobileProject({ project, index }: { project: Project; index: number }) {
  return (
    <li className="border-b dark-hairline first:border-t">
      <details className="group/mobile" open={index === 0}>
        <summary className="flex min-h-24 cursor-pointer list-none items-center justify-between gap-5 py-6 marker:hidden">
          <div>
            <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[var(--oxide)]">
              {project.signal}
            </span>
            <h3 className="mt-2 font-display text-4xl font-bold uppercase leading-none tracking-[-0.03em]">
              {project.name}
            </h3>
          </div>
          <ChevronDown className="h-5 w-5 shrink-0 text-[var(--steel)] transition-transform duration-300 group-open/mobile:rotate-180" aria-hidden="true" />
        </summary>

        <div className="pb-9">
          <div className="group/visual overflow-hidden border dark-hairline bg-[var(--canvas)]">
            <ProjectVisual project={project} priority={index === 0} />
          </div>
          <p className="mt-6 text-sm leading-6 text-[var(--ink-soft)]">{project.description}</p>
          <CaseStudy project={project} />
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[var(--steel)]">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-11 items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
          >
            View source <ArrowUpRight className="h-4 w-4 text-[var(--oxide)]" aria-hidden="true" />
          </a>
        </div>
      </details>
    </li>
  );
}

export function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const reduce = useReducedMotion();
  const activeProject = projects.find((project) => project.id === activeId) ?? projects[0];
  const activeIndex = projects.findIndex((project) => project.id === activeProject.id);

  return (
    <section id="projects" className="bg-[var(--ink)] py-24 text-[var(--paper)] sm:py-28 lg:py-36">
      <div className="site-shell">
        <div className="grid gap-8 border-b dark-hairline pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.55fr)] lg:items-end">
          <div>
            <p className="section-kicker text-[var(--oxide)]">Selected systems · {projects.length}</p>
            <h2 className="display-title mt-7 max-w-5xl">Proof, not promises</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--steel)] lg:pb-1 lg:text-lg">
            Interfaces, decisions, and source code from tools built to solve a concrete problem.
          </p>
        </div>

        <div className="hidden gap-10 pt-14 lg:grid lg:grid-cols-[minmax(19rem,0.62fr)_minmax(32rem,1.38fr)] xl:gap-16">
          <div>
            <p className="mb-5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[var(--steel)]">
              Work index / Hover or select
            </p>
            <ol className="border-t dark-hairline">
              {projects.map((project, index) => {
                const active = project.id === activeProject.id;
                return (
                  <li key={project.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(project.id)}
                      onFocus={() => setActiveId(project.id)}
                      onClick={() => setActiveId(project.id)}
                      aria-pressed={active}
                      className={`group grid min-h-24 w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b dark-hairline px-2 text-left transition-colors duration-300 ${
                        active ? "bg-[var(--paper)] text-[var(--ink)]" : "hover:bg-[var(--surface)]"
                      }`}
                    >
                      <span className={`font-mono text-[0.62rem] font-semibold ${active ? "text-[var(--oxide-ink)]" : "text-[var(--steel)]"}`}>
                        0{index + 1}
                      </span>
                      <span>
                        <span className="block font-display text-3xl font-bold uppercase leading-none tracking-[-0.025em] xl:text-4xl">
                          {project.name}
                        </span>
                        <span className={`mt-2 block font-mono text-[0.58rem] font-semibold uppercase tracking-[0.1em] ${active ? "text-[color:color-mix(in_srgb,var(--ink)_66%,transparent)]" : "text-[var(--steel-dark)]"}`}>
                          {project.signal}
                        </span>
                      </span>
                      <span className={`h-2 w-2 border ${active ? "border-[var(--oxide-ink)] bg-[var(--oxide-ink)]" : "border-[var(--steel-dark)]"}`} aria-hidden="true" />
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <aside className="project-inspector sticky top-[calc(var(--nav-height)+1.5rem)] min-h-[48rem] self-start overflow-hidden border dark-hairline bg-[var(--surface)] p-6 xl:p-9">
            <AnimatePresence>
              <motion.div
                key={activeProject.id}
                className="relative z-10"
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -10 }}
                transition={{ duration: reduce ? 0.1 : 0.3 }}
              >
                <ProjectDetails project={activeProject} index={activeIndex} />
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>

        <ol className="pt-12 lg:hidden">
          {projects.map((project, index) => (
            <MobileProject key={project.id} project={project} index={index} />
          ))}
        </ol>

        <div className="mt-14 flex justify-end border-t dark-hairline pt-7">
          <a
            href="https://github.com/talhacaglar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.12em]"
          >
            <GithubIcon className="h-5 w-5" aria-hidden="true" />
            More on GitHub
            <ArrowUpRight className="h-4 w-4 text-[var(--oxide)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
