'use client'

import { getSiteData } from '@/lib/getData'
import { Database, TrendingUp, BarChart3, Sparkles, Layers, Brain, Zap, LineChart, Activity } from 'lucide-react'

export default function AIComponents() {
  const data = getSiteData()
  
  const icons = [
    Database,
    TrendingUp,
    BarChart3,
    Sparkles,
    Layers,
    Brain,
    Zap,
    LineChart,
    Activity
  ]

  return (
    <section id="big-data" className="section-padding bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-400 mb-4">
            {data.aiComponents.title}
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            {data.aiComponents.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.aiComponents.components.map((component: any, index: number) => {
              const IconComponent = icons[index] || Database
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-700/50 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:from-primary-600 group-hover:to-primary-700 transition-all shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {component.title || component}
                      </h3>
                      {component.description && (
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {component.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


