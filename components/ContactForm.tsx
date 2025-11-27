'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  organization: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Bezig met verzenden...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.' 
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          organization: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error(result.error || 'Er is een fout opgetreden')
      }
      
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus({ 
        type: 'error', 
        message: 'Er is een fout opgetreden. Probeer het later opnieuw of neem direct contact op via info@ai-group.nl' 
      })
    }
  }

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Stuur een bericht
      </h2>
      
      {status.type !== 'idle' && (
        <div className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
          status.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : status.type === 'error'
            ? 'bg-red-50 border border-red-200 text-red-800'
            : 'bg-blue-50 border border-blue-200 text-blue-800'
        }`}>
          {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
          {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
          {status.type === 'loading' && (
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          )}
          <span className="text-sm font-medium">{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-lg font-bold text-gray-700 dark:text-gray-300 mb-3">
              Naam *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg"
              placeholder="Uw naam"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-bold text-gray-700 dark:text-gray-300 mb-3">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg"
              placeholder="uw@email.nl"
            />
          </div>
        </div>

        <div>
          <label htmlFor="organization" className="block text-lg font-bold text-gray-700 dark:text-gray-300 mb-3">
            Organisatie
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg"
            placeholder="Uw organisatie"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-lg font-bold text-gray-700 dark:text-gray-300 mb-3">
            Onderwerp
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg"
          >
            <option value="">Selecteer onderwerp</option>
            <option value="demo">Demo aanvragen</option>
            <option value="exploration">Verkenning plannen</option>
            <option value="safety">AI Veiligheidsplatform</option>
            <option value="workflow">Workflow Automation</option>
            <option value="inspection">AI Analyse</option>
            <option value="monitoring">AI Monitoring</option>
            <option value="platform">AI Platform</option>
            <option value="other">Anders</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-bold text-gray-700 dark:text-gray-300 mb-3">
            Bericht *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg"
            placeholder="Vertel ons over uw uitdagingen en hoe we kunnen helpen..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full btn-primary inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status.type === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Bezig met verzenden...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Verstuur bericht</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}
