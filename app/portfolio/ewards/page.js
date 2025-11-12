// app/portfolio/ewards/page.js
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Ewards" };

export default async function EwardsPage({ searchParams }) {
  // Next.js 15: searchParams is a Promise — await it first
  const sp = await searchParams;
  const pageParam = Array.isArray(sp?.page) ? sp.page[0] : sp?.page;
  const pageFromUrl = pageParam ?? "1";
  const backHref = `/portfolio?page=${pageFromUrl}`;

  return (
    // Dark outer bg so the rounded white card is visible
    <main className="min-h-screen w-full bg-[#020617]">
      {/* White card with rounded corners */}
      <div className="
        mx-auto
        w-[min(100%-2rem,1100px)]
        bg-white
        rounded-3xl
        overflow-hidden
        px-6 sm:px-10
        py-8 sm:py-12
        shadow-2xl
        ring-1 ring-black/5
        text-slate-900
      ">
        {/* Header bar INSIDE the card */}
        <PageHeader liveHref="#" backHref={backHref} />

        {/* Title + subtitle */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">Ewards</h1>
        <p className="mt-2 text-lg text-slate-700">
          Comprehensive Loyalty Solution for Shopify
        </p>

        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              Ewards is a private Shopify app that provides store owners with a
              comprehensive loyalty solution for managing and redeeming customer
              points and coupons through the Ewards loyalty platform. The app
              connects to the Ewards system and converts various loyalty
              instruments including points, coupons, promotional codes, and
              vouchers into Shopify discount codes.
            </p>
            <p>
              Features include OTP-based customer authentication for security,
              sophisticated loyalty conversion algorithms, seamless order data
              synchronization that updates customer point balances in real-time,
              and automatic discount application for a frictionless user
              experience. The bidirectional data flow ensures accurate loyalty
              management by transmitting order details to Ewards for point
              deductions.
            </p>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">Integrations</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>Ewards Loyalty Platform</li>
                <li>Shopify Checkout</li>
                <li>OTP Authentication Services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">Tech Stack</h3>
              <p className="mt-3 text-slate-800">
                React (Polaris), Node.js, Express, MongoDB, Shopify Theme App
                Extension, Checkout UI Extension
              </p>
            </div>
          </aside>
        </div>

        {/* Highlight box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Enables seamless offline-to-online loyalty redemption with secure OTP
            authentication. Real-time synchronization ensures accurate point
            management and enhanced checkout experience for customers.
          </p>
        </div>
      </div>
    </main>
  );
}
