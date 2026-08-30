"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent } from "react";

const artifacts = [
  {
    id: "lexis",
    label: "Lexis / Local-first",
    src: "/projects/lexis.webp",
    alt: "Lexis local-first dictionary interface",
    className: "artifact-card artifact-card-lexis",
  },
  {
    id: "clar-focus",
    label: "Clar Focus / TUI",
    src: "/projects/clar-focus.webp",
    alt: "Clar Focus terminal productivity dashboard",
    className: "artifact-card artifact-card-focus",
  },
  {
    id: "translator",
    label: "Translator / DeepL",
    src: "/projects/translator.webp",
    alt: "Terminal translation interface",
    className: "artifact-card artifact-card-translator",
  },
];

export function ArtifactStack() {
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 20, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 20, mass: 0.6 });
  const rotateY = useTransform(smoothX, [0, 1], reduce ? [0, 0] : [-5, 5]);
  const rotateX = useTransform(smoothY, [0, 1], reduce ? [0, 0] : [4, -4]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  const resetPointer = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <div
      className="artifact-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-label="Selected project interfaces"
    >
      <div className="artifact-stage-header" aria-hidden="true">
        <span>Project artifacts</span>
        <span className="artifact-live"><i /> Live index</span>
      </div>

      <motion.div
        className="artifact-perspective"
        style={{ rotateX, rotateY }}
        aria-hidden="true"
      >
        <div className="artifact-axis artifact-axis-x" />
        <div className="artifact-axis artifact-axis-y" />
        {artifacts.map((artifact, index) => (
          <motion.figure
            key={artifact.id}
            className={artifact.className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: reduce ? 0 : 0.18 + index * 0.09,
              duration: reduce ? 0.01 : 0.72,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="artifact-windowbar">
              <span>{artifact.label}</span>
              <span>0{index + 1}</span>
            </div>
            <div className="artifact-image">
              <Image
                src={artifact.src}
                alt={artifact.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 80vw, 44vw"
                className="object-cover"
              />
            </div>
          </motion.figure>
        ))}
      </motion.div>

      <div className="artifact-stage-footer" aria-hidden="true">
        <span>Pointer / depth</span>
        <span>CSS 3D · Reduced-motion safe</span>
      </div>
    </div>
  );
}
