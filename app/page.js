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
    <section className="relative mt-20 sm:mt-32 space-y-10">
      {/* ---- HERO ---- */}
      <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold tracking-tight text-center leading-[0.9]">
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
      <p className="mt-1 text-sm sm:text-base leading-snug text-center font-medium text-slate-300">
        <span className="shiny-stable">
          Leading full-stack developers specializing in SaaS and AI platforms
          delivering,
          <br />
          affordable and reliable website development services.
        </span>
      </p>
      <Link
        href="/portfolio"
        className="mt-6 mb-40 mx-auto flex w-fit items-center justify-center rounded-xl bg-white px-5 py-2.5 text-base sm:text-lg font-semibold text-violet-600 shadow-md ring-1 ring-white/10 transition-colors duration-200"
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
