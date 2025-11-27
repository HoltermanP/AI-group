'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

// Avatar component voor vrouwelijke assistent
const AssistantAvatar = ({ size = 40, className = '' }: { size?: number; className?: string }) => {
  // URL-encode de bestandsnaam om speciale karakters en spaties te hanteren
  const imagePath = encodeURI('/images/Scherm­afbeelding 2025-11-27 om 20.10.06.png')
  
  return (
    <div className={`relative rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex-shrink-0 border-2 border-primary-300 dark:border-primary-600 ${className}`} style={{ width: size, height: size }}>
      <img
        src={imagePath}
        alt="Aimy"
        width={size}
        height={size}
        className="w-full h-full object-cover"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnnouncing, setIsAnnouncing] = useState(false)
  const [hasAnnounced, setHasAnnounced] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Melding animatie na 2 seconden
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAnnounced) {
        setIsAnnouncing(true)
        setTimeout(() => {
          setIsAnnouncing(false)
          setHasAnnounced(true)
          // Voeg welkomstbericht toe
          setMessages([
            {
              id: '1',
              text: 'Hallo! Ik ben Aimy, de AI-assistent van AI-Group. Hoe kan ik u helpen? Stel gerust vragen over ons bedrijf, onze oplossingen of wat we voor u kunnen betekenen.',
              isUser: false,
              timestamp: new Date()
            }
          ])
        }, 3000) // Na 3 seconden animatie, toon bericht
      }
    }, 2000) // Start na 2 seconden

    return () => clearTimeout(timer)
  }, [hasAnnounced])
  
  // Bedrijfsgegevens
  const companyData = {
    name: 'AI-Group',
    email: 'info@ai-group.nl',
    phone: '06-30985351'
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = async (userMessage: string): Promise<string> => {
    try {
      // Bereid conversation history voor
      const conversationHistory = messages
        .filter(msg => msg.id !== '1') // Verwijder welkomstbericht
        .map(msg => ({
          role: msg.isUser ? 'user' : 'assistant',
          content: msg.text
        }))

      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: conversationHistory
        })
      })

      if (!response.ok) {
        throw new Error('API error')
      }

      const data = await response.json()
      return data.response || 'Sorry, ik kon geen antwoord genereren. Neem contact met ons op via info@ai-group.nl'
    } catch (error) {
      console.error('Chatbot error:', error)
      return 'Sorry, er ging iets mis. Neem gerust contact met ons op via info@ai-group.nl of bel 06-30985351. We helpen u graag verder!'
    }
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessageText = inputValue.trim()
    const userMessage: Message = {
      id: Date.now().toString(),
      text: userMessageText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    try {
      // Haal AI response op
      const aiResponse = await getResponse(userMessageText)
      
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, response])
    } catch (error) {
      console.error('Error getting response:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, er ging iets mis. Neem gerust contact met ons op via info@ai-group.nl of bel 06-30985351.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Functie om e-mailadressen clickable te maken
  const renderMessageWithLinks = (text: string) => {
    // Regex om e-mailadressen te vinden
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
    const parts = text.split(emailRegex)
    
    return parts.map((part, index) => {
      if (emailRegex.test(part)) {
        return (
          <a
            key={index}
            href={`mailto:${part}`}
            className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  return (
    <>
      {/* Floating Chat Button met uitklapanimatie */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Uitklapende melding bubble */}
        {isAnnouncing && (
          <div className="absolute bottom-20 right-0 mb-2 w-72 animate-chatbotAnnounce">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-primary-300 dark:border-primary-600 p-4 relative">
              {/* Pijl naar beneden */}
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white dark:bg-gray-800 border-r-2 border-b-2 border-primary-300 dark:border-primary-600 transform rotate-45"></div>
              
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <AssistantAvatar size={48} />
                
                {/* Tekst */}
                <div className="flex-1 min-w-0 pt-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1 leading-tight">
                    Hallo! Ik ben Aimy
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Klik hier om te beginnen
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isAnnouncing ? 'animate-pulse scale-110' : ''
          }`}
          aria-label="Open chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AssistantAvatar size={40} className="border-white/30" />
              <div>
                <h3 className="font-bold text-lg">Aimy</h3>
                <p className="text-xs text-primary-100">Online • Antwoordt direct</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!message.isUser && (
                  <AssistantAvatar size={32} />
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.isUser
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">
                    {message.isUser ? message.text : renderMessageWithLinks(message.text)}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Stel uw vraag..."
                className="flex-1 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Typ uw vraag en druk op Enter
            </p>
          </div>
        </div>
      )}
    </>
  )
}

