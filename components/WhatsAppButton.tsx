'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getSiteData } from '@/lib/getData'

export default function WhatsAppButton() {
  const data = getSiteData()
  
  // Converteer telefoonnummer naar WhatsApp formaat (verwijder spaties en streepjes)
  const phoneNumber = data.contact.phone.replace(/[\s-]/g, '')
  // Als het nummer begint met 0, vervang met +31
  const whatsappNumber = phoneNumber.startsWith('0') 
    ? `+31${phoneNumber.substring(1)}` 
    : phoneNumber.startsWith('+') 
    ? phoneNumber 
    : `+31${phoneNumber}`
  
  // Standaard bericht voor WhatsApp
  const defaultMessage = encodeURIComponent('Hallo AI-Group, ik heb een vraag over jullie AI-oplossingen.')
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${defaultMessage}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      aria-label="Stuur een WhatsApp bericht"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  )
}

