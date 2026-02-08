import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  Users,
  CalendarCheck,
  ClipboardList,
  IndianRupee,
  Package,
  ShoppingBag,
  BarChart3,
  Heart,
  Pill,
  FileText,
  Stethoscope,
  Search,
  ChevronRight,
  Check,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  Clock,
  CreditCard,
  Receipt,
  Shield,
  Smartphone,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const modules = [
  {
    id: 'patients',
    label: 'Patients',
    icon: Users,
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-600',
    accentColor: 'text-blue-500',
    headline: 'Your Patient Directory, Digitized',
    description: 'Stop searching through paper files. Every patient record — demographics, medical history, emergency contacts — organized and searchable in seconds. Link to EMR, invoices, and appointments automatically.',
    capabilities: [
      'Search by name, phone number, or patient ID',
      'Complete demographics with medical history',
      'Emergency contacts & insurance details',
      'Linked EMR records, invoices & appointments',
      'Patient count & registration trends',
      'Import patients from spreadsheets',
    ],
    visual: 'patients',
  },
  {
    id: 'emr',
    label: 'EMR',
    icon: ClipboardList,
    gradient: 'from-rose-500 to-pink-600',
    lightBg: 'bg-rose-50',
    lightText: 'text-rose-600',
    accentColor: 'text-rose-500',
    headline: 'Complete Electronic Medical Records',
    description: 'Record vitals, write consultation notes, generate prescriptions, order lab tests, and store documents — all linked to the patient. A full EMR that fits in your pocket.',
    capabilities: [
      'Vital signs tracking — BP, heart rate, SpO2, temperature',
      'Digital consultation notes with history',
      'Prescription generation with drug database',
      'Lab test orders & result tracking',
      'Medical document uploads & storage',
      'Full patient timeline view',
    ],
    visual: 'emr',
  },
  {
    id: 'appointments',
    label: 'Scheduling',
    icon: CalendarCheck,
    gradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-600',
    accentColor: 'text-emerald-500',
    headline: 'Smart Scheduling, Zero Conflicts',
    description: 'Calendar-based appointment management with doctor assignment, status tracking, and patient flow control. No more double-bookings or missed appointments.',
    capabilities: [
      'Week-view calendar with day navigation',
      'Doctor-wise appointment slots',
      'Status tracking — scheduled, confirmed, checked-in, completed',
      'Configurable appointment duration & booking rules',
      'Upcoming, today & past appointment views',
      'Appointment receipts & reminders',
    ],
    visual: 'appointments',
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: IndianRupee,
    gradient: 'from-amber-500 to-orange-600',
    lightBg: 'bg-amber-50',
    lightText: 'text-amber-600',
    accentColor: 'text-amber-500',
    headline: 'GST-Compliant Invoicing Made Simple',
    description: 'Generate invoices from consultations, track payments, and manage outstanding dues. Fully GST-compliant with configurable tax rates, service catalog, and payment tracking.',
    capabilities: [
      'Auto-generate invoices from consultations',
      'GST & tax calculation with GSTIN support',
      'Service catalog with custom pricing',
      'Payment status — draft, sent, partial, paid, overdue',
      'Bank details & UPI on invoices',
      'Custom invoice numbering & branding',
    ],
    visual: 'billing',
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: Package,
    gradient: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-600',
    accentColor: 'text-violet-500',
    headline: 'Track Every Pill, Every Bottle',
    description: 'Real-time stock levels with automatic low-stock alerts and expiry tracking. Organize by categories, manage suppliers, and track every stock movement.',
    capabilities: [
      'Product catalog with SKU generation',
      'Real-time stock levels & low-stock alerts',
      'Expiry date tracking & alerts',
      'Category & supplier management',
      'Stock adjustment with transaction history',
      'Default GST % per product',
    ],
    visual: 'inventory',
  },
  {
    id: 'pos',
    label: 'POS',
    icon: ShoppingBag,
    gradient: 'from-cyan-500 to-sky-600',
    lightBg: 'bg-cyan-50',
    lightText: 'text-cyan-600',
    accentColor: 'text-cyan-500',
    headline: 'Your Clinic Counter, Supercharged',
    description: 'Full point-of-sale for medicines and clinic products. Sell to walk-in or registered patients, accept any payment mode, and reconcile daily sessions — no extra hardware needed.',
    capabilities: [
      'Quick product & service checkout',
      'UPI, card, and cash payments',
      'Patient-linked transactions',
      'Hold carts & resume later',
      'Daily session open/close with reconciliation',
      'Complete transaction history',
    ],
    visual: 'pos',
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: BarChart3,
    gradient: 'from-teal-500 to-emerald-600',
    lightBg: 'bg-teal-50',
    lightText: 'text-teal-600',
    accentColor: 'text-teal-500',
    headline: 'Data-Driven Decisions for Your Clinic',
    description: '8 built-in reports across revenue, appointments, patients, and inventory. Track performance, identify trends, and make smarter business decisions.',
    capabilities: [
      'Revenue & outstanding payments reports',
      'Appointment summary & doctor performance',
      'Patient registration & visit trends',
      'Stock summary & movement reports',
      'Custom date range selection',
      'Exportable report data',
    ],
    visual: 'reports',
  },
]

