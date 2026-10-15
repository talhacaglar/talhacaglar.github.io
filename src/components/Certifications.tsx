import Image from "next/image";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="shell">
        <div className="reveal">
          <h2 className="section-title">Certificates</h2>
          <p className="section-lead">Each one opens its official verification page.</p>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const content = (
              <>
                <div className="cert-frame">
                  {cert.thumbnail && (
                    <Image
                      src={cert.thumbnail}
                      alt={`${cert.name} certificate issued by ${cert.issuer}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22rem"
                      className="object-cover"
                    />
                  )}
                </div>
                <h3 className="mt-5 text-[1.0625rem] font-semibold leading-snug transition-colors duration-300 group-hover:text-[var(--glow)]">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--smoke)]">
                  {cert.issuer}, {cert.date}
                </p>
              </>
            );

            return (
              <li key={cert.id} className="reveal" style={{ "--i": index % 3 } as React.CSSProperties}>
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="group block rounded-xl">
                    {content}
                  </a>
                ) : (
                  <div className="group">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
