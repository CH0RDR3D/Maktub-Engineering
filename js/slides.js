let currentSlide = 0;
let slides = [];
let dotsCont = null;
let autoTimer = null;
// Persistent cache for slide images across page transitions
const SLIDE_IMAGE_CACHE = new Set();

function lazyLoadSlide(i) {
  const s = slides[i];
  if (!s) return;
  const src = s.dataset.src;
  if (!src) { s.dataset.loaded = '1'; return; }
  
  if (s.dataset.loaded || SLIDE_IMAGE_CACHE.has(src)) {
    s.style.backgroundImage = `url('${src}')`;
    s.dataset.loaded = '1';
    return;
  }

  const img = new Image();
  img.onload = function() {
    s.style.backgroundImage = `url('${src}')`;
    s.dataset.loaded = '1';
    SLIDE_IMAGE_CACHE.add(src);
  };
  img.src = src;
}

function preloadNext(i){
  const next = (i + 1) % slides.length;
  const s = slides[next];
  if (!s || s.dataset.loaded || SLIDE_IMAGE_CACHE.has(s.dataset.src)) return;
  const src = s.dataset.src;
  if (!src) return;
  const img = new Image();
  img.onload = function(){ 
    s.dataset.loaded = '1'; 
    SLIDE_IMAGE_CACHE.add(src);
  };
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

const featuredServices = [
  { title: "Building Construction", img: "resources/civileng.webp", id: "civil" },
  { title: "Road & Bridge Works", img: "resources/road.webp", id: "civil" },
  { title: "Equipment Supplies", img: "resources/equipment2.webp", id: "equipment" },
  { title: "PPE & Safety Gear", img: "resources/ppe.webp", id: "general" },
  { title: "Office & School Furniture", img: "resources/office.webp", id: "general" },
  { title: "Spare Parts Supply", img: "resources/warehouse.webp", id: "equipment" }
];

function initServicesCarousel() {
  const track = document.getElementById('servicesCarousel');
  if (!track) return;

  // Shuffle the services for "at rand" behavior
  const shuffled = [...featuredServices].sort(() => Math.random() - 0.5);
  
  const cardsHtml = shuffled.map(s => `
    <div class="carousel-card" onclick="showPage('services:${s.id}')">
      <div class="carousel-img-box">
        <img src="${s.img}" alt="${s.title}" loading="lazy">
      </div>
      <div class="carousel-content">
        <div class="carousel-title">${s.title}</div>
        <div class="carousel-cta">Explore Details &rarr;</div>
      </div>
    </div>
  `).join('');

  // Duplicate content for seamless infinite loop effect
  track.innerHTML = cardsHtml + cardsHtml;

  // Handle touch interactions to pause animation
  const container = document.querySelector('.services-carousel-container');
  if (container) {
    container.addEventListener('touchstart', () => { track.style.animationPlayState = 'paused'; }, {passive: true});
    container.addEventListener('touchend', () => { track.style.animationPlayState = 'running'; }, {passive: true});
  }
}

let categoryCarouselIntervals = [];

function initCategoryCarousels() {
  if (categoryCarouselIntervals.length > 0) {
    cleanupCategoryCarousels();
  }

  const carousels = document.querySelectorAll('.category-card-carousel');
  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    if (slides.length <= 1) return;

    let activeIdx = 0;
    const intervalId = setInterval(() => {
      slides[activeIdx].classList.remove('active');
      activeIdx = (activeIdx + 1) % slides.length;
      slides[activeIdx].classList.add('active');
    }, 3000);

    categoryCarouselIntervals.push(intervalId);
  });
}

function cleanupCategoryCarousels() {
  categoryCarouselIntervals.forEach(id => clearInterval(id));
  categoryCarouselIntervals = [];
}

// auto-init
document.addEventListener('DOMContentLoaded', initSlides);
window.initSlides = initSlides;
window.initServicesCarousel = initServicesCarousel;
window.goSlide = goSlide;
window.initCategoryCarousels = initCategoryCarousels;
window.cleanupCategoryCarousels = cleanupCategoryCarousels;