'use client'

import { RefreshCw, TrendingUp, Zap, Brain } from 'lucide-react'

export default function IterationCircle() {
  const iterations = [
    {
      icon: Zap,
      title: 'AI versnelt het bouwproces',
      description: 'Sneller ontwikkelen door AI-integratie',
    },
    {
      icon: Brain,
      title: 'AI helpt beslissingen nemen',
      description: 'Slimme keuzes op basis van data',
    },
    {
      icon: TrendingUp,
      title: 'AI maakt applicaties slimmer',
      description: 'Oplossingen die leren en groeien',
    },
    {
      icon: RefreshCw,
      title: 'AI zorgt voor zelfverbetering',
      description: 'Continue optimalisatie automatisch',
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            AI-first als USP
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Wij werken niet met AI – wij zijn AI-first. AI is fundamenteel geïntegreerd in hoe wij ontwikkelen en maakt vaak deel uit van de eindoplossing.
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
              <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                <div className="text-center text-white">
                  <Brain className="w-16 h-16 mx-auto mb-2" />
                  <div className="text-2xl font-bold">AI-first</div>
                </div>
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
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
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

