import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getTraining } from '@/lib/trainings'

// Initialize SendGrid if available (optional) -zelfde als contact
let sgMail: any = null
if (process.env.SENDGRID_API_KEY) {
  try {
    const sendgrid = require('@sendgrid/mail')
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail = sendgrid
  } catch (e) {
    sgMail = null
  }
}

// Create SMTP transporter -zelfde logica als contact (Strato / Gmail)
const createSMTPTransporter = () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const port = parseInt(process.env.SMTP_PORT || '587')
    const secure = port === 465
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false, ciphers: 'SSLv3' },
    })
  }
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    })
  }
  return null
}

async function sendEmailWithSendGrid(emailData: {
  to: string
  from: string
  subject: string
  text: string
  html: string
}) {
  if (!sgMail) {
    throw new Error('SendGrid niet geconfigureerd')
  }
  try {
    await sgMail.send({
      to: emailData.to,
      from: emailData.from,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
    })
    return { success: true, method: 'SendGrid' }
  } catch (error: any) {
    console.error('SendGrid error (training-signup):', error)
    throw new Error(`SendGrid error: ${error.message}`)
  }
}

async function sendEmailWithSMTP(emailData: {
  to: string
  from: string
  subject: string
  text: string
  html: string
}) {
  const transporter = createSMTPTransporter()
  if (!transporter) {
    throw new Error('SMTP niet geconfigureerd')
  }
  try {
    await transporter.sendMail({
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
    })
    const method = process.env.SMTP_HOST ? 'SMTP (Strato)' : 'Gmail'
    return { success: true, method }
  } catch (error: any) {
    console.error('SMTP error (training-signup):', error)
    throw new Error(`SMTP error: ${error.message}`)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      organization,
      phone,
      trainingSlug,
      participants,
      preferredPeriod,
      message,
    } = body

    if (!name || !email || !trainingSlug) {
      return NextResponse.json(
        { error: 'Naam, e-mail en training zijn verplicht' },
        { status: 400 }
      )
    }

    const training = getTraining(trainingSlug)
    if (!training) {
      return NextResponse.json({ error: 'Onbekende training' }, { status: 400 })
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'info@ai-group.nl'
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || 'noreply@ai-group.nl'

    const emailData = {
      to: contactEmail,
      from: fromEmail,
      subject: `Inschrijving training: ${training.title}`,
      text: `
Inschrijving AI-training
------------------------
Training: ${training.title} (${training.slug})
Prijs indicatie: € ${training.pricePerPerson} p.p.

Deelnemer / contactpersoon: ${name}
E-mail: ${email}
Organisatie: ${organization || '-'}
Telefoon: ${phone || '-'}
Aantal deelnemers: ${participants || '-'}
Voorkeursperiode: ${preferredPeriod || '-'}

Bericht:
${message || '-'}

Verstuurd: ${new Date().toLocaleString('nl-NL')}
`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">Nieuwe inschrijving training</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Training:</strong> ${training.title}</p>
            <p><strong>Prijs:</strong> € ${training.pricePerPerson} per persoon</p>
            <p><strong>Naam:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Organisatie:</strong> ${organization || '-'}</p>
            <p><strong>Telefoon:</strong> ${phone || '-'}</p>
            <p><strong>Aantal deelnemers:</strong> ${participants || '-'}</p>
            <p><strong>Voorkeursperiode:</strong> ${preferredPeriod || '-'}</p>
          </div>
          <h3 style="color: #374151;">Bericht</h3>
          <p style="white-space: pre-wrap;">${message || '-'}</p>
          <p style="font-size: 12px; color: #64748b;">${new Date().toLocaleString('nl-NL')}</p>
        </div>
      `,
    }

    let sendResult
    try {
      if (process.env.SENDGRID_API_KEY && sgMail) {
        sendResult = await sendEmailWithSendGrid(emailData)
      } else if (createSMTPTransporter()) {
        sendResult = await sendEmailWithSMTP(emailData)
      } else {
        console.warn('⚠️ Geen email service geconfigureerd (training-signup)')
        return NextResponse.json(
          {
            error:
              'E-mail niet geconfigureerd. Configureer SMTP_HOST/SMTP_USER/SMTP_PASS, SENDGRID_API_KEY, of EMAIL_USER/EMAIL_PASS in .env.local',
          },
          { status: 500 }
        )
      }

      console.log(`✅ Inschrijving email verzonden via ${sendResult.method}`)
      return NextResponse.json(
        { message: 'Inschrijving ontvangen. We nemen zo snel mogelijk contact op.', method: sendResult.method },
        { status: 200 }
      )
    } catch (emailError: any) {
      console.error('Email verzending gefaald (training-signup):', emailError)
      return NextResponse.json(
        { error: `E-mail verzending mislukt: ${emailError.message}. Probeer het later opnieuw of mail info@ai-group.nl` },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Training signup error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verzenden' },
      { status: 500 }
    )
  }
}
