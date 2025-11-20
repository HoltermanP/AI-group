# 📧 SendGrid Email Service Setup - Complete Handleiding

## 🎯 Wat we gaan doen
We koppelen het contactformulier aan SendGrid voor professionele email verzending met:
- ✅ **Automatische emails** naar AI-Group bij contactformulier
- ✅ **Bevestigingsmail** naar klant
- ✅ **Professionele templates** met AI-Group branding
- ✅ **Betrouwbare deliverability**

---

## 📋 Stap 1: SendGrid Account Aanmaken

### 1.1 Account Registreren
1. Ga naar [sendgrid.com](https://sendgrid.com)
2. Klik op **"Start for Free"**
3. Vul je gegevens in:
   - **Email**: je email adres
   - **Password**: sterk wachtwoord
   - **Company**: AI-Group
   - **Website**: ai-group.nl

### 1.2 Email Verificatie
1. Check je email inbox
2. Klik op de verificatielink van SendGrid
3. Log in op je SendGrid account

---

## 🔑 Stap 2: API Key Genereren

### 2.1 Naar API Keys
1. In je SendGrid dashboard, ga naar **Settings** → **API Keys**
2. Klik op **"Create API Key"**

### 2.2 API Key Configuratie
1. **API Key Name**: `AI-Group Website Contact`
2. **API Key Permissions**: Selecteer **"Restricted Access"**
3. **Mail Send**: Selecteer **"Full Access"**
4. Klik **"Create & View"**

### 2.3 API Key Opslaan
1. **⚠️ BELANGRIJK**: Kopieer de API key direct (je ziet hem maar 1x!)
2. Bewaar hem veilig (bijv. in een tekstbestand)

---

## ⚙️ Stap 3: Environment Variables Instellen

### 3.1 .env.local Bestand Maken
Maak een nieuw bestand `.env.local` in je project root:

```bash
# SendGrid Configuration
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@ai-group.nl

# Development (optioneel)
NODE_ENV=development
```

### 3.2 Vervang de API Key
- Vervang `SG.xxxxxxxx...` met jouw echte SendGrid API key
- Zorg dat `CONTACT_EMAIL` jouw juiste email adres is

---

## 🚀 Stap 4: Testen

### 4.1 Development Server Restarten
```bash
# Stop de huidige server (Ctrl+C)
# Start opnieuw
npm run dev
```

### 4.2 Contactformulier Testen
1. Ga naar `http://localhost:3000/contact`
2. Vul het formulier in:
   - **Naam**: Test Gebruiker
   - **Email**: jouw email adres
   - **Organisatie**: Test Bedrijf
   - **Onderwerp**: Test
   - **Bericht**: Dit is een test bericht
3. Klik **"Verstuur bericht"**

### 4.3 Email Checken
Je zou 2 emails moeten ontvangen:
1. **Naar AI-Group**: Het contactformulier bericht
2. **Naar klant**: Bevestigingsmail met AI-Group branding

---

## 🌐 Stap 5: Productie Deploy

### 5.1 Vercel Environment Variables
Voor productie op Vercel:

1. Ga naar je Vercel project dashboard
2. **Settings** → **Environment Variables**
3. Voeg toe:
   - `SENDGRID_API_KEY`: jouw API key
   - `CONTACT_EMAIL`: info@ai-group.nl

### 5.2 Domain Verification (Aanbevolen)
Voor betere deliverability:

1. In SendGrid: **Settings** → **Sender Authentication**
2. **Domain Authentication** → **Authenticate Your Domain**
3. Volg de DNS instructies voor ai-group.nl

---

## 🔧 Troubleshooting

### ❌ "Email service niet geconfigureerd"
- Check of `.env.local` bestaat
- Check of `SENDGRID_API_KEY` correct is
- Restart de development server

### ❌ "SendGrid API error"
- Check of API key correct is
- Check SendGrid dashboard voor errors
- Verificeer dat API key "Mail Send" permissions heeft

### ❌ Emails komen niet aan
- Check spam folder
- Verificeer email adressen
- Check SendGrid Activity Feed voor delivery status

---

## 📊 SendGrid Dashboard Features

### Activity Feed
- **Real-time monitoring** van email verzending
- **Delivery status** per email
- **Bounce/blocked** email tracking

### Statistics
- **Email volume** per dag/maand
- **Delivery rates**
- **Open/click rates** (met tracking enabled)

### Suppressions
- **Bounce management**
- **Unsubscribe handling**
- **Spam complaints**

---

## 💰 Kosten

### SendGrid Free Tier
- ✅ **100 emails/dag** gratis
- ✅ **40,000 emails/maand** eerste 30 dagen
- ✅ **Onbeperkt** contacten
- ✅ **API access** inclusief

### Upgrade (indien nodig)
- **Essentials**: $19.95/maand voor 50,000 emails
- **Pro**: $89.95/maand voor 100,000 emails
- **Premier**: Custom pricing

---

## 🎉 Gefeliciteerd!

Je contactformulier is nu volledig functioneel met:
- ✅ **Professionele email service**
- ✅ **Automatische bevestigingen**
- ✅ **Betrouwbare deliverability**
- ✅ **AI-Group branding**
- ✅ **Real-time monitoring**

**Volgende stap**: Site deployen op Vercel voor externe review!

---

## 📞 Support

Bij vragen over SendGrid:
- **Documentation**: [docs.sendgrid.com](https://docs.sendgrid.com)
- **Support**: Via SendGrid dashboard
- **Community**: [community.sendgrid.com](https://community.sendgrid.com)
