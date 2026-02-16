import { Metadata } from 'next'
import Link from 'next/link'
import {
  Lightbulb,
  FileText,
  ClipboardList,
  ListTodo,
  Mail,
  Reply,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Zap,
  ListOrdered,
  Brain,
  Presentation,
  PenLine,
  ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prompt tips - AI-Group',
  description:
    'Praktische prompt-tips voor beginners en gevorderden: teksten samenvatten, notulen maken, actielijsten, e-mails, agenda\'s, en geavanceerde technieken.',
}

type TipCategory = {
  icon: typeof FileText
  title: string
  description: string
  tips: string[]
  examplePrompt: string
  color: string
  bgColor: string
}

const beginnerCategories: TipCategory[] = [
  {
    icon: FileText,
    title: 'Teksten samenvatten',
    description:
      'Laat AI lange documenten, rapporten of artikelen tot een heldere samenvatting terugbrengen.',
    tips: [
      'Geef duidelijk aan wat je nodig hebt: "een samenvatting in maximaal 3 alinea\'s" of "bulletpoints met de belangrijkste conclusies".',
      'Vraag om verschillende lengtes: executive summary (1 pagina), kernpunten (5 bullets) of één alinea.',
      'Specificeer het doel: "voor een presentatie", "voor iemand die geen tijd heeft om alles te lezen" of "alleen de aanbevelingen".',
      'Plak de volledige brontekst in de chat; de AI kan dan precies samenvatten wat er staat.',
    ],
    examplePrompt:
      'Vat onderstaande tekst samen in maximaal 5 bulletpoints. Focus op de belangrijkste conclusies en aanbevelingen. Schrijf in het Nederlands.',
    color: 'text-blue-400',
    bgColor: 'from-blue-500/10 to-blue-600/5 border-blue-500/30',
  },
  {
    icon: ClipboardList,
    title: 'Notulen maken vanuit transcripties of aantekeningen',
    description:
      'Van ruwe transcriptie of korte aantekeningen naar gestructureerde notulen.',
    tips: [
      'Plak de volledige transcriptie of je aantekeningen en vraag expliciet om "gestructureerde notulen met kopjes".',
      'Vraag om aparte secties: aanwezigen, genomen besluiten, actiepunten (met naam en deadline), open punten.',
      'Geef context: "vergadering project X", "standup team Y" zodat termen en afkortingen beter begrepen worden.',
      'Als er namen in de transcriptie staan, vraag dan om "aanwezigen" als apart kopje bovenaan.',
    ],
    examplePrompt:
      'Maak van onderstaande transcriptie/aantekeningen formele notulen. Gebruik de structuur: Aanwezigen, Besproken punten, Genomen besluiten, Actiepunten (met verantwoordelijke en deadline), Open punten. Houd de toon professioneel en neutraal.',
    color: 'text-emerald-400',
    bgColor: 'from-emerald-500/10 to-emerald-600/5 border-emerald-500/30',
  },
  {
    icon: ListTodo,
    title: 'Actielijsten maken',
    description:
      'Haal concrete actiepunten uit vergaderingen, e-mails of documenten.',
    tips: [
      'Vraag om "actielijst met verantwoordelijke en deadline" als die in de bron staan, anders "actielijst met prioriteit (hoog/midden/laag)".',
      'Geef aan of je een tabel wilt, een checklist of genummerde lijst.',
      'Je kunt vragen: "welke acties zijn nog open?" als je oude notulen doorgeeft.',
      'Voor een overzicht: "maak één gecombineerde actielijst uit onderstaande drie vergadernotulen".',
    ],
    examplePrompt:
      'Haal uit onderstaande tekst alle actiepunten. Geef per punt: omschrijving, verantwoordelijke (indien genoemd), deadline (indien genoemd), prioriteit (hoog/midden/laag). Presenteer als overzichtelijke lijst.',
    color: 'text-amber-400',
    bgColor: 'from-amber-500/10 to-amber-600/5 border-amber-500/30',
  },
  {
    icon: Mail,
    title: 'E-mails opstellen',
    description:
      'Professionele e-mails opstellen op basis van korte instructies of bulletpoints.',
    tips: [
      'Geef doel en doelgroep: "e-mail naar klant om vertraging te melden", "intern bericht naar team over nieuwe procedure".',
      'Vermeld toon: formeel, vriendelijk, kort en bondig, of juist uitgebreid met context.',
      'Noem wat er in moet: onderwerp, deadline, call-to-action (bijv. "vraag om bevestiging vóór vrijdag").',
      'Geef bulletpoints van wat je wilt zeggen; de AI maakt er een vloeiende e-mail van.',
    ],
    examplePrompt:
      'Schrijf een professionele e-mail op basis van onderstaande punten. Doel: [bijv. uitnodiging voor overleg]. Doelgroep: [bijv. interne collega\'s]. Toon: vriendelijk en helder. Sluit af met een duidelijke call-to-action.',
    color: 'text-purple-400',
    bgColor: 'from-purple-500/10 to-purple-600/5 border-purple-500/30',
  },
  {
    icon: Reply,
    title: 'E-mails beantwoorden',
    description:
      'Snel een passend antwoord formuleren op binnenkomende e-mails.',
    tips: [
      'Plak de ontvangen e-mail en geef aan wat je wilt: "kort bevestigend antwoord", "uitgebreide reactie met voorstel" of "antwoord dat beleefd afzegt".',
      'Vraag om meerdere varianten: "geef 2 opties: één kort, één met meer uitleg".',
      'Specificeer toon: "empathisch vanwege klacht", "formeel naar externe partij", "informeel naar collega".',
      'Als je specifieke punten wilt benoemen: "neem in je antwoord in ieder geval op dat we uiterlijk vrijdag reageren".',
    ],
    examplePrompt:
      'Hieronder staat een e-mail die ik heb ontvangen. Schrijf een passend antwoord. Toon: [formeel/vriendelijk/empathisch]. Ik wil [bijv. bevestigen dat we het oppakken en een termijn noemen]. Maximaal 1 alinea, tenzij meer nodig is.',
    color: 'text-cyan-400',
    bgColor: 'from-cyan-500/10 to-cyan-600/5 border-cyan-500/30',
  },
  {
    icon: Calendar,
    title: 'Agenda voor een vergadering',
    description:
      'Een duidelijke vergaderagenda opstellen op basis van doelen en onderwerpen.',
    tips: [
      'Geef doel van de vergadering: "besluit nemen over X", "statusupdate", "brainstorm".',
      'Noem de onderwerpen en eventueel gewenste volgorde of tijdsindicatie per onderwerp.',
      'Vraag om tijdsindicaties: "agenda met geschatte tijd per punt" voor een realistische planning.',
      'Voor terugkerende vergaderingen: "wekelijkse teamstandup, 30 min, vaste punten: stand van zaken, blokkades, planning".',
    ],
    examplePrompt:
      'Maak een vergaderagenda voor [bijv. wekelijkse projectupdate]. Doel: [bijv. status bespreken en blokkades wegnemen]. Onderwerpen die aan bod moeten: [lijst]. Geef per punt een korte omschrijving en een indicatie van de tijd (bijv. 10 min). Voeg toe: opening, afsluiting en eventueel actiepunten vorige keer.',
    color: 'text-rose-400',
    bgColor: 'from-rose-500/10 to-rose-600/5 border-rose-500/30',
  },
]

