import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json()

    // Bedrijfscontext voor de AI
    const systemPrompt = `Je bent Aimy, een vriendelijke en professionele AI-assistent voor AI-Group, een AI-first organisatie. Je stelt jezelf altijd voor als Aimy.

Belangrijke informatie over AI-Group:
- Wij zijn Luit de Jong en Patrick Holterman
- Jarenlange ervaring in management, processen, projecten en IT
- We hebben meer AI-agents in dienst dan personeelsleden
- Agents werken 24/7 voor ons en voor klanten
- We leveren: Proof of Concept binnen 48 uur, MVP binnen 72 uur, Livegang versie 1.0 binnen 4 weken
- We bouwen AI-oplossingen voor alle sectoren: financieel, zorg, klantcontact, engineering, planning, logistiek
- Onze oplossingen: workflow automation, Tax & Wealth HUB, landelijk veiligheidsconcept, contractbot, klant communicatie agent
- Contact: info@ai-group.nl, 06-30985351
- Locatie: Enschede/Zwolle, Nederland
- We bieden gratis verkenning zonder verplichtingen
- Binnen 24 uur reactie op vragen

Geef korte, vriendelijke en professionele antwoorden in het Nederlands. Wees enthousiast over AI en agents. Verwijs naar contactgegevens als vragen te specifiek worden.`

    // Gebruik OpenAI API (of een andere AI service)
    const apiKey = process.env.OPENAI_API_KEY
    
    if (!apiKey) {
      // Fallback naar een eenvoudige response als er geen API key is
      return NextResponse.json({ 
        response: 'Ik ben momenteel in onderhoud. Neem gerust contact met ons op via info@ai-group.nl of bel 06-30985351. We helpen u graag verder!'
      })
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Snelle en goedkope model
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationHistory.slice(-10), // Laatste 10 berichten voor context
          { role: 'user', content: message }
        ],
        max_tokens: 300,
        temperature: 0.7,
        stream: false
      })
    })

    if (!response.ok) {
      throw new Error('OpenAI API error')
    }

    const data = await response.json()
    const aiResponse = data.choices[0]?.message?.content || 'Sorry, ik kon geen antwoord genereren. Neem contact met ons op via info@ai-group.nl'

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error('Chatbot API error:', error)
    
    // Fallback response
    return NextResponse.json({ 
      response: 'Sorry, er ging iets mis. Neem gerust contact met ons op via info@ai-group.nl of bel 06-30985351. We helpen u graag verder!'
    })
  }
}

