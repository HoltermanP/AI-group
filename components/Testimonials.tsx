'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

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
    content: "AI-Group heeft onze processen compleet getransformeerd. 35% minder incidenten en 100% compliance - ongekend resultaat.",
    rating: 5,
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "",
    role: "",
    company: "",
    content: "Het AI Platform geeft ons real-time inzicht in alle projecten. Workflows die voorheen dagen kostten, zijn nu in uren klaar.",
    rating: 5,
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "",
    role: "",
    company: "",
    content: "De AI Analyse functie heeft onze processen 40% sneller gemaakt. Kwaliteit is consistent en rapportage is volledig geautomatiseerd.",
    rating: 5,
    image: "/testimonial-3.jpg"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000) // Change testimonial every 8 seconds
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="container-custom text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8">
            Wat onze klanten zeggen
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16">
            Echte verhalen van organisaties die hun processen hebben getransformeerd met AI-Group.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-950 rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-primary-100 dark:border-primary-900/50">
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>

          <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
            "{testimonials[currentIndex].content}"
          </blockquote>

          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-white">
                AI
              </span>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-12 flex justify-center space-x-6">
          <button
            onClick={handlePrev}
            className="p-4 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-4 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}