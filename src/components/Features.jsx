import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Users,
  CalendarCheck,
  ClipboardList,
  Package,
  ShoppingBag,
  BarChart3,
  UserCog,
  Search,
  FileText,
  Pill,
  Heart,
  IndianRupee,
  ArrowRight,
  Check,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Building2,
  MapPin,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

function Anim({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Mini UI: Patient Search ── */
function MiniPatientSearch() {
  const patients = [
    { name: 'Anita Sharma', id: 'PT-1024', age: '34F', color: 'bg-rose-500' },
    { name: 'Rajesh Kumar', id: 'PT-1025', age: '45M', color: 'bg-blue-500' },
    { name: 'Priya Patel', id: 'PT-1026', age: '28F', color: 'bg-violet-500' },
    { name: 'Suresh Mehta', id: 'PT-1027', age: '52M', color: 'bg-emerald-500' },
  ]
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
      <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 mb-3">
        <Search className="h-3.5 w-3.5 text-gray-400" />
        <span className="text-[11px] text-gray-900 font-medium">Anita</span>
        <span className="text-[11px] text-gray-300">|</span>
      </div>
      <div className="space-y-1.5">
        {patients.map((p) => (
          <div key={p.id} className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-gray-50 transition-colors first:bg-primary-50">
            <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${p.color} text-[9px] font-bold text-white`}>
              {p.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-gray-900 truncate">{p.name}</p>
              <p className="text-[9px] text-gray-400">{p.id} · {p.age}</p>
            </div>
            <ChevronRight className="h-3 w-3 text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Mini UI: Invoice ── */
function MiniInvoice() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-[11px] font-bold text-gray-900">Invoice #1042</p>
          <p className="text-[9px] text-gray-400">Anita Sharma</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">Paid</span>
      </div>
      <div className="space-y-1.5 border-t border-gray-50 pt-2">
        <div className="flex justify-between text-[10px]">
          <span className="text-gray-500">Consultation</span>
          <span className="font-medium text-gray-900">₹500</span>
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-gray-500">Blood Test</span>
          <span className="font-medium text-gray-900">₹800</span>
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-gray-500">Medicine (3 items)</span>
          <span className="font-medium text-gray-900">₹350</span>
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-gray-500">GST (18%)</span>
          <span className="font-medium text-gray-900">₹297</span>
        </div>
      </div>
      <div className="mt-2 flex justify-between border-t border-gray-100 pt-2">
        <span className="text-[11px] font-bold text-gray-900">Total</span>
        <span className="text-[11px] font-bold text-gray-900">₹1,947</span>
      </div>
    </div>
  )
}

/* ── Mini UI: Appointment Timeline ── */
function MiniTimeline() {
  const slots = [
    { time: '9:00', name: 'Rahul Verma', type: 'Check-up', status: 'done' },
    { time: '9:30', name: 'Deepa Iyer', type: 'Follow-up', status: 'done' },
    { time: '10:00', name: 'Amit Singh', type: 'New Patient', status: 'active' },
    { time: '10:30', name: 'Meera Joshi', type: 'Consultation', status: 'upcoming' },
    { time: '11:00', name: 'Kiran Rao', type: 'Lab Review', status: 'upcoming' },
  ]
  return (
    <div className="space-y-0">
      {slots.map((s, i) => (
        <div key={i} className="flex items-start gap-3">
          {/* Timeline line */}
          <div className="flex flex-col items-center">
            <div className={`h-3 w-3 rounded-full border-2 ${
              s.status === 'done' ? 'bg-emerald-500 border-emerald-500' :
              s.status === 'active' ? 'bg-primary-500 border-primary-500 ring-4 ring-primary-100' :
              'bg-white border-gray-300'
            }`} />
            {i < slots.length - 1 && <div className="w-px flex-1 bg-gray-200 min-h-[28px]" />}
          </div>
          {/* Content */}
          <div className={`-mt-0.5 pb-3 ${s.status === 'active' ? '' : ''}`}>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400">{s.time}</span>
              {s.status === 'active' && <span className="rounded-full bg-primary-100 px-1.5 py-px text-[8px] font-bold text-primary-600">NOW</span>}
            </div>
            <p className="text-[11px] font-semibold text-gray-900">{s.name}</p>
            <p className="text-[9px] text-gray-400">{s.type}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Mini UI: Stock Alerts ── */
function MiniStockAlerts() {
  const items = [
    { name: 'Paracetamol 500mg', stock: 8, threshold: 20, expiry: 'Dec 2025' },
    { name: 'Amoxicillin 250mg', stock: 3, threshold: 15, expiry: 'Mar 2025' },
    { name: 'Cetrizine 10mg', stock: 45, threshold: 20, expiry: 'Jun 2026' },
  ]
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.name} className="rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-gray-900">{item.name}</p>
            {item.stock < item.threshold && (
              <AlertTriangle className="h-3 w-3 text-amber-500" />
            )}
          </div>
          <div className="mt-1.5 flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div
                className={`h-full rounded-full ${item.stock < item.threshold ? 'bg-amber-400' : 'bg-emerald-400'}`}
                style={{ width: `${Math.min((item.stock / item.threshold) * 100, 100)}%` }}
              />
            </div>
            <span className={`text-[9px] font-bold ${item.stock < item.threshold ? 'text-amber-600' : 'text-emerald-600'}`}>
              {item.stock} left
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Mini UI: Revenue Chart ── */
function MiniRevenueChart() {
  const bars = [40, 65, 45, 80, 55, 90, 70]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  return (
    <div>
      <div className="flex items-end justify-between gap-1.5 h-20">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={`w-full rounded-md transition-all ${i === 5 ? 'bg-gradient-to-t from-primary-600 to-primary-400' : 'bg-gray-200'}`}
              style={{ height: `${h}%` }}
            />
            <span className="text-[8px] font-medium text-gray-400">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section id="features" className="relative bg-gray-50 pt-16 pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(79,70,229,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            <Heart className="h-3.5 w-3.5" />
            Built for Clinics
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] !leading-tight">
            Every Problem Your Clinic Faces,{' '}
            <span className="text-primary-600">Solved</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We talked to hundreds of doctors across India. Here's what they struggled with — and how Clinikr fixes it.
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="grid gap-5 lg:grid-cols-3">

          {/* ── Card 1: Patients (Large — spans 2 cols) ── */}
          <Anim className="lg:col-span-2" delay={0}>
            <div className="group relative h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300/80 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full" />
              <div className="relative grid gap-6 sm:grid-cols-2 items-start">
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Never Lose a Patient Record</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    Ditch the paper files forever. Every patient's history, demographics, and medical records — searchable in seconds.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {['Instant search by name, phone, or ID', 'Complete medical history at a glance', 'Emergency contacts & demographics'].map(p => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-3.5 w-3.5 shrink-0 text-blue-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden sm:block">
                  <MiniPatientSearch />
                </div>
              </div>
            </div>
          </Anim>

          {/* ── Card 2: Appointments ── */}
          <Anim delay={0.08}>
            <div className="group relative h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300/80 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20">
                  <CalendarCheck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Zero Scheduling Conflicts</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  No more double-bookings. Assign doctors, track status, and keep patients flowing.
                </p>
                <div className="mt-4">
                  <MiniTimeline />
                </div>
              </div>
            </div>
          </Anim>

          {/* ── Card 3: EMR ── */}
          <Anim delay={0.04}>
            <div className="group relative h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300/80 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-50 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg shadow-rose-500/20">
                  <ClipboardList className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Complete Care Records</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Vitals, consultations, prescriptions, lab orders — all linked to the patient.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    { icon: Heart, label: 'Vitals', desc: 'BP, Heart rate, Temp' },
                    { icon: Pill, label: 'Prescriptions', desc: 'Digital Rx' },
                    { icon: FileText, label: 'Lab Orders', desc: 'Results tracking' },
                    { icon: ClipboardList, label: 'Consult Notes', desc: 'Full history' },
                  ].map(item => (
                    <div key={item.label} className="rounded-lg bg-gray-50 p-2.5">
                      <item.icon className="h-3.5 w-3.5 text-rose-500 mb-1" />
                      <p className="text-[11px] font-semibold text-gray-900">{item.label}</p>
                      <p className="text-[9px] text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Anim>

          {/* ── Card 4: Billing (Large — spans 2 cols) ── */}
          <Anim className="lg:col-span-2" delay={0.08}>
            <div className="group relative h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300/80 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full" />
              <div className="relative grid gap-6 sm:grid-cols-2 items-start">
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/20">
                    <IndianRupee className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Get Paid Faster, Accurately</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    Auto-generate GST invoices from consultations. Track who owes you and what's overdue — no spreadsheets needed.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {['Auto-invoicing from consultations', 'GST-compliant with tax calculations', 'Payment status & overdue tracking'].map(p => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden sm:block">
                  <MiniInvoice />
                </div>
              </div>
            </div>
          </Anim>

          {/* ── Card 5: Inventory ── */}
          <Anim delay={0}>
            <div className="group relative h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300/80 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-50 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/20">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">No Stockouts or Wastage</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Real-time stock levels, low-stock alerts, and expiry tracking. Reorder before it's too late.
                </p>
                <div className="mt-4">
                  <MiniStockAlerts />
                </div>
              </div>
            </div>
          </Anim>

          {/* ── Card 6: POS ── */}
          <Anim delay={0.04}>
            <div className="group relative h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300/80 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-50 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 shadow-lg shadow-cyan-500/20">
                  <ShoppingBag className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Sell from Your Counter</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Full POS for medicines and products. UPI, card, or cash — no extra hardware.
                </p>
                <ul className="mt-4 space-y-2">
                  {['Quick checkout with any payment mode', 'Daily session reconciliation', 'Transaction history & held carts'].map(p => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-3.5 w-3.5 shrink-0 text-cyan-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Anim>

          {/* ── Card 7: Multi-Clinic ── */}
          <Anim delay={0.08}>
            <div className="group relative h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300/80 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg shadow-indigo-500/20">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">One App, Many Clinics</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Manage multiple branches from a single account. Switch clinics in one tap.
                </p>
                <div className="mt-4 space-y-2">
                  {[
                    { name: 'HealthFirst — Koramangala', patients: '842', color: 'bg-blue-500' },
                    { name: 'HealthFirst — Indiranagar', patients: '536', color: 'bg-indigo-500' },
                    { name: 'HealthFirst — HSR Layout', patients: '291', color: 'bg-violet-500' },
                  ].map(c => (
                    <div key={c.name} className="flex items-center gap-2.5 rounded-lg bg-gray-50 px-3 py-2">
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${c.color}`}>
                        <MapPin className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-gray-900 truncate">{c.name}</p>
                        <p className="text-[9px] text-gray-400">{c.patients} patients</p>
                      </div>
                      <ChevronRight className="h-3 w-3 text-gray-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Anim>

          {/* ── Card 8: Analytics (Large — spans 2 cols) ── */}
          <Anim className="lg:col-span-2" delay={0.08}>
            <div className="group relative h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300/80 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full" />
              <div className="relative grid gap-6 sm:grid-cols-2 items-start">
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg shadow-teal-500/20">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Know How Your Clinic is Doing</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    Revenue, patient trends, doctor performance — all on your dashboard. Make decisions with data, not guesses.
                  </p>
                  <div className="mt-4 flex gap-3">
                    {[
                      { label: 'Revenue', value: '₹4.2L', change: '+18%' },
                      { label: 'Patients', value: '1,248', change: '+12%' },
                    ].map(s => (
                      <div key={s.label} className="flex-1 rounded-lg bg-gray-50 p-3">
                        <p className="text-[10px] text-gray-400">{s.label}</p>
                        <p className="text-lg font-bold text-gray-900">{s.value}</p>
                        <p className="text-[10px] font-semibold text-emerald-600">{s.change} this month</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[11px] font-bold text-gray-900">Weekly Revenue</p>
                      <span className="text-[9px] font-semibold text-emerald-600 flex items-center gap-0.5">
                        <TrendingUp className="h-2.5 w-2.5" /> +18%
                      </span>
                    </div>
                    <MiniRevenueChart />
                  </div>
                </div>
              </div>
            </div>
          </Anim>

          {/* ── Card 9: Team ── */}
          <Anim delay={0}>
            <div className="group relative h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300/80 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-50 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-lg shadow-pink-500/20">
                  <UserCog className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Run Your Team, Your Way</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Add doctors and staff with role-based access. Everyone sees only what they need.
                </p>
                <div className="mt-4 space-y-2">
                  {[
                    { name: 'Dr. Arun M.', role: 'Owner', color: 'bg-primary-600' },
                    { name: 'Dr. Priya S.', role: 'Doctor', color: 'bg-emerald-500' },
                    { name: 'Rekha D.', role: 'Receptionist', color: 'bg-amber-500' },
                  ].map(m => (
                    <div key={m.name} className="flex items-center gap-2.5 rounded-lg bg-gray-50 px-3 py-2">
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${m.color} text-[9px] font-bold text-white`}>
                        {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] font-semibold text-gray-900">{m.name}</p>
                      </div>
                      <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-medium text-gray-500 ring-1 ring-gray-200">{m.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Anim>
        </div>

        {/* Bottom CTA */}
        <Anim className="mt-12 text-center" delay={0.1}>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl"
          >
            Start Using Clinikr Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-sm text-gray-400">No credit card required</p>
        </Anim>
      </div>

      {/* Diagonal tilt → dark modules */}
      <svg viewBox="0 0 1440 80" className="absolute -bottom-px left-0 w-full" preserveAspectRatio="none">
        <path d="M0,80 L0,60 Q720,0 1440,50 L1440,80 Z" className="fill-gray-950" />
      </svg>
    </section>
  )
}
