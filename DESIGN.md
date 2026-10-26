# DESIGN.md — zeloi.dev visual system

The look and behavior rules for everything on the site. `CLAUDE.md` owns content and tech; this file owns how things look, move, and fit together. If a new component isn't covered here, extend this file before (or while) building it.

Direction chosen: **"The design doc"**. The light theme is a well-kept engineering notebook (graph paper, graphite, red-pen notes), and the dark theme is the same notebook after dark, redrawn like a night-time blueprint or level editor. The original comparison of the three directions is at https://claude.ai/artifact/Rz2wdbheSkwrZnTsGdEDnT (private to the owner).

---

## 1. The idea in one paragraph

Super Indie looks drawn in pencil, so the site is the paper it's drawn on. Structure is visible and precise (the grid, ruled dividers, clean Inter body text), which says _professional and organized_. The fun lives in a few deliberate places: hand-lettered headings, margin annotations that point at the interesting part of the work, and real gameplay footage. Everything else stays quiet.

**Spend boldness in one place per screen.** At any scroll position there should be one thing that's clearly the star (a video, a diagram, the hero line), and everything around it is calm.

## 2. Color

Defined as Tailwind v4 `@theme` tokens in `src/styles/index.css` (`--color-*`), so classes like `bg-bg`, `text-ink`, `border-grid-major` work. Dark values override the same variables. Roles stay fixed across themes; only the values change.

| Token        | Role                                                                                   | Day (light)                | Night (dark)                 |
| ------------ | -------------------------------------------------------------------------------------- | -------------------------- | ---------------------------- |
| `bg`         | Page paper                                                                             | `#F4F8FA`                  | `#1C232E`                    |
| `grid`       | Minor graph lines (24px)                                                               | `#DBE8F0`                  | `#263040`                    |
| `grid-major` | Major graph lines (120px), hairline borders, hard shadows                              | `#BFD6E4`                  | `#33405A`                    |
| `surface`    | Raised panels (spec cards, contact card, header)                                       | `#FFFFFF`                  | `#242D3A`                    |
| `ink`        | Headings, body text, 2px structural rules                                              | `#262A33`                  | `#E3E8EF`                    |
| `muted`      | Secondary text, captions, labels                                                       | `#5A6170`                  | `#9AA5B8`                    |
| `accent`     | Structure and interaction: active nav underline, stat rules, tag outlines, focus rings | `#4F8FCE` (non-photo blue) | `#FFB23E` (selection orange) |
| `link`       | Link text (accessible version of `accent`)                                             | `#2E6DB4`                  | `#FFB23E`                    |
| `annotate`   | Hand-drawn notes, arrows, circles only                                                 | `#C9342B` (red pen)        | `#8CC0F0` (blueprint pencil) |
| `viewport`   | Background of media frames (always dark)                                               | `#161A22`                  | `#10141B`                    |

Rules:

- **`accent` and `annotate` never swap jobs.** `accent` means "this is structure / you can interact with this." `annotate` means "the author is pointing something out." In dark mode they invert warm/cool (orange structure, blue notes) so they stay distinguishable from each other.
- **`accent` is never a fill behind text.** It's for lines, underlines, outlines, and focus rings. (Non-photo blue fails text contrast on paper; use `link` for text.)
- **`annotate` is never used for UI.** No red buttons, red errors, or red tags. If we ever need an error color, add a separate token.
- Media frames use `viewport` in both themes, so footage always sits on dark.
- Contrast targets: body text ≥ 4.5:1, large display text and UI lines ≥ 3:1. All the pairs above meet this on their own `bg`/`surface`; re-check any new pair.

### Theme switching

- Default follows `prefers-color-scheme`. A toggle in the header sets `data-theme="light" | "dark"` on `<html>` and stores the choice in `localStorage` (wrapped in try/catch).
- CSS shape: light values in `@theme`, then override the same `--color-*` variables under `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { … } }` and again under `:root[data-theme="dark"]`. Set `color-scheme: dark` in both dark blocks.
- Set the theme attribute before first paint (tiny inline script in `index.html`) to avoid a flash.
- Components never hardcode hex values; always use tokens. SVG art uses `currentColor` or `var(--color-*)` so it re-themes for free.

## 3. Typography

| Role    | Face                                                          | Usage                                                                                    |
| ------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Display | **Super Indie** (`font-display`), always uppercase            | Logo/name, page `h1`, section `h2`, card titles, the hero line, stat values, annotations |
| Body    | **Inter Variable** (`font-sans`)                              | Everything else: paragraphs, nav, buttons, captions, tags                                |
| Code    | System mono stack (pick a webfont when case-study pages land) | Code blocks and inline code only, never decorative labels                                |

Scale (rem, 16px base):

