'use client'

import Link from 'next/link'
import { ArrowRight, Play, Zap, Rocket, CheckCircle, ScanLine, GraduationCap } from 'lucide-react'
import { getSiteData } from '@/lib/getData'
import { motion } from 'framer-motion'

export default function Hero() {
  const data = getSiteData()

  return (
    <section className="relative section-padding overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="h-full w-full object-cover opacity-[0.38] motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/brand-bg.svg"
        >
          <source src="/videos/ai-hero-bg.mp4" type="video/mp4" />
          <source src="/videos/ai-hero-bg.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-brand-black/58" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,172,232,0.18),rgba(0,0,0,0.62)_58%)]" />
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="text-center space-y-16">
            {/* Badges: merk + Academy */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-4 px-4"
            >
              <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-semibold border-2 border-white/30 shadow-lg">
                AI-first organisatie
              </span>
              <Link
                href="/trainingen"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-brand-red to-[#ff643a] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold border border-brand-red/80 shadow-lg shadow-brand-red/20 hover:from-brand-red hover:to-[#ff7b57] transition-all"
              >
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 shrink-0" aria-hidden />
                <span>AI-Group Academy</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 opacity-90 group-hover:translate-x-0.5 transition-transform" aria-hidden />
              </Link>
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
                className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4 font-medium"
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
                className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-8 shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blueLight/20 rounded-full blur-2xl group-hover:bg-brand-blueLight/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider">Proof of Concept</div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">48</div>
                  <div className="text-lg md:text-xl text-muted-foreground font-medium">uur</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-8 shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl group-hover:bg-brand-blue/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider">MVP</div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">72</div>
                  <div className="text-lg md:text-xl text-muted-foreground font-medium">uur</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/40 rounded-3xl p-8 shadow-2xl hover:shadow-brand-red/20 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 rounded-full blur-2xl group-hover:bg-brand-red/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider">Livegang v1.0</div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">4</div>
                  <div className="text-lg md:text-xl text-muted-foreground font-medium">weken</div>
                </div>
              </motion.div>
            </div>

            {/* Academy teaser — volle breedte, direct onder snelheid-kaarten */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.7 }}
              className="px-4 max-w-4xl mx-auto w-full"
            >
              <Link
                href="/trainingen"
                className="block w-full rounded-3xl border border-brand-red/50 bg-gradient-to-br from-brand-red/15 via-brand-red/10 to-brand-black/40 backdrop-blur-md p-6 md:p-8 text-left shadow-xl shadow-brand-red/10 hover:border-brand-red/75 hover:from-brand-red/25 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-red text-white shadow-lg">
                      <GraduationCap className="h-8 w-8" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">
                        AI-Group Academy
                      </p>
                      <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                        Professionele AI-trainingen voor uw team
                      </p>
                      <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-xl">
                        Beginner tot gevorderd · certificaat na afronding · trainers uit de implementatiepraktijk
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center gap-2 self-start md:self-center rounded-[6px] bg-brand-blue text-white font-bold px-6 py-3 text-sm md:text-base whitespace-nowrap group-hover:bg-brand-blueLight transition-colors">
                    Naar trainingen
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-brand-blue text-white hover:bg-brand-blueLight px-10 py-5 rounded-[6px] font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg md:text-xl shadow-2xl hover:shadow-brand-blue/30 w-full sm:w-auto min-w-[280px]"
                >
                  <span>{data.cta.primary}</span>
                  <ArrowRight size={24} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://www.ai-businessscan.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-red hover:bg-[#ff643a] text-white px-10 py-5 rounded-[6px] font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg md:text-xl shadow-2xl hover:shadow-brand-red/30 w-full sm:w-auto min-w-[280px]"
                >
                  <ScanLine size={24} />
                  <span>Gratis Bedrijfscan</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#cases"
                  className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-brand-blue px-10 py-5 rounded-[6px] font-bold transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg md:text-xl w-full sm:w-auto min-w-[280px] shadow-xl"
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