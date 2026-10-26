import { Link, NavLink } from "react-router";
import { site } from "@/data/site";

const nav = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 h-15 border-b-2 border-ink bg-surface shadow-[0_4px_0_color-mix(in_oklab,var(--color-grid-major)_70%,transparent)]">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-4">
        <Link to="/" className="font-display text-2xl uppercase">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-4">
            {nav.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `font-medium ${isActive ? "underline decoration-accent decoration-3 underline-offset-8" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
