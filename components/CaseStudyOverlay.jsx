"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

/** Close button that lives INSIDE the white sheet header bar */
function CloseButton({ href }) {
  const router = useRouter();
  const handle = () => (href ? router.push(href) : router.back());
  return (
    <button
      onClick={handle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 backdrop-blur shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      aria-label="Close"
      title="Close"
      type="button"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-slate-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  );
}

export default function CaseStudyLayout({ data = {} }) {
  // Lock page scroll while the sheet is open
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, []);

  const descBlocks = Array.isArray(data.description)
    ? data.description
    : String(data.description || "")
        .split("\n\n")
        .filter(Boolean);

  const hasScreens = Array.isArray(data.screens) && data.screens.length > 0;

  return (
    /**
     * FIXED WHITE SHEET between header/footer:
     * - top/bottom are offset by CSS vars so it never overlaps
     * - it has its OWN scroll (overflow-y-auto)
     * - z-40 keeps header (z-50) above; footer can also sit above if needed
     */
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-x-0 z-40 overflow-y-auto bg-white ring-1 ring-slate-200"
      style={{
        top: "var(--header-h, 64px)",
        bottom: "var(--footer-h, 0px)",
      }}
    >
      {/* Sheet top bar with the Close button */}
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-3">
          <CloseButton href={data.closeHref} />
        </div>
      </div>

      {/* Sheet content */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumbs / Links */}
        <nav className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          {data.dashboard && (
            <>
              <span className="text-slate-400">/</span>
              {String(data.dashboard).startsWith("http") ? (
                <a
                  href={data.dashboard}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:underline"
                >
                  Dashboard
                </a>
              ) : (
                <Link href={data.dashboard} className="hover:underline">
                  Dashboard
                </Link>
              )}
            </>
          )}

          {data.live && (
            <>
              <span className="text-slate-400">•</span>
              <a
                href={data.live}
                target="_blank"
                rel="noreferrer noopener"
                className="font-semibold text-emerald-600 hover:underline"
              >
                Live ↗
              </a>
            </>
          )}
        </nav>

        <h1 className="text-3xl font-bold text-slate-900">{data.title}</h1>

        {/* 2 cols if screenshots exist; otherwise single column */}
        <div
          className={`mt-6 grid gap-8 ${
            hasScreens
              ? "grid-cols-1 lg:grid-cols-[430px_minmax(0,1fr)]"
              : "grid-cols-1"
          }`}
        >
          {/* LEFT (sticky within the sheet’s scroll) */}
          <aside className={hasScreens ? "lg:sticky lg:top-6 self-start" : ""}>
            <div className="max-w-none text-sm leading-6 text-slate-700">
              {descBlocks.length > 0 ? (
                descBlocks.map((p, i) => (
                  <p key={i} className={i ? "mt-4" : ""}>
                    {p}
                  </p>
                ))
              ) : (
                <p>No description provided.</p>
              )}
            </div>

            {Array.isArray(data.tech) && data.tech.length > 0 && (
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

          {/* RIGHT: screenshots (scroll with the sheet) */}
          {hasScreens && (
            <section>
              <div className="grid gap-6">
                {data.screens.map((src, i) => (
                  <figure
                    key={i}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${data.title || "Project"} screenshot ${i + 1}`}
                      className="block h-auto w-full"
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
