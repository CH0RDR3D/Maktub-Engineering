let menuOpen=false;

function toggleMenu(){
  menuOpen=!menuOpen;
  const menu = document.getElementById('mobileMenu');
  const icon = document.querySelector('.hamburger i');
  if(menu) menu.classList.toggle('open', menuOpen);
  if(icon) icon.className = menuOpen ? 'ti ti-x' : 'ti ti-menu-2';
}

async function showPage(id){
  const container = document.getElementById('page-container');
  if(!container) return;

  container.innerHTML = '<div class="page-loader">Loading...</div>';

  try {
    const html = await loadPageFragment(`pages/${id}.html`);
    container.innerHTML = html;

    // Handle layout: Home page overlays the nav, other pages start below it
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

    // Instant scroll to top on page change
    window.scrollTo(0, 0);

    // Re-init components for the new dynamic content
    setTimeout(() => {
      if (window.initReveal) window.initReveal();
      if (window.i18n && typeof window.i18n.apply === 'function') window.i18n.apply();
      // Initialize particles on all pages
      if (window.initParticles) window.initParticles();
      if (window.initSlides && id === 'home') window.initSlides();
    }, 60);
  } catch (err) {
    console.error('Page load error:', err);
    container.innerHTML = '<div class="page-error">Unable to load page. Make sure the site is served via HTTP and that the "pages" folder is present.</div>';
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

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 30);
});

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

document.addEventListener('DOMContentLoaded', () => showPage('home'));

// expose to global
window.toggleMenu = toggleMenu;
window.showPage = showPage;