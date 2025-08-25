import QuoteForm from "@/components/QuoteForm";

// app/contact/page.jsx
export const metadata = {
  title: "Contact — KLoc",
  description: "Say hello or ask anything about your project.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Contact</h1>
      <p className="mt-2 text-slate-400">
        Tell us a bit about your project. If you want a detailed estimate, use
        the Get a Quote form.
      </p>

      <div className="mt-8 grid gap-4">
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-2.5 text-white hover:bg-violet-500"
        >
          Email us
        </a>

        <a
          href="/get-a-quote"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-2.5 text-slate-200 hover:border-white/30"
        >
          Get a Quote Form
        </a>
      </div>
    </main>
  );
}
