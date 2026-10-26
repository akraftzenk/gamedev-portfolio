import { Link, NavLink } from "react-router";
import { site } from "@/data/site";

const nav = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 h-15 border-b border-ink/10 bg-bg">
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
                  className={({ isActive }) => `font-medium ${isActive ? "text-accent" : ""}`}
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
