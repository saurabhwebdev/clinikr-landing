import SEO from './SEO'

export default function LegalPage({ title, description, path, lastUpdated, sections }) {
  return (
    <div className="pt-24">
      <SEO title={title} description={description} path={path} noIndex />
      <main className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                {i + 1}. {section.title}
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <p className="text-sm font-semibold text-gray-900">Questions about this policy?</p>
          <p className="mt-1 text-sm text-gray-500">
            Contact us at{' '}
            <a href="mailto:helloclinikr@gmail.com" className="font-medium text-primary-600 hover:text-primary-700">
              helloclinikr@gmail.com
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
