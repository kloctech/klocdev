"use client";
import Link from "next/link";
import usePointerYDirection from "@/hooks/usePointerYDirection";
import Image from "next/image";
export default function Header() {
  const dir = usePointerYDirection({ threshold: 8 }); // "up" | "down"
  const squeezed = dir === "up";

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
        {/* GRID: logo | nav (centered) | CTA (right) */}
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

          {/* Middle: Nav (CENTERED) */}
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

          {/* Right: CTA */}
          <Link
            href="/quote"
            className={[
              "justify-self-end rounded-full border border-white/10 bg-white/10 hover:bg-white/20",
              "text-slate-100 transition-all duration-200",
              squeezed ? "px-3 py-1 text-[13px]" : "px-4 py-1.5 text-sm",
            ].join(" ")}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
