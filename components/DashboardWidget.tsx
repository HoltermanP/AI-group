'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface DashboardWidgetProps {
  title: string
  value: string | number | React.ReactNode
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon: LucideIcon
  color?: 'blue' | 'green' | 'purple' | 'orange'
  trend?: number[]
  className?: string
}

const colorVariants = {
  blue: {
    bg: 'from-blue-500 to-blue-600',
    icon: 'text-blue-100',
    accent: 'bg-blue-400'
  },
  green: {
    bg: 'from-green-500 to-green-600',
    icon: 'text-green-100',
    accent: 'bg-green-400'
  },
  purple: {
    bg: 'from-purple-500 to-purple-600',
    icon: 'text-purple-100',
    accent: 'bg-purple-400'
  },
  orange: {
    bg: 'from-orange-500 to-orange-600',
    icon: 'text-orange-100',
    accent: 'bg-orange-400'
  }
}

export default function DashboardWidget({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  color = 'blue',
  trend,
  className = ''
}: DashboardWidgetProps) {
  const colors = colorVariants[color]

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colors.bg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${colors.icon}`} />
        </div>
        {change && (
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-medium ${
            changeType === 'positive' ? 'bg-green-100 text-green-700' :
            changeType === 'negative' ? 'bg-red-100 text-red-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            <span>{change}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>

      {trend && trend.length > 0 && (
        <div className="mt-4 h-12 flex items-end space-x-1">
          {trend.map((point, index) => (
            <motion.div
              key={index}
              className={`${colors.accent} rounded-sm`}
              style={{ height: `${(point / Math.max(...trend)) * 100}%`, width: '8px' }}
              initial={{ height: 0 }}
              whileInView={{ height: `${(point / Math.max(...trend)) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}
