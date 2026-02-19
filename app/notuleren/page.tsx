import { Metadata } from 'next'
import Link from 'next/link'
import {
  ClipboardList,
  Mic,
  MessageCircle,
  Bot,
  ListOrdered,
  ChevronRight,
  CheckCircle2,
  FileText,
  Sparkles,
  HelpCircle,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Shield,
} from 'lucide-react'
import { PromptBlock } from '@/components/prompt-tips/PromptBlock'

export const metadata: Metadata = {
  title: 'Notuleren met AI - AI-Group',
  description:
    'Uitgebreide instructie voor het notuleren van vergaderingen met AI: Copilot vs ChatGPT, opname, transcriptie, notulen en voorbeeldprompts.',
}

const copilotVsChatGPT = {
  intro:
    'Voor het notuleren van vergaderingen met AI kun je zowel Microsoft Copilot als ChatGPT (of vergelijkbare chatbots) gebruiken. De keuze hangt af van waar je vergadert, hoe je opneemt en of je in de Microsoft-omgeving werkt.',
  whenCopilot: [
    'Vergaderingen in Microsoft Teams: Copilot kan live in de vergadering meeluisteren en automatisch notulen en actiepunten voorstellen.',
    'Je wilt niet handmatig een opname uploaden: Copilot in Teams koppelt direct aan de vergadering.',
    'Notulen direct in Word of OneNote: Copilot kan notulen in je document bewerken of aanvullen.',
    'Je organisatie gebruikt Microsoft 365: dan is Copilot vaak al beschikbaar en voldoet aan hetzelfde beveiligings- en compliancebeleid.',
  ],
  whenChatGPT: [
    'Je hebt een transcript of opname van een vergadering (van welk platform dan ook) en wilt die omzetten naar notulen.',
    'Geen Teams of geen Copilot-licentie: je plakt het transcript in ChatGPT en vraagt om notulen.',
    'Je wilt uitgebreide, gestructureerde prompts gebruiken: rol, format, actie-extractie in één keer.',
    'Vergaderingen op Zoom, Google Meet, of opname via eigen tool: eerst transcriptie (bijv. met een spraak-naar-teksttool), daarna de tekst in ChatGPT.',
  ],
  comparison: [
    {
      aspect: 'Opname & transcriptie',
      copilot: 'In Teams: vaak geïntegreerd (live transcript + Copilot-notulen). Geen aparte upload.',
      chatgpt: 'Zelf opname maken en laten transcriberen (bijv. Whisper, Teams-export, andere tool), daarna transcript plakken in de chat.',
    },
    {
      aspect: 'Waar notulen ontstaan',
      copilot: 'In Teams (na vergadering) of in Word/OneNote via Copilot. Alles binnen Microsoft.',
      chatgpt: 'In de ChatGPT-chat. Je kopieert het resultaat naar Word, Notion of e-mail.',
    },
    {
      aspect: 'Sturing via prompt',
      copilot: 'Meestal korte instructies of vooraf ingestelde opties (bijv. "samenvatting", "actiepunten"). Minder ruimte voor lange, maatwerk-prompts.',
      chatgpt: 'Volledige vrijheid: lange prompts, vaste structuur, rol ("je bent notulist"), format (Markdown, tabel acties), meerstaps ("eerst notulen, dan actielijst").',
    },
    {
      aspect: 'Kosten & toegang',
      copilot: 'Vaak via Microsoft 365-abonnement (Copilot for Microsoft 365). Afhankelijk van licentie.',
      chatgpt: 'Apart abonnement (ChatGPT Plus/Team). Geen koppeling met Teams; wel met elk transcript dat je plakt.',
    },
  ],
}

const workflowSteps = [
  {
    title: 'Opname maken',
    description:
      'Neem de vergadering op (Teams, Zoom, Google Meet of een recorder). Veel platforms bieden ingebouwde opname en soms live transcriptie. Let op: informeer deelnemers en check het privacy-/opnamebeleid van je organisatie.',
  },
  {
    title: 'Transcriptie verkrijgen',
    description:
      'Als er geen live transcript is: exporteer het transcript uit Teams (na de vergadering) of gebruik een spraak-naar-teksttool (bijv. Whisper, Otter, of de transcriptiefunctie van het platform). Je hebt ruwe tekst nodig waar de AI op kan werken.',
  },
  {
    title: 'Notulen laten genereren',
    description:
      'Copilot: in Teams na de vergadering de Copilot-samenvatting en actiepunten gebruiken, of in Word/OneNote het transcript (of de samenvatting) aan Copilot geven. ChatGPT: plak het transcript in een nieuwe chat en gebruik een duidelijke prompt (zie voorbeelden hieronder).',
  },
  {
    title: 'Controleren en afronden',
    description:
      'Lees de gegenereerde notulen altijd na. Vul ontbrekende namen, besluiten of acties aan. Verwijder fouten of onduidelijkheden. Deel de notulen volgens jullie vaste werkwijze.',
  },
]

