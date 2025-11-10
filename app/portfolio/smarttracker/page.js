// app/portfolio/smarttracker/page.js
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Smart Tracker" };

export default async function SmartTrackerPage({ searchParams }) {
  // Next.js 15: await searchParams
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
          Smart Tracker
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          QR Tag Generation and Management Platform
        </p>

        
      

        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              Smart Tracker is a comprehensive QR tag generation and management
              platform built to help users find, report, and recover lost items.
              Each QR tag carries a unique serial number that links to a
              dedicated item page, enabling anyone who finds a lost item to
              quickly scan the code and report it back to the owner.
            </p>
            <p>
              The platform supports complete QR lifecycle management including tag
              creation, activation, deactivation, and deletion. Features include
              flexible link configuration, detailed scan analytics, and real-time
              monitoring for administrators. Designed for high-volume operations,
              Smart Tracker can reliably handle millions of scans per month.
            </p>
            <p>
              With secure, user-friendly interfaces and built-in recovery
              workflows, the system streamlines lost-item return while maintaining
              data integrity through automated backups and monitoring.
            </p>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Key Features
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>Unique serial number generation</li>
                <li>Complete QR lifecycle management</li>
                <li>Flexible link configuration</li>
                <li>Detailed scan analytics</li>
                <li>Real-time monitoring</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
              <p className="mt-3 text-slate-800">
                React, Postgres, Node, Express
              </p>
            </div>
          </aside>
        </div>

        {/* Impact box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Handles hundreds of thousands of monthly scans with real-time
            tracking and analytics. Streamlines lost-item recovery with automated
            workflows, increasing return rates through efficient QR management.
          </p>
        </div>
      </div>
    </main>
  );
}
