import { Metadata } from 'next'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { getSiteData } from '@/lib/getData'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - AI-Group',
  description: 'Neem contact op met AI-Group voor een demo of verkenning van AI-oplossingen voor uw organisatie.',
}

export default function ContactPage() {
  const data = getSiteData()
  
  // WhatsApp nummer formatteren
  const phoneNumber = data.contact.phone.replace(/[\s-]/g, '')
  const whatsappNumber = phoneNumber.startsWith('0') 
    ? `+31${phoneNumber.substring(1)}` 
    : phoneNumber.startsWith('+') 
    ? phoneNumber 
    : `+31${phoneNumber}`
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent('Hallo AI-Group, ik heb een vraag over jullie AI-oplossingen.')}`

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Neem contact op
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Klaar om AI in te zetten voor uw organisatie? Plan een verkenning of vraag een demo aan. 
              We helpen u graag verder met AI-oplossingen en intelligente agents voor uw organisatie.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Contactgegevens
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                    <Mail className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">E-mail</h3>
                    <a 
                      href={`mailto:${data.contact.email}`}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {data.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                    <Phone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Telefoon</h3>
                    <a 
                      href={`tel:${data.contact.phone}`}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {data.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">WhatsApp</h3>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#25D366] transition-colors duration-200"
                    >
                      Stuur een bericht via WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Locatie</h3>
                    <p className="text-gray-300">
                      {data.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <h3 className="font-semibold text-white mb-3">
                  Wat kunt u verwachten?
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Binnen 24 uur reactie</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Gratis verkenning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Geen verplichtingen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Persoonlijke aanpak</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
