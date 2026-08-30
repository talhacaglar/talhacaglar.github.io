import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="bg-[var(--surface)] py-24 text-[var(--paper)] sm:py-28 lg:py-36">
      <div className="site-shell">
        <div className="grid gap-8 border-b hairline pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.55fr)] lg:items-end">
          <div>
            <p className="section-kicker text-[var(--oxide)]">Certificates · {certifications.length}</p>
            <h2 className="display-title mt-7">Training and certifications</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--steel-dark)] lg:pb-1 lg:text-lg">
            Completed coursework and certifications in security and networking.
          </p>
        </div>

        <ol className="grid border-l hairline sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const content = (
              <>
                <div className="certificate-frame relative aspect-[1000/644] overflow-hidden border-b hairline bg-[var(--canvas)]">
                  <Image
                    src={cert.thumbnail}
                    alt={`${cert.name} certificate issued by ${cert.issuer}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0 sm:grayscale-[0.2]"
                  />
                  <span className="absolute left-0 top-0 bg-[var(--ink)] px-3 py-2 font-mono text-[0.62rem] font-semibold tracking-[0.12em] text-[var(--paper)]">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex min-h-64 flex-col p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--oxide)]">
                      {cert.date}
                    </span>
                    {cert.url && <ArrowUpRight className="h-5 w-5 text-[var(--steel-dark)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />}
                  </div>
                  <h3 className="mt-7 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.025em]">
                    {cert.name}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--steel-dark)]">{cert.issuer}</p>
                  {cert.credentialId && (
                    <p className="mt-auto break-all pt-8 font-mono text-[0.62rem] text-[var(--steel-dark)]">
                      {cert.credentialId}
                    </p>
                  )}
                </div>
              </>
            );

            return (
              <li key={cert.id} className="border-b border-r hairline">
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="group block h-full transition-colors hover:bg-[var(--surface-soft)]">
                    {content}
                  </a>
                ) : (
                  <article className="group h-full">{content}</article>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
