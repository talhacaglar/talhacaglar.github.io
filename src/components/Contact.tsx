import { FileDown } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/ui/icons";

const EMAIL = "talhacaglarr@proton.me";

const socials = [
  { href: "https://github.com/talhacaglar", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/talhacaglar1/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "https://t.me/Cgllar", label: "Telegram", icon: TelegramIcon },
];

const documents = [
  { href: "/resume/Talha-Caglar-CV-EN.pdf", label: "CV in English" },
  { href: "/resume/Talha-Caglar-CV.pdf", label: "CV in Turkish" },
  { href: "/portfolio/Talha-Caglar-Portfolio-EN.pdf", label: "Portfolio in English" },
  { href: "/portfolio/Talha-Caglar-Portfolyo.pdf", label: "Portfolio in Turkish" },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <div className="reveal max-w-3xl">
          <h2 className="section-title">Get in touch</h2>
          <p className="section-lead">
            Questions about my work, an idea for a project, or just something cool you built. Email is the quickest way
            to reach me. I&apos;m in Bursa, on Türkiye time.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="soft-link mt-10 inline-block break-all pb-1 text-[clamp(1.5rem,5vw,2.75rem)] font-semibold tracking-[-0.03em]"
          >
            {EMAIL}
          </a>

          <ContactActions email={EMAIL} />
        </div>

        <div className="reveal mt-16 grid gap-12 border-t border-[var(--line)] pt-10 md:grid-cols-2">
          <div>
            <h3 className="text-[1.0625rem] font-semibold text-[var(--ash)]">CV and portfolio</h3>
            <ul className="mt-4 space-y-1">
              {documents.map((doc) => (
                <li key={doc.href}>
                  <a
                    href={doc.href}
                    download
                    className="group -mx-3 flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 transition-colors duration-300 hover:bg-[var(--dusk)]"
                  >
                    <span>{doc.label}</span>
                    <FileDown
                      className="h-4 w-4 text-[var(--smoke)] transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-[var(--glow)]"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[1.0625rem] font-semibold text-[var(--ash)]">Elsewhere</h3>
            <ul className="mt-4 space-y-1">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group -mx-3 flex items-center gap-4 rounded-lg px-3 py-2.5 transition-colors duration-300 hover:bg-[var(--dusk)]"
                  >
                    <social.icon
                      className="h-[18px] w-[18px] text-[var(--smoke)] transition-colors duration-300 group-hover:text-[var(--glow)]"
                      aria-hidden="true"
                    />
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
