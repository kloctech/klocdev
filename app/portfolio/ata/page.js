"use client";
import { useRouter } from "next/navigation";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";

const ATA = {
  title: "ATA",
  live: "#", // put your live URL
  dashboard: "/portfolio/ata", // or an external URL if you have one
  description: [
    "ATA is a product engineering studio focused on modern web apps and AI-assisted tools.",
    "We built a modular Next.js codebase with a lightweight design system, reusable components, auth/roles, forms, and analytics. AI features include embedding-based search, smart tagging, and assistant-style actions.",
    "The result is a fast, accessible, privacy-aware app with clean DX for rapid feature delivery.",
  ].join("\n\n"),
  tech: [
    "ReactJS",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "ExpressJS",
    "PostgreSQL",
    "Prisma",
    "Stripe",
    "Framer Motion",
    "Figma",
  ],
  // Replace these with your actual PNGs (public/images/ata/*.png)
  screens: ["/wb1.webp", "/w2.webp", "/w3.png", "/w4.jpg"],
};

export default function Page() {
  const router = useRouter();
  return (
    <CaseStudyOverlay open={true} onClose={() => router.back()} data={ATA} />
  );
}
