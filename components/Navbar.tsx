'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Search } from 'lucide-react'
import { getSiteData } from '@/lib/getData'
import SearchModal from './SearchModal'

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
                  className="w-10 h-10"
                />
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              {data.brand.name}
            </span>
          </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {data.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-bold px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
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
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {data.cta.primary}
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
                  {data.navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-lg font-bold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-lg font-bold bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 mt-4 border-2 border-primary-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {data.cta.primary}
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
