"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects, type Project } from "@/data/projects";

const sizeClasses: Record<Project["size"], string> = {
  featured: "bento-featured",
  standard: "bento-standard",
  compact: "bento-compact",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch/coarse pointer device
  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(hover: none)").matches
      );
    };
    checkTouch();
    const mql1 = window.matchMedia("(pointer: coarse)");
    const mql2 = window.matchMedia("(hover: none)");
    const handler = () => checkTouch();
    mql1.addEventListener?.("change", handler);
    mql2.addEventListener?.("change", handler);
    return () => {
      mql1.removeEventListener?.("change", handler);
      mql2.removeEventListener?.("change", handler);
    };
  }, []);

  // 3D tilt via pointer position — only on non-touch, non-reduced-motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || isTouch) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const isFeatured = project.size === "featured";

  // Transform styles — only apply 3D on desktop
  const transformStyles = isTouch || reduce
    ? { willChange: "transform" }
    : {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d" as const,
        transformPerspective: 1000,
        willChange: "transform",
      };

  return (
    <motion.a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col overflow-hidden rounded-3xl glass border-[var(--glass-border)] p-4 md:p-6 lg:p-8 ${sizeClasses[project.size]} touch-pan-y min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px]`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduce ? 0.2 : 0.9,
        delay: reduce ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      // Use whileTap for touch devices, whileHover for desktop
      whileTap={{ scale: 0.98 }}
      whileHover={!isTouch ? {
        scale: reduce ? 1 : 1.02,
        borderColor: "rgba(192, 132, 252, 0.5)",
        boxShadow:
          "0 0 60px -10px rgba(168, 85, 247, 0.4), 0 20px 40px -20px rgba(7, 6, 10, 0.75)",
        zIndex: 10,
      } : undefined}
      style={transformStyles}
    >
      {/* Purple glow accent that intensifies on hover — desktop only */}
      <div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden md:block"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(168, 85, 247, 0.12), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-4 mb-4" style={{ transform: "translateZ(30px)" }}>
        <span className="font-mono text-[0.6875rem] font-medium tracking-tight text-[var(--accent)] px-2.5 py-1 rounded-lg bg-[rgba(168,85,247,0.12)] border border-[rgba(168,85,247,0.2)] whitespace-nowrap">
          {project.updated} · {project.lang}
        </span>
        <ArrowUpRight
          className="w-5 h-5 flex-shrink-0 text-[var(--text-faint)] transition-all duration-400 group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden="true"
        />
      </div>

      <h3
        className={`font-display font-semibold tracking-tight text-[var(--text)] mb-3 ${
          isFeatured ? "text-2xl md:text-3xl lg:text-4xl" : "text-lg md:text-xl lg:text-2xl"
        }`}
        style={{ transform: "translateZ(40px)" }}
      >
        {project.name}
      </h3>

      <p
        className={`text-[var(--text-muted)] leading-relaxed ${
          isFeatured ? "text-sm md:text-base lg:text-lg mb-6" : "text-sm md:text-base flex-1 mb-6"
        }`}
        style={{ transform: "translateZ(20px)" }}
      >
        {project.description}
      </p>

      {project.highlights && (
        <ul
          className="flex-1 flex flex-col gap-2.5 mb-6 text-sm md:text-[0.9375rem] text-[var(--text-faint)]"
          style={{ transform: "translateZ(20px)" }}
        >
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2.5 leading-snug">
              <span
                className="mt-[0.55em] w-1 h-1 rounded-full bg-[var(--accent)] shrink-0"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="flex flex-wrap gap-2" style={{ transform: "translateZ(25px)" }} aria-label="Technologies">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium text-[var(--text-muted)] bg-[var(--glass-bg)] border border-[var(--glass-border)] transition-colors duration-300 group-hover:border-[rgba(192,132,252,0.3)] group-hover:text-[var(--text)]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border-[var(--glass-border)] font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--accent)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
            {projects.length} repositories
          </span>
          <h2
            className="font-display font-semibold tracking-[-0.03em] leading-[1.08] text-[var(--text)] mb-5"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            What I&apos;ve been building
          </h2>
          <p className="max-w-2xl text-[var(--text-muted)]" style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}>
            Projects that came out of a real need and were written to be used.
          </p>
        </motion.div>

        <div className="bento-grid" style={{ perspective: "1500px" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-10 md:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="https://github.com/talhacaglar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass border-[var(--glass-border)] font-medium text-[var(--text)] transition-all duration-300 hover:glass-strong hover:border-[rgba(192,132,252,0.4)] min-h-[44px] min-touch-target"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <GithubIcon className="w-5 h-5" aria-hidden="true" />
            See everything on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}