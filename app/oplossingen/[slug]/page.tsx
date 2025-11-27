import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { getSiteData, getSolution } from '@/lib/getData'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solution = getSolution(params.slug)
  
  if (!solution) {
    return {
      title: 'Oplossing niet gevonden - AI-Group'
    }
  }

  return {
    title: `${solution.title} - AI-Group`,
    description: solution.description,
  }
}

export default function SolutionDetailPage({ params }: Props) {
  const solution = getSolution(params.slug)
  const data = getSiteData()

  if (!solution) {
    notFound()
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/oplossingen" 
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={20} />
              <span>Terug naar alle oplossingen</span>
            </Link>

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {solution.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {solution.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white dark:bg-slate-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Wat deze oplossing biedt
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {solution.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-gray-50 dark:bg-slate-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Hoe het werkt
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="h-64 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">AI</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Live Demo</h3>
                  <p className="text-primary-100">Interactieve demonstratie van {solution.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="section-padding bg-white dark:bg-slate-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Integreert naadloos
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {solution.title} werkt samen met alle andere AI-Group oplossingen 
                  in ons centrale platform. Geen losse systemen, maar één geïntegreerde 
                  werkplek voor alle stakeholders.
                </p>
                
                <ul className="space-y-3">
                  {data.platform.modules.slice(0, 3).map((module, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{module.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Bekijk het platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Ontdek hoe {solution.title} past in het complete AI Platform.
                </p>
                <Link
                  href="/platform"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Platform bekijken</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Klaar om te beginnen?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Laat ons {solution.title} demonstreren voor uw specifieke situatie. 
              Plan een verkenning of vraag een demo aan.
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
