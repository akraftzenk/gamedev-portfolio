import { experience } from "@/data/experience";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Experience() {
  usePageTitle("Experience");

  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <h1>Experience</h1>
      <div className="grid gap-12">
        {experience.map((job) => (
          <article key={job.company}>
            <h2>{job.role}</h2>
            <p className="mb-4 text-muted">
              {job.company} · {job.period}
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
