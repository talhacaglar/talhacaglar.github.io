/** One row of the page frame: the title in a narrow column, content in a wide one. */
export function Section({
  id,
  title,
  list = false,
  children,
}: {
  id?: string;
  title: string;
  /** Lists bring their own row padding, so the column above them stays tighter. */
  list?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line lg:grid lg:grid-cols-12">
      <div className="px-6 pt-10 md:px-10 lg:col-span-3 lg:border-r lg:border-line lg:py-10">
        <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
          <h2 className="type-section">{title}</h2>
        </div>
      </div>
      <div
        className={`min-w-0 px-6 md:px-10 lg:col-span-9 ${list ? "pt-2 pb-6 lg:py-6" : "pt-6 pb-10 lg:py-10"}`}
      >
        {children}
      </div>
    </section>
  );
}

export const external = { target: "_blank", rel: "noopener noreferrer" } as const;
