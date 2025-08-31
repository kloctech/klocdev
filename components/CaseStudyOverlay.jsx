// /components/CaseStudyLayout.jsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

/* Use your real site header if you have it:
   import Header from "@/components/Header";
   Then render <Header /> below instead of <KLocHeader /> */
function KLocHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight text-white">
          KLoc
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-200 sm:flex">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/about" className="hover:text-white">
            About Us
          </Link>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
          <Link href="/portfolio" className="hover:text-white">
            Portfolio
          </Link>
        </nav>
        <Link
          href="/quote"
          className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-medium text-white shadow hover:bg-emerald-600"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

function CloseButton({ href }) {
  const router = useRouter();
  const handle = () => (href ? router.push(href) : router.back());
  return (
    <button
      onClick={handle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
  // Split description into paragraphs
  const descBlocks = Array.isArray(data.description)
    ? data.description
    : String(data.description || "")
        .split("\n\n")
        .filter(Boolean);

  const hasScreens = Array.isArray(data.screens) && data.screens.length > 0;

  // Horizontal rail: map vertical wheel → horizontal scroll
  const stripRef = useRef(null);
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const onWheel = (e) => {
      // only transform if the user is primarily scrolling vertically
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    // Transparent overlay so your dark site background stays visible
    <div className="fixed inset-0 z-50 overflow-y-auto bg-transparent">
      {/* Use your real Header here for a perfect match */}
      {/* <Header /> */}
      <KLocHeader />

      {/* Centered content area */}
      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 pt-6 sm:pt-8 pb-10">
        {/* ONE continuous WHITE card that contains BOTH content and screenshots */}
        <section className="relative rounded-2xl border border-slate-200 bg-white shadow-xl">
          {/* Close on the card */}
          <div className="absolute right-4 top-4">
            <CloseButton href={data.closeHref} />
          </div>

          {/* Inner padding for the top content */}
          <div className="p-5 sm:p-7">
            {/* Breadcrumbs */}
            <nav className="mb-3 pr-14 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-slate-600">
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

            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              {data.title}
            </h1>

            {/* Description (justified) */}
            <div className="mt-4 text-[15.5px] leading-7 text-slate-800">
              {descBlocks.length ? (
                descBlocks.map((p, i) => (
                  <p
                    key={i}
                    style={{ textAlign: "justify" }}
                    className={i ? "mt-3" : ""}
                  >
                    {p}
                  </p>
                ))
              ) : (
                <p style={{ textAlign: "justify" }}>No description provided.</p>
              )}
            </div>

            {/* Tech Stack */}
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
          </div>

          {/* Divider only if screenshots exist */}
          {hasScreens && <div className="h-px w-full bg-slate-200" />}

          {/* Horizontal screenshots live INSIDE the same white card — no external gap */}
          {hasScreens && (
            <div className="pt-4 pb-5 sm:pb-6">
              <h2 className="px-5 sm:px-7 text-sm font-medium text-slate-700">
                Screenshots
              </h2>

              <div
                ref={stripRef}
                className="mt-3 px-5 sm:px-7 overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch]"
              >
                <div className="flex gap-5 pr-2">
                  {data.screens.map((src, i) => (
                    <figure
                      key={i}
                      className="shrink-0 w-[280px] sm:w-[340px] md:w-[420px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${data.title || "Project"} screenshot ${i + 1}`}
                        className="block w-full h-48 sm:h-56 md:h-64 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
