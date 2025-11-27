'use client'

import { MessageSquare, FileText, TrendingUp, Brain, Coffee, Activity, Briefcase, Zap, Target, Heart, BarChart3, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AgentsSection() {
  const agents = [
    {
      icon: MessageSquare,
      name: 'Chatbot Agent',
      description: 'Onze eerste agent die klantvragen beantwoordt en 24/7 beschikbaar is. Altijd vriendelijk, altijd accuraat.',
      color: 'text-blue-400'
    },
    {
      icon: FileText,
      name: 'HR Agent',
      description: 'Helpt bij personeelszaken, contracten en administratie. Zorgt dat we niets vergeten en alles op tijd geregeld is.',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      name: 'Procesoptimalisatie Agent',
      description: 'Analyseert onze workflows en suggereert continu verbeteringen. Altijd op zoek naar efficiëntere manieren van werken.',
      color: 'text-green-400'
    },
    {
      icon: Brain,
      name: 'Brainstorm Agent',
      description: 'Onze creatieve partner die nieuwe ideeën genereert en out-of-the-box denkt. Perfect voor het oplossen van complexe uitdagingen.',
      color: 'text-yellow-400'
    },
    {
      icon: Coffee,
      name: 'Koffie Agent',
      description: 'Zorgt ervoor dat we op de juiste momenten even pauze nemen. Herinnert ons aan het belang van mentale rust.',
      color: 'text-orange-400'
    },
    {
      icon: Activity,
      name: 'Fitness Agent',
      description: 'Moedigt ons aan om te bewegen en gezond te blijven. Plan regelmatig hardloopsessies en workout reminders.',
      color: 'text-red-400'
    },
    {
      icon: Briefcase,
      name: 'Project Management Agent',
      description: 'Houdt overzicht over alle projecten, deadlines en milestones. Zorgt dat we gefocust blijven op wat belangrijk is.',
      color: 'text-indigo-400'
    },
    {
      icon: Zap,
      name: 'Efficiency Agent',
      description: 'Identificeert tijdverspilling en automatiseert repetitieve taken. Helpt ons om meer gedaan te krijgen in minder tijd.',
      color: 'text-cyan-400'
    },
    {
      icon: Target,
      name: 'Strategie Agent',
      description: 'Helpt bij het formuleren van lange-termijn doelen en strategieën. Analyseert markttrends en kansen.',
      color: 'text-pink-400'
    },
    {
      icon: Heart,
      name: 'Work-Life Balance Agent',
      description: 'Zorgt voor een gezonde balans tussen werk en privé. Herinnert ons aan het belang van quality time met familie en vrienden.',
      color: 'text-rose-400'
    },
    {
      icon: BarChart3,
      name: 'Data Analytics Agent',
      description: 'Analyseert data en trends om inzichten te genereren. Helpt bij datagedreven besluitvorming en het identificeren van kansen.',
      color: 'text-emerald-400'
    },
    {
      icon: Shield,
      name: 'Security Agent',
      description: 'Waakt over onze digitale veiligheid en privacy. Controleert systemen en waarschuwt bij potentiële risico\'s.',
      color: 'text-amber-400'
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
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

