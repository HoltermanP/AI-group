'use client'

import { getSiteData } from '@/lib/getData'
import { Clock, Award } from 'lucide-react'
import Image from 'next/image'

export default function TriangleOfPower() {
  const data = getSiteData()

  return (
    <section className="section-padding bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-400 mb-4">
            {data.triangleOfPower.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
            {data.triangleOfPower.subtitle}
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-6">
            {data.triangleOfPower.description}
          </p>
          {data.triangleOfPower.explanation && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50">
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                {data.triangleOfPower.explanation}
              </p>
            </div>
          )}
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Triangle SVG */}
          <div className="relative w-full aspect-square flex items-center justify-center px-4 md:px-0">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full max-w-[90vw] md:max-w-[500px]"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))' }}
            >
              {/* Triangle outline */}
              <polygon
                points="200,50 350,350 50,350"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-gray-700"
              />
              
              {/* Logo background circle with pulsing effect */}
              <circle
                cx="200"
                cy="200"
                r="60"
                fill="url(#aiGradient)"
                className="animate-pulse"
              >
                <animate
                  attributeName="r"
                  values="60;65;60"
                  dur="3s"
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
            </svg>

            {/* Logo in center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-24 h-24 md:w-28 md:h-28">
                <Image
                  src="/logo.svg"
                  alt="AI-Group logo"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Corner labels positioned absolutely */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 md:-translate-y-4">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-3 md:p-6 border-2 border-primary-500/50 shadow-xl text-center min-w-[140px] md:min-w-[200px] max-w-[160px] md:max-w-none">
                <Clock className="w-5 h-5 md:w-8 md:h-8 text-primary-400 mx-auto mb-1 md:mb-2" />
                <h3 className="text-base md:text-2xl font-bold text-white mb-1 md:mb-2">
                  {data.triangleOfPower.corners[0].name}
                </h3>
                <p className="text-xs md:text-sm text-gray-300">
                  {data.triangleOfPower.corners[0].description}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 transform translate-y-2 md:translate-y-4 -translate-x-2 md:translate-x-0">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-3 md:p-6 border-2 border-primary-500/50 shadow-xl text-center min-w-[140px] md:min-w-[200px] max-w-[160px] md:max-w-none">
                <div className="w-5 h-5 md:w-8 md:h-8 text-primary-400 mx-auto mb-1 md:mb-2 flex items-center justify-center">
                  <span className="text-2xl md:text-4xl font-bold">€</span>
                </div>
                <h3 className="text-base md:text-2xl font-bold text-white mb-1 md:mb-2">
                  {data.triangleOfPower.corners[1].name}
                </h3>
                <p className="text-xs md:text-sm text-gray-300">
                  {data.triangleOfPower.corners[1].description}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 transform translate-y-2 md:translate-y-4 translate-x-2 md:translate-x-0">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-3 md:p-6 border-2 border-primary-500/50 shadow-xl text-center min-w-[140px] md:min-w-[200px] max-w-[160px] md:max-w-none">
                <Award className="w-5 h-5 md:w-8 md:h-8 text-primary-400 mx-auto mb-1 md:mb-2" />
                <h3 className="text-base md:text-2xl font-bold text-white mb-1 md:mb-2">
                  {data.triangleOfPower.corners[2].name}
                </h3>
                <p className="text-xs md:text-sm text-gray-300">
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


