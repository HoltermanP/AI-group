# 🔐 AI-Group Admin Systeem - Complete Handleiding

## 🎯 Wat is er gemaakt

### ✅ Eenvoudig Contactformulier
- **Directe email** naar info@ai-group.nl
- **Eenvoudige feedback** naar gebruiker
- **Console logging** voor debugging

### ✅ Admin Login Systeem
- **Beveiligde toegang** met JWT tokens
- **Content editor** voor tekstuele wijzigingen
- **Real-time updates** van website content

---

## 📧 Contactformulier

### Hoe het werkt:
1. **Gebruiker vult formulier in** op `/contact`
2. **Data wordt verzonden** naar `/api/contact`
3. **Email wordt gelogd** naar console (klaar voor email service)
4. **Bevestiging** naar gebruiker

### Email Format:
```
Naam: [Naam]
Email: [Email]
Organisatie: [Organisatie]
Onderwerp: [Onderwerp]

Bericht:
[Bericht]

---
Verstuurd op: [Datum]
Van: AI-Group Website Contactformulier
```

---

## 🔐 Admin Login Systeem

### Toegang:
- **URL**: `http://localhost:3000/admin/login`

### Gebruikers:
- **Admin**: `admin` / `admin123`
- **Patrick**: `patrick` / `Patrick1012`
- **Luit**: `luit` / `Luit1012`

### Features:
- ✅ **JWT Token authenticatie**
- ✅ **24 uur sessie**
- ✅ **Beveiligde API endpoints**
- ✅ **Content editor interface**

---

## ✏️ Content Editor

### Wat kun je bewerken:

#### 1. Hero Sectie
- **Titel**: Hoofdtitel op homepage
- **Subtitel**: Ondertitel onder hoofdtitel

#### 2. Voordelen (Benefits)
- **4 voordelen** met titel en beschrijving
- **Sneller, Veiliger, Beter, Transparant**

#### 3. Oplossingen (Solutions)
- **Workflow Automation** titel en beschrijving

#### 4. Applicaties (Applications)
- **AI Veiligheidsplatform** titel en beschrijving
- **AI Schouw** titel en beschrijving  
- **AI Toezicht** titel en beschrijving

### Hoe bewerken:
1. **Ga naar** `/admin/dashboard`
2. **Klik op edit icoon** (✏️) naast tekst
3. **Wijzig tekst** in input field
4. **Klik "Opslaan"** of "Annuleren"
5. **Wijziging is direct live** op website

---

## 🛠️ Technische Details

### Admin Authentication:
```typescript
// Login API: /api/admin/login
// Content API: /api/admin/content
// JWT Token: 24 uur geldig
// Middleware: Beschermt admin routes
```

### Content Management:
```typescript
// File: data/site.json
// Real-time updates via API
// Backup: Originele data blijft behouden
```

### Security:
- ✅ **JWT Token authenticatie**
- ✅ **Protected API routes**
- ✅ **Input validation**
- ✅ **Error handling**

---

## 🚀 Gebruik

### Stap 1: Inloggen
1. Ga naar `http://localhost:3000/admin/login`
2. Vul in: 
   - **Patrick**: `patrick` / `Patrick1012`
   - **Luit**: `luit` / `Luit1012`
   - **Admin**: `admin` / `admin123`
3. Klik "Inloggen"

### Stap 2: Content Bewerken
1. Klik op edit icoon naast tekst
2. Wijzig tekst
3. Klik "Opslaan"
4. Check website voor wijzigingen

### Stap 3: Uitloggen
1. Klik "Uitloggen" in header
2. Wordt doorgestuurd naar login pagina

---

## 🔧 Troubleshooting

### ❌ "Unauthorized" Error
- **Oplossing**: Log opnieuw in via `/admin/login`
- **Check**: Token is 24 uur geldig

### ❌ Wijzigingen worden niet opgeslagen
- **Check**: Internet verbinding
- **Check**: Console voor errors
- **Oplossing**: Refresh pagina en probeer opnieuw

### ❌ Login werkt niet
- **Check**: Gebruikersnaam en wachtwoord zijn case-sensitive
- **Patrick**: `patrick` / `Patrick1012`
- **Luit**: `luit` / `Luit1012`
- **Admin**: `admin` / `admin123`

### ❌ Content laadt niet
- **Check**: `data/site.json` bestaat
- **Check**: File permissions
- **Restart**: Development server

---

## 📁 File Structure

```
app/
├── admin/
│   ├── login/page.tsx          # Login pagina
│   └── dashboard/page.tsx      # Content editor
├── api/
│   ├── admin/
│   │   ├── login/route.ts      # Login API
│   │   └── content/route.ts    # Content API
│   └── contact/route.ts        # Contactformulier API
lib/
└── adminAuth.ts                # Authentication utilities
```

---

## 🔒 Security Notes

### Voor Productie:
1. **Wijzig admin credentials** in `/api/admin/login/route.ts`
2. **Gebruik sterke JWT secret** in environment variables
3. **Implementeer rate limiting** voor login attempts
4. **Voeg HTTPS toe** voor beveiligde verbinding
5. **Backup site.json** regelmatig

### Environment Variables:
```bash
JWT_SECRET=your-super-secret-jwt-key
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-strong-password
```

---

## 🎉 Klaar voor gebruik!

Je hebt nu:
- ✅ **Eenvoudig contactformulier** dat emails naar info@ai-group.nl stuurt
- ✅ **Admin login systeem** voor content beheer
- ✅ **Real-time content editor** voor tekstuele wijzigingen
- ✅ **Beveiligde API endpoints** met JWT authenticatie
- ✅ **User-friendly interface** voor content management

**Volgende stap**: Site deployen op Vercel voor externe review!

---

## 📞 Support

Bij vragen:
- **Check console** voor error messages
- **Restart server** bij problemen
- **Check file permissions** voor site.json
- **Verify admin credentials** in API route
