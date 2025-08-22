// app/faq/page.js
import FAQ from "@/components/FAQ";

export const metadata = { title: "Frequently Asked Questions", description: "" };

export default function FAQRoute() {
  return (
    <FAQ
      variant="standalone"
      className="!pt-2 sm:!pt-4 -mt-6 sm:-mt-8"  // tighten top space just on this page
    />
  );
}
