import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-400">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded bg-violet-500"></span>
            <span className="font-semibold text-slate-200">YourBrand</span>
          </div>
          <nav className="flex gap-4">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
