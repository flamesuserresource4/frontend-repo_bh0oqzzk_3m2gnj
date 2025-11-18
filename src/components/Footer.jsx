export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-amber-400 to-orange-700 ring-1 ring-white/20 shadow" />
            <span className="font-semibold text-white">QuickStall</span>
          </div>
          <p className="text-slate-300/80 leading-relaxed">
            Premium equestrian technology—custom-fit, data-driven saddles designed for performance, comfort, and longevity.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Products</h4>
          <ul className="space-y-2 text-slate-300/90">
            <li>3D-Printed Saddle</li>
            <li>Horse Measurement Device</li>
            <li>Rider Measurement Device</li>
            <li>QS Design Software</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-slate-300/90">
            <li>About</li>
            <li>Technology</li>
            <li>Careers</li>
            <li>Retail Partners</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <p className="text-slate-300/90">info@quickstall.com</p>
          <p className="text-slate-300/90">+1 (555) 014-0173</p>
          <p className="text-slate-300/90 mt-3">© {new Date().getFullYear()} QuickStall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
