// app/components/ProjectsSection.jsx
"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import SquiggleUnderline from "@/components/SquiggleUnderline";

/* ---------- DATA ---------- */
const LOGOS = {
  ATA: "/logos/ATA.png",
  LLMEO: "/logos/LLMEO.png",
  LinkedSumo: "/logos/LinkedSumo.png",
  OpMax: "/logos/OpMax.png",
  SmartTracker: "/logos/SmartTracker.png",
  Zentrova: "/logos/Zentrova.png",
  OverseaCourierService: "/logos/oversea.png",
  MarketwiseDiscountNinza: "/logos/MarketwiseDiscountNinza.png",
  MarketwiseCredify: "/logos/MarketwiseCredify.png",
  MetafyEditor: "/logos/MetafyEditor.png",
  MetafyTagsMadeSimple: "/logos/MetafyTagsMadeSimple.png",
  mLoyalMadeSimple: "/logos/mLoyalMadeSimple.png",
  PackAttack: "/logos/PackAttack.png",
  SmokingCat: "/logos/SmokingCat.png",
  Ewards: "/logos/Ewards.png",
  Unipro:"/logos/unipro.png",
};

const PROJECTS = [
  { id: "llmeo", name: "LLMEO", live: "#", gradientFrom: "#0ea5e9", gradientTo: "#1d4ed8" },
  { id: "zentrova", name: "Zentrova", live: "#", gradientFrom: "#06b6d4", gradientTo: "#3b82f6" },
  { id: "opmax", name: "OpMax", live: "#", gradientFrom: "#6366f1", gradientTo: "#ec4899" },
  { id: "ata", name: "ATA", live: "#", gradientFrom: "#16a34a", gradientTo: "#0ea5e9" },
  { id: "linkedsumo", name: "LinkedSumo", live: "#", gradientFrom: "#1e40af", gradientTo: "#2563eb" },
  { id: "smarttracker", name: "SmartTracker", live: "/Home", gradientFrom: "#ef4444", gradientTo: "#f59e0b" },
  { id: "overseacourierservice", name: "OverseaCourierService", live: "#", gradientFrom: "#ef4444", gradientTo: "#f59e0b" },
  { id: "marketwise-discount-ninza", name: "MarketwiseDiscountNinza", live: "#", gradientFrom: "#16a34a", gradientTo: "#0ea5e9" },
  { id: "marketwise-credify", name: "MarketwiseCredify", live: "#", gradientFrom: "#1e40af", gradientTo: "#2563eb" },
  { id: "metafy-editor", name: "MetafyEditor", live: "#", gradientFrom: "#6366f1", gradientTo: "#ec4899" },
  { id: "metafy-tags-made-simple", name: "MetafyTagsMadeSimple", live: "#", gradientFrom: "#0ea5e9", gradientTo: "#1d4ed8" },
  { id: "mloyal-made-simple", name: "mLoyalMadeSimple", live: "#", gradientFrom: "#06b6d4", gradientTo: "#3b82f6" },
  { id: "pack-attack", name: "PackAttack", live: "#", gradientFrom: "#6366f1", gradientTo: "#ec4899" },
  { id: "smoking-cat", name: "SmokingCat", live: "#", gradientFrom: "#1e40af", gradientTo: "#2563eb" },
  { id: "ewards", name: "Ewards", live: "/Home", gradientFrom: "#ef4444", gradientTo: "#f59e0b" },
  { id: "unipro", name: "Unipro", live: "/Home", gradientFrom: "#44ef5bff", gradientTo: "#0babf5ff" },
];

/* ---------- one-line status text for each card ---------- */
const STATUSES = {
  llmeo: "Headless Shopify Platform for Artists",
  zentrova: "Curated Product Discovery Platform ",
  opmax: "Virtual inventory and ERP integration",
  ata: "Headless Shopify Marketplace for Artists",
  linkedsumo: "Do Not Know",
  smarttracker: "QR Tag Generation and Managment Platform",
  overseacourierservice: "Automated Logistics Management for Middle East",
  "marketwise-discount-ninza": "Market-Specific Discount Management",
  "marketwise-credify": "Automated Store Credit Distribution",
  "metafy-editor": "Catalog Managment",
  "metafy-tags-made-simple": "Bulk Tag and Metafield Management",
  "mloyal-made-simple": "Offline-to-Online Loyalty Integration",
  "pack-attack": "Shopify Store Managment",
  "smoking-cat": "Intelligent Odoo-Shopify Synchronization",
  ewards: "Comprehensive Loyalty Solution for Shopify",
  unipro: "Order Managment System for School Uniform",
};

/* ---------- helpers ---------- */
const withSoftBreaks = (s) => s.replace(/([a-z])([A-Z])/g, "$1\u200b$2");
const isLongName = (s) => s.replace(/\u200b/g, "").length >= 18;
const PAGE_SIZE = 6;

