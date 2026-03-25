import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

export default function Footer() {
  const data = getSiteData()
  
  // WhatsApp nummer formatteren
  const phoneNumber = data.contact.phone.replace(/[\s-]/g, '')
  const whatsappNumber = phoneNumber.startsWith('0') 
    ? `+31${phoneNumber.substring(1)}` 
    : phoneNumber.startsWith('+') 
    ? phoneNumber 
    : `+31${phoneNumber}`
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent('Hallo AI-Group, ik heb een vraag.')}`

  return (
    <footer className="bg-brand-black text-foreground">
      <div className="container-custom">
        <div className="py-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            {/* Brand */}
            <div className="max-w-md">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt={`${data.brand.name} logo`}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold text-xl text-white">
                  {data.brand.name}
                </span>
              </Link>
              <p className="font-tagline text-muted-foreground mb-6 max-w-md">
                {data.brand.tagline}
              </p>
            </div>

            {/* Contact info */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <a
                  href={`mailto:${data.contact.email}`}
                  className="flex items-center space-x-3 rounded-lg border border-border/60 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors duration-200"
                >
                  <Mail size={16} className="text-brand-blueLight shrink-0" />
                  <span className="truncate">{data.contact.email}</span>
                </a>
                <a
                  href={`tel:${data.contact.phone}`}
                  className="flex items-center space-x-3 rounded-lg border border-border/60 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors duration-200"
                >
                  <Phone size={16} className="text-brand-blueLight shrink-0" />
                  <span>{data.contact.phone}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 rounded-lg border border-border/60 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors duration-200"
                >
                  <MessageCircle size={16} className="text-brand-blueLight shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <div className="flex items-center space-x-3 rounded-lg border border-border/60 bg-white/5 px-4 py-3">
                  <MapPin size={16} className="text-brand-blueLight shrink-0" />
                  <span className="truncate">{data.contact.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 {data.brand.name}. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-muted-foreground hover:text-white text-sm transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-white text-sm transition-colors duration-200">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
