/**
 * Hero Implementation - Canvas Particles + Video Backgrounds & Cycling Text
 */

let heroParticleRaf = null;
let heroCarouselInterval = null;
let heroObserver = null;
let heroTextCycleInterval = null;
let heroResizeListener = null;

let playEventListener1 = null;
let playEventListener2 = null;

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
 * RESTORED CANVAS PARTICLES DRAWING ENGINE
 */
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

  function Shape() {
    this.reset(true);
  }

  Shape.prototype.reset = function (init) {
    this.x = Math.random() * heroCanvas.width;
    this.y = init ? Math.random() * heroCanvas.height : heroCanvas.height + 80;
    this.baseX = this.x;
    this.baseY = this.y;
    this.r = 14 + Math.random() * 42; // slightly smaller so they are elegant
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    this.alpha = 0.05 + Math.random() * 0.09;
    this.floatSpeed = 0.0003 + Math.random() * 0.0005;
    this.floatAmp = 15 + Math.random() * 25;
    this.floatOffset = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.005;
    this.rot = Math.random() * Math.PI * 2;
    this.vx = 0; this.vy = 0;
    this.repelRadius = 140 + Math.random() * 60;
    this.repelStrength = 2.0 + Math.random() * 1.5;
    this.friction = 0.90;
    this.spring = 0.015 + Math.random() * 0.010;
  };

  Shape.prototype.update = function (t) {
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

  Shape.prototype.draw = function () {
    ctx.save();
    ctx.globalAlpha = this.alpha * globalFade;
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
    var count = Math.min(18, Math.floor(heroCanvas.width / 90));
    if (window.innerWidth < 768) count = 6;
    for (var i = 0; i < count; i++) shapes.push(new Shape());
  }

  function loop(t) {
    ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    if (globalFade < 1) globalFade += 0.04;
    shapes.forEach(s => { s.update(t); s.draw(); });
    heroParticleRaf = requestAnimationFrame(loop);
  }

  const mouseMoveHandler = e => {
    var rect = heroSection.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  };
  const mouseLeaveHandler = () => { mouse.x = -9999; mouse.y = -9999; };

  heroSection.addEventListener('mousemove', mouseMoveHandler);
  heroSection.addEventListener('mouseleave', mouseLeaveHandler);

  // Expose mouse events for removal if pages swap, but SPA replacing whole innerHTML handles it natively.
  resize();
  loop(0);

  // Resize Listener Setup
  window.addEventListener('resize', resize);
  heroResizeListener = resize;
}

/**
 * DYNAMIC BACKGROUND VIDEO CONTROLLER
 */
function initVideoBackgrounds() {
  const v1 = document.getElementById('hero-video-1');
  const v2 = document.getElementById('hero-video-2');

  if (v1 && v2) {
    const videos = ['resources/herovid1.mp4', 'resources/herovid2.mp4'];
    let currentVideoIdx = 0;

    v1.muted = true;
    v2.muted = true;
    v1.playsInline = true;
    v2.playsInline = true;

    // Load initial source URLs
    v1.src = videos[0];
    v2.src = videos[1];

    v1.classList.add('active');
    v2.classList.remove('active');

    v1.load();
    v2.load();

    // playback rate reset hook (0.55x speed play speed)
    const applySlowPlayback = (e) => {
      e.target.playbackRate = 0.55;
    };

    v1.addEventListener('play', applySlowPlayback);
    v2.addEventListener('play', applySlowPlayback);

    playEventListener1 = applySlowPlayback;
    playEventListener2 = applySlowPlayback;

    // Start active video playback
    v1.play().then(() => {
      v1.playbackRate = 0.55;
    }).catch(err => console.log("Video 1 autoplay blocked:", err));

    let activeVideo = v1;
    let idleVideo = v2;

    const crossfadeVideo = () => {
      // Swap active index to next video
      currentVideoIdx = (currentVideoIdx + 1) % videos.length;

      // Class toggles (handles CSS opacity fades)
      activeVideo.classList.remove('active');
      idleVideo.classList.add('active');

      // Play the newly active video
      idleVideo.play().then(() => {
        idleVideo.playbackRate = 0.55;
      }).catch(err => console.warn("New active video failed to play:", err));

      // After crossfade completes, prep idle video for next sequence
      setTimeout(() => {
        const nextIdx = (currentVideoIdx + 1) % videos.length;
        activeVideo.src = videos[nextIdx];
        activeVideo.load();

        // Swap reference variables
        const temp = activeVideo;
        activeVideo = idleVideo;
        idleVideo = temp;
      }, 1600); // 1.6s allows visual crossfade to finish completely
    };

    // Play to full length (ended event fires, then crossfades)
    v1.onended = crossfadeVideo;
    v2.onended = crossfadeVideo;
  }
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
      // 1. Trigger slide and fade out transition
      badgeEl.classList.add('text-hidden');
      titleEl.classList.add('text-hidden');
      subEl.classList.add('text-hidden');

      // 2. Swaps text content and fades back in after transition ends
      setTimeout(() => {
        currentTextIdx = (currentTextIdx + 1) % HERO_TEXTS.length;
        const data = HERO_TEXTS[currentTextIdx];

        badgeEl.innerHTML = `&middot; ${data.badge} &middot;`;
        titleEl.innerHTML = data.title;
        subEl.innerHTML = data.sub;

        // Reveal animations
        badgeEl.classList.remove('text-hidden');
        titleEl.classList.remove('text-hidden');
        subEl.classList.remove('text-hidden');
      }, 500);
    };

    // Cycle text elements every 7.5 seconds
    heroTextCycleInterval = setInterval(cycleText, 7500);
  }
}

window.initHeroParticles = initHeroParticles;