"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Certifications() {
  const reduce = useReducedMotion();

  return (
    <section id="certifications" className="relative py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border-[var(--glass-border)] font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--accent)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
            {certifications.length} certifications
          </span>
          <h2
            className="font-display font-semibold tracking-[-0.03em] leading-[1.08] text-[var(--text)] mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            What I&apos;ve certified
          </h2>
          <p
            className="max-w-2xl text-[var(--text-muted)]"
            style={{ fontSize: "clamp(1.0625rem, 2vw, 1.25rem)" }}
          >
            Courses I&apos;ve completed in the areas I work in. Where the issuer
            publishes a verification page, the card links straight to it.
          </p>
        </motion.div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const verifiable = Boolean(cert.url);

            const card = (
              <>
                {/* Preview of the certificate itself. */}
                <div className="relative aspect-[900/502] overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-elevated)]">
                  <Image
                    src={cert.thumbnail}
                    alt={`${cert.name} certificate issued by ${cert.issuer}`}
                    width={900}
                    height={502}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex items-start justify-between gap-3 mt-5">
                  <span className="font-mono text-[0.6875rem] font-medium tracking-tight text-[var(--accent)] px-2.5 py-1 rounded-lg bg-[rgba(168,85,247,0.12)] border border-[rgba(168,85,247,0.2)] whitespace-nowrap">
                    {cert.date}
                  </span>
                  {verifiable && (
                    <ArrowUpRight
                      className="w-5 h-5 shrink-0 text-[var(--text-faint)] transition-all duration-300 group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="font-display font-semibold text-lg md:text-xl tracking-tight text-[var(--text)] mt-3">
                  {cert.name}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-1.5">{cert.issuer}</p>

                {cert.credentialId && (
                  <p className="font-mono text-[0.6875rem] text-[var(--text-faint)] mt-3 break-all">
                    {cert.credentialId}
                  </p>
                )}
              </>
            );

            return (
              <motion.li
                key={cert.id}
                initial={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: reduce ? 0.2 : 0.9,
                  delay: reduce ? 0 : i * 0.08,
                  ease: EASE,
                }}
              >
                {verifiable ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full rounded-3xl glass border-[var(--glass-border)] p-5 md:p-6 transition-all duration-300 hover:border-[rgba(192,132,252,0.45)] hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.35)]"
                  >
                    {card}
                  </a>
                ) : (
                  // No verification page published, so this one is not a link.
                  <div className="group flex flex-col h-full rounded-3xl glass border-[var(--glass-border)] p-5 md:p-6">
                    {card}
                  </div>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
