"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects, type Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectBody({ project }: { project: Project }) {
  return (
    <div
      className={`grid gap-8 pb-12 pt-1 sm:pl-[2.125rem] md:gap-12 ${
        project.media ? "md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]" : "max-w-3xl"
      }`}
    >
      {project.media && (
        <a
          href={project.media.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group/image relative block aspect-[16/10] self-start overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--dusk)]"
          aria-label={`Open full-size ${project.name} screenshot`}
        >
          <Image
            src={project.media.src}
            alt={project.media.alt}
            fill
            sizes="(max-width: 768px) 100vw, 36rem"
            className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/image:scale-[1.03]"
            style={{ objectPosition: project.media.position ?? "center" }}
          />
        </a>
      )}

      <div className="min-w-0">
        <p className="text-[1.0625rem] leading-7 text-[var(--chalk)]">{project.description}</p>

        {project.caseStudy && (
          <dl className="mt-7 space-y-4 text-[0.9375rem] leading-6">
            {[
              { label: "The problem", text: project.caseStudy.problem },
              { label: "What I did", text: project.caseStudy.decision },
              { label: "Where it landed", text: project.caseStudy.result },
            ].map((row) => (
              <div key={row.label}>
                <dt className="font-semibold text-[var(--chalk)]">{row.label}</dt>
                <dd className="mt-0.5 text-[var(--ash)]">{row.text}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.highlights && (
          <ul className="mt-7 space-y-2 text-[0.9375rem] leading-6 text-[var(--ash)]">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--glow)]" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="pill pill-ghost">
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
            View the source
          </a>
          <span className="text-sm text-[var(--smoke)]">{project.tags.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0].id);
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section">
      <div className="shell">
        <div className="reveal">
          <h2 className="section-title">Projects</h2>
          <p className="section-lead">
            Things I built because I wanted them to exist. Open one to see what it does and why I made it.
          </p>
        </div>

        <ol className="mt-12 border-t border-[var(--line)]">
          {projects.map((project, index) => {
            const open = openId === project.id;
            const panelId = `project-${project.id}`;
            return (
              <li
                key={project.id}
                className="reveal border-b border-[var(--line)]"
                style={{ "--i": Math.min(index, 5) } as React.CSSProperties}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : project.id)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6"
                  >
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 transition-all duration-500 ${
                        open
                          ? "border-[var(--glow)] bg-[var(--glow)] shadow-[0_0_0.9rem_rgb(var(--glow-rgb)/0.7)]"
                          : "border-[var(--line-strong)] group-hover:border-[var(--glow)]"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[clamp(1.45rem,3.4vw,2.1rem)] font-semibold leading-tight tracking-[-0.03em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                        {project.name}
                      </span>
                      <span className="mt-0.5 block text-sm text-[var(--smoke)]">{project.category}</span>
                    </span>
                    <span className="hidden text-sm text-[var(--ash)] md:block">{project.lang}</span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        open
                          ? "rotate-45 border-[var(--glow)] text-[var(--glow)]"
                          : "border-[var(--line-strong)] text-[var(--ash)] group-hover:border-[var(--ash)] group-hover:text-[var(--chalk)]"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="panel"
                      id={panelId}
                      className="overflow-hidden"
                      initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.55, ease },
                        opacity: { duration: 0.35, ease: "easeOut" },
                      }}
                    >
                      <motion.div
                        initial={reduceMotion ? false : { y: 12 }}
                        animate={{ y: 0 }}
                        exit={reduceMotion ? undefined : { y: 8 }}
                        transition={{ duration: 0.55, ease }}
                      >
                        <ProjectBody project={project} />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>

        <a
          href="https://github.com/talhacaglar?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal mt-10 inline-flex items-center gap-3 text-[var(--ash)]"
        >
          <GithubIcon className="h-5 w-5" aria-hidden="true" />
          <span className="soft-link">Everything else is on GitHub</span>
        </a>
      </div>
    </section>
  );
}
