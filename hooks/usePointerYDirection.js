"use client";
import { useEffect, useRef, useState } from "react";

/** returns "up" | "down" based on cursor/touch Y direction */
export default function usePointerYDirection({ threshold = 8 } = {}) {
  const [direction, setDirection] = useState("down");
  const lastY = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const t = e.touches?.[0];
      const y = t?.clientY ?? e.clientY;
      if (y == null) return;

      if (lastY.current == null) {
        lastY.current = y;
        return;
      }
      const dy = y - lastY.current; // +down, -up
      if (Math.abs(dy) >= threshold) {
        setDirection(dy < 0 ? "up" : "down");
        lastY.current = y;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, [threshold]); // ← no need to depend on `direction`

  return direction;
}
