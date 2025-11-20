'use client'

import { Bot, Clock, Users, TrendingUp, Zap, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AgentsSection() {
  const agents = [
    {
      icon: Bot,
      title: 'Meer agents dan personeelsleden',
      description: 'Wij hebben nu al meer AI-agents in dienst dan personeelsleden. Deze agents werken 24/7 voor u, zonder pauzes, zonder vakanties.',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      title: '24/7 beschikbaarheid',
      description: 'Onze agents werken dag en nacht, weekenden en feestdagen. Altijd beschikbaar wanneer u ze nodig heeft.',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Instant response',
      description: 'Geen wachttijden, geen wachtrijen. Agents reageren direct op vragen, verzoeken en taken.',
      color: 'text-yellow-400'
    },
    {
      icon: TrendingUp,
      title: 'Continue verbetering',
      description: 'Agents leren van elke interactie en worden elke dag slimmer. Ze verbeteren zichzelf automatisch.',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Betrouwbaar en consistent',
      description: 'Agents maken geen menselijke fouten, zijn altijd consistent en volgen exact uw processen.',
      color: 'text-red-400'
    },
    {
      icon: Users,
      title: 'Schaalbaar naar behoefte',
      description: 'Voeg in seconden nieuwe agents toe. Schaal op of af naar gelang uw behoefte, zonder extra personeelskosten.',
      color: 'text-cyan-400'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <span className="bg-white/20 text-white px-6 py-2 rounded-full text-lg font-semibold border border-white/30 backdrop-blur-sm">
                AI Agents
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Wij bouwen agents. Veel agents.
            </h2>
            <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-3">
              Wij zijn sterk in het bouwen van AI-agents. Zo sterk dat we nu al meer agents in dienst hebben dan personeelsleden.
            </p>
            <p className="text-sm md:text-base text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Deze agents werken 24/7 voor ons. En dus voor u.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 border border-white/30">
                  <IconComponent className={`w-8 h-8 ${agent.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {agent.title}
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  {agent.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Agents werken 24/7. Voor u.
            </h3>
            <p className="text-base md:text-lg text-blue-100 leading-relaxed">
              Geen personeelskosten. Geen overhead. Alleen resultaten. Altijd.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