export default function ProjectsSection({ initialPage = "1" }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // derive starting page from URL (or from parent-provided initialPage)
  const derivedInitial = useMemo(
    () => Number(searchParams?.get("page") ?? initialPage) || 1,
    [searchParams, initialPage]
  );

  // state page, seeded from URL
  const [page, setPage] = useState(derivedInitial);

  const totalPages = Math.max(1, Math.ceil(PROJECTS.length / PAGE_SIZE));
  const clampedPage = Math.min(Math.max(1, page), totalPages);

  // slice items for current page
  const items = useMemo(() => {
    const start = (clampedPage - 1) * PAGE_SIZE;
    return PROJECTS.slice(start, start + PAGE_SIZE);
  }, [clampedPage]);

  const canPrev = clampedPage > 1;
  const canNext = clampedPage < totalPages;

  const goPrev = () => setPage((p) => (p > 1 ? p - 1 : p));
  const goNext = () => setPage((p) => (p < totalPages ? p + 1 : p));

  // Keep URL ?page= in sync with current page
  useEffect(() => {
    if (typeof window === "undefined") return;
    const current = new URLSearchParams(window.location.search).get("page") || "1";
    if (current !== String(clampedPage)) {
      router.replace(`${pathname}?page=${clampedPage}`, { scroll: false });
    }
  }, [clampedPage, pathname, router]);

  // If user navigates with back/forward and ?page= changes, update state
  useEffect(() => {
    const urlPage = Number(searchParams?.get("page") || "1") || 1;
    if (urlPage !== page) setPage(urlPage);
  }, [searchParams, page]);

  // Keyboard ← / → navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]); // include handlers so they stay fresh

  return (
    <section className="mx-auto max-w-7xl px-4 !pt-0 !mt-0">
      <h2 className="text-center text-3xl sm:text-4xl font-bold">
        What We’ve Been{" "}
        <SquiggleUnderline strokeClass="text-white/90" className="text-violet-400">
          Up To
        </SquiggleUnderline>
      </h2>

      {/* cards grid */}
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {items.map((p) => {
          const logoKey = p.name.replace(/\u200b/g, "");
          const src = LOGOS[logoKey] ?? "/logos/default.png";
          const long = isLongName(p.name);
          const statusText = STATUSES[p.id] ?? "";

          return (
            <article
              key={p.id}
              className="w-full max-w-sm group rounded-2xl border border-white/10 bg-slate-900/50 p-4
                         shadow-[0_8px_30px_rgba(2,6,23,0.35)]
                         backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              {/* header row (eye icon etc) */}
              <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                <Link
                  href={`/portfolio/${p.id}?page=${clampedPage}`}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  <Eye className="h-4 w-4" aria-hidden />
                  <span className="sr-only">View {p.name}</span>
                </Link>
              </div>

              {/* -------- BANNER AREA -------- */}
              <div className="relative h-44 rounded-xl overflow-hidden">
                {/* FRONT FACE */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${p.gradientFrom}, ${p.gradientTo})`,
                  }}
                >
                  <div className="absolute inset-0 grid place-items-center">
                    <div
                      className={[
                        "flex sm:flex-row flex-col sm:items-start items-center justify-center px-3 sm:text-left text-center",
                        long ? "gap-1 sm:gap-2" : "gap-2 sm:gap-3",
                      ].join(" ")}
                    >
                      {/* Logo */}
                      <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 sm:self-start">
                        <Image
                          src={src}
                          alt={`${p.name} banner logo`}
                          fill
                          className="object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,.6)]"
                          priority
                        />
                      </div>

                      {/* Title */}
                      <span
                        className="text-white/95 font-semibold tracking-wide leading-tight
                                   break-words hyphens-auto [text-wrap:balance]
                                   [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden
                                   [font-size:clamp(1rem,2.2vw,1.5rem)]
                                   max-w-[18ch] sm:max-w-[20ch]"
                      >
                        {withSoftBreaks(p.name)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* BACK FACE (hover / status view) */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100
                             bg-slate-900/90"
                  style={{
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.6), inset 0 0 40px rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <p
                      className="text-white font-semibold leading-snug
                                 [font-size:clamp(1rem,2.2vw,1.25rem)]
                                 max-w-[20ch]"
                    >
                      {statusText}
                    </p>
                  </div>
                </div>
              </div>
              {/* -------- END BANNER -------- */}

              <div className="mt-3 flex justify-end" />
            </article>
          );
        })}
      </div>

      {/* pagination */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          onClick={goPrev}
          disabled={!canPrev}
          className="inline-flex items-center rounded-full border border-white/10 px-3 py-2
                     text-slate-200/80 hover:text-white hover:border-white/30
                     disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <span className="tabular-nums text-slate-200/90">
          {clampedPage} / {totalPages}
        </span>

        <button
          onClick={goNext}
          disabled={!canNext}
          className="inline-flex items-center rounded-full border border-white/10 px-3 py-2
                     text-slate-200/80 hover:text-white hover:border-white/30
                     disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
