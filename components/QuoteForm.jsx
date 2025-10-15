"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = new FormData(form);
      const payload = {
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        company: data.get("company"),
        website: data.get("website"),
        services: data.getAll("services"),
        budget: data.get("budget"),
        timeline: data.get("timeline"),
        details: data.get("details"),
        consent: data.get("consent") === "on",
      };

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.error || "Failed to submit form");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Ada Lovelace"
            className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 transition-all duration-200 hover:border-white/20 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 transition-all duration-200 hover:border-white/20 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          pattern="^[0-9()+\-\s]{7,20}$"
          placeholder="+1 555 123 4567"
          className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 transition-all duration-200 hover:border-white/20 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
        />
        <p className="mt-2 text-xs text-slate-400">Digits and + ( ) - only</p>
      </div>

      <div className="mt-6">
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          placeholder="Acme Co."
          className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 transition-all duration-200 hover:border-white/20 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="website" className="mb-2 block text-sm font-medium text-slate-200">
          Website / Link (optional)
        </label>
        <input
          id="website"
          name="website"
          type="url"
          placeholder="https://example.com"
          className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 transition-all duration-200 hover:border-white/20 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
        />
      </div>

      <fieldset className="mt-8">
        <legend className="mb-3 text-sm font-medium text-slate-200">
          What do you need? (choose one or more)
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            "Complete Website",
            "Front‑End Development",
            "Back‑End / API",
            "AI/ML Integration",
            "SEO & Analytics",
            "Maintenance",
          ].map((label) => (
            <label
              key={label}
              className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 transition-all duration-200 hover:border-violet-400/60 hover:bg-slate-900/80"
            >
              <input
                type="checkbox"
                name="services"
                value={label}
                className="h-4 w-4 rounded border-white/20 bg-slate-800 text-violet-500 transition-colors focus:ring-2 focus:ring-violet-400/20"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="mb-3 text-sm font-medium text-slate-200">
          Approx. budget
        </legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["< $1k", "$1k–$3k", "$3k–$10k", "$10k+"].map((b) => (
            <label
              key={b}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 transition-all duration-200 hover:border-violet-400/60 hover:bg-slate-900/80"
            >
              <input
                type="radio"
                name="budget"
                value={b}
                className="h-4 w-4 border-white/20 text-violet-500 transition-colors focus:ring-2 focus:ring-violet-400/20"
              />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8">
        <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-slate-200">
          When do you want to start?
        </label>
        <select
          id="timeline"
          name="timeline"
          className="w-full rounded-lg border border-white/10 bg-slate-900/80 px-4 py-2.5 text-slate-100 transition-all duration-200 hover:border-white/20 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
          defaultValue="Soon"
        >
          {["ASAP", "2–4 weeks", "1–3 months", "Flexible"].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8">
        <label htmlFor="details" className="mb-2 block text-sm font-medium text-slate-200">
          Tell us about your project *
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder="What are you building? Any links or examples you like?"
          className="w-full resize-y rounded-lg border border-white/10 bg-slate-900/80 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 transition-all duration-200 hover:border-white/20 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
        />
      </div>

      {/* <div className="mt-8">
        <label
          htmlFor="attachment"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Attachment (optional)
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          className="block w-full text-sm text-slate-300 file:mr-4 file:rounded-md file:border-0 file:bg-violet-600 file:px-4 file:py-2 file:text-white file:transition-colors hover:file:bg-violet-500"
        />
        <p className="mt-2 text-xs text-slate-400">Max ~5MB works best</p>
      </div> */}

      <label className="mt-8 flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded border-white/20 bg-slate-800 text-violet-500 transition-colors focus:ring-2 focus:ring-violet-400/20"
        />
        <span className="text-sm text-slate-300">
          You can contact me about this project. I agree to the terms/privacy.
        </span>
      </label>

      {submitted && (
        <div className="mt-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
          ✓ Thank you! We'll get back to you soon.
        </div>
      )}
      {error && (
        <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          ✗ {error}
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-all duration-200 hover:bg-violet-500 hover:shadow-violet-500/30 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Get my quote →"}
        </button>
        <button
          type="reset"
          className="rounded-lg border border-white/15 px-5 py-3 text-sm text-slate-200 transition-all duration-200 hover:border-white/30 hover:bg-white/5"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
