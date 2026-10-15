"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/ui/icons";

const navLinks = [
  { href: "#focus", label: "Focus" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/talhacaglar", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/talhacaglar1/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "https://t.me/Cgllar", label: "Telegram", icon: TelegramIcon },
];

const downloads = [
  { href: "/resume/Talha-Caglar-CV-EN.pdf", label: "CV in English" },
  { href: "/resume/Talha-Caglar-CV.pdf", label: "CV in Turkish" },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuWasOpen = useRef(false);

  useEffect(() => {
    const sections = ["top", ...navLinks.map((link) => link.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id === "top" ? null : visible.target.id);
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      if (menuWasOpen.current && menuButtonRef.current?.getClientRects().length) {
        menuButtonRef.current.focus();
      }
      menuWasOpen.current = false;
      return;
    }

    menuWasOpen.current = true;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    const previousOverflow = document.body.style.overflow;
    const panel = menuPanelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[var(--safe-top)] transition-[background-color,border-color,backdrop-filter] duration-500 ${
          solid
            ? "border-b border-[var(--line)] bg-[color:color-mix(in_srgb,var(--night)_82%,transparent)] backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="shell flex h-[var(--nav-height)] items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-3 rounded-full" aria-label="Talha Çağlar, back to top">
            <span
              className="h-3.5 w-3.5 rounded-full border-2 border-[var(--glow)] shadow-[0_0_0.75rem_rgb(var(--glow-rgb)/0.55)] transition-transform duration-500 group-hover:scale-125"
              aria-hidden="true"
            />
            <span className="text-[1.0625rem] font-semibold tracking-[-0.02em]">Talha Çağlar</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[0.9375rem] transition-colors duration-300 ${
                    active ? "text-[var(--chalk)]" : "text-[var(--ash)] hover:text-[var(--chalk)]"
                  }`}
                  aria-current={active ? "location" : undefined}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--dusk-raised)]"
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                      aria-hidden="true"
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-1 lg:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--ash)] transition-colors duration-300 hover:bg-[var(--dusk-raised)] hover:text-[var(--glow)]"
                aria-label={social.label}
              >
                <social.icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            ))}
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-[var(--dusk-raised)] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </header>

        {/* Outside the header: its backdrop-filter would trap a fixed child. */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuPanelRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="fixed inset-x-0 bottom-0 top-[calc(var(--nav-height)+var(--safe-top))] z-40 overflow-y-auto overscroll-contain bg-[var(--night)] lg:hidden"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav
                className="shell flex min-h-full flex-col pb-[calc(2rem+var(--safe-bottom))] pt-6"
                aria-label="Mobile navigation"
              >
                <div className="flex-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-[4.25rem] items-center border-b border-[var(--line)] text-[2rem] font-semibold tracking-[-0.03em]"
                      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduceMotion ? 0 : 0.04 + 0.05 * index, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {downloads.map((file) => (
                    <a key={file.href} href={file.href} download className="pill pill-ghost">
                      {file.label}
                    </a>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--ash)] hover:text-[var(--glow)]"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
}
