import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Initialize SendGrid if available (optional)
let sgMail: any = null
if (process.env.SENDGRID_API_KEY) {
  try {
    const sendgrid = require('@sendgrid/mail')
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail = sendgrid
  } catch (e) {
    // SendGrid niet geïnstalleerd, dat is oké
    sgMail = null
  }
}

// Create SMTP transporter voor Strato hosting
const createSMTPTransporter = () => {
  // Optie 1: SMTP via Strato hosting
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const port = parseInt(process.env.SMTP_PORT || '587')
    const secure = port === 465 // 465 gebruikt SSL, 587 gebruikt STARTTLS
    
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      secure: secure, // true voor 465, false voor 587 (gebruikt STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Strato vereist TLS
      tls: {
        rejectUnauthorized: false, // Sommige hosting providers vereisen dit
        ciphers: 'SSLv3',
      },
    })
  }
  
  // Optie 2: Gmail (fallback)
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
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
    console.error('SendGrid error:', error)
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
    console.error('SMTP error:', error)
    throw new Error(`SMTP error: ${error.message}`)
  }
}

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

    const contactEmail = process.env.CONTACT_EMAIL || 'info@ai-group.nl'
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || 'noreply@ai-group.nl'

    // Email data
    const emailData = {
      to: contactEmail,
      from: fromEmail,
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

    // Try to send email with available service
    let sendResult
    try {
      // Prioriteit 1: SendGrid (als geconfigureerd)
      if (process.env.SENDGRID_API_KEY && sgMail) {
        sendResult = await sendEmailWithSendGrid(emailData)
      }
      // Prioriteit 2: SMTP via Strato hosting of Gmail
      else if (createSMTPTransporter()) {
        sendResult = await sendEmailWithSMTP(emailData)
      }
      // Geen email service geconfigureerd
      else {
        console.warn('⚠️ Geen email service geconfigureerd!')
        console.log('=== CONTACTFORMULIER EMAIL (NIET VERSTUURD) ===')
        console.log(emailData)
        console.log('===============================================')
        
        return NextResponse.json(
          { 
            error: 'Email service niet geconfigureerd. Configureer SMTP_HOST/SMTP_USER/SMTP_PASS, SENDGRID_API_KEY, of EMAIL_USER/EMAIL_PASS in .env.local' 
          },
          { status: 500 }
        )
      }

      console.log(`✅ Email succesvol verzonden via ${sendResult.method}`)
      
      return NextResponse.json(
        { 
          message: `Bericht succesvol verzonden naar ${contactEmail}!`,
          method: sendResult.method
        },
        { status: 200 }
      )

    } catch (emailError: any) {
      console.error('Email verzending gefaald:', emailError)
      return NextResponse.json(
        { 
          error: `Email verzending gefaald: ${emailError.message}. Probeer het later opnieuw.` 
        },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verzenden' },
      { status: 500 }
    )
  }
}