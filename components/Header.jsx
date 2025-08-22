"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded bg-violet-500"></span>
          <span className="text-sm font-semibold tracking-wide">YourBrand</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-violet-500 px-3 py-2 text-xs font-medium text-white hover:bg-violet-400"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded p-2 hover:bg-white/5"
        >
          <div className="h-0.5 w-5 bg-white mb-1" />
          <div className="h-0.5 w-5 bg-white mb-1" />
          <div className="h-0.5 w-5 bg-white" />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-white/10 md:hidden">
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
              className="mt-2 rounded bg-violet-500 px-3 py-2 text-xs font-medium text-white hover:bg-violet-400"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
