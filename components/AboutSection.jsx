// components/AboutSection.js
"use client";
import Link from "next/link";
import Image from "next/image";

import SquiggleUnderline from "@/components/SquiggleUnderline";

export default function AboutSection({ variant = "embedded" }) {
  const isStandalone = variant === "standalone";

  return (
    <>
      {/* HERO */}
      <section
        className={`mx-auto max-w-7xl px-4 pb-8 ${
          isStandalone ? "pt-20 sm:pt-28" : "pt-14"
        } text-center`}
      >
        <h1 className="mx-auto max-w-4xl text-2xl sm:text-5xl font-bold tracking-tight">
          Experienced{" "}
          <SquiggleUnderline
            strokeClass="text-white/90"
            className="text-violet-400"
          >
            Full-Stack
          </SquiggleUnderline>{" "}
          Developers
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">
          With 200+ projects delivered, we offer fast, reliable web development
          and unlimited revisions to bring your vision to life.
        </p>
      </section>

      {/* GRID: left stat card + right features */}
      <section
        className={`mx-auto grid max-w-7xl gap-6 px-4 ${
          isStandalone ? "pb-20" : "pb-12"
        } lg:grid-cols-2`}
      >
        <div className="relative mx-auto w-full max-w-3xl sm:max-w-5xl">
          <picture>
            {/* mobile first */}
            <source media="(max-width: 640px)" srcSet="/mob.png" />
            {/* default (tablet/desktop) */}
            <img
              src="/desk.png"
              alt="Experienced Full-Stack Developers"
              className="block w-full h-auto"
              loading="eager"
            />
          </picture>
        </div>

        {/* RIGHT: three feature cards */}
        <div className="grid gap-6">
          {[
            {
              title: "Full-Stack Development",
              text: "We deliver complete solutions, from design to development and AI/ML, with a proven track record of creating impactful, high-performing websites.",
            },
            {
              title: "Quick Delivery",
              text: "With over a decade of experience, we deliver innovative, timeless designs with a focus on customer satisfaction and speed.",
            },
            {
              title: "Unlimited Revisions",
              text: "With unlimited revisions and dedicated support, we ensure your vision and website is brought to life exactly as you imagine.",
            },
          ].map((f) => (
            <article
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-[#0f1626] p-6
             ring-1 ring-white/10 transition-all duration-300 ease-out
             hover:border-violet-400/30 hover:ring-violet-400/20 hover:bg-[#121a2d]
             motion-safe:hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10
             focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40 "
            >
              <h3 className="text-lg font-semibold text-white flex items-center gap-1">
                {f.title}
              </h3>
              <p className="mt-1 text-sm text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
                {f.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