const copilotInPractice = [
  {
    title: 'Tijdens of na een Teams-vergadering',
    example:
      'Open de vergadering in Teams → na afloop vind je bij "Samenvatting" of via Copilot een overzicht. Je kunt vragen om "actiepunten", "besluiten" of "volgende stappen". Soms kun je de samenvatting naar Word exporteren en daar verder bewerken met Copilot.',
  },
  {
    title: 'In Word met bestaand transcript',
    example:
      'Plak het transcript in een Word-document. Selecteer de tekst → roep Copilot aan (bijv. via het Copilot-paneel) → vraag: "Maak van deze tekst formele notulen met kopjes: Aanwezigen, Besproken punten, Besluiten, Actiepunten." Copilot past de tekst in je document aan of voegt een samenvatting toe.',
  },
  {
    title: 'In OneNote',
    example:
      'Als je notities in OneNote maakt tijdens de vergadering: selecteer je aantekeningen → Copilot → "Maak hier gestructureerde notulen van met actiepunten." Handig als je al losse punten hebt en die wilt opschonen.',
  },
]

const chatGPTTips = [
  'Plak het volledige transcript; hoe completer, hoe beter de notulen. Ontbrekende stukken leiden tot gaten of verkeerde interpretaties.',
  'Geef context in je prompt: type vergadering (projectoverleg, directie, standup), namen van aanwezigen indien bekend, en gewenste structuur.',
  'Vraag expliciet om secties: Aanwezigen, Agenda/Besproken punten, Genomen besluiten, Actiepunten (met verantwoordelijke en deadline), Open punten.',
  'Voor alleen acties: "Haal uit onderstaande transcriptie alle actiepunten. Geef per punt: omschrijving, verantwoordelijke, deadline. Als iets niet genoemd is, zet n.t.b."',
  'Vraag om neutrale, professionele toon en géén letterlijke weergave van discussies tenzij je dat expliciet wilt.',
]

const examplePrompts = [
  {
    title: 'Basis: notulen uit transcript',
    description: 'Eenvoudige prompt voor gestructureerde notulen.',
    prompt:
      'Maak van onderstaande vergadertranscriptie formele notulen. Gebruik de structuur: Aanwezigen, Besproken punten (per agendapunt kort), Genomen besluiten, Actiepunten (met verantwoordelijke en deadline indien genoemd), Open punten. Houd de toon professioneel en neutraal. Schrijf in het Nederlands.',
  },
  {
    title: 'Uitgebreid: notulen + actietabel',
    description: 'Eerst notulen, daarna acties in een tabel.',
    prompt:
      'Stap 1: Maak van onderstaande transcriptie formele notulen met kopjes (Aanwezigen, Besproken punten, Besluiten, Overig). Stap 2: Extraheer alle actiepunten in een aparte tabel met kolommen: Actie, Verantwoordelijke, Deadline, Prioriteit (H/M/L). Als verantwoordelijke of deadline niet genoemd zijn, zet "n.t.b.". Output in Markdown.',
  },
  {
    title: 'Alleen actiepunten',
    description: 'Als je alleen een actielijst nodig hebt.',
    prompt:
      'Haal uit onderstaande vergadertranscriptie alle actiepunten. Geef per punt: omschrijving van de actie, verantwoordelijke (indien genoemd, anders n.t.b.), deadline (indien genoemd, anders n.t.b.), prioriteit (hoog/midden/laag). Presenteer als overzichtelijke genummerde lijst. Alleen de acties, geen andere notulen.',
  },
  {
    title: 'Met rol en format',
    description: 'Gevorderd: vaste rol en duidelijk format.',
    prompt:
      'Je bent een ervaren notulist. Maak van onderstaande transcriptie notulen volgens dit format: (1) Aanwezigen, (2) Besproken punten met per punt max. 3 regels samenvatting, (3) Genomen besluiten genummerd, (4) Actiepunten in een tabel: Actie | Wie | Wanneer. Maximaal 1,5 pagina. Geen inleiding of slotzin. Nederlands.',
  },
]

