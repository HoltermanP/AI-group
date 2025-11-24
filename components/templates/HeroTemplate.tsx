import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroTemplateProps {
  title: string
  subtitle: string
  primaryAction: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  image?: React.ReactNode
  background?: 'default' | 'gradient' | 'dark'
  className?: string
}

export function HeroTemplate({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  image,
  background = 'default',
  className
}: HeroTemplateProps) {
  const backgroundClasses = {
    default: 'bg-white dark:bg-gray-950',
    gradient: 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800',
    dark: 'ai-background'
  }

  return (
    <section className={cn('relative section-padding overflow-hidden min-h-screen flex items-center', backgroundClasses[background], className)}>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href={primaryAction.href}>
                  {primaryAction.label}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              {secondaryAction && (
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link href={secondaryAction.href}>
                    <Play className="mr-2 w-5 h-5" />
                    {secondaryAction.label}
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {image && (
            <div className="relative">
              {image}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}


