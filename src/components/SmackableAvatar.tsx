import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const FLINCH_MS = 450;

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The Contact Me avatar. Clicking it swaps in the flinch render, shakes it, and plays a smack.
 * Under reduced motion it still flinches and plays the sound, but doesn't shake.
 */
export default function SmackableAvatar() {
  const [flinching, setFlinching] = useState(false);
  const frameRef = useRef<HTMLSpanElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  // Load the sound once the visitor shows interest, so the first smack isn't silent.
  const primeAudio = () => {
    if (audioRef.current) return audioRef.current;
    const audio = new Audio(site.avatar.smackSound);
    audio.preload = "auto";
    audio.volume = 0.5;
    audioRef.current = audio;
    return audio;
  };

  const smack = () => {
    const audio = primeAudio();
    audio.currentTime = 0;
    // A missing file or blocked autoplay shouldn't break the flinch.
    audio.play().catch(() => {});

    setFlinching(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setFlinching(false), FLINCH_MS);

    if (!reducedMotion()) {
      frameRef.current?.animate(
        [
          { translate: "0 0", rotate: "0deg" },
          { translate: "-7px 2px", rotate: "-3deg" },
          { translate: "5px -1px", rotate: "2deg" },
          { translate: "-3px 0", rotate: "-1deg" },
          { translate: "0 0", rotate: "0deg" },
        ],
        { duration: 180, easing: "ease-out" },
      );
    }
  };

  return (
    <button
      type="button"
      onClick={smack}
      onPointerEnter={primeAudio}
      onFocus={primeAudio}
      className="block w-full cursor-pointer rounded-md"
    >
      <span ref={frameRef} className="relative block origin-bottom">
        <img
          src={site.avatar.src}
          alt={site.avatar.alt}
          width={1200}
          height={1200}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={`block w-full select-none ${flinching ? "invisible" : ""}`}
        />
        {/* Stacked rather than swapped via src so the flinch frame is already decoded. */}
        <img
          src={site.avatar.flinchSrc}
          alt=""
          width={1200}
          height={1200}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={`absolute inset-0 block w-full select-none ${flinching ? "" : "invisible"}`}
        />
      </span>
      <span className="sr-only">(click to smack)</span>
    </button>
  );
}
