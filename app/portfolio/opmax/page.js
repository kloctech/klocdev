// app/portfolio/opmax/page.js
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "OpMax" };

export default async function OpMaxPage({ searchParams }) {
  // Next.js 15: await searchParams before using
  const sp = await searchParams;
  const pageParam = Array.isArray(sp?.page) ? sp.page[0] : sp?.page;
  const pageFromUrl = pageParam ?? "1";
  const backHref = `/portfolio?page=${pageFromUrl}`;

  return (
    /* Force a light card on dark site background */
    <main className="min-h-screen w-full bg-[#020617] text-slate-900">
      {/* Centered white card */}
      <div
        className="
          mx-auto
          w-[min(100%-2rem,1100px)]
          bg-white
          rounded-3xl
          px-6
          py-10
        "
      >
        {/* Header bar */}
        <PageHeader liveHref="#" backHref={backHref} />

        {/* Title + subtitle */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
          OpMax
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Virtual inventory and ERP integration
        </p>

        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              OpMax is a custom Shopify app developed for a sustainable fashion
              brand that creates contemporary products from upcycled saris. The
              app integrates directly with ERP and shipping systems to streamline
              operations and enable global scalability.
            </p>
            <p>
              Key features include virtual inventory cataloging and syncing
              capabilities that ensure seamless product availability across
              different geographical markets. The solution automates repetitive
              workflows, introduces intelligent notification systems, and
              enforces streamlined data governance to minimize operational
              friction. Built specifically for brands managing unique,
              one-of-a-kind inventory items, OpMax handles the complexity of
              upcycled fashion commerce.
            </p>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Integrations
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>Frappe ERP</li>
                <li>Shipping Systems</li>
                <li>Shopify APIs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
              <p className="mt-3 text-slate-800">Gadget, React, Polaris</p>
            </div>
          </aside>
        </div>

        {/* Impact box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Inventory holding costs reduced by 30%, size availability increased
            by 6×, and major time savings in core operations related to
            inventory management and export documentation preparation.
          </p>
        </div>
      </div>
    </main>
  );
}
