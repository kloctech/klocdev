import PageHeader from "@/components/PageHeader";

export const metadata = { title: "mLoyal Made Simple" };

export default function MLoyalMadeSimplePage() {
  return (
    // Full-width dark background
    <main className="min-h-screen w-full bg-[#020617] text-slate-900">
      {/* Centered white card */}
      <div
        className="
          mx-auto
          w-[min(100%-2rem,1100px)]  /* responsive centered width */
          bg-white
          rounded-3xl
          px-6
          py-10
        "
      >
        {/* Header bar */}
        <PageHeader liveHref="#" />

        {/* Title + subtitle */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
          mLoyal Made Simple
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Offline-to-Online Loyalty Integration
        </p>

        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              mLoyal Made Simple is a public Shopify app that seamlessly
              integrates loyalty management into e-commerce stores by bridging
              offline and online transactions. The app enables merchants to
              convert offline loyalty points and coupons associated with
              customer phone numbers into Shopify discount codes that can be
              automatically applied during checkout.
            </p>
            <p>
              This innovative solution allows customers to leverage their
              existing loyalty rewards from physical stores when making online
              purchases. Features include secure OTP verification for customer
              authentication, intelligent points conversion based on monetary
              value, automatic discount code application during checkout, and
              bidirectional data synchronization.
            </p>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Integrations
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>mLoyal Loyalty Platform</li>
                <li>Shopify Checkout</li>
                <li>OTP Services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
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
            Bridges offline–online loyalty gap, enabling seamless reward
            redemption. Automated discount application and real-time
            synchronization enhance customer experience and retention across
            channels.
          </p>
        </div>
      </div>
    </main>
  );
}
