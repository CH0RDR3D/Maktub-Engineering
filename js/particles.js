let particleRaf;
let _particlesInitialized = false;

function initParticles() {
  if (_particlesInitialized) return; // idempotent: do not re-create
  _particlesInitialized = true;

  const COLORS = ['#FF8C42', '#FFB86B', '#D46A00', '#6B7B8C', '#FFFFFF'];

  // Create or reuse a single full-screen canvas overlay
  let canvas = document.getElementById('persistent-particles');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'persistent-particles';
    canvas.style.position = 'fixed';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.mixBlendMode = 'normal';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(300, Math.floor(window.innerWidth * dpr));
    canvas.height = Math.max(300, Math.floor(window.innerHeight * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener('resize', resize);
  resize();

  const particles = [];
  const mouse = { x: -9999, y: -9999 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(init) {
      this.r = 12 + Math.random() * 34; // visible sizes
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.vx = (Math.random() - 0.5) * 1.4;
      this.vy = (Math.random() - 0.5) * 1.4;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = 0.16 + Math.random() * 0.18; // reduced opacity
      this.mass = this.r * this.r * 0.009;
      this.baseX = this.x; this.baseY = this.y;
      this.floatAmp = 8 + Math.random() * 16;
      this.floatSpeed = 0.0005 + Math.random() * 0.001;
      this.shape = ['circle','triangle','rect','diamond','plus'][Math.floor(Math.random() * 5)];
    }
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
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
  const baseCount = Math.max(12, Math.round((window.innerWidth * window.innerHeight) / (1200 * 800) * 30));
  spawn(baseCount);

  function resolveCollisions() {
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // update & draw
    for (let p of particles) {
      p.update(dt, now);
    }

    // collisions
    resolveCollisions();

    for (let p of particles) p.draw(ctx);

    particleRaf = requestAnimationFrame(loop);
  }

  particleRaf = requestAnimationFrame(loop);

  // Expose controls for debugging
  window.startParticles = function() { if (!particleRaf) particleRaf = requestAnimationFrame(loop); };
  window.stopParticles = function() { if (particleRaf) { cancelAnimationFrame(particleRaf); particleRaf = null; } };
}

window.initParticles = initParticles;