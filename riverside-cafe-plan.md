# Riverside Cafe Website Redesign Plan

## Project Overview
Modernize the Riverside Cafe website (Vero Beach, FL waterfront restaurant) with responsive design, accessibility, and maintainable code while preserving the historic waterfront character and sports bar atmosphere.

---

## Current Site Analysis

### Brand Colors (from existing site)
- **Primary Orange:** #f5581e
- **Dark Blue:** #082137
- **Off-White:** #FAFAFA
- **Accent Red:** #dd0000
- **Gray:** #E1E1E2

### Current Navigation
- Home | Menu | Restaurant | Contact | Calendar | Restaurant Gallery

### Owners
- David and Ellen Lane

### Key Features to Preserve
- Waterfront/Indian River Lagoon location emphasis
- Boat docking amenities (free guest docking, monthly rentals)
- Sports bar with 35 HD TVs, BOSE sound, NFL/College packages
- Bar: Draft beer chilled to 33 degrees, professional mixologists
- Live entertainment/events calendar
- Walk-in seating only (no reservations)

### Contact Info
- **Phone:** 772.234.5550
- **Email:** info@riversidecafe.com
- **Location:** Indian River Lagoon, Vero Beach, Florida
- **Hours:** Lunch @ 11am, Dinner @ 4pm, Sunday Brunch 10am-2pm
- **Google Maps:** https://goo.gl/maps/ifSVy84NvJL2

### Current Menu Items (from site)
- Oysters Rockefeller (spinach, Italian cheeses)
- House salad (grilled chicken, feta, honey balsamic)
- Famous Onion Rings
- Yellowfin Tuna Nachos (wasabi cream)
- Grilled Skirt Steak (onions, mushrooms)
- Catch of the Day (grilled, blackened, broiled, or fried)
- Fish and Chips
- Fish/Chicken Tacos
- Greek Salad
- Grouper Reuben Sandwich
- Grilled Mahi (tomatoes, fresh mozzarella)
- Fresh Mussels (white wine sauce)
- Desserts: Crème Brûlée, Key Lime Pie, Chocolate Cake

### Weekly Events Schedule
- **Happy Hour:** 4-7pm daily
- **Friday Night:** Live music 5:30-8:30pm, DJ 10pm-close
- **Saturday Night:** DJ 10pm-close
- **Sunday Brunch:** All You Can Eat Buffet with Endless Mimosas & Bloody Marys (10am-2pm)

### Current Gallery Structure
- General Gallery: 7 images (sunsets, scenic)
- Staff Gallery: 11 images (bartenders, team)
- Cuisine Gallery: 18 images (dishes by Austin Russell Photography)
- Desktop Wallpapers: 8 widescreen backgrounds

---

## Tech Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **Vanilla JavaScript** - No framework dependencies
- **Google Fonts** - Typography
- **Font Awesome** - Icons

---

## Phase 1: Discovery & Setup

### Tasks:
1. [ ] Set up project structure:
```
riverside-cafe/
├── index.html
├── menu.html
├── about.html (was "Restaurant")
├── contact.html
├── events.html (was "Calendar")
├── gallery.html
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── main.css
│   └── components/
├── js/
│   └── main.js
└── images/
```
2. [ ] Define CSS variables using existing brand colors
3. [ ] Initialize git repo
4. [ ] Create CLAUDE.md with project context
5. [ ] Source high-quality waterfront/restaurant images

### Deliverable: Project skeleton with design system

---

## Phase 2: Design System & Header

### CSS Variables to Define:
```css
:root {
  --color-primary: #f5581e;      /* Orange */
  --color-secondary: #082137;    /* Dark Blue */
  --color-background: #FAFAFA;   /* Off-White */
  --color-accent: #dd0000;       /* Red */
  --color-neutral: #E1E1E2;      /* Gray */
}
```

### Tasks:
1. [ ] Create CSS reset and variables files
2. [ ] Select fonts (consider: Playfair Display for headings, Open Sans for body)
3. [ ] Build responsive header with:
   - Logo (left)
   - Nav: Home | Menu | About | Events | Gallery | Contact
   - Mobile hamburger menu
