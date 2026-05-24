  // Navbar scroll effect
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });

  // Mobile menu
  var ham = document.getElementById('ham');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuOpen = false;
  ham.addEventListener('click', function() {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    ham.querySelector('i').className = (menuOpen ? 'ti ti-x' : 'ti ti-menu-2');
    ham.querySelector('i').style.fontSize = '24px';
  });
  function closeMobileMenu() {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    ham.querySelector('i').className = 'ti ti-menu-2';
    ham.querySelector('i').style.fontSize = '24px';
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Service tabs
  function switchTab(btn, panelId) {
    document.querySelectorAll('.stab').forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.service-panel').forEach(function(p) { p.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById(panelId).classList.add('active');
  }

  // Accordion
  function toggleAcc(header) {
    var body = header.nextElementSibling;
    var wasOpen = header.classList.contains('open');
    var panel = header.closest('.service-panel');
    panel.querySelectorAll('.accordion-header').forEach(function(h) {
      h.classList.remove('open');
      h.nextElementSibling.classList.remove('open');
    });
    if (!wasOpen) {
      header.classList.add('open');
      body.classList.add('open');
    }
  }

  // Counter animation
  function animateCounter(el) {
    var target = parseInt(el.dataset.target);
    var suffix = el.dataset.suffix || '';
    var duration = 1200;
    var start = null;
    function update(ts) {
      if (!start) start = ts;
      var elapsed = ts - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // Intersection observer for reveals + counters
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        var counters = entry.target.querySelectorAll('[data-target]');
        counters.forEach(animateCounter);
        if (entry.target.dataset.target) animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function(el) {
    observer.observe(el);
  });

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

  // Contact form
  function handleSubmit() {
    var name = document.getElementById('cf-name').value.trim();
    var email = document.getElementById('cf-email').value.trim();
    var phone = document.getElementById('cf-phone').value.trim();
    var service = document.getElementById('cf-service').value;
    var message = document.getElementById('cf-message').value.trim();
    var btn = document.getElementById('submitBtn');
    if (!name || !email || !message) {
      btn.style.background = '#e87171';
      btn.style.color = 'white';
      btn.innerHTML = '<i class="ti ti-alert-triangle" aria-hidden="true"></i> Please fill in name, email and message';
      setTimeout(function() {
        btn.style.background = '';
        btn.style.color = '';
        btn.innerHTML = '<i class="ti ti-send" aria-hidden="true"></i> Send Message';
      }, 2800);
      return;
    }
    var subject = encodeURIComponent('Enquiry from ' + name + (service ? ' \u2014 ' + service : ''));
    var body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Phone: ' + (phone || 'N/A') + '\n' +
      'Service: ' + (service || 'N/A') + '\n\n' +
      'Message:\n' + message
    );
    window.location.href = 'mailto:maktubengineering@gmail.com?subject=' + subject + '&body=' + body;
    btn.style.background = '#28b450';
    btn.style.color = 'white';
    btn.innerHTML = '<i class="ti ti-check" aria-hidden="true"></i> Email client opened!';
    setTimeout(function() {
      btn.style.background = '';
      btn.style.color = '';
      btn.innerHTML = '<i class="ti ti-send" aria-hidden="true"></i> Send Message';
    }, 3000);
  }
