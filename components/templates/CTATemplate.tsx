import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CTATemplateProps {
  title: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  variant?: 'default' | 'gradient' | 'dark'
  className?: string
}

export function CTATemplate({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'gradient',
  className
}: CTATemplateProps) {
  const variantClasses = {
    default: 'bg-white dark:bg-slate-800',
    gradient: 'bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700',
    dark: 'bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 relative overflow-hidden'
  }

  const textColor = variant === 'gradient' || variant === 'dark' ? 'text-white' : 'text-gray-900 dark:text-white'
  const descriptionColor = variant === 'gradient' || variant === 'dark' ? 'text-gray-100' : 'text-gray-600 dark:text-gray-300'

  return (
    <section className={cn('section-padding relative overflow-hidden', variantClasses[variant], className)}>
      {variant === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-indigo-600/10 pointer-events-none z-0"></div>
      )}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={cn('text-3xl md:text-4xl lg:text-5xl font-bold mb-6', textColor)}>
            {title}
          </h2>
          <p className={cn('text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed', descriptionColor)}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant={variant === 'gradient' || variant === 'dark' ? 'secondary' : 'default'} className="text-lg px-8">
              <Link href={primaryAction.href}>
                {primaryAction.label}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            {secondaryAction && (
              <Button asChild size="lg" variant={variant === 'gradient' || variant === 'dark' ? 'outline' : 'outline'} className="text-lg px-8">
                <Link href={secondaryAction.href}>
                  <Calendar className="mr-2 w-5 h-5" />
                  {secondaryAction.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


