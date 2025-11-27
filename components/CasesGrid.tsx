import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getSiteData } from '@/lib/getData'
import CaseIcon from './CaseIcon'

export default function CasesGrid() {
  const data = getSiteData()

  return (
    <section id="cases" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            Track record
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Onze cases tonen het: altijd on-track en snel opgeleverd.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cases.map((caseItem, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-300 dark:border-gray-600 hover:scale-105"
            >
              {/* Case Icon */}
              <div className="h-40 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="absolute top-3 left-3">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 bg-primary-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                    {caseItem.sector}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <CaseIcon slug={caseItem.slug} sector={caseItem.sector} />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-4">
                  {caseItem.timeline && (
                    <div className="mb-3 inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-bold">
                      ⚡ {caseItem.timeline}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3 line-clamp-3">
                    {caseItem.solution}
                  </p>
                </div>

                {/* Impact metrics with platform styling */}
                <div className="space-y-1.5 mb-4">
                  {caseItem.impact.slice(0, 2).map((impact, impactIndex) => (
                    <div key={impactIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                      <span className="text-xs text-gray-700 dark:text-gray-300 font-medium line-clamp-1">{impact}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-600 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interesse in een vergelijkbare oplossing?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Laten we samen kijken hoe AI waarde kan toevoegen aan uw organisatie. 
              Plan een verkenning en ontdek de mogelijkheden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>{data.cta.primary}</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>{data.cta.secondary}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
