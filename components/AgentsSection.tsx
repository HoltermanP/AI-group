'use client'

import Link from 'next/link'
import {
  MessageSquare,
  FileText,
  TrendingUp,
  Coffee,
  Activity,
  Briefcase,
  Zap,
  Target,
  Heart,
  BarChart3,
  Shield,
  ArrowRight,
  Award,
  Bot,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { getSiteData } from '@/lib/getData'
import CaseIcon from '@/components/CaseIcon'

export default function AgentsSection() {
  const data = getSiteData()

  const agents = [
    {
      icon: MessageSquare,
      name: 'Klantenservice Agent',
      description:
        'Beantwoordt klantvragen 24/7, verwerkt bestellingen en lost problemen op.',
      color: 'text-blue-400',
    },
    {
      icon: FileText,
      name: 'Documentatie Agent',
      description: 'Genereert en beheert documenten: contracten, offertes, rapporten.',
      color: 'text-purple-400',
    },
    {
      icon: TrendingUp,
      name: 'Procesoptimalisatie Agent',
      description: 'Analyseert workflows, bottlenecks en verbetert processen.',
      color: 'text-green-400',
    },
    {
      icon: Briefcase,
      name: 'Project Management Agent',
      description: 'Overzicht over projecten, deadlines en resources.',
      color: 'text-indigo-400',
    },
    {
      icon: BarChart3,
      name: 'Data Analytics Agent',
      description: 'Bedrijfsdata, inzichten en datagedreven besluitvorming.',
      color: 'text-emerald-400',
    },
    {
      icon: Shield,
      name: 'Security & Compliance Agent',
      description: 'Veiligheid, compliance en proactieve risicodetectie.',
      color: 'text-amber-400',
    },
    {
      icon: Zap,
      name: 'Automatisering Agent',
      description: 'Repetitieve taken automatiseren, tijd voor strategie.',
      color: 'text-cyan-400',
    },
    {
      icon: Target,
      name: 'Strategie & Planning Agent',
      description: 'Doelen, strategie en markttrends.',
      color: 'text-pink-400',
    },
  ]

  const wellbeingAgents = [
    {
      icon: Coffee,
      name: 'Pauze & Rust',
      description: 'Rust en pauzes op het juiste moment.',
      color: 'text-orange-400',
    },
    {
      icon: Activity,
      name: 'Beweging',
      description: 'Gezond bewegen en reminders.',
      color: 'text-red-400',
    },
    {
      icon: Heart,
      name: 'Work-life balance',
      description: 'Balans werk en privé.',
      color: 'text-rose-400',
    },
  ]

  const cardBase =
    'rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-sm p-4 hover:bg-white/[0.1] hover:border-white/25 transition-colors'

  return (
    <section
      id="agents"
      className="scroll-mt-24 relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-primary-700/90 via-slate-900 to-slate-950 py-12 md:py-14 lg:py-16"
      aria-labelledby="agents-track-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.18),transparent)]" />
      <div className="container-custom relative z-10 max-w-6xl">
        {/* Eén gezamenlijke kop */}
        <header className="mb-8 md:mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
            <Bot className="h-3.5 w-3.5" aria-hidden />
            Agents &amp; track record
          </div>
          <h2
            id="agents-track-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            Meer agents dan medewerkers — bewezen in de praktijk
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-blue-100/90 md:text-base">
            AI-agents die 24/7 voor u kunnen werken, en cases die laten zien hoe snel we leveren.
          </p>
        </header>

        {/* Agents — compact raster */}
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-300">
          <span className="h-px w-8 shrink-0 bg-primary-500/50 sm:flex-1 sm:max-w-[4rem]" aria-hidden />
          AI-agents
          <span className="h-px flex-1 bg-primary-500/30" aria-hidden />
        </div>
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, index) => {
            const Icon = agent.icon
            return (
              <motion.div
                key={`agent-${index}`}
                initial={{ opacity: 0.96 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.2 }}
                className={cardBase}
              >
                <div className="mb-2 flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon className={`h-4 w-4 ${agent.color}`} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold leading-tight text-white">{agent.name}</h3>
                    <p className="mt-1 text-xs leading-snug text-blue-100/80 line-clamp-2">
                      {agent.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Welzijn — één rij */}
        <div className="mb-10 rounded-xl border border-white/10 bg-black/20 p-3 md:p-4">
          <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-widest text-white/50">
            Ook voor team &amp; welzijn
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {wellbeingAgents.map((agent, index) => {
              const Icon = agent.icon
              return (
                <div
                  key={`w-${index}`}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2"
                >
                  <Icon className={`h-4 w-4 shrink-0 ${agent.color}`} aria-hidden />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white">{agent.name}</p>
                    <p className="text-[11px] text-blue-100/70">{agent.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Track record — zelfde sectie, geen tweede “pagina” */}
        <div
          id="cases"
          className="scroll-mt-24 border-t border-white/10 pt-8 md:pt-10"
        >
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-center sm:justify-between sm:text-left">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-400" aria-hidden />
              <span className="text-sm font-bold text-white">Track record</span>
              <span className="hidden text-xs text-white/50 sm:inline">— cases</span>
            </div>
            <p className="w-full text-xs text-blue-100/80 sm:mt-0 sm:w-auto sm:max-w-md sm:text-right">
              On-track, snel opgeleverd — dezelfde aanpak als bij onze agents.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.cases.map((caseItem, index) => {
              const href =
                'externalUrl' in caseItem && caseItem.externalUrl
                  ? caseItem.externalUrl
                  : `/cases/${caseItem.slug}`
              const isExternal = !!(caseItem as { externalUrl?: string }).externalUrl

              return (
                <Link
                  key={index}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={`group ${cardBase} !p-0 overflow-hidden border-white/15 hover:scale-[1.01]`}
                >
                  {/* Compacte kop: dun strookje, klein icoon — meer ruimte voor tekst */}
                  <div className="relative flex items-center gap-2 border-b border-white/10 bg-gradient-to-r from-primary-600 to-primary-800 px-3 py-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center opacity-95">
                      <CaseIcon slug={caseItem.slug} sector={caseItem.sector} size="sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="rounded-full bg-black/25 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                          {caseItem.sector}
                        </span>
                        {caseItem.timeline && (
                          <span className="rounded-full bg-green-500/25 px-1.5 py-0.5 text-[9px] font-bold text-green-200">
                            {caseItem.timeline}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-white line-clamp-2">{caseItem.title}</h3>
                    <p className="mt-1 text-[11px] text-blue-100/70 line-clamp-2">{caseItem.solution}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-primary-300">
                      {isExternal ? 'Website' : 'Details'}
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* CTA — compact */}
        <div className="mt-8 rounded-xl border border-primary-500/30 bg-primary-600/90 p-5 md:p-6">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-bold text-white md:text-base">Vergelijkbare oplossing?</p>
              <p className="text-xs text-primary-100/90">Plan een verkenning — we denken graag mee.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary-700 hover:bg-blue-50"
              >
                {data.cta.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-white/80 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                {data.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
