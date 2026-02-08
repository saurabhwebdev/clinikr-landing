import LegalPage from '../components/LegalPage'

const sections = [
  {
    title: 'Information We Collect',
    content:
      'We collect information you provide directly, including clinic details, patient records, appointment data, invoice information, and account credentials. We also collect usage data such as app interaction patterns and device information to improve our services.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'Your data is used to provide and maintain the Clinikr service, process appointments and invoices, send email notifications (when configured), generate reports and analytics for your clinic, and improve app performance and features.',
  },
  {
    title: 'Data Storage & Security',
    content:
      'All data is stored securely on Supabase cloud infrastructure with encryption at rest and in transit. Patient health records are handled with strict confidentiality. We implement industry-standard security measures including TLS encryption, row-level security policies, and secure authentication.',
  },
  {
    title: 'Patient Data Protection',
    content:
      'Patient health information is stored in compliance with applicable healthcare data regulations. Access to patient data is restricted to authorized clinic staff only. We do not sell, share, or monetize patient data with any third parties.',
  },
  {
    title: 'Email & Communication Data',
    content:
      'When you configure email settings, your SMTP credentials are stored securely and used solely for sending emails on your behalf. Email app passwords are encrypted and never shared. You can delete your email configuration at any time.',
  },
  {
    title: 'Third-Party Services',
    content:
      'We use Supabase for database and authentication, Razorpay for payment processing (when enabled), and SMTP providers (Gmail, Outlook, etc.) for email delivery. Each service has its own privacy policy governing data they process.',
  },
  {
    title: 'Data Retention',
    content:
      'Your data is retained as long as your account is active. You can request deletion of your account and all associated data at any time. Upon deletion, data is permanently removed within 30 days, except where retention is required by law.',
  },
  {
    title: 'Your Rights',
    content:
      'You have the right to access, correct, export, or delete your personal data. You can request a copy of all your data or ask us to erase it completely. To exercise these rights, contact us at helloclinikr@gmail.com.',
  },
  {
    title: 'Changes to This Policy',
    content:
      'We may update this privacy policy from time to time. We will notify you of any material changes via the app or email. Continued use of the app after changes constitutes acceptance of the updated policy.',
  },
]

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" description="Read Clinikr's privacy policy. Learn how we collect, use, and protect your clinic and patient data." path="/privacy" lastUpdated="February 2026" sections={sections} />
}
