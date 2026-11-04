import { EMAIL, socials } from "@/data/site";

export function Footer() {
  const links = [...socials, { href: `mailto:${EMAIL}`, label: "Email" }];

  return (
    <footer className="border-t border-line pb-[env(safe-area-inset-bottom)]">
      <div className="px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[var(--frame)] flex-wrap items-center justify-between gap-x-8 gap-y-3 sm:px-6 md:px-10">
          <p className="type-small text-muted">Talha Çağlar</p>
          <nav aria-label="Elsewhere">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="type-small text-muted transition-colors duration-150 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
