'use client'

import { useState, useEffect } from 'react'
import { 
  Activity, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Cpu
} from 'lucide-react'

interface PlatformMetric {
  id: string
  title: string
  value: string
  change: string
  status: 'success' | 'warning' | 'error' | 'info'
  icon: any
  color: string
}

interface ActivityItem {
  id: string
  type: 'inspection' | 'alert' | 'completion' | 'update'
  message: string
  timestamp: string
  status: 'active' | 'completed' | 'pending'
}

const platformMetrics: PlatformMetric[] = [
  {
    id: '1',
    title: 'Actieve Inspecties',
    value: '47',
    change: '+12%',
    status: 'success',
    icon: Activity,
    color: 'text-green-400'
  },
  {
    id: '2',
    title: 'Veiligheidsalerts',
    value: '3',
    change: '-67%',
    status: 'warning',
    icon: Shield,
    color: 'text-yellow-400'
  },
  {
    id: '3',
    title: 'AI Verwerking',
    value: '98.7%',
    change: '+2.1%',
    status: 'success',
    icon: Zap,
    color: 'text-blue-400'
  },
  {
    id: '4',
    title: 'Efficiency Score',
    value: '94%',
    change: '+8%',
    status: 'success',
    icon: TrendingUp,
    color: 'text-purple-400'
  },
  {
    id: '5',
    title: 'Team Activiteit',
    value: '23/25',
    change: 'Online',
    status: 'info',
    icon: Users,
    color: 'text-cyan-400'
  }
]

const activities: ActivityItem[] = [
  {
    id: '1',
    type: 'inspection',
    message: 'AI Analyse voltooid - 3 issues gevonden',
    timestamp: '2 min geleden',
    status: 'completed'
  },
  {
    id: '2',
    type: 'alert',
    message: 'Veiligheidsprotocol geactiveerd - Sectie B3',
    timestamp: '5 min geleden',
    status: 'active'
  },
  {
    id: '3',
    type: 'completion',
    message: 'Workflow "Project N31" succesvol afgerond',
    timestamp: '12 min geleden',
    status: 'completed'
  },
  {
    id: '4',
    type: 'update',
    message: 'AI model geüpdatet - 15% betere detectie',
    timestamp: '18 min geleden',
    status: 'completed'
  },
  {
    id: '5',
    type: 'inspection',
    message: 'Automatische analyse gestart - Project A1',
    timestamp: '25 min geleden',
    status: 'pending'
  }
]

export default function AIPlatformDemo() {
  const [currentMetrics, setCurrentMetrics] = useState<PlatformMetric[]>(platformMetrics)
  const [currentActivities, setCurrentActivities] = useState<ActivityItem[]>(activities)
  const [refreshCount, setRefreshCount] = useState(0)

  // Auto-refresh elke 4 seconden
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshCount(prev => prev + 1)
      
      // Update metrics met kleine variaties
      setCurrentMetrics(prev => 
        prev.map(metric => {
          let newValue = metric.value
          let newChange = metric.change

          if (metric.id === '1') {
            newValue = `${Math.floor(Math.random() * 10) + 40}`
            newChange = `+${Math.floor(Math.random() * 15) + 8}%`
          } else if (metric.id === '2') {
            newValue = `${Math.floor(Math.random() * 5) + 1}`
            newChange = `-${Math.floor(Math.random() * 20) + 50}%`
          } else if (metric.id === '3') {
            newValue = `${(Math.random() * 2 + 97).toFixed(1)}%`
            newChange = `+${(Math.random() * 3 + 1).toFixed(1)}%`
          } else if (metric.id === '4') {
            newValue = `${Math.floor(Math.random() * 6) + 90}%`
            newChange = `+${Math.floor(Math.random() * 10) + 5}%`
          } else if (metric.id === '5') {
            newValue = `${Math.floor(Math.random() * 3) + 22}/25`
            newChange = 'Online'
          }

          return {
            ...metric,
            value: newValue,
            change: newChange
          }
        })
      )

      // Shuffle activities
      setCurrentActivities(prev => {
        const shuffled = [...prev].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, 5)
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getActivityIcon = (type: string, status: string) => {
    if (type === 'inspection') return <CheckCircle className={`w-4 h-4 ${status === 'completed' ? 'text-green-400' : 'text-blue-400'}`} />
    if (type === 'alert') return <AlertTriangle className="w-4 h-4 text-yellow-400" />
    if (type === 'completion') return <CheckCircle className="w-4 h-4 text-green-400" />
    if (type === 'update') return <Cpu className="w-4 h-4 text-purple-400" />
    return <Activity className="w-4 h-4 text-gray-400" />
  }

  const getActivityColor = (status: string) => {
    if (status === 'completed') return 'text-green-400'
    if (status === 'active') return 'text-yellow-400'
    if (status === 'pending') return 'text-blue-400'
    return 'text-gray-400'
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI Platform Live Demo
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Bekijk hoe ons AI Platform real-time werkt voor uw organisatie
          </p>
        </div>

        {/* Platform Dashboard */}
        <div className="bg-white dark:bg-slate-700 rounded-3xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-3xl font-bold text-white">AI Platform Dashboard</h3>
              </div>
              <div className="text-white text-lg">
                <Clock className="w-6 h-6 inline mr-2" />
                Auto-refresh: {refreshCount}x
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {currentMetrics.map((metric, index) => (
                <div
                  key={metric.id}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {metric.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Activity Feed */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Activity className="w-6 h-6 mr-3 text-primary-600" />
                  Live Activiteit
                </h4>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Real-time
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {currentActivities.map((activity, index) => (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {getActivityIcon(activity.type, activity.status)}
                    <div className="flex-1">
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        {activity.message}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.timestamp}
                      </p>
                    </div>
                    <div className={`text-sm font-medium ${getActivityColor(activity.status)}`}>
                      {activity.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Trends */}
            <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3 text-primary-600" />
                  Performance Trends
                </h4>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Laatste 7 dagen
                </div>
              </div>
              
              {/* Mini Charts */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Efficiency</span>
                    <span className="text-xs text-green-500">↗ +12%</span>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-green-200 to-green-300 dark:from-green-800 dark:to-green-700 rounded flex items-end space-x-1 p-2">
                    {[2, 4, 3, 6, 5, 7, 8].map((height, i) => (
                      <div
                        key={i}
                        className="bg-green-500 rounded-sm flex-1"
                        style={{ height: `${height * 8}%` }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Incidenten</span>
                    <span className="text-xs text-red-500">↘ -25%</span>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-red-200 to-red-300 dark:from-red-800 dark:to-red-700 rounded flex items-end space-x-1 p-2">
                    {[8, 6, 7, 5, 4, 3, 2].map((height, i) => (
                      <div
                        key={i}
                        className="bg-red-500 rounded-sm flex-1"
                        style={{ height: `${height * 8}%` }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">AI Accuracy</span>
                    <span className="text-xs text-blue-500">↗ +5%</span>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 rounded flex items-end space-x-1 p-2">
                    {[6, 7, 6, 8, 7, 8, 9].map((height, i) => (
                      <div
                        key={i}
                        className="bg-blue-500 rounded-sm flex-1"
                        style={{ height: `${height * 8}%` }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Response Time</span>
                    <span className="text-xs text-purple-500">↗ +18%</span>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-700 rounded flex items-end space-x-1 p-2">
                    {[3, 4, 3, 5, 4, 6, 7].map((height, i) => (
                      <div
                        key={i}
                        className="bg-purple-500 rounded-sm flex-1"
                        style={{ height: `${height * 8}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}