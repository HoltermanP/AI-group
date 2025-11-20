import { MetadataRoute } from 'next'
import { getSiteData } from '@/lib/getData'

export default function sitemap(): MetadataRoute.Sitemap {
  const data = getSiteData()
  
  const baseUrl = 'https://ai-group.nl'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/oplossingen`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/platform`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Dynamic solution pages
  const solutionPages = data.solutions.map((solution) => ({
    url: `${baseUrl}/oplossingen/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic case pages
  const casePages = data.cases.map((caseItem) => ({
    url: `${baseUrl}/cases/${caseItem.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...solutionPages, ...casePages]
}
