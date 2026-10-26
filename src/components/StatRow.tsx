import { site } from "@/data/site";

export default function StatRow() {
  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-6">
      {site.stats.map(({ label, value }) => (
        <div key={label} className="flex flex-col-reverse border-l-2 border-accent pl-3">
          <dt className="text-[0.8rem] text-muted">{label}</dt>
          <dd className="font-display text-[1.6rem] leading-tight uppercase">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
