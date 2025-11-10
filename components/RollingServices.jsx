"use client";

import { useState, useEffect, useRef } from "react";

const SERVICES = [
  {
    title: "UI/UX Design",
    desc: "Beautiful, user-friendly interfaces. We design layouts, colors, and user flows so your product feels clean and easy from day one.",
  },
  {
    title: "Front-End Development",
    desc: "Fast, responsive web apps built with modern tech like React and Next.js. Pixel-perfect implementation of your brand and features.",
  },
  {
    title: "Back-End Development",
    desc: "Secure, scalable APIs and databases. We build the logic, data models, and integrations that keep your product reliable.",
  },
  {
    title: "AI/ML Development",
    desc: "We add intelligent features like chatbots, personalization, automation, and analytics using AI tuned for your business.",
  },
  {
    title: "Custom Applications",
    desc: "Full end-to-end solutions made just for you — internal dashboards, portals, workflow tools, or brand new products from scratch.",
  },
];

export default function RollingServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // autoplay rotate
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % SERVICES.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  function handleMouseEnter() {
    setIsPaused(true);
  }

  function handleMouseLeave() {
    setIsPaused(false);
  }

  function handleSelect(idx) {
    setCurrentIndex(idx);
    setIsPaused(true);
  }

  const active = SERVICES[currentIndex];

  return (
    <div className="flex flex-col items-center text-center text-white">
      {/* clickable list of all services */}
      <ul className="space-y-2">
        {SERVICES.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <li
              key={idx}
              className={[
                "cursor-pointer font-semibold transition-colors duration-300",
                "text-2xl sm:text-4xl",
                isActive
                  ? "text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]"
                  : "text-white/30 hover:text-white/70",
              ].join(" ")}
              onMouseEnter={() => {
                handleSelect(idx); // go to that service + pause
              }}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleSelect(idx)} // for mobile tap
            >
              {item.title}
            </li>
          );
        })}
      </ul>

      {/* glass card description */}
      <div
        className="
          relative
          mt-8
          w-full max-w-md
          rounded-2xl
          px-5 py-6
          text-left
          shadow-[0_30px_120px_rgba(124,58,237,0.4)]
          ring-1 ring-white/15
          backdrop-blur-md
          bg-white/5
          transition-all
          duration-300
        "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* faint gradient glow top edge */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-40 blur-[30px]"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.45) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* content on top of the glow */}
        <div className="relative">
          <div className="text-xs font-medium uppercase tracking-wide text-violet-300/80">
            {active.title}
          </div>

          <p className="mt-3 text-white/80 text-base leading-relaxed">
            {active.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
