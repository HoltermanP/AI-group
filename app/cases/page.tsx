import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Filter } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

export const metadata: Metadata = {
  title: 'Cases - AI-Group',
  description: 'Bekijk onze succesvolle AI-implementaties voor organisaties in alle sectoren. Meetbare resultaten en bewezen impact.',
}

export default function CasesPage() {
  const data = getSiteData()

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Bewezen resultaten
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Echte cases met meetbare impact voor organisaties in alle sectoren. 
              Van financiële groei tot klantcommunicatie - zie hoe AI waarde toevoegt aan uw organisatie.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="py-8 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">Filter op sector:</span>
            <div className="flex space-x-2">
              <button className="px-6 py-3 bg-primary-600 text-white rounded-xl text-lg font-bold border-2 border-primary-600">
                Alle
              </button>
              <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600">
                Financieel
              </button>
              <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600">
                Veiligheid
              </button>
              <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600">
                Juridisch
              </button>
              <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600">
                Customer Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.cases.map((caseItem, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                      <span className="text-sm font-medium">{caseItem.sector}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-2">
                      {caseItem.sector}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      <strong>Uitdaging:</strong> {caseItem.challenge}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      <strong>Oplossing:</strong> {caseItem.solution}
                    </p>
                  </div>

                  {/* Impact metrics */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Resultaten:</h4>
                    {caseItem.impact.map((impact, impactIndex) => (
                      <div key={impactIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{impact}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/cases/${caseItem.slug}`}
                    className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                  >
                    <span>Lees de volledige case</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Interesse in uw eigen AI-case?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Laten we samen kijken hoe AI waarde kan toevoegen aan uw organisatie. 
              Plan een verkenning en ontdek de mogelijkheden.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Plan een verkenning</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
