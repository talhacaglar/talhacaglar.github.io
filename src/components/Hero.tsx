"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MousePointer2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const facts = [
  { value: "Computer Engineering", label: "Student" },
  { value: "Arch Linux", label: "Daily Driver" },
  { value: "Cyber Security", label: "Focus" },
];

// Mobile-first orb sizes — responsive using clamp for fluid scaling
const orbs = [
  {
    size: "clamp(160px, 45vw, 400px)",
    position: { top: "5%", left: "-10%" },
    x: [0, 30, -20, 10, 0],
    y: [0, -20, 30, -10, 0],
    scale: [1, 1.05, 0.97, 1.02, 1],
    duration: 20,
    delay: 0,
  },
  {
    size: "clamp(140px, 40vw, 320px)",
    position: { top: "30%", right: "-15%" },
    x: [0, -25, 15, -10, 0],
    y: [0, 15, -25, 10, 0],
    scale: [1, 1.03, 0.98, 1.01, 1],
    duration: 24,
    delay: 2,
  },
  {
    size: "clamp(120px, 35vw, 280px)",
    position: { bottom: "10%", left: "15%" },
    x: [0, 20, -15, 10, 0],
    y: [0, -15, 20, -5, 0],
    scale: [1, 1.02, 0.98, 1.01, 1],
    duration: 18,
    delay: 4,
  },
  {
    size: "clamp(100px, 30vw, 240px)",
    position: { bottom: "5%", right: "5%" },
    x: [0, -15, 10, -5, 0],
    y: [0, 10, -15, 5, 0],
    scale: [1, 1.02, 0.98, 1.01, 1],
    duration: 22,
    delay: 6,
  },
];

export function Hero() {
  const reduce = useReducedMotion();

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
      className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden pt-20 pb-12 md:pt-[clamp(5rem,9vh,6rem)] md:pb-[clamp(3.5rem,8vh,6rem)] safe-top safe-bottom"
    >
      {/* Ambient glass orbs — responsive sizes */}
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

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-8 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-[var(--glass-border)] mb-6 md:mb-[clamp(1.25rem,3vh,2rem)]"
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

        {/* Name - oversized, responsive clamp using svh */}
        <motion.h1
          className="font-display font-semibold tracking-[-0.045em] leading-[0.92] mb-4 md:mb-[clamp(0.75rem,2vh,1.25rem)]"
          {...fadeUp(0.1, 40)}
          style={{
            fontSize: "clamp(2.5rem, min(10vw, 10svh), 6rem)",
            willChange: "transform, opacity",
          }}
        >
          <span className="block text-[var(--text)]">Talha</span>
          <span className="block text-gradient">Çağlar</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          className="text-[var(--accent)] font-medium tracking-wide mb-3 md:mb-[clamp(0.5rem,1.5vh,1rem)]"
          {...fadeUp(0.3)}
          style={{ fontSize: "clamp(0.9375rem, 2.5vw, 1.125rem)" }}
        >
          Computer Science Student · Linux & Security Enthusiast
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto text-[var(--text-muted)] mb-6 md:mb-[clamp(1.5rem,3.5vh,2rem)]"
          {...fadeUp(0.4)}
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", lineHeight: 1.6 }}
        >
          I spend my time in the space between security and systems — Linux
          tooling, automation, and software that stays clean under real use.
        </motion.p>

        {/* CTAs — full width on mobile, auto on desktop */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 md:mb-[clamp(2rem,4.5vh,3rem)] safe-x"
          {...fadeUp(0.5)}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto"
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
            className="w-full sm:w-auto"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
            <MousePointer2 className="w-5 h-5" aria-hidden="true" />
          </Button>
        </motion.div>

        {/* Facts — tighter spacing on mobile */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto"
          {...fadeUp(0.6)}
          aria-label="Key facts"
        >
          {facts.map((fact) => (
            <li
              key={fact.label}
              className="glass border-[var(--glass-border)] p-4 sm:p-5 md:p-6 rounded-2xl flex items-baseline justify-between gap-2 sm:gap-3 sm:flex-col sm:items-stretch sm:justify-center sm:gap-0"
            >
              <span className="block font-display text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--accent)] tracking-tight">
                {fact.value}
              </span>
              <span className="block font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--text-faint)] sm:mt-1">
                {fact.label}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Scroll indicator — mobile version (subtle chevron) + desktop version */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[var(--text-faint)] md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 1.2, duration: 0.8, ease: EASE }}
        aria-hidden="true"
      >
        <motion.span animate={reduce ? undefined : { y: [0, 8] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5" />
        </motion.span>
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] font-medium">
          Scroll
        </span>
      </motion.div>

      {/* Desktop scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden [@media(min-width:1024px)_and_(min-height:1000px)]:flex flex-col items-center gap-3 text-[var(--text-faint)]"
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