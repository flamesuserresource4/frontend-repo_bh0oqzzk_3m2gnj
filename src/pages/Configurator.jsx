import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const models = [
  { id: 'dressage', name: 'QS Dressage' },
  { id: 'jump', name: 'QS Jump' },
  { id: 'event', name: 'QS Event' },
]

const colors = ['Onyx Black', 'Chestnut Brown', 'Midnight Navy', 'Steel Grey']
const materials = ['Full‑grain Leather', 'Hybrid (Leather + Tech)', 'Performance Microfiber']

export default function Configurator() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    model: models[0].id,
    size: '17.5',
    shape: 'Standard',
    fit: 'Normal',
    horseScan: null,
    riderScan: null,
    color: colors[0],
    material: materials[0],
  })

  const next = () => setStep((s) => Math.min(7, s + 1))
  const prev = () => setStep((s) => Math.max(1, s - 1))

  const price = 4200 + (form.material === 'Hybrid (Leather + Tech)' ? 300 : form.material === 'Performance Microfiber' ? -150 : 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-28 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-4xl font-semibold text-white mb-2">Saddle Configurator</h1>
        <p className="text-slate-300/90 mb-8">Follow the steps to build your custom QS saddle. Save a summary and request a consultation to finalize your order.</p>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {step === 1 && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-3">Select model</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {models.map(m => (
                    <button key={m.id} onClick={() => setForm({ ...form, model: m.id })} className={`rounded-lg border p-4 text-left ${form.model === m.id ? 'border-amber-400 bg-amber-400/10' : 'border-white/10 hover:bg-white/5'}`}>
                      <div className="h-20 rounded-md bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_40%)] border border-white/10 mb-3" />
                      <div className="font-medium">{m.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-3">Choose size, shape, fit</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-slate-300/90">Seat size</label>
                    <select value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} className="mt-1 w-full rounded-md bg-slate-900 border border-white/10 p-2">
                      {['16.5','17','17.5','18'].map(s => <option key={s} value={s}>{s}"</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-300/90">Shape</label>
                    <select value={form.shape} onChange={(e) => setForm({ ...form, shape: e.target.value })} className="mt-1 w-full rounded-md bg-slate-900 border border-white/10 p-2">
                      {['Standard','Flat','Deep'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-300/90">Fit</label>
                    <select value={form.fit} onChange={(e) => setForm({ ...form, fit: e.target.value })} className="mt-1 w-full rounded-md bg-slate-900 border border-white/10 p-2">
                      {['Narrow','Normal','Wide'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-3">Add horse body scan</h3>
                <div className="rounded-md border border-dashed border-white/20 p-6 text-slate-300/90 text-center">
                  <p className="mb-2">Drag & drop scan file or click to upload</p>
                  <input type="file" accept=".stl,.obj,.ply" onChange={(e) => setForm({ ...form, horseScan: e.target.files?.[0]?.name || null })} />
                  {form.horseScan && <p className="mt-2 text-amber-300">Added: {form.horseScan}</p>}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-3">Add rider measurement</h3>
                <div className="rounded-md border border-dashed border-white/20 p-6 text-slate-300/90 text-center">
                  <p className="mb-2">Upload rider posture/pressure data (CSV or QS format)</p>
                  <input type="file" accept=".csv,.qsdat" onChange={(e) => setForm({ ...form, riderScan: e.target.files?.[0]?.name || null })} />
                  {form.riderScan && <p className="mt-2 text-amber-300">Added: {form.riderScan}</p>}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-3">Choose color/material</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-slate-300/90">Color</label>
                    <select value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} className="mt-1 w-full rounded-md bg-slate-900 border border-white/10 p-2">
                      {colors.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-300/90">Material</label>
                    <select value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} className="mt-1 w-full rounded-md bg-slate-900 border border-white/10 p-2">
                      {materials.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-3">Summary</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-slate-300/90">
                  {Object.entries(form).map(([k,v]) => (
                    <div key={k} className="flex justify-between"><span className="capitalize">{k}</span><span className="text-white">{String(v || '-') }</span></div>
                  ))}
                </div>
                <div className="mt-6 text-white text-xl">Estimated price: ${price.toLocaleString()}</div>
              </div>
            )}

            {step === 7 && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-3">Submit</h3>
                <p className="text-slate-300/90">Send your configuration to QS. A specialist will contact you to validate fit data and finalize the build.</p>
                <form onSubmit={(e) => { e.preventDefault(); alert('Submitted! We will contact you shortly.')}} className="mt-4 grid gap-3 sm:grid-cols-2">
                  <input required placeholder="Full name" className="rounded-md bg-slate-900 border border-white/10 p-2" />
                  <input required type="email" placeholder="Email" className="rounded-md bg-slate-900 border border-white/10 p-2" />
                  <input placeholder="Phone" className="rounded-md bg-slate-900 border border-white/10 p-2" />
                  <textarea placeholder="Notes" className="rounded-md bg-slate-900 border border-white/10 p-2 sm:col-span-2" rows={4} />
                  <button className="sm:col-span-2 px-5 py-3 rounded-md bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors">Request contact</button>
                </form>
              </div>
            )}

            <div className="flex justify-between">
              <button onClick={prev} disabled={step===1} className="px-4 py-2 rounded-md border border-white/20 text-white/80 disabled:opacity-40">Back</button>
              <button onClick={next} disabled={step===7} className="px-4 py-2 rounded-md bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 disabled:opacity-40">Next</button>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold mb-3">Preview</h3>
              <div className="h-48 rounded-md bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)] border border-white/10" />
              <div className="mt-4 text-sm text-slate-300/90">Model: <span className="text-white">{form.model}</span></div>
              <div className="text-sm text-slate-300/90">Color: <span className="text-white">{form.color}</span></div>
              <div className="text-sm text-slate-300/90">Material: <span className="text-white">{form.material}</span></div>
              <div className="mt-4 font-semibold text-white">${price.toLocaleString()}</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold mb-3">Steps</h3>
              <ol className="text-sm text-slate-300/90 space-y-1">
                {['Select model','Choose size, shape, fit','Add horse body scan','Add rider measurement','Choose color/material','Summary','Submit'].map((s,i)=>(
                  <li key={s} className={`${step===i+1 ? 'text-amber-300' : ''}`}>{i+1}. {s}</li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
