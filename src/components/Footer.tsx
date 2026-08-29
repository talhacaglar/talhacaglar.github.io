export function Footer() {
  return (
    <footer className="bg-[var(--ink)] py-8 text-[var(--paper)]">
      <div className="site-shell flex flex-col gap-4 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-[var(--steel)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Talha Çağlar. All rights reserved.</p>
        <a href="#top" className="transition-colors hover:text-[var(--paper)]">Back to top ↑</a>
      </div>
    </footer>
  );
}
