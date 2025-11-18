import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { USPs, VideoSection, CTA, ProductCards, Process } from '../components/Sections'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <USPs />
        <VideoSection />
        <ProductCards />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
