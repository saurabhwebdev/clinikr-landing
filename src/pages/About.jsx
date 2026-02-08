import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import {
  Heart,
  Shield,
  Smartphone,
  Target,
  Lightbulb,
  Globe,
  ArrowRight,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const values = [
  {
    icon: Heart,
    title: 'Healthcare First',
    description: 'Every feature we build starts with one question — does this help a doctor treat patients better?',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    description: 'Patient data never leaves your control. We don\'t sell, share, or monetize health records. Ever.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Native',
    description: 'Built for the way Indian doctors actually work — on their phones, between patients, on the go.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Lightbulb,
    title: 'Simple Over Complex',
    description: 'We obsess over removing complexity, not adding features. If a doctor can\'t figure it out in 10 seconds, we redesign it.',
    color: 'from-amber-500 to-orange-600',
  },
]

const stats = [
  { value: '5,000+', label: 'Clinics' },
  { value: '12L+', label: 'Patients Managed' },
  { value: '50L+', label: 'Appointments Booked' },
  { value: '4.9', label: 'App Store Rating' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Clinikr's mission to make healthcare management effortless for Indian doctors and clinics. Built mobile-first, privacy-focused, and simple to use."
        path="/about"
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute top-[20%] left-[10%] h-[300px] w-[300px] rounded-full bg-primary-600/15 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[250px] w-[250px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-sm">
              <Target className="h-3.5 w-3.5 text-primary-400" />
              Our Mission
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl !leading-tight">
              Making Healthcare Management{' '}
              <span className="bg-gradient-to-r from-primary-400 via-violet-400 to-primary-400 bg-clip-text text-transparent">
                Effortless
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
              We're building the tools that Indian doctors and clinics deserve — modern, mobile-first, and actually enjoyable to use. No more paper registers, no more Excel spreadsheets.
            </p>
          </motion.div>
        </div>
        <svg viewBox="0 0 1440 80" className="absolute -bottom-px left-0 w-full" preserveAspectRatio="none">
          <path d="M0,80 L0,60 Q720,0 1440,50 L1440,80 Z" className="fill-white" />
        </svg>
      </section>

      {/* Stats */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease }}
                className="text-center"
              >
                <p className="text-3xl font-extrabold text-gray-900 lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Our Story</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
              <p>
                Clinikr was born out of a simple observation: the software available to Indian clinics was either ancient, expensive, or built for hospitals — not the solo practitioner or small clinic that makes up 80% of healthcare in India.
              </p>
              <p>
                We talked to hundreds of doctors across the country. We sat in their clinics, watched how they worked, and understood their pain. The result is Clinikr — a modern, mobile-first clinic management platform that runs on Android, iPhone, and the web.
              </p>
              <p>
                Every feature in Clinikr solves a real problem that a real doctor told us about. From managing patient records to generating GST invoices, from tracking medicine inventory to running a point-of-sale counter — it's all built to work the way Indian clinics actually operate.
              </p>
              <p>
                We're headquartered in Bengaluru and our team is passionate about bringing world-class healthcare technology to every clinic in India — whether it's in a metro city or a small town.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl mb-12"
          >
            What We Believe In
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease }}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm"
              >
                <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${v.color} shadow-lg`}>
                  <v.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            <Globe className="h-3.5 w-3.5" />
            Join Us
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Ready to Modernize Your Clinic?
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Join thousands of doctors who've switched to Clinikr. Start free — no credit card needed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gray-800"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:helloclinikr@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
