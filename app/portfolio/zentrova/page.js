// app/portfolio/zentrova/page.js
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Zentrova" };

export default async function ZentrovaPage({ searchParams }) {
  // Next.js 15: await searchParams before using it
  const sp = await searchParams;
  const pageParam = Array.isArray(sp?.page) ? sp.page[0] : sp?.page;
  const pageFromUrl = pageParam ?? "1";
  const backHref = `/portfolio?page=${pageFromUrl}`;

  return (
    // Dark site background, light content card
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
        {/* Header */}
        <PageHeader liveHref="#" backHref={backHref} />

        {/* Title + subtitle */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
          Zentrova
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Curated Product Discovery Platform
        </p>
       {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              Zentrova is a curated product listing platform that simplifies
              product discovery by helping users find, compare, and access the
              best tools and services across multiple categories. The platform
              features a clean, searchable interface optimized for quick
              navigation and high user engagement.
            </p>
            <p>
              Built with a mobile-first, responsive design approach, Zentrova
              eliminates friction in the product discovery process through
              structured categorization and smart search capabilities. Users can
              filter products based on various criteria and access them through
              direct links, making decision-making more efficient.
            </p>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Core Features
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>Smart search capabilities</li>
                <li>Structured categorization</li>
                <li>Advanced filtering options</li>
                <li>Direct product access links</li>
                <li>Mobile-first responsive design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
              <p className="mt-3 text-slate-800">Next.js, Supabase</p>
            </div>
          </aside>
        </div>

        {/* Impact box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Delivers fast, frictionless product discovery with smart search and
            filtering. Scalable architecture supports high engagement and serves
            as a reliable decision-making hub.
          </p>
        </div>
      </div>
    </main>
  );
}
