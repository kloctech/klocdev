"use client";
import Link from "next/link";

// Simple logo mark similar to the screenshot
function LogoMark(props) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="h-8 w-8" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M8 11 L18 6 L32 13" />
        <path d="M8 19 L18 14 L32 21" />
        <path d="M8 27 L18 22 L32 29" />
      </g>
    </svg>
  );
}

export default function Footer({
  brand = { primary: "#8b5cf6", accent: "#a78bfa", bg: "#0a0a23" },
  brandName = "KLoc",
}) {
  const year = new Date().getFullYear();

  const nav = {
    product: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
    company: [{ label: "FAQ", href: "/faq" }],
    legal: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  };

  const socials = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: () => (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
          <path
            fill="currentColor"
            d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.11h.05c.53-1 1.84-2.11 3.79-2.11 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.23c0-1.73-.03-3.95-2.41-3.95-2.42 0-2.8 1.89-2.8 3.83V24h-4V8.5z"
          />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com",
      icon: () => (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
          <path
            fill="currentColor"
            d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.11-.76.09-.74.09-.74 1.22.09 1.86 1.26 1.86 1.26 1.09 1.86 2.86 1.32 3.56 1.01.11-.79.43-1.32.78-1.63-2.67-.3-5.48-1.34-5.48-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.95.44.38.83 1.11.83 2.24v3.32c0 .32.21.69.83.58A12 12 0 0 0 12 .5z"
          />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com",
      icon: () => (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
          <path
            fill="currentColor"
            d="M18.9 1.5h3.04l-6.64 7.59 7.8 10.41h-6.1l-4.78-6.24-5.47 6.24H3.72l7.11-8.1L3.34 1.5h6.28l4.3 5.7 5-5.7zM17.84 18.6h1.69L7.26 3.35H5.45l12.39 15.25z"
          />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: () => (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
          <path
            fill="currentColor"
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-inherit text-slate-200">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 left-1/3 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: brand.primary + "33" }}
        />
        <div
          className="absolute -bottom-24 right-1/4 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: brand.accent + "22" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12">
        {/* Brand */}
        <div className="mb-8 flex items-center gap-3">
          <span className="" style={{ color: brand.primary }}>
            <LogoMark />
          </span>
          <span
            className="text-lg font-semibold tracking-wider"
            style={{ color: brand.accent }}
          >
            {brandName}
          </span>
        </div>

        {/* Top grid: CTA + link columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* CTA card */}
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <p className="text-lg text-slate-300">
                Bring your website to life.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow focus:outline-none focus-visible:ring-2"
                  style={{ backgroundColor: brand.primary }}
                >
                  Book a call
                </Link>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-300">
                  Product
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  {nav.product.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-slate-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-300">
                  Company
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  {nav.company.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-slate-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-300">Legal</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  {nav.legal.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-slate-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {brandName}. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-white/20"
                  style={{ color: "#e5e7eb" }}
                >
                  <span className="sr-only">{label}</span>
                  <div className="group-hover:text-white">
                    <Icon />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
