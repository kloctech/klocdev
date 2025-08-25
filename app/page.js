import Link from "next/link";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import SplitText from "@/components/SplitText";
import RollingServices from "@/components/RollingServices";
import ServicesSection from "@/components/ServicesSection";
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
    <section className="relative mt-20 sm:mt-32 space-y-20">
      {/* ---- HERO ---- */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center leading-[0.9]">
        <SplitText
          text="Your Website"
          splitType="chars"
          delay={100}
          duration={0.6}
          className="inline-block"
        />
        <br />
        <span className="text-violet-400">Brought to Life</span>{" "}
      </h1>
      <p className="shiny-overlay mt-1 text-base sm:text-lg md:text-xl leading-relaxed text-slate-500 text-center">
        Leading full-stack developers specializing in SaaS and AI platforms,
        delivering affordable and reliable website development services.
      </p>
      <Link
        href="/portfolio"
        className="mt-6 mb-40 mx-auto flex w-fit items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-violet-600 shadow ring-1 ring-white/10 transition-colors duration-200"
      >
        See our work
      </Link>
      <AboutSection variant="embedded" />
      <ServicesSection />
      <TestimonialsSection />
      <FAQ variant="embedded" />
    </section>
  );
}
