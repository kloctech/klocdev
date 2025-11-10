"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function PageHeader({ liveHref = "#" }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromUrl = searchParams?.get("page") || "1";

  const handleClose = () => {
    // If we actually came from the portfolio grid inside the app, go back (keeps scroll)
    if (typeof document !== "undefined" && document.referrer) {
      try {
        const ref = new URL(document.referrer);
        if (
          ref.origin === window.location.origin &&
          ref.pathname.startsWith("/portfolio")
        ) {
          router.back();
          return;
        }
      } catch {
        /* ignore */
      }
    }
    // Fallback: jump to the correct portfolio page from the URL
    router.push(`/portfolio?page=${pageFromUrl}`);
  };

  return (
    <div className="mb-6 flex items-center justify-between">
      {/* Left: breadcrumb + Live */}
      <nav className="flex items-center gap-2 text-sm">
        <Link href="/" className="text-slate-600 hover:underline">
          Home
        </Link>
        <span className="text-slate-400">/</span>
        <span className="text-slate-600">Dashboard</span>
        <span className="mx-2 inline-block h-1 w-1 rounded-full bg-slate-300" />
        <a
          href={liveHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-emerald-700"
        >
          Live <span aria-hidden>↗</span>
        </a>
      </nav>

      {/* Right: close button */}
      <button
        onClick={handleClose}
        aria-label="Close"
        className="h-9 w-9 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100"
      >
        ✕
      </button>
    </div>
  );
}
