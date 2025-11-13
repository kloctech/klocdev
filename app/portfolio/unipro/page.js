// app/portfolio/unipro/page.js
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Unipro" };

export default async function UniproPage({ searchParams }) {
    // Keep the back link remembering ?page=
    const sp = await searchParams;
    const pageParam = Array.isArray(sp?.page) ? sp.page[0] : sp?.page;
    const pageFromUrl = pageParam ?? "1";
    const backHref = `/portfolio?page=${pageFromUrl}`;

    return (
        // ✅ Full-page white background
        <main className="min-h-screen bg-white rounded-3xl text-slate-900">
            <div className="mx-auto max-w-6xl px-4 py-10 ">

                <PageHeader liveHref="#" backHref={backHref} />

                {/* Title + status */}
                <div className="mt-2 flex flex-wrap items-center gap-4">
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                        Unipro
                    </h1>

                </div>
                <p className="mt-2 text-lg text-slate-700">
                    Order Management System for School Uniforms
                </p>

                {/* Two-column layout */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
                    {/* Left column */}
                    <div className="space-y-6 leading-7 text-slate-700">
                        <p>
                            Unipro is a comprehensive order management system built for a
                            leading school uniform provider to transform operations from
                            manual processing to digital precision. The platform reduces
                            errors in order-taking and fulfillment with a mobile and web app
                            that enables quick, error-free processing from any device.
                        </p>
                        <p>
                            Features include POS device integration for instant payments,
                            support for multiple payment modes (Cards, Cash, UPI), automated
                            receipt generation, and real-time order tracking. A React-based
                            admin dashboard provides performance metrics, sales trends
                            analysis, and employee productivity tracking.
                        </p>
                    </div>

                    {/* Right column */}
                    <aside className="space-y-8">
                        <section>
                            <h3 className="text-lg font-bold text-slate-900">Integrations</h3>
                            <ul className="mt-3 list-disc pl-5 space-y-1">
                                <li>POS Devices</li>
                                <li>Google Firebase</li>
                                <li>Payment Gateways (UPI, Card processors)</li>
                                <li>WooCommerce APIs</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-slate-900">Tech Stack</h3>
                            <ul className="mt-3 list-disc pl-5 space-y-1">
                                <li>Android Studio</li>
                                <li>Firebase</li>
                            </ul>
                        </section>
                    </aside>
                </div>

                {/* Highlight box */}
                <div className="mt-10 rounded-xl bg-emerald-50 ring-1 ring-emerald-200 p-5 text-emerald-800">
                    <p className="font-semibold">
                        Custom workflows to match client cataloging needs. Android app with
                        POS integration for order processing. Built by integrating
                        WooCommerce APIs.
                    </p>
                </div>
            </div>
        </main>
    );
}
