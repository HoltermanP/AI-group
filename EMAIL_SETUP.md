# Email Service Setup

## Optie 1: Gmail (Eenvoudig)

1. **Maak een .env.local bestand** in de root directory:
```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=info@ai-group.nl
```

2. **Gmail App Password aanmaken:**
   - Ga naar Google Account Settings
   - Security → 2-Step Verification (inschakelen)
   - App passwords → Generate app password
   - Kopieer het 16-karakter wachtwoord naar EMAIL_PASS

## Optie 2: SendGrid (Aanbevolen voor productie)

1. **Account aanmaken op sendgrid.com**
2. **API Key genereren**
3. **Environment variables:**
```bash
SENDGRID_API_KEY=your-sendgrid-api-key
CONTACT_EMAIL=info@ai-group.nl
```

## Optie 3: Resend (Modern alternatief)

1. **Account aanmaken op resend.com**
2. **API Key genereren**
3. **Environment variables:**
```bash
RESEND_API_KEY=your-resend-api-key
CONTACT_EMAIL=info@ai-group.nl
```

## Testen

Na setup van environment variables:
1. Restart de development server
2. Ga naar /contact
3. Vul het formulier in
4. Check je email voor bevestiging

## Troubleshooting

- **Gmail**: Zorg dat 2FA aan staat en app password gebruikt
- **SendGrid**: Controleer API key permissions
- **Resend**: Verificeer domain in dashboard
