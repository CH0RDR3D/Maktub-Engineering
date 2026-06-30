/**
 * Hero Implementation - Canvas Particles + Video Backgrounds & Cycling Text
 */

// Hero Configuration - Easy to modify in one place
const HERO_CONFIG = {
  // List of video background sources. If 1 is provided, it loops. If multiple, they cycle.
  videos: [
    'resources/hero1.mp4',
    'resources/hero2.mp4',
    'resources/hero3.mp4'
  ],
  playbackRate: 0.65,       // Slow motion speed
  textCycleInterval: 7500,  // Time each slide's text is visible (ms)
  crossfadeDuration: 1600   // Video crossfade duration (ms) - matches CSS transition
};

// List of texts to cycle in the hero section
const HERO_TEXTS = [
  {
    badge: "Est. January 2020",
    title: "Empowering Your Vision<br>By Helping You To <br><span>Build Stronger Structures.</span>",
    sub: "Integrated engineering solutions, dependable supply services, and civil construction for public and private sector clients across Zambia."
  },
  {
    badge: "Zambian-Owned & Operated",
    title: "Delivering Reliable & Quality <span>General Supplies.</span>",
    sub: "From high-grade construction materials to essential office equipment and school furniture delivered nationwide."
  },
  {
    badge: "Fully Compliant & Certified",
    title: "Pioneering <span>Civil Engineering & Roads.</span>",
    sub: "EIZ and NCC Grade 5 civil construction, earthworks, and telecom installations built to high professional standards."
  },
  {
    badge: "Approved Defence Vendor",
    title: "A <span>Trustworthy Partner</span> for Your Next Project",
    sub: "Full compliance with PACRA, ZRA, ZPPA, NAPSA, and workers' compensation frameworks."
  }
];

let heroParticleRaf = null;
let heroCarouselInterval = null;
let heroObserver = null;
let heroTextCycleInterval = null;
let heroResizeListener = null;

let playEventListener1 = null;
let playEventListener2 = null;

function initHeroParticles() {
  // 1. Cleanup all existing loops, listeners, and timers to prevent memory leaks in the SPA
  if (heroParticleRaf) {
    cancelAnimationFrame(heroParticleRaf);
    heroParticleRaf = null;
  }
  if (heroCarouselInterval) {
    clearInterval(heroCarouselInterval);
    heroCarouselInterval = null;
  }
  if (heroTextCycleInterval) {
    clearInterval(heroTextCycleInterval);
    heroTextCycleInterval = null;
  }
  if (heroObserver) {
    heroObserver.disconnect();
    heroObserver = null;
  }
  if (heroResizeListener) {
    window.removeEventListener('resize', heroResizeListener);
    heroResizeListener = null;
  }

  const oldV1 = document.getElementById('hero-video-1');
  const oldV2 = document.getElementById('hero-video-2');
  if (oldV1) {
    if (playEventListener1) oldV1.removeEventListener('play', playEventListener1);
    oldV1.onended = null;
    oldV1.pause();
    oldV1.src = '';
  }
  if (oldV2) {
    if (playEventListener2) oldV2.removeEventListener('play', playEventListener2);
    oldV2.onended = null;
    oldV2.pause();
    oldV2.src = '';
  }

  // 2. Initialize Canvas Particles (overlay layer on top of videos)
  initCanvasParticles();

  // 3. Initialize Video Background & Playback Controller
  initVideoBackgrounds();

  // 4. Initialize Text Transitions Cycle
  initTextCycling();
}

/**
 * MODERNIZED CANVAS PARTICLES DRAWING ENGINE (ES6 Class)
 */
class Shape {
  constructor(canvas, colors, shapes) {
    this.canvas = canvas;
    this.colors = colors;
    this.shapes = shapes;
    this.reset(true);
  }

  reset(init = false) {
    this.x = Math.random() * this.canvas.width;
    this.y = init ? Math.random() * this.canvas.height : this.canvas.height + 80;
    this.baseX = this.x;
    this.baseY = this.y;
    this.r = 14 + Math.random() * 42; // elegant particle sizes
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];
    this.alpha = 0.05 + Math.random() * 0.09;
    this.floatSpeed = 0.0003 + Math.random() * 0.0005;
    this.floatAmp = 15 + Math.random() * 25;
    this.floatOffset = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.005;
    this.rot = Math.random() * Math.PI * 2;
    this.vx = 0;
    this.vy = 0;
    this.repelRadius = 140 + Math.random() * 60;
    this.repelStrength = 2.0 + Math.random() * 1.5;
    this.friction = 0.90;
    this.spring = 0.015 + Math.random() * 0.010;
  }

  update(t, mouse) {
    const tx = this.baseX + Math.sin(t * this.floatSpeed + this.floatOffset) * this.floatAmp;
    const ty = this.baseY + Math.cos(t * this.floatSpeed * 0.7 + this.floatOffset) * (this.floatAmp * 0.6);
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;

    if (dist < this.repelRadius) {
      const force = (1 - dist / this.repelRadius) * this.repelStrength;
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

    // Reset if it goes off-screen vertically
    if (this.y < -80) {
      this.reset(false);
    }
  }

  draw(ctx, globalFade) {
    ctx.save();
    ctx.globalAlpha = this.alpha * globalFade;
    ctx.fillStyle = this.color;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    const r = this.r;

    if (this.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.shape === 'triangle') {
      ctx.beginPath();
      ctx.moveTo(0, -r);
      ctx.lineTo(r * 0.866, r * 0.5);
      ctx.lineTo(-r * 0.866, r * 0.5);
      ctx.closePath();
      ctx.fill();
    } else if (this.shape === 'diamond') {
      ctx.beginPath();
      ctx.moveTo(0, -r);
      ctx.lineTo(r * 0.6, 0);
      ctx.lineTo(0, r);
      ctx.lineTo(-r * 0.6, 0);
      ctx.closePath();
      ctx.fill();
    } else {
      const s = r * 1.2;
      ctx.fillRect(-s / 2, -s / 2, s, s);
    }
    ctx.restore();
  }
}

