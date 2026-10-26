import { site } from "@/data/site";
import StatRow from "@/components/StatRow";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Home() {
  usePageTitle();
  const { featured } = site;

  return (
    <div className="mx-auto max-w-content px-4">
      {/* TODO: gameplay footage/imagery above the fold (CLAUDE.md §2, problem 3) */}
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

      <section className="rounded-xl bg-surface p-6">
        <span className="inline-block rounded-full bg-accent px-3 py-1 font-display text-xs text-accent-contrast uppercase">
          Featured Work
        </span>
        <h2 className="mt-4">{featured.title}</h2>
        <p className="mb-4 text-muted">{featured.role}</p>
        <img
          src={featured.image}
          alt={featured.imageAlt}
          width={768}
          height={432}
          className="rounded-lg"
        />
        <ul className="mt-4 list-disc space-y-1 pl-5">
          {featured.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 py-12 md:grid-cols-2">
        <div className="rounded-xl bg-surface p-6">
          <h2>Education</h2>
          <p>{site.education}</p>
        </div>
        <div className="rounded-xl bg-surface p-6">
          <h2>How I Work</h2>
          <p>{site.howIWork}</p>
        </div>
      </section>
    </div>
  );
}
