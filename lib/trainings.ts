export type TrainingLevel = 'beginner' | 'halfgevorderd' | 'gevorderd'

export type ProgramBlock = {
  title: string
  duration?: string
  topics: string[]
}

/** Standaardtekst: certificaat na afronding (alle trainingen) */
export const CERTIFICATE_STATEMENT =
  'Na succesvolle afronding ontvangt elke deelnemer een officieel AI-Group certificaat van deelname.'

export type Training = {
  slug: string
  title: string
  level: TrainingLevel
  levelLabel: string
  pricePerPerson: number
  priceNote?: string
  duration: string
  format: string
  shortDescription: string
  outcomes: string[]
  program: ProgramBlock[]
  targetAudience: string
}

export const trainings: Training[] = [
  {
    slug: 'ai-basics',
    title: 'AI Basics: starten met generatieve AI',
    level: 'beginner',
    levelLabel: 'Beginner',
    pricePerPerson: 295,
    duration: '1 dag (6 uur)',
    format: 'Incompany, groepen van 8–12 deelnemers',
    priceNote: 'Vast bedrag per persoon',
    shortDescription:
      'Voor iedereen die nog weinig tot geen ervaring heeft met ChatGPT en vergelijkbare tools. Je leert veilig en effectief prompts schrijven en herkent kansen (en risico\'s) in je eigen werk.',
    outcomes: [
      'Begrip van wat LLM\'s wel en niet kunnen',
      'Eerste eigen prompt-bibliotheek',
      'Basis rond privacy, AVG en “niet alles delen met de cloud”',
    ],
    targetAudience: 'Medewerkers zonder technische achtergrond, teamleads, HR, communicatie, administratie.',
    program: [
      {
        title: 'Blok 1 — Waarom nu AI?',
        duration: '45 min',
        topics: [
          'Korte geschiedenis en huidige mogelijkheden',
          'Demo: van vraag tot antwoord (tekst, samenvatting, vertaling)',
          'Veelvoorkomende misvattingen',
        ],
      },
      {
        title: 'Blok 2 — Prompting die werkt',
        duration: '90 min',
        topics: [
          'Structuur: rol, taak, context, voorbeeld, formaat',
          'Oefeningen: e-mails, notulen, FAQ',
          'Itereren: van eerste versie naar bruikbaar resultaat',
        ],
      },
      {
        title: 'Blok 3 — Lunch',
        duration: '45 min',
        topics: ['Informeel; ruimte voor vragen'],
      },
      {
        title: 'Blok 4 — Veilig & verantwoord',
        duration: '60 min',
        topics: [
          'Wat mag wel/niet in een publieke chat?',
          'Interne richtlijnen en goedkeuringen',
          'Deepfakes en kritisch lezen — kort',
        ],
      },
      {
        title: 'Blok 5 — AI in jouw dagelijkse werk',
        duration: '90 min',
        topics: [
          'Eigen use cases bedenken (in duo\'s)',
          'Mini-presentaties + feedback van trainer',
          'Volgende stappen en leermaterialen',
        ],
      },
    ],
  },
  {
    slug: 'ai-werkplek',
    title: 'AI op de werkplek: workflows & agents',
    level: 'halfgevorderd',
    levelLabel: 'Halfgevorderd',
    pricePerPerson: 495,
    duration: '2 dagen (2 × 5 uur)',
    format: 'Incompany, groepen van 8–12 deelnemers',
    priceNote: 'Vast bedrag per persoon',
    shortDescription:
      'Voor teams die al met ChatGPT werken en nu structuur willen: herbruikbare workflows, eenvoudige automatisering en introductie tot AI-agents binnen bestaande tools.',
    outcomes: [
      'Ontwerp van 2–3 concrete workflows voor jullie organisatie',
      'Koppeling met documenten/tabellen (zonder code)',
      'Overzicht van agent-patronen en wanneer ze lonen',
    ],
    targetAudience: 'Kenniswerkers, functioneel beheer, IT-light, projectleiders, innovators.',
    program: [
      {
        title: 'Dag 1 — Workflowdenken',
        duration: 'Ochtend',
        topics: [
          'Van losse prompts naar vaste stappen (templates)',
          'Documenten: samenvatten, vergelijken, classificeren',
          'Praktijk: eigen documentenset (anoniem/indien gewenst)',
        ],
      },
      {
        title: 'Dag 1 — Automatisering zonder programmeur',
        duration: 'Middag',
        topics: [
          'Triggers en hand-offs (conceptueel)',
          'Voorbeelden met gangbare platforms',
          'Pitfalls: kwaliteit, versiebeheer van prompts',
        ],
      },
      {
        title: 'Dag 2 — Agents in de praktijk',
        duration: 'Ochtend',
        topics: [
          'Wat is een “agent” vs. een chat?',
          'Rollen, tools, geheugen (high level)',
          'Demo’s: research, draft → review → finalize',
        ],
      },
      {
        title: 'Dag 2 — Eigen mini-traject',
        duration: 'Middag',
        topics: [
          'In team een use case uitwerken',
          'Presentatie + advies van trainer',
          'Roadmap: pilot, meten, uitbreiden',
        ],
      },
    ],
  },
  {
    slug: 'ai-rag-governance',
    title: 'Gevorderd: eigen data, RAG & AI-governance',
    level: 'gevorderd',
    levelLabel: 'Gevorderd',
    pricePerPerson: 795,
    priceNote: 'Vast bedrag per persoon',
    duration: '2 dagen (2 × 6 uur)',
    format: 'Incompany, groepen van 8–12 deelnemers',
    shortDescription:
      'Voor (lead) developers, architecten en data/IT-verantwoordelijken. Diepgaand: RAG-architectuur, API\'s, evaluaties en governance zodat AI productie-klaar en auditeerbaar wordt.',
    outcomes: [
      'Ontwerpschets voor RAG op jullie bronnen',
      'Checklist governance: logging, toegang, modelkeuze',
      'Actieplan voor eerste productie-pilot',
    ],
    targetAudience: 'Developers, solution architects, CISO-light, data engineers, tech leads.',
    program: [
      {
        title: 'Dag 1 — Fundamenten RAG',
        duration: 'Ochtend',
        topics: [
          'Embeddings, chunking, retrieval — wanneer faalt het?',
          'Vector store vs. keyword; hybrid search',
          'Lab: eenvoudige RAG-pijplijn (meegeleverde omgeving)',
        ],
      },
      {
        title: 'Dag 1 — API\'s, modellen, kosten',
        duration: 'Middag',
        topics: [
          'Providerkeuze en latency',
          'Structured output en function calling (overzicht)',
          'Kostenraming en caching-strategieën',
        ],
      },
      {
        title: 'Dag 2 — Kwaliteit & evaluatie',
        duration: 'Ochtend',
        topics: [
          'Testsets, human review, automatische metrics',
          'Hallucinaties mitigeren',
          'Versiebeheer van prompts en data',
        ],
      },
      {
        title: 'Dag 2 — Governance & operationalisatie',
        duration: 'Middag',
        topics: [
          'Rollen, logging, PII, retention',
          'AI Act (relevante punten) praktisch toegepast',
          'Afsluiting: eigen architectuurschets + feedback',
        ],
      },
    ],
  },
  {
    slug: 'ai-leiderschap',
    title: 'AI-strategie voor leidinggevenden',
    level: 'halfgevorderd',
    levelLabel: 'Leiderschap',
    pricePerPerson: 695,
    duration: 'Halve dag (3,5 uur)',
    format: 'Incompany, groepen van 8–12 deelnemers',
    priceNote: 'Vast bedrag per persoon',
    shortDescription:
      'Compact programma voor directie en lijnmanagers: portefeuille aan AI-initiatieven, vendorkeuzes, risico\'s en hoe je teams meeneemt zonder hype of stagnatie.',
    outcomes: [
      'Framework om initiatieven te prioriteren',
      'Begrip van kosten, doorlooptijd en “build vs. buy”',
      'Communicatielijn naar organisatie',
    ],
    targetAudience: 'Directie, MT, lijnmanagers, product owners met budgetverantwoordelijkheid.',
    program: [
      {
        title: 'Module 1 — Landschap',
        duration: '60 min',
        topics: ['Trends die ertoe doen', 'Wat concurrenten vaak doen', 'Realistische verwachtingen'],
      },
      {
        title: 'Module 2 — Portfolio & risico',
        duration: '60 min',
        topics: ['Quick wins vs. platformkeuzes', 'Juridisch/ethisch kort', 'KPI\'s en falen vroeg signaleren'],
      },
      {
        title: 'Module 3 — Interactie',
        duration: '90 min',
        topics: ['Casuïstiek (anoniem)', 'Prioriteringsoefening', 'Vervolgstappen en sparring met AI-Group'],
      },
    ],
  },
]

export function getTraining(slug: string): Training | undefined {
  return trainings.find((t) => t.slug === slug)
}

export function getAllTrainingSlugs(): string[] {
  return trainings.map((t) => t.slug)
}
