"use client";
import { useRouter } from "next/navigation";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";
const ATA = {
  title: "ATA",
  live: "#", // put your live URL
  dashboard: "/portfolio/ata", // or an external URL if you have one
  description: [
    "ATA is a headless Shopify marketplace that helps artists showcase, share, and monetize their work through a seamless discovery and commerce experience. Built for scale, ATA delivers fast, intuitive browsing and purchasing with a custom frontend powered by Shopify Storefront APIs, enabling a growing community of over 100k members and millions of concurrent visitors.",
    "We designed and developed the full platform with a mobile-first, headless architecture focused on speed and engagement. Core features include a custom subscription model, integrated event management, and real-time spam filtering and flagging to keep interactions safe. With secure admin dashboards, performance optimizations, and a clean user flow, ATA offers artists and audiences a modern, frictionless way to connect and transact.",
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
  screens: [],
};

export default function Page() {
  const router = useRouter();
  return (
    <CaseStudyOverlay open={true} onClose={() => router.back()} data={ATA} />
  );
}
