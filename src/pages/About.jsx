import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-28 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl font-semibold text-white mb-6">Our Story</h1>
        <p className="text-slate-300/90 max-w-3xl">QuickStall was founded by riders and engineers who believe performance and comfort shouldn’t be a tradeoff. We build technology that respects equestrian tradition while pushing the boundaries of what a saddle can be.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="h-32 rounded-md bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)] border border-white/10 mb-4" />
              <h3 className="text-white font-semibold">Team Member {i}</h3>
              <p className="text-slate-300/90 text-sm">Role • Bio snippet about innovation and riding background.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
