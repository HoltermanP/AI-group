'use client'

import { useState } from 'react'
import { getSiteData } from '@/lib/getData'
import { Clock, Zap, Rocket, RefreshCw, Play } from 'lucide-react'
import ContactModal from './ContactModal'

const iconMap = {
  'Proof of Concept': Clock,
  'MVP': Zap,
  'Livegang versie 1.0': Rocket,
  'Optimalisatie': RefreshCw,
}

export default function SpeedTimeline() {
  const data = getSiteData()
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeStage, setActiveStage] = useState<number | null>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  const handleStart = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setHasStarted(true)
    setActiveStage(null)
    
    // Reset en start animatie
    setTimeout(() => {
      data.speedTimeline.stages.forEach((_, index) => {
        setTimeout(() => {
          setActiveStage(index)
          if (index === data.speedTimeline.stages.length - 1) {
            setTimeout(() => {
              setIsAnimating(false)
              // Open contact modal spectaculair na laatste stage
              setTimeout(() => {
                setShowContactModal(true)
              }, 500)
            }, 1000)
          }
        }, index * 800)
      })
    }, 100)
  }

  return (
    <section id="proces" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            Start, speed, deliver
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Zodra jij je ambitie deelt, gaat onze AI-motor draaien en zie je binnen dagen resultaat.
          </p>
          
          {/* Start Button */}
          <button
            onClick={handleStart}
            disabled={isAnimating}
            className={`inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              isAnimating
                ? 'bg-gray-400 dark:bg-gray-600 text-white cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700 text-white hover:scale-105 hover:shadow-2xl'
            }`}
          >
            <Play className="w-6 h-6" />
            <span>{isAnimating ? 'Proces loopt...' : 'Start het proces'}</span>
          </button>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 dark:from-primary-800 dark:via-primary-600 dark:to-primary-400 transform -translate-y-1/2 z-0">
            {/* Animated progress line */}
            {hasStarted && (
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-800 ease-out"
                style={{
                  width: activeStage !== null ? `${((activeStage + 1) / data.speedTimeline.stages.length) * 100}%` : '0%'
                }}
              />
            )}
            {/* Animated pulse dot */}
            {activeStage !== null && (
              <div 
                className="absolute top-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-y-1/2 -translate-x-1/2 shadow-lg animate-pulse"
                style={{
                  left: `${((activeStage + 1) / data.speedTimeline.stages.length) * 100}%`
                }}
              />
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {data.speedTimeline.stages.map((stage, index) => {
              const IconComponent = iconMap[stage.phase as keyof typeof iconMap] || Clock
              const isActive = activeStage === index
              const isPast = activeStage !== null && activeStage > index
              const isVisible = hasStarted ? (isActive || isPast) : true
              
              return (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border-2 transition-all duration-500 group flex flex-col h-full ${
                    isActive
                      ? 'border-primary-500 dark:border-primary-400 shadow-2xl scale-105 z-20'
                      : isPast
                      ? 'border-green-400 dark:border-green-600 shadow-lg'
                      : hasStarted
                      ? 'border-gray-200 dark:border-gray-800 opacity-30'
                      : 'border-gray-200 dark:border-gray-800 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-2xl'
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0.3,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Icon - Fixed height section */}
                    <div className="mb-6 flex-shrink-0">
                      <div className={`w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
                        isActive ? 'scale-125 ring-4 ring-primary-300 dark:ring-primary-700 animate-pulse' : 'group-hover:scale-110'
                      }`}>
                        <IconComponent className={`w-10 h-10 text-white transition-transform duration-500 ${
                          isActive ? 'scale-110' : ''
                        }`} />
                      </div>
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                      )}
                      {isPast && (
                        <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                    
                    {/* Title and Description - Fixed height section */}
                    <div className="mb-6 flex-shrink-0 min-h-[100px] flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {stage.phase}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    {/* Comparison boxes - Fixed height, pushed to bottom */}
                    <div className="w-full space-y-3 mt-auto">
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 min-h-[90px] flex flex-col justify-center">
                        <div className="text-xs text-red-600 dark:text-red-400 font-semibold mb-2">
                          Traditionele IT
                        </div>
                        <div className="text-lg md:text-xl font-bold text-red-700 dark:text-red-300 leading-tight">
                          {stage.traditional}
                        </div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-600 rounded-lg p-4 relative min-h-[90px] flex flex-col justify-center">
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          WIJ
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 font-semibold mb-2">
                          AI-first
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-green-700 dark:text-green-300 leading-tight">
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

        {/* Subtitle onder de cards */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 leading-relaxed">
            {data.speedTimeline.subtitle}
          </p>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </section>
  )
}


