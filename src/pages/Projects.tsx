import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Projects() {
  usePageTitle("Projects");

  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <h1>Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
