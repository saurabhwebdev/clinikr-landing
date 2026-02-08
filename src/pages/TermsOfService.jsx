import LegalPage from '../components/LegalPage'

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By downloading, installing, or using Clinikr, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the application. These terms apply to all users including clinic owners, doctors, and staff members.',
  },
  {
    title: 'Service Description',
    content:
      'Clinikr is a clinic management platform that provides tools for patient management, appointment scheduling, invoice generation, inventory tracking, prescription management, and point-of-sale operations. The service is provided "as is" and we continuously work to improve it.',
  },
  {
    title: 'Account Responsibilities',
    content:
      'You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate information during registration. You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized access.',
  },
  {
    title: 'Acceptable Use',
    content:
      'You agree to use Clinikr only for lawful purposes and in accordance with healthcare regulations. You must not use the app to store or transmit malicious content, attempt to gain unauthorized access to our systems, or use the service in any way that could harm other users.',
  },
  {
    title: 'Healthcare Compliance',
    content:
      'You are responsible for ensuring your use of Clinikr complies with applicable healthcare laws and regulations in your jurisdiction. Clinikr is a management tool and does not provide medical advice. All medical decisions remain the responsibility of licensed healthcare professionals.',
  },
  {
    title: 'Data Ownership',
    content:
      'You retain full ownership of all data you enter into Clinikr, including patient records, invoices, and clinic information. We do not claim any ownership rights over your data. You grant us a limited license to process your data solely to provide the service.',
  },
  {
    title: 'Payment Terms',
    content:
      'Certain features may require a paid subscription. Prices are displayed before purchase. Subscriptions auto-renew unless cancelled. Refunds are handled according to our Refund Policy. We reserve the right to change pricing with advance notice.',
  },
  {
    title: 'Service Availability',
    content:
      'We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. We may perform scheduled maintenance with advance notice. We are not liable for any loss resulting from service interruptions or data transmission failures.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'Clinikr is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount you paid for the service in the preceding 12 months.',
  },
  {
    title: 'Termination',
    content:
      'We may suspend or terminate your account if you violate these terms. You may terminate your account at any time. Upon termination, your data will be retained for 30 days to allow export, after which it will be permanently deleted.',
  },
  {
    title: 'Governing Law',
    content:
      'These terms are governed by the laws of India. Any disputes arising from these terms shall be resolved in the courts of competent jurisdiction in India. If any provision is found unenforceable, the remaining provisions continue in effect.',
  },
]

export default function TermsOfService() {
  return <LegalPage title="Terms of Service" description="Read Clinikr's terms of service. Understand the rules and guidelines for using our clinic management platform." path="/terms" lastUpdated="February 2026" sections={sections} />
}
