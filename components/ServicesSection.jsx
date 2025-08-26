import Link from "next/link";
import RollingServices from "@/components/RollingServices";

export default function ServicesSection({ withCTA = true }) {
  return (
    // id lets the header link jump here; scroll-mt keeps it visible under sticky header
    <section id="services" className="pt-0 pb-2 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        Complete <span className="text-violet-400">Website</span> Development
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-300">
        We specialize in UI/UX design, front-end and back-end development, and
        cutting-edge AI/ML solutions.
      </p>

      <div className="mt-10">
        <RollingServices />
      </div>
    </section>
  );
}
