import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Marketwise Discount Ninja" };

export default function DiscountNinjaPage() {
  return (
    // Full-width dark background
    <main className="min-h-screen w-full bg-[#020617] text-slate-900">
      {/* Centered white card */}
      <div
        className="
          mx-auto
          w-[min(100%-2rem,1100px)]  /* width + horizontal margin */
          bg-white
          rounded-3xl
          pl-16
          pr-16
          py-10
          border border-pink-500      /* DEBUG: so you can see the box edges */
        "
      >
        {/* Header bar */}
        <PageHeader liveHref="#" />

        {/* Title + subtitle */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
          Marketwise Discount Ninja
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Market-Specific Discount Management
        </p>

        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              Marketwise Discount Ninja is a sophisticated Shopify app that
              enables merchants to create market-specific discounts with
              advanced targeting rules and automatic application. Built
              specifically for international merchants operating across
              different Shopify Markets, the app allows unique discount rates
              per country or region, enabling precise global selling strategies.
            </p>
            <p>
              Merchants can build automatic discounts and custom codes without
              any coding, using flexible rules based on product tags,
              collections, types, vendors, customer tags, order history, cart
              quantity thresholds, and purchase values. The comprehensive rule
              builder supports scheduled campaigns for future promotions and
              provides seamless multi-market campaign management.
            </p>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Targeting Capabilities
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>Product tags &amp; collections</li>
                <li>Product types &amp; vendors</li>
                <li>Customer tags &amp; order history</li>
                <li>Cart quantity thresholds</li>
                <li>Purchase value rules</li>
                <li>Scheduled campaigns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
              <p className="mt-3 text-slate-800">Next.js, Polaris</p>
            </div>
          </aside>
        </div>

        {/* Highlight/impact box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Enables precise market-specific discount targeting across global
            Shopify Markets. Advanced rule builder and scheduling capabilities
            streamline international promotion management without coding
            requirements.
          </p>
        </div>
      </div>
    </main>
  );
}
