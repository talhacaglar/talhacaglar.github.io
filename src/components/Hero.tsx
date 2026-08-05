"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const facts = [
  { value: "DevSecOps", label: "Main Focus" },
  { value: "Arch Linux", label: "Daily Driver" },
  { value: "Python · JS", label: "Most Written" },
];

const orbs = [
  {
    size: "min(500px, 60vw)",
    position: { top: "5%", left: "-10%" },
    x: [0, 40, -30, 20, 0],
    y: [0, -30, 40, -20, 0],
    scale: [1, 1.08, 0.95, 1.03, 1],
    duration: 20,
    delay: 0,
  },
  {
    size: "min(400px, 50vw)",
    position: { top: "30%", right: "-15%" },
    x: [0, -35, 25, -15, 0],
    y: [0, 25, -35, 15, 0],
    scale: [1, 1.05, 0.98, 1.02, 1],
    duration: 24,
    delay: 2,
  },
  {
    size: "min(350px, 45vw)",
    position: { bottom: "10%", left: "20%" },
    x: [0, 30, -25, 15, 0],
    y: [0, -20, 30, -10, 0],
    scale: [1, 1.03, 0.97, 1.01, 1],
    duration: 18,
    delay: 4,
  },
  {
    size: "min(300px, 35vw)",
    position: { bottom: "5%", right: "10%" },
    x: [0, -25, 20, -10, 0],
    y: [0, 15, -25, 5, 0],
    scale: [1, 1.04, 0.96, 1.02, 1],
    duration: 22,
    delay: 6,
  },
];

export function Hero() {
  const reduce = useReducedMotion();

  // Elegant staggered entrance: slight delay per element, disabled when the
  // visitor prefers reduced motion.
  const fadeUp = (delay: number, distance = 30) => ({
    initial: { opacity: 0, y: reduce ? 0 : distance },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: reduce ? 0 : delay,
      duration: reduce ? 0.2 : 0.9,
      ease: EASE,
    },
  });

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 md:pt-24 pb-28 md:pb-24"
    >
      {/* Ambient glass orbs */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="ambient-orb"
            style={{ width: orb.size, height: orb.size, ...orb.position }}
            animate={
              reduce
                ? undefined
                : { x: orb.x, y: orb.y, scale: orb.scale }
            }
            transition={{
              duration: orb.duration,
              ease: "easeInOut",
              repeat: Infinity,
              delay: orb.delay,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23a855f7' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-8 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-[var(--glass-border)] mb-8"
          {...fadeUp(0)}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-[var(--accent)]"
            animate={reduce ? undefined : { scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <span className="text-sm font-medium text-[var(--text-muted)] tracking-tight">
            Open to new projects
          </span>
        </motion.div>

        {/* Name - oversized */}
        <motion.h1
          className="font-display font-semibold tracking-[-0.045em] leading-[0.92] mb-5"
          {...fadeUp(0.1, 40)}
          style={{
            // Capped at 8.5rem, not 10rem: two lines at 10rem push the facts
            // row past the fold on a 900px-tall laptop.
            fontSize: "clamp(3.75rem, 12vw, 8.5rem)",
            willChange: "transform, opacity",
          }}
        >
          <span className="block text-[var(--text)]">Talha</span>
          <span className="block text-gradient">Çağlar</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          className="text-[var(--accent)] font-medium tracking-wide mb-4"
          {...fadeUp(0.3)}
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
        >
          Security &amp; Systems Engineer · Bursa, Türkiye
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto text-[var(--text-muted)] mb-8"
          {...fadeUp(0.4)}
          style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)", lineHeight: 1.6 }}
        >
          I work in the space between security and systems — Linux tooling,
          automation, and software that stays clean under real use.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          {...fadeUp(0.5)}
        >
          <Button
            size="lg"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
            <ArrowDown className="w-5 h-5" aria-hidden="true" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
            <MousePointer2 className="w-5 h-5" aria-hidden="true" />
          </Button>
        </motion.div>

        {/* Facts */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto"
          {...fadeUp(0.6)}
          aria-label="Key facts"
        >
          {facts.map((fact) => (
            <li
              key={fact.value}
              className="glass border-[var(--glass-border)] p-5 md:p-6 rounded-2xl flex items-baseline justify-between sm:block gap-3"
            >
              <span className="block font-display text-2xl md:text-3xl font-semibold text-[var(--accent)] tracking-tight">
                {fact.value}
              </span>
              <span className="block font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--text-faint)] sm:mt-1.5">
                {fact.label}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-3 text-[var(--text-faint)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 1.2, duration: 0.8, ease: EASE }}
        aria-hidden="true"
      >
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] font-medium">
          Scroll
        </span>
        <div className="relative w-[3px] h-10 rounded-full bg-[var(--glass-border)] overflow-hidden">
          <motion.div
            className="absolute inset-x-0 h-4 rounded-full bg-[var(--accent)]"
            animate={reduce ? undefined : { y: [-16, 40], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
