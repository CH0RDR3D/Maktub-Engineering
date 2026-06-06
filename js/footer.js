/**
 * Calculates the height of the fixed footer and applies it as margin to the main container.
 * This allows the content to scroll past and reveal the footer like a blind.
 */
function updateFooterReveal() {
  const footer = document.querySelector('footer');
  const container = document.getElementById('page-container');
  
  if (!footer || !container) return;

  // Disable the reveal effect on mobile/tablets
  if (window.innerWidth <= 900) {
    container.style.marginBottom = '0px';
    return;
  }

  // Get actual height
  const footerHeight = footer.getBoundingClientRect().height;
  
  // Apply margin so the page scroll length accounts for the hidden footer
  container.style.marginBottom = `${footerHeight}px`;
}

// Handle events that affect layout height
window.addEventListener('resize', () => requestAnimationFrame(updateFooterReveal));
document.addEventListener('DOMContentLoaded', () => {
  updateFooterReveal();
  // Recalculate once images load, as they change the footer height
  window.addEventListener('load', updateFooterReveal);
});


// Use ResizeObserver to handle dynamic height changes (e.g., images loading)
const footerEl = document.querySelector('footer');
if (footerEl && window.ResizeObserver) {
  const ro = new ResizeObserver(() => {
    updateFooterReveal();
  });
  ro.observe(footerEl);
}

// Ensure it runs immediately if script is loaded late
updateFooterReveal();

window.updateFooterReveal = updateFooterReveal;