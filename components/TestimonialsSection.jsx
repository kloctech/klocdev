// components/TestimonialsSection.jsx
"use client";
import { useMemo, useState } from "react";
import SquiggleUnderline from "@/components/SquiggleUnderline";

const TESTIMONIALS = [
  {
    name: "Ana",
    role: "Numerana",
    avatar: "https://i.pravatar.cc/80?img=5",
    quote: "I wanted to thank KLoc for all of the amazing work… UI/UX…",
  },
  {
    name: "Shashi",
    role: "Unipro",
    avatar: "https://i.pravatar.cc/80?img=33",
    quote:
      "Expert SaaS developers! Scalable, high-performing platform… Highly recommended!",
  },
  {
    name: "Smitha",
    role: "IWAS",
    avatar: "https://i.pravatar.cc/80?img=24",
    quote:
      "Amazing experience—excellent communication, efficiency, and a deep understanding of our goals.",
  },
  {
    name: "Stefanov",
    role: "IWAS",
    avatar: "https://i.pravatar.cc/80?img=5",
    quote: "The best agency I worked with. Clear, transparent and on-time.",
  },
  {
    name: "Hermann",
    role: "Auto-Auctions",
    avatar: "https://i.pravatar.cc/80?img=8",
    quote:
      "Amazing experience—excellent communication, efficiency, and a deep understanding of our goals.",
  },
  {
    name: "Romi",
    role: "Smart Tracker",
    avatar: "https://i.pravatar.cc/80?img=67",
    quote:
      "Excellent technical skills. We got a product better than we anticipated.",
  },
];

export default function TestimonialsSection({ className = "" }) {
  const PAGE_SIZE = 3;
  const [page, setPage] = useState(0);

  const pages = useMemo(
    () => {
      const out = [];
      for (let i = 0; i < TESTIMONIALS.length; i += PAGE_SIZE) {
        out.push(TESTIMONIALS.slice(i, i + PAGE_SIZE));
      }
      return out;
    },
    [
      /* static data; empty deps OK */
    ]
  );

  const canPrev = page > 0;
  const canNext = page < pages.length - 1;
  const go = (dir) =>
    setPage((p) => Math.max(0, Math.min(pages.length - 1, p + dir)));

  const Card = ({ t }) => (
    <div className="relative">
      <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-emerald-500/20 blur-2xl" />
      <article className="h-full rounded-3xl border border-white/10 bg-[#0E1423] px-6 py-6 text-slate-200">
        <div className="flex items-center gap-4">
          <img
            src={t.avatar}
            alt={`${t.name} avatar`}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
          />
          <div className="flex-1">
            <div className="text-lg font-semibold">{t.name}</div>
            <div className="text-sm text-slate-400">{t.role}</div>
          </div>
          <span className="text-slate-400 text-2xl">“</span>
        </div>
        <p className="mt-5 leading-relaxed text-slate-300">{t.quote}</p>
      </article>
    </div>
  );

  return (
    <section
      id="testimonials"
      className={`px-5 pt-12 pb-8 md:pt-14 md:pb-10 ${className}`}
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-100">
          What Our{" "}
          <SquiggleUnderline
            strokeClass="text-white/90"
            className="text-violet-400"
          >
            {" "}
            Clients
          </SquiggleUnderline>{" "}
          Say
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-slate-400">
          We bring a proven track record across industries.
        </p>
      </div>

      <div className="mx-auto mt-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pages[page]?.map((t, i) => (
            <Card key={`${page}-${i}-${t.name}`} t={t} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => go(-1)}
            disabled={!canPrev}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 disabled:opacity-40"
          >
            ←
          </button>
          <div className="flex items-center gap-1">
            {pages.map((_, i) => (
              <span
                key={i}
                className={`inline-block h-2 w-2 rounded-full ${
                  i === page ? "bg-violet-400" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            disabled={!canNext}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 disabled:opacity-40"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
