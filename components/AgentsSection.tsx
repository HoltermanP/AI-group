'use client'

import { MessageSquare, FileText, TrendingUp, Coffee, Activity, Briefcase, Zap, Target, Heart, BarChart3, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AgentsSection() {
  const agents = [
    {
      icon: MessageSquare,
      name: 'Klantenservice Agent',
      description: 'Beantwoordt klantvragen 24/7, verwerkt bestellingen en lost problemen op. Altijd beschikbaar, altijd accuraat.',
      color: 'text-blue-400'
    },
    {
      icon: FileText,
      name: 'Documentatie Agent',
      description: 'Genereert en beheert documenten automatisch. Contracten, offertes, rapporten - alles wordt bijgewerkt en georganiseerd.',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      name: 'Procesoptimalisatie Agent',
      description: 'Analyseert workflows en identificeert bottlenecks. Suggereert continu verbeteringen voor efficiëntere processen.',
      color: 'text-green-400'
    },
    {
      icon: Briefcase,
      name: 'Project Management Agent',
      description: 'Houdt overzicht over projecten, deadlines en resources. Zorgt dat teams gefocust blijven op wat belangrijk is.',
      color: 'text-indigo-400'
    },
    {
      icon: BarChart3,
      name: 'Data Analytics Agent',
      description: 'Analyseert bedrijfsdata en genereert inzichten. Helpt bij datagedreven besluitvorming en het identificeren van kansen.',
      color: 'text-emerald-400'
    },
    {
      icon: Shield,
      name: 'Security & Compliance Agent',
      description: 'Waakt over digitale veiligheid en compliance. Controleert systemen, detecteert risico\'s en waarschuwt proactief.',
      color: 'text-amber-400'
    },
    {
      icon: Zap,
      name: 'Automatisering Agent',
      description: 'Identificeert repetitieve taken en automatiseert deze. Vrijt tijd op voor strategisch werk en innovatie.',
      color: 'text-cyan-400'
    },
    {
      icon: Target,
      name: 'Strategie & Planning Agent',
      description: 'Helpt bij het formuleren van doelen en strategieën. Analyseert markttrends en adviseert over kansen.',
      color: 'text-pink-400'
    }
  ]

  const wellbeingAgents = [
    {
      icon: Coffee,
      name: 'Pauze & Rust Agent',
      description: 'Herinnert aan het belang van mentale rust en pauzes. Zorgt dat we op de juiste momenten even stoppen om op te laden.',
      color: 'text-orange-400'
    },
    {
      icon: Activity,
      name: 'Gezondheid & Beweging Agent',
      description: 'Moedigt aan om te bewegen en gezond te blijven. Plan reminders voor beweging en helpt bij het behouden van een gezonde levensstijl.',
      color: 'text-red-400'
    },
    {
      icon: Heart,
      name: 'Work-Life Balance Agent',
      description: 'Zorgt voor een gezonde balans tussen werk en privé. Herinnert aan het belang van quality time en persoonlijke ontwikkeling.',
      color: 'text-rose-400'
    }
  ]

  return (
    <section id="agents" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ opacity: 1 }}
          >
            <div className="inline-block mb-6">
              <span className="bg-white/20 text-white px-6 py-2 rounded-full text-lg font-semibold border border-white/30 backdrop-blur-sm">
                AI Agents
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
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
          {agents && agents.length > 0 ? agents.map((agent, index) => {
            const IconComponent = agent.icon
            
            return (
              <motion.div
                key={`agent-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                style={{ opacity: 1 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 border border-white/30">
                  <IconComponent className={`w-8 h-8 ${agent.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {agent.name}
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  {agent.description}
                </p>
              </motion.div>
            )
          }) : (
            <div className="col-span-full text-center text-white">
              <p>Geen agents gevonden</p>
            </div>
          )}
        </div>

        {/* Work-Life Balance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
          style={{ opacity: 1 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Meer dan alleen apps bouwen
            </h3>
            <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              AI-agents helpen niet alleen bij het bouwen van applicaties en het behalen van targets. Ze zorgen ook voor een gezonde balans en ondersteunen ons in alle aspecten van ons werk en welzijn.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {wellbeingAgents.map((agent, index) => {
              const IconComponent = agent.icon
              
              return (
                <motion.div
                  key={`wellbeing-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  style={{ opacity: 1 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 border border-white/30">
                    <IconComponent className={`w-8 h-8 ${agent.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    {agent.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
          style={{ opacity: 1 }}
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

