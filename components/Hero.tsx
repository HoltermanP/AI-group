'use client'

import Link from 'next/link'
import { ArrowRight, Play, Zap, Rocket, CheckCircle } from 'lucide-react'
import { getSiteData } from '@/lib/getData'
import { motion } from 'framer-motion'

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
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <span className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full text-base md:text-lg font-semibold border-2 border-white/30 shadow-lg">
                AI-first organisatie
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight px-4 tracking-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block"
                >
                  We ship fast.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block mt-2 md:mt-3"
                >
                  Deal with it.
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl text-blue-100 leading-relaxed max-w-4xl mx-auto px-4 font-medium"
              >
                Wij leveren binnen weken, hoe groot je organisatie ook is.
              </motion.p>
            </motion.div>

            {/* Timeline Cards - Symmetrisch */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl group-hover:bg-blue-400/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs md:text-sm text-blue-200 font-semibold uppercase tracking-wider">Proof of Concept</div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">48</div>
                  <div className="text-lg md:text-xl text-blue-200 font-medium">uur</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl group-hover:bg-purple-400/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs md:text-sm text-blue-200 font-semibold uppercase tracking-wider">MVP</div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">72</div>
                  <div className="text-lg md:text-xl text-blue-200 font-medium">uur</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs md:text-sm text-blue-200 font-semibold uppercase tracking-wider">Livegang v1.0</div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">4</div>
                  <div className="text-lg md:text-xl text-blue-200 font-medium">weken</div>
                </div>
              </motion.div>
            </div>

            {/* CTAs - Symmetrisch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-white text-primary-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg md:text-xl shadow-2xl hover:shadow-blue-200 w-full sm:w-auto min-w-[280px]"
                >
                  <span>{data.cta.primary}</span>
                  <ArrowRight size={24} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/cases"
                  className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-primary-600 px-10 py-5 rounded-2xl font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg md:text-xl w-full sm:w-auto min-w-[280px] shadow-xl"
                >
                  <Play size={24} />
                  <span>Bekijk onze cases</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}