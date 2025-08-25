import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "Services — KLoc",
  description:
    "Complete website development: UI/UX, front-end, back-end, and AI/ML.",
};

const CARDS = [
  {
    title: "Complete Website",
    icon: "🪄",
    desc: "Design → Dev → Deploy. Modern, fast, SEO-ready.",
    features: ["Next.js", "Responsive", "Analytics"],
  },
  {
    title: "Front-End Development",
    icon: "⚡",
    desc: "Pixel-perfect React/Next.js with great UX.",
    features: ["Components", "Performance", "Accessibility"],
  },
  {
    title: "AI/ML Integrations",
    icon: "🤖",
    desc: "Chatbots, content tools, search (RAG).",
    features: ["OpenAI / HF", "Vector search", "Embeddings"],
  },
];

export default function ServicesPage() {
  return (
    <section className="relative pt-0 sm:pt-0 pb-10">
      {/* HERO */}
      <ServicesSection />
    </section>
  );
}
