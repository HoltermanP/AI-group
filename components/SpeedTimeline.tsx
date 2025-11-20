'use client'

import { getSiteData } from '@/lib/getData'
import { Clock, Zap, Rocket, RefreshCw } from 'lucide-react'

const iconMap = {
  'Proof of Concept': Clock,
  'MVP': Zap,
  'Livegang v1.0': Rocket,
  'Optimalisatie': RefreshCw,
}

export default function SpeedTimeline() {
  const data = getSiteData()

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {data.speedTimeline.title}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {data.speedTimeline.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 dark:from-primary-800 dark:via-primary-600 dark:to-primary-400 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {data.speedTimeline.stages.map((stage, index) => {
              const IconComponent = iconMap[stage.phase as keyof typeof iconMap] || Clock
              
              return (
                <div
                  key={index}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stage.phase}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {stage.description}
                      </p>
                    </div>

                    <div className="w-full space-y-3">
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                        <div className="text-xs text-red-600 dark:text-red-400 font-semibold mb-1">
                          Traditionele IT
                        </div>
                        <div className="text-xl font-bold text-red-700 dark:text-red-300">
                          {stage.traditional}
                        </div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-600 rounded-lg p-4 relative">
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          WIJ
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 font-semibold mb-1">
                          AI-first
                        </div>
                        <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                          {stage.aifirst}
                        </div>
                      </div>
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

