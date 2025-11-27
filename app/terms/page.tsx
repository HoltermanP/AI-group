import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden - AI-Group',
  description: 'Algemene voorwaarden van AI-Group. Versie 27 november 2025. Lees de voorwaarden voor het gebruik van onze diensten.',
}

export default function TermsPage() {
  const data = getSiteData()

  return (
    <div className="pt-16">
      <section className="section-padding bg-white dark:bg-slate-700">
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
              <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 mb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Titel:</strong> Algemene Voorwaarden AI-Group
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Versie:</strong> 27 november 2025
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Geldt voor:</strong> alle maatwerkoplossingen en standaardapplicaties van AI-Group
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  AI-Group is een handelsnaam van Holterman Interim Management B.V. (KvK 95714987)
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Adres:</strong> Nieuwe Deventerweg 86, 8014 AJ Zwolle
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  1. Toepasselijkheid
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Deze voorwaarden gelden voor alle diensten, producten, applicaties en licenties van AI-Group, voor zowel B2B- als B2C-klanten.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Door gebruik te maken van onze diensten of abonnementen gaat de klant akkoord met deze voorwaarden.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Diensten en Producten
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group levert:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>Maatwerk AI-oplossingen</li>
                  <li>Standaard AI-applicaties onder het AI-Group-merk</li>
                  <li>AI-gestuurde workflows</li>
                  <li>Automatiseringsoplossingen</li>
                  <li>Sector-specifieke AI-tools</li>
                  <li>Consultancy en technische ondersteuning (geen financieel advies)</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  De inhoud van diensten en abonnementen wordt per applicatie of oplossing omschreven.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  3. Licenties & Intellectueel Eigendom
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group blijft eigenaar van alle intellectuele eigendomsrechten, ook bij maatwerk.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  De klant krijgt een niet-exclusieve, niet-overdraagbare licentie op maatwerk en standaardproducten.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Output (bijv. rapporten, gegenereerde data) mag door de klant gebruikt, aangepast of doorverkocht worden.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Trainingsdata, modellen, code en platformcomponenten blijven eigendom van AI-Group.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  4. Levering & Termijnen
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Termijnen zoals Proof of Concept, MVP-oplevering of livegang zijn streeftermijnen, geen garanties.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  De looptijd van de overeenkomst verschilt per product, oplossing of abonnement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Aansprakelijkheid
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group levert op best-effort basis.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group is niet aansprakelijk voor indirecte schade, dataverlies, gevolgschade of winstderving.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  De aansprakelijkheid is maximaal het door de klant betaalde bedrag in de voorafgaande 12 maanden.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Voor financiële applicaties (zoals EasyBoek) geldt een nadrukkelijke disclaimer:
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    AI-Group geeft geen financieel advies en draagt geen verantwoordelijkheid voor financiële beslissingen, aangiftes of boekhoudkundige keuzes van klanten.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  6. Privacy & Gegevensverwerking
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group werkt conform de AVG.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Gegevens worden verwerkt uitsluitend voor het doel waarvoor de klant deze aanlevert.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Data wordt gehost op Europese cloudservers met moderne beveiligingsstandaarden.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Data wordt nooit gedeeld met externe organisaties, tenzij wettelijk verplicht.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  De klant is verantwoordelijk voor rechtmatige aanlevering van persoonsgegevens.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group is verwerker of verwerkingsverantwoordelijke afhankelijk van de specifieke toepassing.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  7. Back-ups & Bewaring
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Back-ups worden uitgevoerd op basis van de mogelijkheden die onze hostingpartner (zoals Vercel) biedt.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Na beëindiging van een abonnement kan de klant 30 dagen data exporteren.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Daarna wordt alle klantdata onomkeerbaar verwijderd.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  8. Proefperiodes
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Proefperiodes kunnen worden aangeboden per applicatie of oplossing.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Voorwaarden van proefperiodes staan bij het betreffende product.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  9. Support, Onderhoud & Updates
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Support, onderhoud en updates zijn afhankelijk van het type applicatie / abonnement.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Support buiten het abonnement wordt op aanvraag geleverd tegen offerte.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group garandeert geen uptime en sluit beschikbaarheidsverplichtingen uit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  10. Overmacht
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group is niet aansprakelijk bij situaties buiten haar invloed, zoals:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>storingen bij hostingproviders</li>
                  <li>stroomstoringen</li>
                  <li>digitale aanvallen</li>
                  <li>oorlog, pandemieën</li>
                  <li>stakingen</li>
                  <li>extreme personeelskrapte</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  In overmacht mag AI-Group diensten opschorten zonder schadevergoeding.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  11. Betaling en Incasso
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Betalingstermijn: 30 dagen.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Wettelijke rente en gebruikelijke incassokosten worden gerekend bij te late betaling.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Abonnementen: betaling vooraf per periode.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  12. Abonnementen, Looptijd en Opzegging
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Abonnementen hebben een looptijd per product en worden stilzwijgend verlengd.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Opzegtermijnen verschillen per applicatie.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Na opzegging blijft toegang 30 dagen beschikbaar voor data-export.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group mag abonnementstarieven jaarlijks redelijk indexeren.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  13. Wijzigingen van Voorwaarden
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group mag voorwaarden wijzigen.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Geldt alleen voor nieuwe abonnementstermijnen.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Bij verlenging moet de klant opnieuw akkoord geven.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  14. Toepasselijk Recht
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Op alle diensten en overeenkomsten is Nederlands recht van toepassing.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  15. Aanvaarding
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Bij het afsluiten van een abonnement moet de klant actief aanvinken dat de voorwaarden zijn gelezen en geaccepteerd.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Voorwaarden zijn altijd beschikbaar via een link op de website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  16. Contact
                </h2>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Holterman Interim Management B.V. – AI-Group</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Nieuwe Deventerweg 86
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    8014 AJ Zwolle
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>E-mail:</strong> <a href="mailto:info@ai-group.nl" className="text-primary-600 dark:text-primary-400 hover:underline">info@ai-group.nl</a>
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

