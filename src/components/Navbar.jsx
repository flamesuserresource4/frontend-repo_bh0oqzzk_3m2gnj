import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/configurator', label: 'Ordering' },
  { to: '/technology', label: 'Technology' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-amber-400 to-orange-700 ring-1 ring-white/20 shadow-lg" />
            <span className="font-semibold tracking-tight text-white">QuickStall</span>
            <span className="ml-1 text-xs text-amber-300/80">QS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-amber-300' : 'text-slate-300 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/configurator"
              className="inline-flex items-center justify-center rounded-md bg-amber-500/90 hover:bg-amber-400 text-slate-900 font-semibold px-4 py-2 transition-colors"
            >
              Configure Saddle
            </Link>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-2 rounded ${isActive ? 'text-amber-300 bg-white/5' : 'text-slate-300 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/configurator"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-amber-500/90 hover:bg-amber-400 text-slate-900 font-semibold px-4 py-2 transition-colors"
            >
              Configure Saddle
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
