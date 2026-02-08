import LegalPage from '../components/LegalPage'

const sections = [
  {
    title: 'Subscription Refunds',
    content:
      'If you are not satisfied with a paid subscription, you may request a full refund within 7 days of purchase. After the 7-day period, refunds are provided on a prorated basis for the remaining unused period of your subscription.',
  },
  {
    title: 'Cancellation',
    content:
      'You can cancel your subscription at any time from the app settings or by contacting support. Upon cancellation, you will continue to have access until the end of your current billing period. No further charges will be applied after cancellation.',
  },
  {
    title: 'Free Trial',
    content:
      'If you signed up for a free trial, you will not be charged until the trial period ends. You can cancel anytime during the trial to avoid charges. We will send a reminder before your trial expires.',
  },
  {
    title: 'How to Request a Refund',
    content:
      'To request a refund, email us at helloclinikr@gmail.com with your account email and reason for the refund. Refund requests are typically processed within 5-7 business days. The refund will be credited to your original payment method.',
  },
  {
    title: 'Non-Refundable Items',
    content:
      'One-time setup fees, if any, are non-refundable. Custom development or integration work is non-refundable once delivered. Data migration services are non-refundable once the migration is complete.',
  },
  {
    title: 'Chargebacks',
    content:
      'If you initiate a chargeback or dispute a payment through your bank, your account will be suspended pending resolution. We encourage you to contact us directly before initiating a chargeback, as we are committed to resolving any issues promptly.',
  },
]

export default function RefundPolicy() {
  return <LegalPage title="Refund & Cancellation Policy" description="Read Clinikr's refund and cancellation policy for subscriptions and services." path="/refund-policy" lastUpdated="February 2026" sections={sections} />
}
