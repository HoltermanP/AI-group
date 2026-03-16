import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, BookOpen, Award } from 'lucide-react'
import { CERTIFICATE_STATEMENT, getTraining, getAllTrainingSlugs, getAverageTotal } from '@/lib/trainings'
import { Badge } from '@/components/ui/badge'
import TrainingSignupForm from '@/components/TrainingSignupForm'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllTrainingSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getTraining(params.slug)
  if (!t) return { title: 'Training niet gevonden - AI-Group' }
  return {
    title: `${t.title} - AI-Group`,
    description: t.shortDescription,
  }
}

const levelBadge: Record<string, string> = {
  beginner: 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/40',
  halfgevorderd: 'bg-amber-500/20 text-amber-900 dark:text-amber-300 border-amber-500/40',
  gevorderd: 'bg-violet-500/20 text-violet-900 dark:text-violet-300 border-violet-500/40',
}

export default function TrainingDetailPage({ params }: Props) {
  const t = getTraining(params.slug)
  if (!t) notFound()

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <section className="relative border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.06)_0%,transparent_50%,rgba(139,92,246,0.05)_100%)]" />
        <div className="container-custom relative py-12 md:py-16">
          <Link
            href="/trainingen"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 relative z-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Alle trainingen
          </Link>
          <div className="max-w-4xl">
            <Badge variant="outline" className={`mb-4 ${levelBadge[t.level] ?? ''}`}>
              {t.levelLabel}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              {t.shortDescription}
            </p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-500 max-w-3xl border-l-2 border-primary-500/50 pl-4">
              Verzorgd door <strong className="text-slate-700 dark:text-slate-300">AI-Group Academy</strong> —{' '}
              ervaren AI-opleider met trainers uit de dagelijkse implementatiepraktijk.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 items-baseline">
              <div>
                <span className="text-sm text-slate-500 dark:text-slate-500 block">Gemiddeld totaalbedrag (10 deelnemers)</span>
                <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  € {getAverageTotal(t).toLocaleString('nl-NL')}
                </span>
                <span className="text-slate-500 dark:text-slate-500 ml-1">excl. BTW</span>
              </div>
              <div className="h-10 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />
              <div>
                <span className="text-sm text-slate-500 block">Duur</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{t.duration}</span>
              </div>
              <div>
                <span className="text-sm text-slate-500 block">Vorm</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{t.format}</span>
              </div>
            </div>
            {t.priceNote && (
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">{t.priceNote}</p>
            )}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-amber-500/35 bg-amber-50 dark:bg-amber-950/25 dark:border-amber-500/30 px-5 py-4 max-w-3xl">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-400">
                <Award className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Certificaat</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-0.5">{CERTIFICATE_STATEMENT}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Program column */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white mb-6">
                <BookOpen className="w-6 h-6 text-primary-500" />
                Programma
              </h2>
              <div className="space-y-6">
                {t.program.map((block, i) => (
                  <div
                    key={i}
                    className="relative pl-6 md:pl-8 border-l-2 border-primary-500/40 dark:border-primary-500/30"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 shadow-sm ring-4 ring-white dark:ring-slate-950" />
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-5 md:p-6 shadow-sm">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{block.title}</h3>
                        {block.duration && (
                          <Badge variant="secondary" className="shrink-0 font-normal">
                            {block.duration}
                          </Badge>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {block.topics.map((topic, j) => (
                          <li
                            key={j}
                            className="flex gap-2 text-slate-600 dark:text-slate-400 text-sm md:text-base"
                          >
                            <span className="text-primary-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Na afloop heb je…</h2>
              <ul className="space-y-3">
                {t.outcomes.map((o, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    {o}
                  </li>
                ))}
              </ul>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-2">Voor wie?</h2>
              <p className="text-slate-600 dark:text-slate-400">{t.targetAudience}</p>
            </section>
          </div>

          {/* Sidebar signup */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <TrainingSignupForm trainingSlug={t.slug} trainingTitle={t.title} />
              <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-600 p-4 text-sm text-slate-600 dark:text-slate-500">
                Vragen over inhoud of incompany?{' '}
                <Link href="/contact" className="text-primary-600 dark:text-primary-400 font-medium underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
