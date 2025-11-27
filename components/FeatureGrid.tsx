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
    <section id="waarom-ai" className="section-padding bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-400 mb-4">
            Waarom AI-first?
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Wij zijn een AI-first organisatie met een bewezen trackrecord in het extreem snel ontwikkelen van slimme applicaties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
            
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-800/50 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-all duration-300 border border-primary-500/30">
                  <IconComponent className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
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
