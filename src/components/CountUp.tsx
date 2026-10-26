import { useLayoutEffect, useRef } from "react";

const DURATION_MS = 1200;

/** Splits "12+ years" into ["", 12, "+ years"]; null for text-only values. */
function parse(value: string) {
  const match = /^(\D*)(\d+)(.*)$/.exec(value);
  return match ? { prefix: match[1], target: Number(match[2]), suffix: match[3] } : null;
}

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

/**
 * Counts the leading number in `value` up from 0 the first time it scrolls
 * into view (DESIGN.md §6). The final value is what renders without JS, under
 * reduced motion, and for screen readers; text-only values never animate.
 */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  // Writes straight to the DOM: no re-render per frame, and the reset to 0
  // lands before first paint so the final value never flashes.
  useLayoutEffect(() => {
    const el = ref.current;
    const parsed = parse(value);
    if (!el || !parsed || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const show = (n: number) => {
      el.textContent = `${parsed.prefix}${n}${parsed.suffix}`;
    };
    show(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          show(Math.round(easeOutCubic(t) * parsed.target));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      show(parsed.target);
    };
  }, [value]);

  if (!parse(value)) return value;

  return (
    <>
      <span className="sr-only">{value}</span>
      {/* The invisible final value reserves the width so the row never reflows mid-count. */}
      <span aria-hidden className="inline-grid tabular-nums">
        <span className="invisible col-start-1 row-start-1">{value}</span>
        {/* Keyed so React remounts rather than diffing a text node we've rewritten. */}
        <span key={value} ref={ref} className="col-start-1 row-start-1">
          {value}
        </span>
      </span>
    </>
  );
}
