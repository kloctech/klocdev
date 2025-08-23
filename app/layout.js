import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalLightRays from "@/components/GlobalLightRays";

export const metadata = {
  title: "YourBrand — Kloc",
  description: "Full-stack websites, SaaS, and AI/ML integrations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <GlobalLightRays />
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
