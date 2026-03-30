import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/', '/_next/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/'],
      }
    ],
    sitemap: 'https://ai-group.nl/sitemap.xml',
    host: 'https://ai-group.nl'
  }
}
