import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Stethoscope, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  // On sub-pages, always use light (scrolled) style
  const isLight = !isHome || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Resolve href: on homepage use #anchor, on sub-pages use /#anchor
  const resolveHref = (href) => (isHome ? href : `/${href}`)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 shadow-lg shadow-primary-600/25 group-hover:shadow-primary-600/40 transition-shadow">
            <Stethoscope className="h-5 w-5 text-white" strokeWidth={2.5} />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${isLight ? 'text-gray-900' : 'text-white'}`}>
            Clinik<span className="text-primary-400">r</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isLight
                  ? 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={resolveHref('#contact')}
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              isLight
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700'
                : 'bg-white text-gray-900 shadow-lg hover:bg-gray-100'
            }`}
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
            isLight ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 pb-6 pt-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={resolveHref(link.href)}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href={resolveHref('#contact')}
                  onClick={() => setMobileOpen(false)}
                  className="block text-center rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
