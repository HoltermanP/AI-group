'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "",
    role: "",
    company: "",
    content: "Binnen 48 uur hadden we een werkend prototype. Binnen 4 weken stond het volledige platform live. Traditionele IT zou hier maanden over doen.",
    rating: 5,
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "",
    role: "",
    company: "",
    content: "AI-Group heeft onze veiligheidsprocessen compleet getransformeerd. 35% minder incidenten en 100% compliance - ongekend resultaat.",
    rating: 5,
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "",
    role: "",
    company: "",
    content: "Het AI Platform geeft ons real-time inzicht in alle projecten. Workflows die voorheen dagen kostten, zijn nu in uren klaar.",
    rating: 5,
    image: "/testimonial-3.jpg"
  },
  {
    id: 4,
    name: "",
    role: "",
    company: "",
    content: "Onze Contractbot beantwoordt nu 24/7 vragen over raamcontracten. Medewerkers vinden direct wat ze zoeken, zonder door documenten te moeten bladeren.",
    rating: 5,
    image: "/testimonial-4.jpg"
  },
  {
    id: 5,
    name: "",
    role: "",
    company: "",
    content: "EasyBoek heeft onze administratie volledig geautomatiseerd. Als ZZP'er bespaar ik nu 10 uur per week aan boekhouding. Een game changer.",
    rating: 5,
    image: "/testimonial-5.jpg"
  },
  {
    id: 6,
    name: "",
    role: "",
    company: "",
    content: "De Tax & Wealth HUB geeft ons real-time inzicht in financiële groei en belastingoptimalisatie. We maken nu proactieve beslissingen in plaats van reactief te handelen.",
    rating: 5,
    image: "/testimonial-6.jpg"
  },
  {
    id: 7,
    name: "",
    role: "",
    company: "",
    content: "Onze klantcommunicatie-agent werkt 24/7 en beantwoordt 80% van alle vragen automatisch. Response tijd is van uren naar seconden gegaan.",
    rating: 5,
    image: "/testimonial-7.jpg"
  },
  {
    id: 8,
    name: "",
    role: "",
    company: "",
    content: "De AI Content Creator genereert automatisch onze social media content. We publiceren nu consistent zonder extra marketingkosten. ROI binnen 2 maanden.",
    rating: 5,
    image: "/testimonial-8.jpg"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000) // Change testimonial every 5 seconds
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume after 10 seconds
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume after 10 seconds
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="container-custom text-center relative z-10">
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-400 mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-12">
            Echte verhalen van organisaties die hun processen hebben getransformeerd met AI-Group.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative overflow-hidden">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-primary-500/30 min-h-[300px] md:min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      AI
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation buttons and indicators */}
        <div className="mt-12 flex flex-col items-center space-y-6">
          <div className="flex justify-center space-x-6">
            <button
              onClick={handlePrev}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="p-4 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="p-4 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Progress indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsPaused(true)
                  setTimeout(() => setIsPaused(false), 10000)
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary-500'
                    : 'w-2 bg-gray-600 hover:bg-primary-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}