| Use                     | Size                       | Notes                                                |
| ----------------------- | -------------------------- | ---------------------------------------------------- |
| Hero line               | `clamp(2rem, 4.5vw, 3rem)` | Super Indie, line-height ~1.02, `text-wrap: balance` |
| `h1` page title         | 2.5rem (mobile 2rem)       | Super Indie                                          |
| `h2` section            | 2rem (mobile 1.75rem)      | Super Indie                                          |
| `h3` card title         | 1.5rem                     | Super Indie                                          |
| Stat value              | 1.6rem                     | Super Indie                                          |
| Annotation              | 1.125rem minimum           | Super Indie, rotated −3° to −5°                      |
| Lede                    | 1.125rem                   | Inter 400, `muted`                                   |
| Body                    | 1rem                       | Inter 400, line-height 1.6, max ~68ch                |
| Small / captions / tags | 0.8125–0.875rem            | Inter 500–600                                        |

Rules:

- Super Indie only has one weight. Set `font-synthesis: none` so browsers never fake bold or italic on it.
- Don't set long passages in Super Indie. The hero line is the longest it gets (~8 words).
- No all-caps Inter labels and no tracked-out eyebrow text above headings. A heading stands on its own.
- Emphasis in body copy is Inter 600, not color.
- Left-align everything. Centered text only for very short, standalone things (e.g. a 404 message).

## 4. Layout and structure

