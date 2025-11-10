// app/portfolio/metafy-editor/page.js
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Metafy Editor" };

export default async function MetafyEditorPage({ searchParams }) {
  // Next.js 15: await searchParams before using it
  const sp = await searchParams;
  const pageParam = Array.isArray(sp?.page) ? sp.page[0] : sp?.page;
  const pageFromUrl = pageParam ?? "1";
  const backHref = `/portfolio?page=${pageFromUrl}`;

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
        <PageHeader liveHref="#" backHref={backHref} />
        {/* Title + subtitle */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
          Metafy Editor
        </h1>
        <p className="mt-2 text-lg text-slate-700">Catalog Management</p>
        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              Metafy Editor is a powerful Shopify app that simplifies metafield
              management by displaying all metafields in a clear, structured
              format with essential attributes visible in one centralized
              interface. The app eliminates the complexity of manually entering
              namespace, key, or data type information, making bulk metafield
              updates accessible to non-technical users.
            </p>
            <p>
              Key features include comprehensive viewing of all product and
              variant metafields with their attributes, CSV export functionality
              for bulk editing workflows, and seamless upload capability to
              apply changes quickly.
            </p>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
              <p className="mt-3 text-slate-800">
                Gadget, Polaris, Shopify GraphQL
              </p>
            </div>
          </aside>
        </div>
        {/* Highlight box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Metafields are difficult to interact with in Shopify’s native
            interface. Even popular product management tools lack these
            features. Metafy Editor fills that gap allowing merchants to easily
            view and manipulate metafields.
          </p>
        </div>
      </div>
    </main>
  );
}
