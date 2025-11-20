import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { getSiteData } from '@/lib/getData'
import AIPlatformSample from './AIPlatformSample'
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="inline-block mb-4">
                    <span className="bg-primary-500/20 text-primary-300 px-6 py-2 rounded-full text-lg font-semibold border border-primary-400/30">
                      AI-first organisatie
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    {data.hero.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed font-light">
                    {data.hero.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                      <div className="text-sm text-blue-200 mb-1">Proof of Concept</div>
                      <div className="text-2xl font-bold text-white">48 uur</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                      <div className="text-sm text-blue-200 mb-1">MVP</div>
                      <div className="text-2xl font-bold text-white">72 uur</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                      <div className="text-sm text-blue-200 mb-1">Livegang v1.0</div>
                      <div className="text-2xl font-bold text-white">2 weken</div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    href="/contact"
                    className="bg-white text-primary-600 hover:bg-blue-50 px-9 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg shadow-2xl hover:shadow-blue-200 hover:scale-105"
                  >
                    <span>{data.cta.primary}</span>
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/platform"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-9 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg hover:scale-105"
                  >
                    <Play size={20} />
                    <span>Bekijk Platform Demo</span>
                  </Link>
                </div>

              </div>

          {/* AI Platform Sample */}
          <div className="relative">
            <AIPlatformSample />
          </div>
        </div>
      </div>
    </section>
  )
}