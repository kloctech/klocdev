"use client";
import { useEffect } from "react";
import Link from "next/link";

/** Small chip badge */
function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

/** Two-column full-screen overlay with independent scroll on both sides */
export default function CaseStudyOverlay({ open, onClose, data }) {
  // lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* dialog */}
      <section
        role="dialog"
        aria-modal="true"
        className="relative mx-auto h-[min(96vh,900px)] w-[min(1200px,96vw)] overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        {/* close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
        >
          ✕
        </button>

        {/* grid container: no outer scroll; each column scrolls */}
        <div className="grid h-full grid-cols-1 md:grid-cols-[430px_minmax(0,1fr)]">
          {/* LEFT: content (scrollable) */}
          <aside className="overflow-y-auto border-r border-slate-200 px-6 py-6 md:px-7">
            {/* breadcrumbs */}
            <div className="mb-3 flex items-center gap-2 text-sm text-slate-600">
              {/* Live (external) */}
              {data.live && (
                <>
                  <a
                    href={data.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-emerald-600 hover:underline"
                  >
                    Live
                  </a>
                  <span className="text-slate-400">•</span>
                </>
              )}
              {/* Home (internal) */}
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="text-slate-400">/</span>
              {/* Dashboard (internal or external) */}
              {data.dashboard?.startsWith("http") ? (
                <a
                  href={data.dashboard}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:underline"
                >
                  Dashboard
                </a>
              ) : (
                <Link href={data.dashboard ?? "#"} className="hover:underline">
                  Dashboard
                </Link>
              )}
            </div>

            {/* title */}
            <h2 className="text-2xl font-bold text-slate-900">{data.title}</h2>

            {/* description */}
            <div className="case-desc mt-4 max-w-none text-sm leading-6">
              {data.description.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* tech stack */}
            {data.tech?.length > 0 && (
              <>
                <h3 className="mt-6 text-sm font-semibold text-slate-900">
                  Tech Stack
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {data.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </>
            )}
          </aside>

          {/* RIGHT: screenshots (scrollable) */}
          <main className="overflow-y-auto">
            <div className="grid gap-6 p-6 md:p-7">
              {data.screens?.map((src, i) => (
                <figure
                  key={i}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${data.title} screenshot ${i + 1}`}
                    className="block w-full"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
