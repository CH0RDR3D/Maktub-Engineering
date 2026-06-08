# Maktub Engineering & General Supply Limited

A high-performance, Zambian-owned engineering firm website.

## 🚀 Tech Stack
- **Frontend:** Vanilla HTML5, CSS3 (PostCSS/Variables), Vanilla JavaScript (ES6+).
- **Architecture:** Custom AJAX-based Single Page Application (SPA).
- **Animations:** Intersection Observer API for scroll reveals, Canvas API for particle effects.
- **Icons:** Tabler Icons.

## 📁 Project Structure
- `/pages`: Contains HTML fragments loaded dynamically by `nav.js`.
- `/js`: Modularized logic (Navigation, Slides, Particles, Form Handling).
- `/resources`: Optimized `.webp` imagery and document assets.
- `styles.css`: Centralized style system with Dark Mode support via `prefers-color-scheme`.

## ⚙️ Key Systems

### 1. SPA Routing (`nav.js`)
The site uses a `showPage(id)` function to swap content without reloading. It handles:
- **Deep Linking:** Via URL hashes (`#services:civil`).
- **SEO:** Dynamic metadata updates via the `PAGE_CONFIG` object.
- **Transitions:** Controlled via `page-transition-out/in` classes.

### 2. Performance Optimizations
- **Content Visibility:** CSS `content-visibility: auto` is applied to sections to defer rendering work.
- **Lazy Loading:** Native `loading="lazy"` for images and custom lazy loading for the hero carousel.
- **Resource Hints:** `preconnect` and `preload` are used in `index.html` for critical fonts and LCP images.

### 3. Visuals & Humanization
- **Zig-Zag Grids:** Used on the Home page to create a personal, humanized flow.
- **Infinite Carousel:** Auto-scrolling services track with randomized entry points.
- **Adaptive Footer:** The "Blind Reveal" effect is controlled via `js/footer.js`.

## 🛠️ Handover Notes
- **Adding a Page:** Create a new fragment in `/pages`, add a link in `index.html` calling `showPage('pagename')`, and add its metadata to `PAGE_CONFIG` in `js/nav.js`.
- **Image Requirements:** Aim for `.webp` format. Hero images should be 1920px wide; service images should be around 800px wide.
- **Mobile Specifics:** Particle counts and footer reveal effects are automatically capped or disabled on screens < 900px to preserve battery and performance.

---
*Developed for Maktub Engineering & General Supply Limited.*