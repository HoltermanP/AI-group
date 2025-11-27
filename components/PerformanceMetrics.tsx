'use client'

import { useState, useEffect } from 'react'
import { Zap, Shield, TrendingUp, CheckCircle, Activity, Clock, Users, Settings } from 'lucide-react'

export default function PerformanceMetrics() {
  const [liveActivities, setLiveActivities] = useState([
    { id: 1, type: 'Inspectie voltooid', detail: 'Locatie: Havenkade 12', time: '2 minuten geleden', status: 'success' },
    { id: 2, type: 'Veiligheidsalert', detail: 'Niet-geautoriseerde toegang', time: '5 minuten geleden', status: 'warning' },
    { id: 3, type: 'Workflow voltooid', detail: 'Vergunningaanvraag #2023-045', time: '10 minuten geleden', status: 'info' },
    { id: 4, type: 'AI model update', detail: 'Analyse algoritme v2.1', time: '15 minuten geleden', status: 'neutral' },
    { id: 5, type: 'Inspectie pending', detail: 'Locatie: Industriepark A', time: '20 minuten geleden', status: 'pending' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveActivities(prev => {
        const newActivities = [...prev]
        const randomIndex = Math.floor(Math.random() * newActivities.length)
        const randomActivity = newActivities.splice(randomIndex, 1)[0]
        
        // Simulate new activity
        const newId = Math.max(...prev.map(a => a.id)) + 1
        const newType = ['Inspectie voltooid', 'Veiligheidsalert', 'Workflow voltooid', 'AI model update', 'Nieuwe data ingestie'][Math.floor(Math.random() * 5)]
        const newDetail = newType.includes('Inspectie') ? `Locatie: Project ${Math.floor(Math.random() * 100)}` :
                          newType.includes('Veiligheidsalert') ? `Type: ${['Onveilige situatie', 'Apparatuur storing'][Math.floor(Math.random() * 2)]}` :
                          newType.includes('Workflow') ? `Taak: ${['Rapportage', 'Goedkeuring'][Math.floor(Math.random() * 2)]}` :
                          newType.includes('AI model') ? `Versie: v${(Math.random() * 3 + 1).toFixed(1)}` :
                          `Bron: ${['Sensor data', 'Drone beelden'][Math.floor(Math.random() * 2)]}`
        const newStatus = newType.includes('Veiligheidsalert') ? 'warning' : newType.includes('Inspectie pending') ? 'pending' : 'success'

        newActivities.unshift({
          id: newId,
          type: newType,
          detail: newDetail,
          time: 'Zojuist',
          status: newStatus
        })
        return newActivities.slice(0, 5) // Keep only the latest 5
      })
    }, 5000) // Refresh every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-gray-50 dark:bg-slate-700">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8">
            Meetbare resultaten
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real-time dashboard met key performance indicators van onze AI-oplossingen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Metric 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <Zap className="w-9 h-9 text-green-500" />
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                +8% deze maand
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              35%
            </div>
            <div className="text-base text-gray-600 dark:text-gray-300">
              Tijdsbesparing
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <Shield className="w-9 h-9 text-blue-500" />
              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                +6% deze maand
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              42%
            </div>
            <div className="text-base text-gray-600 dark:text-gray-300">
              Incidenten vermindering
            </div>
          </div>

          {/* Metric 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-9 h-9 text-purple-500" />
              <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                +12% deze maand
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              58%
            </div>
            <div className="text-base text-gray-600 dark:text-gray-300">
              Workflow efficiency
            </div>
          </div>

          {/* Metric 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <CheckCircle className="w-9 h-9 text-orange-500" />
              <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                +3% deze maand
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              87%
            </div>
            <div className="text-base text-gray-600 dark:text-gray-300">
              Klant tevredenheid
            </div>
          </div>
        </div>

        {/* Live activity feed */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Live Activiteit (fictieve voorbeelden)
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-base font-medium text-gray-600 dark:text-gray-300">
                Real-time
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {liveActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 bg-white dark:bg-slate-700 p-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : activity.status === 'warning' ? 'bg-yellow-500' : activity.status === 'info' ? 'bg-blue-500' : 'bg-gray-400'} animate-pulse`}></div>
                <div className="flex-1">
                  <p className="text-base font-medium text-gray-800 dark:text-white">{activity.type}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.detail}</p>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}