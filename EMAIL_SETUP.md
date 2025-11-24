# Email Service Setup

## Optie 1: Strato SMTP (Aanbevolen - via hosting)

1. **Maak een .env.local bestand** in de root directory:
```bash
# Strato SMTP Configuratie
SMTP_HOST=smtp.strato.com
SMTP_PORT=587
# OF gebruik 465 voor SSL (zet dan SMTP_SECURE=true)
SMTP_USER=info@ai-group.nl
# OF: info@ai-group.nl (afhankelijk van je email account)
SMTP_PASS=Ptrck2025!

# Email adressen
CONTACT_EMAIL=info@ai-group.nl
FROM_EMAIL=info@ai-group.nl
```

2. **Strato Email Account:**
   - Log in op je Strato control panel
   - Ga naar Email Accounts
   - Maak een email account aan (bijv. noreply@ai-group.nl) of gebruik een bestaand account
   - Gebruik het volledige email adres als SMTP_USER
   - Gebruik het wachtwoord van het email account als SMTP_PASS

3. **Strato SMTP Instellingen:**
   - **SMTP Server**: smtp.strato.com
   - **Poort 587**: STARTTLS (SMTP_SECURE=false)
   - **Poort 465**: SSL/TLS (SMTP_SECURE=true)
   - Beide poorten werken, maar 587 wordt aanbevolen

## Optie 2: SendGrid (Alternatief voor productie)

1. **Account aanmaken op sendgrid.com**
2. **API Key genereren**
3. **Environment variables:**
```bash
SENDGRID_API_KEY=your-sendgrid-api-key
CONTACT_EMAIL=info@ai-group.nl
FROM_EMAIL=noreply@ai-group.nl
```

## Optie 3: Gmail (Voor development)

1. **Maak een .env.local bestand** in de root directory:
```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=info@ai-group.nl
FROM_EMAIL=noreply@ai-group.nl
```

2. **Gmail App Password aanmaken:**
   - Ga naar Google Account Settings
   - Security → 2-Step Verification (inschakelen)
   - App passwords → Generate app password
   - Kopieer het 16-karakter wachtwoord naar EMAIL_PASS

## Testen

Na setup van environment variables:
1. Restart de development server
2. Ga naar /contact
3. Vul het formulier in
4. Check je email voor bevestiging

## Troubleshooting

- **Strato SMTP**: 
  - Controleer of het email account bestaat in Strato control panel
  - Gebruik het volledige email adres (bijv. noreply@ai-group.nl) als SMTP_USER
  - Controleer of het wachtwoord correct is
  - Probeer poort 587 eerst, als dat niet werkt probeer 465
- **SendGrid**: Controleer API key permissions
- **Gmail**: Zorg dat 2FA aan staat en app password gebruikt
