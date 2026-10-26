import { site } from "@/data/site";
import StatRow from "@/components/StatRow";
import ProjectVideo from "@/components/ProjectVideo";
import { usePageTitle } from "@/hooks/usePageTitle";

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
        <ol className="list-decimal space-y-2 pl-5">
          {site.journey.map(({ text }) => (
            <li key={text}>{text}</li>
          ))}
        </ol>
      </section>

      <section className="rounded-md border border-grid-major bg-surface p-6">
        <span className="inline-block rounded-sm border border-accent px-2 py-0.5 text-xs font-semibold">
          Featured work
        </span>
        <h2 className="mt-4">{featured.title}</h2>
        <p className="mb-4 text-muted">{featured.role}</p>
        <div className="rounded-md bg-viewport p-2 shadow-paper">
          <img
            src={featured.image}
            alt={featured.imageAlt}
            width={768}
            height={432}
            className="rounded-sm"
          />
        </div>
        <ul className="mt-4 list-disc space-y-1 pl-5">
          {featured.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-12 py-12 md:grid-cols-2">
        <div>
          <h2>Education</h2>
          <p>{site.education}</p>
        </div>
        <div>
          <h2>How I Work</h2>
          <p>{site.howIWork}</p>
        </div>
      </section>
    </div>
  );
}