const beginnerBasics = [
  'Wees specifiek: hoe lang moet het worden, welke toon (formeel/informeel), voor wie is het bedoeld?',
  'Geef context: "vergadering met klant", "interne memo", "e-mail naar leverancier" helpt de AI de juiste stijl te kiezen.',
  'Vraag om aanpassingen: "korter", "formeler", "met meer voorbeelden" kan gewoon in een vervolgbericht.',
  'Deel de bron: plak de tekst waar de AI op moet reageren direct in de chat; dan kan de AI er precies op inspelen.',
  'Eén taak per prompt werkt het beste: eerst samenvatten, daarna in een nieuwe prompt "maak hier 5 bulletpoints van" als je dat ook wilt.',
]

const advancedPrinciples = [
  {
    title: 'Rol en expertise',
    text: 'Geef de AI een rol: "Je bent een ervaren projectleider" of "Schrijf als HR-adviseur". De output wordt dan consistenter en professioneler.',
  },
  {
    title: 'Output-formaat',
    text: 'Vraag expliciet om Markdown, een tabel, genummerde lijst of zelfs JSON als je de output wilt hergebruiken in een systeem.',
  },
  {
    title: 'Stap voor stap',
    text: 'Bij complexe taken: "Eerst analyseer de tekst, daarna trek conclusies, tot slot geef aanbevelingen." Zo voorkom je dat de AI stappen overslaat.',
  },
  {
    title: 'Few-shot: geef voorbeelden',
    text: 'Toon 1–2 voorbeelden van de gewenste stijl of structuur. Bijv. "Gebruik hetzelfde format als dit voorbeeld: [plak voorbeeld]".',
  },
  {
    title: 'Beperkingen en uitsluitingen',
    text: 'Zeg wat niet mag: "Geen jargon", "maximaal 100 woorden per punt", "geen aanhef of afsluiting in de e-mail".',
  },
  {
    title: 'Itereer in dezelfde chat',
    text: 'Bouw verder op het vorige antwoord: "Maak van punt 3 een aparte paragraaf" of "Voeg een samenvatting van twee zinnen toe bovenaan".',
  },
]

