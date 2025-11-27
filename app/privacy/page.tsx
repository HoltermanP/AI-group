import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

export const metadata: Metadata = {
  title: 'Privacybeleid - AI-Group',
  description: 'Privacybeleid van AI-Group. Lees hoe wij omgaan met uw persoonlijke gegevens.',
}

export default function PrivacyPage() {
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
              Privacybeleid
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  1. Inleiding
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  AI-Group respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens. 
                  Dit privacybeleid legt uit hoe wij informatie verzamelen, gebruiken en beschermen wanneer u onze 
                  website bezoekt of onze diensten gebruikt.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Gegevens die wij verzamelen
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Wij kunnen de volgende soorten gegevens verzamelen:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>Contactgegevens (naam, e-mailadres, telefoonnummer) wanneer u ons contactformulier invult</li>
                  <li>Technische gegevens (IP-adres, browsertype, apparaatinformatie) voor website-analyse</li>
                  <li>Gebruiksgegevens (pagina's die u bezoekt, tijdstip van bezoek) voor het verbeteren van onze diensten</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  3. Hoe wij uw gegevens gebruiken
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Wij gebruiken uw gegevens voor:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>Het beantwoorden van uw vragen en verzoeken</li>
                  <li>Het verbeteren van onze website en diensten</li>
                  <li>Het verzenden van relevante informatie over onze diensten (met uw toestemming)</li>
                  <li>Het voldoen aan wettelijke verplichtingen</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  4. Gegevensbescherming
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Wij nemen passende technische en organisatorische maatregelen om uw persoonlijke gegevens te 
                  beschermen tegen ongeautoriseerde toegang, verlies of vernietiging. Uw gegevens worden veilig 
                  opgeslagen en alleen gedeeld met derden wanneer dit noodzakelijk is voor het leveren van onze diensten.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Uw rechten
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  U heeft het recht om:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li>Toegang te krijgen tot uw persoonlijke gegevens</li>
                  <li>Uw gegevens te corrigeren of te verwijderen</li>
                  <li>Bezwaar te maken tegen de verwerking van uw gegevens</li>
                  <li>Uw gegevens over te dragen aan een andere dienstverlener</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  6. Cookies
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Onze website gebruikt cookies om uw gebruikerservaring te verbeteren. U kunt cookies uitschakelen 
                  via uw browserinstellingen, maar dit kan de functionaliteit van de website beïnvloeden.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  7. Contact
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Voor vragen over dit privacybeleid of uw gegevens kunt u contact met ons opnemen:
                </p>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 mb-4">
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

