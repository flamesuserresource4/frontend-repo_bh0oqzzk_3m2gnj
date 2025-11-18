import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-28 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl font-semibold text-white mb-6">Contact & Demo</h1>
        <p className="text-slate-300/90 mb-6">Tell us about your horses, discipline, and goals. We’ll set up a tailored demonstration or connect you with a QS-certified fitter.</p>
        <form className="grid gap-4 md:grid-cols-2">
          <input required placeholder="Full name" className="rounded-md bg-slate-900 border border-white/10 p-3" />
          <input required type="email" placeholder="Email" className="rounded-md bg-slate-900 border border-white/10 p-3" />
          <input placeholder="Phone" className="rounded-md bg-slate-900 border border-white/10 p-3" />
          <select className="rounded-md bg-slate-900 border border-white/10 p-3">
            <option>Discipline</option>
            <option>Dressage</option>
            <option>Jumping</option>
            <option>Eventing</option>
            <option>Endurance</option>
          </select>
          <textarea placeholder="What would you like to achieve?" rows={5} className="md:col-span-2 rounded-md bg-slate-900 border border-white/10 p-3" />
          <button className="md:col-span-2 px-5 py-3 rounded-md bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors">Request Demo</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
