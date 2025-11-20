'use client'

import { useState, useEffect } from 'react'
import { Activity, Shield, Zap, TrendingUp, AlertTriangle, CheckCircle, Clock, Users, BarChart3, Settings } from 'lucide-react'

export default function AIPlatformSample() {
  const [metrics, setMetrics] = useState({
    activeInspections: 47,
    safetyAlerts: 3,
    aiProcessing: 98.7,
    efficiencyScore: 94
  })

  const [activities, setActivities] = useState([
    { id: 1, type: 'Inspectie voltooid', detail: 'Locatie: Havenkade 12', time: '2 min geleden', status: 'success' },
    { id: 2, type: 'Veiligheidsalert', detail: 'Niet-geautoriseerde toegang', time: '5 min geleden', status: 'warning' },
    { id: 3, type: 'Workflow voltooid', detail: 'Vergunningaanvraag #2023-045', time: '12 min geleden', status: 'success' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeInspections: prev.activeInspections + Math.floor(Math.random() * 3) - 1,
        safetyAlerts: Math.max(0, prev.safetyAlerts + Math.floor(Math.random() * 3) - 1),
        aiProcessing: Math.min(100, prev.aiProcessing + (Math.random() * 0.4 - 0.2)),
        efficiencyScore: Math.min(100, prev.efficiencyScore + (Math.random() * 2 - 1))
      }))

      setActivities(prev => {
        const newActivities = [...prev]
        if (Math.random() > 0.7) {
          const newActivity = {
            id: Math.max(...prev.map(a => a.id)) + 1,
            type: ['Inspectie gestart', 'Data ingestie', 'Model update', 'Rapportage voltooid'][Math.floor(Math.random() * 4)],
            detail: `Locatie: Project ${Math.floor(Math.random() * 100)}`,
            time: 'Zojuist',
            status: 'success' as const
          }
          newActivities.unshift(newActivity)
          return newActivities.slice(0, 3)
        }
        return newActivities
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] bg-gradient-to-br from-white/10 to-white/5 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/20">
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold text-white">AI Platform Dashboard</h3>
          </div>
          <div className="text-white/70 text-sm">
            <Clock className="w-4 h-4 inline mr-1" />
            Live
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="p-6 grid grid-cols-2 gap-4">
        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-green-400">+8%</span>
          </div>
          <div className="text-2xl font-bold text-white">{metrics.activeInspections}</div>
          <div className="text-xs text-white/70">Actieve Inspecties</div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-red-400">-2</span>
          </div>
          <div className="text-2xl font-bold text-white">{metrics.safetyAlerts}</div>
          <div className="text-xs text-white/70">Veiligheidsalerts</div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-green-400" />
            <span className="text-xs text-green-400">+0.2%</span>
          </div>
          <div className="text-2xl font-bold text-white">{metrics.aiProcessing.toFixed(1)}%</div>
          <div className="text-xs text-white/70">AI Verwerking</div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-green-400">+1%</span>
          </div>
          <div className="text-2xl font-bold text-white">{Math.round(metrics.efficiencyScore)}%</div>
          <div className="text-xs text-white/70">Efficiency Score</div>
        </div>
      </div>

      {/* Live Activity */}
      <div className="px-6 pb-6">
        <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Live Activiteit
        </h4>
        <div className="space-y-2">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 backdrop-blur-sm">
              <div className={`w-2 h-2 rounded-full ${
                activity.status === 'success' ? 'bg-green-400' : 
                activity.status === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
              } animate-pulse`}></div>
              <div className="flex-1">
                <div className="text-xs font-medium text-white">{activity.type}</div>
                <div className="text-xs text-white/60">{activity.detail}</div>
              </div>
              <div className="text-xs text-white/50">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Chart */}
      <div className="absolute bottom-4 right-4 w-24 h-16 bg-white/10 rounded-lg p-2 backdrop-blur-sm">
        <div className="text-xs text-white/70 mb-1">Performance</div>
        <div className="flex items-end space-x-1 h-8">
          {[3, 5, 4, 7, 6, 8, 9].map((height, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-blue-400 to-blue-300 rounded-sm flex-1 opacity-80"
              style={{ height: `${height * 8}%` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-12 left-12 w-8 h-8 bg-white/10 rounded-xl animate-pulse backdrop-blur-sm"></div>
      <div className="absolute bottom-12 right-12 w-6 h-6 bg-white/20 rounded-full animate-bounce backdrop-blur-sm"></div>
      <div className="absolute top-1/2 right-12 w-4 h-4 bg-white/15 rounded-full animate-ping backdrop-blur-sm"></div>
    </div>
  )
}
