"use client";
import Link from "next/link";
import { Eye, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    name: "PrivacyBot",
    live: "#",
    gradientFrom: "#16a34a",
    gradientTo: "#0ea5e9",
  },
  {
    name: "Anchorize",
    live: "#",
    gradientFrom: "#0ea5e9",
    gradientTo: "#1d4ed8",
  },
  {
    name: "evala.ai",
    live: "#",
    gradientFrom: "#1e40af",
    gradientTo: "#2563eb",
  },
  {
    name: "SuperTip",
    live: "#",
    gradientFrom: "#6366f1",
    gradientTo: "#ec4899",
  },
  { name: "Mentr", live: "#", gradientFrom: "#ef4444", gradientTo: "#f59e0b" },
  { name: "Front", live: "#", gradientFrom: "#06b6d4", gradientTo: "#3b82f6" },
];

export default function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 !pt-0 !mt-0">
      <h2 className="text-center text-3xl sm:text-4xl font-bold">
        What We’ve Been{" "}
        <span className="underline decoration-violet-400/70 underline-offset-4">
          Up To
        </span>
      </h2>

      {/* Center the grid; no horizontal offsets */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        {PROJECTS.map((p) => (
          <article
            key={p.name}
            className="w-full max-w-sm group rounded-2xl border border-white/10 bg-slate-900/50 p-4
                       shadow-[0_8px_30px_rgba(2,6,23,0.35)]
                       backdrop-blur transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Header */}
            <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
              <Link
                href={p.live ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold hover:text-white"
                aria-label={`Open ${p.name}`}
              >
                {p.name}
                <ExternalLink
                  className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100"
                  aria-hidden
                />
              </Link>

              <Link
                href={p.live ?? "#"}
                className="inline-flex items-center gap-1 hover:text-white"
              >
                <Eye className="h-4 w-4" aria-hidden />
                <span>View</span>
              </Link>
            </div>

            {/* Banner */}
            <div
              className="relative h-44 rounded-xl overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`,
              }}
            >
              <span className="absolute inset-0 grid place-items-center text-white/95 text-2xl font-semibold tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,.6)]">
                {p.name}
              </span>
            </div>

            {/* Footer */}
            <div className="mt-3 flex justify-end">
              <Link
                href={p.live ?? "#"}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/10"
              >
                Open
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
