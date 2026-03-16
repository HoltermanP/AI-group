'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type Props = {
  trainingSlug: string
  trainingTitle: string
}

export default function TrainingSignupForm({ trainingSlug, trainingTitle }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    participants: '8',
    preferredPeriod: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const numParticipants = parseInt(formData.participants, 10)
    if (numParticipants < 8 || numParticipants > 12) {
      setStatus('error')
      setMsg('Aantal deelnemers moet tussen 8 en 12 liggen.')
      return
    }
    setStatus('loading')
    setMsg('Bezig met verzenden…')
    try {
      const res = await fetch('/api/training-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, trainingSlug }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Fout')
      setStatus('success')
      setMsg('Bedankt! We nemen zo snel mogelijk contact op over data, locatie en facturatie.')
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        participants: '8',
        preferredPeriod: '',
        message: '',
      })
    } catch (err) {
      setStatus('error')
      const message = err instanceof Error ? err.message : 'Verzenden mislukt. Mail gerust direct naar info@ai-group.nl met vermelding van deze training.'
      setMsg(message)
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800/80 p-6 md:p-8 shadow-lg">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Inschrijven</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
        Training: <strong className="text-slate-800 dark:text-slate-200">{trainingTitle}</strong>
      </p>
      <p className="text-xs text-amber-800 dark:text-amber-400/95 mb-6 font-medium">
        Na afronding ontvang je een certificaat van deelname (AI-Group).
      </p>

      {status !== 'idle' && (
        <div
          className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
            status === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-900 dark:text-emerald-200'
              : status === 'error'
                ? 'bg-red-50 dark:bg-red-950/40 border border-red-200 text-red-900 dark:text-red-200'
                : 'bg-blue-50 dark:bg-blue-950/40 border border-blue-200 text-blue-900 dark:text-blue-200'
          }`}
        >
          {status === 'success' && <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />}
          {status === 'error' && <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
          {status === 'loading' && (
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0 mt-0.5" />
          )}
          <span className="text-sm font-medium">{msg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Naam *</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 bg-white dark:bg-slate-900"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">E-mail *</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 bg-white dark:bg-slate-900"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Organisatie</label>
            <Input
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="mt-1 bg-white dark:bg-slate-900"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Telefoon</label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 bg-white dark:bg-slate-900"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Aantal deelnemers (8–12) *
            </label>
            <Input
              name="participants"
              type="number"
              min={8}
              max={12}
              value={formData.participants}
              onChange={handleChange}
              required
              className="mt-1 bg-white dark:bg-slate-900"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Voorkeursperiode
            </label>
            <Input
              name="preferredPeriod"
              placeholder="bijv. Q2 2025"
              value={formData.preferredPeriod}
              onChange={handleChange}
              className="mt-1 bg-white dark:bg-slate-900"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Opmerkingen</label>
          <Textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Bijv. incompany, dieetwensen, toegankelijkheid…"
            className="mt-1 bg-white dark:bg-slate-900"
          />
        </div>
        <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto gap-2">
          <Send className="w-4 h-4" />
          Verstuur inschrijving
        </Button>
      </form>
    </div>
  )
}
