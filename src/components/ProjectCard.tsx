import type { Project } from "@/data/projects";
import ProjectVideo from "./ProjectVideo";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl bg-surface p-6">
      <ProjectVideo src={project.video} poster={project.poster} label={project.title} />
      <h3 className="mt-4">{project.title}</h3>
      <p>
        {project.caption}
        {project.year && ` (${project.year})`}
      </p>
      <ul aria-label="Tags" className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-accent px-3 py-1 font-display text-xs text-accent-contrast uppercase"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
