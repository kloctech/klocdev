"use client";
import { useRouter } from "next/navigation";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";

const LinkedSumo = {
  title: "LinkedSumo",
  live: "https://linkedsumo.com", // put your live URL
  dashboard: "/portfolio/linkedsumo", // or an external URL if you have one
  description: [
    "LinkedSumo is a LinkedIn content creation and management platform designed to help users brainstorm, refine, and publish posts with ease. Built for both individuals and agencies, it enables the creation of multiple personas, scheduling of posts, and tone customization to align with specific LinkedIn promotion goals.",
    "A modern, web-based experience was developed with a focus on speed, usability, and flexibility. The platform supports tailored content generation, multi-persona management, and workflow automation to streamline post creation. Agencies benefit from centralized persona handling, while individuals can optimize their personal brand with targeted messaging and scheduling.",
    "By combining AI-assisted ideation with publishing tools, LinkedSumo transforms how users engage on LinkedIn—making content strategy more consistent, efficient, and impactful.",
  ].join("\n\n"),
  tech: ["Python", "Postgres", "NextJS"],
  // Replace these with your actual PNGs (public/images/ata/*.png)
  screens: [],
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
