import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden - AI-Group',
  description: 'Algemene voorwaarden van AI-Group. Lees de voorwaarden voor het gebruik van onze diensten.',
}

export default function TermsPage() {
  const data = getSiteData()

  return (
    <div className="pt-16">
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={20} />
              <span>Terug naar home</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Algemene Voorwaarden
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  1. Toepasselijkheid
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Deze algemene voorwaarden zijn van toepassing op alle diensten en producten die door AI-Group 
                  worden aangeboden. Door gebruik te maken van onze diensten, gaat u akkoord met deze voorwaarden.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Diensten
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group biedt AI-gedreven oplossingen en diensten, waaronder maar niet beperkt tot:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>AI-platform ontwikkeling en implementatie</li>
                  <li>Workflow automatisering</li>
                  <li>Sector-specifieke AI-applicaties</li>
                  <li>Consultancy en adviesdiensten</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  3. Levering en Termijnen
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group streeft ernaar om diensten te leveren binnen de overeengekomen termijnen. 
                  Specifieke termijnen worden vastgelegd in individuele overeenkomsten. Wij garanderen:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>Proof of Concept binnen 48 uur</li>
                  <li>MVP binnen 72 uur</li>
                  <li>Livegang versie 1.0 binnen 4 weken</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  4. Betaling
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Betalingsvoorwaarden worden vastgelegd in individuele overeenkomsten. Facturen dienen 
                  binnen de overeengekomen termijn te worden voldaan. Bij late betaling kunnen wettelijke 
                  rente en incassokosten in rekening worden gebracht.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Intellectueel Eigendom
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Alle intellectuele eigendomsrechten op door AI-Group ontwikkelde oplossingen blijven 
                  eigendom van AI-Group, tenzij anders overeengekomen in een schriftelijke overeenkomst. 
                  De klant verkrijgt gebruiksrechten zoals overeengekomen.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  6. Aansprakelijkheid
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst, 
                  tenzij sprake is van opzet of bewuste roekeloosheid. De totale aansprakelijkheid is 
                  beperkt tot het bedrag dat de klant in het betreffende jaar heeft betaald voor de dienst.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  7. Gegevensbescherming
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group handelt in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG). 
                  Voor meer informatie over hoe wij omgaan met gegevens, verwijzen wij naar ons 
                  <Link href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline"> privacybeleid</Link>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  8. Wijzigingen
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group behoudt zich het recht voor om deze algemene voorwaarden te wijzigen. 
                  Wijzigingen worden gepubliceerd op deze pagina en treden in werking na publicatie.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  9. Toepasselijk Recht
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Op deze algemene voorwaarden is Nederlands recht van toepassing. Geschillen zullen 
                  worden voorgelegd aan de bevoegde rechter in Nederland.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  10. Contact
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen:
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>E-mail:</strong> <a href={`mailto:${data.contact.email}`} className="text-primary-600 dark:text-primary-400 hover:underline">{data.contact.email}</a><br />
                    <strong>Telefoon:</strong> <a href={`tel:${data.contact.phone}`} className="text-primary-600 dark:text-primary-400 hover:underline">{data.contact.phone}</a><br />
                    <strong>Adres:</strong> {data.contact.address}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