function initCanvasParticles() {
  const heroCanvas = document.getElementById('hero-canvas');
  if (!heroCanvas) return;
  const ctx = heroCanvas.getContext('2d');
  const heroSection = document.getElementById('home');
  if (!heroSection) return;

  const mouse = { x: -9999, y: -9999 };
  let globalFade = 0;

  const COLORS = ['#F5A623', '#FAC75A', '#D4891A', '#ffffff', '#F5A623'];
  const SHAPES = ['circle', 'triangle', 'diamond', 'rect'];

  let shapes = [];

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    heroCanvas.width = heroSection.offsetWidth * dpr;
    heroCanvas.height = heroSection.offsetHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    shapes = [];
    let count = Math.min(18, Math.floor(heroCanvas.width / 90));
    if (window.innerWidth < 768) count = 6;
    for (let i = 0; i < count; i++) {
      shapes.push(new Shape(heroCanvas, COLORS, SHAPES));
    }
  }

  function loop(t) {
    ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    if (globalFade < 1) globalFade += 0.04;
    shapes.forEach(s => {
      s.update(t, mouse);
      s.draw(ctx, globalFade);
    });
    heroParticleRaf = requestAnimationFrame(loop);
  }

  const mouseMoveHandler = e => {
    const rect = heroSection.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  };
  const mouseLeaveHandler = () => {
    mouse.x = -9999;
    mouse.y = -9999;
  };

  heroSection.addEventListener('mousemove', mouseMoveHandler);
  heroSection.addEventListener('mouseleave', mouseLeaveHandler);

  resize();
  loop(0);

  window.addEventListener('resize', resize);
  heroResizeListener = resize;
}

/**
 * DYNAMIC BACKGROUND VIDEO CONTROLLER
 */
function initVideoBackgrounds() {
  const v1 = document.getElementById('hero-video-1');
  const v2 = document.getElementById('hero-video-2');

  if (!v1 || !v2) return;

  const { videos, playbackRate, crossfadeDuration } = HERO_CONFIG;

  if (!videos || videos.length === 0) {
    const container = document.querySelector('.hero-video-container');
    if (container) container.style.display = 'none';
    return;
  }

  const applyPlaybackRate = (e) => {
    e.target.playbackRate = playbackRate;
  };

  playEventListener1 = applyPlaybackRate;
  playEventListener2 = applyPlaybackRate;

  v1.addEventListener('play', applyPlaybackRate);
  v2.addEventListener('play', applyPlaybackRate);

  if (videos.length === 1) {
    v1.src = videos[0];
    v1.loop = true;
    v1.muted = true;
    v1.playsInline = true;
    v1.classList.add('active');

    v2.classList.remove('active');
    v2.src = '';
    v2.onended = null;

    v1.load();
    v1.play().then(() => {
      v1.playbackRate = playbackRate;
    }).catch(err => console.log("Single video playback blocked:", err));
    return;
  }

  // Multiple videos mode
  let currentVideoIdx = 0;

  v1.loop = false;
  v2.loop = false;
  v1.muted = true;
  v2.muted = true;
  v1.playsInline = true;
  v2.playsInline = true;

  v1.src = videos[0];
  v2.src = videos[1];

  v1.classList.add('active');
  v2.classList.remove('active');

  v1.load();
  v2.load();

  v1.play().then(() => {
    v1.playbackRate = playbackRate;
  }).catch(err => console.log("Video 1 autoplay blocked:", err));

  let activeVideo = v1;
  let idleVideo = v2;

  const crossfadeVideo = () => {
    currentVideoIdx = (currentVideoIdx + 1) % videos.length;

    activeVideo.classList.remove('active');
    idleVideo.classList.add('active');

    idleVideo.play().then(() => {
      idleVideo.playbackRate = playbackRate;
    }).catch(err => console.warn("New active video failed to play:", err));

    setTimeout(() => {
      const nextIdx = (currentVideoIdx + 1) % videos.length;
      activeVideo.src = videos[nextIdx];
      activeVideo.load();

      const temp = activeVideo;
      activeVideo = idleVideo;
      idleVideo = temp;
    }, crossfadeDuration);
  };

  v1.onended = crossfadeVideo;
  v2.onended = crossfadeVideo;
}

/**
 * CYCLING HERO TEXT MANAGER
 */
function initTextCycling() {
  const badgeEl = document.getElementById('hero-badge');
  const titleEl = document.getElementById('hero-title');
  const subEl = document.getElementById('hero-sub');

  if (badgeEl && titleEl && subEl) {
    let currentTextIdx = 0;

    const cycleText = () => {
      badgeEl.classList.add('text-hidden');
      titleEl.classList.add('text-hidden');
      subEl.classList.add('text-hidden');

      setTimeout(() => {
        currentTextIdx = (currentTextIdx + 1) % HERO_TEXTS.length;
        const data = HERO_TEXTS[currentTextIdx];

        badgeEl.innerHTML = `&middot; ${data.badge} &middot;`;
        titleEl.innerHTML = data.title;
        subEl.innerHTML = data.sub;

        badgeEl.classList.remove('text-hidden');
        titleEl.classList.remove('text-hidden');
        subEl.classList.remove('text-hidden');
      }, 500);
    };

    heroTextCycleInterval = setInterval(cycleText, HERO_CONFIG.textCycleInterval);
  }
}

window.initHeroParticles = initHeroParticles;