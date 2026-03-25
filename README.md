# AI-Group Website

Een moderne, professionele website voor AI-Group - specialist in AI-applicaties voor de infra- en energiesector.

## 🚀 Features

- **Next.js 14** met App Router
- **TypeScript** voor type safety
- **Tailwind CSS** voor styling
- **Responsive design** voor alle devices
- **Dark mode support**
- **SEO-optimized** met metadata
- **Content-driven** via JSON configuratie

## 📄 Pagina's

- **Home** - Hero, voordelen, oplossingen, proces, cases, CTA
- **Oplossingen** - Overzicht en detailpagina's voor alle AI-oplossingen
- **Platform** - AI Platform & Dashboard uitleg
- **Cases** - Succesvolle implementaties en resultaten
- **Contact** - Contactformulier en bedrijfsinformatie

## 🛠️ Installatie

1. **Dependencies installeren:**
   ```bash
   npm install
   ```

2. **Development server starten:**
   ```bash
   npm run dev
   ```

3. **Website bekijken:**
   Open [http://localhost:3000](http://localhost:3000) in je browser

## 📁 Project structuur

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── oplossingen/      # Solutions pages
│   ├── platform/         # Platform page
│   ├── cases/            # Cases pages
│   └── contact/          # Contact page
├── components/            # React components
├── data/                 # Content configuration
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎨 Customization

### Content wijzigen
Alle content staat in `data/site.json`. Wijzig hier:
- Teksten en copy
- Contactgegevens
- Oplossingen en cases
- Navigatie

### Styling aanpassen
- Kleuren: `tailwind.config.js`
- Components: `app/globals.css`
- Custom styles: voeg toe aan componenten

### Nieuwe pagina's
1. Maak nieuwe route in `app/`
2. Voeg toe aan navigatie in `data/site.json`
3. Update metadata voor SEO

## 🚀 Deployment

### Vercel (aanbevolen)
1. Push naar GitHub
2. Import project in Vercel
3. Deploy automatisch

### Andere platforms
```bash
npm run build
npm start
```

## 📞 Contact

- **E-mail:** info@ai-group.nl
- **Telefoon:** 06-30985351
- **Locatie:** Enschede/Zwolle, Nederland

## 📄 Licentie

© 2026 AI-Group. Alle rechten voorbehouden.
