export default function ServiceCard({ title, desc, features = [], icon = "💡" }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition hover:border-violet-500/40 hover:bg-slate-900/60">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-violet-500/15 ring-1 ring-violet-500/40 text-xl">
          <span aria-hidden>{icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">{desc}</p>

      {features.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-violet-400/80" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <a
          href="/contact"
          className="inline-block rounded-md bg-violet-500 px-3 py-2 text-xs font-medium text-white hover:bg-violet-400"
        >
          Get a quote
        </a>
      </div>
    </div>
  );
}
