import Link from 'next/link'
import { ArrowRight, ShieldCheck, Workflow, Search, Monitor } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

const iconMap = {
  'shield-check': ShieldCheck,
  workflow: Workflow,
  search: Search,
  monitor: Monitor,
}

export default function SolutionsGrid() {
  const data = getSiteData()

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Onze AI-oplossingen
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Workflow Automation met drie gespecialiseerde AI-applicaties.
          </p>
        </div>

        {/* Main Solution - Workflow Automation */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-10 text-white">
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                <Workflow className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-4">
                  {data.solutions[0].title}
                </h3>
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  {data.solutions[0].description}
                </p>
              </div>
            </div>

            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              {data.solutions[0].bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex items-center space-x-3 text-lg text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/oplossingen/${data.solutions[0].slug}`}
              className="inline-flex items-center space-x-3 bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-200 text-lg"
            >
              <span>Bekijk in het platform</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Gespecialiseerde AI-applicaties
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.applications.map((application, index) => {
            const IconComponent = iconMap[application.icon as keyof typeof iconMap]
            
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {application.title}
                    </h4>
                  </div>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {application.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {application.bullets.slice(0, 2).map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/oplossingen/${application.slug}`}
                  className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-bold transition-colors duration-200 text-sm"
                >
                  <span>Meer info</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/platform"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Bekijk het AI Platform</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
