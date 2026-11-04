"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDownIcon, DownloadIcon } from "@/components/ui/icons";
import { cv } from "@/data/site";

const files = [
  { href: cv.tr, label: "Turkish CV", lang: "tr" },
  { href: cv.en, label: "English CV", lang: "en" },
];

const variants = {
  /** The header item. Opens toward the left, since it sits near the page edge. */
  nav: { label: "CV", trigger: "nav-link gap-1", menu: "top-[calc(100%+0.5rem)] right-0" },
  /** The hero button. */
  button: { label: "Download CV", trigger: "btn btn-line gap-1.5", menu: "top-[calc(100%+0.5rem)] left-0" },
};

export function CvMenu({ variant }: { variant: keyof typeof variants }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const { label, trigger, menu } = variants[variant];

  useEffect(() => {
    if (!open) return;

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div
      ref={root}
      className="relative"
      onBlur={(event) => {
        // relatedTarget is empty when Safari clicks a link, which must not close the menu mid-click.
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        className={`${trigger} cursor-pointer`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
      >
        {label}
        <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
      </button>

      <ul id={menuId} hidden={!open} className={`nav-menu absolute z-20 w-40 ${menu}`}>
        {files.map((file) => (
          <li key={file.href}>
            <a
              href={file.href}
              download
              hrefLang={file.lang}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between gap-4 rounded-md px-3 py-2.5 text-sm leading-5 font-normal text-nav transition-colors duration-150 hover:bg-white/10 hover:text-ink"
            >
              {file.label}
              <DownloadIcon className="h-4 w-4 shrink-0 text-muted transition-colors duration-150 group-hover:text-accent-text" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