- **Graph paper background** on `body`: 24px minor grid in `grid` and a 120px major grid in `grid-major`, both as CSS linear-gradients (no image request). Use `background-attachment: scroll`, since fixed backgrounds stutter on mobile.
- **Spacing rhythm** snaps to the grid where practical: 24px (`gap-6`, `p-6`) is the base unit, with 48px and 96px for section spacing. 8px and 12px are fine for tight internals.
- **Content width** `max-w-content` (1100px), left-aligned within the page, with a gutter of at least 16px.
- **Header**: one compact row (~60px), sticky, `surface`-colored (not transparent, so the grid doesn't show through), a 2px `ink` bottom rule, name in Super Indie on the left, nav and theme toggle on the right. The active nav item gets a 3px `accent` underline.
- **Footer/contact**: separated by a 2px `ink` rule.
- **Dividers**: 2px `ink` for page-level structure (header, footer, major page sections); 1px `grid-major` inside sections. Don't use a divider when spacing alone does the job.
- **Responsive**: mobile-first; stack every multi-column layout below 768px. Test at 375, 768, 1280+.
- **Numbering** (01, 02…) only where order is real, e.g. the journey timeline. Never on unordered things like project cards.

### Borders, radius, shadow

- Radius: **4px** (`rounded-sm`) for tags and small controls, **6px** (`rounded-md`) for frames, cards, and buttons. Nothing larger: no pill shapes, no `rounded-lg`/`rounded-xl`/`rounded-full`.
- Shadows are **hard offset shadows only**: the `shadow-paper` utility (`6px 6px 0` in `grid-major`), like a sheet of paper lifted off the page. No soft blur shadows. In dark mode `shadow-paper` automatically becomes a 1px `grid-major` outline.
- Use cards sparingly. Most content sits directly on the paper; only things that are objects (a project, the contact card) get a `surface` panel.

## 5. Components

**Viewport frame** — every image and video lives in one.
`viewport` background, 8px padding, 6px radius, hard offset shadow (light mode). Caption below in Inter 0.8125rem `muted`. Never blur, darken, or crop the subject out. Media inside keeps its native aspect ratio.

**Annotation** — the signature element.
A short note in Super Indie (`annotate` color, rotated a few degrees) plus a hand-drawn SVG arrow, circle, or underline pointing at a specific part of an image or video.

- Says something specific and technical ("A* runs on these nodes", "boss switches to Flee below 20% HP"), never filler like "cool!".
- **One or two per screen at most.** If everything is annotated, nothing is.
- Draws itself once when it scrolls into view (`stroke-dashoffset`, ~1s, ease-out); static under `prefers-reduced-motion`.
- Decorative SVG gets `aria-hidden`. If the note carries information, repeat it in the caption or alt text.
- SVG strokes: ~2.5px, round caps and joins, slightly imperfect curves (not geometric).

**Stat** — value in Super Indie 1.6rem, label in Inter 0.8rem `muted`, 2px `accent` rule on the left. Stats go inline, in a wrapping row, not as big-number tiles. The hero stats are **160M+ plays** and **12+ years**; numeric values count up once (see §6).

**Spec card (project card)** — a `surface` panel with a 1px `grid-major` border and 6px radius. Top to bottom: viewport frame (poster plus in-view play), title (Super Indie), 1–2 sentence summary, tags, year, links. Two columns on desktop, one on mobile.

**Tag** — Inter 0.75rem, weight 600, sentence case, 1px `accent` outline, 4px radius, no fill.

**Buttons** — primary: `ink` fill, `bg` text, 6px radius. Secondary: 2px `ink` outline. On hover, the hard offset shadow grows a couple of px (feels like lifting the paper). Button text says exactly what happens ("Download resume", "Play Heroes of Robloxia 2").

**Links** — `link` color, underlined in body copy. Nav links aren't underlined except for the active one.

**Focus** — a visible 2px `accent` outline with 2px offset on every interactive element. Never remove outlines without replacing them.

**Lists** — real bullets (`list-disc pl-5`, since Tailwind preflight strips them), with markers in `accent`.

**Diagrams** (state machines, architecture) — SVG, labels in Super Indie, strokes in `ink`, with the "active" or important node in `annotate`. Use `currentColor`/tokens so they re-theme. These double as the static fallback for the interactive demos.

## 6. Motion

- **One signature motion:** annotations drawing themselves in. That's the page's "moment"; don't compete with it.
- **Videos:** play when ≥40% in view and pause when out of view. Always provide a poster and `preload="metadata"`, keep them muted, and offer controls or a lightbox. Under reduced motion there's no autoplay and controls show by default.
- **Interaction feedback is fine** (hover lift on buttons and cards, lightbox open/close, demo interactions), kept under ~200ms.
- **Stat count-ups:** numeric stat values (**160M+ plays**, **12+ years**) count up once, the first time they scroll into view (~1.2s, ease-out). The final value is always in the markup, so screen readers, no-JS visitors, and reduced-motion visitors simply see the number. Text-only stats (e.g. "B.S. software eng.") don't animate. Use `tabular-nums` while counting so the width doesn't jitter.
- **No** fade/slide-up reveals on sections, no parallax, no ambient looping animation outside the demos.
- Everything respects `prefers-reduced-motion` (the global rule in `index.css` plus explicit checks in JS).
- Content is fully visible at rest. Nothing starts at `opacity: 0` waiting for an observer.

## 7. Images and textures

In priority order. Video specs: H.264 MP4 (+ WebM if worthwhile), ≤ ~2 MB, muted, 6–12s seamless loops. Image specs: WebP/JPEG, ≤ ~200 KB, served at 2× the display size.

1. **Debug-view captures.** Record the enemy AI and pathfinding work with debug overlays on: state labels over heads, aggro/attack radii, path nodes and edges. These are the hero splash and the strongest proof of systems thinking. Nobody else's portfolio has them.
2. **Pencil annotations** over screenshots and footage (see §5). SVG overlays positioned in % so they scale with the media.
3. **Hand-drawn system diagrams** of the state machine / behavior tree and other architectures, built as SVG in the site's style. They work as section art now and become the static fallback for the behavior-tree demo later.
4. **Graph paper + paper grain.** The grid is CSS gradients. Grain is a tiny inline SVG `feTurbulence` layer on a fixed, `pointer-events: none` pseudo-element: multiply at ~0.35 opacity in light, soft-light at ~0.2 in dark. Total cost under 1 KB.
5. **Hand-picked poster frames** for every video, choosing the most readable moment (mid-action), not frame 0. Reuse them as Open Graph/Twitter images.
6. **Avatar as the personal mark.** A render of the Roblox avatar for the favicon, the Open Graph image (1200×630, composed on graph paper), and a small sketch-style version on About.

Also: show the **Heroes of Robloxia 2 key art** sharp, inside a viewport frame. It belongs to Astrophyte, so confirm usage is OK.

### Skip

- Stock "gaming" imagery: controllers, neon glows, RGB gradients.
- Blurred, darkened, or washed-out screenshots used as decoration. If it's on the page, it's sharp.
- Autoplaying every video at once. Only what's in view plays.
- Scrapbook clutter: tape, coffee rings, torn paper, sticky notes. Grid and pencil only.
- Emoji as icons or section markers.

## 8. Voice

Plain, specific, first person. Name things by what they do ("Enemy & boss AI framework"), not by hype. Annotations are where personality shows, but they're still technical observations, not jokes. Buttons say what happens. No filler adjectives ("passionate", "cutting-edge").

## 9. Checklist for any new page or component

- [ ] Uses tokens only (no raw hex), and looks right in **both** themes.
- [ ] Display font only where §3 allows; body copy ≤ ~68ch.
- [ ] Media in a viewport frame, with a poster and meaningful `alt`/`aria-label`.
- [ ] At most one or two annotations on screen; one clear "star" per screen.
- [ ] Radius 4/6px, hard shadows only, cards only for real objects.
- [ ] Visible focus states; contrast checked.
- [ ] Stacks cleanly at 375px; checked at 768 and 1280+.
- [ ] Reduced motion: no autoplay, annotations static, count-ups show the final value, nothing hidden.
