// app/faq/page.js
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "",
};

export default function FAQRoute() {
  return (
    <FAQ
      variant="standalone"
      className="!pt-4 sm:!pt-4" //adjusting top space for this page
    />
  );
}
