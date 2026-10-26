import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  /** SVG path data in a 120×60 box: the stroke, then the arrowhead. */
  paths: string[];
  className?: string;
};

/**
 * Handwritten note plus a hand-drawn arrow (DESIGN.md §5). The arrow draws itself once
 * when it scrolls into view. It's fully drawn in the markup, so no-JS and reduced-motion
 * visitors just see it.
 */
export default function Annotation({ text, paths, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [draw, setDraw] = useState<"pending" | "done" | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setDraw("pending");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setDraw("done");
        io.disconnect();
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-draw={draw} className={`pointer-events-none text-annotate ${className}`}>
      <p className="-rotate-6 font-display text-lg leading-none whitespace-nowrap md:text-xl">
        {text}
      </p>
      <svg viewBox="0 0 120 60" fill="none" aria-hidden="true" className="mt-1 w-full">
        {paths.map((d) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            className="annotation-stroke"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
}