/* ── Mini Visuals for each module ── */

function PatientsVisual() {
  const patients = [
    { name: 'Anita Sharma', id: 'PT-1024', age: '34F', color: 'bg-rose-500' },
    { name: 'Rajesh Kumar', id: 'PT-1025', age: '45M', color: 'bg-blue-500' },
    { name: 'Priya Patel', id: 'PT-1026', age: '28F', color: 'bg-violet-500' },
    { name: 'Suresh Mehta', id: 'PT-1027', age: '52M', color: 'bg-emerald-500' },
    { name: 'Deepa Iyer', id: 'PT-1028', age: '39F', color: 'bg-amber-500' },
  ]
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-sm ring-1 ring-gray-200">
        <Search className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-900 font-medium">Anita</span>
        <span className="text-sm text-gray-300">|</span>
      </div>
      <div className="space-y-1.5">
        {patients.map((p) => (
          <div key={p.id} className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-2.5 shadow-sm ring-1 ring-gray-100 transition-colors first:ring-blue-200 first:bg-blue-50/50">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${p.color} text-xs font-bold text-white`}>
              {p.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{p.name}</p>
              <p className="text-xs text-gray-400">{p.id} · {p.age}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  )
}

function EmrVisual() {
  return (
    <div className="space-y-3">
      {/* Patient header */}
      <div className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-sm ring-1 ring-gray-100">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">AS</div>
        <div>
          <p className="text-sm font-bold text-gray-900">Anita Sharma</p>
          <p className="text-xs text-gray-400">PT-1024 · 34F</p>
        </div>
      </div>
      {/* EMR cards */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: Heart, label: 'Vitals', value: 'BP: 120/80', color: 'text-red-500', bg: 'bg-red-50' },
          { icon: Stethoscope, label: 'Consultations', value: '3 visits', color: 'text-blue-500', bg: 'bg-blue-50' },
          { icon: Pill, label: 'Prescriptions', value: '2 active', color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { icon: FileText, label: 'Lab Orders', value: '1 pending', color: 'text-amber-500', bg: 'bg-amber-50' },
        ].map(item => (
          <div key={item.label} className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
            <div className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg ${item.bg}`}>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
            <p className="text-xs font-semibold text-gray-900">{item.label}</p>
            <p className="text-[11px] text-gray-400">{item.value}</p>
          </div>
        ))}
      </div>
      {/* Recent vitals */}
      <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
        <p className="text-xs font-semibold text-gray-900 mb-2">Latest Vitals</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Heart Rate', value: '72 bpm' },
            { label: 'SpO2', value: '98%' },
            { label: 'Temp', value: '98.4°F' },
          ].map(v => (
            <div key={v.label} className="text-center">
              <p className="text-sm font-bold text-gray-900">{v.value}</p>
              <p className="text-[10px] text-gray-400">{v.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AppointmentsVisual() {
  const slots = [
    { time: '9:00 AM', name: 'Rahul Verma', type: 'Check-up', status: 'done' },
    { time: '9:30 AM', name: 'Deepa Iyer', type: 'Follow-up', status: 'done' },
    { time: '10:00 AM', name: 'Amit Singh', type: 'New Patient', status: 'active' },
    { time: '10:30 AM', name: 'Meera Joshi', type: 'Consultation', status: 'upcoming' },
    { time: '11:00 AM', name: 'Kiran Rao', type: 'Lab Review', status: 'upcoming' },
  ]
  return (
    <div className="space-y-3">
      {/* Day strip */}
      <div className="flex gap-1.5">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
          <div key={d} className={`flex-1 rounded-xl py-2 text-center ${i === 2 ? 'bg-emerald-500 text-white shadow-md' : 'bg-white text-gray-500 ring-1 ring-gray-100'}`}>
            <p className="text-[10px] font-medium">{d}</p>
            <p className={`text-sm font-bold ${i === 2 ? '' : 'text-gray-900'}`}>{12 + i}</p>
          </div>
        ))}
      </div>
      {/* Timeline */}
      <div className="space-y-0">
        {slots.map((s, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div className={`h-3 w-3 rounded-full border-2 ${
                s.status === 'done' ? 'bg-emerald-500 border-emerald-500' :
                s.status === 'active' ? 'bg-emerald-500 border-emerald-500 ring-4 ring-emerald-100' :
                'bg-white border-gray-300'
              }`} />
              {i < slots.length - 1 && <div className="w-px flex-1 bg-gray-200 min-h-[36px]" />}
            </div>
            <div className="-mt-0.5 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400">{s.time}</span>
                {s.status === 'active' && <span className="rounded-full bg-emerald-100 px-1.5 py-px text-[9px] font-bold text-emerald-600">NOW</span>}
                {s.status === 'done' && <span className="rounded-full bg-gray-100 px-1.5 py-px text-[9px] font-medium text-gray-400">Done</span>}
              </div>
              <p className="text-sm font-semibold text-gray-900">{s.name}</p>
              <p className="text-xs text-gray-400">{s.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BillingVisual() {
  return (
    <div className="space-y-3">
      {/* Invoice card */}
      <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm font-bold text-gray-900">Invoice #1042</p>
            <p className="text-xs text-gray-400">Anita Sharma · 15 Jan 2026</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Paid</span>
        </div>
        <div className="space-y-2 border-t border-gray-100 pt-3">
          {[
            { item: 'Consultation', amount: '₹500' },
            { item: 'Blood Test (CBC)', amount: '₹800' },
            { item: 'Paracetamol 500mg × 10', amount: '₹120' },
          ].map(row => (
            <div key={row.item} className="flex justify-between text-sm">
              <span className="text-gray-500">{row.item}</span>
              <span className="font-medium text-gray-900">{row.amount}</span>
            </div>
          ))}
          <div className="flex justify-between text-xs text-gray-400 pt-1">
            <span>GST (18%)</span>
            <span>₹255.60</span>
          </div>
        </div>
        <div className="mt-3 flex justify-between border-t border-gray-100 pt-3">
          <span className="text-sm font-bold text-gray-900">Total</span>
          <span className="text-sm font-bold text-gray-900">₹1,675.60</span>
        </div>
      </div>
      {/* Status cards */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Paid', value: '₹2.4L', color: 'text-emerald-600' },
          { label: 'Pending', value: '₹38K', color: 'text-amber-600' },
          { label: 'Overdue', value: '₹8.2K', color: 'text-red-600' },
        ].map(s => (
          <div key={s.label} className="rounded-xl bg-white p-3 text-center shadow-sm ring-1 ring-gray-100">
            <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[11px] text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function InventoryVisual() {
  const items = [
    { name: 'Paracetamol 500mg', stock: 8, max: 50, expiry: 'Dec 2025', low: true },
    { name: 'Amoxicillin 250mg', stock: 3, max: 30, expiry: 'Mar 2025', low: true },
    { name: 'Cetrizine 10mg', stock: 45, max: 50, expiry: 'Jun 2026', low: false },
    { name: 'Azithromycin 500mg', stock: 22, max: 40, expiry: 'Sep 2026', low: false },
  ]
  return (
    <div className="space-y-3">
      {/* Alert banner */}
      <div className="flex items-center gap-2 rounded-xl bg-amber-50 px-3.5 py-2.5 ring-1 ring-amber-200">
        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
        <p className="text-xs font-medium text-amber-700">2 items below threshold</p>
      </div>
      {/* Items */}
      <div className="space-y-2">
        {items.map(item => (
          <div key={item.name} className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-900">{item.name}</p>
              {item.low && <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />}
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.low ? 'bg-amber-400' : 'bg-emerald-400'}`}
                  style={{ width: `${(item.stock / item.max) * 100}%` }}
                />
              </div>
              <span className={`text-xs font-bold ${item.low ? 'text-amber-600' : 'text-emerald-600'}`}>
                {item.stock}/{item.max}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-gray-400">Exp: {item.expiry}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PosVisual() {
  const cart = [
    { name: 'Paracetamol 500mg', qty: 2, price: '₹24' },
    { name: 'Cetrizine 10mg', qty: 1, price: '₹45' },
    { name: 'Consultation Fee', qty: 1, price: '₹500' },
  ]
  return (
    <div className="space-y-3">
      {/* Cart */}
      <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-gray-900">Cart</p>
          <span className="text-xs text-gray-400">3 items</span>
        </div>
        <div className="space-y-2.5">
          {cart.map(item => (
            <div key={item.name} className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-400">Qty: {item.qty}</p>
              </div>
              <p className="text-sm font-semibold text-gray-900">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 border-t border-gray-100 pt-3 flex justify-between">
          <span className="text-sm font-bold text-gray-900">Total</span>
          <span className="text-sm font-bold text-gray-900">₹569</span>
        </div>
      </div>
      {/* Payment modes */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: CreditCard, label: 'Card' },
          { icon: Smartphone, label: 'UPI' },
          { icon: IndianRupee, label: 'Cash' },
        ].map(mode => (
          <button key={mode.label} className="flex flex-col items-center gap-1.5 rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100 hover:ring-cyan-200 transition-colors">
            <mode.icon className="h-5 w-5 text-cyan-500" />
            <span className="text-xs font-medium text-gray-600">{mode.label}</span>
          </button>
        ))}
      </div>
      {/* Session info */}
      <div className="flex items-center gap-2 rounded-xl bg-cyan-50 px-3.5 py-2.5 ring-1 ring-cyan-200">
        <Clock className="h-4 w-4 text-cyan-500" />
        <p className="text-xs font-medium text-cyan-700">Session open since 9:00 AM · 12 transactions</p>
      </div>
    </div>
  )
}

function ReportsVisual() {
  const bars = [35, 52, 44, 68, 58, 82, 74]
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  return (
    <div className="space-y-3">
      {/* Revenue chart */}
      <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-bold text-gray-900">Weekly Revenue</p>
          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
            <TrendingUp className="h-3 w-3" /> +18%
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-4">₹4,21,800</p>
        <div className="flex items-end justify-between gap-2 h-24">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={`w-full rounded-md ${i === 5 ? 'bg-gradient-to-t from-teal-600 to-teal-400' : 'bg-gray-200'}`}
                style={{ height: `${h}%` }}
              />
              <span className="text-[10px] font-medium text-gray-400">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Report cards */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Patients', value: '+48', sub: 'this month' },
          { label: 'Appointments', value: '89%', sub: 'completion' },
          { label: 'Revenue', value: '₹4.2L', sub: '+18% MoM' },
          { label: 'Stock Alerts', value: '3', sub: 'low items' },
        ].map(card => (
          <div key={card.label} className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
            <p className="text-[11px] text-gray-400">{card.label}</p>
            <p className="text-lg font-bold text-gray-900">{card.value}</p>
            <p className="text-[10px] text-gray-400">{card.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const visuals = {
  patients: PatientsVisual,
  emr: EmrVisual,
  appointments: AppointmentsVisual,
  billing: BillingVisual,
  inventory: InventoryVisual,
  pos: PosVisual,
  reports: ReportsVisual,
}

export default function Modules() {
  const [active, setActive] = useState('patients')
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const mod = modules.find(m => m.id === active)
  const Visual = visuals[active]

  return (
    <section id="modules" className="relative bg-gray-950 pt-16 pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Subtle bg accents */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-[150px]" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center mb-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5 text-primary-400" />
            7 Modules, 1 App
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] !leading-tight">
            Everything Your Clinic Needs,{' '}
            <span className="bg-gradient-to-r from-primary-400 via-violet-400 to-primary-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">Nothing It Doesn't</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Each module is purpose-built for Indian clinics. Tap through to see exactly what's inside.
          </p>
        </motion.div>

        {/* Module tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {modules.map((m) => {
              const isActive = active === m.id
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(m.id)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'text-gray-400 ring-1 ring-white/10 hover:ring-white/20 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <m.icon className={`h-4 w-4 ${isActive ? 'text-gray-900' : ''}`} />
                  {m.label}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Content area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start"
          >
            {/* Left — details */}
            <div className="lg:py-4">
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${mod.gradient} shadow-lg`}>
                <mod.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl !leading-snug">
                {mod.headline}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-400">
                {mod.description}
              </p>
              <ul className="mt-6 space-y-3">
                {mod.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10`}>
                      <Check className={`h-3 w-3 ${mod.lightText}`} />
                    </div>
                    <span className="text-sm text-gray-300">{cap}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:shadow-xl"
                >
                  Start using {mod.label} for free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right — visual mockup */}
            <div className="relative">
              {/* Glow behind */}
              <div className={`absolute -inset-8 rounded-3xl bg-gradient-to-br ${mod.gradient} opacity-[0.08] blur-2xl`} />
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-1.5">
                <div className="rounded-xl bg-gray-50 p-5 sm:p-6">
                  <Visual />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Layered curves → white pricing */}
      <svg viewBox="0 0 1440 90" className="absolute -bottom-px left-0 w-full" preserveAspectRatio="none">
        <path d="M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,90 L0,90 Z" className="fill-white/5" />
        <path d="M0,70 C320,40 640,90 960,50 C1200,25 1360,70 1440,55 L1440,90 L0,90 Z" className="fill-white" />
      </svg>
    </section>
  )
}
