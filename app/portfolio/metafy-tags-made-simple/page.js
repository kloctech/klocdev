import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Metafy Tags Made Simple" };

export default function MetafyTagsMadeSimplePage() {
  return (
    /* Force a light page regardless of site-wide dark styles */
    <main className="min-h-screen w-full bg-[#020617] text-slate-900">
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
          Metafy Tags Made Simple
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Bulk Tag and Metafield Management
        </p>
        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              Metafy Tags Made Simple is a private Shopify app designed to help
              merchants efficiently manage product tags and metafields at scale.
              The app allows users to bulk copy or move tags to existing or new
              metafields, enabling stores to leverage metafield-based search and
              discovery applications.
            </p>
            <p>
              Key features include advanced filtering options to find specific
              tags using prefix, suffix, or common word patterns, the ability to
              select multiple products using smart filters, and seamless
              migration of tags to new or existing metafields. The app includes
              an in-built metafield creation tool, eliminating the need to
              switch between different interfaces. A comprehensive activity log
              provides full audit trails of all actions performed.
            </p>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Core Capabilities
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>Bulk tag-to-metafield migration</li>
                <li>Advanced filtering (prefix, suffix, common words)</li>
                <li>Smart product selection</li>
                <li>In-built metafield creation</li>
                <li>Comprehensive activity logs</li>
                <li>Audit trail transparency</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
              <p className="mt-3 text-slate-800">React, Node.js, MongoDB</p>
            </div>
          </aside>
        </div>
        {/* Highlight box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Streamlines bulk tag-to-metafield migration, saving hours of manual
            work. Smart filtering and audit logs enable efficient, error-free
            metafield management for large catalogs.
          </p>
        </div>
      </div>
    </main>
  );
}
