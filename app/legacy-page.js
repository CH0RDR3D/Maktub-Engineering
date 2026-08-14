import fs from 'node:fs/promises';
import path from 'node:path';

const pageFiles = {
  home: 'home.html',
  about: 'about.html',
  services: 'services.html',
  'green-energy': 'greenenergy.html',
  credentials: 'certs.html',
  contact: 'contact.html'
};

function normalizeFragment(html) {
  return html
    .replace(/\r\n?/g, '\n')
    .replaceAll('src="resources/', 'src="/resources/')
    .replaceAll('src="images/', 'src="/images/')
    .replaceAll('id="hero-video-1" class="hero-video active"', 'id="hero-video-1" class="hero-video active" poster="/images/hero/hero1.webp"')
    .replaceAll('id="hero-video-2" class="hero-video"', 'id="hero-video-2" class="hero-video" poster="/images/hero/hero2.webp"')
    .replaceAll('href="resources/', 'href="/resources/')
    .replaceAll('href="/resources/', 'href="/resources/')
    .replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('home')\"", 'href="/"')
    .replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('about')\"", 'href="/about"')
    .replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('services')\"", 'href="/services"')
    .replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('greenenergy')\"", 'href="/green-energy"')
    .replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('certs')\"", 'href="/credentials"')
    .replaceAll("href=\"javascript:void(0)\" onclick=\"showPage('contact')\"", 'href="/contact"')
    .replaceAll('href="javascript:void(0)"', 'href="#"')
    .replaceAll(/onclick="showPage\('services:([^']+)'\)(?:; return false)?"/g, 'data-service="#services-section-$1"')
    .replaceAll(/onclick="showPage\('([^']+)'\)(?:; return false)?"/g, 'data-route="/$1"')
    .replaceAll(/onclick="toggleServiceDetail\('([^']+)'\)"/g, 'data-service="#services-section-$1"')
    .replaceAll(/onclick="toggleMore\(this\)"/g, 'data-toggle-more="true"')
    .replaceAll(/onclick="document\.getElementById\('([^']+)'\)\.scrollIntoView\(\{behavior:'smooth'\}\)"/g, 'data-scroll-target="#$1"')
    .replaceAll('onsubmit="submitForm(event)"', 'action="https://formspree.io/f/mnjynozp" method="post"')
    .replaceAll(/\s+onclick="[^"]*"/g, '');
}

export default async function LegacyPage({ page }) {
  const filename = pageFiles[page];
  if (!filename) return null;
  const html = await fs.readFile(path.join(process.cwd(), 'pages', filename), 'utf8');
  return (
    <>
      <div
        className={`page active page-${page}`}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: normalizeFragment(html) }}
      />
    </>
  );
}