const faqItems = [
  {
    q: 'Mag ik vergaderingen opnemen voor notulen?',
    a: 'Dat hangt af van je organisatie en de wetgeving. Informeer deelnemers altijd vooraf (transparantie) en check het opname- en privacybeleid. In veel bedrijven is opnemen toegestaan voor interne notulen mits er geen vertrouwelijke externe afspraken worden besproken zonder toestemming.',
  },
  {
    q: 'Is Copilot in Teams automatisch beschikbaar?',
    a: 'Nee. Copilot in Teams is onderdeel van Copilot for Microsoft 365 en vereist een aparte licentie. Niet elke M365-klant heeft dit. Vraag bij IT na of Copilot voor vergaderingen is ingericht.',
  },
  {
    q: 'Kan ChatGPT mijn Teams-opname verwerken?',
    a: 'ChatGPT verwerkt geen audio direct. Je hebt eerst een transcript nodig. Teams kan na de vergadering een transcript genereren (indien ingeschakeld); dat transcript kun je kopiëren en in ChatGPT plakken. Voor pure audio kun je een tool als Whisper of de transcriptie van Teams gebruiken.',
  },
  {
    q: 'Hoe nauwkeurig zijn AI-notulen?',
    a: 'Ze zijn een sterke eerste versie maar geen vervanging voor controle. Namen kunnen verkeerd worden gespeld, nuance kan verloren gaan, en acties kunnen verkeerd worden toegewezen. Gebruik AI als hulp: altijd nakijken en waar nodig aanvullen of corrigeren.',
  },
  {
    q: 'Copilot vs ChatGPT voor notuleren: wat kies ik?',
    a: 'Vergader je in Teams en heb je Copilot? Dan is Copilot het handigst: weinig handelingen, notulen direct in de vergadering. Werk je met transcripten van verschillende bronnen of wil je maximale controle over structuur en prompt? Dan is ChatGPT (of een andere chatbot) met een goede prompt vaak flexibeler.',
  },
]

const officialLinks = [
  { name: 'Microsoft – Copilot in Teams-vergaderingen', url: 'https://support.microsoft.com/nl-nl/office/copilot-invoegtoepassingen-gebruiken-in-microsoft-teams-vergaderingen-0bf9dd3c-96f7-44e2-8bb8-790bedf066b1' },
  { name: 'Microsoft – Microsoft 365 Copilot (Word, Teams, en meer)', url: 'https://support.microsoft.com/nl-nl/copilot' },
  { name: 'OpenAI – ChatGPT', url: 'https://chat.openai.com' },
]

