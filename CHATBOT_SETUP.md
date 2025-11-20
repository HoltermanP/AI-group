# 🤖 Chatbot AI Setup - Complete Handleiding

## 🎯 Wat is er gemaakt

Een intelligente chatbot die AI gebruikt voor snelle antwoorden op vragen over AI-Group. De chatbot:
- ✅ Gebruikt OpenAI API voor intelligente antwoorden
- ✅ Heeft kennis over het bedrijf, oplossingen en diensten
- ✅ Geeft snelle antwoorden
- ✅ Floating button rechts onderin het scherm
- ✅ Professionele chat interface

---

## 🔑 Stap 1: OpenAI API Key Aanmaken

### 1.1 Account Aanmaken
1. Ga naar [platform.openai.com](https://platform.openai.com)
2. Maak een account aan of log in
3. Ga naar **API Keys** in het menu

### 1.2 API Key Genereren
1. Klik op **"Create new secret key"**
2. Geef een naam: `AI-Group Chatbot`
3. **⚠️ BELANGRIJK**: Kopieer de API key direct (je ziet hem maar 1x!)
4. Bewaar hem veilig

---

## ⚙️ Stap 2: Environment Variable Instellen

### 2.1 .env.local Bestand Maken
Maak een nieuw bestand `.env.local` in je project root (of voeg toe aan bestaand bestand):

```bash
# OpenAI Configuration
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 2.2 Vervang de API Key
- Vervang `sk-xxxxxxxx...` met jouw echte OpenAI API key
- Zorg dat het bestand `.env.local` heet (niet `.env`)

---

## 🚀 Stap 3: Testen

### 3.1 Development Server Restarten
```bash
# Stop de huidige server (Ctrl+C)
# Start opnieuw
npm run dev
```

### 3.2 Chatbot Testen
1. Ga naar de website
2. Klik op het chat icoon rechts onderin
3. Stel een vraag zoals:
   - "Wie zijn jullie?"
   - "Wat kunnen jullie voor mij betekenen?"
   - "Hoe snel zijn jullie?"
   - "Wat zijn jullie cases?"

---

## 💡 Features

### Wat de chatbot weet:
- ✅ Over het bedrijf (Luit de Jong en Patrick Holterman)
- ✅ Over AI-agents (meer agents dan personeelsleden, 24/7)
- ✅ Over snelheid (48u PoC, 72u MVP, 4 weken livegang versie 1.0)
- ✅ Over oplossingen (alle sector-specifieke applicaties)
- ✅ Over cases (Tax & Wealth HUB, veiligheidsconcept, etc.)
- ✅ Over contactgegevens
- ✅ Over kosten en proces

### AI Model:
- **Model**: `gpt-4o-mini` (snel en kostenefficiënt)
- **Max tokens**: 300 (korte, snelle antwoorden)
- **Temperature**: 0.7 (balans tussen creativiteit en consistentie)

---

## 🔧 Aanpassingen

### Chatbot Context Aanpassen
Bewerk `app/api/chatbot/route.ts` en pas de `systemPrompt` aan om de kennis van de chatbot te wijzigen.

### Styling Aanpassen
Bewerk `components/Chatbot.tsx` om de styling, kleuren of layout aan te passen.

### Model Wijzigen
In `app/api/chatbot/route.ts` kun je het model wijzigen:
- `gpt-4o-mini` - Snel en goedkoop (aanbevolen)
- `gpt-4o` - Krachtiger maar duurder
- `gpt-3.5-turbo` - Alternatief

---

## 💰 Kosten

OpenAI API kosten (ongeveer):
- **gpt-4o-mini**: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- Voor een chatbot met korte antwoorden: zeer laag verbruik
- Schatting: < €10 per maand voor normaal gebruik

---

## 🛡️ Fallback

Als er geen API key is ingesteld, geeft de chatbot een vriendelijke fallback message met contactgegevens. De chatbot werkt dus altijd, ook zonder API key (maar dan zonder AI).

---

## 📝 Notities

- De chatbot gebruikt de laatste 10 berichten voor context
- Antwoorden zijn beperkt tot 300 tokens voor snelheid
- Alle antwoorden zijn in het Nederlands
- De chatbot is vriendelijk en professioneel

