# Riverside Cafe Website

## Project Overview
Modern, responsive website redesign for Riverside Cafe - a waterfront restaurant on the Indian River Lagoon in Vero Beach, Florida.

## Tech Stack
- HTML5 (semantic markup)
- CSS3 (custom properties, Flexbox, Grid)
- Vanilla JavaScript (no framework)
- Google Fonts (Playfair Display, Open Sans)
- Font Awesome icons

## Project Structure
```
riverside/
├── index.html              # Homepage (hero slideshow, highlights, atmosphere, events, CTA)
├── menu.html               # Menu page (7 categories, sticky nav, scroll-spy)
├── about.html              # About page (history, features, team, gallery)
├── events.html             # Events page (weekly lineup, upcoming, sports, specials)
├── gallery.html            # Photo gallery (filter tabs, lightbox, 18 items)
├── contact.html            # Contact page (map, form, hours, directions)
├── 404.html                # Custom error page
├── vercel.json             # Vercel deployment config (headers, caching)
├── netlify.toml            # Netlify deployment config (redirects, headers, caching)
├── css/
│   ├── variables.css       # Design tokens (colors, spacing, typography)
│   ├── reset.css           # CSS reset/normalize
│   ├── main.css            # Base styles, utilities, shared components
│   └── components/
│       ├── header.css      # Header & navigation
│       ├── hero.css        # Hero slideshow
│       ├── menu.css        # Menu page layout
│       ├── about.css       # About page layout
│       ├── events.css      # Events page layout
│       ├── gallery.css     # Gallery grid & lightbox
│       └── contact.css     # Contact form & details
├── js/
│   └── main.js             # All JS (nav, slideshow, scroll-spy, gallery, lightbox)
└── images/
    └── favicon.svg         # Site favicon
```

## Brand Colors
- Primary Orange: #f5581e
- Dark Blue: #082137
- Off-White: #FAFAFA
- Accent Red: #dd0000
- Gray: #E1E1E2

## Key Features
- Waterfront dining emphasis
- Free boat docking (unique selling point)
- Sports bar with 35 HD TVs
- Walk-in only (no reservations)
- Live entertainment (Friday/Saturday)
- Sunday Brunch with endless mimosas

## Contact Info
- Phone: 772.234.5550
- Email: info@riversidecafe.com
- Location: Indian River Lagoon, Vero Beach, FL
- Hours: Lunch 11am, Dinner 4pm, Sunday Brunch 10am-2pm

## Development
```bash
# Serve locally
npx serve

# Or use any static file server
python -m http.server 8000
```

## Conventions
- BEM-like class naming
- Mobile-first responsive design
- CSS custom properties for theming
- Semantic HTML5 elements
- Accessible markup (ARIA where needed)

## Deployment
```bash
# Deploy to Vercel (preferred)
vercel --prod

# Or deploy to Netlify
netlify deploy --prod
```

The `vercel.json` / `netlify.toml` configure:
- Clean URLs (drop .html extensions on Vercel)
- Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- Cache headers for static assets (CSS, JS, images)

## Current Status
All 12 phases complete. Site is production-ready with:
- 7 fully built pages (Home, Menu, About, Events, Gallery, Contact, 404)
- Responsive design (mobile-first, breakpoints at 639px and 1023px)
- Accessibility: skip-nav links, ARIA roles, semantic HTML, keyboard navigation
- SEO: meta descriptions, keywords, Open Graph tags, favicons on all pages
- Interactive features: hero slideshow, gallery lightbox with filtering, menu scroll-spy, fade-in animations
- Image placeholders ready for real photography
