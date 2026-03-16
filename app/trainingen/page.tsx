import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Clock,
  Users,
  GraduationCap,
  Award,
  Building2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import { trainings, CERTIFICATE_STATEMENT } from '@/lib/trainings'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'AI-trainingen - AI-Group',
  description:
    'Ervaren AI-opleider: praktijkgerichte trainingen van beginner tot gevorderd. Certificaat na afronding. AI-Group Academy.',
}

const levelStyles: Record<string, string> = {
  beginner: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
  halfgevorderd: 'bg-amber-500/15 text-amber-800 dark:text-amber-400 border-amber-500/30',
  gevorderd: 'bg-violet-500/15 text-violet-800 dark:text-violet-300 border-violet-500/30',
}

export default function TrainingenPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
        <div className="container-custom relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="outline" className="gap-1 border-primary-500/40 text-primary-700 dark:text-primary-300">
                <GraduationCap className="w-3.5 h-3.5" />
                AI-Group Academy
              </Badge>
              <Badge
                variant="outline"
                className="gap-1 border-slate-400/50 bg-slate-100/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                Ervaren AI-opleider
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              AI-trainingen voor elk niveau
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              <strong className="text-slate-800 dark:text-slate-200">
                AI-Group is een ervaren AI-opleider en implementatiepartner.
              </strong>{' '}
              Onze trainers combineren lesgeven met het dagelijks bouwen en begeleiden van AI-oplossingen bij
              organisaties — geen losstaande theorie, maar inhoud direct uit de praktijk.
            </p>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Van eerste kennismaking met ChatGPT tot productie-klare RAG en governance: alle trainingen zijn
              <strong className="text-slate-800 dark:text-slate-200"> incompany</strong> voor groepen van 8–12
              deelnemers, met een vast tarief per persoon, uitgewerkt programma en certificaat na afronding. Klik door voor het volledige programma en
              inschrijving.
            </p>
            <div className="mx-auto max-w-2xl rounded-2xl border-2 border-amber-400/50 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-500/40 px-6 py-4 flex flex-col sm:flex-row items-center gap-4 text-left shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-400">
                <Award className="h-7 w-7" aria-hidden />
              </div>
              <div>
                <p className="font-bold text-amber-950 dark:text-amber-100 text-base md:text-lg">
                  Certificaat na afronding
                </p>
                <p className="text-sm md:text-base text-amber-900/90 dark:text-amber-200/90 mt-1 leading-snug">
                  {CERTIFICATE_STATEMENT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professionele positionering: ervaren opleider */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-2">
              Opleiding op niveau
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Trainen bij dezelfde partij die uw AI mee implementeert
            </h2>
            <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
              Als ervaren AI-opleider begeleiden we teams van eerste kennismaking tot technische trajecten. Onze
              programma&apos;s sluiten aan op wat er in het veld werkt — omdat we die ervaring zelf leveren.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: 'Praktijk eerst',
                text: 'Oefeningen en voorbeelden uit echte implementaties en klanttrajecten, niet alleen slides.',
              },
              {
                icon: Users,
                title: 'Trainers uit het vak',
                text: 'Docenten die naast trainen meedraaien in AI-projecten: prompts, agents, RAG en governance.',
              },
              {
                icon: Building2,
                title: 'Incompany',
                text: 'Bij u op locatie, groepen van 8–12 deelnemers, vast tarief per persoon.',
              },
              {
                icon: GraduationCap,
                title: 'Doorlopend programma',
                text: 'Opbouw van beginner tot gevorderd, zodat teams structureel kunnen groeien met dezelfde opleider.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-700/80 bg-slate-800/40 p-5 md:p-6 text-left hover:border-slate-600 transition-colors"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/20 text-primary-400">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-bold text-white text-sm md:text-base mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trainings.map((t) => (
            <Card
              key={t.slug}
              className="flex flex-col border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800/50 overflow-hidden group"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge className={levelStyles[t.level] ?? ''} variant="outline">
                    {t.levelLabel}
                  </Badge>
                  <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {t.duration}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  {t.title}
                </h2>
              </CardHeader>
              <CardContent className="flex-1 pt-2 relative z-10">
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  {t.shortDescription}
                </p>
                <div className="rounded-xl bg-slate-100 dark:bg-slate-900/80 px-4 py-3 border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    € {t.pricePerPerson.toLocaleString('nl-NL')}
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 ml-1">p.p.</span>
                  </div>
                  {t.priceNote && (
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{t.priceNote}</p>
                  )}
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {t.format}
                  </p>
                  <p className="text-xs font-semibold text-amber-800 dark:text-amber-400 mt-3 flex items-center gap-1.5 border-t border-slate-200 dark:border-slate-600 pt-3">
                    <Award className="w-3.5 h-3.5 shrink-0" aria-hidden />
                    Certificaat van deelname na afronding
                  </p>
                </div>
              </CardContent>
              <CardFooter className="pt-4 relative z-10">
                <Button asChild className="w-full gap-2">
                  <Link href={`/trainingen/${t.slug}`}>
                    Programma & inschrijven
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 dark:text-slate-500 max-w-2xl mx-auto mt-12">
          Alle prijzen zijn exclusief BTW, tenzij anders vermeld. Incompany en maatwerk mogelijk — vermeld het in
          je inschrijving of neem{' '}
          <Link href="/contact" className="text-primary-600 dark:text-primary-400 underline">
            contact
          </Link>{' '}
          op.
        </p>
      </section>
    </div>
  )
}
