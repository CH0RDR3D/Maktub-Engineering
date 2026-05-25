let revealObserver = null;

function initReveal(){
  // Target the main container where pages are injected
  const container = document.getElementById('page-container');
  if (!container) return;
  
  // Disconnect previous observer to avoid memory leaks and duplicate triggers
  if (revealObserver) revealObserver.disconnect();

  // Observe both reveal containers and standalone counter elements
  const els = container.querySelectorAll('.reveal, .reveal-left, .reveal-right, [data-target]');
  
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Entrance animations
        if (entry.target.classList.contains('reveal') || 
            entry.target.classList.contains('reveal-left') || 
            entry.target.classList.contains('reveal-right')) {
          entry.target.classList.add('visible');
        }
        
        // Trigger counters inside a reveal container
        entry.target.querySelectorAll('[data-target]').forEach(c => {
          if (typeof window.animateCounter === 'function') window.animateCounter(c);
        });

        // Trigger standalone counters
        if (entry.target.dataset.target && typeof window.animateCounter === 'function') {
          window.animateCounter(entry.target);
        }
        
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el => {
    revealObserver.observe(el);
  });
}
window.initReveal = initReveal;