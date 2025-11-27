'use client'

import { getSiteData } from '@/lib/getData'
import { Clock, DollarSign, Award, Sparkles } from 'lucide-react'

const iconMap = {
  'Tijd': Clock,
  'Kosten': DollarSign,
  'Kwaliteit': Award,
}

export default function TriangleOfPower() {
  const data = getSiteData()

  return (
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            {data.triangleOfPower.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {data.triangleOfPower.subtitle}
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {data.triangleOfPower.description}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Triangle SVG */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))' }}
            >
              {/* Triangle outline */}
              <polygon
                points="200,50 350,350 50,350"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-gray-300 dark:text-gray-700"
              />
              
              {/* AI center circle with pulsing effect */}
              <circle
                cx="200"
                cy="200"
                r="60"
                fill="url(#aiGradient)"
                className="animate-pulse"
              >
                <animate
                  attributeName="r"
                  values="60;70;60"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              
              {/* AI text */}
              <text
                x="200"
                y="210"
                textAnchor="middle"
                className="text-white font-bold text-2xl fill-current"
                style={{ fontSize: '24px' }}
              >
                AI
              </text>
            </svg>

            {/* Corner labels positioned absolutely */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-700 shadow-xl text-center min-w-[200px]">
                <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {data.triangleOfPower.corners[0].name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {data.triangleOfPower.corners[0].description}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 transform translate-y-4">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-700 shadow-xl text-center min-w-[200px]">
                <DollarSign className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {data.triangleOfPower.corners[1].name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {data.triangleOfPower.corners[1].description}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 transform translate-y-4">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-700 shadow-xl text-center min-w-[200px]">
                <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {data.triangleOfPower.corners[2].name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {data.triangleOfPower.corners[2].description}
                </p>
              </div>
            </div>

            {/* Animated lines from AI to corners */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line
                x1="50%"
                y1="50%"
                x2="50%"
                y2="12.5%"
                stroke="url(#lineGradient1)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <line
                x1="50%"
                y1="50%"
                x2="12.5%"
                y2="87.5%"
                stroke="url(#lineGradient2)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              <line
                x1="50%"
                y1="50%"
                x2="87.5%"
                y2="87.5%"
                stroke="url(#lineGradient3)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}


