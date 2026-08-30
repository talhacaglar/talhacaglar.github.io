"use client";

import { useState } from "react";
import { Check, Copy, FileDown } from "lucide-react";

const EMAIL = "talhacaglarr@proton.me";

export function ContactActions() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="mt-5 grid border-l border-t border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)] sm:grid-cols-2">
      <button
        type="button"
        onClick={copyEmail}
        className="group flex min-h-16 items-center justify-between gap-4 border-b border-r border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)] px-4 text-left transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
      >
        <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]">
          {copied ? "Email copied" : "Copy email"}
        </span>
        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      </button>
      <a
        href="/resume/talha-caglar-resume.pdf"
        download
        className="group flex min-h-16 items-center justify-between gap-4 border-b border-r border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)] px-4 transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
      >
        <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]">Download résumé</span>
        <FileDown className="h-4 w-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
      </a>
      <span className="sr-only" aria-live="polite">{copied ? "Email address copied to clipboard" : ""}</span>
    </div>
  );
}
