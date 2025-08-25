import ProjectsSection from "@/components/ProjectsSection";

export const metadata = {
  title: "Portfolio",
  description: "Selected projects and case studies.",
};

export default function PortfolioPage() {
  return (
    <main>
      <ProjectsSection
        title="Portfolio"
        subtitle="Selected projects & case studies."
      />
    </main>
  );
}
