import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Clinikr'
const SITE_URL = 'https://clinikr.com'
const DEFAULT_DESCRIPTION =
  'Clinikr is the all-in-one clinic management app for Indian healthcare. Manage patients, appointments, billing, EMR, prescriptions, inventory & POS — all from your phone.'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — India's Modern Clinic Management App`
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