const advancedExamples: {
  title: string
  description: string
  prompt: string
  icon: typeof Brain
}[] = [
  {
    title: 'Samenvatting met rol en format',
    description: 'Gebruik een rol en vraag om een vast format voor herhaalbare rapportages.',
    icon: FileText,
    prompt:
      'Je bent een senior beleidsadviseur. Vat onderstaande tekst samen volgens dit format: (1) Kernboodschap in één zin, (2) Belangrijkste feiten in 3 bulletpoints, (3) Aanbevelingen genummerd. Maximaal 200 woorden totaal. Geen inleiding of slotzin.',
  },
  {
    title: 'Notulen met actie-extractie',
    description: 'Laat de AI eerst notulen maken en daarna gestructureerd de acties eruit halen.',
    icon: ClipboardList,
    prompt:
      'Stap 1: Maak van onderstaande transcriptie formele notulen met kopjes. Stap 2: Extraheer alle actiepunten in een aparte tabel met kolommen: Actie, Verantwoordelijke, Deadline, Prioriteit (H/M/L). Als verantwoordelijke of deadline niet genoemd zijn, zet "n.t.b.". Output in Markdown.',
  },
  {
    title: 'E-mail met meerdere varianten',
    description: 'Vraag om varianten voor verschillende scenario\'s of lengtes.',
    icon: Mail,
    prompt:
      'Schrijf drie versies van een e-mail naar [doelgroep] over [onderwerp]: (A) ultrakort (2–3 zinnen), (B) standaard met alle punten, (C) uitgebreid met toelichting en voorbeeld. Toon: professioneel en vriendelijk. Geef elke versie een korte onderwerpregel.',
  },
  {
    title: 'Agenda met tijdsblokken',
    description: 'Vraag om een agenda die direct in je kalender past.',
    icon: Calendar,
    prompt:
      'Maak een vergaderagenda voor een overleg van 60 minuten. Onderwerpen: [lijst]. Geef per onderdeel: starttijd, eindtijd, onderwerp, doel van het onderdeel (bijv. besluit, discussie, update). Reserveer 5 min voor opening en 5 min voor afsluiting. Output als tabel.',
  },
]

