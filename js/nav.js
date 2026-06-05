let menuOpen=false;

function toggleMenu(){
  menuOpen=!menuOpen;
  const menu = document.getElementById('mobileMenu');
  const icon = document.querySelector('.hamburger i');
  if(menu) menu.classList.toggle('open', menuOpen);
  if(icon) icon.className = menuOpen ? 'ti ti-x' : 'ti ti-menu-2';
}

async function showPage(id, pushState = true){
  const container = document.getElementById('page-container');
  if(!container) return;

  // begin transition out
  container.classList.add('page-transition-out');
  // show loader immediately so user sees feedback
  container.innerHTML = '<div class="page-loader">Loading...</div>';

  try {
    // small wait to allow fade-out to be visible
    await new Promise(resolve => setTimeout(resolve, 180));

    const html = await loadPageFragment(`pages/${id}.html`);

    // replace content and fade in
    container.innerHTML = html;
    
    // Update Title for SEO
    const pageTitles = {
      'home': 'Home | Maktub Engineering',
      'about': 'About Us | Maktub Engineering',
      'services': 'Our Services | Construction & Engineering',
      'health': 'Health & Safety Commitment',
      'certs': 'Credentials & Certifications',
      'contact': 'Contact Us | Get a Quote'
    };

    const pageDescs = {
      'home': 'Maktub Engineering delivers civil construction and equipment supplies across Zambia.',
      'about': 'Learn about the journey and values of Maktub Engineering, a Zambian-owned firm.',
      'services': 'Explore our services: Civil Engineering, Road Construction, and General Supplies.',
      'health': 'Our commitment to sustainability and health and safety standards in Zambia.',
      'certs': 'PACRA, NCC, and ZPPA registered engineering organization credentials.',
      'contact': 'Contact our Lusaka or Muchinga branches for construction and supply quotes.'
    };

    if (pageTitles[id]) {
      document.title = pageTitles[id];
      document.getElementById('meta-desc').setAttribute('content', pageDescs[id]);
      document.getElementById('og-title').setAttribute('content', pageTitles[id]);
      document.getElementById('og-desc').setAttribute('content', pageDescs[id]);
      document.getElementById('canonical-link').setAttribute('href', `https://maktubengineering.com/#${id}`);
    }

    document.body.classList.toggle('is-home', id === 'home');

    // Update Active Link State
    const navSelectors = [
      '.nav-links a',
      '.mobile-menu a'
    ].join(', ');
    document.querySelectorAll(navSelectors).forEach(a => {
      const onclickAttr = a.getAttribute('onclick') || "";
      a.classList.toggle('active', onclickAttr.includes(`'${id}'`));
    });

    // History API: Update URL without reloading
    if (pushState) window.history.pushState({pageId: id}, pageTitles[id], `#${id}`);

    // Instant scroll to top on page change
    window.scrollTo(0, 0);

    // trigger fade-in
    container.classList.remove('page-transition-out');
    container.classList.add('page-transition-in');

    // Re-init components for the new dynamic content
    const initComponents = () => {
      if (window.initReveal) window.initReveal();
      if (window.i18n && typeof window.i18n.apply === 'function') window.i18n.apply();
      
      // Particles are heavy; run them when the browser is idle
      if (window.initParticles) window.initParticles();
      if (id === 'home' && window.initHeroParticles) window.initHeroParticles();
      if (window.initFooterParticles) window.initFooterParticles();
      
      if (window.initSlides && id === 'home') window.initSlides();

      if (window.updateFooterReveal) window.updateFooterReveal();

      // remove the fade-in helper class after transition completes
      setTimeout(() => container.classList.remove('page-transition-in'), 340);
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

window.switchTab = switchTab;
window.toggleAcc = toggleAcc;

// Close menu when clicking outside
document.addEventListener('click',function(e){
  if(menuOpen && !e.target.closest('nav') && !e.target.closest('.hamburger')) toggleMenu();
});

// Auto-cycling services tabs
let serviceCycleInterval;
function initServiceCycling() {
  clearInterval(serviceCycleInterval);
  const tabs = document.querySelectorAll('#services .stab');
  if (tabs.length === 0) return;
  let currentIndex = 0;
  serviceCycleInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % tabs.length;
    tabs[currentIndex].click();
  }, 7000);
  // Reset cycle on manual click
  tabs.forEach(tab => tab.addEventListener('click', () => {
    clearInterval(serviceCycleInterval);
    currentIndex = Array.from(tabs).indexOf(tab);
    initServiceCycling();
  }));
}

// Initialize cycling on page loads - MUST be before DOMContentLoaded
const originalShowPage = window.showPage;
window.showPage = function(id) {
  originalShowPage(id);
  if (id === 'services') {
    setTimeout(() => initServiceCycling(), 100);
  } else {
    clearInterval(serviceCycleInterval);
  }
};

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