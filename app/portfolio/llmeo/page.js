"use client";

import { useRouter } from "next/navigation";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";

const LLMEO = {
  title: "LLMEO",
  live: "https://llmeo.app",
  dashboard: "/portfolio/llmeo", // or null
  description: `LLMEO is an AI-first brand-visibility platform that tracks how a brand is represented across major large language models. Visibility on platforms such as ChatGPT, Gemini, and Claude is continuously monitored to uncover gaps and opportunities in brand perception.

The platform is designed to scan leading AI models through a streamlined, three-step flow: brand and competitor setup, continuous model monitoring, and recommendation-driven optimization.

Insights are surfaced via alerts and dashboards to inform strategic actions.`,
  tech: ["Pydantic", "SQLAlchemy", "Celery", "RabbitMQ", "SvelteJS"],
  screens: [], // ok to be empty
};

export default function Page() {
  const router = useRouter();
  return <CaseStudyOverlay open onClose={() => router.back()} data={LLMEO} />;
}
