import { site } from "@/data/site";

export default function ContactCard() {
  return (
    <footer className="mx-auto max-w-content px-4 py-12">
      <div className="rounded-xl bg-accent p-6 text-accent-contrast">
        <h2>Contact Me</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href={site.links.email} className="underline">
              Email
            </a>
          </li>
          <li>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.links.discord} target="_blank" rel="noreferrer" className="underline">
              Discord
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
