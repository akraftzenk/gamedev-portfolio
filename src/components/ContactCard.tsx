import { site } from "@/data/site";

export default function ContactCard() {
  return (
    <footer className="mt-12 border-t-2 border-ink">
      <div className="mx-auto max-w-content px-4 py-12">
        {/* The render is cut off at the chest; tucking that edge behind the card makes the
            avatar look like it's standing behind it. The card comes later in the DOM, so it
            paints over the overlap. */}
        <img
          src={site.avatar.src}
          alt={site.avatar.alt}
          width={1200}
          height={1200}
          loading="lazy"
          decoding="async"
          className="relative mr-6 -mb-1 ml-auto block w-32 select-none md:w-44"
        />
        <div className="relative rounded-md border border-grid-major bg-surface p-6">
          <h2>Contact Me</h2>
          <ul className="mt-6 flex flex-wrap gap-4">
            <li>
              <a href={site.links.email} className="btn btn-primary">
                Email me
              </a>
            </li>
            <li>
              <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="btn">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.links.discord} target="_blank" rel="noreferrer" className="btn">
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
