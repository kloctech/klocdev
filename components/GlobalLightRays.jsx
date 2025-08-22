'use client';

// Try this import first:
import { LightRays } from '@appletosolutions/reactbits';

// If your editor complains, use this fallback:
// import LightRays from '@appletosolutions/reactbits/LightRays';

export default function GlobalLightRays({ className = '' }) {
  return (
    // pin behind everything and ignore clicks
    <div className={`pointer-events-none fixed inset-0 -z-10 ${className}`}>
      {/* Light rays across the whole viewport */}
      <LightRays origin="top-center" />

      {/* Optional gradient so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950" />
    </div>
  );
}
