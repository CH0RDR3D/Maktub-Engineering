// Footer-specific 2D particles with different interaction
let footerParticleRaf;
let _footerParticlesInitialized = false;

function initFooterParticles() {
  if (_footerParticlesInitialized) return;
  _footerParticlesInitialized = true;

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

    // Update and draw particles
    for (let p of particles) {
      p.update();
      p.draw(ctx);
    }

    // Draw connecting lines between nearby particles
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
