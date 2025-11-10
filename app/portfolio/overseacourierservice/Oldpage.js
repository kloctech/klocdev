import PageHeader from "@/components/PageHeader";
export const metadata = { title: "OverseaCourierService" };

export default function OverseaCourierServicesPage() {
  return (
    /* Force a light page regardless of site-wide dark styles */
    <main className="min-h-screen bg-white text-slate-900 mx-auto max-w-6xl px-4 py-10">
      {/* Title + subtitle */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
        Oversea Courier Service
      </h1>
      <p className="mt-2 text-lg text-slate-700">
        Automated Logistics Management for Middle East
      </p>

      {/* Two-column content */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: description */}
        <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
          <p>
            OCS is a dedicated Shopify app built for Oversea Courier Service’s
            Middle East operations, transforming their logistics management from
            manual Excel-based processes to a fully automated digital ecosystem.
            The app connects directly to Shopify stores, automatically pulling
            all orders into a centralized OCS dashboard where merchants can
            generate shipments individually or in bulk with just a few clicks.
          </p>
          <p>
            An automated pricing engine calculates shipping costs by factoring
            in product type, weight, destination, and delivery preferences,
            eliminating manual computation. The platform provides centralized
            shipment management with real-time delivery status updates,
            streamlined returns and refund workflows, and automated customer
            notifications via email or SMS.
          </p>
        </div>

        {/* Right: features + tech */}
        <aside className="space-y-8">
          <div>
            <h3 className="text-slate-900 font-semibold text-xl">
              Key Features
            </h3>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
              <li>100% Shopify order sync</li>
              <li>Automated pricing engine</li>
              <li>Bulk shipment generation</li>
              <li>Real-time delivery tracking</li>
              <li>Returns and refund workflows</li>
              <li>Automated notifications</li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-semibold text-xl">Tech Stack</h3>
            <p className="mt-3 text-slate-800">React, Node.js, Shopify APIs</p>
          </div>
        </aside>
      </div>

      {/* Impact callout (light) */}
      <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-5 text-slate-800">
        <strong className="font-semibold">Impact: </strong>
        Eliminated hundreds of hours of manual work with 100% Shopify order sync
        and real-time tracking. Achieved zero spreadsheet dependency while
        managing the complete shipment lifecycle on one platform.
      </div>
    </main>
  );
}
