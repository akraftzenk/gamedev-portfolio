import { site } from "@/data/site";

export default function StatRow() {
  return (
    <dl className="grid gap-6 md:grid-cols-3">
      {site.stats.map(({ label, value }) => (
        <div key={label} className="rounded-xl bg-surface p-6">
          <dt className="text-muted">{label}</dt>
          <dd className="font-semibold">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
