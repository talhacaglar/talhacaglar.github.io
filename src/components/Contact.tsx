import { ArrowUpRight, Mail } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/ui/icons";

const EMAIL = "talhacaglarr@proton.me";

const socials = [
  { href: "https://github.com/talhacaglar", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/talhacaglar1/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "https://t.me/Cgllar", label: "Telegram", icon: TelegramIcon },
];

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--paper)] py-24 text-[var(--ink)] sm:py-28 lg:py-36">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)] lg:gap-20">
          <div>
            <p className="section-kicker text-[var(--oxide-ink)]">Bursa · UTC+3</p>
            <h2 className="mt-8 max-w-5xl font-display text-[clamp(4rem,9vw,8.5rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.05em]">
              Build something useful?
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-lg text-lg leading-8 text-[color:color-mix(in_srgb,var(--ink)_74%,transparent)]">
              Send me a note about Linux, security or something useful we could build.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="group mt-10 flex items-center justify-between gap-6 border-y border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)] py-6"
            >
              <span className="flex min-w-0 items-center gap-4">
                <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="truncate font-mono text-xs font-semibold sm:text-sm">{EMAIL}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
            <ContactActions />
          </div>
        </div>

        <ul className="mt-16 grid border-l border-t border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)] sm:grid-cols-3 lg:mt-24">
          {socials.map((social) => (
            <li key={social.label} className="border-b border-r border-[color:color-mix(in_srgb,var(--ink)_28%,transparent)]">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-24 items-center justify-between gap-4 px-5 transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] sm:min-h-28 sm:px-7"
              >
                <span className="flex items-center gap-4 font-mono text-xs font-semibold uppercase tracking-[0.12em]">
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                  {social.label}
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