4. [ ] Build mobile menu overlay
5. [ ] Test responsive breakpoints

### Deliverable: Working responsive header

---

## Phase 3: Homepage Hero

### Tasks:
1. [ ] Hero section with waterfront sunset imagery
2. [ ] Headline: "Waterfront Dining on the Indian River"
3. [ ] Tagline: "Fresh seafood, scenic views, and the best sports experience in Vero Beach"
4. [ ] CTA buttons: "View Menu" | "Get Directions"
5. [ ] Image slideshow (CSS-based transitions)
6. [ ] Optimize images (WebP, lazy loading)

### Deliverable: Responsive hero section

---

## Phase 4: Homepage Content Sections

### Sections to Build:
1. [ ] **Quick Info Bar**
   - Hours: Lunch 11am | Dinner 4pm | Sunday Brunch 10am-2pm
   - Phone: 772.234.5550
   - Location badge: "On the Indian River Lagoon"

2. [ ] **Featured Highlights** (3-column grid)
   - Fresh Seafood (Mahi, fish entrees)
   - Waterfront Views (sunset dining)
   - Sports Central (35 HD TVs, NFL packages)

3. [ ] **Boater Amenities Section**
   - Free guest docking
   - Monthly dock rentals available
   - "Dock & Dine" messaging

4. [ ] **Atmosphere Gallery** (4-6 photos)
   - Interior, exterior, waterfront, food shots

5. [ ] **Upcoming Events Preview**
   - Pull 2-3 upcoming events from calendar
   - Link to full events page

6. [ ] **CTA Section**
   - "Visit us today - walk-ins welcome"

### Deliverable: Complete homepage

---

## Phase 5: Footer

### Content:
1. [ ] Logo
2. [ ] Contact info (phone, email, address)
3. [ ] Hours of operation
4. [ ] Quick links (Menu, Events, Gallery)
5. [ ] "Free Boat Docking" callout
6. [ ] Copyright notice

### Deliverable: Responsive footer on all pages

---

## Phase 6: Menu Page

**Note:** Current site uses slideshow format. New design should use structured layout.

### Menu Categories to Include:
- Appetizers (Oysters Rockefeller, Famous Onion Rings, Tuna Nachos, Mussels)
- Salads (House Salad, Greek Salad)
- Sandwiches (Grouper Reuben, Fish Tacos, Chicken Tacos)
- Fresh Catch (Catch of the Day - grilled/blackened/broiled/fried options)
- Seafood Entrees (Grilled Mahi, Fish and Chips)
- Steaks (Grilled Skirt Steak)
- Desserts (Crème Brûlée, Key Lime Pie, Chocolate Cake)

### Tasks:
1. [ ] Design structured menu layout with category sections
2. [ ] Include item descriptions from current site
3. [ ] Get current prices from client (not on website)
4. [ ] Add high-quality food photos from cuisine gallery
5. [ ] Dietary indicators (GF, V) if applicable
6. [ ] Link to downloadable PDF menu
7. [ ] Mobile-optimized typography and layout

### Deliverable: Complete menu page

---

## Phase 7: About Page (Restaurant)

### Content Sections:
1. [ ] Hero with waterfront/sunset image
2. [ ] Welcome message from owners David and Ellen Lane
3. [ ] History/story of Riverside Cafe on Indian River Lagoon
4. [ ] "What We're Known For" features:
   - **Cuisine:** "From comfy finger foods and classic sandwiches to intimate semi-formal entrées of fresh fish and steaks"
   - **Bar:** Premier bar with 33-degree draft beer, professional mixologists
   - **Views:** Spectacular sunset vistas across the Indian River Lagoon
   - **Sports:** 35 HD TVs with BOSE sound, Direct TV NFL/College packages
   - **Boating:** Free guest docking, monthly rentals available
5. [ ] Staff highlights (optional - photos available)
6. [ ] Photo gallery integration

### Deliverable: Complete about page

---

## Phase 8: Events/Calendar Page

### Recurring Events to Highlight:
- **Happy Hour:** 4-7pm daily (drink specials)
- **Friday Night:** Live music 5:30-8:30pm + DJ 10pm-close
- **Saturday Night:** DJ 10pm-close
- **Sunday Brunch:** All You Can Eat Buffet with Endless Mimosas & Bloody Marys

