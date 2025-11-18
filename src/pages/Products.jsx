import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const items = [
  { slug: 'saddle', name: '3D-Printed Saddle', summary: 'Engineered lattice core, premium leather, precision fit.' },
  { slug: 'horse-device', name: 'Horse Measurement Device', summary: 'Lightweight scanner for accurate back geometry.' },
  { slug: 'rider-device', name: 'Rider Measurement Device', summary: 'Motion capture and pressure mapping for posture.' },
  { slug: 'software', name: 'QS Design Software', summary: 'Design, simulate, and manage orders securely.' },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-white mb-6">Products</h1>
        <p className="text-slate-300/90 max-w-2xl mb-10">Explore our integrated system: scanning hardware, AI-assisted design software, and a custom 3D-printed saddle built to perform.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(p => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-40 rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)] border border-white/10 mb-4" />
              <h3 className="text-white font-semibold text-xl">{p.name}</h3>
              <p className="text-slate-300/90 mt-1">{p.summary}</p>
              <span className="text-amber-300 text-sm mt-3 inline-block">View details →</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
