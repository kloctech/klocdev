"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import usePointerYDirection from "@/hooks/usePointerYDirection"; // NEW

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // NEW: listen to pointer direction ('up' | 'down')
  const dir = usePointerYDirection();
  const squeezed = dir === "up";

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b border-white/10",
        "bg-slate-950/80 backdrop-blur",
        "transition-all duration-200 ease-out", // smooth header transitions
        squeezed ? "shadow-md" : "shadow-none", // optional shadow when squeezed
      ].join(" ")}
    >
      <div
        className={[
          "relative mx-auto max-w-7xl px-4 flex items-center",
          // height & squeeze animation live here:
          squeezed ? "py-1 sm:py-1.5" : "py-3 sm:py-4",
          "transform transition-transform duration-200",
          // If your Tailwind supports axis scales, this squeezes only vertically:
          "origin-top",
          squeezed ? "scale-y-95" : "scale-y-100",
          // If axis scale doesn't work in your setup, you can replace with:
          // squeezed ? "scale-95" : "scale-100",
        ].join(" ")}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png" // /public/logo.png
            alt="YourBrand"
            width={32}
            height={32}
            className="md:h-12 md:w-12"
            priority
          />
          <span className="text-sm font-semibold tracking-wide"></span>
        </Link>

        {/* Center: nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-purple-900"
        >
          Get a Quote
        </Link>

        {/* Right: Mobile menu button */}
        <button
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 rounded p-2 hover:bg-white/5"
        >
          <div className="mb-1 h-0.5 w-5 bg-white" />
          <div className="mb-1 h-0.5 w-5 bg-white" />
          <div className="h-0.5 w-5 bg-white" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" className="border-t border-white/10 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-purple-900"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
