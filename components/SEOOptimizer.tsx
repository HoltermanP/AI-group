'use client'

import { useEffect } from 'react'

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
}

export default function SEOOptimizer({
  title = 'AI-Group - AI-applicaties voor elke organisatie',
  description = 'Versnel uw organisatie met AI-applicaties en intelligente agents. Van workflow automation tot klantcommunicatie – alles in één AI Platform.',
  keywords = ['AI', 'artificial intelligence', 'AI agents', 'workflow automation', 'AI platform', 'klantcommunicatie'],
  canonical = 'https://ai-group.nl',
  ogImage = '/og-image.jpg'
}: SEOOptimizerProps) {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '))
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical)

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', description)
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]')
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage)
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AI-Group",
      "description": description,
      "url": canonical,
      "logo": `${canonical}/logo.svg`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+31-6-82551718",
        "contactType": "customer service",
        "email": "info@ai-group.nl"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Enschede",
        "addressRegion": "Overijssel",
        "addressCountry": "NL"
      },
      "sameAs": [
        "https://ai-group.nl"
      ]
    }

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    // Add breadcrumb structured data for current page
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": canonical
        }
      ]
    }

    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData)
    document.head.appendChild(breadcrumbScript)

    // Add FAQ structured data
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Wat doet AI-Group?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI-Group ontwikkelt AI-applicaties en intelligente agents voor organisaties in alle sectoren, van workflow automation tot klantcommunicatie."
          }
        },
        {
          "@type": "Question",
          "name": "Hoe werkt het AI Platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ons AI Platform integreert verschillende modules voor real-time monitoring, documentbeheer en workflow automation in één dashboard."
          }
        }
      ]
    }

    const faqScript = document.createElement('script')
    faqScript.type = 'application/ld+json'
    faqScript.textContent = JSON.stringify(faqData)
    document.head.appendChild(faqScript)

  }, [title, description, keywords, canonical, ogImage])

  return null
}
