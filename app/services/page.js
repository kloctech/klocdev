import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services — YourBrand",
  description: "Full-stack web development, UI/UX, AI/ML integrations, and more.",
};

const SERVICES = [
  {
    title: "Complete Website",
    icon: "🪄",
    desc: "Modern, fast, SEO-ready websites built with Next.js. From idea to launch.",
    features: ["Design → Dev → Deploy", "Responsive & Accessible", "Analytics & SEO basics"],
  },
  {
    title: "Front-End Development",
    icon: "⚡",
    desc: "Pixel-perfect React/Next.js front-ends with great UX and performance.",
    features: ["Reusable components", "Animation & micro-interactions", "Lighthouse optimization"],
  },
  {
    title: "Back-End / APIs",
    icon: "🧩",
    desc: "Secure APIs, databases, auth, and server actions—ready for production.",
    features: ["REST/GraphQL", "Postgres/Prisma", "Auth & Role-based access"],
  },
  {
    title: "AI/ML Integrations",
    icon: "🤖",
    desc: "Chatbots, content tools, embeddings search, and workflow automation.",
    features: ["OpenAI / HF models", "RAG & vector search", "Rate limits & caching"],
  },
  {
    title: "UI/UX & Branding",
    icon: "🎨",
    desc: "Wireframes, design systems, and brand-aligned visuals you can scale.",
    features: ["Design system tokens", "Component libraries", "Hand-off to dev"],
  },
  {
    title: "Maintenance & Support",
    icon: "🛟",
    desc: "Ongoing updates, fixes, and small feature work under a monthly plan.",
    features: ["Monitoring & alerts", "Bug fixes & patches", "Small features & tweaks"],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Services <span className="text-violet-400">we provide</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
          Choose a package or mix-and-match. Everything is built with performance,
          accessibility, and maintainability in mind.
        </p>
      </section>

      {/* Cards grid */}
      <section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 p-6 text-center ring-1 ring-white/10">
        <h2 className="text-2xl font-semibold">
          Not sure what you need? Let’s talk.
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Tell us your idea and we’ll suggest the simplest path to launch.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block rounded-md bg-violet-500 px-4 py-2 text-xs font-medium text-white hover:bg-violet-400"
        >
          Book a free call
        </a>
      </section>
    </div>
  );
}
