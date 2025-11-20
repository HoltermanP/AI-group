'use client'

import { useEffect } from 'react'

interface PreloadResourcesProps {
  resources?: string[]
}

export default function PreloadResources({ resources = [] }: PreloadResourcesProps) {
  useEffect(() => {
    // Preload critical resources
    const criticalResources = [
      '/logo.svg',
      '/favicon.ico',
      ...resources
    ]

    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = resource.endsWith('.svg') ? 'image' : 'fetch'
      link.href = resource
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // Preload critical fonts
    const fontLink = document.createElement('link')
    fontLink.rel = 'preload'
    fontLink.as = 'font'
    fontLink.type = 'font/woff2'
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
    fontLink.crossOrigin = 'anonymous'
    document.head.appendChild(fontLink)

    // DNS prefetch for external domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://images.unsplash.com'
    ]

    domains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = domain
      document.head.appendChild(link)
    })

    // Preconnect to critical origins
    const origins = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]

    origins.forEach(origin => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = origin
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

  }, [resources])

  return null
}
