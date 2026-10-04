import { cn } from "@/lib/utils";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

function ProjectItem({ project }: { project: Project }) {
  const { ref, isInView } = useInViewAnimation();
  const reveal = isInView ? "animate-fade-in-up" : "opacity-0";

  return (
    <div ref={ref} className={cn(reveal)}>
      <div className="mb-6 ml-20 md:ml-28">
        <h3 className="font-display text-2xl font-semibold text-ink-900 md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-ink-900/70 md:text-base">{project.description}</p>
      </div>
      <img
        src={project.imageUrl}
        alt={project.name}
        loading="lazy"
        className="w-full rounded-2xl object-cover shadow-lg"
      />
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-300 px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
