import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'

const productData = {
  'saddle': {
    title: '3D-Printed Saddle',
    gallery: [
      'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1200&auto=format&fit=crop',
    ],
    specs: [
      ['Core', '3D-printed lattice polymer'],
      ['Tree', 'Adaptive composite with tuned flex'],
      ['Panels', 'Pressure-diffusing foam + air mesh'],
      ['Leather', 'Full-grain, hand-finished'],
      ['Weight', '4.8–5.6 kg (size dependent)'],
    ],
    benefits: [
      'Optimized pressure distribution',
      'Consistent balance across gaits and movements',
      'Replaceable components and serviceable design',
      'Weather-resistant construction',
    ],
    ordering: 'Built-to-order with scanning. Typical delivery 10–12 weeks.',
  },
  'horse-device': {
    title: 'Horse Measurement Device',
    gallery: [
      'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1200&auto=format&fit=crop',
    ],
    specs: [
      ['Capture', 'Structured light + IMU fusion'],
      ['Resolution', '≤1.5 mm'],
      ['Battery', 'USB-C, 6–8 hrs'],
      ['Weight', '650 g'],
    ],
    benefits: [
      'Fast, accurate back geometry',
      'Works indoor/outdoor',
      'Cloud sync to QS Design Software',
    ],
    ordering: 'Available to partners and QS-certified fitters.',
  },
  'rider-device': {
    title: 'Rider Measurement Device',
    gallery: [
      'https://images.unsplash.com/photo-1618085224826-20bcc1cdcd27?q=80&w=1200&auto=format&fit=crop',
    ],
    specs: [
      ['Sensors', 'IMU + pressure mapping'],
      ['Sampling', '120 Hz posture, 60 Hz pressure'],
      ['Battery', 'USB-C, 8–10 hrs'],
      ['Weight', '420 g'],
    ],
    benefits: [
      'Analyze symmetry and stability',
      'Inform tree and panel geometry',
      'Monitor training progress over time',
    ],
    ordering: 'Available to partners and QS-certified fitters.',
  },
  'software': {
    title: 'QS Design Software',
    gallery: [
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    ],
    specs: [
      ['Platform', 'Web + desktop'],
      ['Security', 'End-to-end encrypted data flow'],
      ['AI', 'QS Fit AI v3'],
      ['Export', 'Manufacturing-ready CAD + BOM'],
    ],
    benefits: [
      'Manage scans, designs, and orders',
      'Collaborate with QS fitters and engineers',
      'Subscription tiers for teams and retailers',
    ],
    ordering: 'Subscription-based. Early access available.',
  },
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = productData[slug]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!product ? (
          <div className="py-20">
            <h1 className="text-3xl font-semibold text-white">Product not found</h1>
            <Link className="text-amber-300 mt-3 inline-block" to="/products">Back to products</Link>
          </div>
        ) : (
          <div className="pb-20">
            <h1 className="text-4xl font-semibold text-white mb-6">{product.title}</h1>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {product.gallery.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-white/10">
                    <img src={src} alt="product" className="w-full h-64 object-cover" />
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-white font-semibold mb-3">Technical Specs</h3>
                  <ul className="text-slate-300/90 space-y-2">
                    {product.specs.map(([k,v]) => (
                      <li key={k} className="flex justify-between gap-4">
                        <span className="text-slate-200">{k}</span>
                        <span className="text-right">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-white font-semibold mb-3">Benefits</h3>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300/90">
                    {product.benefits.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-white font-semibold mb-3">Ordering</h3>
                  <p className="text-slate-300/90">{product.ordering}</p>
                  {slug === 'software' && (
                    <div className="mt-4">
                      <h4 className="font-medium text-white">Subscriptions</h4>
                      <ul className="text-slate-300/90 list-disc pl-5 mt-1">
                        <li>Studio — for individual fitters</li>
                        <li>Team — for stables and retailers</li>
                        <li>Enterprise — for large retailers and manufacturers</li>
                      </ul>
                    </div>
                  )}
                  <div className="mt-6 flex gap-3">
                    <Link to="/configurator" className="px-5 py-3 rounded-md bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors">Configure</Link>
                    <Link to="/contact" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">Request quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
