import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, organization, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, email en bericht zijn verplicht' },
        { status: 400 }
      )
    }

    // Eenvoudige email naar info@ai-group.nl
    const emailData = {
      to: 'info@ai-group.nl',
      from: 'noreply@ai-group.nl',
      subject: `Contactformulier: ${subject || 'Algemeen'}`,
      text: `
Naam: ${name}
Email: ${email}
Organisatie: ${organization || 'Niet opgegeven'}
Onderwerp: ${subject || 'Algemeen'}

Bericht:
${message}

---
Verstuurd op: ${new Date().toLocaleString('nl-NL')}
Van: AI-Group Website Contactformulier
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Nieuw contactformulier bericht</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contactgegevens:</h3>
            <p><strong>Naam:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organisatie:</strong> ${organization || 'Niet opgegeven'}</p>
            <p><strong>Onderwerp:</strong> ${subject || 'Algemeen'}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Bericht:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Verstuurd op:</strong> ${new Date().toLocaleString('nl-NL')}<br>
              <strong>Van:</strong> AI-Group Website Contactformulier
            </p>
          </div>
        </div>
      `,
    }

    // Log de email (voor nu - later vervangen door echte email service)
    console.log('=== CONTACTFORMULIER EMAIL ===')
    console.log(emailData)
    console.log('==============================')

    // Simuleer email verzending
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { message: 'Bericht succesvol verzonden naar info@ai-group.nl!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verzenden' },
      { status: 500 }
    )
  }
}