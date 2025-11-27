import { Metadata } from 'next'
import Link from 'next/link'
import SolutionsGrid from '@/components/SolutionsGrid'
import { getSiteData } from '@/lib/getData'

export const metadata: Metadata = {
  title: 'Oplossingen - AI-Group',
  description: 'Ontdek onze AI-oplossingen voor alle organisaties: Van workflow automation tot intelligente agents die 24/7 voor u werken.',
}

export default function SolutionsPage() {
  const data = getSiteData()

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              AI-oplossingen voor elke organisatie
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Van workflow automation tot intelligente agents - wij bouwen AI-oplossingen die 24/7 voor u werken. 
              Alles geïntegreerd in één krachtig AI Platform.
            </p>
          </div>
        </div>
      </section>

      <SolutionsGrid />

      {/* Platform integration */}
      <section className="section-padding bg-white dark:bg-slate-700">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Alles in één AI Platform
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Alle oplossingen werken naadloos samen in ons centrale AI Platform met realtime dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.platform.modules.map((module, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-700 p-8 rounded-2xl border-2 border-gray-300 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                  {module.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/platform" className="btn-primary">
              Bekijk het AI Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
