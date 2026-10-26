export interface Job {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: Job[] = [
  {
    role: "AI Specialist",
    company: "Astrophyte LLC",
    period: "2019 – Present",
    bullets: [
      "Designed and programmed an advanced behavior tree/state machine hybrid to simulate intelligent enemy behavior from the ground up in Lua, contributing to a franchise with over 160M+ plays.",
      // TODO: filler, replace with a concrete result
      "Demonstrated long-term commitment and discipline by consistently contributing to an iconic franchise over 5 years while balancing academic and professional responsibilities.",
      "Established branching strategies and guided teammates in resolving merge conflicts, improving workflow efficiency.",
    ],
  },
  {
    role: "Full-Stack Engineer Intern",
    company: "Ancilla Ventures",
    period: "2024",
    bullets: [
      // TODO: awkward wording, rewrite
      "Created, debugged, and enhanced web applications using complex SQL queries, PHP, and Java to enhance cleaning efficiency and filing.",
      "Partnered with the UX team to rebuild and modernize 20+ user interfaces with PHP and JavaScript, significantly enhancing user navigation, accessibility, and workflow efficiency.",
      "Proposed and implemented strategies for code efficiency, memory optimization, and user experience resulting in faster load times by over 60% on some pages.",
    ],
  },
];
