# Template Components

Herbruikbare template componenten voor consistente pagina layouts.

## Beschikbare Templates

### HeroTemplate
Hero sectie met titel, subtitle en call-to-action buttons.

```tsx
import { HeroTemplate } from '@/components/templates'

<HeroTemplate
  title="Uw titel hier"
  subtitle="Uw subtitle hier"
  primaryAction={{ label: "Start nu", href: "/contact" }}
  secondaryAction={{ label: "Meer info", href: "/platform" }}
  background="gradient" // 'default' | 'gradient' | 'dark'
/>
```

### FeatureGridTemplate
Grid met feature cards.

```tsx
import { FeatureGridTemplate } from '@/components/templates'

<FeatureGridTemplate
  title="Waarom kiezen voor ons?"
  subtitle="Ontdek de voordelen"
  features={[
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "Snel",
      description: "Binnen 48 uur resultaat"
    }
  ]}
  columns={3} // 2 | 3 | 4
/>
```

### CTATemplate
Call-to-action sectie.

```tsx
import { CTATemplate } from '@/components/templates'

<CTATemplate
  title="Klaar om te beginnen?"
  description="Neem vandaag nog contact op"
  primaryAction={{ label: "Contact", href: "/contact" }}
  variant="gradient" // 'default' | 'gradient' | 'dark'
/>
```

### StatsTemplate
Statistieken grid.

```tsx
import { StatsTemplate } from '@/components/templates'

<StatsTemplate
  stats={[
    { value: "48 uur", label: "Proof of Concept" },
    { value: "72 uur", label: "MVP" }
  ]}
  columns={4} // 2 | 3 | 4
/>
```

### TestimonialTemplate
Testimonials sectie.

```tsx
import { TestimonialTemplate } from '@/components/templates'

<TestimonialTemplate
  title="Wat klanten zeggen"
  subtitle="Echte verhalen van echte klanten"
  testimonials={[
    {
      content: "Geweldige service!",
      author: "Jan Jansen",
      role: "CEO",
      company: "Bedrijf BV",
      rating: 5
    }
  ]}
  variant="grid" // 'default' | 'carousel' | 'grid'
/>
```

## Voordelen

- ✅ Herbruikbaarheid
- ✅ Consistentie
- ✅ Type-safe met TypeScript
- ✅ Volledig aanpasbaar
- ✅ Dark mode support
- ✅ Responsive design


