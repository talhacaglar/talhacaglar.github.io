import Image from "next/image";
import { external } from "@/components/Section";
import type { Certification } from "@/data/certifications";

/** The certificate image on top, name and issuer below, like the project grid. */
export function CertificateGrid({ certifications }: { certifications: Certification[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-9 py-4 sm:grid-cols-2">
      {certifications.map((cert) => {
        const href = cert.url ?? cert.files?.[0]?.href;
        return (
          <li key={cert.id} className="group min-w-0">
            <a
              href={href}
              {...external}
              tabIndex={-1}
              className="relative block aspect-[10/7] overflow-hidden rounded-[10px] border border-line bg-card transition-colors duration-200 group-hover:border-accent"
            >
              <Image
                src={cert.image.src}
                alt={cert.image.alt}
                width={1000}
                height={700}
                sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 90vw"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              />
            </a>
            <div className="mt-3 flex items-baseline gap-x-3">
              <h3 className="type-item min-w-0 transition-colors duration-150 group-hover:text-accent">
                <a href={href} {...external}>
                  {cert.name}
                </a>
              </h3>
              <p className="type-meta ml-auto flex shrink-0 gap-x-3">
                {cert.url ? (
                  <a href={cert.url} {...external} className="link-quiet">
                    verify
                  </a>
                ) : (
                  cert.files?.map((file) => (
                    <a key={file.href} href={file.href} {...external} className="link-quiet">
                      {file.label}
                    </a>
                  ))
                )}
              </p>
            </div>
            <p className="type-small mt-1.5 text-muted">
              {cert.detail} <span className="type-meta ml-1">{cert.date}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
