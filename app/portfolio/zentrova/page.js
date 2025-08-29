"use client";
import { useRouter } from "next/navigation";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";

const Zentrova = {
  title: "Zentrova",
  live: "#", // put your live URL
  dashboard: "/portfolio/zentrova", // or an external URL if you have one
  description: [
    "Zentrova is a curated product listing platform that helps users discover, compare, and access the best tools and services across categories. Designed for simplicity and speed, Zentrova offers a clean, searchable interface, making it easy for users to find verified products without friction.",
    "Zentrova is a modern web app with a responsive, mobile-first design, optimized for quick navigation and high engagement. Features include structured product categorization, smart search and filtering, and link-based product access for a seamless discovery experience. With a scalable architecture and intuitive UI, Zentrova serves as a reliable hub for product exploration and decision-making.",
  ].join("\n\n"),
  tech: ["NextJS", "Supabase"],
  screens: [],
};

export default function Page() {
  const router = useRouter();
  return (
    <CaseStudyOverlay
      open={true}
      onClose={() => router.back()}
      data={Zentrova}
    />
  );
}
