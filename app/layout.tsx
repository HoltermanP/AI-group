import type { Metadata } from 'next'
import { DM_Sans, IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieConsent from '@/components/CookieConsent'
import ErrorBoundary from '@/components/ErrorBoundary'
import Chatbot from '@/components/Chatbot'
// import PerformanceMonitor from '@/components/PerformanceMonitor'
// import PreloadResources from '@/components/PreloadResources'
// import CacheStrategy from '@/components/CacheStrategy'
// import SEOOptimizer from '@/components/SEOOptimizer'
// import Analytics from '@/components/Analytics'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-space-grotesk',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

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
          <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${ibmPlexMono.variable} ${spaceGrotesk.className} dark`} suppressHydrationWarning>
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
