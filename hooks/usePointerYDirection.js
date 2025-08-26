// hooks/usePointerYDirection.js
"use client";
import { useEffect, useRef, useState } from "react";

/** returns "up" | "down" based on WINDOW SCROLL only */
export default function usePointerYDirection({ threshold = 8 } = {}) {
  const [direction, setDirection] = useState("down");
  const lastY = useRef(null);

  useEffect(() => {
    const readY = () =>
      Math.max(
        0,
        window.scrollY ??
          document.documentElement.scrollTop ??
          document.body.scrollTop ??
          0
      );

    const onScroll = () => {
      const y = readY();

      if (lastY.current == null) {
        lastY.current = y; // prime on first run
        return;
      }

      const dy = y - lastY.current; // +down, -up
      if (Math.abs(dy) >= threshold) {
        setDirection(dy < 0 ? "up" : "down");
        lastY.current = y; // update only when we cross the threshold
      }
    };

    lastY.current = readY();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
}
