import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getTraining } from '@/lib/trainings'

let sgMail: any = null
if (process.env.SENDGRID_API_KEY) {
  try {
    const sendgrid = require('@sendgrid/mail')
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail = sendgrid
  } catch {
    sgMail = null
  }
}

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

async function sendMail(emailData: {
  to: string
  from: string
  subject: string
  text: string
  html: string
}) {
  if (process.env.SENDGRID_API_KEY && sgMail) {
    await sgMail.send(emailData)
    return { method: 'SendGrid' }
  }
  const t = createSMTPTransporter()
  if (!t) throw new Error('Geen mail geconfigureerd')
  await t.sendMail({
    from: emailData.from,
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.text,
    html: emailData.html,
  })
  return { method: process.env.SMTP_HOST ? 'SMTP' : 'Gmail' }
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
        <h2 style="color:#1e40af;">Nieuwe inschrijving training</h2>
        <p><strong>Training:</strong> ${training.title}</p>
        <p><strong>Prijs:</strong> € ${training.pricePerPerson} per persoon</p>
        <hr/>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Organisatie:</strong> ${organization || '-'}</p>
        <p><strong>Telefoon:</strong> ${phone || '-'}</p>
        <p><strong>Aantal deelnemers:</strong> ${participants || '-'}</p>
        <p><strong>Voorkeursperiode:</strong> ${preferredPeriod || '-'}</p>
        <h3>Bericht</h3>
        <p style="white-space:pre-wrap;">${message || '-'}</p>
        <p style="font-size:12px;color:#64748b;">${new Date().toLocaleString('nl-NL')}</p>
      `,
    }

    if (!createSMTPTransporter() && !(process.env.SENDGRID_API_KEY && sgMail)) {
      console.warn('Training signup (geen mail):', emailData.text)
      return NextResponse.json(
        {
          error:
            'E-mail niet geconfigureerd. Neem telefonisch contact op of mail direct naar info@ai-group.nl',
        },
        { status: 500 }
      )
    }

    await sendMail(emailData)
    return NextResponse.json({ message: 'Inschrijving ontvangen' }, { status: 200 })
  } catch (e: unknown) {
    console.error(e)
    return NextResponse.json(
      { error: 'Verzenden mislukt. Probeer later opnieuw of mail info@ai-group.nl' },
      { status: 500 }
    )
  }
}
