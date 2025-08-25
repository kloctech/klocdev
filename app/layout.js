import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalLightRays from "@/components/GlobalLightRays";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"], // normal, medium, bold, extrabold
  display: "swap",
});

export const metadata = {
  title: "YourBrand — Kloc",
  description: "Full-stack websites, SaaS, and AI/ML integrations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${jakarta.className}`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <GlobalLightRays />
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
