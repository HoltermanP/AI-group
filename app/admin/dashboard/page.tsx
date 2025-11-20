'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Edit3, Save, X, LogOut, Home, Settings } from 'lucide-react'

interface SiteContent {
  hero: {
    title: string
    subtitle: string
  }
  benefits: Array<{
    title: string
    description: string
  }>
  solutions: Array<{
    title: string
    description: string
  }>
  applications: Array<{
    title: string
    description: string
  }>
}

export default function AdminDashboard() {
  const [content, setContent] = useState<SiteContent | null>(null)
  const [editingField, setEditingField] = useState<string | null>(null)
  const [tempValue, setTempValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [currentUser, setCurrentUser] = useState<{name: string, username: string} | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('admin_token')
    if (!token) {
      router.push('/admin/login')
      return
    }

    // Get user info from token
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      setCurrentUser({
        name: payload.name,
        username: payload.username
      })
    } catch (error) {
      console.error('Error parsing token:', error)
      router.push('/admin/login')
      return
    }

    loadContent()
  }, [router])

  const loadContent = async () => {
    try {
      const response = await fetch('/api/admin/content')
      if (response.ok) {
        const data = await response.json()
        setContent(data)
      } else {
        console.error('Failed to load content')
      }
    } catch (error) {
      console.error('Error loading content:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const startEditing = (fieldPath: string, currentValue: string) => {
    setEditingField(fieldPath)
    setTempValue(currentValue)
  }

  const cancelEditing = () => {
    setEditingField(null)
    setTempValue('')
  }

  const saveField = async () => {
    if (!editingField || !content) return

    setIsSaving(true)
    try {
      const response = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
        },
        body: JSON.stringify({
          fieldPath: editingField,
          value: tempValue
        })
      })

      if (response.ok) {
        // Update local content
        const newContent = { ...content }
        const pathParts = editingField.split('.')
        let current: any = newContent
        
        for (let i = 0; i < pathParts.length - 1; i++) {
          current = current[pathParts[i]]
        }
        
        current[pathParts[pathParts.length - 1]] = tempValue
        setContent(newContent)
        setEditingField(null)
        setTempValue('')
      } else {
        alert('Fout bij opslaan')
      }
    } catch (error) {
      console.error('Error saving:', error)
      alert('Fout bij opslaan')
    } finally {
      setIsSaving(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('admin_token')
    router.push('/admin/login')
  }

  const renderEditableField = (fieldPath: string, value: string, multiline = false) => {
    if (editingField === fieldPath) {
      return (
        <div className="space-y-2">
          {multiline ? (
            <textarea
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              rows={3}
            />
          ) : (
            <input
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          )}
          <div className="flex space-x-2">
            <button
              onClick={saveField}
              disabled={isSaving}
              className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              <Save size={14} />
              <span>Opslaan</span>
            </button>
            <button
              onClick={cancelEditing}
              className="flex items-center space-x-1 bg-gray-600 text-white px-3 py-1 rounded text-sm"
            >
              <X size={14} />
              <span>Annuleren</span>
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="group">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {multiline ? (
              <p className="text-gray-700 whitespace-pre-wrap">{value}</p>
            ) : (
              <p className="text-gray-700">{value}</p>
            )}
          </div>
          <button
            onClick={() => startEditing(fieldPath, value)}
            className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 text-gray-500 hover:text-blue-600"
          >
            <Edit3 size={16} />
          </button>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Laden...</p>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Fout bij laden van content</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">AI-Group Admin</h1>
              {currentUser && (
                <span className="text-sm text-gray-600">
                  Welkom, {currentUser.name}!
                </span>
              )}
              <a
                href="/"
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
              >
                <Home size={16} />
                <span>Website</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={logout}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
              >
                <LogOut size={16} />
                <span>Uitloggen</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Hero Sectie</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titel
                </label>
                {renderEditableField('hero.title', content.hero.title)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitel
                </label>
                {renderEditableField('hero.subtitle', content.hero.subtitle, true)}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Voordelen</h2>
            <div className="space-y-4">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="border border-gray-200 rounded p-4">
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Titel {index + 1}
                    </label>
                    {renderEditableField(`benefits.${index}.title`, benefit.title)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Beschrijving {index + 1}
                    </label>
                    {renderEditableField(`benefits.${index}.description`, benefit.description, true)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Oplossingen</h2>
            <div className="space-y-4">
              {content.solutions.map((solution, index) => (
                <div key={index} className="border border-gray-200 rounded p-4">
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Titel {index + 1}
                    </label>
                    {renderEditableField(`solutions.${index}.title`, solution.title)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Beschrijving {index + 1}
                    </label>
                    {renderEditableField(`solutions.${index}.description`, solution.description, true)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Applicaties</h2>
            <div className="space-y-4">
              {content.applications.map((application, index) => (
                <div key={index} className="border border-gray-200 rounded p-4">
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Titel {index + 1}
                    </label>
                    {renderEditableField(`applications.${index}.title`, application.title)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Beschrijving {index + 1}
                    </label>
                    {renderEditableField(`applications.${index}.description`, application.description, true)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
