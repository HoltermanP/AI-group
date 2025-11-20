import { Metadata } from 'next'
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
            <h1 className="text-8xl md:text-9xl lg:text-10xl font-bold text-gray-900 dark:text-white mb-8">
              AI-oplossingen voor elke organisatie
            </h1>
            <p className="text-4xl md:text-5xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Van workflow automation tot intelligente agents - wij bouwen AI-oplossingen die 24/7 voor u werken. 
              Alles geïntegreerd in één krachtig AI Platform.
            </p>
          </div>
        </div>
      </section>

      <SolutionsGrid />

      {/* Platform integration */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8">
              Alles in één AI Platform
            </h2>
            <p className="text-3xl md:text-4xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Alle oplossingen werken naadloos samen in ons centrale AI Platform met realtime dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.platform.modules.map((module, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border-2 border-gray-300 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-2xl">
                  {module.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/platform" className="btn-primary">
              Bekijk het AI Platform
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
