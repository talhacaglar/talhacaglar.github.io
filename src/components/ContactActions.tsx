"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Copy } from "lucide-react";

const DISCORD_USERNAME = "0ff0ff0ffoff";

type CopiedValue = "email" | "discord" | null;

function SwapLabel({ copied, idle, done }: { copied: boolean; idle: string; done: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <span className="relative inline-flex items-center gap-2 overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={copied ? "done" : "idle"}
          className="inline-flex items-center gap-2"
          initial={reduceMotion ? false : { y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? undefined : { y: -14, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {copied ? (
            <Check className="h-4 w-4 text-[var(--glow)]" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          {copied ? done : idle}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function ContactActions({ email }: { email: string }) {
  const [copied, setCopied] = useState<CopiedValue>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  const copy = async (value: string, which: Exclude<CopiedValue, null>) => {
    setCopyError(null);
    try {
      await navigator.clipboard.writeText(value);
      setCopied(which);
      window.setTimeout(() => setCopied((current) => (current === which ? null : current)), 1800);
    } catch {
      if (which === "email") {
        window.location.href = `mailto:${email}`;
      } else {
        setCopyError(`Copying isn't available here. My Discord username is ${DISCORD_USERNAME}.`);
      }
    }
  };

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={() => copy(email, "email")} className="pill pill-ghost">
          <SwapLabel copied={copied === "email"} idle="Copy email" done="Email copied" />
        </button>
        <button type="button" onClick={() => copy(DISCORD_USERNAME, "discord")} className="pill pill-ghost">
          <SwapLabel copied={copied === "discord"} idle={`Discord: ${DISCORD_USERNAME}`} done="Username copied" />
        </button>
      </div>
      {copyError && (
        <p role="status" className="mt-3 text-sm text-[var(--ash)]">
          {copyError}
        </p>
      )}
      <span className="sr-only" aria-live="polite">
        {copied === "email" ? "Email address copied" : copied === "discord" ? "Discord username copied" : ""}
      </span>
    </div>
  );
}
