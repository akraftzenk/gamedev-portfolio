import { site } from "@/data/site";

export default function ContactCard() {
  return (
    <footer className="mt-12 border-t-2 border-ink">
      <div className="mx-auto max-w-content px-4 py-12">
        <div className="rounded-md border border-grid-major bg-surface p-6">
          <h2>Contact Me</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href={site.links.email} className="text-link underline">
                Email
              </a>
            </li>
            <li>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-link underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.links.discord}
                target="_blank"
                rel="noreferrer"
                className="text-link underline"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
