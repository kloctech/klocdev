"use client";
import { useState } from "react";
import SquiggleUnderline from "./SquiggleUnderline";
const FAQS = [
  {
    q: "What services does your agency offer?",
    a: "We specialize in custom web development, UI/UX, AI/ML, DevOps AI-powered applications, interactive dashboards, SEO-optimized websites, SaaS applications, and AI chatbots. Our team builds high-performance digital solutions that enhance user experience and drive business growth.",
  },
  {
    q: "Do you provide AI-powered solutions for businesses?",
    a: "Yes. We build AI chatbots, retrieval-augmented search (RAG), content assistants, and ML-powered analytics dashboards tailored to your workflows and data security needs.",
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: "Absolutely. We provide post-launch support, performance monitoring, security updates, uptime checks, and feature iterations via monthly retainers or on-demand.",
  },
  {
    q: "Do you integrate third-party APIs and tools?",
    a: "Yes—payments, auth, CRMs, analytics, emails, cloud services, vector databases, and more. We design clean, secure integrations with clear failure handling.",
  },
  {
    q: "How can I get started with my project?",
    a: "Book a short discovery call to align on scope, deadlines, and budget. We’ll follow up with a proposal and a milestone plan with weekly demos.",
  },
];

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 transition-transform ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1220] px-6 py-5 text-slate-200">
      <button
        className="flex w-full items-center justify-between gap-6 text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <h3 className="text-base font-semibold sm:text-lg">{q}</h3>
        <span className="text-slate-400">
          <Chevron open={open} />
        </span>
      </button>
      {open && (
        <div className="pt-3 text-sm leading-relaxed text-slate-400">{a}</div>
      )}
    </div>
  );
}

export default function FAQ({ variant = "embedded", className = "" }) {
  const [openIdx, setOpenIdx] = useState(0);
  const isStandalone = variant === "standalone";

  return (
    <section
      className={`relative mx-auto ${
        isStandalone
          ? "max-w-5xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-20"
          : "max-w-4xl px-4 pt-2 pb-8"
      } ${className}`}
    >
      <h1
        className={`mb-8 text-center font-bold tracking-tight ${
          isStandalone ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
        }`}
      >
        Frequently Asked{" "}
        <SquiggleUnderline
          strokeClass="text-white/90"
          className="text-violet-400"
        >
          Questions
        </SquiggleUnderline>
      </h1>

      <div className="grid gap-4">
        {FAQS.map((item, i) => (
          <FaqItem
            key={item.q}
            q={item.q}
            a={item.a}
            open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
          />
        ))}
      </div>

      {isStandalone && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-16 -z-10 h-40 bg-gradient-to-t from-violet-700/20 to-transparent blur-2xl"
        />
      )}
    </section>
  );
}
