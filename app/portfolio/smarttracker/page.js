"use client";
import { useRouter } from "next/navigation";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";

const SmartTracker = {
  title: "SmartTracker",
  live: "#", // put your live URL
  dashboard: "/portfolio/smarttracker", // or an external URL if you have one
  description: [
    `SmartTracker is a custom QR tag generation and management platform built to help users find, report, and recover lost goods. Each QR tag carries a unique serial number and links to a dedicated item page, enabling anyone who scans the code to quickly report a found item back to its owner.

The platform supports full QR lifecycle management—including tag creation, activation, deactivation, and deletion—while offering flexible link configuration and scan analytics. Administrators can monitor scan activity in real time, track recovery reports, and maintain data integrity through automated backups and monitoring.

Designed for scalability, SmartTracker can reliably handle up millions of scans per month, ensuring smooth performance even during peak usage. With a secure, user-friendly interface and built-in recovery workflows, the system provides an efficient way to increase the chances of lost items being returned to their rightful owners.`,
  ].join("\n\n"),
  tech: ["React", "Postgres"],
  // Replace these with your actual PNGs (public/images/ata/*.png)
  screens: [],
};

export default function Page() {
  const router = useRouter();
  return (
    <CaseStudyOverlay
      open={true}
      onClose={() => router.back()}
      data={SmartTracker}
    />
  );
}
