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
    <section className="relative space-y-12 sm:space-y-16">
      {/* ---- HERO ---- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-72 bg-gradient-to-b from-violet-100/20 to-transparent blur-1xl"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Your Website <span className="text-violet-400">Brought to Life</span>
        </h1>
        <p className="mt-4 text-sm text-slate-400 sm:text-base">
          Full-stack development for SaaS, AI integrations, and fast, reliable sites.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/portfolio"
            className="rounded-md bg-violet-500 px-4 py-2 text-xs font-medium text-white hover:bg-violet-400"
          >
            See our work
          </Link>
       
        </div>
      </div>
         {/* About on the Home page */}
         <AboutSection variant="embedded" />
       {/* ---- SERVICES (teaser on Home) ---- */}
      <section id="services">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Services</h2>
            <p className="mt-2 text-sm text-slate-400">
              A quick look at what we offer. See the full list on our Services page.
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