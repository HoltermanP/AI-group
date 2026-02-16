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
  MessageCircle,
  Code,
  Share2,
  Table,
  HelpCircle,
  Shield,
  BookOpen,
  XCircle,
  ExternalLink,
  RotateCcw,
} from 'lucide-react'
import { PromptBlock } from '@/components/prompt-tips/PromptBlock'

export const metadata: Metadata = {
  title: 'Prompt tips - AI-Group',
  description:
    'Uitgebreide prompt-tips voor beginners en gevorderden: GPT vs. Copilot, eerste stappen, samenvatten, notulen, e-mails, code, vertalen, FAQ, privacy en starter prompts.',
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
  {
    icon: MessageCircle,
    title: 'Vertalen en taal',
    description:
      'Teksten vertalen of herformuleren in een andere stijl of eenvoudiger taal.',
    tips: [
      'Geef doeltaal en register: "vertaal naar Engels, formeel" of "herformuleer in eenvoudig Nederlands voor laaggeletterden".',
      'Vraag om "alleen vertalen, geen toelichting" of juist "vertaal en licht culturele verschillen toe".',
      'Voor termen: "behoud vakjargon in het Nederlands" of "gebruik de standaardvertaling voor [domein]".',
      'Combineer met lengte: "vertaal in maximaal 200 woorden" of "korte samenvatting in het Engels".',
    ],
    examplePrompt:
      'Vertaal onderstaande tekst naar [taal]. Toon: [formeel/informeel]. Behoud vakjargon waar van toepassing. Geef alleen de vertaling, geen toelichting.',
    color: 'text-indigo-400',
    bgColor: 'from-indigo-500/10 to-indigo-600/5 border-indigo-500/30',
  },
  {
    icon: Share2,
    title: 'Social media en korte teksten',
    description:
      'Posts, koppen, meta-beschrijvingen en call-to-actions voor online kanalen.',
    tips: [
      'Specificeer kanaal en lengte: "LinkedIn-post, max. 150 woorden", "meta description 155 tekens", "tweet max. 280 tekens".',
      'Geef doelgroep en doel: "B2B-ondernemers, doel is leads genereren" of "interne communicatie, informeren".',
      'Vraag om meerdere varianten: "3 verschillende koppen" of "A/B-varianten met andere tone of voice".',
      'Noem hashtags of geen: "inclusief 3 relevante hashtags" of "zonder hashtags".',
    ],
    examplePrompt:
      'Schrijf een [LinkedIn/Facebook/Instagram]-post over [onderwerp]. Doelgroep: [bijv. MKB]. Maximaal [X] woorden. Toon: [professioneel/vriendelijk/urgent]. Sluit af met een duidelijke call-to-action.',
    color: 'text-pink-400',
    bgColor: 'from-pink-500/10 to-pink-600/5 border-pink-500/30',
  },
  {
    icon: Code,
    title: 'Code: uitleg, schrijven en refactoren',
    description:
      'Code laten uitleggen, genereren of verbeteren — in ChatGPT of in Copilot in je editor.',
    tips: [
      'In de chat (GPT/Copilot): "Leg deze code uit in gewone taal" of "Schrijf een functie in Python die X doet, met korte comments".',
      'In de editor (Copilot): typ een comment zoals "// functie die alle dubbele regels uit de array verwijdert" of gebruik @file om context te geven.',
      'Vraag om stappen: "Refactor onderstaande code voor leesbaarheid; behoud exact hetzelfde gedrag. Licht wijzigingen toe."',
      'Voor tests: "Schrijf unit tests voor onderstaande functie, gebruik [framework]".',
    ],
    examplePrompt:
      '[In chat:] Leg onderstaande code uit alsof ik geen programmeerervaring heb. Noem het doel, de belangrijkste stappen en eventuele valkuilen. [Of:] Schrijf een functie in [taal] die [beschrijving]. Inclusief korte documentatie.',
    color: 'text-slate-400',
    bgColor: 'from-slate-500/10 to-slate-600/5 border-slate-500/30',
  },
  {
    icon: Table,
    title: 'Data en cijfers samenvatten',
    description:
      'Tabellen, rapporten en cijfers tot kernpunten of conclusies terugbrengen.',
    tips: [
      'Plak de tabel of cijfers en vraag expliciet: "vat samen in 5 bulletpoints" of "trek 3 conclusies uit onderstaande data".',
      'Geef focus: "focus op trends", "vergelijk Q1 en Q2", "welke afdeling presteert het beste?".',
      'Vraag om format: "presenteer als genummerde lijst", "maak een korte alinea voor management".',
      'Combineer met aanbeveling: "conclusies + één concrete aanbeveling voor vervolgstap".',
    ],
    examplePrompt:
      'Uit onderstaande tabel/cijfers: trek de belangrijkste conclusies in maximaal 5 bulletpoints. Focus op [bijv. trends/afwijkingen]. Schrijf voor een lezer die de bron niet heeft gezien.',
    color: 'text-lime-400',
    bgColor: 'from-lime-500/10 to-lime-600/5 border-lime-500/30',
  },
  {
    icon: HelpCircle,
    title: 'Vragen beantwoorden uit documenten',
    description:
      'Laat de AI specifieke vragen beantwoorden op basis van een geplakte tekst.',
    tips: [
      'Plak de volledige brontekst en stel één vraag per keer: "Beantwoord op basis van onderstaande tekst: [vraag]".',
      'Vraag om bronverwijzing: "citeer de zin of alinea waarop je antwoord baseert".',
      'Voor meerdere vragen: "Beantwoord de volgende vragen alleen op basis van de tekst. Geef per vraag het antwoord en de relevante passage."',
      'Als het antwoord niet in de tekst staat: "Als het er niet in staat, zeg dat expliciet."',
    ],
    examplePrompt:
      'Op basis van onderstaande tekst: beantwoord de vraag "[vraag]". Citeer de zin(nen) waarop je je antwoord baseert. Als het antwoord niet in de tekst staat, zeg dat duidelijk.',
    color: 'text-sky-400',
    bgColor: 'from-sky-500/10 to-sky-600/5 border-sky-500/30',
  },
  {
    icon: ListOrdered,
    title: 'Structuur aanbrengen in chaos',
    description:
      'Van losse notities of rommelige tekst naar kopjes, lijsten, tabellen of FAQ.',
    tips: [
      'Geef de gewenste structuur: "maak kopjes en subkopjes", "zet in een genummerde lijst", "maak een tabel met kolom A en B".',
      'Voor FAQ: "Maak uit onderstaande tekst een FAQ. Maximaal 8 vragen met antwoord. Houd antwoorden kort."',
      'Vraag om logische volgorde: "zet in volgorde van belangrijkheid" of "chronologisch".',
      'Combineer met doel: "structuur geschikt voor een one-pager" of "voor een presentatie met 5 slides".',
    ],
    examplePrompt:
      'Breng structuur aan in onderstaande tekst. Gebruik: [bijv. kopjes en bulletpoints / tabel met kolommen X en Y / FAQ met max. 6 vragen]. Houd dezelfde informatie, alleen helder geordend.',
    color: 'text-fuchsia-400',
    bgColor: 'from-fuchsia-500/10 to-fuchsia-600/5 border-fuchsia-500/30',
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

const gptVsCopilot = {
  intro:
    'ChatGPT (en vergelijkbare chatbots) en Copilot (in Word, Outlook, Teams, VS Code, GitHub) zijn allemaal AI-tools, maar je gebruikt ze anders. Hier een korte vergelijking.',
  whenGpt: [
    'Vrije teksten: samenvattingen, e-mails, notulen, ideeën, vertalingen.',
    'Langere, gestructureerde prompts met rol, format en context.',
    'Conversatie: meerdere rondes om een antwoord te verfijnen.',
    'Als je geen specifieke app gebruikt: gewoon in de browser.',
  ],
  whenCopilot: [
    'In je document (Word), e-mail (Outlook) of code-editor: direct in context werken.',
    'Korte instructies of @-mentions: "@document Samenvat deze brief", "@file leg deze functie uit".',
    'Code: inline suggesties accepteren of in Copilot Chat vragen over je codebase.',
    'Sneller voor taken die in dezelfde omgeving blijven (e-mail schrijven in Outlook, code in VS Code).',
  ],
  copilotInPractice: [
    { title: 'In Word/Outlook', example: 'Selecteer tekst → Copilot → "Maak korter" of "Vat samen in 3 bullets".' },
    { title: 'In VS Code / Cursor', example: 'Open Copilot Chat → "@workspace Leg uit hoe inloggen werkt" of typ in code: // functie die X doet.' },
    { title: 'GitHub Copilot', example: 'Typ een comment of functienaam; Copilot stelt code voor. Tab accepteren, of in chat vragen: "Schrijf unit tests voor deze functie."' },
  ],
}

const firstSteps = [
  'Open ChatGPT, Copilot of een andere AI-chat (bijv. in Teams of je editor).',
  'Typ in één zin wat je wilt: "Vat onderstaande tekst samen in 5 bulletpoints" of "Schrijf een korte e-mail om een vergadering af te zeggen."',
  'Plak indien nodig de brontekst in hetzelfde bericht.',
  'Bekijk het antwoord. Vraag een vervolgbericht als je iets wilt aanpassen: "korter", "formeler", "voeg een voorbeeld toe".',
]

const commonMistakes = [
  { wrong: 'Te vaag ("maak iets", "schrijf iets")', right: 'Concreet: "schrijf een e-mail naar de klant om vertraging te melden, toon empathie, max. 4 zinnen".' },
  { wrong: 'Geen context', right: 'Geef doelgroep, doel en toon: "interne memo voor het team", "formeel naar leverancier".' },
  { wrong: 'Te veel in één prompt', right: 'Eén taak per prompt. Eerst samenvatten, daarna in een nieuwe prompt "maak hier 5 bullets van".' },
  { wrong: 'Verwachten dat het in één keer perfect is', right: 'Itereer: "korter", "zonder punt 3", "formeler" — dat hoort erbij.' },
]

const whenWrong = [
  {
    title: 'Aanpassen met een vervolgprompt',
    text: 'Stuur een kort bericht: "Maak dit korter", "Formeler", "Zonder de laatste alinea", "Voeg een call-to-action toe". De AI past het vorige antwoord aan.',
  },
  {
    title: 'Alternatief vragen',
    text: 'Vraag om een tweede versie: "Geef een alternatief dat meer op [X] focust" of "Schrijf het nog eens, maar dan voor [andere doelgroep]".',
  },
  {
    title: 'Taak splitsen',
    text: 'Was de prompt te complex? Splits: "Eerst alleen de conclusies", daarna "Maak hier een e-mail van voor de klant".',
  },
  {
    title: 'Regenerate vs. verfijnen',
    text: 'Regenerate (opnieuw genereren) geeft een nieuw antwoord. Verfijnen (vervolgprompt) houdt context. Gebruik verfijnen als het bijna goed is.',
  },
]

const privacyTips = [
  'Plak geen persoonsgegevens (BSN, medische gegevens, wachtwoorden) tenzij je beleid het toestaat.',
  'Vertrouwelijke contracten of strategiedocumenten: check het beleid van je werkgever over ChatGPT/Copilot.',
  'Wees je ervan bewust dat input soms voor verbetering van modellen wordt gebruikt (zie voorwaarden van de leverancier). Bij zakelijke varianten is dit vaak uitgeschakeld.',
]

const faqItems = [
  { q: 'Hoe lang mag mijn prompt zijn?', a: 'De meeste tools hebben een ruime limiet (duizenden woorden). Houd je prompt zelf wel leesbaar: duidelijke instructie + eventueel de brontekst. Te lang kan soms de focus verminderen.' },
  { q: 'Kan ik bestanden uploaden?', a: 'ChatGPT en Copilot ondersteunen in veel omgevingen het uploaden van bestanden (PDF, Word). In de editor gaat het vaak om @file of @workspace om code te betrekken. Check de help van je specifieke tool.' },
  { q: 'Wat is het verschil tussen ChatGPT en Copilot?', a: 'ChatGPT is een standalone chatbot (tekst in, tekst uit). Copilot zit in Microsoft-apps (Word, Outlook, Teams) en in code-editors (VS Code, GitHub). Bij Copilot werk je in context: in je document of je code.' },
  { q: 'Moet ik in het Engels prompten?', a: 'Nee. Nederlands werkt goed. Voor zeer specialistische of technische taken kan Engels soms iets betere resultaten geven; voor dagelijks gebruik is Nederlands prima.' },
  { q: 'Hoe geef ik feedback als het fout gaat?', a: 'Gewoon in de chat: "Punt 2 klopt niet", "Dit was niet wat ik bedoelde, ik wil X". Of vraag expliciet: "Leg uit waarom je Y zei" en stuur dan een correctie.' },
]

const starterPrompts = [
  'Vat onderstaande tekst samen in maximaal 5 bulletpoints. Focus op conclusies en aanbevelingen.',
  'Maak van onderstaande aantekeningen formele notulen met kopjes: Aanwezigen, Besproken punten, Besluiten, Actiepunten.',
  'Schrijf een professionele e-mail op basis van onderstaande punten. Toon: vriendelijk en helder. Sluit af met een duidelijke call-to-action.',
  'Haal uit onderstaande tekst alle actiepunten. Geef per punt: omschrijving, verantwoordelijke, deadline (indien genoemd).',
  'Leg onderstaande code uit in gewone taal. Noem het doel en de belangrijkste stappen.',
]

const officialLinks = [
  { name: 'OpenAI – Prompt-engineering tips', url: 'https://platform.openai.com/docs/guides/prompt-engineering' },
  { name: 'Microsoft – Copilot in Word/Outlook', url: 'https://support.microsoft.com/nl-nl/copilot' },
  { name: 'GitHub – Copilot documentatie', url: 'https://docs.github.com/en/copilot' },
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
        <PromptBlock text={category.examplePrompt} />
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
            <nav className="space-y-3">
              <a
                href="#gpt-vs-copilot"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">GPT vs. Copilot</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a
                href="#beginners"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <GraduationCap className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Voor beginners</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <div className="pl-8 space-y-1 text-sm">
                <a href="#wat-is-een-prompt" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Wat is een prompt?</a>
                <a href="#eerste-stappen" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Eerste stappen</a>
                <a href="#veelgemaakte-fouten" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Veelgemaakte fouten</a>
                <a href="#beginners-basis" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Basisprincipes</a>
                <a href="#beginners-taken" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Per taak</a>
              </div>
              <a
                href="#gevorderden"
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group"
              >
                <Zap className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Voor gevorderden</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a href="#wat-als-het-misgaat" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group">
                <RotateCcw className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Wat als het misgaat?</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a href="#privacy-veiligheid" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group">
                <Shield className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Privacy &amp; veiligheid</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a href="#faq" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group">
                <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Veelgestelde vragen</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a href="#cheat-sheet" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group">
                <Lightbulb className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Starter prompts</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
              <a href="#meer-lezen" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all group">
                <BookOpen className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Meer lezen</span>
                <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* ========== GPT VS COPILOT ========== */}
      <section
        id="gpt-vs-copilot"
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
                  GPT vs. Copilot
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Wanneer gebruik je wat?
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-8">
              {gptVsCopilot.intro}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  Wanneer ChatGPT (of vergelijkbare chatbot)
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                  {gptVsCopilot.whenGpt.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <Sparkles className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  Wanneer Copilot
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                  {gptVsCopilot.whenCopilot.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Copilot in de praktijk
            </h3>
            <div className="space-y-4">
              {gptVsCopilot.copilotInPractice.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BEGINNERS ========== */}
      <section
        id="beginners"
        className="section-padding bg-white dark:bg-slate-700 scroll-mt-24"
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

            <div id="wat-is-een-prompt" className="mb-10 scroll-mt-24">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Wat is een prompt?
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Een <strong className="text-gray-900 dark:text-white">prompt</strong> is de instructie die je aan een AI geeft. Het kan één zin zijn (&quot;Vat dit samen in 5 bullets&quot;) of een langere opdracht met context, doelgroep en gewenst format. Hoe duidelijker je bent over wat je wilt, hoe beter het resultaat.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/20">
                  <p className="text-xs font-semibold text-red-700 dark:text-red-300 uppercase mb-1 flex items-center gap-1">
                    <XCircle className="w-3 h-3" /> Slecht voorbeeld
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-200">&quot;Maak iets van deze tekst.&quot;</p>
                </div>
                <div className="p-4 rounded-xl border border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20">
                  <p className="text-xs font-semibold text-green-700 dark:text-green-300 uppercase mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Goed voorbeeld
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-200">&quot;Vat onderstaande tekst samen in maximaal 5 bulletpoints. Focus op conclusies. Schrijf in het Nederlands.&quot;</p>
                </div>
              </div>
            </div>

            <div id="eerste-stappen" className="mb-10 scroll-mt-24">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Eerste stappen
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-200">
                {firstSteps.map((step, i) => (
                  <li key={i} className="pl-2">{step}</li>
                ))}
              </ol>
            </div>

            <div id="veelgemaakte-fouten" className="mb-10 scroll-mt-24">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Veelgemaakte fouten
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Vermijd deze valkuilen voor betere resultaten.
              </p>
              <div className="space-y-3">
                {commonMistakes.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600"
                  >
                    <p className="text-sm font-medium text-red-600 dark:text-red-400 mb-1 flex items-center gap-1">
                      <XCircle className="w-4 h-4 flex-shrink-0" /> {item.wrong}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-200 flex items-start gap-1">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      {item.right}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="beginners-basis" className="mb-12 scroll-mt-24">
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

            <h3 id="beginners-taken" className="text-xl font-bold text-gray-900 dark:text-white mb-6 scroll-mt-24">
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
        className="section-padding bg-gray-50 dark:bg-slate-800 scroll-mt-24"
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
                    <PromptBlock text={item.prompt} />
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
                    <PromptBlock text={category.examplePrompt} />
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WAT ALS HET MISGAAT ========== */}
      <section
        id="wat-als-het-misgaat"
        className="section-padding bg-gray-50 dark:bg-slate-800 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Wat als het misgaat?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  De output is niet wat je wilt — zo los je het op
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {whenWrong.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-200">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRIVACY & VEILIGHEID ========== */}
      <section
        id="privacy-veiligheid"
        className="section-padding bg-white dark:bg-slate-700 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Privacy &amp; veiligheid
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Waar op te letten bij het gebruik van AI
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {privacyTips.map((tip, i) => (
                <li
                  key={i}
                  className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600"
                >
                  <Shield className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200">{tip}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Check altijd het beleid van je werkgever over het gebruik van ChatGPT, Copilot of andere AI-tools met bedrijfsgegevens.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section
        id="faq"
        className="section-padding bg-gray-50 dark:bg-slate-800 scroll-mt-24"
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
                  Korte antwoorden op veelgestelde vragen
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-200">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== STARTER PROMPTS / CHEAT SHEET ========== */}
      <section
        id="cheat-sheet"
        className="section-padding bg-white dark:bg-slate-700 scroll-mt-24"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Starter prompts
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Kopieer en plak — vul [ ] in waar nodig
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              Deze prompts kun je direct gebruiken. Klik op &quot;Kopieer prompt&quot; en plak in ChatGPT of Copilot. Vervang eventuele plaatshouders door je eigen tekst.
            </p>
            <div className="space-y-4">
              {starterPrompts.map((prompt, i) => (
                <div key={i} className="rounded-xl border border-gray-200 dark:border-slate-600 overflow-hidden">
                  <PromptBlock text={prompt} />
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
                  Officiële documentatie en tips van leveranciers
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
