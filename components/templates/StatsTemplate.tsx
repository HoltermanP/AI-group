import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Stat {
  value: string
  label: string
  icon?: React.ReactNode
}

interface StatsTemplateProps {
  stats: Stat[]
  columns?: 2 | 3 | 4
  className?: string
}

export function StatsTemplate({
  stats,
  columns = 4,
  className
}: StatsTemplateProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section className={cn('section-padding bg-gray-50 dark:bg-gray-900', className)}>
      <div className="container-custom">
        <div className={cn('grid gap-6', gridCols[columns])}>
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-gray-200 dark:border-gray-800">
              <CardContent className="pt-6">
                {stat.icon && (
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                )}
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


