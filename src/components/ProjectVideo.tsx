import { useEffect, useRef } from "react";

interface Props {
  src: string;
  poster?: string;
  label: string;
}

/**
 * Plays only while on screen, never under prefers-reduced-motion.
 * TODO: lightbox with full controls (CLAUDE.md §6.5).
 */
export default function ProjectVideo({ src, poster, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rounded-md bg-viewport p-2 shadow-paper">
      <video
        ref={ref}
        src={src}
        poster={poster}
        aria-label={label}
        className="w-full rounded-sm"
        muted
        loop
        playsInline
        controls
        preload="metadata"
      />
    </div>
  );
}
