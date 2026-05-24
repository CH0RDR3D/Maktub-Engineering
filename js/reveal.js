function initReveal(){
  // Look for the active page, or fallback to document body if not using the page-switcher architecture
  const container = document.querySelector('.page.active') || document.body;
  const els = container.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:0.12});
  els.forEach(el=>{ el.classList.remove('visible'); obs.observe(el); });
}

document.addEventListener('DOMContentLoaded',()=>setTimeout(initReveal,300));

// expose for other modules
window.initReveal = initReveal;