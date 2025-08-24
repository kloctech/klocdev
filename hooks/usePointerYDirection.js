"use client";
import { useEffect, useRef, useState } from "react";

export default function usePointerYDirection({ threshold = 6 } = {}) {
  const [direction, setDirection] = useState("down");
  const lastY = useRef(null);
  const dirRef = useRef("down");
  const ticking = useRef(false);

  useEffect(() => {
    const handle = (e) => {
      const t = e.touches?.[0];
      const y = t?.clientY ?? e.clientY;
      if (y == null) return;
      if (lastY.current == null) {
        lastY.current = y;
        return;
      }
      const dy = y - lastY.current;
      if (Math.abs(dy) >= threshold) {
        const next = dy > 0 ? "down" : "up";
        if (next !== dirRef.current) {
          dirRef.current = next;
          setDirection(next);
        }
        lastY.current = y;
      }
      ticking.current = false;
    };

    const onMove = (ev) => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => handle(ev));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, [threshold]);

  return direction; // 'up' | 'down'
}
