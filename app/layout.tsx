import type { Metadata } from 'next'
/* Fontsource: fonts zitten in node_modules — geen Google Fonts-fetch tijdens build (Vercel). */
import '@fontsource/space-grotesk/latin-300.css'
import '@fontsource/space-grotesk/latin-400.css'
import '@fontsource/space-grotesk/latin-500.css'
import '@fontsource/space-grotesk/latin-600.css'
import '@fontsource/space-grotesk/latin-700.css'
import '@fontsource/dm-sans/latin-300.css'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-500.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import '@fontsource/ibm-plex-mono/latin-700.css'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieConsent from '@/components/CookieConsent'
import ErrorBoundary from '@/components/ErrorBoundary'
import Chatbot from '@/components/Chatbot'
import OrganizationJsonLd from '@/components/OrganizationJsonLd'
// import PerformanceMonitor from '@/components/PerformanceMonitor'
// import PreloadResources from '@/components/PreloadResources'
// import CacheStrategy from '@/components/CacheStrategy'
// import SEOOptimizer from '@/components/SEOOptimizer'
// import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: 'AI-Group - AI-applicaties voor elke organisatie',
  description: 'Versnel uw organisatie met AI-applicaties en intelligente agents. Van workflow automation tot klantcommunicatie – alles in één AI Platform met realtime dashboard.',
  keywords: 'AI, artificial intelligence, AI agents, workflow automation, AI platform, klantcommunicatie, contractanalyse, belastingoptimalisatie',
  authors: [{ name: 'AI-Group' }],
  creator: 'AI-Group',
  publisher: 'AI-Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ai-group.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI-Group - AI-applicaties voor elke organisatie',
    description: 'Versnel uw organisatie met AI-applicaties en intelligente agents. Van workflow automation tot klantcommunicatie – alles in één AI Platform.',
    url: 'https://ai-group.nl',
    siteName: 'AI-Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Group Platform Dashboard',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Group - AI-applicaties voor elke organisatie',
    description: 'Versnel uw organisatie met AI-applicaties en intelligente agents. Van workflow automation tot klantcommunicatie.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="nl" className="scroll-smooth dark" suppressHydrationWarning>
          <body className="dark" suppressHydrationWarning>
            <OrganizationJsonLd />
            <ErrorBoundary>
              {/* <PerformanceMonitor />
              <PreloadResources />
              <CacheStrategy />
              <SEOOptimizer />
              <Analytics /> */}
              <Navbar />
              <main>{children}</main>
              <Footer />
              <ScrollToTop />
              <WhatsAppButton />
              <CookieConsent />
              <Chatbot />
            </ErrorBoundary>
          </body>
        </html>
  )
}
