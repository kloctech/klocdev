import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Smoking Cat" };

export default function SmokingCatPage() {
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
        <PageHeader liveHref="#" backHref="/portfolio/smoking-cat" />

        {/* Everything below is in one centered column */}
        <div className="mt-6 max-w-4xl mx-auto">
          {/* Title + subtitle */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
            Smoking Cat
          </h1>
          <p className="mt-2 text-lg text-slate-700">
            Intelligent Odoo-Shopify Synchronization
          </p>

          {/* Body */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
              <p>
                Smoking Cat is an intelligent synchronization app designed to
                bridge the gap between Odoo ERP and Shopify, addressing critical
                data integrity challenges in modern e-commerce operations. The
                app delivers precise, automated inventory and pricing sync by
                restructuring sync logic to use accurate stock fields rather
                than misleading default values.
              </p>
              <p>
                Features include custom field mapping using{" "}
                <code>free_to_use_quantity</code> for accurate inventory
                representation, dynamic variant filtering with intelligent
                masking logic that hides invalid or unpublished variants from
                the storefront, real-time inventory and price matching without
                delays, and enhanced API collaboration with Odoo teams. The
                architecture is built for scalability and future automation.
              </p>
            </div>

            <aside className="space-y-8">
              <div>
                <h3 className="text-slate-900 font-semibold text-xl">
                  Integrations
                </h3>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                  <li>Odoo ERP</li>
                  <li>Shopify Product &amp; Inventory APIs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-slate-900 font-semibold text-xl">
                  Tech Stack
                </h3>
                <p className="mt-3 text-slate-800">
                  Node.js, Shopify GraphQL, Odoo APIs
                </p>
              </div>
            </aside>
          </div>

          {/* Highlight box */}
          <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
            <p className="font-medium">
              99% sync accuracy by ensuring data integrity. Operational
              efficiency gain of 80% by reducing requirement for manual
              interventions and fixes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
