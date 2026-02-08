import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, MessageSquare, Send, ArrowRight, Clock, CheckCircle2 } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'helloclinikr@gmail.com',
    href: 'mailto:helloclinikr@gmail.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+91 80950 86053',
    href: 'tel:+918095086053',
    description: 'Mon–Sat, 9 AM – 7 PM IST',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, India',
    href: null,
    description: 'Built in India, for India',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const form = e.target
    const formData = new FormData(form)
    formData.append('access_key', 'a1d8a3cd-7a21-4e37-b142-ba17bf344d27')
    formData.append('subject', 'New Contact Form Submission — Clinikr')
    formData.append('from_name', 'Clinikr Website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        form.reset()
      } else {
        alert('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      alert('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative bg-gray-50 pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* BG pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(79,70,229,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

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
            <MessageSquare className="h-3.5 w-3.5" />
            Get in Touch
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] !leading-tight">
            Have Questions?{' '}
            <span className="text-primary-600">We're Here to Help</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Whether you need a demo, have a question, or want to discuss custom requirements — reach out.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 items-start">
          {/* Left — Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="group rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-gray-300/80"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50">
                    <info.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-700">{info.value}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-400">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-violet-600 p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-primary-200" />
                <span className="text-xs font-semibold text-primary-200">Quick Start</span>
              </div>
              <p className="text-sm font-bold">Want to see Clinikr in action?</p>
              <p className="mt-1 text-xs text-white/70">
                Book a free 15-minute demo and we'll show you how it fits your clinic.
              </p>
              <a
                href="#pricing"
                className="group mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:shadow-lg"
              >
                Book a Demo
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-sm text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Message Sent!</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-sm"
              >
                <input type="hidden" name="botcheck" className="hidden" />

                <h3 className="text-lg font-bold text-gray-900 mb-6">Send us a message</h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Dr. Arun Mehta"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 80950 86053"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="arun@clinic.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="clinic" className="block text-sm font-medium text-gray-700 mb-1.5">Clinic Name</label>
                  <input
                    id="clinic"
                    name="clinic"
                    type="text"
                    placeholder="HealthFirst Clinic"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your clinic and what you're looking for..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? 'Sending...' : 'Send Message'}
                  {!submitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
