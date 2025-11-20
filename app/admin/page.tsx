export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎛️</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">AI-Group Command Center</h1>
                <p className="text-gray-400">Welkom, Admin!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Online</span>
              </div>
              <a
                href="/admin/login"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Uitloggen
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">🎉 Login Succesvol!</h2>
          <p className="text-xl text-gray-300">Je bent nu ingelogd in het AI-Group Command Center</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Stats Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                <span>📊</span>
                <span>Live Statistics</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-2">👥</div>
                  <p className="text-2xl font-bold text-green-400">1,247</p>
                  <p className="text-sm text-gray-400">Bezoekers vandaag</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-2">📧</div>
                  <p className="text-2xl font-bold text-blue-400">34</p>
                  <p className="text-sm text-gray-400">Contact formulieren</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-2">📅</div>
                  <p className="text-lg font-bold text-purple-400">
                    {new Date().toLocaleDateString('nl-NL')}
                  </p>
                  <p className="text-sm text-gray-400">Laatste login</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-2">✅</div>
                  <p className="text-lg font-bold text-orange-400">Online</p>
                  <p className="text-sm text-gray-400">Systeem status</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-6">🔄 Recente Activiteit</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Nieuw contactformulier ontvangen</p>
                    <p className="text-sm text-gray-400">2 minuten geleden</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Website geoptimaliseerd</p>
                    <p className="text-sm text-gray-400">1 uur geleden</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">Content update gedeployed</p>
                    <p className="text-sm text-gray-400">3 uur geleden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 sticky top-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h2 className="text-xl font-bold">Snelle Acties</h2>
                <p className="text-gray-400">Administratieve tools</p>
              </div>

              <div className="space-y-4">
                <a 
                  href="/admin/content"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span className="text-xl">📝</span>
                  <span>Content Beheer</span>
                </a>

                <a 
                  href="/admin/contacts"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span className="text-xl">📧</span>
                  <span>Contact Beheer</span>
                </a>

                <a 
                  href="/admin/settings"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span className="text-xl">⚙️</span>
                  <span>Systeem Instellingen</span>
                </a>

                <a 
                  href="/"
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span className="text-xl">🌐</span>
                  <span>Website Bekijken</span>
                </a>
              </div>

              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <h3 className="text-sm font-medium text-gray-300 mb-2">🔒 Beveiligingsstatus</h3>
                <p className="text-xs text-gray-400">
                  Alle systemen beveiligd. Admin toegang gemonitord.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}