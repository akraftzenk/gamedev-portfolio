import { Link } from "react-router";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import StatRow from "@/components/StatRow";
import ProjectCard from "@/components/ProjectCard";
import ProjectVideo from "@/components/ProjectVideo";
import { usePageTitle } from "@/hooks/usePageTitle";

const selectedWork = site.selectedWork.slugs.flatMap((slug) =>
  projects.filter((p) => p.slug === slug),
);

export default function Home() {
  usePageTitle();
  const { featured } = site;

  return (
    <div className="mx-auto max-w-content px-4">
      {/* TODO: swap in debug-view footage once recorded (DESIGN.md §7.1) */}
      <section className="grid gap-12 py-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center">
        <div>
          <p className="text-muted">{site.title}</p>
          <h1 className="text-[clamp(2rem,4.5vw,3rem)] leading-[1.02]">{site.heroLine}</h1>
          <p className="max-w-[68ch]">{site.intro}</p>
          <div className="mt-8">
            <StatRow />
          </div>
        </div>

        <figure>
          <ProjectVideo
            src={site.heroVideo.src}
            poster={site.heroVideo.poster}
            label={site.heroVideo.label}
          />
          <figcaption className="mt-3 text-[0.8125rem] text-muted">
            {site.heroVideo.caption}{" "}
            {/* Deliberately quiet: the game isn't being promoted, just linked. */}
            <a
              href={featured.playUrl}
              className="underline decoration-grid-major underline-offset-2 transition-colors hover:text-ink hover:decoration-accent"
            >
              {featured.title}
            </a>
            .
          </figcaption>
        </figure>
      </section>

      <section className="py-12">
        <h2>The Journey</h2>
        {/* Numbered because the order is real (DESIGN.md §4); the <ol> carries it for
            screen readers, so the drawn numbers are decorative. */}
        <ol className="space-y-4">
          {site.journey.map(({ text }, i) => (
            <li key={text} className="flex items-baseline gap-4">
              <span
                aria-hidden
                className="w-10 shrink-0 font-display text-[1.6rem] leading-none text-link tabular-nums"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-md border border-grid-major bg-surface p-6">
        <span className="tag">Featured work</span>
        <h2 className="mt-4">{featured.title}</h2>
        <p className="mb-4 text-muted">{featured.role}</p>
        {/* Side by side from md, so the 768px image only ever scales down. */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="rounded-md bg-viewport p-2 shadow-paper">
            <img
              src={featured.image}
              alt={featured.imageAlt}
              width={768}
              height={432}
              className="w-full rounded-sm"
            />
          </div>
          <ul className="list-disc space-y-1 pl-5">
            {featured.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pt-12">
        <h2>Selected Work</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {selectedWork.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link to="/projects" className="mt-8 btn">
          {site.selectedWork.allLabel}
          <span aria-hidden>→</span>
        </Link>
      </section>

      <section className="py-12">
        <h2>How I Work</h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {site.howIWork.map(({ title, text }) => (
            <div key={title} className="border-l-2 border-accent pl-4">
              <h3 className="mb-2 text-xl">{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <dl className="mt-10 space-y-4 border-t border-grid-major pt-6">
          <div>
            <dt className="text-[0.8rem] text-muted">Education</dt>
            <dd>{Object.values(site.education).join(" · ")}</dd>
          </div>
          <div>
            <dt className="text-[0.8rem] text-muted">Toolbox</dt>
            <dd>
              <ul aria-label="Tools" className="mt-1 flex flex-wrap gap-2">
                {site.toolbox.map((tool) => (
                  <li key={tool} className="tag">
                    {tool}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
