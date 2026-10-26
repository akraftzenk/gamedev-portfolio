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
  education: "B.S. in software engineering, minor in mathematics, MSOE.",
  howIWork:
    "Lua/Luau is my primary environment, backed by strong Object-Oriented Programming and software architecture principles from my engineering degree. Proven ability to quickly adapt to existing codebases or engineer clean systems from scratch.",
} as const;
