export interface Project {
  slug: string;
  title: string;
  caption: string;
  video: string;
  /** Hand-picked mid-action frame (DESIGN.md §7.5). */
  poster: string;
  year?: number;
  tags: string[];
}

// Titles are the suggestions from CLAUDE.md §4.2. Confirm them before shipping.
export const projects: Project[] = [
  {
    slug: "enemy-ai",
    title: "Enemy & Boss AI Framework",
    caption: "Universal enemy and boss AI framework built for Heroes of Robloxia 2.",
    video: "/media/enemy-ai.mp4",
    poster: "/media/posters/enemy-ai.webp",
    tags: ["Luau", "AI"],
  },
  {
    slug: "mining-game",
    title: "Mining Game",
    caption: "Solo-project developed concurrently with software engineering coursework.",
    video: "/media/mining-game.mp4",
    poster: "/media/posters/mining-game.webp",
    tags: ["Luau"],
  },
  {
    slug: "inventory-ui",
    title: "Inventory UI Concept",
    caption: "Inventory UI concept.",
    video: "/media/inventory-ui.mp4",
    poster: "/media/posters/inventory-ui.webp",
    year: 2018,
    tags: ["Luau", "UI"],
  },
  {
    slug: "pathfinding-editor",
    title: "Node-Graph Pathfinding Editor",
    caption:
      "Custom node-graph editor plugin developed to build networks intended for pathfinding applications.",
    video: "/media/pathfinding-editor.mp4",
    poster: "/media/posters/pathfinding-editor.webp",
    tags: ["Luau", "Tools", "AI"],
  },
  {
    slug: "character-controller",
    title: "Character Rig & Controller",
    caption: "Custom character rig, controller, and animation pipeline.",
    video: "/media/character-controller.mp4",
    poster: "/media/posters/character-controller.webp",
    year: 2018,
    tags: ["Luau"],
  },
  {
    slug: "vehicle-prototype",
    title: "Arcade Vehicle Prototype",
    caption: "Arcade “vehicle” driving prototype.",
    video: "/media/vehicle-prototype.mp4",
    poster: "/media/posters/vehicle-prototype.webp",
    year: 2018,
    tags: ["Luau"],
  },
];
