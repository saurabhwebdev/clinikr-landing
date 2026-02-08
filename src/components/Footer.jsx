import { Link } from 'react-router-dom'
import {
  Stethoscope,
  Mail,
  Phone,
  MapPin,
  Heart,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from 'lucide-react'

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Modules', href: '#modules' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about', isRoute: true },
      { label: 'Partners', href: '/partners', isRoute: true },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy', isRoute: true },
      { label: 'Terms of Service', href: '/terms', isRoute: true },
      { label: 'Refund Policy', href: '/refund-policy', isRoute: true },
      { label: 'Data Deletion', href: '/data-deletion', isRoute: true },
    ],
  },
]

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400">
      {/* Rounded scoop from contact */}
      <svg viewBox="0 0 1440 50" className="absolute -top-px left-0 w-full" preserveAspectRatio="none">
        <path d="M0,0 L0,50 L1440,50 L1440,0 Q1080,45 720,50 Q360,45 0,0 Z" className="fill-gray-950" />
        <path d="M0,0 L1440,0 L1440,0 Q1080,45 720,50 Q360,45 0,0 Z" className="fill-gray-50" />
      </svg>
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 shadow-lg shadow-primary-600/25">
                <Stethoscope className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Clinik<span className="text-primary-400">r</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              India's modern clinic management app. Manage patients, appointments,
              billing, EMR, inventory & POS — all from your phone.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:helloclinikr@gmail.com"
                className="flex items-center gap-2.5 text-sm hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-500" />
                helloclinikr@gmail.com
              </a>
              <a
                href="tel:+918095086053"
                className="flex items-center gap-2.5 text-sm hover:text-primary-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-gray-500" />
                +91 80950 86053
              </a>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin className="h-4 w-4 text-gray-500 mt-0.5 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-primary-600 hover:text-white transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white tracking-wide">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-sm hover:text-primary-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm hover:text-primary-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-gray-800" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Clinikr. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm">
            Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> in India
            <span className="ml-1">🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
