"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/ui/icons";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/talhacaglar", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/talhacaglar1/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "https://t.me/Cgllar", label: "Telegram", icon: TelegramIcon },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("projects");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="safe-top fixed inset-x-0 top-0 z-50 border-b hairline bg-[var(--canvas)] text-[var(--paper)]">
      <div className="site-shell flex h-[var(--nav-height)] items-center justify-between">
        <a
          href="#top"
          className="flex h-full items-center border-x hairline px-4 font-display text-2xl font-extrabold tracking-[-0.04em] sm:px-6"
          aria-label="Talha Çağlar — back to top"
        >
          TC<span className="text-[var(--oxide)]">.</span>
        </a>

        <nav className="hidden h-full items-center md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative flex h-full items-center px-4 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors lg:px-5 ${
                  active ? "text-[var(--paper)]" : "text-[var(--steel-dark)] hover:text-[var(--paper)]"
                }`}
                aria-current={active ? "location" : undefined}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 bottom-0 h-[3px] bg-[var(--oxide)] transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden h-full items-center border-x hairline md:flex">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full w-12 items-center justify-center border-r hairline text-[var(--steel-dark)] transition-colors last:border-r-0 hover:bg-[var(--paper)] hover:text-[var(--ink)]"
              aria-label={social.label}
            >
              <social.icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex h-full min-w-14 items-center justify-center border-x hairline md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 top-[calc(var(--nav-height)+var(--safe-top))] z-40 bg-[var(--ink)] text-[var(--paper)] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <nav className="flex h-full flex-col px-5 py-8" aria-label="Mobile navigation">
              <div className="flex-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-20 items-center justify-between border-b dark-hairline font-display text-4xl font-bold uppercase tracking-[-0.025em]"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.45 }}
                  >
                    {link.label}
                    <span className="font-mono text-[0.65rem] text-[var(--steel)]">0{index + 1}</span>
                  </motion.a>
                ))}
              </div>
              <div className="safe-bottom flex items-center gap-6 pt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--steel)]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
