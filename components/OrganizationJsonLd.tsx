import { getSiteData } from '@/lib/getData'
import { SITE_URL } from '@/lib/seo'

function formatPhoneForSchema(raw: string): string {
  const digits = raw.replace(/[\s-]/g, '')
  if (digits.startsWith('+')) return digits
  if (digits.startsWith('0')) return `+31${digits.slice(1)}`
  return `+31${digits}`
}

export default function OrganizationJsonLd() {
  const data = getSiteData()
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.brand.name,
    description: data.positioning.mission,
    url: SITE_URL,
    logo: `${SITE_URL}${data.brand.logo}`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: formatPhoneForSchema(data.contact.phone),
      contactType: 'customer service',
      email: data.contact.email,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Enschede',
      addressRegion: 'Overijssel',
      addressCountry: 'NL',
    },
    sameAs: [SITE_URL],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
