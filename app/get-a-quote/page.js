import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Get a Quote — KLoc",
  description:
    "Tell us about your project and we'll get back with an estimate.",
};

export default function GetAQuotePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pt-0">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white">
        Get a Quote
      </h1>
      <p className="mt-2 text-center text-slate-400">
        Fill the little form ↓ and we’ll contact you soon.
      </p>

      <div className="mt-1">
        <QuoteForm />
      </div>
    </main>
  );
}
