# Progetto: The Mariotti — themariotti.com

## Overview
Sito portfolio fotografico per Matteo Mariotti, fotografo lifestyle italiano.
Specializzato in bianco e nero con stile naïf. Focus su tradizioni italiane,
costiera, cucina e dettagli della vita quotidiana italiana.
30+ anni di esperienza. Basato in Italia.

## Tech Stack
- Next.js 16 App Router + TypeScript + Tailwind CSS
- Vercel hosting (autodeploy da GitHub)
- Cloudflare R2 per tutte le immagini
- Resend per email form contatto
- Lucide React per icone (usate con parsimonia)

## Design System — CRITICO

Questo sito NON usa il design system gold/luxury di Italy Locations.
Ha un design su misura: minimale, fotografico, elegante. Le foto sono le protagoniste.

### Palette
```
Sfondo scuro:    #0a0a0a     (nero caldo)
Sfondo chiaro:   #f5f3ee     (avorio/carta)
Testo su scuro:  #e8e6e1     (bianco caldo)
Testo su chiaro: #1a1a1a     (nero morbido)
Muted su scuro:  rgba(255,255,255,0.5)
Muted su chiaro: rgba(0,0,0,0.45)
Divider scuro:   rgba(255,255,255,0.15)
Divider chiaro:  rgba(0,0,0,0.15)
```

NESSUN colore accento. Solo B&N e avorio. Il colore viene dalle foto.

### Font (Google Fonts)
```
Titoli/Citazioni: Cormorant Garamond (serif, peso 400/500, corsivo per citazioni)
Body/UI:          DM Sans (sans-serif, peso 400/500)
```

### Stile Tipografico
- Label di sezione: DM Sans, 10-11px, tracking 5px, uppercase, colore muted
- Titoli sezione: Cormorant Garamond, 22-32px, corsivo (font-style: italic)
- Body text: DM Sans, 13px, line-height 1.7, colore muted
- Divider: linea 40px, 1px, colore divider, margin 20px 0
- CTA bottoni: DM Sans, 12px, tracking 3px, uppercase, border 1px, padding 12px 32px

