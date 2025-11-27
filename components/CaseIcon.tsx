'use client'

import { TrendingUp, Shield, FileText, MessageCircle, Sparkles } from 'lucide-react'

interface CaseIconProps {
  slug: string
  sector: string
  className?: string
}

export default function CaseIcon({ slug, sector, className = '' }: CaseIconProps) {
  const iconClass = "w-16 h-16 text-white"
  
  // Render custom SVG icons based on case slug
  if (slug === 'tax-wealth-hub') {
    return (
      <svg viewBox="0 0 100 100" className={iconClass + ' ' + className}>
        <defs>
          <linearGradient id="taxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {/* Chart bars */}
        <rect x="20" y="60" width="12" height="25" fill="url(#taxGradient)" opacity="0.9" rx="2" />
        <rect x="36" y="45" width="12" height="40" fill="url(#taxGradient)" opacity="0.9" rx="2" />
        <rect x="52" y="35" width="12" height="50" fill="url(#taxGradient)" opacity="0.9" rx="2" />
        <rect x="68" y="50" width="12" height="35" fill="url(#taxGradient)" opacity="0.9" rx="2" />
        {/* Trend line */}
        <path d="M 20 70 Q 35 60, 44 50 T 68 55" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Dollar sign */}
        <circle cx="50" cy="20" r="12" fill="white" opacity="0.2" />
        <text x="50" y="26" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">$</text>
      </svg>
    )
  }
  
  if (slug === 'landelijk-veiligheidsconcept') {
    return (
      <svg viewBox="0 0 100 100" className={iconClass + ' ' + className}>
        <defs>
          <linearGradient id="safetyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        {/* Shield */}
        <path d="M 50 15 L 30 25 L 30 50 Q 30 70, 50 85 Q 70 70, 70 50 L 70 25 Z" 
              fill="url(#safetyGradient)" stroke="white" strokeWidth="2" />
        {/* Checkmark */}
        <path d="M 35 50 L 45 60 L 65 40" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Network nodes */}
        <circle cx="25" cy="30" r="3" fill="white" opacity="0.6" />
        <circle cx="75" cy="30" r="3" fill="white" opacity="0.6" />
        <circle cx="50" cy="20" r="3" fill="white" opacity="0.6" />
      </svg>
    )
  }
  
  if (slug === 'contractbot-raamcontracten') {
    return (
      <svg viewBox="0 0 100 100" className={iconClass + ' ' + className}>
        <defs>
          <linearGradient id="contractGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        {/* Document */}
        <rect x="25" y="20" width="50" height="65" fill="url(#contractGradient)" rx="3" />
        <rect x="30" y="30" width="40" height="3" fill="white" opacity="0.8" rx="1" />
        <rect x="30" y="38" width="35" height="3" fill="white" opacity="0.8" rx="1" />
        <rect x="30" y="46" width="40" height="3" fill="white" opacity="0.8" rx="1" />
        <rect x="30" y="54" width="30" height="3" fill="white" opacity="0.8" rx="1" />
        {/* Folded corner */}
        <path d="M 65 20 L 75 20 L 75 30 L 65 20" fill="white" opacity="0.3" />
        {/* AI brain icon */}
        <circle cx="50" cy="70" r="8" fill="white" opacity="0.2" />
        <path d="M 45 68 Q 50 65, 55 68 Q 50 72, 45 68" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    )
  }
  
  if (slug === 'klant-communicatie-agent') {
    return (
      <svg viewBox="0 0 100 100" className={iconClass + ' ' + className}>
        <defs>
          <linearGradient id="commGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        {/* Chat bubble */}
        <path d="M 25 25 Q 25 20, 30 20 L 60 20 Q 70 20, 70 30 L 70 50 Q 70 60, 60 60 L 40 60 L 30 70 L 30 50 Q 30 40, 40 40 L 30 30 Q 30 25, 35 25 Z" 
              fill="url(#commGradient)" />
        {/* Message lines */}
        <rect x="35" y="35" width="25" height="4" fill="white" opacity="0.9" rx="2" />
        <rect x="35" y="43" width="20" height="4" fill="white" opacity="0.9" rx="2" />
        {/* AI indicator */}
        <circle cx="75" cy="30" r="8" fill="white" />
        <path d="M 70 30 Q 75 25, 80 30 Q 75 35, 70 30" stroke="url(#commGradient)" strokeWidth="2" fill="none" />
        {/* Signal waves */}
        <circle cx="75" cy="30" r="12" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <circle cx="75" cy="30" r="16" fill="none" stroke="white" strokeWidth="1.5" opacity="0.2" />
      </svg>
    )
  }
  
  if (slug === 'easyboek') {
    return (
      <svg viewBox="0 0 100 100" className={iconClass + ' ' + className}>
        <defs>
          <linearGradient id="easyboekGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        {/* Book/ledger */}
        <rect x="20" y="25" width="60" height="55" fill="url(#easyboekGradient)" rx="3" />
        <rect x="20" y="25" width="30" height="55" fill="white" opacity="0.15" rx="3" />
        {/* Lines in book */}
        <line x1="30" y1="35" x2="70" y2="35" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <line x1="30" y1="42" x2="70" y2="42" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <line x1="30" y1="49" x2="70" y2="49" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <line x1="30" y1="56" x2="70" y2="56" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <line x1="30" y1="63" x2="70" y2="63" stroke="white" strokeWidth="1.5" opacity="0.6" />
        {/* Calculator/numbers */}
        <circle cx="50" cy="70" r="6" fill="white" opacity="0.3" />
        <text x="50" y="74" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">€</text>
        {/* AI sparkles/automation */}
        <circle cx="75" cy="30" r="4" fill="white" opacity="0.8" />
        <circle cx="78" cy="35" r="3" fill="white" opacity="0.6" />
        <circle cx="72" cy="35" r="3" fill="white" opacity="0.6" />
        {/* Upload arrow */}
        <path d="M 50 15 L 50 25 M 45 20 L 50 15 L 55 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Receipt/document */}
        <rect x="15" y="20" width="12" height="8" fill="white" opacity="0.4" rx="1" />
        <line x1="18" y1="22" x2="25" y2="22" stroke="url(#easyboekGradient)" strokeWidth="1" />
        <line x1="18" y1="25" x2="23" y2="25" stroke="url(#easyboekGradient)" strokeWidth="1" />
      </svg>
    )
  }
  
  if (slug === 'ai-content-creator') {
    return (
      <svg viewBox="0 0 100 100" className={iconClass + ' ' + className}>
        <defs>
          <linearGradient id="contentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>
        </defs>
        {/* Document/Content */}
        <rect x="25" y="20" width="50" height="60" fill="url(#contentGradient)" rx="3" />
        <rect x="30" y="30" width="40" height="4" fill="white" opacity="0.9" rx="1" />
        <rect x="30" y="38" width="35" height="4" fill="white" opacity="0.9" rx="1" />
        <rect x="30" y="46" width="40" height="4" fill="white" opacity="0.9" rx="1" />
        <rect x="30" y="54" width="30" height="4" fill="white" opacity="0.9" rx="1" />
        {/* Social media icons */}
        <circle cx="40" cy="70" r="5" fill="white" opacity="0.8" />
        <rect x="52" y="65" width="10" height="10" fill="white" opacity="0.8" rx="2" />
        <circle cx="68" cy="70" r="5" fill="white" opacity="0.8" />
        {/* AI sparkles */}
        <circle cx="75" cy="25" r="3" fill="white" opacity="0.9" />
        <circle cx="80" cy="30" r="2.5" fill="white" opacity="0.7" />
        <circle cx="72" cy="30" r="2.5" fill="white" opacity="0.7" />
        {/* Magic wand / AI indicator */}
        <path d="M 20 25 L 20 15 M 18 17 L 20 15 L 22 17" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="white" />
      </svg>
    )
  }
  
  // Default icon based on sector
  const sectorIcons: Record<string, any> = {
    'Financieel': TrendingUp,
    'Veiligheid': Shield,
    'Juridisch': FileText,
    'Customer Service': MessageCircle,
    'Marketing': Sparkles,
  }
  
  const IconComponent = sectorIcons[sector] || TrendingUp
  
  return <IconComponent className={iconClass + ' ' + className} />
}

