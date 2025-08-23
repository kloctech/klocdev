import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";

// a short list so Home can show 3 service cards as a teaser
const SERVICES_TEASER = [
  {
    title: "Complete Website",
    icon: "🪄",
    desc: "Modern, fast, SEO-ready websites built with Next.js.",
    features: ["Design → Dev → Deploy", "Responsive & Accessible"],
  },
  {
    title: "Front-End Development",
    icon: "⚡",
    desc: "Pixel-perfect React/Next.js front-ends with great UX.",
    features: ["Reusable components", "Performance optimization"],
  },
  {
    title: "AI/ML Integrations",
    icon: "🤖",
    desc: "Chatbots, content tools, and search using modern models.",
    features: ["OpenAI / HF", "RAG & vector search"],
  },
];

export default function Home() {
  return (
    <section className="relative mt-24 sm:mt-32 space-y-20">
      {/* ---- HERO ---- */}
      <h1 className="text-6xl font-bold tracking-tight sm:text-5xl text-center">
        Your Website <span className="text-violet-400">Brought to Life</span>
      </h1>
      <p className="mt-1 text-sm text-slate-500 sm:text-base text-center">
        Leading full-stack developers specializing in SaaS and AI platforms,
        delivering affordable and reliable website development services.
      </p>
      <Link
        href="/portfolio"
        className="mt-6 mx-auto flex w-fit items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-violet-600 shadow ring-1 ring-white/10 transition-colors duration-200 "
      >
        See our work
      </Link>

      {/* About on the Home page */}
      <AboutSection variant="embedded" />
      {/* ---- SERVICES (teaser on Home) ---- */}
      <section id="services">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Services</h2>
            <p className="mt-2 text-sm text-slate-400">
              A quick look at what we offer. See the full list on our Services
              page.
            </p>
          </div>
          <Link
            href="/services" // ← opens the full Services page
            className="hidden rounded-md border border-white/10 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/5 sm:inline-block"
          >
            View all services
          </Link>
        </div>

        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_TEASER.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/services"
            className="inline-block rounded-md border border-white/10 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-white/5"
          >
            View all services
          </Link>
        </div>
      </section>
      <TestimonialsSection />
      <div className="-mt-8 sm:-mt-0">
        <FAQ variant="embedded" />
      </div>
    </section>
  );
}
