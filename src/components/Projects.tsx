import Image from "next/image";
import { Sketch } from "@/components/Sketches";
import { external } from "@/components/Section";
import type { Project } from "@/data/projects";

function Thumb({ project }: { project: Project }) {
  const frame =
    "relative aspect-video overflow-hidden rounded-[10px] border border-line bg-card transition-colors duration-200 group-hover:border-accent";
  const zoom = "h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.025]";

  const content = project.image ? (
    <Image
      src={project.image.src}
      alt={project.image.alt}
      width={1200}
      height={675}
      sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 90vw"
      className={`${zoom} object-cover`}
    />
  ) : project.sketch ? (
    <div className={zoom}>
      <Sketch name={project.sketch} />
    </div>
  ) : null;

  return project.url ? (
    <a href={project.url} {...external} tabIndex={-1} className={`block ${frame}`}>
      {content}
    </a>
  ) : (
    <div className={frame}>{content}</div>
  );
}

/** Screenshot or system sketch on top, name and text below. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project.id} className="group min-w-0">
          <Thumb project={project} />
          <div className="mt-3 flex items-baseline gap-x-3">
            <h3 className="type-item min-w-0 transition-colors duration-150 group-hover:text-accent">
              {project.url ? (
                <a href={project.url} {...external}>
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="type-meta ml-auto shrink-0">
              {project.aur ? (
                <a
                  href={`https://aur.archlinux.org/packages/${project.aur}`}
                  {...external}
                  title={`${project.aur} on the Arch User Repository`}
                  aria-label={`${project.name} on the Arch User Repository`}
                  className="link-quiet"
                >
                  aur
                </a>
              ) : (
                project.status
              )}
            </p>
          </div>
          <p className="type-small mt-1.5 text-muted">{project.description}</p>
          <ul className="type-meta mt-2 flex flex-wrap gap-x-3">
            {project.stack.map((tool) => (
              <li key={tool} className="whitespace-nowrap">
                {tool}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

/** Text-only rows for smaller projects. */
export function ProjectRows({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-line">
      {projects.map((project) => (
        <li key={project.id} className="py-4">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
            <h3 className="type-item">
              <a href={project.url} {...external} className="link-quiet">
                {project.name}
              </a>
            </h3>
            <p className="type-meta w-full sm:ml-auto sm:w-auto">{project.stack.join(" · ")}</p>
          </div>
          <p className="type-small mt-1 max-w-[78ch] text-muted">{project.description}</p>
        </li>
      ))}
    </ul>
  );
}
