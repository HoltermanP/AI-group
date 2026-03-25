import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

export default function CTA() {
  const data = getSiteData()

  return (
        <section className="section-padding bg-gradient-to-br from-brand-navy via-brand-black to-brand-black relative overflow-hidden">
          {/* Platform-style background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-blueLight/10"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-blueLight"></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Binnen 48 uur inzicht in wat AI voor u kan betekenen
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Start met een Proof of Concept binnen 48 uur. Geen maanden wachten op een eerste inzicht – wij leveren wat anderen beloven. Binnen weken.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link
                  href="/contact"
                  className="bg-brand-blue text-white hover:bg-brand-blueLight px-12 py-6 rounded-[6px] font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg shadow-2xl hover:shadow-brand-blue/30 hover:scale-105 border border-brand-blue"
                >
                  <span>{data.cta.primary}</span>
                  <ArrowRight size={28} />
                </Link>
                <Link
                  href="/contact"
                  className="border border-brand-red text-white hover:bg-brand-red hover:text-white px-12 py-6 rounded-[6px] font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg hover:scale-105 backdrop-blur-sm"
                >
                  <Calendar size={28} />
                  <span>{data.cta.secondary}</span>
                </Link>
              </div>

              <div className="mt-12 text-muted-foreground text-base">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-blueLight rounded-full animate-pulse"></div>
                    <span className="font-medium">Geen verplichtingen</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></div>
                    <span className="font-medium">Binnen 24 uur reactie</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
                    <span className="font-medium">Gratis verkenning</span>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  )
}
