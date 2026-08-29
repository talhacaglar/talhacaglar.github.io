"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects, type Project } from "@/data/projects";

function ProjectMeta({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-center justify-between gap-5 border-b dark-hairline pb-5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.13em] text-[var(--steel)]">
        <span>{project.lang}</span>
        <span>Updated {project.updated}</span>
      </div>
      <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
        {project.description}
      </p>

      {project.highlights && (
        <ul className="mt-8 grid gap-3 border-t dark-hairline pt-6 text-sm leading-6 text-[var(--steel)]">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="grid grid-cols-[1rem_1fr] gap-3">
              <span className="mt-[0.7rem] h-1.5 w-1.5 bg-[var(--oxide)]" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-3" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border-b border-[var(--oxide)] pb-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--paper)]"
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
    <li className="border-b dark-hairline py-8 first:border-t">
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
        <div className="flex items-start justify-between gap-5">
          <div>
            <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.13em] text-[var(--oxide)]">
              0{index + 1} / {project.lang}
            </span>
            <h3 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-[-0.03em]">
              {project.name}
            </h3>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--steel)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
        </div>
        <p className="mt-6 text-sm leading-6 text-[var(--ink-soft)]">{project.description}</p>
        {project.highlights && (
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--steel)]">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="grid grid-cols-[0.75rem_1fr] gap-2">
                <span className="mt-[0.68rem] h-1 w-1 bg-[var(--oxide)]" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[var(--steel)]">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </a>
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
            <p className="section-kicker text-[var(--oxide)]">Projects · {projects.length}</p>
            <h2 className="display-title mt-7 max-w-5xl">Things I&apos;ve built</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--steel)] lg:pb-1 lg:text-lg">
            Tools and experiments made to solve something real.
          </p>
        </div>

        <div className="hidden gap-12 pt-14 lg:grid lg:grid-cols-[minmax(22rem,0.8fr)_minmax(28rem,1.2fr)] xl:gap-20">
          <ol className="border-t dark-hairline">
            {projects.map((project, index) => {
              const active = project.id === activeProject.id;
              return (
                <li key={project.id}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActiveId(project.id)}
                    onFocus={() => setActiveId(project.id)}
                    className={`group grid min-h-24 grid-cols-[3rem_1fr_auto] items-center gap-4 border-b dark-hairline px-2 transition-colors duration-300 ${
                      active ? "bg-[var(--paper)] text-[var(--ink)]" : "hover:bg-[var(--surface)]"
                    }`}
                  >
                    <span className={`font-mono text-[0.65rem] font-semibold ${active ? "text-[var(--oxide)]" : "text-[var(--steel)]"}`}>
                      0{index + 1}
                    </span>
                    <span className="font-display text-3xl font-bold uppercase leading-none tracking-[-0.025em] xl:text-4xl">
                      {project.name}
                    </span>
                    <ArrowUpRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${active ? "text-[var(--oxide)]" : "text-[var(--steel)]"}`} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ol>

          <aside className="project-inspector sticky top-[calc(var(--nav-height)+2rem)] min-h-[38rem] self-start overflow-hidden border dark-hairline bg-[var(--surface)] p-10 xl:p-12">
            <span
              className="pointer-events-none absolute -bottom-8 right-3 font-display text-[15rem] font-extrabold uppercase leading-none text-[color:color-mix(in_srgb,var(--paper)_4%,transparent)]"
              aria-hidden="true"
            >
              {activeProject.name.slice(0, 2)}
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                className="relative z-10"
                initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -12 }}
                transition={{ duration: reduce ? 0.1 : 0.32 }}
              >
                <div className="mb-10 flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.13em] text-[var(--oxide)]">
                      Project / 0{activeIndex + 1}
                    </p>
                    <h3 className="mt-4 font-display text-[clamp(4rem,7vw,7rem)] font-bold uppercase leading-[0.78] tracking-[-0.045em]">
                      {activeProject.name}
                    </h3>
                  </div>
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 shrink-0 items-center justify-center border dark-hairline transition-colors hover:border-[var(--oxide)] hover:bg-[var(--oxide)]"
                    aria-label={`Open ${activeProject.name} on GitHub`}
                  >
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
                <ProjectMeta project={activeProject} />
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
