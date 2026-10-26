import Annotation from "@/components/Annotation";
import SmackableAvatar from "@/components/SmackableAvatar";
import { site } from "@/data/site";

// Curves from under the note into the avatar's cheek, then the arrowhead.
const ARROW = ["M8 6 C 22 34, 62 52, 110 42", "M97 34 L 111 42 L 99 53"];

export default function ContactCard() {
  return (
    <footer className="mt-12 border-t-2 border-ink">
      <div className="mx-auto max-w-content px-4 py-12">
        {/* The render is cut off at the chest; tucking that edge behind the card makes the
            avatar look like it's standing behind it. The card comes later in the DOM, so it
            paints over the overlap. */}
        <div className="relative mr-6 -mb-1 ml-auto w-32 md:w-44">
          <SmackableAvatar />
          <Annotation
            text={site.avatar.prompt}
            paths={ARROW}
            className="absolute top-[14%] right-[64%] w-24 md:w-32"
          />
        </div>
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
