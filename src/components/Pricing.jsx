import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Sparkles, Zap } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for solo practitioners starting out.',
    badge: null,
    cta: 'Get Started Free',
    ctaStyle: 'border border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
    features: [
      'Up to 500 patients',
      'Appointments & scheduling',
      'Basic EMR — vitals, consultations',
      'Invoicing with GST',
      'Point of Sale',
      '500 MB database storage',
      '1 clinic, 1 user',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: '₹999',
    period: '/month',
    description: 'For growing clinics that need the full power.',
    badge: 'Most Popular',
    cta: 'Start 14-Day Free Trial',
    ctaStyle: 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700',
    features: [
      'Unlimited patients',
      'Everything in Starter',
      'Full EMR — prescriptions, lab orders, documents',
      'Inventory management with alerts',
      'Reports & analytics dashboard',
      'Multi-clinic support',
      'Up to 5 team members',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For clinic chains & hospitals with custom needs.',
    badge: null,
    cta: 'Contact Sales',
    ctaStyle: 'border border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
    features: [
      'Everything in Professional',
      'Unlimited clinics & team members',
      'Dedicated database instance',
      'Custom integrations & API access',
      'SLA & uptime guarantee',
      'Dedicated account manager',
      'On-premises deployment option',
      'Training & onboarding',
    ],
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="relative bg-white pt-8 pb-20 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* BG accents */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary-50/60 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-violet-50/60 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            <Sparkles className="h-3.5 w-3.5" />
            Simple Pricing
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] !leading-tight">
            Start Free,{' '}
            <span className="text-primary-600">Grow Without Limits</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            No credit card required. No hidden fees. Upgrade only when you need to.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-6 lg:grid-cols-3 items-start">
          {plans.map((plan, i) => {
            const isPro = plan.name === 'Professional'
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 * i, ease }}
                className={`relative rounded-2xl ${
                  isPro
                    ? 'bg-gray-900 text-white ring-2 ring-primary-500/50 shadow-2xl shadow-primary-600/10 lg:-mt-4 lg:mb-0'
                    : 'bg-white ring-1 ring-gray-200 shadow-sm'
                } p-7 lg:p-8`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary-500 to-violet-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                      <Zap className="h-3 w-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-bold ${isPro ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-1 text-sm ${isPro ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`text-4xl font-extrabold ${isPro ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${isPro ? 'text-gray-400' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <a
                  href="#contact"
                  className={`group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${plan.ctaStyle}`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        isPro ? 'bg-white/10' : 'bg-primary-50'
                      }`}>
                        <Check className={`h-3 w-3 ${isPro ? 'text-primary-400' : 'text-primary-600'}`} />
                      </div>
                      <span className={`text-sm ${isPro ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-10 text-center text-sm text-gray-400"
        >
          All plans include SSL encryption, automatic backups, and 99.9% uptime. Prices exclude GST.
        </motion.p>
      </div>

      {/* Chevron → contact */}
      <svg viewBox="0 0 1440 70" className="absolute -bottom-px left-0 w-full" preserveAspectRatio="none">
        <path d="M0,0 Q360,30 720,60 Q1080,30 1440,0 L1440,70 L0,70 Z" className="fill-gray-50" />
      </svg>
    </section>
  )
}
