'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search, Home, Database, Bot, Award, Users, Mail } from 'lucide-react'
import { getSiteData } from '@/lib/getData'
import SearchModal from './SearchModal'

const iconMap: Record<string, any> = {
  'Home': Home,
  'Big Data': Database,
  'Agents': Bot,
  'Track Record': Award,
  'Over Ons': Users,
  'Contact': Mail,
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const data = getSiteData()

  return (
        <nav className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-gray-200 dark:border-gray-800">
          <div className="container-custom">
            <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo.svg"
                  alt={`${data.brand.name} logo`}
                  width={40}
                  height={40}
                  className="w-10 h-10 animate-logo-rotate"
                />
            <span className="font-bold text-xl text-gray-900 dark:text-white whitespace-nowrap">
              {data.brand.name}
            </span>
          </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                {data.navigation.map((item) => {
                  const Icon = iconMap[item.name] || Home
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-2 text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 font-semibold px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap group"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Search & CTA */}
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Search className="w-6 h-6" />
                </button>
                <Link
                  href="/contact"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 text-lg shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                >
                  POC &lt; 48 uur
                </Link>
              </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden">
                <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-t-2 border-gray-200 dark:border-gray-800">
                  {data.navigation.map((item) => {
                    const Icon = iconMap[item.name] || Home
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    )
                  })}
                  <Link
                    href="/contact"
                    className="flex items-center justify-center space-x-2 px-4 py-3 text-lg font-bold bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 mt-4 border-2 border-primary-600 whitespace-nowrap"
                    onClick={() => setIsOpen(false)}
                  >
                    <Mail className="w-5 h-5" />
                    <span>POC &lt; 48 uur</span>
                  </Link>
                </div>
              </div>
            )}
      </div>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  )
}
