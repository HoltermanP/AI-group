/**
 * Voorbeeld van hoe je de templates gebruikt
 * Dit bestand kan verwijderd worden - het is alleen als referentie
 */

import { HeroTemplate, FeatureGridTemplate, CTATemplate, StatsTemplate, TestimonialTemplate } from './index'
import { Zap, Brain, TrendingUp, RefreshCw, Clock, Users } from 'lucide-react'

export function ExampleUsage() {
  return (
    <>
      {/* Hero Template Voorbeeld */}
      <HeroTemplate
        title="AI-Group - AI-applicaties voor elke organisatie"
        subtitle="Binnen 48 uur een Proof of Concept. MVP binnen 72 uur. Livegang versie 1.0 binnen 4 weken."
        primaryAction={{ label: "Binnen 48 uur inzicht", href: "/contact" }}
        secondaryAction={{ label: "Bekijk Platform Demo", href: "/platform" }}
        background="dark"
      />

      {/* Feature Grid Template Voorbeeld */}
      <FeatureGridTemplate
        title="Waarom AI-first?"
        subtitle="Wij zijn een AI-first organisatie met een bewezen trackrecord"
        features={[
          {
            icon: <Zap className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
            title: "AI versnelt het bouwproces",
            description: "Waar traditionele IT maanden nodig heeft, draaien wij binnen dagen een werkend prototype."
          },
          {
            icon: <Brain className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
            title: "AI helpt beslissingen nemen",
            description: "Onze oplossingen worden door AI gestuurd op tijd, kosten én kwaliteit tegelijk."
          },
          {
            icon: <TrendingUp className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
            title: "AI maakt applicaties slimmer",
            description: "Applicaties die slimmer worden na livegang en zichzelf continu verbeteren."
          },
          {
            icon: <RefreshCw className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
            title: "Continue iteratie",
            description: "Direct & AI-gestuurd optimaliseren vanaf dag één, geen wachten op project 2."
          }
        ]}
        columns={4}
      />

      {/* Stats Template Voorbeeld */}
      <StatsTemplate
        stats={[
          {
            value: "48 uur",
            label: "Proof of Concept",
            icon: <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          },
          {
            value: "72 uur",
            label: "MVP",
            icon: <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          },
          {
            value: "4 weken",
            label: "Livegang versie 1.0",
            icon: <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          },
          {
            value: "24/7",
            label: "Agents beschikbaar",
            icon: <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          }
        ]}
        columns={4}
      />

      {/* CTA Template Voorbeeld */}
      <CTATemplate
        title="Binnen 48 uur inzicht in wat AI voor u kan betekenen"
        description="Start met een Proof of Concept binnen 48 uur. Geen maanden wachten op een eerste inzicht – wij leveren wat anderen beloven. Binnen weken."
        primaryAction={{ label: "Binnen 48 uur inzicht", href: "/contact" }}
        secondaryAction={{ label: "Plan verkenning", href: "/contact" }}
        variant="gradient"
      />

      {/* Testimonial Template Voorbeeld */}
      <TestimonialTemplate
        title="Wat klanten zeggen"
        subtitle="Echte verhalen van organisaties die hun processen hebben getransformeerd met AI-Group."
        testimonials={[
          {
            content: "AI-Group heeft onze processen compleet getransformeerd. 35% minder incidenten en 100% compliance - ongekend resultaat.",
            author: "AI-Group Klant",
            rating: 5
          },
          {
            content: "Het AI Platform geeft ons real-time inzicht in alle projecten. Workflows die voorheen dagen kostten, zijn nu in uren klaar.",
            author: "AI-Group Klant",
            rating: 5
          },
          {
            content: "De AI Analyse functie heeft onze processen 40% sneller gemaakt. Kwaliteit is consistent en rapportage is volledig geautomatiseerd.",
            author: "AI-Group Klant",
            rating: 5
          }
        ]}
        variant="grid"
      />
    </>
  )
}


