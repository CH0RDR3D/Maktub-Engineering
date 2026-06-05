let heroParticleRaf;
let heroCarouselInterval;
let heroObserver;
// Persistent cache to prevent re-downloading images during a session
const HERO_LOADED_IMAGES = new Set();

function initHeroParticles() {
  // Cleanup existing to avoid memory leaks
  if (heroParticleRaf) cancelAnimationFrame(heroParticleRaf);
  if (heroCarouselInterval) clearInterval(heroCarouselInterval);

  const heroCanvas = document.getElementById('hero-canvas');
  if (!heroCanvas) return;
  const ctx = heroCanvas.getContext('2d');
  const heroSection = document.getElementById('home');
  const mouse = { x: -9999, y: -9999 };

  const COLORS = ['#F5A623', '#FAC75A', '#D4891A', '#ffffff', '#F5A623'];
  const SHAPES = ['circle', 'triangle', 'diamond', 'rect'];

  function Shape() {
    this.reset(true);
  }

  Shape.prototype.reset = function(init) {
    this.x = Math.random() * heroCanvas.width;
    this.y = init ? Math.random() * heroCanvas.height : heroCanvas.height + 80;
    this.baseX = this.x;
    this.baseY = this.y;
    this.r = 18 + Math.random() * 52;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    this.alpha = 0.04 + Math.random() * 0.10;
    this.floatSpeed = 0.0004 + Math.random() * 0.0006;
    this.floatAmp = 18 + Math.random() * 32;
    this.floatOffset = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.006;
    this.rot = Math.random() * Math.PI * 2;
    this.vx = 0; this.vy = 0;
    this.repelRadius = 160 + Math.random() * 80;
    this.repelStrength = 2.2 + Math.random() * 1.8;
    this.friction = 0.88;
    this.spring = 0.018 + Math.random() * 0.012;
  };

  Shape.prototype.update = function(t) {
    var tx = this.baseX + Math.sin(t * this.floatSpeed + this.floatOffset) * this.floatAmp;
    var ty = this.baseY + Math.cos(t * this.floatSpeed * 0.7 + this.floatOffset) * (this.floatAmp * 0.6);
    var dx = mouse.x - this.x;
    var dy = mouse.y - this.y;
    var dist = Math.sqrt(dx * dx + dy * dy) || 1;

    if (dist < this.repelRadius) {
      var force = (1 - dist / this.repelRadius) * this.repelStrength;
      this.vx -= (dx / dist) * force;
      this.vy -= (dy / dist) * force;
    }
    this.vx += (tx - this.x) * this.spring;
    this.vy += (ty - this.y) * this.spring;
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;
    this.rot += this.rotSpeed;
  };

  Shape.prototype.draw = function() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    var r = this.r;
    if (this.shape === 'circle') {
      ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
    } else if (this.shape === 'triangle') {
      ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(r * 0.866, r * 0.5); ctx.lineTo(-r * 0.866, r * 0.5); ctx.closePath(); ctx.fill();
    } else if (this.shape === 'diamond') {
      ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(r * 0.6, 0); ctx.lineTo(0, r); ctx.lineTo(-r * 0.6, 0); ctx.closePath(); ctx.fill();
    } else {
      var s = r * 1.2; ctx.fillRect(-s / 2, -s / 2, s, s);
    }
    ctx.restore();
  };

  let shapes = [];
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    heroCanvas.width = heroSection.offsetWidth * dpr;
    heroCanvas.height = heroSection.offsetHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    shapes = [];
    var count = Math.min(22, Math.floor(heroCanvas.width / 80));
    if (window.innerWidth < 768) count = 8; // Fewer shapes on mobile
    for (var i = 0; i < count; i++) shapes.push(new Shape());
  }

  function loop(t) {
    ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    shapes.forEach(s => { s.update(t); s.draw(); });
    heroParticleRaf = requestAnimationFrame(loop);
  }

  heroSection.addEventListener('mousemove', e => {
    var rect = heroSection.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  heroSection.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  resize();
  loop(0);

  // Hero Background Carousel Logic
  const heroBg = heroSection.querySelector('.hero-bg');
  if (heroBg) {
    const images = ['images/hero/hero1.webp', 'images/hero/hero2.webp', 'images/hero/hero3.webp', 'images/hero/hero4.webp', 'images/hero/hero5.webp'];
    const overlay = 'linear-gradient(135deg, rgba(26,39,68,0.75) 0%, rgba(13,24,41,0.75) 60%, rgba(26,39,68,0.85) 100%)';
    let currentIdx = 0;

    function preloadImage(idx) {
      const src = images[idx];
      if (HERO_LOADED_IMAGES.has(src)) return Promise.resolve();
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          HERO_LOADED_IMAGES.add(src);
          resolve();
        };
        img.src = src;
      });
    }

    function setBg(idx) {
      const src = images[idx];
      heroBg.style.backgroundImage = `${overlay}, url("${src}")`;
      // Preload the next image in the sequence to avoid flickering
      preloadImage((idx + 1) % images.length);
    }

    // Ensure the first background is ready before displaying
    preloadImage(0).then(() => setBg(0));

    const startCarousel = () => {
      if (heroCarouselInterval) clearInterval(heroCarouselInterval);
      heroCarouselInterval = setInterval(() => {
        currentIdx = (currentIdx + 1) % images.length;
        setBg(currentIdx);
      }, 7000);
    };

    // Use IntersectionObserver to stop animations when not visible
    if (heroObserver) heroObserver.disconnect();
    heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCarousel();
        } else {
          clearInterval(heroCarouselInterval);
        }
      });
    }, { threshold: 0.1 });
    heroObserver.observe(heroSection);
  }
}

window.initHeroParticles = initHeroParticles;