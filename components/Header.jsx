"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import usePointerYDirection from "@/hooks/usePointerYDirection";

export default function Header() {
  const dir = usePointerYDirection({ threshold: 8 }); // "up" | "down"
  const squeezed = dir === "up";
  const [mobileOpen, setMobileOpen] = useState(false);

  // (nice-to-have) lock page scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  return (
    <header
      className={`sticky ${
        squeezed ? "top-3" : "top-0"
      } z-50 transition-[top] duration-300`}
    >
      <div
        className={[
          "mx-auto transform-gpu backdrop-blur-md transition-all duration-300",
          squeezed
            ? "max-w-4xl rounded-full px-4 py-2 bg-white/10 border border-white/15 shadow-[0_10px_30px_rgba(2,6,23,0.45)] ring-1 ring-white/10"
            : "max-w-7xl rounded-2xl px-6 py-4 bg-slate-900/60 border border-white/10 shadow-[0_8px_30px_rgba(2,6,23,0.35)]",
        ].join(" ")}
      >
        {/* GRID: logo | nav (centered) | CTA + hamburger (right) */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          {/* Left: Logo */}
          <Link href="/" aria-label="Home" className="flex items-center">
            <div className={squeezed ? "relative h-7 w-7" : "relative h-9 w-9"}>
              <Image
                src="/logo.png"
                alt="KLoc logo"
                fill
                sizes="36px"
                priority
              />
            </div>
          </Link>

          {/* Middle: Desktop Nav (CENTERED) */}
          <nav
            className={[
              "hidden md:flex justify-self-center items-center text-slate-200 transition-all duration-200",
              squeezed ? "gap-4 text-[13px]" : "gap-6 text-sm",
            ].join(" ")}
          >
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

          {/* Right: CTA + Hamburger (Hamburger only shows on mobile) */}
          <div className="justify-self-end flex items-center gap-2">
            <Link
              href="/contact"
              className={[
                "hidden sm:inline-block rounded-full border border-white/10 bg-white/10 hover:bg-white/20",
                "text-slate-100 transition-all duration-200",
                squeezed ? "px-3 py-1 text-[13px]" : "px-4 py-1.5 text-sm",
              ].join(" ")}
            >
              Get a Quote
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-controls="mobile-nav"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={[
                "md:hidden inline-flex items-center justify-center",
                "rounded-full border border-white/10 bg-white/10 hover:bg-white/20",
                squeezed ? "h-8 w-8" : "h-9 w-9",
              ].join(" ")}
            >
              {/* Icon: hamburger / close */}
              {mobileOpen ? (
                // X icon
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                </svg>
              ) : (
                // Hamburger
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav (slide-down panel) */}
        <nav
          id="mobile-nav"
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            "rounded-2xl border border-white/10 bg-slate-900/70 mt-2",
            mobileOpen ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="p-3">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/faq"
              className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/portfolio"
              className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="mt-2 block rounded-full border border-white/10 bg-white/10 px-4 py-2 text-center text-slate-100 hover:bg-white/20"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
