import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/admin"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Systeem Instellingen</h1>
                <p className="text-gray-400">Beheer systeemconfiguratie</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Systeem Instellingen</h2>
          <p className="text-gray-400 mb-6">
            Deze functionaliteit is momenteel in ontwikkeling. Hier kunt u in de toekomst 
            systeeminstellingen beheren en configureren.
          </p>
          <div className="bg-gray-900 rounded-lg p-6">
            <p className="text-gray-300">
              Geplande functionaliteiten:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
              <li>Algemene systeeminstellingen</li>
              <li>E-mail configuratie</li>
              <li>Beveiligingsinstellingen</li>
              <li>Backup en herstel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

