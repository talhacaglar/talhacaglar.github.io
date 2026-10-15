export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8 pb-[calc(2rem+var(--safe-bottom))]">
      <div className="shell flex flex-col gap-3 text-sm text-[var(--smoke)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Talha Çağlar</p>
        <a href="#top" className="soft-link self-start sm:self-auto">
          Back to top
        </a>
      </div>
    </footer>
  );
}
