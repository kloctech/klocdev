import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Pack Attack" };

export default function PackAttackPage() {
  return (
    /* Force a light page regardless of site-wide dark styles */
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
        <PageHeader liveHref="#" /> {/* TODO: replace with real live URL */}
        {/* Title + subtitle */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
          Pack Attack
        </h1>
        <p className="mt-2 text-lg text-slate-700">Shopify Store Management</p>
        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              Pack Attack is a specialized Shopify app that provides store
              owners with a unique interface for managing multiple external
              Shopify stores from a single dashboard. The app automates product
              fetching from external stores via daily CRON jobs, streamlines
              order placement on external stores using APIs, and tracks order
              status through webhook integrations.
            </p>
            <p>
              A notable security feature includes an in-app risk assessment
              function where high and medium-risk orders require manual
              acceptance before automatic processing. The app also includes a
              custom native UI extension for the thank you page.
            </p>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Integrations
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>Shopify Order API</li>
                <li>Shopify Product API</li>
                <li>Risk Assessment</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
              <p className="mt-3 text-slate-800">
                Gadget.dev, React (UI Extension)
              </p>
            </div>
          </aside>
        </div>
        {/* Highlight box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Manage product and order information for multiple Shopify stores
            from a single dashboard. Enables working with affiliates.
          </p>
        </div>
      </div>
    </main>
  );
}
