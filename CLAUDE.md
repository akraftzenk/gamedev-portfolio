# CLAUDE.md — zeloi.dev portfolio rebuild

Personal portfolio for **Zeloi** (account handle: `akraftzenk`), a gameplay programmer targeting full-time or contract **gameplay programming** roles (and secondarily general software roles). The site is being rebuilt in **React**. This file is the single source of truth for the site's content, so there's no need to re-scrape https://zeloi.dev.

---

## 1. Tech & conventions

- **Old site** (`../portfolio`, live at zeloi.dev): Vite multi-page app (`index.html`, `projects.html`, `experience.html`), assets in `/assets/` with hashed names.
- **This repo:** React 19 + TypeScript + Vite SPA, routing via React Router (`createBrowserRouter` in `src/router.tsx`). Styling is **Tailwind CSS v4** (via `@tailwindcss/vite`); design tokens (colors `bg`/`grid`/`grid-major`/`surface`/`ink`/`muted`/`accent`/`link`/`annotate`/`viewport`, `shadow-paper`, fonts `font-display`/`font-sans`, `max-w-content`) live in the `@theme` block of `src/styles/index.css`, with dark-theme overrides below it. Their meaning and usage rules are in `DESIGN.md`. Note that Tailwind's preflight strips list styles, so add `list-disc pl-5` etc. when you want bullets. Prettier sorts class names. `@/` aliases `src/`.
- Commands: `npm run dev`, `npm run build` (runs `tsc -b` first), `npm run lint`, `npm run format`. Run lint + build before calling work done.
- Media lives in `public/media/` (clean names, referenced as `/media/...`); Super Indie font is in `public/fonts/`; Inter comes from `@fontsource-variable/inter`.
- Deploys to GitHub Pages on push to `main`; the workflow copies `index.html` to `404.html` so deep links work. Domain is **zeloi.dev** (`public/CNAME`). This is a fresh site, not a continuation of the old repo; the owner handles the GoDaddy DNS → GitHub Pages hookup themselves.
- Keep it static-hostable (no server required).
- Mobile-first. Test at 375px, 768px, and 1280px+.
- Every page needs: `<title>`, meta description, Open Graph/Twitter tags, favicon. (Current site has **none** of these.)
- All images need meaningful `alt` text. All videos need a `poster`.
- Respect `prefers-reduced-motion` for any animation or autoplay.

## 2. Design direction

**The visual system lives in [`DESIGN.md`](DESIGN.md). Read it before building or restyling anything.** It covers the chosen "design doc" direction (graph-paper light theme plus a blueprint-style dark theme), color tokens for both themes, type scale, layout, components, motion rules, and image/texture guidance. Where the two files conflict on visuals, `DESIGN.md` wins.

The old site's design (pale gray/muted blue palette, large rounded cards, filled badges) is retired. Don't carry any of it forward; build only from `DESIGN.md`.

- **Fonts stay as they are.** Display: **"Super Indie"**. Body: **Inter**. Do not suggest replacing Super Indie. Where each is used is defined in `DESIGN.md` §3.

## 3. Contact / identity

- Display name: **Zeloi** — consider also showing real name for recruiters.
- Title: **Game Developer / Programmer**
- Email: `mailto:akraftzenk@gmail.com`
- LinkedIn: https://www.linkedin.com/in/akraftzenk/
- Discord: https://discord.com/users/zeloi (current site uses old `discordapp.com` — update)
- To add: GitHub link, resume PDF download.

## 4. Site content (verbatim from current site)

Shared on every page: header (name, title, nav: About · Projects · Experience) and a **Contact Me** footer card with Email / LinkedIn / Discord links.

### 4.1 About (home — `index.html`)

**Hero line:** Building responsive, systems-driven gameplay mechanics.

**Intro:** 12+ years of Roblox development experience spanning state-machine AI, gameplay frameworks, and custom graphics systems. B.S. in Software Engineering from MSOE. Seeking full-time or contract gameplay programming roles.

**Stat row:**
| Label | Value |
|---|---|
| Experience | 12+ years |
| Education | B.S. software eng. |
| Signature Project | Heroes of Robloxia 2 |

**The journey** (each with a line icon: rocket, user-circle, layers):
- Started developing games on Roblox in fifth grade, building foundational coding skills early.
- Became active in the community, helping others debug and learn through the RTC and forums.
- Scaled up to complex solo and collaborative architecture across multi-year projects.

**Featured work** (badge) — **Heroes of Robloxia 2** — Contract role
- Enemy AI: state-machine / behavior-tree hybrid
- Weapon systems
- Custom 3D particle system
- Image: `assets/heroes-DdZMsD5f.png` (768px wide; currently blurred, alt text empty)

**Education:** B.S. in software engineering, minor in mathematics, MSOE.

**How I work:** Lua/Luau is my primary environment, backed by strong Object-Oriented Programming and software architecture principles from my engineering degree. Proven ability to quickly adapt to existing codebases or engineer clean systems from scratch.

### 4.2 Projects (`projects.html`)

Projects have **no titles** today — only captions. Suggested titles are in brackets. Video ↔ caption pairing is by page order; verify before shipping.

