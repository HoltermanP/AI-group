import { Metadata } from 'next'
import { Monitor, Map, AlertTriangle, CheckCircle, FileText, Zap } from 'lucide-react'
import { getSiteData } from '@/lib/getData'
import AIPlatformDemo from '@/components/AIPlatformDemo'

export const metadata: Metadata = {
  title: 'AI Platform & Dashboard - AI-Group',
  description: 'Eén platform, één dashboard, één waarheid voor alle stakeholders. Ontdek ons geïntegreerde AI Platform met realtime inzicht.',
}

const moduleIcons = {
  'Kaart & Geo-lagen': Map,
  'Status & KPI-tegelset': Monitor,
  'Incidenten & Alerts': AlertTriangle,
  'Taken & Approvals': CheckCircle,
  'Documenthub & Auditlog': FileText,
  'Integraties': Zap,
}

export default function PlatformPage() {
  const data = getSiteData()

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-8xl md:text-9xl lg:text-10xl font-bold text-gray-900 dark:text-white mb-8">
              {data.platform.title}
            </h1>
            <p className="text-4xl md:text-5xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              {data.platform.subtitle}
            </p>
            <p className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 leading-relaxed">
              {data.platform.description}
            </p>
          </div>
        </div>
      </section>

      {/* AI Platform Demo */}
      <AIPlatformDemo />

      {/* Platform Overview */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
                Alles op één plek
              </h2>
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Ons AI Platform integreert alle oplossingen in een centraal dashboard. 
                Van realtime monitoring tot documentbeheer - alles wat u nodig heeft voor 
                efficiënte en slimme bedrijfsvoering.
              </p>
              
              <div className="space-y-4">
                {data.platform.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold mb-2">AI Dashboard</h3>
                  <p className="text-primary-100 text-sm">Realtime overzicht van alle projecten</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-primary-100">Actieve projecten</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-primary-100">Veiligheidsscore</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm text-primary-100">Open alerts</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm text-primary-100">Gem. reactietijd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8">
              Platform modules
            </h2>
            <p className="text-3xl md:text-4xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Krachtige modules die naadloos samenwerken voor optimale efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.platform.modules.map((module, index) => {
              const IconComponent = moduleIcons[module.name as keyof typeof moduleIcons]
              
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-gray-300 dark:border-gray-600"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {module.name}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {module.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Klaar voor een platform-demo?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Laat ons u het AI Platform laten zien. We demonstreren hoe alle modules 
              samenwerken voor uw specifieke use cases.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Vraag een platform-demo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
