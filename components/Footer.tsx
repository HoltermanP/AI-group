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
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
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
              <p className="text-gray-400 mb-6 max-w-md">
                {data.brand.tagline}
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary-400" />
                  <a href={`mailto:${data.contact.email}`} className="hover:text-white transition-colors duration-200">
                    {data.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary-400" />
                  <a href={`tel:${data.contact.phone}`} className="hover:text-white transition-colors duration-200">
                    {data.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle size={16} className="text-primary-400" />
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-primary-400" />
                  <span>{data.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-white mb-4">Oplossingen</h3>
              <ul className="space-y-2">
                {data.solutions.map((solution, index) => (
                  <li key={index}>
                    <Link
                      href={`/oplossingen/${solution.slug}`}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {solution.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">Bedrijf</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/cases" className="hover:text-white transition-colors duration-200">
                    Cases
                  </Link>
                </li>
                <li>
                  <Link href="/platform" className="hover:text-white transition-colors duration-200">
                    Platform
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 {data.brand.name}. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
