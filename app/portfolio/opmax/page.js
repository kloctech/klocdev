"use client";
import { useRouter } from "next/navigation";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";

const ATA = {
  title: "OpMax",
  live: "#", // put your live URL
  dashboard: "/portfolio/ata", // or an external URL if you have one
  description: [
    "OpMax is a custom Shopify app designed for a sustainable fashion brand that transforms upcycled saris into contemporary, fashion-forward products. Built to streamline operations and scale global reach, OpMax integrates directly with ERP and shipping systems while powering virtual inventory cataloging and syncing for seamless product availability across geographies.",
    "We developed a tailored solution that automates repetitive workflows, introduces smart notifications, and enforces streamlined data governance to reduce operational friction. The results were transformative: a 30% reduction in inventory holding, 6× increase in size availability, 120% revenue growth post-launch, and 80% time savings on core operations—empowering the brand to scale efficiently while staying true to its sustainable mission.",
  ].join("\n\n"),
  tech: ["React", "Gadget", "Frappe"],
  // Replace these with your actual PNGs (public/images/ata/*.png)
  screens: [],
};

export default function Page() {
  const router = useRouter();
  return (
    <CaseStudyOverlay open={true} onClose={() => router.back()} data={ATA} />
  );
}
