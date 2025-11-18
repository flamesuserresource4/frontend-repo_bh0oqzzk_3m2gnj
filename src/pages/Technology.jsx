import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-28 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl font-semibold text-white mb-6">Technology</h1>
        <section className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">3D Printing, Built for Riding</h3>
            <p className="text-slate-300/90">Our lattice core is printed with performance polymers that deliver strength and tuned flex. We use variable-density structures to manage pressure and preserve feel, then wrap with premium leather for a timeless finish.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">From Scan → Design → Print</h3>
            <p className="text-slate-300/90">The QS system connects horse and rider scans to a cloud design pipeline. Geometry and movement data inform panel volumes, tree curvature, and balance. Each saddle is simulated under load before manufacturing to validate distribution.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">AI‑Driven Design</h3>
            <p className="text-slate-300/90">QS Fit AI analyzes historical outcomes and biomechanics to propose parameter sets that meet your discipline’s demands. Designers review, adjust if needed, and approve a build with complete traceability.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