const advancedExtraCategories: {
  icon: typeof Brain
  title: string
  description: string
  tips: string[]
  examplePrompt: string
  color: string
  bgColor: string
}[] = [
  {
    icon: Brain,
    title: 'Brainstormen en ideeën genereren',
    description: 'Gebruik AI om opties te verkennen zonder dat het meteen de "juiste" oplossing hoeft te zijn.',
    tips: [
      'Vraag expliciet om "minstens 10 ideeën" of "zowel voor de hand liggende als out-of-the-box opties".',
      'Geef kaders: "binnen budget X", "voor doelgroep Y", "binnen 2 weken uitvoerbaar".',
      'Vraag om voor- en nadelen per optie: "Geef bij elk idee 2 voordelen en 2 risico\'s".',
      'Combineer met een rol: "Je bent een creatief strateeg; bedenk campagnes die opvallen."',
    ],
    examplePrompt:
      'Brainstorm over [onderwerp]. Geef 8 verschillende invalshoeken. Per idee: korte omschrijving, waarom het kan werken, grootste uitdaging. Mix van pragmatische en creatieve opties. Schrijf in het Nederlands.',
    color: 'text-violet-400',
    bgColor: 'from-violet-500/10 to-violet-600/5 border-violet-500/30',
  },
  {
    icon: Presentation,
    title: 'Presentatie-outline of pitch',
    description: 'Van inhoud naar een logische volgorde voor slides of een korte pitch.',
    tips: [
      'Geef de boodschap en doelgroep: "wij willen dat ze X begrijpen en daarna actie Y nemen".',
      'Vraag om "maximaal 5 slides" of "pitch van 2 minuten" om gefocust te blijven.',
      'Laat de AI per slide/sectie aangeven: titel, kernboodschap, eventueel voorbeeld of cijfer.',
      'Voor een pitch: "schrijf de letterlijke tekst die ik kan uitspreken in 90 seconden".',
    ],
    examplePrompt:
      'Maak een presentatie-outline voor [onderwerp]. Doel: [bijv. goedkeuring voor plan]. Doelgroep: [bijv. management]. Maximaal 6 slides. Geef per slide: titel, kernboodschap in één zin, en een suggestie voor visueel (grafiek, quote, voorbeeld).',
    color: 'text-orange-400',
    bgColor: 'from-orange-500/10 to-orange-600/5 border-orange-500/30',
  },
  {
    icon: PenLine,
    title: 'Teksten herschrijven of verbeteren',
    description: 'Laat bestaande teksten aanscherpen, korter maken of in een andere stijl herschrijven.',
    tips: [
      'Geef de gewenste richting: "korter en krachtiger", "formeler", "geschikt voor sociale media".',
      'Vraag om "bewerk voorstel" in plaats van direct herschrijven: "welke zinnen zijn redundant?".',
      'Combineer met doelgroep: "herschrijf zodat een leek het begrijpt" of "maak het geschikt voor een offerte".',
      'Vraag om alleen verbeteringen: "verbeter spelling en grammatica, behoud mijn stijl en structuur".',
    ],
    examplePrompt:
      'Herschrijf onderstaande tekst. Doel: [korter/formeler/levendiger]. Doelgroep: [bijv. klanten]. Behoud de kernboodschap. Geef daarna in 2 zinnen aan wat je hebt aangepast.',
    color: 'text-teal-400',
    bgColor: 'from-teal-500/10 to-teal-600/5 border-teal-500/30',
  },
]

