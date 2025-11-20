import { Zap, Brain, TrendingUp, RefreshCw } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

const iconMap = {
  zap: Zap,
  brain: Brain,
  'trending-up': TrendingUp,
  'refresh-cw': RefreshCw,
}

export default function FeatureGrid() {
  const data = getSiteData()

  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Waarom AI-first?
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Wij zijn een AI-first organisatie met een bewezen trackrecord in het extreem snel ontwikkelen van slimme applicaties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
            
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
