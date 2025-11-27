import { getSiteData } from '@/lib/getData'

export default function Process() {
  const data = getSiteData()

  return (
    <section className="section-padding bg-white dark:bg-slate-800">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8">
            {data.process.title}
          </h2>
          <p className="text-3xl md:text-4xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            {data.process.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.process.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < data.process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-primary-200 to-primary-400 dark:from-primary-800 dark:to-primary-600 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white dark:bg-slate-700 p-8 rounded-2xl border-2 border-gray-200 dark:border-slate-600 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
