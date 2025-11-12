// app/portfolio/ata/page.js
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "ATA" };

export default async function ATAPage({ searchParams }) {
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
          ATA
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Headless Shopify Marketplace for Artists
        </p>
        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              ATA is a headless Shopify marketplace designed to help artists
              showcase, share, and monetize their work through seamless discovery
              and commerce. Built with a mobile-first architecture and powered by
              Shopify Storefront APIs, the platform delivers fast, intuitive
              browsing and purchasing at scale.
            </p>
            <p>
              The platform supports a growing community of 100k+ members and is
              engineered to handle millions of concurrent visitors. Core features
              include a custom subscription model, integrated event management,
              real-time spam filtering/flagging, and secure administrative
              dashboards—reducing friction while improving safety and engagement.
            </p>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Integrations
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>Shopify Storefront APIs</li>
                <li>Shopify App Bridge</li>
                <li>Algolia (Search)</li>
                <li>Sanity (Content Management)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
              <p className="mt-3 text-slate-800">
                Postgres, Node.js, Next.js, Shopify App Bridge, Sanity, Algolia
              </p>
            </div>
          </aside>
        </div>

        {/* Impact box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Scalable robust backend built to cater to 100k+ artisans and 1M+
            concurrent users at launch. Headless frontend enhances SEO
            performance, allows custom links, and provides complete control over
            frontend customizations.
          </p>
        </div>
      </div>
    </main>
  );
}
