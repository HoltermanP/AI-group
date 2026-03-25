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
import { trainings, CERTIFICATE_STATEMENT, getAverageTotal } from '@/lib/trainings'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/trainingen',
  title: 'AI-trainingen - AI-Group',
  description:
    'Ervaren AI-opleider: praktijkgerichte trainingen van beginner tot gevorderd. Certificaat na afronding. AI-Group Academy.',
})

const levelStyles: Record<string, string> = {
  beginner: 'bg-brand-blue/15 text-brand-blueLight border-brand-blue/35',
  halfgevorderd: 'bg-brand-blueLight/15 text-brand-blueLight border-brand-blueLight/35',
  gevorderd: 'bg-brand-red/15 text-brand-red border-brand-red/35',
}

export default function TrainingenPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-brand-black to-brand-navy">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,111,232,0.22),transparent)]" />
        <div className="container-custom relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="outline" className="gap-1 border-brand-blue/40 text-brand-blueLight">
                <GraduationCap className="w-3.5 h-3.5" />
                AI-Group Academy
              </Badge>
              <Badge
                variant="outline"
                className="gap-1 border-border bg-card/70 text-foreground"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blueLight" />
                Ervaren AI-opleider
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              AI-trainingen voor elk niveau
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">
                AI-Group is een ervaren AI-opleider en implementatiepartner.
              </strong>{' '}
              Onze trainers combineren lesgeven met het dagelijks bouwen en begeleiden van AI-oplossingen bij
              organisaties — geen losstaande theorie, maar inhoud direct uit de praktijk.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Van eerste kennismaking met ChatGPT tot productie-klare RAG en governance: alle trainingen zijn
              <strong className="text-foreground"> incompany</strong> voor groepen van 8–12
              deelnemers, met een totaalbedrag per groep, uitgewerkt programma en certificaat na afronding. Klik door voor het volledige programma en
              inschrijving.
            </p>
            <div className="mx-auto max-w-2xl rounded-2xl border border-brand-red/45 bg-brand-red/10 px-6 py-4 flex flex-col sm:flex-row items-center gap-4 text-left shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-red/20 text-brand-red">
                <Award className="h-7 w-7" aria-hidden />
              </div>
              <div>
                <p className="font-bold text-foreground text-base md:text-lg">
                  Certificaat na afronding
                </p>
                <p className="text-sm md:text-base text-muted-foreground mt-1 leading-snug">
                  {CERTIFICATE_STATEMENT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professionele positionering: ervaren opleider */}
      <section className="border-y border-border bg-brand-surface text-foreground">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blueLight mb-2">
              Opleiding op niveau
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Trainen bij dezelfde partij die uw AI mee implementeert
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
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
                text: 'Bij u op locatie, groepen van 8–12 deelnemers, totaalbedrag per groep.',
              },
              {
                icon: GraduationCap,
                title: 'Doorlopend programma',
                text: 'Opbouw van beginner tot gevorderd, zodat teams structureel kunnen groeien met dezelfde opleider.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card/70 p-5 md:p-6 text-left hover:border-brand-blue/40 transition-colors"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blueLight">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-bold text-foreground text-sm md:text-base mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.text}</p>
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
              className="flex flex-col border-border shadow-md hover:shadow-xl transition-shadow duration-300 bg-card overflow-hidden group"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge className={levelStyles[t.level] ?? ''} variant="outline">
                    {t.levelLabel}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {t.duration}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                  {t.title}
                </h2>
              </CardHeader>
              <CardContent className="flex-1 pt-2 relative z-10">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {t.shortDescription}
                </p>
                <div className="rounded-xl bg-secondary px-4 py-3 border border-border">
                  <div className="text-2xl font-bold text-brand-blueLight font-kpi">
                    € {getAverageTotal(t).toLocaleString('nl-NL')}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">gemiddeld totaal (8-12 deelnemers, excl. BTW)</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {t.format}
                  </p>
                  <p className="text-xs font-semibold text-brand-red mt-3 flex items-center gap-1.5 border-t border-border pt-3">
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

        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mt-12">
          Alle prijzen zijn exclusief BTW, tenzij anders vermeld. Incompany en maatwerk mogelijk — vermeld het in
          je inschrijving of neem{' '}
          <Link href="/contact" className="text-brand-blueLight underline">
            contact
          </Link>{' '}
          op.
        </p>
      </section>
    </div>
  )
}
