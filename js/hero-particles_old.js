
  // ── Pointer-reactive floating shapes ──
  (function() {
    var canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var mouse = { x: -9999, y: -9999 };
    var hero = document.getElementById('home');

    var COLORS = ['#F5A623','#FAC75A','#D4891A','#ffffff','#F5A623'];
    var SHAPES = ['circle','triangle','diamond','rect'];

    function Shape(i) {
      this.i = i;
      this.reset(true);
    }
    Shape.prototype.reset = function(init) {
      this.x = Math.random() * canvas.width;
      this.y = init ? Math.random() * canvas.height : canvas.height + 80;
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
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 1.5;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      var r = this.r;
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
        var s = r * 1.2;
        ctx.fillRect(-s / 2, -s / 2, s, s);
      }
      ctx.restore();
    };

    var shapes = [];
    function init() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
      shapes = [];
      var count = Math.min(22, Math.floor(canvas.width / 55));
      for (var i = 0; i < count; i++) shapes.push(new Shape(i));
    }

    var raf;
    function loop(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < shapes.length; i++) {
        shapes[i].update(t);
        shapes[i].draw();
      }
      raf = requestAnimationFrame(loop);
    }

    hero.addEventListener('mousemove', function(e) {
      var rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('mouseleave', function() {
      mouse.x = -9999; mouse.y = -9999;
    });
    hero.addEventListener('touchmove', function(e) {
      var rect = hero.getBoundingClientRect();
      var t = e.touches[0];
      mouse.x = t.clientX - rect.left;
      mouse.y = t.clientY - rect.top;
      e.preventDefault();
    }, { passive: false });
    hero.addEventListener('touchend', function() {
      mouse.x = -9999; mouse.y = -9999;
    });

    var resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        cancelAnimationFrame(raf);
        init();
        requestAnimationFrame(loop);
      }, 150);
    });

    init();
    requestAnimationFrame(loop);
  })();


/*

// Hero-specific particles with geometric wavelines
let heroParticleRaf;
let _heroParticlesInitialized = false;

function initHeroParticles() {
  if (_heroParticlesInitialized) return;
  _heroParticlesInitialized = true;

  const heroCanvas = document.getElementById('hero-canvas');
  if (!heroCanvas) return;

  const ctx = heroCanvas.getContext('2d');
  const heroSection = document.getElementById('home');
  if (!heroSection) return;

  function resizeHeroCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = heroSection.getBoundingClientRect();
    heroCanvas.width = Math.max(300, Math.floor(window.innerWidth * dpr));
    heroCanvas.height = Math.max(300, Math.floor(Math.max(window.innerHeight, 600) * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resizeHeroCanvas();
  window.addEventListener('resize', resizeHeroCanvas);

  const particles = [];
  const wavelines = [];
  const COLORS = ['#FAC75A', '#F5A623', '#D4891A', 'rgba(255,255,255,0.4)', 'rgba(255,200,100,0.3)'];

  class HeroParticle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * Math.max(window.innerHeight, 600);
      this.r = 3 + Math.random() * 8;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = -0.3 + Math.random() * 0.4;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = 0.3 + Math.random() * 0.4;
      this.wobble = Math.random() * Math.PI * 2;
      this.wobbleSpeed = 0.002 + Math.random() * 0.003;
      this.shape = ['circle', 'hex', 'star'][Math.floor(Math.random() * 3)];
    }
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.translate(this.x, this.y);

      if (this.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.fill();
      } else if (this.shape === 'hex') {
        ctx.rotate(this.wobble);
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = Math.cos(angle) * this.r;
          const y = Math.sin(angle) * this.r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      } else if (this.shape === 'star') {
        ctx.rotate(this.wobble);
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
          const x = Math.cos(angle) * this.r;
          const y = Math.sin(angle) * this.r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }
    update(t) {
      this.wobble += this.wobbleSpeed;
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.04; // gravity

      if (this.y - this.r > Math.max(window.innerHeight, 600)) {
        this.reset();
      }
    }
  }

   
  class Waveline {
    constructor(startY) {
      this.startY = startY;
      this.x = -50;
      this.vx = 2 + Math.random() * 1.5;
      this.amplitude = 15 + Math.random() * 25;
      this.frequency = 0.01 + Math.random() * 0.01;
      this.phase = Math.random() * Math.PI * 2;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = 0.15 + Math.random() * 0.15;
      this.thickness = 2 + Math.random() * 3;
    }
    
    draw(ctx) {
      ctx.save();
      ctx.strokeStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.lineWidth = this.thickness;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();

      for (let i = 0; i < window.innerWidth + 100; i += 4) {
        const sine = Math.sin((i + this.phase) * this.frequency) * this.amplitude;
        const y = this.startY + sine;
        if (i === 0) ctx.moveTo(this.x + i, y);
        else ctx.lineTo(this.x + i, y);
      }
      ctx.stroke();
      ctx.restore();
    }
    update() {
      this.x += this.vx;
      this.phase += 0.15;
    }
  }

  // Initial spawn
  for (let i = 0; i < 40; i++) {
    particles.push(new HeroParticle());
  }

  for (let i = 0; i < 8; i++) {
    wavelines.push(new Waveline(Math.random() * Math.max(window.innerHeight, 600) * 0.7));
  }

  let lastTime = performance.now();
  function loop(now) {
    const dt = Math.min(60, now - lastTime) / 16.6667;
    lastTime = now;

    ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);

    // Update and draw wavelines
    for (let w of wavelines) {
      w.update();
      w.draw(ctx);
      if (w.x > window.innerWidth + 100) {
        wavelines.splice(wavelines.indexOf(w), 1);
        wavelines.push(new Waveline(Math.random() * Math.max(window.innerHeight, 600) * 0.7));
      }
    }

    // Update and draw particles
    for (let p of particles) {
      p.update(now);
      p.draw(ctx);
    }

    heroParticleRaf = requestAnimationFrame(loop);
  }

  heroParticleRaf = requestAnimationFrame(loop);

  window.stopHeroParticles = function() {
    if (heroParticleRaf) {
      cancelAnimationFrame(heroParticleRaf);
      heroParticleRaf = null;
    }
  };
}

window.initHeroParticles = initHeroParticles;
*/