| # | Suggested title | Caption (current) | Video asset |
|---|---|---|---|
| 1 | [Enemy & Boss AI Framework] | Universal enemy and boss AI framework built for Heroes of Robloxia 2. | `assets/enemies_video-Bn02HpEz.mp4` (979w) |
| 2 | [Mining Game] | Solo-project developed concurrently with software engineering coursework. | `assets/mine_game-BbPvF3pa.mp4` (720w) |
| 3 | [Inventory UI Concept] | Inventory UI concept. (2018) | `assets/Inventory Concept-D56g_hVh.mp4` (670w) |
| 4 | [Node-Graph Pathfinding Editor] | Custom node-graph editor plugin developed to build networks intended for pathfinding applications. | `assets/RobloxStudioBeta_rf2W2zcFoq-B7kLNOzD.mp4` (1004w) |
| 5 | [Character Rig & Controller] | Custom character rig, controller, and animation pipeline (2018). | `assets/custom_character-DSxi5Fxb.mp4` (688w) |
| 6 | [Arcade Vehicle Prototype] | Arcade "vehicle" driving prototype (2018). | `assets/yeehaw-D56Yr4wh.mp4` (574w) |

Each project card should eventually have: title, 1–2 sentence summary, tech tags, "what was hard / how I solved it", year, and links (play / code / write-up) where available. Lead with the newest and strongest work.

### 4.3 Experience (`experience.html`)

**AI Specialist | Astrophyte LLC | 2019 – Present**
- Designed and programmed an advanced behavior tree/state machine hybrid to simulate intelligent enemy behavior from the ground up in Lua, contributing to a franchise with over 160M+ plays.
- Demonstrated long-term commitment and discipline by consistently contributing to an iconic franchise over 5 years while balancing academic and professional responsibilities. *(filler — replace with a concrete result)*
- Established branching strategies and guided teammates in resolving merge conflicts, improving workflow efficiency.

**Full-Stack Engineer Intern | Ancilla Ventures | 2024**
- Created, debugged, and enhanced web applications using complex SQL queries, PHP, and Java to enhance cleaning efficiency and filing. *(awkward wording — rewrite)*
- Partnered with the UX team to rebuild and modernize 20+ user interfaces with PHP and JavaScript, significantly enhancing user navigation, accessibility, and workflow efficiency.
- Proposed and implemented strategies for code efficiency, memory optimization, and user experience resulting in faster load times by over 60% on some pages.

## 5. Content fixes to make during the rebuild

- Surface **"160M+ plays"** on the homepage (hero or stat row) — currently buried on Experience.
- Make the HoR2 role title consistent: homepage says "Contract role", Experience says "AI Specialist".
- Add a link to play Heroes of Robloxia 2.
- Decide positioning: game-studio-only vs. general programming. If general, give the full-stack internship (SQL, PHP, Java, JS, 60% faster loads) more prominence.
- Add newer projects or move 2018 work lower.

## 6. React-enabled ideas (to stand out)

Prioritized roughly by impact-to-effort. These show engineering skill *through* the site itself.

1. **Interactive behavior-tree / state-machine visualizer** — The signature skill, made playable. Render a simplified version of the HoR2 enemy AI as a live node graph (e.g. React Flow). A small 2D canvas shows an enemy reacting to the visitor's cursor (idle → patrol → chase → attack → flee), with the active node/state lighting up in real time. Strongest single "wow" piece.
2. **Live particle system demo** — Recreate a slice of the custom 3D particle system with react-three-fiber (Three.js) or a 2D canvas. Expose a few sliders (emission rate, lifetime, velocity, gravity, color over life) so recruiters can play with it. Could double as the hero background.
3. **Pathfinding playground** — Echo the node-graph editor: visitors click to place nodes/edges or walls and watch A* / Dijkstra search step by step. Shows algorithm knowledge clearly.
4. **Project case-study pages** — `/projects/:slug` routes with a problem → approach → architecture diagram → code excerpt → result format. Syntax-highlighted Luau snippets (Shiki or Prism) of real, non-proprietary code. Recruiters judge code quality from these.
5. **Smart video cards** — A reusable `<ProjectVideo>` that plays only when in view (IntersectionObserver) or on hover, shows a poster otherwise, and opens a lightbox with controls. Fixes the current autoplay problem and feels polished.
6. **Animated stat counters** — One-time count-up for "12+ years" and "160M+ plays" (rules in `DESIGN.md` §6). No section scroll reveals.
7. **"Journey" timeline** — Turn the three journey bullets plus jobs into an interactive timeline (fifth grade → community → HoR2 → MSOE → internship), with media at each point.
8. **Tech-stack filter** — Tag projects (Luau, AI, Graphics, Tools, UI, Web) and filter the grid with animated layout transitions.
9. **Command palette (⌘K)** — Quick nav to sections, "copy email", "download resume". Small, but signals a developer who cares about UX.
10. **Theme toggle** — Day/Night toggle in the header; tokens and behavior are specified in `DESIGN.md` §2. The dark tokens already work off the OS setting; the toggle component and pre-paint script are still to build.
11. **Live Roblox stats** — Show current play/visit counts for HoR2. Roblox's public APIs don't allow browser CORS, so this needs a tiny serverless function or a build-time fetch. Nice-to-have.

Performance guardrails for the above: lazy-load heavy demos (`React.lazy` + `Suspense`), keep the initial bundle small, compress videos (H.264/WebM, ≤ ~2 MB each), and keep Lighthouse scores high — a fast site is itself a signal.

## 7. Component structure (scaffolded; `demos/` and the unbuilt components are still to come)

```
src/
  components/
    Header.tsx          // compact sticky nav
    ContactCard.tsx     // shared footer
    StatRow.tsx
    ProjectCard.tsx
    ProjectVideo.tsx    // in-view play, poster, lightbox
    Timeline.tsx
  demos/
    BehaviorTreeDemo/
    ParticleDemo/
    PathfindingDemo/
  pages/
    Home.tsx
    Projects.tsx
    ProjectDetail.tsx
    Experience.tsx
  data/
    projects.ts         // content from section 4.2
    experience.ts       // content from section 4.3
    site.ts             // name, title, links, stats
  styles/
    index.css           // Tailwind import + @theme tokens
```

Keep all copy in `src/data/` so content edits never touch components.
