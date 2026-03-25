'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search, Home, Bot, Award, Users, Mail, ScanLine, Lightbulb, ClipboardList, GraduationCap } from 'lucide-react'
import { getSiteData } from '@/lib/getData'
import SearchModal from './SearchModal'

const iconMap: Record<string, unknown> = {
  'Home': Home,
  'Agents': Bot,
  'Track Record': Award,
  'Prompt tips': Lightbulb,
  'AI-Group Academy': GraduationCap,
  'Notuleren': ClipboardList,
  'Over Ons': Users,
  'Contact': Mail,
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const data = getSiteData()

  return (
    <nav className="bg-brand-black/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-border overflow-x-hidden">
      <div className="container-custom max-w-full">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-2 sm:gap-3 min-w-0">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 min-w-0">
            <Image
              src="/logo.svg"
              alt={`${data.brand.name} logo`}
              width={40}
              height={40}
              className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 animate-logo-rotate flex-shrink-0"
            />
            <span className="font-bold text-base sm:text-lg xl:text-xl text-white whitespace-nowrap truncate">
              {data.brand.name}
            </span>
          </Link>

          <div className="hidden xl:flex items-center justify-center flex-1 min-w-0 gap-0.5 2xl:gap-2 max-w-4xl mx-auto">
            {data.navigation.map((item) => {
              const Icon = (iconMap[item.name] as React.ComponentType<{ className?: string }>) || Home
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1.5 text-sm 2xl:text-base text-muted-foreground hover:text-brand-blueLight transition-all duration-200 font-semibold px-2 2xl:px-3 py-2 rounded-xl hover:bg-card whitespace-nowrap group flex-shrink-0"
                >
                  <Icon className="w-4 h-4 2xl:w-5 2xl:h-5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          <div className="hidden xl:flex items-center flex-shrink-0 gap-2 2xl:gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 2xl:p-3 text-muted-foreground hover:text-brand-blueLight transition-colors duration-200 rounded-xl hover:bg-card flex-shrink-0"
            >
              <Search className="w-5 h-5 2xl:w-6 2xl:h-6" />
            </button>
            <Link
              href="https://www.ai-businessscan.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-[#ff643a] text-white px-4 2xl:px-6 py-2.5 2xl:py-3 rounded-[6px] font-bold transition-all duration-200 text-sm 2xl:text-base shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap flex items-center space-x-1.5 2xl:space-x-2 flex-shrink-0"
            >
              <ScanLine className="w-4 h-4 2xl:w-5 2xl:h-5 flex-shrink-0" />
              <span>Gratis Bedrijfscan</span>
            </Link>
            <Link
              href="/contact"
              className="bg-brand-blue hover:bg-brand-blueLight text-white px-4 2xl:px-6 py-2.5 2xl:py-3 rounded-[6px] font-bold transition-all duration-200 text-sm 2xl:text-base shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap flex-shrink-0"
            >
              POC &lt; 48 uur
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-[6px] text-muted-foreground hover:bg-card transition-colors flex-shrink-0"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Menu sluiten' : 'Menu openen'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="xl:hidden">
            <div className="px-4 pt-4 pb-6 max-h-[calc(100vh-4rem)] overflow-y-auto space-y-2 bg-brand-black/95 backdrop-blur-md border-t border-border">
              {data.navigation.map((item) => {
                const Icon = (iconMap[item.name] as React.ComponentType<{ className?: string }>) || Home
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-lg font-semibold text-muted-foreground hover:text-brand-blueLight hover:bg-card rounded-xl transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              <Link
                href="https://www.ai-businessscan.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 text-lg font-bold bg-brand-red text-white rounded-[6px] hover:bg-[#ff643a] transition-colors duration-200 mt-4 border border-brand-red whitespace-nowrap"
                onClick={() => setIsOpen(false)}
              >
                <ScanLine className="w-5 h-5" />
                <span>Gratis Bedrijfscan</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center space-x-2 px-4 py-3 text-lg font-bold bg-brand-blue text-white rounded-[6px] hover:bg-brand-blueLight transition-colors duration-200 mt-2 border border-brand-blue whitespace-nowrap"
                onClick={() => setIsOpen(false)}
              >
                <Mail className="w-5 h-5" />
                <span>POC &lt; 48 uur</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  )
}
