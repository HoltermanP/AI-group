import type { Metadata } from 'next'

export const SITE_URL = 'https://ai-group.nl'

type PageMetaInput = {
  title: string
  description: string
  /** Pad zoals '/contact' of '/trainingen/basis' */
  path: string
  ogImage?: string
}

export function pageMetadata({
  title,
  description,
  path,
  ogImage = '/og-image.jpg',
}: PageMetaInput): Metadata {
  const canonicalPath =
    path === '' || path === '/'
      ? '/'
      : path.startsWith('/')
        ? path
        : `/${path}`
  const ogUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: ogUrl,
      siteName: 'AI-Group',
      locale: 'nl_NL',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'AI-Group Platform Dashboard',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
