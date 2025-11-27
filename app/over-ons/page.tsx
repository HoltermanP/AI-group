import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getSiteData } from '@/lib/getData'
import { Users, Briefcase, Target, Heart, Bot, Coffee, Brain, TrendingUp, MessageSquare, Activity, FileText, Zap, BarChart3, Shield, BookOpen } from 'lucide-react'

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
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary-200 dark:border-primary-800">
                <Image
                  src="/images/Luit.jpeg"
                  alt="Luit de Jong"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                <Link 
                  href="https://www.linkedin.com/in/luitdejong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Luit de Jong
                </Link>
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Jarenlange ervaring in management, processen en projecten. Gepassioneerd over het makkelijker maken van werk en het creëren van meer werkplezier.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary-200 dark:border-primary-800">
                <Image
                  src="/images/Patrick.jpeg"
                  alt="Patrick Holterman"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                <Link 
                  href="https://www.linkedin.com/in/patrick-holterman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Patrick Holterman
                </Link>
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Expert in IT, processen en projectmanagement. Geloof in de kracht van AI om organisaties te helpen meer uit hun personeel te halen.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-primary-950/30 dark:via-gray-950 dark:to-primary-900/20 rounded-3xl p-12 md:p-16 lg:p-20 border-2 border-primary-200/50 dark:border-primary-800/50 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/20 dark:bg-primary-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300/10 dark:bg-primary-700/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                {/* Title Section */}
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/50 mb-6">
                    <BookOpen className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                    Ons verhaal
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
                </div>

                {/* Content */}
                <div className="space-y-8 md:space-y-10 text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-5xl mx-auto">
                  <div className="relative pl-8 md:pl-12 border-l-4 border-primary-300 dark:border-primary-700">
                    <p className="font-medium">
                      Wij zijn <span className="font-bold text-primary-600 dark:text-primary-400">Luit de Jong</span> en <span className="font-bold text-primary-600 dark:text-primary-400">Patrick Holterman</span>. Met jarenlange ervaring in het bedrijfsleven op het gebied van management, processen, projecten en IT, hebben we één ding gemeen: we zijn altijd zeer gericht op het <span className="font-semibold text-gray-900 dark:text-white">werk makkelijker maken voor mensen</span>.
                    </p>
                  </div>

                  <div className="relative pl-8 md:pl-12 border-l-4 border-primary-300 dark:border-primary-700">
                    <p>
                      <span className="font-bold text-primary-600 dark:text-primary-400 text-2xl md:text-3xl">Onze drijfveer?</span> Meer werkplezier creëren en organisaties helpen om meer uit hun personeel te halen. We geloven dat wanneer mensen hun werk leuk vinden en efficiënt kunnen werken, zowel de organisatie als de medewerkers daarvan profiteren.
                    </p>
                  </div>

                  <div className="relative pl-8 md:pl-12 border-l-4 border-primary-300 dark:border-primary-700">
                    <p>
                      AI-agents zijn voor ons meer dan alleen technologie – <span className="font-semibold text-gray-900 dark:text-white">het is een hobby waar we veel energie uit halen</span>. We laten ons graag zelf ook helpen in ons werk en onze dagelijkse bezigheden door AI-agents. Deze agents maken ons leven makkelijker, efficiënter en leuker.
                    </p>
                  </div>

                  {/* Mission Statement - Highlighted */}
                  <div className="relative mt-12 md:mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 dark:bg-black/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 dark:bg-black/20 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                          Onze persoonlijke missie is simpel:
                        </p>
                      </div>
                      <p className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-medium">
                        Anderen ook laten profiteren van de ontwikkelingen op AI-gebied. We willen organisaties helpen om dezelfde voordelen te ervaren die wij dagelijks beleven.
                      </p>
                    </div>
                  </div>
                </div>
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
              We werken dagelijks met meer dan 12 verschillende AI-agents die ons helpen in ons werk en leven. 
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

