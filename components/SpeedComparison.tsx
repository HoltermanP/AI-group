'use client'

import { getSiteData } from '@/lib/getData'
import { TrendingDown, TrendingUp } from 'lucide-react'

export default function SpeedComparison() {
  const data = getSiteData()

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hoeveel sneller zijn we?
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Een directe vergelijking tussen traditionele IT en onze AI-first aanpak
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border-b-2 border-gray-300 dark:border-gray-600">
              <div className="font-bold text-lg text-gray-700 dark:text-gray-300">Fase</div>
              <div className="font-bold text-lg text-red-600 dark:text-red-400 text-center">Traditionele IT</div>
              <div className="font-bold text-lg text-green-600 dark:text-green-400 text-center">Wij (AI-first)</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {data.speedTimeline.stages.map((stage, index) => {
                const traditionalWeeks = stage.traditional.includes('weken') 
                  ? parseInt(stage.traditional.split('-')[0]) 
                  : stage.traditional.includes('maanden')
                  ? parseInt(stage.traditional.split('-')[0]) * 4
                  : 0
                
                const aifirstHours = stage.aifirst.includes('uur')
                  ? parseInt(stage.aifirst.split(' ')[0])
                  : stage.aifirst.includes('weken')
                  ? parseInt(stage.aifirst.split(' ')[0]) * 7 * 24
                  : 0
                
                const speedup = traditionalWeeks > 0 && aifirstHours > 0 
                  ? Math.round((traditionalWeeks * 7 * 24) / aifirstHours)
                  : 0

                return (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <div className="font-semibold text-lg text-gray-900 dark:text-white flex items-center">
                      {stage.phase}
                    </div>
                    <div className="text-center flex items-center justify-center space-x-2">
                      <TrendingDown className="w-5 h-5 text-red-500" />
                      <span className="text-xl font-bold text-red-600 dark:text-red-400">
                        {stage.traditional}
                      </span>
                    </div>
                    <div className="text-center flex items-center justify-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span className="text-xl font-bold text-green-600 dark:text-green-400">
                        {stage.aifirst}
                      </span>
                      {speedup > 0 && (
                        <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full font-semibold">
                          {speedup}x sneller
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              <span className="font-bold text-primary-600 dark:text-primary-400">
                "Wat voor anderen onmogelijk lijkt binnen die tijd, hebben wij al gedaan. Meerdere keren."
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