export default function NotulerenPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-white/20 text-white px-6 py-2 rounded-full text-base md:text-lg font-semibold border border-white/30 backdrop-blur-sm flex items-center justify-center gap-2 w-fit mx-auto">
                <ClipboardList className="w-5 h-5" />
                Notuleren met AI
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Notuleren van vergaderingen met AI
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Stapsgewijze instructie voor het maken van notulen met Copilot en ChatGPT: van opname en transcriptie tot gestructureerde notulen en actiepunten. Duidelijke verschillen en wanneer je welke tool gebruikt.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-blue-50 leading-relaxed">
                AI kan vergaderingen samenvatten, notulen opstellen en actiepunten uit een transcript halen. <span className="font-semibold text-white">Microsoft Copilot</span> is ideaal als je in Teams vergadert en binnen Microsoft 365 wilt blijven. <span className="font-semibold text-white">ChatGPT</span> (of een vergelijkbare chatbot) is geschikt als je een transcript hebt en maximale controle wilt over structuur en prompt. Op deze pagina leggen we beide werkwijzen uit en geven we concrete voorbeeldprompts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inhoudsopgave */}
      <section className="section-padding bg-white dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <ListOrdered className="w-7 h-7 text-primary-500" />
              Inhoudsopgave
            </h2>
            <nav className="space-y-3">
              <a
                href="#copilot-vs-chatgpt"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Copilot vs. ChatGPT</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a
                href="#workflow"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <Mic className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Workflow: opname → notulen</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a
                href="#copilot-praktijk"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <Bot className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Copilot in de praktijk</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a
                href="#chatgpt-prompts"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <FileText className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">ChatGPT: tips en voorbeeldprompts</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a
                href="#faq"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Veelgestelde vragen</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a
                href="#meer-lezen"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <BookOpen className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Meer lezen</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* ========== COPILOT VS CHATGPT ========== */}
      <section
        id="copilot-vs-chatgpt"
        className="section-padding bg-gray-50 dark:bg-slate-800 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Copilot vs. ChatGPT voor notuleren
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Wanneer welke tool gebruiken?
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-8">
              {copilotVsChatGPT.intro}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-amber-500" />
                  Wanneer Microsoft Copilot
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                  {copilotVsChatGPT.whenCopilot.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary-500" />
                  Wanneer ChatGPT (of vergelijkbare chatbot)
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                  {copilotVsChatGPT.whenChatGPT.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Verschil per aspect
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 dark:border-slate-600 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 dark:bg-slate-700">
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-slate-600">Aspect</th>
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-slate-600">Copilot</th>
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-slate-600">ChatGPT</th>
                  </tr>
                </thead>
                <tbody>
                  {copilotVsChatGPT.comparison.map((row, i) => (
                    <tr key={i} className="border-b border-gray-200 dark:border-slate-600 last:border-0">
                      <td className="p-4 font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-slate-800/50">{row.aspect}</td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-200">{row.copilot}</td>
                      <td className="p-4 text-sm text-gray-700 dark:text-gray-200">{row.chatgpt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WORKFLOW ========== */}
      <section
        id="workflow"
        className="section-padding bg-white dark:bg-slate-700 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                <Mic className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Workflow: van opname tot notulen
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Vier stappen die bij zowel Copilot als ChatGPT van toepassing zijn
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {workflowSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-200">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== COPILOT IN DE PRAKTIJK ========== */}
      <section
        id="copilot-praktijk"
        className="section-padding bg-gray-50 dark:bg-slate-800 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                <Bot className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Copilot in de praktijk
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Waar en hoe je Copilot voor notulen gebruikt
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {copilotInPractice.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-200">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CHATGPT: TIPS EN VOORBEELDPROMPTS ========== */}
      <section
        id="chatgpt-prompts"
        className="section-padding bg-white dark:bg-slate-700 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  ChatGPT: tips en voorbeeldprompts
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Zo haal je het beste uit een transcript in de chat
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Tips voor betere notulen met ChatGPT
            </h3>
            <ul className="space-y-2 mb-10">
              {chatGPTTips.map((tip, i) => (
                <li key={i} className="flex gap-2 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600">
                  <Sparkles className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200 text-sm">{tip}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Voorbeeldprompts (kopieer en plak)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
              Plak onder de prompt je vergadertranscriptie. Klik op &quot;Kopieer prompt&quot; om de prompt te kopiëren.
            </p>
            <div className="space-y-8">
              {examplePrompts.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <ClipboardList className="w-5 h-5 text-primary-500" />
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{item.description}</p>
                  <PromptBlock text={item.prompt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRIVACY ========== */}
      <section className="section-padding bg-gray-50 dark:bg-slate-800 scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary-500" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Privacy en vertrouwelijkheid
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              Vergaderingen kunnen vertrouwelijke informatie bevatten. Controleer het beleid van je organisatie voordat je opnames of transcripten deelt met Copilot of ChatGPT. Bij Copilot for Microsoft 365 blijven gegevens binnen de Microsoft-tenant; bij ChatGPT hangt het af van je abonnement en de voorwaarden van OpenAI. Deel geen persoonsgegevens of gevoelige afspraken zonder toestemming.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section
        id="faq"
        className="section-padding bg-white dark:bg-slate-700 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Veelgestelde vragen
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Over opname, Copilot, ChatGPT en nauwkeurigheid
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-200">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== MEER LEZEN ========== */}
      <section
        id="meer-lezen"
        className="section-padding bg-gray-50 dark:bg-slate-800 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Meer lezen
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Officiële documentatie van Microsoft en OpenAI
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {officialLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-4 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
                  >
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {link.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meer leren over AI in je werk?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Bekijk onze <Link href="/prompt-tips" className="underline font-semibold text-white hover:text-blue-100">Prompt tips</Link> voor algemene instructies over samenvatten, e-mails, agenda&apos;s en meer. Of neem contact op voor maatwerk in jullie organisatie.
            </p>
            <Link
              href="/prompt-tips"
              className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 mr-4"
            >
              <span>Prompt tips</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-200"
            >
              <span>Contact</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
