import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { getSiteData } from '@/lib/getData'
// import AnimatedSection from './AnimatedSection'

export default function Hero() {
  const data = getSiteData()

  return (
    <section className="relative ai-background section-padding overflow-hidden min-h-screen flex items-center">
      {/* Floating Elements */}
      <div className="floating-elements">
        {[...Array(8)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="floating-circle"
            style={{
              width: Math.random() * 40 + 20 + 'px',
              height: Math.random() * 40 + 20 + 'px',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 15 + 's',
              animationDuration: (Math.random() * 10 + 15) + 's'
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`square-${i}`}
            className="floating-square"
            style={{
              width: Math.random() * 30 + 15 + 'px',
              height: Math.random() * 30 + 15 + 'px',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 20 + 's',
              animationDuration: (Math.random() * 10 + 20) + 's'
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={`triangle-${i}`}
            className="floating-triangle"
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 18 + 's',
              animationDuration: (Math.random() * 8 + 18) + 's'
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="text-center space-y-16">
            {/* Badge */}
            <div className="flex justify-center">
              <span className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full text-base md:text-lg font-semibold border-2 border-white/30 shadow-lg">
                AI-first organisatie
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight px-4 tracking-tight">
                <span className="block">We ship fast.</span>
                <span className="block mt-2 md:mt-3">Deal with it.</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 leading-relaxed max-w-4xl mx-auto px-4 font-medium">
                Wij leveren binnen weken, hoe groot je organisatie ook is.
              </p>
            </div>

            {/* Timeline Cards - Symmetrisch */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4">
              <div className="bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-2xl px-8 py-6 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 flex-1 min-w-[200px] max-w-[240px]">
                <div className="text-sm md:text-base text-blue-200 mb-2 font-medium">Proof of Concept</div>
                <div className="text-3xl md:text-4xl font-bold text-white">48 uur</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-2xl px-8 py-6 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 flex-1 min-w-[200px] max-w-[240px]">
                <div className="text-sm md:text-base text-blue-200 mb-2 font-medium">MVP</div>
                <div className="text-3xl md:text-4xl font-bold text-white">72 uur</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-2xl px-8 py-6 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 flex-1 min-w-[200px] max-w-[240px]">
                <div className="text-sm md:text-base text-blue-200 mb-2 font-medium">Livegang versie 1.0</div>
                <div className="text-3xl md:text-4xl font-bold text-white">4 weken</div>
              </div>
            </div>

            {/* CTAs - Symmetrisch */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg md:text-xl shadow-2xl hover:shadow-blue-200 hover:scale-105 w-full sm:w-auto min-w-[280px]"
              >
                <span>{data.cta.primary}</span>
                <ArrowRight size={24} />
              </Link>
              <Link
                href="/cases"
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-primary-600 px-10 py-5 rounded-2xl font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg md:text-xl hover:scale-105 w-full sm:w-auto min-w-[280px] shadow-xl"
              >
                <Play size={24} />
                <span>Bekijk onze cases</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}