import Link from 'next/link'
import { ArrowRight, GraduationCap, Award, Users, BookOpen } from 'lucide-react'

const pillars = [
  {
    icon: BookOpen,
    title: "Niveaus & programma's",
    text: 'Van AI-basics tot RAG en governance — incompany, groepen 8–12 deelnemers, totaalbedrag per groep en uitgewerkt dagprogramma per training.',
  },
  {
    icon: Users,
    title: 'Trainers uit de praktijk',
    text: 'Docenten die naast trainen AI-oplossingen bouwen — geen losse theorie.',
  },
  {
    icon: Award,
    title: 'Certificaat AI-Group Academy',
    text: 'Officieel certificaat van deelname na succesvolle afronding.',
  },
] as const

export default function AcademySection() {
  return (
    <section
      id="academy"
      className="relative overflow-hidden border-y border-amber-500/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      aria-labelledby="academy-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.1),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="container-custom relative z-10 py-14 md:py-20 lg:py-24">
        {/* Symmetrisch: alles gecentreerd, vaste max-breedte */}
        <div className="mx-auto max-w-4xl text-center px-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">
            Trainingsinstituut
          </p>
          <h2
            id="academy-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]"
          >
            <span className="text-white">AI-Group </span>
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Academy
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed md:text-xl">
            Het trainingslabel van AI-Group: <strong className="text-white">ervaren AI-opleider</strong> met
            programma&apos;s van beginner tot gevorderd. Certificaat na afronding — dezelfde expertise als bij
            onze implementaties, nu voor uw team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-4 max-w-lg sm:max-w-none mx-auto">
            <Link
              href="/trainingen"
              className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <GraduationCap className="h-5 w-5 shrink-0" aria-hidden />
              Bekijk alle trainingen
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
            </Link>
            <Link
              href="/trainingen"
              className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl border-2 border-slate-500 px-8 py-4 text-base font-semibold text-slate-200 transition hover:border-amber-500/60 hover:text-white"
            >
              Programma&apos;s & inschrijven
            </Link>
          </div>
        </div>

        {/* Drie gelijke kolommen — symmetrische raster */}
        <div className="mx-auto mt-14 md:mt-16 max-w-6xl">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 list-none p-0 m-0">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex h-full">
                <div className="flex w-full flex-col rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6 md:p-8 backdrop-blur-sm text-center items-center md:items-stretch">
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-bold text-white text-lg leading-snug">{title}</h3>
                  <p className="mt-3 flex-1 text-sm text-slate-400 leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
