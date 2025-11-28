import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react'
import { getSiteData, getCase } from '@/lib/getData'
import CaseIcon from '@/components/CaseIcon'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseItem = getCase(params.slug)
  
  if (!caseItem) {
    return {
      title: 'Case niet gevonden - AI-Group'
    }
  }

  return {
    title: `${caseItem.title} - Track Record - AI-Group`,
    description: caseItem.solution,
  }
}

export default function CaseDetailPage({ params }: Props) {
  const caseItem = getCase(params.slug)
  const data = getSiteData()

  if (!caseItem) {
    notFound()
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/cases" 
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={20} />
              <span>Terug naar alle cases</span>
            </Link>

            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  {caseItem.sector}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {caseItem.title}
              </h1>
              {caseItem.description && (
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                  {caseItem.description}
                </p>
              )}
              {caseItem.timeline && (
                <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <span>⚡</span>
                  <span>{caseItem.timeline}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-white dark:bg-slate-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <span className="text-red-500">⚠️</span>
                  <span>De Uitdaging</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caseItem.detailedChallenge || caseItem.challenge}
                </p>
              </div>

              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <span className="text-primary-600">💡</span>
                  <span>De Oplossing</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caseItem.detailedSolution || caseItem.solution}
                </p>
              </div>
            </div>
            
            {/* Features */}
            {caseItem.features && caseItem.features.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Belangrijkste Functionaliteiten
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseItem.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 dark:text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6" />
                <span>Bewezen Impact</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {caseItem.impact.map((impact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <p className="text-white/90 leading-relaxed">{impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {caseItem.screenshots && caseItem.screenshots.length > 0 && (
        <section className="section-padding bg-gray-50 dark:bg-slate-700">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Screenshots
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {caseItem.screenshots.map((screenshot, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700">
                      <Image
                        src={screenshot.url}
                        alt={screenshot.alt}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {screenshot.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {screenshot.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Results */}
      {caseItem.results && caseItem.results.length > 0 && (
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Bewezen Resultaten
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseItem.results.map((result, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <p className="text-white/90 leading-relaxed">{result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Client Info */}
      {caseItem.client && (
        <section className="section-padding bg-gray-50 dark:bg-slate-700">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Over de Klant
                </h2>
                
                {typeof caseItem.client === 'object' ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {caseItem.client.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {caseItem.client.description}
                    </p>
                    
                    {caseItem.client.needs && caseItem.client.needs.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Belangrijkste Behoeften
                        </h4>
                        <ul className="space-y-2">
                          {caseItem.client.needs.map((need: string, index: number) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 dark:text-gray-300">{need}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">
                    {caseItem.client}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  )
}

