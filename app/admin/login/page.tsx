import { Suspense } from 'react'

function LoginForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">🔒</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
          <p className="text-gray-600">AI-Group Beheer</p>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Directe Toegang</h2>
            <p className="text-gray-600 mb-6">Klik op de knop hieronder om direct naar het Command Center te gaan</p>
            
            <a
              href="/admin"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-semibold transition-colors inline-block text-center"
            >
              🚀 Ga naar Command Center
            </a>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Of login met wachtwoord:</h3>
            
            <form action="/api/admin/login" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gebruikersnaam
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  placeholder="patrick"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wachtwoord
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  placeholder="••••••••••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg font-semibold transition-colors"
              >
                🔐 Inloggen met Wachtwoord
              </button>
            </form>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            ← Terug naar website
          </a>
        </div>
      </div>
    </div>
  )
}

export default function AdminLogin() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  )
}