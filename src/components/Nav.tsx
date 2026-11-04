import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";

/*
 * The inner padding repeats the page frame's, so the name sits on the same
 * column the content starts on. On phones only the three links that fit stay.
 */
export function Nav({ current }: { current?: "projects" }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="px-5 md:px-10">
        <div className="mx-auto flex h-[var(--nav-h)] max-w-[var(--frame)] items-center justify-between gap-5 sm:px-6 md:px-10">
          <Link href="/" className="shrink-0 text-[0.9375rem] leading-5 font-medium tracking-[-0.01em] text-ink">
            Talha Çağlar
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-4 text-sm leading-5 sm:gap-7">
            <Link href="/#learning" className="nav-link hidden sm:inline-flex">
              Learning
            </Link>
            <Link href="/projects/" className="nav-link" aria-current={current === "projects" ? "page" : undefined}>
              Projects
            </Link>
            <Link href="/#experience" className="nav-link hidden min-[370px]:inline-flex">
              Experience
            </Link>
            <Link href="/#contact" className="nav-link">
              Contact
            </Link>
            <a
              href="https://github.com/talhacaglar"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link hidden sm:inline-flex"
              aria-label="GitHub"
            >
              <GithubIcon className="h-[17px] w-[17px]" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
