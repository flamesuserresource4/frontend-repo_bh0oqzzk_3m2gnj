import { CheckCircle2, ScanLine, Palette, Cpu, Ruler, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

export function USPs() {
  const items = [
    { title: 'Precision Fit', desc: 'Dual-device scanning captures horse back and rider posture for millimeter-accurate fit.', icon: Ruler },
    { title: 'AI Design', desc: 'Proprietary algorithms shape the tree and panels to optimize load distribution.', icon: Cpu },
    { title: 'Performance Materials', desc: '3D-printed lattice core with premium leather skins for strength and feel.', icon: CheckCircle2 },
    { title: 'End-to-End Workflow', desc: 'Scanning • Design • Testing • Manufacturing in a single, traceable pipeline.', icon: ScanLine },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
      <div className="grid md:grid-cols-4 gap-6">
        {items.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200">
            <Icon className="text-amber-400 mb-3" />
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="text-sm text-slate-300/90 mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function VideoSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
        <div className="aspect-video relative bg-black/60 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,200,100,0.05),transparent_60%)]" />
          <div className="text-center">
            <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-700 ring-1 ring-white/30" />
            <p className="text-slate-200/90">Product video placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-24">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready to design your QS Saddle?</h3>
          <p className="text-slate-300/90 mt-2">Start with a scan or configure your model to get tailored pricing.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/contact" className="px-5 py-3 rounded-md bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors">Request Demo</Link>
          <Link to="/configurator" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">Open Configurator</Link>
        </div>
      </div>
    </section>
  )
}

export function ProductCards() {
  const products = [
    { slug: 'saddle', name: '3D-Printed Saddle', desc: 'Engineered lattice core, premium leather, precision fit.', accent: 'from-amber-400 to-orange-700' },
    { slug: 'horse-device', name: 'Horse Measurement Device', desc: 'Lightweight scanner for accurate back geometry.', accent: 'from-sky-400 to-blue-700' },
    { slug: 'rider-device', name: 'Rider Measurement Device', desc: 'Motion capture and pressure mapping for posture.', accent: 'from-emerald-400 to-emerald-700' },
    { slug: 'software', name: 'QS Design Software', desc: 'Design, simulate, and manage orders securely.', accent: 'from-fuchsia-400 to-purple-700' },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <Link key={p.slug} to={`/products/${p.slug}`} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
            <div className={`h-24 rounded-lg bg-gradient-to-br ${p.accent} ring-1 ring-white/20 mb-4`} />
            <h4 className="text-white font-semibold">{p.name}</h4>
            <p className="text-sm text-slate-300/90 mt-1">{p.desc}</p>
            <span className="text-amber-300 text-sm mt-3 inline-block group-hover:translate-x-1 transition-transform">Explore →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function Process() {
  const steps = [
    { t: 'Select Model', d: 'Choose the saddle family optimized for your discipline.', i: ShoppingCart },
    { t: 'Scan Horse & Rider', d: 'Capture back geometry and rider posture with QS devices.', i: ScanLine },
    { t: 'AI Design', d: 'QS AI shapes tree, panels, and balance for your unique pairing.', i: Cpu },
    { t: 'Materials & Finish', d: 'Pick leather grade, color, stitching, and hardware.', i: Palette },
    { t: 'Review & Order', d: 'Confirm specs, pricing, and delivery timeline.', i: CheckCircle2 },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <h3 className="text-2xl font-semibold text-white mb-6">Ordering Flow</h3>
      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((s, idx) => (
          <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200">
            <s.i className="text-amber-400 mb-3" />
            <h4 className="font-semibold text-white">{s.t}</h4>
            <p className="text-sm text-slate-300/90 mt-1">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
