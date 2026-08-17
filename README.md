# Maktub Engineering & General Supply Limited

A modern, high-performance web platform for **Maktub Engineering & General Supply Limited** — a Zambian-owned leader in integrated engineering solutions, civil construction, heavy equipment supplies, and green energy installations.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Components & Client Component architecture)
- **UI & View Layer:** React 19
- **Styling:** Centralized Modern Design System in `styles.css` (CSS Custom Properties, Glassmorphism, Fluid Typography with `clamp()`)
- **Graphics & Interactivity:** HTML5 Canvas API (Hardware-accelerated reactive lattice mesh), CSS Keyframe Animations
- **Icons:** [Tabler Icons](https://tabler.io/icons)
- **SEO & Structured Data:** Built-in OpenGraph, Twitter Cards, Schema.org JSON-LD, Dynamic `sitemap.js`, and `robots.js`

---

## 📁 Repository Structure

```
├── app/                              # Next.js App Router Pages & Metadata
│   ├── layout.js                     # Root layout (Fonts, Meta, Theme Script, Layout Shell)
│   ├── page.js                       # Homepage (Hero, Stats, Services, Visual Storytelling, CTAs)
│   ├── about/page.js                 # About Us (Company Timeline, Values, Leadership Team)
│   ├── services/page.js              # Comprehensive Engineering & Supply Services
│   ├── green-energy/page.js          # Green Energy & Solar Sustainability Division
│   ├── credentials/page.js           # Legal, EIZ, NCC Grade 5 & MOD Compliance Verification
│   ├── contact/page.js               # Contact Page & Interactive Inquiry Form
│   ├── sitemap.js                    # Auto-generated XML Sitemap
│   └── robots.js                     # Search Engine Directives
│
├── components/                       # Modular React UI Components
│   ├── Navbar.js                     # Dynamic header (Transparent on hero -> Frosted on scroll)
│   ├── Footer.js                     # Footer with regulatory numbers, quick links & Theme toggle
│   ├── InteractiveMesh.js            # Reactive particle lattice mesh (Mouse & Touch interactive)
│   ├── HeroSection.js                # Multi-video background cycling with anti-download security
│   ├── ThemeToggle.js                # Persistent Dark / Light Mode Switcher
│   ├── ScrollReveal.js               # IntersectionObserver scroll trigger animator
│   ├── StatsBar.js                   # Trust metrics and company operational statistics
│   ├── ServicesCarousel.js           # Infinite looping service cards marquee
│   ├── CategoryCardCarousel.js       # Media gallery slider for service category cards
│   └── ContactForm.js                # Form with input validation and feedback states
│
├── lib/                              # Shared Utilities & Configs
│   └── navigation.js                 # Centralized navigation routes and site links
│
├── public/                           # Static Assets (Images, Videos, Brand Icons)
│   ├── images/                       # Brand logos, webp visual assets, category photography
│   └── resources/                    # High-definition hero video backgrounds
│
└── styles.css                        # Unified Site-wide Design System & Component Tokens
```

---

## ⚙️ Core Architecture & Features

### 1. Dynamic Transparent-to-Scrolled Navbar
- **Transparent Top State:** Sits fixed over the hero section with `background: transparent`, allowing the full visual media and reactive canvas to extend seamlessly to the top of the viewport.
- **Dynamic Thresholding:** Automatically measures the height of the hero/header section (`.hero-section`, `.page-hero-header`, `.ge-hero-section`) per route and transitions into a frosted glass backdrop (`backdrop-filter: blur(18px)`) only after the hero section has elapsed.
- **Mobile Drawer:** Accessible slide-out navigation menu with body-scroll locking and appearance controls.

### 2. Interactive Background Lattice Mesh (`InteractiveMesh.js`)
- **Performance Optimized:** Uses an HTML5 Canvas capped at `devicePixelRatio: 1.5`, keeping CPU/GPU render time under `<0.1ms` per frame (steady 60/120 FPS).
- **Pointer & Touch Physics:** Particle nodes displace smoothly with spring physics when hovered on desktop or touched on mobile. Connecting lattice lines illuminate based on cursor proximity with linear interpolation (Lerp).
- **Auto-Sleep:** Automatically pauses the animation loop when the browser tab is hidden or minimized (`visibilitychange` API) to conserve battery and CPU.

### 3. Hero Video Background & Resource Protection
- **Crossfading Background Player:** Smoothly rotates through high-definition project video reels on video completion.
- **Resource Protection:** Video elements use `controlsList="nodownload nofullscreen noremoteplayback"`, `disablePictureInPicture`, `disableRemotePlayback`, and `pointer-events: none` to prevent direct downloading or context-menu grabbing.
- **Contrast & Legibility:** Clean gradient fade stops ensuring high contrast and readability for title typography in both dark and light modes.

### 4. Comprehensive Design System & Dual Theme Support
- **Dark Mode (Default):** Deep slate palette (`#090D16`, `#131C2E`) accented by signature Maktub gold (`#F5A623`) and royal blue (`#1B4192`).
- **Light Mode:** Crisp off-white palette (`#F8FAFC`, `#FFFFFF`) with high-contrast slate text and rich amber accents.
- **Zero FOUC:** An inline anti-FOUC script in `app/layout.js` resolves the user's stored theme before initial paint to prevent theme flashing.

---

## 🛠️ Development & Commands

### Prerequisites
- **Node.js:** v20.19.0+ (or latest LTS)
- **npm:** v10+

### Installation & Local Development
```powershell
# Install dependencies
npm install

# Start the Next.js development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Production Build & Verification
```powershell
# Build optimized production bundle
npm run build

# Start production server
npm run start

# Run ESLint validation
npm run lint
```

---

## 📋 Quality & Compliance Notes

- **Regulatory Compliance Displayed:**
  - PACRA Reg No: `120200000224`
  - ZRA TPIN: `2558884909`
  - EIZ Certified: `R. Eng. O`
  - NCC Grade 5 Category C, Grade 6 Category E, Grade 4 Category R
  - Ministry of Defence Vendor ID: `MOD/VIN/1238/23`
- **Accessibility:** Semantic HTML5 landmarks, ARIA labels on all interactive controls, skip-to-main-content link, and `prefers-reduced-motion` fallbacks.

---

*© Maktub Engineering & General Supply Limited. All rights reserved.*