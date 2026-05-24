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

  try {
    const res = await fetch(`pages/${id}.html`);
    if(!res.ok) throw new Error('Failed to load page');
    const html = await res.text();
    container.innerHTML = html;

    // Update Active Link State
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
      const onclickAttr = a.getAttribute('onclick') || "";
      a.classList.toggle('active', onclickAttr.includes(`'${id}'`));
    });

    window.scrollTo({top:0,behavior:'smooth'});
    
    // Re-init components for the new dynamic content
    if(window.initReveal) window.initReveal();
    if(window.i18n) window.i18n.apply();
    
    if(id === 'home'){
      if(window.animateCounters) window.animateCounters();
      if(window.initParticles) window.initParticles();
      if(window.initSlides) window.initSlides();
    }
  } catch (err) {
    console.error('Page load error:', err);
  }

  if(menuOpen) toggleMenu();
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