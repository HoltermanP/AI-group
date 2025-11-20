import { Metadata } from 'next'
import { getSiteData } from '@/lib/getData'
import { Users, Briefcase, Target, Heart, Bot, Coffee, Brain, TrendingUp, MessageSquare, Activity, FileText, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Over Ons - AI-Group',
  description: 'Ontmoet Luit de Jong en Patrick Holterman - AI-enthousiastelingen met jarenlange ervaring in management, processen, projecten en IT.',
}

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
  }
]

export default function OverOnsPage() {
  const data = getSiteData()

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Over Ons
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Twee AI-enthousiastelingen met een missie: anderen laten profiteren van de kracht van AI-agents.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Luit de Jong
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Jarenlange ervaring in management, processen en projecten. Gepassioneerd over het makkelijker maken van werk en het creëren van meer werkplezier.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Patrick Holterman
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Expert in IT, processen en projectmanagement. Geloof in de kracht van AI om organisaties te helpen meer uit hun personeel te halen.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Ons Verhaal
              </h3>
              <div className="space-y-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Wij zijn Luit de Jong en Patrick Holterman. Met jarenlange ervaring in het bedrijfsleven op het gebied van management, processen, projecten en IT, hebben we één ding gemeen: we zijn altijd zeer gericht op het werk makkelijker maken voor mensen.
                </p>
                <p>
                  Onze drijfveer? Meer werkplezier creëren en organisaties helpen om meer uit hun personeel te halen. We geloven dat wanneer mensen hun werk leuk vinden en efficiënt kunnen werken, zowel de organisatie als de medewerkers daarvan profiteren.
                </p>
                <p>
                  AI-agents zijn voor ons meer dan alleen technologie – het is een hobby waar we veel energie uit halen. We laten ons graag zelf ook helpen in ons werk en onze dagelijkse bezigheden door AI-agents. Deze agents maken ons leven makkelijker, efficiënter en leuker.
                </p>
                <p className="font-semibold text-primary-600 dark:text-primary-400">
                  Onze persoonlijke missie is simpel: anderen ook laten profiteren van de ontwikkelingen op AI-gebied. We willen organisaties helpen om dezelfde voordelen te ervaren die wij dagelijks beleven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Agents */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Onze AI-Agents
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We werken dagelijks met meer dan 10 verschillende AI-agents die ons helpen in ons werk en leven. 
              Hier zijn enkele van onze favoriete collega's:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => {
              const IconComponent = agent.icon
              
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className={`w-6 h-6 ${agent.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {agent.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-800 max-w-3xl mx-auto">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Deze agents werken 24/7 voor ons. Ze maken ons werk efficiënter, ons leven makkelijker en helpen ons om gefocust te blijven op wat echt belangrijk is. 
                <span className="font-semibold text-primary-600 dark:text-primary-400"> En dit is precies wat we ook voor uw organisatie willen bereiken.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Laten we samen kijken wat AI voor u kan betekenen
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Net zoals wij dagelijks profiteren van AI-agents, kunnen wij u helpen om dezelfde voordelen te realiseren. 
              Laten we samen ontdekken welke agents het beste bij uw organisatie passen.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Neem contact op</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

