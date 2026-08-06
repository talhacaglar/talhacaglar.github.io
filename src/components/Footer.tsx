"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/ui/icons";

const socials = [
  { href: "https://github.com/talhacaglar", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/talhacaglar1/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "https://t.me/Cgllar", label: "Telegram", icon: TelegramIcon },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--glass-border)] py-10 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.p
          className="font-mono text-xs sm:text-sm text-[var(--text-faint)] tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          © {new Date().getFullYear()} Talha Çağlar. All rights reserved.
        </motion.p>

        <motion.ul
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {socials.map((social) => (
            <li key={social.label}>
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 rounded-full glass border-[var(--glass-border)] text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--accent)] hover:border-[rgba(192,132,252,0.4)] min-touch-target"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-[18px] h-[18px]" aria-hidden="true" />
              </motion.a>
            </li>
          ))}
        </motion.ul>
      </div>
    </footer>
  );
}