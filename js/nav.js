let menuOpen=false;

function toggleMenu(){
  menuOpen=!menuOpen;
  const menu = document.getElementById('mobileMenu');
  const icon = document.querySelector('.hamburger i');
  if(menu) menu.classList.toggle('open', menuOpen);
  if(icon) icon.className = menuOpen ? 'ti ti-x' : 'ti ti-menu-2';
}

const PAGE_CONFIG = {
  'home': {
    title: 'Home | Maktub Engineering',
    desc: 'Maktub Engineering delivers civil construction and equipment supplies across Zambia.'
  },
  'about': {
    title: 'About Us | Maktub Engineering',
    desc: 'Learn about the journey and values of Maktub Engineering, a Zambian-owned firm.'
  },
  'services': {
    title: 'Our Services | Construction & Engineering',
    desc: 'Explore our services: Civil Engineering, Road Construction, and General Supplies.'
  },
  'health': {
    title: 'Health & Safety Commitment',
    desc: 'Our commitment to sustainability and health and safety standards in Zambia.'
  },
  'certs': {
    title: 'Credentials & Certifications',
    desc: 'PACRA, NCC, and ZPPA registered engineering organization credentials.'
  },
  'contact': {
    title: 'Contact Us | Get a Quote',
    desc: 'Contact our Lusaka or Muchinga branches for construction and supply quotes.'
  }
};

async function showPage(id, pushState = true){
  const container = document.getElementById('page-container');
  if(!container) return;

  // begin transition out
  container.classList.add('page-transition-out');
  // show loader immediately so user sees feedback
  container.innerHTML = '<div class="page-loader">Loading...</div>';
  
  const [baseId, subId] = id.split(':');

  try {
    // small wait to allow fade-out to be visible
    await new Promise(resolve => setTimeout(resolve, 180));

    const html = await loadPageFragment(`pages/${baseId}.html`);

    // replace content and fade in
    container.innerHTML = html;
    
    // Update SEO Metadata from Config
    const config = PAGE_CONFIG[baseId];
    if (config) {
      document.title = config.title;
      document.getElementById('meta-desc').setAttribute('content', config.desc);
      document.getElementById('og-title').setAttribute('content', config.title);
      document.getElementById('og-desc').setAttribute('content', config.desc);
      document.getElementById('canonical-link').setAttribute('href', `https://maktubengineering.com/#${id}`);
    }

    document.body.classList.toggle('is-home', baseId === 'home');

    // Update Active Link State
    const navSelectors = [
      '.nav-links a',
      '.mobile-menu a'
    ].join(', ');
    document.querySelectorAll(navSelectors).forEach(a => {
      const onclickAttr = a.getAttribute('onclick') || "";
      a.classList.toggle('active', onclickAttr.includes(`'${baseId}'`));
    });

    // History API: Update URL without reloading
    if (pushState) window.history.pushState({pageId: id}, config ? config.title : '', `#${id}`);

    // Instant scroll to top on page change
    window.scrollTo(0, 0);

    // trigger fade-in
    container.classList.remove('page-transition-out');
    container.classList.add('page-transition-in');

    // Re-init components for the new dynamic content
    const initComponents = () => {
      if (window.initReveal) window.initReveal();
      if (window.updateFooterReveal) window.updateFooterReveal();
      
      if (window.initSlides && baseId === 'home') window.initSlides();
      if (window.initServicesCarousel && baseId === 'home') window.initServicesCarousel();
      
      if (baseId === 'services' && subId) {
        toggleServiceDetail(subId, false);
      }

      // Particles are non-critical and heavy; defer more aggressively
      const heavyInits = () => {
        if (window.initParticles) window.initParticles();
        if (id === 'home' && window.initHeroParticles) window.initHeroParticles();
        if (window.initFooterParticles) window.initFooterParticles();
      };

      'requestIdleCallback' in window ? window.requestIdleCallback(heavyInits) : setTimeout(heavyInits, 200);
      
      // remove the fade-in helper class after transition completes
      setTimeout(() => container.classList.remove('page-transition-in'), 500);

      // Ensure sticky headers are evaluated immediately for the new content
      handleScrollEffects();
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(initComponents, { timeout: 200 });
    } else {
      setTimeout(initComponents, 60);
    }
  } catch (err) {
    console.error('Page load error:', err);
    container.innerHTML = '<div class="page-error">Unable to load page. Make sure the site is served via HTTP and that the "pages" folder is present.</div>';
    container.classList.remove('page-transition-out');
  }
  if(menuOpen) toggleMenu();
}

