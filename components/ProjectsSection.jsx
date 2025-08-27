"use client";
import Link from "next/link";
import { Eye, ExternalLink } from "lucide-react";
import SquiggleUnderline from "@/components/SquiggleUnderline";
import Image from "next/image";

// Put these files in /public/logos (no /public prefix when importing)
const LOGOS = {
  ATA: "/logos/ATA.png",
  LLMEO: "/logos/LLMEO.png",
  LinkedSumo: "/logos/LinkedSumo.png",
  OpMax: "/logos/OpMax.png",
  SmartTracker: "/logos/SmartTracker.png",
  Zentrova: "/logos/Zentrova.png",
};

const PROJECTS = [
  { name: "ATA", live: "#", gradientFrom: "#16a34a", gradientTo: "#0ea5e9" },
  { name: "LLMEO", live: "#", gradientFrom: "#0ea5e9", gradientTo: "#1d4ed8" },
  {
    name: "LinkedSumo",
    live: "#",
    gradientFrom: "#1e40af",
    gradientTo: "#2563eb",
  },
  { name: "OpMax", live: "#", gradientFrom: "#6366f1", gradientTo: "#ec4899" },
  {
    name: "SmartTracker",
    live: "/Home",
    gradientFrom: "#ef4444",
    gradientTo: "#f59e0b",
  },
  {
    name: "Zentrova",
    live: "#",
    gradientFrom: "#06b6d4",
    gradientTo: "#3b82f6",
  },
];

export default function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 !pt-0 !mt-0">
      <h2 className="text-center text-3xl sm:text-4xl font-bold">
        What We’ve Been{" "}
        <SquiggleUnderline
          strokeClass="text-white/90"
          className="text-violet-400"
        >
          Up To
        </SquiggleUnderline>
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        {PROJECTS.map((p) => {
          const src = LOGOS[p.name] ?? "/logos/default.png";
          return (
            <article
              key={p.name}
              className="w-full max-w-sm group rounded-2xl border border-white/10 bg-slate-900/50 p-4
                         shadow-[0_8px_30px_rgba(2,6,23,0.35)]
                         backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Card header */}
              <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                <Link
                  href={p.live ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold hover:text-white"
                  aria-label={`Open ${p.name}`}
                >
                  <Image
                    src={src}
                    alt={`${p.name} logo`}
                    width={18}
                    height={18}
                    className="shrink-0"
                  />
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

              {/* Banner: centered logo + big name */}
              <div
                className="relative h-44 rounded-xl overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`,
                }}
              >
                <div className="absolute inset-0 grid place-items-center">
                  <div className="flex items-center gap-3">
                    {/* Logo */}
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                      <Image
                        src={src}
                        alt={`${p.name} banner logo`}
                        fill
                        className="object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,.6)]"
                        priority
                      />
                      {/* If the logo is dark, add: className="object-contain brightness-0 invert" */}
                    </div>
                    {/* Name */}
                    <span className="text-white/95 text-2xl font-semibold tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,.6)]">
                      {p.name}
                    </span>
                  </div>
                </div>
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
          );
        })}
      </div>
    </section>
  );
}
