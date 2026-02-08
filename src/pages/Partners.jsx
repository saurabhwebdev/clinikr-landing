import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import {
  Handshake,
  Building2,
  Laptop,
  GraduationCap,
  ArrowRight,
  Check,
  Users,
  TrendingUp,
  HeartPulse,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const partnerTypes = [
  {
    icon: Building2,
    title: 'Clinic Chains & Hospitals',
    description: 'Deploy Clinikr across all your branches with centralized management, custom branding, and dedicated support.',
    benefits: [
      'Multi-location deployment',
      'Centralized admin dashboard',
      'Volume pricing',
      'Dedicated account manager',
    ],
    color: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
  },
  {
    icon: Laptop,
    title: 'Technology Partners',
    description: 'Integrate your health-tech product with Clinikr to reach thousands of clinics across India.',
    benefits: [
      'API access & documentation',
      'Co-marketing opportunities',
      'Technical integration support',
      'Joint go-to-market strategy',
    ],
    color: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
  },
  {
    icon: GraduationCap,
    title: 'Medical Associations',
    description: 'Offer Clinikr as a member benefit. Help your association\'s doctors modernize their practice.',
    benefits: [
      'Special member pricing',
      'Co-branded experience',
      'Training & onboarding support',
      'Association dashboard for insights',
    ],
    color: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
  },
  {
    icon: HeartPulse,
    title: 'Pharma & Medical Devices',
    description: 'Connect your products with clinics that actively manage inventory and prescriptions through Clinikr.',
    benefits: [
      'Clinic network access',
      'Product catalog integration',
      'Prescription data insights',
      'Direct ordering channels',
    ],
    color: 'from-rose-500 to-pink-600',
    lightBg: 'bg-rose-50',
  },
]

const whyPartner = [
  { icon: Users, value: '5,000+', label: 'Active clinics on the platform' },
  { icon: TrendingUp, value: '40%', label: 'Month-over-month growth' },
  { icon: Building2, value: '200+', label: 'Cities across India' },
]

export default function Partners() {
  return (
    <>
      <SEO
        title="Partners"
        description="Partner with Clinikr — India's fastest-growing clinic management platform. Programs for clinic chains, tech companies, medical associations, and pharma partners."
        path="/partners"
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute top-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] h-[250px] w-[250px] rounded-full bg-primary-600/10 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-sm">
              <Handshake className="h-3.5 w-3.5 text-primary-400" />
              Partner With Us
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl !leading-tight">
              Grow Together with{' '}
              <span className="bg-gradient-to-r from-primary-400 via-violet-400 to-primary-400 bg-clip-text text-transparent">
                Clinikr
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
              Join India's fastest-growing clinic management platform. Whether you're a clinic chain, tech company, or medical association — there's a partnership model for you.
            </p>
          </motion.div>
        </div>
        <svg viewBox="0 0 1440 80" className="absolute -bottom-px left-0 w-full" preserveAspectRatio="none">
          <path d="M0,80 C300,20 600,80 900,30 C1100,0 1300,40 1440,20 L1440,80 L0,80 Z" className="fill-white" />
        </svg>
      </section>

      {/* Why Partner stats */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-3 gap-6">
            {whyPartner.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease }}
                className="text-center"
              >
                <stat.icon className="mx-auto h-6 w-6 text-primary-500 mb-2" />
                <p className="text-2xl font-extrabold text-gray-900 lg:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Partnership Programs</h2>
            <p className="mt-3 text-base text-gray-500">Find the right partnership model for your organization.</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {partnerTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease }}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${type.color} shadow-lg`}>
                  <type.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{type.description}</p>
                <ul className="mt-4 space-y-2">
                  {type.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${type.lightBg}`}>
                        <Check className="h-3 w-3 text-gray-600" />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Interested in Partnering?
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Drop us a line and we'll get back to you within 24 hours to discuss how we can work together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:helloclinikr@gmail.com?subject=Partnership Inquiry"
              className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gray-800"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:bg-white"
            >
              Learn More About Clinikr
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
