"use client";
import { useRouter } from "next/navigation";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";

const LinkedSumo = {
  title: "LinkedSumo",
  live: "https://linkedsumo.com", // put your live URL
  dashboard: "/portfolio/linkedsumo", // or an external URL if you have one
  description: [
    "LinkedSumo is a LinkedIn content creation and management platform that helps individuals and agencies brainstorm, refine, and publish posts with ease. It supports multi-persona profiles, post scheduling, and tone controls aligned to specific LinkedIn growth goals.",
    "The web app is designed for speed, usability, and flexibility. It enables tailored content generation, multi-persona management, and workflow automation to streamline production. Agencies benefit from centralized persona handling, while individuals can optimize their personal brand with targeted messaging and scheduling.",
    "By pairing AI-assisted ideation with publishing tools, LinkedSumo makes content strategy more consistent, efficient, and impactful.",
  ].join("\n\n"),
  tech: ["Python", "PostgreSQL", "Next.js"],
  // Replace these with your actual PNGs (public/images/ata/*.png)
  screens: [
    "/images/Linkedsumo/ls1.png",
    "/images/Linkedsumo/ls2.png",
    "/images/Linkedsumo/ls3.png",
  ],
};

export default function Page() {
  const router = useRouter();
  return (
    <CaseStudyOverlay
      open={true}
      onClose={() => router.back()}
      data={LinkedSumo}
    />
  );
}
