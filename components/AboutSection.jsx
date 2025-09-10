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
        {/* VISUAL CARD (tuned for phones) */}
        <div
          className="relative w-full overflow-hidden rounded-2xl
                h-[460px] sm:h-auto
                sm:aspect-[4/3] lg:aspect-[5/3] xl:aspect-[16/9]"
        >
          <Image
            src="/office.png"
            alt="Laptop and phones showing dev stack"
            fill
            priority
            sizes="(min-width:1280px) 60vw, (min-width:1024px) 70vw, (min-width:640px) 90vw, 100vw"
            className="
      object-cover
      object-[62%_54%]      /* phones: push view to the RIGHT and slightly DOWN */
      sm:object-[52%_50%]   /* tablets */
      lg:object-[55%_50%]   /* desktops */
    "
          />

          {/* dark gradient for readability */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"
          />

          {/* centered CTA */}
          <Link
            href="/contact"
            className="absolute left-1/2 -translate-x-1/2 z-10
               inline-block rounded-2xl bg-white/10 px-5 py-2.5
               text-sm md:text-base font-medium text-white ring-1 ring-white/10 hover:bg-white/15"
            style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            Get started now
          </Link>

          {/* decorative glows — hidden on very small screens */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden sm:block"
          >
            <div className="absolute -right-10 bottom-0 h-56 w-80 rounded-tl-[2rem] bg-gradient-to-br from-violet-500/30 to-indigo-700/20 blur-xl" />
            <div className="absolute -left-8 -bottom-10 h-40 w-40 rotate-12 rounded-2xl bg-indigo-400/20 blur-lg" />
            <div className="absolute right-24 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-xl" />
          </div>
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
