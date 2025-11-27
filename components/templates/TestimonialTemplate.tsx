import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Testimonial {
  content: string
  author: string
  role?: string
  company?: string
  rating?: number
  image?: string
}

interface TestimonialTemplateProps {
  title: string
  subtitle: string
  testimonials: Testimonial[]
  variant?: 'default' | 'carousel' | 'grid'
  className?: string
}

export function TestimonialTemplate({
  title,
  subtitle,
  testimonials,
  variant = 'grid',
  className
}: TestimonialTemplateProps) {
  if (variant === 'carousel') {
    // Simple carousel - kan later uitgebreid worden met state
    const testimonial = testimonials[0]
    
    return (
      <section className={cn('section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-700 dark:to-slate-600', className)}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          <Card className="max-w-3xl mx-auto border-gray-200 dark:border-gray-800">
            <CardContent className="pt-6">
              {testimonial.rating && (
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              )}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6 italic text-center">
                "{testimonial.content}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </div>
                {(testimonial.role || testimonial.company) && (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} {testimonial.company && `@ ${testimonial.company}`}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className={cn('section-padding bg-white dark:bg-slate-800', className)}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 dark:border-gray-800">
              <CardContent className="pt-6">
                {testimonial.rating && (
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                )}
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  {(testimonial.role || testimonial.company) && (
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} {testimonial.company && `@ ${testimonial.company}`}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


