export const site = {
  name: "Zeloi",
  title: "Game Developer / Programmer",
  url: "https://zeloi.dev",
  description:
    "Zeloi — gameplay programmer with 12+ years of Roblox experience in enemy AI, gameplay frameworks, and custom graphics systems.",
  heroLine: "Building responsive, systems-driven gameplay mechanics.",
  intro:
    "12+ years of Roblox development experience spanning state-machine AI, gameplay frameworks, and custom graphics systems. B.S. in Software Engineering from MSOE. Seeking full-time or contract gameplay programming roles.",
  links: {
    email: "mailto:akraftzenk@gmail.com",
    linkedin: "https://www.linkedin.com/in/akraftzenk/",
    discord: "https://discord.com/users/zeloi",
    // TODO: add GitHub profile and resume PDF (CLAUDE.md §3)
  },
  avatar: {
    src: "/media/avatar/headshot-front-ink.webp",
    alt: "Zeloi's Roblox avatar: a cartoon character with a pink bowl cut, white shirt, and black tie",
    // Swapped in while the avatar is being smacked (same camera as `src`).
    flinchSrc: "/media/avatar/headshot-front-flinch-ink.webp",
    smackSound: "/media/sfx/smack.mp3",
    prompt: "Click me!",
  },
  stats: [
    { label: "Experience", value: "12+ years" },
    { label: "Heroes of Robloxia franchise plays", value: "160M+" },
    { label: "Education", value: "B.S. software eng." },
  ],
  heroVideo: {
    src: "/media/enemy-ai.mp4",
    poster: "/media/posters/enemy-ai.webp",
    label: "Gameplay footage of the enemy and boss AI in Heroes of Robloxia 2",
    // The featured game's title follows as a link.
    caption: "Enemy & boss AI framework built for",
  },
  journey: [
    {
      icon: "rocket",
      text: "Started developing games on Roblox in fifth grade, building foundational coding skills early.",
    },
    {
      icon: "user-circle",
      text: "Became active in the community, helping others debug and learn through the RTC and forums.",
    },
    {
      icon: "layers",
      text: "Scaled up to complex solo and collaborative architecture across multi-year projects.",
    },
  ],
  featured: {
    title: "Heroes of Robloxia 2",
    role: "Contract role",
    playUrl: "https://www.roblox.com/games/8446283285/Heroes-of-Robloxia-2",
    highlights: [
      "Enemy AI: state-machine / behavior-tree hybrid",
      "Weapon systems",
      "Custom 3D particle system",
    ],
    image: "/media/heroes-of-robloxia-2.png",
    // TODO: describe what the image actually shows
    imageAlt: "Heroes of Robloxia 2 gameplay",
  },
  // Slugs from projects.ts, in display order.
  // TODO: replace pathfinding-editor with the new project once its footage is recorded.
  selectedWork: {
    slugs: ["pathfinding-editor", "mining-game"],
    allLabel: "See all projects",
  },
  education: {
    school: "MSOE",
    degree: "B.S. Software Engineering",
    minor: "Minor in Mathematics",
    year: 2025,
  },
  howIWork: [
    {
      title: "Architecture first",
      text: "Strong Object-Oriented Programming and software architecture principles from my engineering degree, applied to every system I build in Lua/Luau.",
    },
    {
      title: "Fast in any codebase",
      text: "Proven ability to quickly adapt to existing codebases or engineer clean systems from scratch.",
    },
    {
      title: "AI-accelerated, human-directed",
      text: "I use AI to speed up development while keeping the design decisions my own. I plan the architecture, guide the AI with clear prompts, project instructions like CLAUDE.md, and coding conventions, and review everything it writes.",
    },
  ],
  toolbox: [
    "Luau",
    "Roblox Studio",
    "TypeScript",
    "React",
    "Java",
    "SQL",
    "Git",
    "Claude Code",
    "PHP",
    "JavaScript",
    "C",
  ],
} as const;
