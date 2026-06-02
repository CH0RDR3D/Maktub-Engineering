let currentSlide = 0;
let slides = [];
let dotsCont = null;
let autoTimer = null;

function lazyLoadSlide(i) {
  const s = slides[i];
  if (!s) return;
  if (s.dataset.loaded) return;
  const src = s.dataset.src;
  if (!src) { s.dataset.loaded = '1'; return; }
  const img = new Image();
  img.onload = function() {
    s.style.backgroundImage = `url('${src}')`;
    s.dataset.loaded = '1';
  };
  img.src = src;
}

function preloadNext(i){
  const next = (i + 1) % slides.length;
  const s = slides[next];
  if (!s || s.dataset.loaded) return;
  const src = s.dataset.src;
  if (!src) return;
  const img = new Image();
  img.onload = function(){ s.dataset.loaded = '1'; };
  img.src = src;
}

function initSlides(){
  if (autoTimer) clearInterval(autoTimer);
  slides = Array.from(document.querySelectorAll('.slide'));
  dotsCont = document.getElementById('slideDots');
  if (!slides.length || !dotsCont) return;

  const initialSlide = slides.findIndex(slide => slide.classList.contains('active'));
  currentSlide = initialSlide >= 0 ? initialSlide : 0;

  dotsCont.innerHTML = '';
  slides.forEach((slide, i) => {
    if (i !== currentSlide) slide.classList.remove('active');
    slide.setAttribute('aria-hidden', i !== currentSlide);
    const d = document.createElement('div');
    d.className = 'dot' + (i === currentSlide ? ' active' : '');
    d.onclick = () => { goSlide(i); resetAuto(); };
    dotsCont.appendChild(d);
  });

  // load current slide immediately and preload the next one
  lazyLoadSlide(currentSlide);
  preloadNext(currentSlide);
  autoTimer = setInterval(() => goSlide((currentSlide + 1) % slides.length), 3500);
}

function resetAuto(){
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = setInterval(() => goSlide((currentSlide + 1) % slides.length), 3500);
}

function goSlide(n){
  if (!slides.length) return;
  const prev = currentSlide;
  n = ((n % slides.length) + slides.length) % slides.length;
  slides[prev].classList.remove('active');
  slides[prev].setAttribute('aria-hidden', 'true');
  const dots = document.querySelectorAll('.dot');
  if (dots[prev]) dots[prev].classList.remove('active');
  currentSlide = n;
  lazyLoadSlide(currentSlide);
  slides[currentSlide].classList.add('active');
  slides[currentSlide].setAttribute('aria-hidden', 'false');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  preloadNext(currentSlide);
}

// auto-init
document.addEventListener('DOMContentLoaded', initSlides);
window.initSlides = initSlides;
window.goSlide = goSlide;