function loadPageFragment(url) {
  if (window.location.protocol === 'file:') {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        const body = xhr.responseText || '';
        if ((xhr.status === 200 || xhr.status === 0) && body.trim().length > 0) {
          resolve(body);
        } else if (xhr.status === 0 && body.trim().length === 0) {
          reject(new Error('Empty page fragment response when loading local files. Use a local HTTP server instead.'));
        } else {
          reject(new Error(`XHR failed with status ${xhr.status}`));
        }
      };
      xhr.onerror = function() {
        reject(new Error('XHR network error while loading page fragment'));
      };
      xhr.send();
    });
  }

  return fetch(url).then(res => {
    if (!res.ok) throw new Error('Failed to load page');
    return res.text();
  });
}

function switchTab(btn, panelId) {
  document.querySelectorAll('.stab').forEach(function(b) { b.classList.remove('active'); });
  document.querySelectorAll('.service-panel').forEach(function(p) { p.classList.remove('active'); });
  btn.classList.add('active');
  const panel = document.getElementById(panelId);
  if(panel) panel.classList.add('active');
}

function toggleAcc(header) {
  const body = header.nextElementSibling;
  const wasOpen = header.classList.contains('open');
  const panel = header.closest('.service-panel');
  panel.querySelectorAll('.accordion-header').forEach(function(h) {
    h.classList.remove('open');
    h.nextElementSibling.classList.remove('open');
  });
  if (!wasOpen) {
    header.classList.add('open');
    body.classList.add('open');
  }
}

/**
 * Service Details Logic (moved from services.html)
 */
function toggleServiceDetail(catId, pushState = true) {
  const categories = document.getElementById('services-categories');
  const drilldown = document.getElementById('services-drilldown');
  const panels = document.querySelectorAll('.service-panel');
  const backBtn = document.getElementById('service-back-btn');
  if (!categories || !drilldown) return;

  categories.style.display = catId ? 'none' : 'grid';
  drilldown.style.display = catId ? 'block' : 'none';
  
  if (backBtn) backBtn.style.display = catId ? 'inline-flex' : 'none';

  if (catId) {
    panels.forEach(p => p.classList.toggle('active', p.id === catId));
    window.scrollTo({ top: drilldown.offsetTop - 100, behavior: 'smooth' });
    if (window.initReveal) window.initReveal();
  }

  if (pushState) {
    const newId = catId ? `services:${catId}` : 'services';
    window.history.pushState({pageId: newId}, "", `#${newId}`);
  }
}

function toggleMore(btn) {
  const more = btn.previousElementSibling;
  if (!more) return;
  const isHidden = more.style.display === 'none' || !more.style.display;
  more.style.display = isHidden ? 'block' : 'none';
  btn.textContent = isHidden ? 'View Less' : 'View More';
}

window.switchTab = switchTab;
window.toggleAcc = toggleAcc;
window.toggleServiceDetail = toggleServiceDetail;
window.toggleMore = toggleMore;

// Close menu when clicking outside
document.addEventListener('click',function(e){
  if(menuOpen && !e.target.closest('nav') && !e.target.closest('.hamburger')) toggleMenu();
});

// Sticky Header and Navbar Logic
function handleScrollEffects() {
  const nav = document.getElementById('navbar');
  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 68;

  if (nav) {
    let threshold = 50;
    if (document.body.classList.contains('is-home')) {
      const hero = document.getElementById('home');
      // Trigger the background change exactly as the navbar hits the section below the hero
      if (hero) threshold = hero.offsetHeight - navHeight;
    }
    nav.classList.toggle('scrolled', window.scrollY > threshold);
  }

  const headers = Array.from(document.querySelectorAll('.sticky-header-container'));
  headers.forEach((header, index) => {
    // If it's the last header on the page, don't let it stick
    if (index === headers.length - 1 && headers.length > 1) {
      header.classList.remove('is-stuck');
      return;
    }

    const rect = header.getBoundingClientRect();
    // Compare against navHeight with a 1px buffer for sub-pixel rendering
    header.classList.toggle('is-stuck', rect.top <= navHeight + 1);
  });
}
window.addEventListener('scroll', handleScrollEffects);

// Initialize cycling on page loads - MUST be before DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Handle deep-linking via hash on load
  const hash = window.location.hash.replace('#', '') || 'home';
  showPage(hash, false);
});

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.pageId) showPage(e.state.pageId, false);
});

// expose to global
window.toggleMenu = toggleMenu;
window.showPage = showPage;