### Layout
- Sezioni alternate SCURO (#0a0a0a) / CHIARO (#f5f3ee) per dare ritmo
- Foto sempre protagoniste — testi minimi, mai più di 2-3 righe
- Molto whitespace/blackspace
- Nessun effetto decorativo: NO glow, NO gradient colorati, NO ombre, NO animazioni appariscenti
- Navigazione quasi invisibile, si fonde con lo sfondo
- Mobile first, breakpoint: sm:640 md:768 lg:1024

### Logo
- Monogramma "MM" in Cormorant Garamond, font-size 28px, tracking 4px
- Sotto: "Matteo Mariotti" in DM Sans, 12px, tracking 3px, uppercase
- Versione compatta: solo "MM" (per favicon e mobile)
- Colore: bianco su scuro, nero su chiaro

## Struttura Pagine (URL SEO-optimized)

```
/                                    → Homepage
/italian-lifestyle-photography       → Portfolio principale (tutte le categorie)
/italian-traditions-photography      → Gallery: Traditions
/italian-coastline-photography       → Gallery: Coastline
/italian-cuisine-photography         → Gallery: Cuisine
/italian-details-photography         → Gallery: Details
/about-photographer                  → About Matteo
/contact-photographer                → Contact form
/privacy-policy                      → Privacy policy
/cookie-policy                       → Cookie policy
/blog                                → Blog (futuro, post-launch)
/blog/[slug]                         → Articoli singoli
```

## SEO — Strategia Completa

### Title Tags
```
Home:       "Matteo Mariotti — Italian Lifestyle Photographer | Black & White Photography"
Portfolio:  "Italian Lifestyle Photography | Matteo Mariotti Photographer"
Traditions: "Italian Traditions Photography | Black & White by Matteo Mariotti"
Coastline:  "Italian Coastline Photography | Amalfi, Positano, Capri | Matteo Mariotti"
Cuisine:    "Italian Cuisine Photography | Food & Wine Culture | Matteo Mariotti"
Details:    "Italian Details Photography | Vintage Cars, Architecture | Matteo Mariotti"
About:      "About Matteo Mariotti — Lifestyle Photographer Based in Italy"
Contact:    "Contact Matteo Mariotti | Italian Lifestyle Photographer"
```

### Meta Descriptions (max 155 char)
```
Home:       "Italian lifestyle photographer Matteo Mariotti captures the soul of Italy in black and white. Traditions, coastline, cuisine and everyday beauty."
Portfolio:  "Explore Matteo Mariotti's portfolio of Italian lifestyle photography. Black and white images celebrating traditions, coastline and cuisine."
Traditions: "Italian traditions captured in black and white by Matteo Mariotti. Fishing, winemaking, craftsmanship and the rituals of everyday Italian life."
Coastline:  "The Italian coastline through Matteo Mariotti's lens. Positano, Amalfi Coast and Capri in stunning black and white photography."
Cuisine:    "Italian cuisine and food culture photography by Matteo Mariotti. From handmade pasta to harvest, the authentic flavors of Italy."
Details:    "The beautiful details of Italian life. Vintage cars, architecture, craftsmanship and hidden gems captured by Matteo Mariotti."
About:      "Meet Matteo Mariotti, an Italian lifestyle photographer with over 30 years of experience capturing Italy's cultural heritage in black and white."
Contact:    "Get in touch with Matteo Mariotti for photography collaborations, commissions and editorial work across Italy."
```

### Keyword Strategy
```
Primary keywords:
- italian lifestyle photographer
- black and white photographer italy
- italian lifestyle photography

Secondary (long-tail):
- black and white lifestyle photography italy
- italian traditions photography
- italian cuisine photography
- amalfi coast photographer black white
- puglia photographer lifestyle
- italian cultural photography
- fotografo lifestyle italia
- fotografo bianco e nero italia
```

### Schema.org (nel layout.tsx)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "additionalType": "http://schema.org/Photographer",
  "name": "Matteo Mariotti",
  "description": "Italian lifestyle photographer specializing in black and white photography. Over 30 years capturing traditions, coastline, cuisine and everyday Italian beauty.",
  "url": "https://themariotti.com",
  "telephone": "+393356232668",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IT"
  },
  "areaServed": ["Italy", "Puglia", "Amalfi Coast", "Sicily", "Tuscany"],
  "knowsAbout": ["Lifestyle Photography", "Black and White Photography", "Italian Culture", "Italian Traditions", "Food Photography"],
  "availableLanguage": ["English", "Italian"],
  "sameAs": []
}
```

### Open Graph Image
- 1200x630px
- Una delle foto più iconiche (pescatore con polpi o Positano con corda)
- Con logo MM sovrapposto in basso a destra
- Caricata su R2: themariotti/og-image.jpg

### Alt Text Strategy
Ogni immagine deve avere alt text descrittivo e keyword-rich:
- ✅ "Black and white photograph of fisherman hanging octopus to dry in Italian harbor"
- ✅ "Positano coastline photographed in black and white by Matteo Mariotti"
- ❌ "IMG_3151" o "photo1" o alt vuoto

### Redirect 301 (da WordPress)
```
/air/                    → /italian-lifestyle-photography
/contact/                → /contact-photographer
/ (vecchia homepage WP)  → / (nuova homepage, nessun redirect)
```

## Lingue
- EN + IT con LanguageContext (come Italy Locations)
- Default: EN
- Switch EN|IT nella navbar
- Rilevamento automatico lingua browser
- Salvataggio preferenza in localStorage

## Foto su R2

Bucket: themariotti
Struttura:
```
themariotti/
├── traditions/
│   ├── fisherman-octopus.jpg          (IMG_3151)
│   ├── octopus-detail.jpg             (photography9)
│   ├── fisherman-nets.jpg             (IMG_5081)
│   ├── grape-harvest-crates.jpg       (IMG_6338)
│   ├── wine-press-group.jpg           (photography23)
│   ├── wine-press-portrait.jpg        (photography15)
│   ├── sicilian-cart-wheel.jpg        (IMG_5252)
│   └── alpine-cow-mountains.jpg       (IMG_3009)
├── coastline/
│   ├── positano-striped-umbrellas.jpg (IMG_4783)
│   ├── positano-nautical-rope.jpg     (IMG_4812)
│   ├── positano-color.jpg             (IMG_4797)
│   ├── capri-boat-fontelina.jpg       (IMG_4977)
│   ├── storm-cloud-sea-rays.jpg       (IMG_2839)
│   └── sculptural-cloud-bw.jpg        (IMG_4274)
├── cuisine/
│   ├── octopus-menu-blackboard.jpg    (photography14)
│   ├── handmade-ravioli.jpg           (IMG_7209)
│   └── mushroom-sign-forest.jpg       (photography5)
├── details/
│   ├── ferrari-spider-vintage.jpg     (photography11)
│   ├── spoke-wheel-classic-car.jpg    (IMG_5071)
│   ├── trulli-rooftops-puglia.jpg     (photography22)
│   ├── friends-umbrella-puglia.jpg    (IMG_5347)
│   ├── masseria-gate-puglia.jpg       (IMG_5577)
│   ├── rusty-garage-sign.jpg          (IMG_5567)
│   └── child-toy-camera.jpg           (IMG_6473)
├── about/
│   └── matteo-couple-sea.jpg          (IMG_4516)
├── logo/
│   ├── mm-logo-white.svg
│   └── mm-logo-dark.svg
└── og-image.jpg
```

Usare SEMPRE next/image:
- Hero images: priority={true}, quality={90}
- Gallery images: loading="lazy", quality={85}
- Thumbnails: loading="lazy", quality={80}

## Componenti

### Navbar
- Logo MM a sinistra (link a /)
- Nav links al centro: Portfolio, About, Contact
- Lang switch EN|IT a destra
- Trasparente su hero, sfondo solido su scroll (sticky)
- Su mobile: hamburger menu

### Footer
- Monogramma MM centrato
- "Matteo Mariotti" sotto
- © 2026 All rights reserved
- Link: Privacy Policy, Cookie Policy
- Sfondo scuro

### PhotoGrid
- Griglia responsive per gallery di foto
- Desktop: 3 colonne, Mobile: 1-2 colonne
- Gap minimo (4px) per effetto "muro di foto"
- Click apre LightboxModal

### CategoryCard
- Foto come sfondo con overlay scuro leggero
- Nome categoria centrato in bianco
- Hover: overlay si alleggerisce
- Link alla pagina gallery dedicata

### LightboxModal
- Visualizzazione foto a schermo intero su sfondo nero
- Navigazione frecce sx/dx
- Close con X o click fuori
- Swipe su mobile
- Tastiera: ←→ per navigare, ESC per chiudere

### ContactForm
- Campi: Nome, Email, Messaggio
- Honeypot field nascosto
- Cloudflare Turnstile
- Doppia email: a Matteo + conferma automatica al mittente
- Stile minimal: input con border-bottom, no box

## Sicurezza
- Turnstile sul form contatto
- Honeypot field
- .env.local MAI committato
- API key MAI esposte con NEXT_PUBLIC_

## Performance Target
- PageSpeed Mobile > 85
- PageSpeed Desktop > 95
- LCP < 2.5s
- CLS < 0.1
- Tutte le immagini via next/image
- Font via next/font (zero layout shift)
- Lazy loading per tutto tranne hero

## Deploy
- Git push su main → Vercel autodeploy (~2 min)
- Branch per feature grandi
- Vercel: aggiungere tutte le env variables

## Comandi
```bash
npm run dev          # localhost:3000
npm run build        # verifica errori TypeScript
git add . && git commit -m "feat: descrizione" && git push
```
