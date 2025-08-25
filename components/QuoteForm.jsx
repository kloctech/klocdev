"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Let the browser check required + patterns first
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    payload.services = data.getAll("services"); // collect all selected checkboxes

    // For now, just log it. Later we'll POST this to an API route/email.
    console.log("Form payload:", payload);
    setSubmitted(true);
    form.reset();

    // Hide success after a few seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm"
    >
      {submitted && (
        <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-emerald-300">
          ✅ Thank you! Your info was captured (check your browser Console).
        </div>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-slate-300">
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Ada Lovelace"
            className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-violet-400 focus:outline-none"
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-slate-300">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-violet-400 focus:outline-none"
          />
        </div>
      </div>
      {/* Phone */}
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm text-slate-300">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          pattern="^[0-9()+\-\s]{7,20}$"
          placeholder="+1 555 123 4567"
          className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-violet-400 focus:outline-none"
        />
        <p className="mt-1 text-xs text-slate-400">Digits and + ( ) - only.</p>
      </div>
      {/* Company */}
      <div>
        <label htmlFor="company" className="mb-1 block text-sm text-slate-300">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          placeholder="Acme Co."
          className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-violet-400 focus:outline-none"
        />
      </div>
      {/* Website */}
      <div className="md:col-span-2">
        <label htmlFor="website" className="mb-1 block text-sm text-slate-300">
          Website / Link (optional)
        </label>
        <input
          id="website"
          name="website"
          type="url"
          placeholder="https://example.com"
          className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-violet-400 focus:outline-none"
        />
      </div>
      {/* Services checkboxes */}
      <fieldset className="mt-6">
        <legend className="mb-2 text-sm font-medium text-slate-200">
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
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-200 hover:border-violet-400/60"
            >
              <input
                type="checkbox"
                name="services"
                value={label}
                className="h-4 w-4 rounded border-white/20 bg-slate-800 text-violet-500 focus:ring-violet-400"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      {/* Budget radios */}
      <fieldset className="mt-6">
        <legend className="mb-2 text-sm font-medium text-slate-200">
          Approx. budget
        </legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["< $1k", "$1k–$3k", "$3k–$10k", "$10k+"].map((b) => (
            <label
              key={b}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-200 hover:border-violet-400/60"
            >
              <input
                type="radio"
                name="budget"
                value={b}
                className="h-4 w-4 border-white/20 text-violet-500 focus:ring-violet-400"
              />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </fieldset>
      {/* Timeline select */}
      <div className="mt-6">
        <label htmlFor="timeline" className="mb-1 block text-sm text-slate-300">
          When do you want to start?
        </label>
        <select
          id="timeline"
          name="timeline"
          className="w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 focus:border-violet-400 focus:outline-none"
          defaultValue="Soon"
        >
          {["ASAP", "2–4 weeks", "1–3 months", "Flexible"].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      {/* Project description */}
      <div className="mt-6">
        <label htmlFor="details" className="mb-1 block text-sm text-slate-300">
          Tell us about your project *
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder="What are you building? Any links or examples you like?"
          className="w-full resize-y rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-violet-400 focus:outline-none"
        />
      </div>
      {/* Attachment */}
      <div className="mt-6">
        <label
          htmlFor="attachment"
          className="mb-1 block text-sm text-slate-300"
        >
          Attachment (optional)
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          className="block w-full text-sm text-slate-300 file:mr-4 file:rounded-md file:border-0 file:bg-violet-600 file:px-4 file:py-2 file:text-white hover:file:bg-violet-500"
        />
        <p className="mt-1 text-xs text-slate-400">Max ~5MB works best.</p>
      </div>
      {/* Consent */}
      <label className="mt-6 flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-800 text-violet-500 focus:ring-violet-400"
        />
        <span className="text-sm text-slate-300">
          You can contact me about this project. I agree to the terms/privacy.
        </span>
      </label>
      {/* Buttons */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          Get my quote →
        </button>
        <button
          type="reset"
          className="rounded-lg border border-white/15 px-4 py-2 text-sm text-slate-200 hover:border-white/30"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
