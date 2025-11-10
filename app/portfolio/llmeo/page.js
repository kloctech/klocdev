// app/portfolio/llmeo/page.js
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "LLMEO" };

export default async function LLMEOPage({ searchParams }) {
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
          LLMEO
        </h1>
        <p className="mt-2 text-lg text-slate-700">
          Headless Shopify Platform for Artists
        </p>

        {/* Status pill */}
        <div className="mt-5 inline-flex items-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 px-4 py-2 text-sm font-medium">
          <span className="mr-1 text-slate-700">Status:</span>
          <span className="font-semibold text-orange-600">Beta Release</span>
        </div>

        {/* Body */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6 text-slate-800 leading-relaxed">
            <p>
              LLMEO is an AI-first brand visibility platform that continuously
              tracks and monitors how brands are represented across major large
              language models including ChatGPT, Gemini, and Claude. The platform
              helps businesses understand their AI presence by uncovering gaps and
              opportunities in brand perception.
            </p>
            <p>
              LLMEO operates through a streamlined three-step workflow: initial
              brand and competitor setup, continuous automated monitoring across
              AI models, and recommendation-driven optimization strategies. The
              system surfaces actionable insights through real-time alerts and
              comprehensive dashboards.
            </p>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Integrations
              </h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-800">
                <li>OpenAI</li>
                <li>Anthropic</li>
                <li>Gemini</li>
                <li>Perplexity</li>
                <li>Web Search</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-xl">
                Tech Stack
              </h3>
              <p className="mt-3 text-slate-800">
                Python, Pydantic, Celery, Digital Ocean, Selenium, Svelte, Postgres
              </p>
            </div>
          </aside>
        </div>

        {/* Impact box */}
        <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-slate-800">
          <p className="font-medium">
            Brand visibility and competition visibility monitoring on LLMs to
            enhance traffic by <span className="font-bold">15–20%</span>.
            Actionable insights and a sophisticated scoring algorithm allow
            brands to compete on LLMs.
          </p>
        </div>
      </div>
    </main>
  );
}
