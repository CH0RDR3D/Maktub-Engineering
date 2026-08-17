'use client';

import { useEffect, useRef } from 'react';

export default function InteractiveMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Pointer state with smooth lerping
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 280,
      active: false,
      lastMoved: 0
    };

    let isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    // Theme observer
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Particle nodes configuration
    let nodes = [];
    let pulses = [];
    let shockwaves = [];
    let orbs = [];

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const nodeCount = isMobile ? 24 : 48;
    const maxConnectionDistance = isMobile ? 110 : 140;
    const maxPulses = isMobile ? 8 : 16;
    const orbCount = isMobile ? 2 : 4;

    function initOrbs() {
      orbs = [];
      for (let i = 0; i < orbCount; i++) {
        const isGold = i % 2 === 0;
        orbs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15, // extremely slow drifting
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 80 + (isMobile ? 100 : 160),
          isGold: isGold,
          pulse: Math.random() * Math.PI * 2
        });
      }
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-initialize or balance nodes
      if (nodes.length === 0) {
        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            baseVx: (Math.random() - 0.5) * 0.45,
            baseVy: (Math.random() - 0.5) * 0.45,
            impulseVx: 0,
            impulseVy: 0,
            radius: Math.random() * 1.5 + 1.2,
            pulse: Math.random() * Math.PI * 2
          });
        }
      } else {
        // Keep particles in bounds
        nodes.forEach(node => {
          node.x = Math.min(Math.max(node.x, 0), width);
          node.y = Math.min(Math.max(node.y, 0), height);
        });
      }

      initOrbs();
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Pointer events (Desktop & Mobile Touch)
    function onPointerMove(e) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouse.targetX = clientX;
      mouse.targetY = clientY;
      mouse.active = true;
      mouse.lastMoved = Date.now();
    }

    function onPointerLeave() {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    }

    function onPointerDown(e) {
      const clientX = e.clientX;
      const clientY = e.clientY;

      shockwaves.push({
        x: clientX,
        y: clientY,
        radius: 0,
        maxRadius: isMobile ? 180 : 320,
        speed: isMobile ? 380 : 550,
        force: 7,
        alpha: 0.8
      });
    }

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchstart', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerLeave, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave, { passive: true });

    let isVisible = true;
    function handleVisibility() {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        loop(lastTime);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    }
    document.addEventListener('visibilitychange', handleVisibility);

    let lastTime = performance.now();

    function loop(currentTime) {
      if (!isVisible) return;
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Color scheme based on active theme
      const nodeColor = isDark ? '245, 166, 35' : '217, 119, 6'; // gold / amber
      const altNodeColor = isDark ? '37, 99, 235' : '27, 65, 146'; // navy / blue
      const lineColor = isDark ? '245, 166, 35' : '15, 23, 42';

      // 1. Draw background bokeh orbs
      orbs.forEach(orb => {
        orb.pulse += 0.005;
        orb.x += orb.vx * (1 + Math.sin(orb.pulse) * 0.1);
        orb.y += orb.vy * (1 + Math.cos(orb.pulse) * 0.1);

        // Soft screen wrapping
        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        const grad = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );

        if (orb.isGold) {
          if (isDark) {
            grad.addColorStop(0, 'rgba(245, 166, 35, 0.04)');
            grad.addColorStop(0.5, 'rgba(245, 166, 35, 0.015)');
            grad.addColorStop(1, 'rgba(9, 13, 22, 0)');
          } else {
            grad.addColorStop(0, 'rgba(245, 166, 35, 0.03)');
            grad.addColorStop(0.5, 'rgba(245, 166, 35, 0.01)');
            grad.addColorStop(1, 'rgba(248, 250, 252, 0)');
          }
        } else {
          if (isDark) {
            grad.addColorStop(0, 'rgba(37, 99, 235, 0.03)');
            grad.addColorStop(0.5, 'rgba(37, 99, 235, 0.012)');
            grad.addColorStop(1, 'rgba(9, 13, 22, 0)');
          } else {
            grad.addColorStop(0, 'rgba(27, 65, 146, 0.025)');
            grad.addColorStop(0.5, 'rgba(27, 65, 146, 0.008)');
            grad.addColorStop(1, 'rgba(248, 250, 252, 0)');
          }
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Subtle ambient cursor glow spot (multi-layered)
      if (mouse.active && mouse.x > -100 && mouse.y > -100) {
        const outerGlowRadius = isMobile ? 150 : 250;
        const innerGlowRadius = isMobile ? 50 : 80;

        // Outer Navy/Blue Glow
        const outerGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, outerGlowRadius
        );
        if (isDark) {
          outerGrad.addColorStop(0, 'rgba(37, 99, 235, 0.07)');
          outerGrad.addColorStop(0.5, 'rgba(37, 99, 235, 0.025)');
          outerGrad.addColorStop(1, 'rgba(9, 13, 22, 0)');
        } else {
          outerGrad.addColorStop(0, 'rgba(27, 65, 146, 0.05)');
          outerGrad.addColorStop(0.5, 'rgba(27, 65, 146, 0.015)');
          outerGrad.addColorStop(1, 'rgba(248, 250, 252, 0)');
        }
        ctx.fillStyle = outerGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, outerGlowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Inner Gold/Amber Glow
        const innerGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, innerGlowRadius
        );
        if (isDark) {
          innerGrad.addColorStop(0, 'rgba(245, 166, 35, 0.12)');
          innerGrad.addColorStop(0.6, 'rgba(245, 166, 35, 0.03)');
          innerGrad.addColorStop(1, 'rgba(9, 13, 22, 0)');
        } else {
          innerGrad.addColorStop(0, 'rgba(217, 119, 6, 0.1)');
          innerGrad.addColorStop(0.6, 'rgba(217, 119, 6, 0.02)');
          innerGrad.addColorStop(1, 'rgba(248, 250, 252, 0)');
        }
        ctx.fillStyle = innerGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, innerGlowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Update and draw shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += dt * sw.speed;
        sw.alpha = 1 - sw.radius / sw.maxRadius;

        if (sw.alpha <= 0) {
          shockwaves.splice(s, 1);
          continue;
        }

        // Expanding primary ripple ring
        ctx.strokeStyle = isDark
          ? `rgba(245, 166, 35, ${sw.alpha * 0.18})`
          : `rgba(217, 119, 6, ${sw.alpha * 0.15})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Secondary subtle wave ring
        ctx.strokeStyle = isDark
          ? `rgba(37, 99, 235, ${sw.alpha * 0.08})`
          : `rgba(27, 65, 146, ${sw.alpha * 0.06})`;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, Math.max(0, sw.radius - 20), 0, Math.PI * 2);
        ctx.stroke();
      }

      // 4. Update and draw nodes
      const n = nodes.length;
      for (let i = 0; i < n; i++) {
        const node = nodes[i];

        // Apply friction to dynamic impulse velocities
        node.impulseVx *= 0.94;
        node.impulseVy *= 0.94;

        // Organic slight drift + dynamic impulses
        node.pulse += 0.02;
        node.x += (node.baseVx * (1 + Math.sin(node.pulse) * 0.2)) + node.impulseVx;
        node.y += (node.baseVy * (1 + Math.cos(node.pulse) * 0.2)) + node.impulseVy;

        // Boundary bounce with soft damping
        if (node.x < 0) {
          node.x = 0;
          node.baseVx = Math.abs(node.baseVx);
          node.impulseVx = Math.abs(node.impulseVx) * 0.8;
        } else if (node.x > width) {
          node.x = width;
          node.baseVx = -Math.abs(node.baseVx);
          node.impulseVx = -Math.abs(node.impulseVx) * 0.8;
        }
        if (node.y < 0) {
          node.y = 0;
          node.baseVy = Math.abs(node.baseVy);
          node.impulseVy = Math.abs(node.impulseVy) * 0.8;
        } else if (node.y > height) {
          node.y = height;
          node.baseVy = -Math.abs(node.baseVy);
          node.impulseVy = -Math.abs(node.impulseVy) * 0.8;
        }

        // Pointer reaction (magnetic swarm attraction)
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            let force;
            const angle = Math.atan2(dy, dx);
            const comfortZone = 50; // Distance at which nodes balance attraction and repulsion

            if (dist > comfortZone) {
              // Attract: force goes from 0 at mouse.radius to peak at comfortZone
              const t = (dist - comfortZone) / (mouse.radius - comfortZone);
              force = (1 - t) * 0.95; 
            } else {
              // Repel: negative force pushes node away when inside comfort zone
              const t = dist / comfortZone;
              force = (t - 1) * 0.65; 
            }

            node.impulseVx += Math.cos(angle) * force;
            node.impulseVy += Math.sin(angle) * force;
          }
        }

        // Shockwave reaction
        shockwaves.forEach(sw => {
          const dx = node.x - sw.x;
          const dy = node.y - sw.y;
          const dist = Math.hypot(dx, dy);

          const thickness = 30;
          if (Math.abs(dist - sw.radius) < thickness) {
            const forceFactor = 1 - sw.radius / sw.maxRadius;
            if (forceFactor > 0) {
              const angle = dist === 0 ? Math.random() * Math.PI * 2 : Math.atan2(dy, dx);
              const proximity = 1 - Math.abs(dist - sw.radius) / thickness;
              const push = sw.force * forceFactor * proximity;
              node.impulseVx += Math.cos(angle) * push;
              node.impulseVy += Math.sin(angle) * push;
            }
          }
        });

        // Draw connections to nearby nodes
        for (let j = i + 1; j < n; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectionDistance) {
            // Proximity to mouse enhances line brightness
            let alphaFactor = 1 - dist / maxConnectionDistance;
            let mouseBoost = 0;

            if (mouse.active) {
              const midX = (node.x + node2.x) * 0.5;
              const midY = (node.y + node2.y) * 0.5;
              const distToMouse = Math.hypot(midX - mouse.x, midY - mouse.y);
              if (distToMouse < mouse.radius) {
                mouseBoost = (1 - distToMouse / mouse.radius) * 0.25;
              }
            }

            const baseAlpha = isDark ? 0.08 : 0.05;
            const finalAlpha = Math.min(baseAlpha * alphaFactor + mouseBoost, 0.4);

            ctx.strokeStyle = `rgba(${lineColor}, ${finalAlpha})`;
            ctx.lineWidth = mouseBoost > 0 ? 1.2 : 0.8;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();

            // Handle Neural Pulse generation
            if (pulses.length < maxPulses) {
              let spawnChance = 0.00015; // very rare ambient spawn
              if (mouse.active) {
                // If either node is close to mouse, spawn pulses much more frequently
                const distToMouse = Math.hypot(node.x - mouse.x, node.y - mouse.y);
                if (distToMouse < 180) {
                  spawnChance = 0.004;
                }
              }

              if (Math.random() < spawnChance) {
                const exists = pulses.some(p => (p.from === node && p.to === node2) || (p.from === node2 && p.to === node));
                if (!exists) {
                  pulses.push({
                    from: node,
                    to: node2,
                    progress: 0,
                    speed: Math.random() * 0.8 + 0.8
                  });
                }
              }
            }
          }
        }

        // Draw node point
        const isAccent = i % 3 === 0;
        const color = isAccent ? altNodeColor : nodeColor;
        const nodeAlpha = isDark ? (isAccent ? 0.6 : 0.4) : (isAccent ? 0.45 : 0.3);

        // Subtle glow halo for accent nodes
        if (isAccent) {
          ctx.fillStyle = `rgba(${color}, ${nodeAlpha * 0.25})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${color}, ${nodeAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Update and draw neural pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += dt * pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        // Interpolate current position
        const px = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
        const py = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;

        const pulseColor = isDark ? '245, 166, 35' : '27, 65, 146';
        const size = isDark ? 2.5 : 2.0;

        // Draw pulse outer radial glow
        const pulseGlow = ctx.createRadialGradient(px, py, 0, px, py, size * 3);
        pulseGlow.addColorStop(0, `rgba(${pulseColor}, 0.8)`);
        pulseGlow.addColorStop(0.5, `rgba(${pulseColor}, 0.3)`);
        pulseGlow.addColorStop(1, `rgba(${pulseColor}, 0)`);
        
        ctx.fillStyle = pulseGlow;
        ctx.beginPath();
        ctx.arc(px, py, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = isDark ? '#FFFFFF' : `rgba(${pulseColor}, 0.9)`;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(loop);
    }

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchstart', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerLeave);
      window.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('mouseleave', onPointerLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="interactive-bg-mesh"
      className="interactive-bg-mesh"
      aria-hidden="true"
    />
  );
}
