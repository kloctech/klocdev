'use client'
import { useRef } from 'react';

const TESTIMONIALS = [
  { name:'Jake Marine', role:'Anchorize', avatar:'https://i.pravatar.cc/80?img=67',
    quote:"I wanted to thank Evolvion.io for all of the amazing work… UI/UX…" },
  { name:'Grant Bolton', role:'Bolton & AL', avatar:'https://i.pravatar.cc/80?img=12',
    quote:"Expert SaaS developers! Scalable, high-performing platform… Highly recommended!" },
  { name:'Michelle Blake', role:'Auto-Auctions', avatar:'https://i.pravatar.cc/80?img=5',
    quote:"Amazing experience—excellent communication, efficiency, and a deep understanding of our goals." },
];

export default function TestimonialsSection({ className = '' }) {
  const scrollerRef = useRef(null);
  const scrollByCards = (dir=1)=>{
    const el = scrollerRef.current; if(!el) return;
    const card = el.querySelector('[data-card]');
    const width = card ? card.getBoundingClientRect().width : 360;
    el.scrollBy({ left: dir * (width + 24), behavior: 'smooth' });
  };

  return (
      <section className={`px-5 pt-12 pb-8 md:pt-14 md:pb-10 ${className}`}>
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-100">
          What Our <span className="relative">
            <span className="text-violet-400">Clients</span>
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-violet-500/60 rounded-full" />
          </span> Say
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-slate-400">
          We bring a proven track record across industries.
        </p>
      </div>

      <div className="relative mt-6">
        <div
          ref={scrollerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-2 md:pb-0 snap-x snap-mandatory
                      md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none"
        >
          {TESTIMONIALS.map((t, i)=>(
            <div key={i} data-card className="relative min-w-[92%] sm:min-w-[520px] md:min-w-0">
              <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-emerald-500/20 blur-2xl" />
              <article className="h-full rounded-3xl border border-white/10 bg-[#0E1423] px-6 py-6 text-slate-200">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" />
                  <div className="flex-1">
                    <div className="text-lg font-semibold">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.role}</div>
                  </div>
                  <span className="text-slate-400 text-2xl">“</span>
                </div>
                <p className="mt-5 leading-relaxed text-slate-300">{t.quote}</p>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-3 flex justify-center gap-3">
          <button onClick={()=>scrollByCards(-1)} className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10">←</button>
          <button onClick={()=>scrollByCards(1)}  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10">→</button>
        </div>
      </div>
    </section>
  );
}
