'use client'

import { useEffect } from 'react'

interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime)
            // Send to analytics
          }
        }
      }).observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
        // Send to analytics
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceEventTiming[]) {
          if ('processingStart' in entry) {
            console.log('FID:', entry.processingStart - entry.startTime)
            // Send to analytics
          }
        }
      }).observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let clsValue = 0
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        console.log('CLS:', clsValue)
        // Send to analytics
      }).observe({ entryTypes: ['layout-shift'] })
    }

    // Resource timing
    const observeResources = () => {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Resource:', entry.name, entry.duration)
          // Monitor slow resources
          if (entry.duration > 1000) {
            console.warn('Slow resource detected:', entry.name)
          }
        }
      }).observe({ entryTypes: ['resource'] })
    }

    // Navigation timing
    const observeNavigation = () => {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const navEntry = entry as PerformanceNavigationTiming
          console.log('TTFB:', navEntry.responseStart - navEntry.requestStart)
          console.log('DOM Load:', navEntry.domContentLoadedEventEnd - navEntry.fetchStart)
          console.log('Page Load:', navEntry.loadEventEnd - navEntry.fetchStart)
        }
      }).observe({ entryTypes: ['navigation'] })
    }

    // Initialize monitoring
    if ('PerformanceObserver' in window) {
      observeWebVitals()
      observeResources()
      observeNavigation()
    }

    // Memory usage monitoring
    if ('memory' in performance) {
      const memory = (performance as any).memory
      console.log('Memory usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576),
        total: Math.round(memory.totalJSHeapSize / 1048576),
        limit: Math.round(memory.jsHeapSizeLimit / 1048576)
      })
    }

  }, [])

  return null
}
