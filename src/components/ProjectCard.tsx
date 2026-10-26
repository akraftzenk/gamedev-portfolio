import type { Project } from "@/data/projects";
import ProjectVideo from "./ProjectVideo";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-md border border-grid-major bg-surface p-6">
      <ProjectVideo src={project.video} poster={project.poster} label={project.title} />
      <h3 className="mt-4">{project.title}</h3>
      <p>
        {project.caption}
        {project.year && ` (${project.year})`}
      </p>
      <ul aria-label="Tags" className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
