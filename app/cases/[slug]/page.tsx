import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react'
import { getSiteData, getCase } from '@/lib/getData'

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
    title: `${caseItem.title} - Cases - AI-Group`,
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
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <span className="text-red-500">⚠️</span>
                  <span>De Uitdaging</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caseItem.challenge}
                </p>
              </div>

              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <span className="text-primary-600">💡</span>
                  <span>De Oplossing</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caseItem.solution}
                </p>
              </div>
            </div>

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

      {/* Client Info */}
      {caseItem.client && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Over de Klant
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {caseItem.client}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
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
      </section>
    </div>
  )
}

