import { site } from "@/data/site";
import StatRow from "@/components/StatRow";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Home() {
  usePageTitle();
  const { featured } = site;

  return (
    <div className="mx-auto max-w-content px-4">
      {/* TODO: debug-view gameplay footage above the fold (DESIGN.md §7) */}
      <section className="py-12">
        <p className="text-muted">{site.title}</p>
        <h1>{site.heroLine}</h1>
        <p>{site.intro}</p>
      </section>

      <section>
        <StatRow />
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
