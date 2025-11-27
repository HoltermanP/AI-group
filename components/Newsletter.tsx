'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail('')
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Blijf op de hoogte
          </h2>
          <p className="text-base md:text-lg text-blue-100 mb-12 leading-relaxed">
            Ontvang de nieuwste updates over AI-oplossingen en intelligente agents direct in uw inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Uw e-mailadres"
                  required
                  className="w-full px-6 py-4 text-lg rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-white/20 focus:border-white/50 transition-all duration-200"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-white text-primary-600 hover:bg-gray-50 font-bold rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Ingeschreven!</span>
                  </>
                ) : isLoading ? (
                  <div className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Inschrijven</span>
                  </>
                )}
              </motion.button>
            </div>
            
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-200 text-lg font-medium mt-4"
              >
                Bedankt! U ontvangt binnenkort een bevestiging.
              </motion.p>
            )}
          </form>

          <p className="text-blue-200 text-lg mt-8">
            Geen spam. Uitschrijven kan altijd. Lees ons privacybeleid.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
