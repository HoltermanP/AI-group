'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight, FileText, Users, Settings } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

interface SearchResult {
  id: string
  title: string
  description: string
  type: 'page' | 'solution' | 'case'
  href: string
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const data = getSiteData()

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    const searchResults: SearchResult[] = []

    // Search in solutions
    data.solutions.forEach(solution => {
      if (
        solution.title.toLowerCase().includes(query.toLowerCase()) ||
        solution.description.toLowerCase().includes(query.toLowerCase()) ||
        solution.bullets.some(bullet => bullet.toLowerCase().includes(query.toLowerCase()))
      ) {
        searchResults.push({
          id: `solution-${solution.slug}`,
          title: solution.title,
          description: solution.description,
          type: 'solution',
          href: `/oplossingen/${solution.slug}`
        })
      }
    })

    // Search in cases
    data.cases.forEach(caseItem => {
      if (
        caseItem.title.toLowerCase().includes(query.toLowerCase()) ||
        caseItem.solution.toLowerCase().includes(query.toLowerCase()) ||
        caseItem.challenge.toLowerCase().includes(query.toLowerCase())
      ) {
        searchResults.push({
          id: `case-${caseItem.slug}`,
          title: caseItem.title,
          description: caseItem.solution,
          type: 'case',
          href: `/cases/${caseItem.slug}`
        })
      }
    })

    // Search in pages
    const pages = [
      { title: 'Home', description: 'Welkom bij AI-Group', href: '/' },
      { title: 'Oplossingen', description: 'Bekijk alle AI-oplossingen', href: '/oplossingen' },
      { title: 'Platform', description: 'AI Platform & Dashboard', href: '/platform' },
      { title: 'Cases', description: 'Bewezen resultaten', href: '/cases' },
      { title: 'Contact', description: 'Neem contact op', href: '/contact' }
    ]

    pages.forEach(page => {
      if (
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.description.toLowerCase().includes(query.toLowerCase())
      ) {
        searchResults.push({
          id: `page-${page.href}`,
          title: page.title,
          description: page.description,
          type: 'page',
          href: page.href
        })
      }
    })

    setResults(searchResults.slice(0, 6))
  }, [query, data])

  const getIcon = (type: string) => {
    switch (type) {
      case 'solution': return <Settings className="w-5 h-5" />
      case 'case': return <FileText className="w-5 h-5" />
      default: return <Users className="w-5 h-5" />
    }
  }

  const handleResultClick = (href: string) => {
    window.location.href = href
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Search Input */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <Search className="w-6 h-6 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Zoek oplossingen, cases, of pagina's..."
                    className="flex-1 text-lg bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500"
                  />
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {query.length < 2 ? (
                  <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Type minimaal 2 karakters om te zoeken...</p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Geen resultaten gevonden voor "{query}"</p>
                  </div>
                ) : (
                  <div className="py-2">
                    {results.map((result, index) => (
                      <motion.button
                        key={result.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleResultClick(result.href)}
                        className="w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                            {getIcon(result.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                              {result.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm truncate">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
