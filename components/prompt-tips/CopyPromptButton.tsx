'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CopyPromptButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback voor oudere browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="absolute top-2 right-2 text-gray-400 hover:text-white hover:bg-white/10"
      aria-label={copied ? 'Gekopieerd' : 'Kopieer prompt'}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-1" />
          Gekopieerd!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-1" />
          Kopieer prompt
        </>
      )}
    </Button>
  )
}
