"use client";

const SERVICES = [
  "Back-End Development",
  "AI/ML Development",
  "Custom Applications",
  "UI/UX Design",
  "Front-End Development",
];

export default function RollingServices() {
  const loop = [...SERVICES, ...SERVICES]; // duplicate for seamless loop

  return (
    <div className="rolling-mask mx-auto max-w-5xl h-48 sm:h-56 md:h-64">
      <div className="rolling-track">
        {loop.map((label, i) => (
          <div key={i} className="rolling-item text-slate-200/90">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
