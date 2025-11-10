// app/portfolio/page.js
import { Suspense } from "react";
import ProjectsSection from "@/components/ProjectsSection.jsx"; // note the relative path

export const metadata = {
  title: "Portfolio",
  description: "Selected projects and case studies.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Suspense fallback={null}>
        <ProjectsSection
          title="Portfolio"
          subtitle="Selected projects & case studies."
        />
      </Suspense>
    </main>
  );
}
