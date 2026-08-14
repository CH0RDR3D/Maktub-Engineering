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

  // 2. Initialize Video Background & Playback Controller
  initVideoBackgrounds();

  // 3. Initialize Text Transitions Cycle
  initTextCycling();
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
  v2.preload = 'none';

  v1.classList.add('active');
  v2.classList.remove('active');

  v1.load();

  v1.play().then(() => {
    v1.playbackRate = playbackRate;
  }).catch(err => console.log("Video 1 autoplay blocked:", err));

  let activeVideo = v1;
  let idleVideo = v2;

  const crossfadeVideo = () => {
    currentVideoIdx = (currentVideoIdx + 1) % videos.length;

    activeVideo.classList.remove('active');
    idleVideo.classList.add('active');
    idleVideo.src = videos[currentVideoIdx];
    idleVideo.load();

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