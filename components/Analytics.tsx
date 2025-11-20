'use client'

import { useEffect } from 'react'

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export default function Analytics() {
  useEffect(() => {
    // Google Analytics 4 setup
    const initGA4 = () => {
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // GA4 measurement ID
        const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with actual ID
        
        // Load GA4 script
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
        document.head.appendChild(script)

        // Initialize GA4
        window.dataLayer = window.dataLayer || []
        const gtag = (...args: any[]) => {
          window.dataLayer.push(args)
        }
        
        gtag('js', new Date())
        gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        })

        // Make gtag globally available
        ;(window as any).gtag = gtag
      }
    }

    // Custom event tracking
    const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value
        })
      }
    }

    // Track page views
    const trackPageView = (url: string) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('config', 'G-XXXXXXXXXX', {
          page_path: url
        })
      }
    }

    // Track user interactions
    const setupInteractionTracking = () => {
      // Track CTA clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        if (target.closest('[data-track="cta"]')) {
          trackEvent({
            action: 'click',
            category: 'CTA',
            label: target.textContent || 'Unknown CTA'
          })
        }

        // Track navigation clicks
        if (target.closest('nav a')) {
          trackEvent({
            action: 'click',
            category: 'Navigation',
            label: target.textContent || 'Unknown Link'
          })
        }

        // Track form submissions
        if (target.closest('form')) {
          trackEvent({
            action: 'submit',
            category: 'Form',
            label: 'Contact Form'
          })
        }
      })

      // Track scroll depth
      let maxScroll = 0
      const trackScrollDepth = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent
          trackEvent({
            action: 'scroll',
            category: 'Engagement',
            label: `${scrollPercent}%`,
            value: scrollPercent
          })
        }
      }

      window.addEventListener('scroll', trackScrollDepth, { passive: true })

      // Track time on page
      let startTime = Date.now()
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000)
        
        if (timeSpent > 0 && timeSpent % 30 === 0) {
          trackEvent({
            action: 'time_on_page',
            category: 'Engagement',
            label: `${timeSpent}s`,
            value: timeSpent
          })
        }
      }

      setInterval(trackTimeOnPage, 10000) // Check every 10 seconds
    }

    // Performance tracking
    const trackPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
            
            trackEvent({
              action: 'page_load_time',
              category: 'Performance',
              label: 'Load Time',
              value: Math.round(perfData.loadEventEnd - perfData.fetchStart)
            })

            trackEvent({
              action: 'dom_content_loaded',
              category: 'Performance',
              label: 'DOM Ready',
              value: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart)
            })

            trackEvent({
              action: 'first_paint',
              category: 'Performance',
              label: 'First Paint',
              value: Math.round(perfData.responseEnd - perfData.fetchStart)
            })
          }, 0)
        })
      }
    }

    // Initialize analytics
    initGA4()
    setupInteractionTracking()
    trackPerformance()

    // Track route changes (for SPA behavior)
    const originalPushState = history.pushState
    const originalReplaceState = history.replaceState

    history.pushState = function(...args) {
      originalPushState.apply(history, args)
      trackPageView(location.pathname)
    }

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args)
      trackPageView(location.pathname)
    }

    window.addEventListener('popstate', () => {
      trackPageView(location.pathname)
    })

  }, [])

  return null
}
