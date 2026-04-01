import { useEffect, useState } from 'react'

const categories = ['All', 'Loan', 'Savings', 'Insurance']

export default function SchemesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [schemes, setSchemes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchSchemes = async () => {
      setLoading(true)
      setError('')

      try {
        const endpoint =
          selectedCategory === 'All'
            ? '/api/schemes'
            : `/api/schemes?category=${encodeURIComponent(selectedCategory)}`

        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error('Failed to fetch schemes')
        }

        const data = await response.json()
        setSchemes(data)
      } catch (err) {
        setError('Unable to load schemes right now. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchSchemes()
  }, [selectedCategory])

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-slate-800">Banking Schemes</h1>
        <p className="mt-2 text-slate-600">
          Explore useful Indian banking schemes and filter by category.
        </p>

        <div className="mt-6 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <label htmlFor="category" className="block text-sm font-medium text-slate-700">
            Filter by category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 focus:border-slate-400 focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {loading && <p className="mt-6 text-slate-600">Loading schemes...</p>}

        {error && <p className="mt-6 text-red-600">{error}</p>}

        {!loading && !error && (
          <section className="mt-6 grid gap-4 sm:grid-cols-2">
            {schemes.map((scheme) => (
              <article
                key={scheme.name}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <h2 className="text-lg font-semibold text-slate-800">{scheme.name}</h2>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-medium text-slate-700">Category:</span> {scheme.category}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-medium text-slate-700">Eligibility:</span>{' '}
                  {scheme.eligibility}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-medium text-slate-700">Benefits:</span> {scheme.benefits}
                </p>
              </article>
            ))}
          </section>
        )}

        {!loading && !error && schemes.length === 0 && (
          <p className="mt-6 text-slate-600">No schemes found for this category.</p>
        )}
      </div>
    </main>
  )
}