import LegalPage from '../components/LegalPage'

const sections = [
  {
    title: 'Your Right to Delete',
    content:
      'You have the right to request deletion of your personal data and all associated clinic data at any time. This includes patient records, appointments, invoices, prescriptions, inventory data, and account information.',
  },
  {
    title: 'How to Request Deletion',
    content:
      'To request complete data deletion, send an email to helloclinikr@gmail.com from your registered email address with the subject "Data Deletion Request". Include your clinic name and account email for verification.',
  },
  {
    title: 'What Gets Deleted',
    content:
      'Upon a verified deletion request, we will permanently delete: your user account and profile, all clinic information and settings, all patient records and medical data, all appointments and scheduling data, all invoices and payment records, all prescriptions and EMR data, all inventory and product data, and all email configuration and credentials.',
  },
  {
    title: 'Deletion Timeline',
    content:
      'Data deletion requests are processed within 7 business days. Once initiated, the deletion is irreversible. Active data is removed immediately, and backup copies are purged within 30 days. You will receive a confirmation email when deletion is complete.',
  },
  {
    title: 'Data Export Before Deletion',
    content:
      'We recommend exporting your data before requesting deletion. You can export patient lists, invoices, and appointment history from the app. Contact support if you need assistance with data export.',
  },
  {
    title: 'Exceptions',
    content:
      'Certain data may be retained if required by law (e.g., financial records for tax compliance). In such cases, we will inform you of the specific data retained and the legal basis. Retained data will be deleted as soon as the legal obligation expires.',
  },
  {
    title: 'Account Recovery',
    content:
      'Once data deletion is complete, it cannot be recovered. If you wish to use Clinikr again, you will need to create a new account. We recommend downloading any important data before submitting a deletion request.',
  },
]

export default function DataDeletion() {
  return <LegalPage title="Data Deletion" description="Learn how to request deletion of your data from Clinikr. We respect your right to data privacy." path="/data-deletion" lastUpdated="February 2026" sections={sections} />
}