### Tasks:
1. [ ] Weekly schedule section (recurring events)
2. [ ] Monthly calendar or list view for special events
3. [ ] Event cards with:
   - Date/time
   - Performer name (bands, DJs)
   - Event type (live music, DJ, special)
4. [ ] Sports viewing section (NFL, College Football packages)
5. [ ] Special events callouts (Super Bowl, holidays)
6. [ ] "Private events" inquiry CTA if applicable

### Deliverable: Complete events page

---

## Phase 9: Gallery Page

### Gallery Categories (matching current structure):
- **Scenic/General:** Sunsets, waterfront views, exterior (7+ images)
- **Staff:** Team photos, bartenders (11+ images)
- **Cuisine:** Food photography (18+ images, Austin Russell Photography)

### Tasks:
1. [ ] Responsive image grid with filtering by category
2. [ ] Lightbox functionality with navigation
3. [ ] Category tabs or filter buttons
4. [ ] Lazy loading for performance
5. [ ] Alt text for accessibility
6. [ ] Optional: Desktop wallpaper downloads section

### Deliverable: Complete gallery page

---

## Phase 10: Contact Page

### Content:
1. [ ] Large embedded Google Map
2. [ ] Address: Indian River Lagoon, Vero Beach, FL (get exact address)
3. [ ] Phone: 772.234.5550 (click-to-call)
4. [ ] Email: info@riversidecafe.com
5. [ ] Hours section (detailed)
6. [ ] Directions info (by car, by boat)
7. [ ] Parking information
8. [ ] Contact form (optional)

### Deliverable: Complete contact page

---

## Phase 11: Polish & Optimization

### Tasks:
1. [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
2. [ ] Mobile audit (320px to 1440px+)
3. [ ] Accessibility audit (WCAG 2.1 AA)
4. [ ] Performance optimization (Lighthouse score 90+)
5. [ ] SEO meta tags and Open Graph
6. [ ] Favicon and touch icons
7. [ ] 404 error page

### Deliverable: Production-ready website

---

## Phase 12: Deployment

### Tasks:
1. [ ] Push to GitHub
2. [ ] Deploy to Vercel/Netlify
3. [ ] Configure custom domain
4. [ ] SSL verification
5. [ ] Final live testing
6. [ ] Client handoff documentation

### Deliverable: Live website

---

## Content Needed from Client

### Already Available from Current Site:
- [x] Brand colors (orange, dark blue, off-white)
- [x] Contact info (phone, email)
- [x] Hours of operation
- [x] Menu items with descriptions
- [x] Gallery images (36+ photos available)
- [x] Events/entertainment schedule structure
- [x] Owner names (David and Ellen Lane)
- [x] Google Maps link

### Still Needed:
- [ ] High-resolution logo (SVG preferred, or extract from site)
- [ ] Menu prices (not displayed on current site)
- [ ] Exact street address (for footer/contact)
- [ ] Social media links (if any exist)
- [ ] Any additional history/story content
- [ ] Approval on design direction
- [ ] Access to original gallery images (higher resolution if available)

---

## Verification Checklist

Before marking complete:
- [ ] All pages render correctly on mobile/tablet/desktop
- [ ] Navigation works on all pages
- [ ] All links functional (no 404s)
- [ ] Images optimized and loading
- [ ] Contact info accurate
- [ ] Lighthouse performance score 90+
- [ ] Lighthouse accessibility score 90+
- [ ] Forms working (if applicable)
- [ ] Favicon displays correctly

---

## Notes

- Current site uses ColdFusion (.cfm) with query string routing - new site will use clean URLs
- Menu currently displayed as slideshow - improve with structured, scannable layout
- Emphasize boat docking as unique differentiator ("Dock & Dine")
- Sports bar aspect important - don't lose this in redesign (35 TVs is a major feature)
- Walk-in only policy should be prominent (no reservations)
- Sunday Brunch with Endless Mimosas is a signature offering - feature prominently
- Professional food photography already exists (Austin Russell Photography)
- Staff photos available - consider featuring team personality
- Happy Hour (4-7pm daily) should be easy to find
