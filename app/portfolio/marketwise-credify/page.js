// app/portfolio/marketwise-credify/page.js
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Marketwise Credify" };

export default async function CredifyPage({ searchParams }) {
  // Next.js 15: await searchParams before using it
  const sp = await searchParams;
  const pageParam = Array.isArray(sp?.page) ? sp.page[0] : sp?.page;
  const pageFromUrl = pageParam ?? "1";
  const backHref = `/portfolio?page=${pageFromUrl}`;

  return (
    // Full-width dark background (matches site), content centered inside
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
        <PageHeader liveHref="#" backHref={backHref} />

        {/* Title + subtitle */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
          Marketwise Credify
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Automated Store Credit Distribution
        </p>

        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              Marketwise Credify is a comprehensive Shopify app that automates
              store credit distribution using Shopify’s native store credit
              system. The app enables merchants to create sophisticated
              campaigns with customizable trigger conditions that automatically
              reward customers with store credits for various actions including
              purchases, product reviews, referrals, and membership activities.
            </p>
            <p>
              This automation eliminates manual credit distribution while
              maintaining flexibility through rule-based configurations. The app
              integrates with popular email marketing platforms like Klaviyo,
              Resend, Mailchimp, and Brevo for customer communication, as well
              as review systems like Judge.me and returns management apps like
              Return Prime. This ecosystem integration ensures seamless workflow
              automation across the entire customer lifecycle.
            </p>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Integrations
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>Klaviyo, Resend, Mailchimp, Brevo</li>
                <li>Judge.me (Reviews)</li>
                <li>Return Prime</li>
                <li>Shopify Store Credit API</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
              <p className="mt-3 text-slate-800">Next.js, Polaris</p>
            </div>
          </aside>
        </div>

        {/* Highlight box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Automates store credit distribution across purchases, reviews,
            referrals, and memberships. Seamless integrations with marketing and
            review platforms drive customer loyalty and repeat purchases.
          </p>
        </div>
      </div>
    </main>
  );
}
