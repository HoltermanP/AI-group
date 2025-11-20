import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'
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

      {/* Cases Grid */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.cases.map((caseItem, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Image placeholder */}
                <div className="h-40 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <TrendingUp className="w-10 h-10 mx-auto mb-2" />
                      <span className="text-xs font-medium">{caseItem.sector}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full mb-2">
                      {caseItem.sector}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mb-2 line-clamp-2">
                      <strong>Uitdaging:</strong> {caseItem.challenge}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 line-clamp-2">
                      <strong>Oplossing:</strong> {caseItem.solution}
                    </p>
                  </div>

                  {/* Impact metrics */}
                  <div className="space-y-1.5 mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white text-xs">Resultaten:</h4>
                    {caseItem.impact.slice(0, 2).map((impact, impactIndex) => (
                      <div key={impactIndex} className="flex items-center space-x-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium line-clamp-1">{impact}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/cases/${caseItem.slug}`}
                    className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 text-sm"
                  >
                    <span>Lees meer</span>
                    <ArrowRight size={14} />
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
