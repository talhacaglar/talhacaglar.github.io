"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { roles, education } from "@/data/background";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border-[var(--glass-border)] font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--accent)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
            Since 2023
          </span>
          <h2
            className="font-display font-semibold tracking-[-0.03em] leading-[1.08] text-[var(--text)] mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Where I&apos;ve been
          </h2>
        </motion.div>

        {/* Timeline. The rail is decorative, so it is drawn on the list itself
            rather than as an extra element in the accessibility tree. */}
        <ol className="relative border-l border-[var(--glass-border)] ml-2 pl-6 md:pl-8 flex flex-col gap-5">
          {roles.map((role, i) => (
            <motion.li
              key={role.id}
              className="relative"
              initial={{ opacity: 0, x: reduce ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: reduce ? 0.2 : 0.8,
                delay: reduce ? 0 : i * 0.1,
                ease: EASE,
              }}
            >
              {/* Node on the rail */}
              <span
                className={`absolute -left-[calc(1.5rem+5px)] md:-left-[calc(2rem+5px)] top-7 w-2.5 h-2.5 rounded-full border-2 border-[var(--bg)] ${
                  role.current ? "bg-[var(--accent)]" : "bg-[var(--text-faint)]"
                }`}
                aria-hidden="true"
              />

              <div className="glass border-[var(--glass-border)] rounded-2xl p-5 md:p-6 transition-colors duration-300 hover:border-[rgba(192,132,252,0.35)]">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-[0.6875rem] font-medium tracking-tight text-[var(--accent)] px-2.5 py-1 rounded-lg bg-[rgba(168,85,247,0.12)] border border-[rgba(168,85,247,0.2)]">
                    {role.date}
                  </span>
                  {role.current && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--text-faint)]">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                        animate={reduce ? undefined : { opacity: [1, 0.35, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        aria-hidden="true"
                      />
                      Current
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-lg md:text-xl tracking-tight text-[var(--text)]">
                  {role.company}
                </h3>
                <p className="text-[var(--text-muted)] mt-1.5">{role.role}</p>
                {role.location && (
                  <p className="font-mono text-[0.6875rem] text-[var(--text-faint)] mt-2.5">
                    {role.location}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Education */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduce ? 0.2 : 0.9, ease: EASE }}
        >
          <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--text-faint)] mb-4">
            Education
          </h3>
          <div className="glass border-[var(--glass-border)] rounded-2xl p-5 md:p-6 flex items-start gap-4">
            <span
              className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[rgba(168,85,247,0.12)] border border-[rgba(168,85,247,0.2)] text-[var(--accent)]"
              aria-hidden="true"
            >
              <GraduationCap className="w-5 h-5" />
            </span>
            <div>
              <p className="font-display font-semibold text-lg md:text-xl tracking-tight text-[var(--text)]">
                {education.school}
              </p>
              <p className="text-[var(--text-muted)] mt-1.5">{education.degree}</p>
              <p className="font-mono text-[0.6875rem] text-[var(--text-faint)] mt-2.5">
                {education.date}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
