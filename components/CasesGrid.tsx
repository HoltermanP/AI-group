import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

export default function CasesGrid() {
  const data = getSiteData()

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trackrecord
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Wat voor anderen onmogelijk lijkt binnen die tijd, hebben wij al gedaan. Meerdere keren.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cases.map((caseItem, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-300 dark:border-gray-600 hover:scale-105"
            >
              {/* Platform-style header */}
              <div className="h-40 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="absolute top-3 left-3">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border border-white/30">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
                      {caseItem.sector}
                    </span>
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
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3 line-clamp-2">
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

                <Link
                  href={`/cases/${caseItem.slug}`}
                  className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-bold text-sm transition-colors duration-200 border-2 border-primary-200 dark:border-primary-800 px-4 py-2 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-105"
                >
                  <span>Lees meer</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/cases"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Alle cases bekijken</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
