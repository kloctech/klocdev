// app/about/page.js
import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About Us — Experienced Full-Stack Developers",
  description:
    "With 200+ projects delivered, we offer fast, reliable web development and unlimited revisions to bring your vision to life.",
};

export default function AboutPage() {
  return <AboutSection variant="standalone" />;
}
