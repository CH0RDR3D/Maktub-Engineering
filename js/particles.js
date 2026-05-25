let particleRaf;

function initParticles(){
  const canvases = [];
  
  // Find all particle canvases
  const heroCanvas = document.getElementById('hero-canvas');
  if (heroCanvas) canvases.push({ canvas: heroCanvas, container: document.getElementById('home') });
  
  document.querySelectorAll('.page-canvas').forEach(canvas => {
    const section = canvas.closest('section');
    if (section) canvases.push({ canvas, container: section });
  });

  if (canvases.length === 0) return;
  
  if (particleRaf) cancelAnimationFrame(particleRaf);

  const COLORS = ['#F5A623','#FAC75A','#D4891A','#ffffff','#F5A623'];
  const SHAPES = ['circle','triangle','diamond','rect'];

  class Shape {
    constructor(canvas) { 
      this.canvas = canvas;
      this.reset(true); 
    }
    reset(init) {
      this.x = Math.random() * this.canvas.width;
      this.y = init ? Math.random() * this.canvas.height : this.canvas.height + 80;
      this.baseX = this.x; this.baseY = this.y;
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
    }
    update(t, mouse) {
      let tx = this.baseX + Math.sin(t * this.floatSpeed + this.floatOffset) * this.floatAmp;
      let ty = this.baseY + Math.cos(t * this.floatSpeed * 0.7 + this.floatOffset) * (this.floatAmp * 0.6);
      let dx = mouse.x - this.x; let dy = mouse.y - this.y;
      let dist = Math.sqrt(dx * dx + dy * dy) || 1;
      if (dist < this.repelRadius) {
        let force = (1 - dist / this.repelRadius) * this.repelStrength;
        this.vx -= (dx / dist) * force; this.vy -= (dy / dist) * force;
      }
      this.vx += (tx - this.x) * this.spring; this.vy += (ty - this.y) * this.spring;
      this.vx *= this.friction; this.vy *= this.friction;
      this.x += this.vx; this.y += this.vy; this.rot += this.rotSpeed;
    }
    draw(ctx) {
      ctx.save(); ctx.globalAlpha = this.alpha; ctx.fillStyle = this.color;
      ctx.translate(this.x, this.y); ctx.rotate(this.rot);
      let r = this.r;
      if (this.shape === 'circle') { ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill(); }
      else if (this.shape === 'triangle') { ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(r * 0.866, r * 0.5); ctx.lineTo(-r * 0.866, r * 0.5); ctx.closePath(); ctx.fill(); }
      else if (this.shape === 'diamond') { ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(r * 0.6, 0); ctx.lineTo(0, r); ctx.lineTo(-r * 0.6, 0); ctx.closePath(); ctx.fill(); }
      else { ctx.fillRect(-r * 0.6, -r * 0.6, r * 1.2, r * 1.2); }
      ctx.restore();
    }
  }

  const particles = {};
  const mouseStates = {};

  canvases.forEach(({ canvas, container }) => {
    const ctx = canvas.getContext('2d');
    particles[canvas.id || canvas.className] = [];
    mouseStates[canvas.id || canvas.className] = { x: -9999, y: -9999 };

    function setup() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      particles[canvas.id || canvas.className] = [];
      let count = Math.min(22, Math.floor(canvas.width / 55));
      for (let i = 0; i < count; i++) particles[canvas.id || canvas.className].push(new Shape(canvas));
    }

    container.onmousemove = e => {
      let r = container.getBoundingClientRect();
      mouseStates[canvas.id || canvas.className] = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    container.onmouseleave = () => mouseStates[canvas.id || canvas.className] = { x: -9999, y: -9999 };
    window.onresize = () => setup();

    setup();
  });

  function loop(t) {
    canvases.forEach(({ canvas, container }) => {
      const ctx = canvas.getContext('2d');
      const key = canvas.id || canvas.className;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (particles[key]) {
        particles[key].forEach(s => {
          s.update(t, mouseStates[key]);
          s.draw(ctx);
        });
      }
    });
    particleRaf = requestAnimationFrame(loop);
  }

  loop(0);
}
window.initParticles = initParticles;