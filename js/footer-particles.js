// Footer-specific 2D particles with different interaction

let footerParticleRaf;
let _footerParticlesInitialized = false;
let footerCanvas, footerCtx;

function initFooterParticles() {
  if (_footerParticlesInitialized) return;
  _footerParticlesInitialized = true;

  const COLORS = ['#Fd9706', '#332618', '#022cfd', '#6B7B8C', '#FFFFFF'];

  // Create or reuse a single full-screen canvas overlay
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const isMobile = window.innerWidth < 768;

  const footer = document.querySelector('footer');
  if (!footer) return;

  footerCanvas = document.getElementById('footer-particles');
  if (!footerCanvas) {
    footerCanvas = document.createElement('canvas');
    footerCanvas.id = 'footer-particles';
    footerCanvas.style.position = 'fixed';
    footerCanvas.style.left = '0';
    footerCanvas.style.top = '0';
    footerCanvas.style.width = '100%';
    footerCanvas.style.height = '100%';
    footerCanvas.style.pointerEvents = 'none';
    footerCanvas.style.zIndex = '0';
    footer.insertBefore(footerCanvas, footer.firstChild);
  }

  footerCtx = footerCanvas.getContext('2d');

  function resizeFooterCanvas() {
    if (!footerCanvas || !footerCtx) return;
    const dpr = window.devicePixelRatio || 1;
    footerCanvas.width = Math.max(300, Math.floor(window.innerWidth * dpr));
    footerCanvas.height = Math.max(300, Math.floor(window.innerHeight * dpr));
    footerCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener('resize', resizeFooterCanvas);
  resizeFooterCanvas();

  const particles = [];
  const mouse = { x: -9999, y: -9999 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  class Particle {
    constructor() {
      this.fade = 0;
      this.reset(true);
    }
    reset(init) {
      this.r = 12 + Math.random() * 25; // visible sizes
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.vx = (Math.random() - 0.5) * 1.4;
      this.vy = (Math.random() - 0.5) * 1.4;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = 0.16 + Math.random() * 0.003; // reduced opacity
      this.mass = this.r * this.r * 0.009;
      this.baseX = this.x; this.baseY = this.y;
      this.floatAmp = 8 + Math.random() * 16;
      this.floatSpeed = 0.0005 + Math.random() * 0.001;
      this.shape = ['circle','triangle','rect','diamond','plus'][Math.floor(Math.random() * 10)];
    }
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha * this.fade;
      ctx.fillStyle = this.color;
      ctx.strokeStyle = 'rgba(255,255,255,0.18)';
      ctx.lineWidth = Math.max(1, this.r * 0.08);
      ctx.shadowBlur = Math.max(6, this.r * 0.12);
      ctx.shadowColor = 'rgba(0,0,0,0.08)';
      ctx.translate(this.x, this.y);
      ctx.rotate((this.shape === 'triangle' || this.shape === 'diamond' || this.shape === 'rect') ? Math.PI / 5 : 0);
      if (this.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else if (this.shape === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(0, -this.r);
        ctx.lineTo(this.r * 0.87, this.r * 0.5);
        ctx.lineTo(-this.r * 0.87, this.r * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (this.shape === 'rect') {
        ctx.beginPath();
        ctx.rect(-this.r * 0.75, -this.r * 0.75, this.r * 1.5, this.r * 1.5);
        ctx.fill();
        ctx.stroke();
      } else if (this.shape === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(0, -this.r);
        ctx.lineTo(this.r * 0.7, 0);
        ctx.lineTo(0, this.r);
        ctx.lineTo(-this.r * 0.7, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (this.shape === 'plus') {
        const size = this.r * 0.7;
        ctx.beginPath();
        ctx.rect(-size / 3, -size, size / 1.5, size * 2);
        ctx.rect(-size, -size / 3, size * 2, size / 1.5);
        ctx.fill();
      }
      ctx.restore();
    }
    update(dt, t) {
      // Smooth fade-in
      if (this.fade < 1) this.fade += 0.015 * dt;

      // float motion towards base
      const tx = this.baseX + Math.sin(t * this.floatSpeed) * this.floatAmp;
      const ty = this.baseY + Math.cos(t * this.floatSpeed * 0.7) * (this.floatAmp * 0.6);
      this.vx += (tx - this.x) * 0.002;
      this.vy += (ty - this.y) * 0.002;

      // mouse repel
      const dx = mouse.x - this.x; const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx*dx + dy*dy) || 1;
      if (dist < 180) {
        const force = (1 - dist/180) * 3.2;
        this.vx -= (dx/dist) * force;
        this.vy -= (dy/dist) * force;
      }

      // integrate
      this.vx *= 0.985; this.vy *= 0.985;
      this.x += this.vx * dt;
      this.y += this.vy * dt;

      // bounce off edges
      if (this.x - this.r < 0) { this.x = this.r; this.vx = Math.abs(this.vx) * 0.9; }
      if (this.x + this.r > window.innerWidth) { this.x = window.innerWidth - this.r; this.vx = -Math.abs(this.vx) * 0.9; }
      if (this.y - this.r < 0) { this.y = this.r; this.vy = Math.abs(this.vy) * 0.9; }
      if (this.y + this.r > window.innerHeight) { this.y = window.innerHeight - this.r; this.vy = -Math.abs(this.vy) * 0.9; }
    }
  }

  function spawn(count) {
    let attempts = 0;
    while (particles.length < count && attempts < count * 8) {
      const p = new Particle();
      // avoid immediate overlap
      let ok = true;
      for (let q of particles) {
        const dx = p.x - q.x, dy = p.y - q.y;
        if (Math.sqrt(dx*dx + dy*dy) < p.r + q.r + 6) { ok = false; break; }
      }
      if (ok) particles.push(p);
      attempts++;
    }
  }

  // initial spawn based on viewport
  let baseCount = Math.max(12, Math.round((window.innerWidth * window.innerHeight) / (1200 * 800) * 30));
  if (window.innerWidth < 768) {
    baseCount = Math.min(10, baseCount); // Cap at 10 for mobile
  }
  spawn(baseCount);

  function resolveCollisions() {
    // Optimization: Skip expensive collision detection on mobile to save CPU/Battery
    if (window.innerWidth < 768) return;

    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        let dx = b.x - a.x, dy = b.y - a.y;
        let dist = Math.sqrt(dx*dx + dy*dy) || 0.001;
        const minDist = a.r + b.r + 0.5;
        if (dist < minDist) {
          // push apart
          const overlap = (minDist - dist) / 2;
          const nx = dx / dist, ny = dy / dist;
          a.x -= nx * overlap; a.y -= ny * overlap;
          b.x += nx * overlap; b.y += ny * overlap;

          // elastic collision (simple)
          const dvx = b.vx - a.vx, dvy = b.vy - a.vy;
          const impact = dvx * nx + dvy * ny;
          if (impact > 0) continue; // moving apart
          const impulse = (2 * impact) / (a.mass + b.mass);
          a.vx += impulse * b.mass * nx; a.vy += impulse * b.mass * ny;
          b.vx -= impulse * a.mass * nx; b.vy -= impulse * a.mass * ny;
        }
      }
    }
  }

  let last = performance.now();
  function loop(now) {
    const dt = Math.min(60, now - last) / 16.6667; // normalize to ~60fps units
    last = now;
    footerCtx.clearRect(0, 0, footerCanvas.width, footerCanvas.height);

    // update & draw
    for (let p of particles) {
      p.update(dt, now);
    }

    // collisions
    resolveCollisions();

    for (let p of particles) p.draw(footerCtx);

    footerParticleRaf = requestAnimationFrame(loop);
  }

  footerParticleRaf = requestAnimationFrame(loop);

  // Expose controls for debugging
  window.startParticles = function() { if (!footerParticleRaf) footerParticleRaf = requestAnimationFrame(loop); };
  window.stopParticles = function() { if (footerParticleRaf) { cancelAnimationFrame(footerParticleRaf); footerParticleRaf = null; } };
}

window.initFooterParticles = initFooterParticles;

/* 

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const isMobile = window.innerWidth < 768;

  const footer = document.querySelector('footer');
  if (!footer) return;

  let canvas = document.getElementById('footer-particles');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'footer-particles';
    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    footer.insertBefore(canvas, footer.firstChild);
  }

  const ctx = canvas.getContext('2d');

  function resizeFooterCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = footer.getBoundingClientRect();
    canvas.width = Math.max(300, Math.floor(window.innerWidth * dpr));
    canvas.height = Math.max(200, Math.floor(footer.offsetHeight * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resizeFooterCanvas();
  const resizeObs = new ResizeObserver(resizeFooterCanvas);
  resizeObs.observe(footer);

  const particles = [];
  const COLORS = ['#F5A623', '#FAC75A', '#D4891A', 'rgba(255,200,100,0.5)'];

  class FooterParticle {
    constructor(x, y) {
      this.x = x !== undefined ? x : Math.random() * canvas.width;
      this.y = y !== undefined ? y : Math.random() * canvas.height;
      this.r = 4 + Math.random() * 6;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = 0.4 + Math.random() * 0.35;
      this.pulsePhase = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.002 + Math.random() * 0.002;
      this.type = ['dot', 'ring'][Math.floor(Math.random() * 2)];
    }
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha * (0.6 + 0.4 * Math.sin(this.pulsePhase));
      ctx.fillStyle = this.color;
      ctx.translate(this.x, this.y);

      if (this.type === 'dot') {
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }
    update() {
      this.pulsePhase += this.pulseSpeed;

      // Brownian motion - slower, more controlled
      this.vx += (Math.random() - 0.5) * 0.08;
      this.vy += (Math.random() - 0.5) * 0.08;

      this.vx *= 0.93; // friction
      this.vy *= 0.93;

      this.x += this.vx;
      this.y += this.vy;

      // Bounce off edges
      if (this.x - this.r < 0) {
        this.x = this.r;
        this.vx = Math.abs(this.vx) * 0.8;
      }
      if (this.x + this.r > canvas.width) {
        this.x = canvas.width - this.r;
        this.vx = -Math.abs(this.vx) * 0.8;
      }
      if (this.y - this.r < 0) {
        this.y = this.r;
        this.vy = Math.abs(this.vy) * 0.8;
      }
      if (this.y + this.r > canvas.height) {
        this.y = canvas.height - this.r;
        this.vy = -Math.abs(this.vy) * 0.8;
      }
    }
  }

  // Initial spawn
  let footerParticleCount = Math.max(8, Math.round((canvas.width * canvas.height) / (1200 * 400) * 20));
  if (window.innerWidth < 768) {
    footerParticleCount = 6; // Very low count for mobile footer
  }

  for (let i = 0; i < footerParticleCount; i++) {
    particles.push(new FooterParticle());
  }

  let lastTime = performance.now();
  function loop(now) {
    const dt = Math.min(60, now - lastTime) / 16.6667;
    lastTime = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Optimization: Skip connections on mobile to reduce draw calls
    const skipConnections = isMobile;

    // Update and draw particles
    for (let p of particles) {
      p.update();
      p.draw(ctx);
    }

    // Draw connecting lines between nearby particles
    if (!skipConnections) {
    ctx.strokeStyle = 'rgba(245, 166, 35, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.globalAlpha = 0.1 * (1 - dist / 100);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    }

    footerParticleRaf = requestAnimationFrame(loop);
  }

  footerParticleRaf = requestAnimationFrame(loop);

  window.stopFooterParticles = function() {
    if (footerParticleRaf) {
      cancelAnimationFrame(footerParticleRaf);
      footerParticleRaf = null;
    }
    resizeObs.disconnect();
  };
}

window.initFooterParticles = initFooterParticles;
*/