function TipCard({
  category,
  id,
}: {
  category: TipCategory
  id: string
}) {
  const Icon = category.icon
  return (
    <article
      id={id}
      className={`rounded-2xl border bg-gradient-to-br ${category.bgColor} dark:bg-slate-800/50 p-6 md:p-8 shadow-lg scroll-mt-28`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/80 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
          <Icon className={`w-6 h-6 ${category.color}`} />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            {category.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            {category.description}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide mb-2">
          Tips
        </h4>
        <ul className="space-y-2 mb-6">
          {category.tips.map((tip, i) => (
            <li
              key={i}
              className="flex gap-2 text-gray-700 dark:text-gray-200"
            >
              <Sparkles className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide mb-2">
          Voorbeeldprompt
        </h4>
        <div className="bg-gray-900/50 dark:bg-slate-900 rounded-xl p-4 font-mono text-sm text-gray-100 border border-gray-700 dark:border-slate-600">
          {category.examplePrompt}
        </div>
      </div>
    </article>
  )
}

export default function PromptTipsPage() {
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
                <Lightbulb className="w-5 h-5" />
                Beginners & gevorderden
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Prompt tips
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Zo haal je meer uit AI: van eenvoudige instructies tot geavanceerde technieken voor samenvatten, notulen, e-mails, agenda&apos;s en meer.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-blue-50 leading-relaxed">
                Een goede <span className="font-semibold text-white">prompt</span> is de instructie die je aan een AI geeft. Hoe duidelijker je bent over wat je wilt, hoe beter het resultaat. Op deze pagina vind je tips voor <span className="font-semibold text-white">beginners</span> (basisprincipes en eenvoudige voorbeelden) en voor <span className="font-semibold text-white">gevorderden</span> (rol, format, meerstaps-prompts en extra toepassingen).
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
            <nav className="grid sm:grid-cols-2 gap-4">
              <a
                href="#beginners"
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <GraduationCap className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <div className="text-left">
                  <span className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    Voor beginners
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Basisprincipes en taak-voorbeelden
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 ml-auto flex-shrink-0" />
              </a>
              <a
                href="#gevorderden"
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <Zap className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <div className="text-left">
                  <span className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    Voor gevorderden
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Geavanceerde technieken en extra taken
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 ml-auto flex-shrink-0" />
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* ========== BEGINNERS ========== */}
      <section
        id="beginners"
        className="section-padding bg-gray-50 dark:bg-slate-800 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Voor beginners
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Start hier: basisprincipes en concrete voorbeelden per taak
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                De basis: vijf principes die bij bijna elke prompt helpen
              </h3>
              <ul className="space-y-3">
                {beginnerBasics.map((tip, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-200">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Per taak: wat te vragen en een voorbeeldprompt
            </h3>
            <div className="space-y-10">
              {beginnerCategories.map((category, index) => (
                <TipCard
                  key={index}
                  category={category}
                  id={`beginners-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== GEVORDERDEN ========== */}
      <section
        id="gevorderden"
        className="section-padding bg-white dark:bg-slate-700 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Voor gevorderden
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Rol, format, meerstaps-prompts en extra toepassingen
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Geavanceerde principes
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Als je de basis onder de knie hebt, kun je deze technieken toepassen voor nog betere en herbruikbare resultaten.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {advancedPrinciples.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Gevorderde voorbeeldprompts (zelfde taken, sterker)
            </h3>
            <div className="space-y-8 mb-14">
              {advancedExamples.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-primary-500" />
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {item.description}
                    </p>
                    <div className="bg-gray-900/50 dark:bg-slate-900 rounded-xl p-4 font-mono text-sm text-gray-100 border border-gray-700 dark:border-slate-600">
                      {item.prompt}
                    </div>
                  </div>
                )
              })}
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Extra toepassingen voor gevorderden
            </h3>
            <div className="space-y-10">
              {advancedExtraCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <article
                    key={index}
                    className={`rounded-2xl border bg-gradient-to-br ${category.bgColor} dark:bg-slate-800/50 p-6 md:p-8 shadow-lg`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/80 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {category.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {category.tips.map((tip, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-gray-700 dark:text-gray-200 text-sm"
                        >
                          <Sparkles className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-900/50 dark:bg-slate-900 rounded-xl p-4 font-mono text-sm text-gray-100 border border-gray-700 dark:border-slate-600">
                      {category.examplePrompt}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Wil je AI inzetten op organisatieniveau?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Wij bouwen AI-agents en applicaties die 24/7 voor uw organisatie werken. Van notulen tot klantcommunicatie: wij helpen u op weg.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Neem contact op</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
