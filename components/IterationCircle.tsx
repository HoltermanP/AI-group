'use client'

import { RefreshCw, TrendingUp, Zap, Brain } from 'lucide-react'

export default function IterationCircle() {
  const iterations = [
    {
      icon: Brain,
      title: 'Plan',
      description: 'Smarter decisions, driven by data.',
    },
    {
      icon: Zap,
      title: 'Do',
      description: 'Faster delivery through AI automation.',
    },
    {
      icon: TrendingUp,
      title: 'Check',
      description: 'Applications that learn and adapt.',
    },
    {
      icon: RefreshCw,
      title: 'Act',
      description: 'Continuous optimisation, automatically applied.',
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            AI-first. Brain powered by AI.
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Ons ontwikkelproces is slim, snel en volledig AI-gedreven.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Circular iteration visualization */}
          <div className="relative w-full aspect-square max-w-2xl mx-auto">
            {/* Outer circle */}
            <div className="absolute inset-0 rounded-full border-4 border-primary-200 dark:border-primary-800 animate-spin-slow">
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-400 dark:border-t-primary-600"></div>
            </div>

            {/* Center circle with AI */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-2xl relative z-10 animate-pulse">
                <div className="text-center text-white">
                  <Brain className="w-16 h-16 mx-auto mb-2 animate-pulse" />
                  <div className="text-2xl font-bold">AI-first</div>
                </div>
                {/* Pulsing rings around center */}
                <div className="absolute inset-0 rounded-full border-2 border-primary-400 opacity-75 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-primary-400 opacity-50 animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>

            {/* Iteration items positioned around circle */}
            {iterations.map((item, index) => {
              const angle = (index * 90) - 45 // Start at -45 degrees, then 45, 135, 225
              const radius = 45 // Percentage from center
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180)
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180)
              const IconComponent = item.icon

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-700 shadow-xl min-w-[200px] max-w-[250px] hover:scale-110 transition-transform duration-300 group">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Connecting lines from center to items */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {iterations.map((_, index) => {
                const angle = (index * 90) - 45
                const radius = 45
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180)
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180)

                return (
                  <line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="text-primary-300 dark:text-primary-700"
                  />
                )
              })}
            </svg>

            {/* Animated pulse elements moving along lines */}
            <style dangerouslySetInnerHTML={{
              __html: iterations.map((_, index) => {
                const angle = (index * 90) - 45
                const radius = 45
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180)
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180)
                // Use left/top percentages directly - these are relative to container
                const endX = x
                const endY = y
                
                return `
                  @keyframes pulseMove${index} {
                    0% {
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%) scale(0);
                      opacity: 0;
                    }
                    2% {
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%) scale(1.5);
                      opacity: 1;
                      filter: brightness(1.5) drop-shadow(0 0 8px rgba(59, 130, 246, 1));
                    }
                    4% {
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%) scale(1);
                      opacity: 1;
                      filter: brightness(1.2) drop-shadow(0 0 6px rgba(59, 130, 246, 0.8));
                    }
                    88% {
                      left: ${endX}%;
                      top: ${endY}%;
                      transform: translate(-50%, -50%) scale(1);
                      opacity: 1;
                      filter: brightness(1.2) drop-shadow(0 0 6px rgba(59, 130, 246, 0.8));
                    }
                    92% {
                      left: ${endX}%;
                      top: ${endY}%;
                      transform: translate(-50%, -50%) scale(1.3);
                      opacity: 0.8;
                      filter: brightness(1.5) drop-shadow(0 0 10px rgba(59, 130, 246, 1));
                    }
                    96% {
                      left: ${endX}%;
                      top: ${endY}%;
                      transform: translate(-50%, -50%) scale(0.6);
                      opacity: 0.3;
                      filter: brightness(0.8) drop-shadow(0 0 4px rgba(59, 130, 246, 0.5));
                    }
                    100% {
                      left: ${endX}%;
                      top: ${endY}%;
                      transform: translate(-50%, -50%) scale(0);
                      opacity: 0;
                      filter: brightness(0) drop-shadow(0 0 0px rgba(59, 130, 246, 0));
                    }
                  }
                `
              }).join('')
            }} />
            {iterations.map((_, index) => {
              const delay = index * 0.5

              return (
                <div
                  key={`pulse-container-${index}`}
                  className="absolute inset-0 pointer-events-none z-10"
                >
                  {[0, 1, 2].map((pulseIndex) => {
                    const pulseDelay = delay + pulseIndex * 0.6
                    return (
                      <div
                        key={`pulse-${pulseIndex}`}
                        className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 z-20"
                        style={{
                          animation: `pulseMove${index} 2s infinite ease-in-out`,
                          animationDelay: `${pulseDelay}s`,
                          opacity: 0, // Start hidden to prevent initial flash
                        }}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional text */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Onze oplossingen worden slimmer na livegang. Niet omdat we harder werken, maar omdat wij AI geïntegreerd hebben in onze manier van denken, bouwen en leveren.
          </p>
        </div>
      </div>
    </section>
  )
}


