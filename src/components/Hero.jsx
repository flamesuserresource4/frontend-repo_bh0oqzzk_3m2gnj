import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-40 opacity-40 blur-3xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-amber-500 via-orange-700 to-slate-900" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-semibold tracking-tight text-white"
            >
              Custom-fit, 3D‑Printed Saddles
            </motion.h1>
            <p className="mt-6 text-lg text-slate-300/90 max-w-xl">
              QuickStall (QS) blends equestrian craftsmanship with advanced sensing and AI design to deliver a saddle that adapts to horse and rider—precision, comfort, and performance in one system.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="px-5 py-3 rounded-md bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors">Request Demo</Link>
              <Link to="/configurator" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">Custom Fit Measurement</Link>
              <Link to="/products/software" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">Get Early Access</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-slate-300/80">
              <div>
                <p className="text-3xl font-semibold text-white">98%</p>
                <p className="text-xs uppercase">Fit accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">30%+</p>
                <p className="text-xs uppercase">Pressure reduction</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">12 wk</p>
                <p className="text-xs uppercase">Made-to-order</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-2 shadow-2xl"
            >
              <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,200,100,0.12),transparent_40%)] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40" />
                <div className="relative max-w-sm text-center">
                  <div className="mx-auto mb-4 h-40 w-40 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10 shadow-inner" />
                  <p className="text-slate-200/90">3D Saddle viewer placeholder</p>
                </div>
              </div>
            </motion.div>
            <p className="mt-3 text-xs text-slate-400/80 text-center">Interactive 3D viewer placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}
