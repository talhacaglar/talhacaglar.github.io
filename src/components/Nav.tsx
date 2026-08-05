"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (navLinks.some((l) => l.href === `#${id}`)) {
              setActiveSection(id);
            }
          }
        });
      },
      // A thin band across the middle of the viewport: whichever section
      // crosses it is the active one. threshold must stay 0 — the band is
      // ~10% of the viewport, so a full-height section can never have 30% of
      // *itself* inside it, and the indicator would simply never update.
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const updateIndicator = useCallback(() => {
    if (!indicatorRef.current || !linksRef.current) return;
    const activeLink = linksRef.current.querySelector(`[data-section="${activeSection}"]`);
    if (!activeLink) return;

    const parentRect = linksRef.current.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    indicatorRef.current.style.left = `${linkRect.left - parentRect.left}px`;
    indicatorRef.current.style.width = `${linkRect.width}px`;
    indicatorRef.current.style.opacity = "1";
  }, [activeSection]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100%-3rem)] md:px-0 transition-all duration-500">
      <motion.nav
        className={`relative flex items-center justify-end gap-4 h-14 md:h-16 rounded-full px-4 md:px-5 ${
          isScrolled
            ? "h-14 glass-nav-strong shadow-[0_8px_32px_-8px_rgba(7,6,10,0.65)]"
            : "glass-nav"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.div
              key="mobile-menu"
              className="absolute top-full left-0 right-0 mt-3 rounded-2xl glass-strong p-4 md:hidden flex flex-col gap-2"
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`w-full px-4 py-3 rounded-xl text-left font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[var(--accent)] bg-[var(--glass-bg)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--glass-bg)]"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * (i + 1), duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="border-t border-[var(--glass-border)] my-2" />
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--glass-bg)] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * (i + 1 + navLinks.length), duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Centred against the nav itself, not against whatever happens to sit
            either side of it — in flex flow these links only look centred when
            the left and right groups are the same width, which they are not. */}
        <div
          className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1"
          ref={linksRef}
          style={{ zIndex: 1 }}
        >
          <div
            ref={indicatorRef}
            className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full glass-strong pointer-events-none"
            style={{
              opacity: 0,
              willChange: "left, width",
              transition:
                "left 0.55s cubic-bezier(0.16,1,0.3,1), width 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
            }}
            aria-hidden="true"
          />
          <ul className="flex items-center gap-1 relative z-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <motion.button
                  data-section={link.href.replace("#", "")}
                  onClick={() => scrollToSection(link.href)}
                  onMouseEnter={() => {
                    if (!linksRef.current) return;
                    const linkEl = linksRef.current.querySelector(`[data-section="${link.href.replace("#", "")}"]`);
                    if (linkEl && indicatorRef.current) {
                      const parentRect = linksRef.current.getBoundingClientRect();
                      const linkRect = linkEl.getBoundingClientRect();
                      indicatorRef.current.style.left = `${linkRect.left - parentRect.left}px`;
                      indicatorRef.current.style.width = `${linkRect.width}px`;
                    }
                  }}
                  className={`relative px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.label}
                </motion.button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-3" style={{ zIndex: 1 }}>
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass border-[var(--glass-border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:glass-strong hover:border-[var(--glass-highlight)] transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" aria-hidden="true" />
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden p-2 rounded-full glass border-[var(--glass-border)] text-[var(--text)] hover:glass-strong transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>
    </header>
  );
}