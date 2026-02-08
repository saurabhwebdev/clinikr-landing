import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Star,
  Shield,
  Smartphone,
  Bell,
  Users,
  CalendarCheck,
  TrendingUp,
  Home,
  Calendar,
  Receipt,
  MoreHorizontal,
  Search,
  Play,
  X,
  Wifi,
  BatteryFull,
  Signal,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
})

const kpis = [
  { label: 'Patients', value: '1,248', icon: Users, gradient: 'from-blue-500 to-indigo-600' },
  { label: 'Revenue', value: '₹4.2L', icon: TrendingUp, gradient: 'from-emerald-500 to-teal-600' },
  { label: 'Visits', value: '89', icon: CalendarCheck, gradient: 'from-orange-500 to-amber-600' },
]

const appointments = [
  { name: 'Anita Sharma', time: '10:30 AM', type: 'Follow-up', avatar: 'AS', color: 'bg-rose-500' },
  { name: 'Rajesh Patel', time: '11:00 AM', type: 'New Patient', avatar: 'RP', color: 'bg-blue-500' },
  { name: 'Meera Joshi', time: '11:30 AM', type: 'Consultation', avatar: 'MJ', color: 'bg-violet-500' },
]

const tabs = [
  { icon: Home, label: 'Home', active: true },
  { icon: Users, label: 'Patients' },
  { icon: Calendar, label: 'Schedule' },
  { icon: Receipt, label: 'Billing' },
  { icon: MoreHorizontal, label: 'More' },
]

const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ' // Replace with your actual video ID

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
        {/* Asymmetric soft curve */}
        <svg viewBox="0 0 1440 100" className="absolute -bottom-px w-full" preserveAspectRatio="none">
          <path d="M0,80 C300,20 600,100 900,40 C1100,0 1300,50 1440,20 L1440,100 L0,100 Z" className="fill-gray-50" />
        </svg>
        <div className="absolute top-[15%] left-[10%] h-[400px] w-[400px] rounded-full bg-primary-600/15 blur-[120px]" />
        <div className="absolute top-[10%] right-[5%] h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pt-32 pb-28 lg:grid-cols-2 lg:gap-16 lg:pt-40 lg:pb-36">
        {/* Left */}
        <div className="max-w-xl">
          <motion.div {...fadeUp(0)} className="mb-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm">
              <Smartphone className="h-3.5 w-3.5 text-primary-400" />
              Android · iPhone · Web
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl !leading-[1.1]"
          >
            Your Entire Clinic,{' '}
            <span className="bg-gradient-to-r from-primary-400 via-violet-400 to-primary-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
              In Your Pocket
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 max-w-md text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            Patients, appointments, billing, EMR, prescriptions & POS — one app
            that runs everywhere. Built for Indian healthcare.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-xl transition-all hover:shadow-2xl"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-100 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Get Started Free</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
            >
              <Play className="h-4 w-4 text-primary-400 fill-primary-400" />
              See How It Works
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap items-center gap-5 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-400">4.9</span>
            </div>
            <span className="text-white/10">|</span>
            <span className="text-gray-400">5,000+ clinics</span>
            <span className="text-white/10">|</span>
            <div className="flex items-center gap-1">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-gray-400">SOC 2</span>
            </div>
          </motion.div>
        </div>

        {/* Right — iPhone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[300px]">
            {/* Glow */}
            <div className="absolute -inset-12 rounded-full bg-gradient-to-b from-primary-500/20 via-violet-500/15 to-transparent blur-3xl" />

            {/* Phone frame */}
            <div className="relative rounded-[2.75rem] bg-gray-800 p-[3px] shadow-2xl shadow-black/40 ring-1 ring-white/10">
              <div className="rounded-[2.6rem] bg-black p-[2px]">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-white">
                  {/* Dynamic Island */}
                  <div className="absolute top-0 inset-x-0 z-30 flex justify-center pt-2">
                    <div className="h-[24px] w-[90px] rounded-full bg-black" />
                  </div>

                  {/* Status bar */}
                  <div className="relative z-20 flex items-center justify-between px-7 pt-[2.75rem] pb-0.5">
                    <span className="text-[11px] font-semibold text-gray-900">9:41</span>
                    <div className="flex items-center gap-1">
                      <Signal className="h-3 w-3 text-gray-900" />
                      <Wifi className="h-3 w-3 text-gray-900" />
                      <BatteryFull className="h-3 w-3 text-gray-900" />
                    </div>
                  </div>

                  {/* App screen */}
                  <div className="bg-gray-50 px-5 pb-4 pt-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-gray-400">Good morning</p>
                        <p className="text-[15px] font-bold text-gray-900">Dr. Arun</p>
                      </div>
                      <div className="relative">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                          <Bell className="h-4 w-4 text-gray-600" />
                        </div>
                        <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-gray-50" />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-gray-100">
                      <Search className="h-3.5 w-3.5 text-gray-400" />
                      <span className="text-[11px] text-gray-400">Search patients, invoices...</span>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {kpis.map((kpi) => (
                        <div key={kpi.label} className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
                          <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${kpi.gradient} shadow-sm`}>
                            <kpi.icon className="h-3.5 w-3.5 text-white" />
                          </div>
                          <p className="text-[13px] font-bold text-gray-900">{kpi.value}</p>
                          <p className="text-[9px] text-gray-400">{kpi.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <div className="mb-2.5 flex items-center justify-between">
                        <p className="text-[12px] font-semibold text-gray-900">Today</p>
                        <p className="text-[10px] font-medium text-primary-600">See all</p>
                      </div>
                      <div className="space-y-2">
                        {appointments.map((apt) => (
                          <div key={apt.name} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
                            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${apt.color} text-[11px] font-bold text-white`}>
                              {apt.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[12px] font-semibold text-gray-900 truncate">{apt.name}</p>
                              <p className="text-[10px] text-gray-400">{apt.type}</p>
                            </div>
                            <p className="text-[10px] font-medium text-gray-500 shrink-0">{apt.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tab bar */}
                  <div className="bg-white px-2 pb-4 pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-around">
                      {tabs.map((tab) => (
                        <div key={tab.label} className="flex flex-col items-center gap-0.5">
                          <tab.icon
                            className={`h-[17px] w-[17px] ${tab.active ? 'text-primary-600' : 'text-gray-400'}`}
                            strokeWidth={tab.active ? 2.5 : 1.8}
                          />
                          <span className={`text-[9px] font-medium ${tab.active ? 'text-primary-600' : 'text-gray-400'}`}>
                            {tab.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mx-auto mt-1.5 h-[4px] w-[90px] rounded-full bg-gray-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                title="Clinikr Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
