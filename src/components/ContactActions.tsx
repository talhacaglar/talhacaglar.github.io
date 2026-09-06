"use client";

import { useState } from "react";
import { Check, Copy, FileDown } from "lucide-react";

const EMAIL = "talhacaglarr@proton.me";
const DISCORD_USERNAME = "0ff0ff0ffoff";

type CopiedValue = "email" | "discord" | null;

export function ContactActions() {
  const [copied, setCopied] = useState<CopiedValue>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied("email");
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const copyDiscord = async () => {
    await navigator.clipboard.writeText(DISCORD_USERNAME);
    setCopied("discord");
    window.setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div className="mt-5 grid border-l border-t border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)] sm:grid-cols-2">
      <button
        type="button"
        onClick={copyEmail}
        className="group flex min-h-16 items-center justify-between gap-4 border-b border-r border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)] px-4 text-left transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
      >
        <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]">
          {copied === "email" ? "Email copied" : "Copy email"}
        </span>
        {copied === "email" ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      </button>
      <button
        type="button"
        onClick={copyDiscord}
        className="group flex min-h-16 items-center justify-between gap-4 border-b border-r border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)] px-4 text-left transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
      >
        <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]">
          {copied === "discord" ? "Discord copied" : `Discord · ${DISCORD_USERNAME}`}
        </span>
        {copied === "discord" ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      </button>
      <a
        href="/resume/Talha-Caglar-CV.pdf"
        download
        className="group flex min-h-16 items-center justify-between gap-4 border-b border-r border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)] px-4 transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
      >
        <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]">Download CV (TR)</span>
        <FileDown className="h-4 w-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
      </a>
      <a
        href="/resume/Talha-Caglar-CV-EN.pdf"
        download
        className="group flex min-h-16 items-center justify-between gap-4 border-b border-r border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)] px-4 transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
      >
        <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]">Download CV (EN)</span>
        <FileDown className="h-4 w-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
      </a>
      <span className="sr-only" aria-live="polite">
        {copied === "email" ? "Email address copied to clipboard" : copied === "discord" ? "Discord username copied to clipboard" : ""}
      </span>
    </div>
  );
}
