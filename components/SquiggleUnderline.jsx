"use client";
import { useEffect, useRef, useState } from "react";

/** Draws a short wavy underline and animates it on scroll */
export default function SquiggleUnderline({
  children,
  strokeClass = "text-white/90", // color of the underline (uses currentColor)
  durationMs = 700,
  className = "",
}) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect(); // play once
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`relative inline-block pb-[0.28em] whitespace-nowrap ${className}`}
    >
      {/* the text */}
      <span className="relative z-10">{children}</span>

      {/* the wiggly underline */}
      <svg
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 ${strokeClass}`}
        width="100%" /* slightly longer than the word */
        height="12" /* underline height space */
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
      >
        {/* gentle waves: change control points to tweak “wiggle” */}
        <path
          d="M2 9 Q 12 8.4 22 9 T 42 9 T 62 9 T 82 9 T 98 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          pathLength="1" /* normalize length */
          style={{
            strokeDasharray: 1,
            strokeDashoffset: active ? 0 : 1 /* draw-on effect */,
            transition: `stroke-dashoffset ${durationMs}ms ease-out`,
          }}
        />
      </svg>
    </span>
  );
}
