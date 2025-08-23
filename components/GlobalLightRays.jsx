// components/GlobalLightRays.jsx
'use client'
import LightRays from '@/components/LightRays'   // LightRays is a default export

export default function GlobalLightRays() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <LightRays className="w-full h-full" raysOrigin="top-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950/60" />
    </div>
  )
}
