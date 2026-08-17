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
      radius: 160,
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
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const nodeCount = isMobile ? 24 : 48;
    const maxConnectionDistance = isMobile ? 110 : 140;

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
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            originX: 0,
            originY: 0,
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

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchstart', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerLeave, { passive: true });
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

      // Subtle ambient cursor glow spot
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const glowRadius = isMobile ? 120 : 180;
        const radialGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        );
        if (isDark) {
          radialGradient.addColorStop(0, 'rgba(245, 166, 35, 0.08)');
          radialGradient.addColorStop(0.5, 'rgba(27, 65, 146, 0.04)');
          radialGradient.addColorStop(1, 'rgba(9, 13, 22, 0)');
        } else {
          radialGradient.addColorStop(0, 'rgba(245, 166, 35, 0.09)');
          radialGradient.addColorStop(0.5, 'rgba(27, 65, 146, 0.03)');
          radialGradient.addColorStop(1, 'rgba(248, 250, 252, 0)');
        }
        ctx.fillStyle = radialGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw nodes
      const n = nodes.length;
      for (let i = 0; i < n; i++) {
        const node = nodes[i];

        // Organic slight drift
        node.pulse += 0.02;
        node.x += node.vx * (1 + Math.sin(node.pulse) * 0.2);
        node.y += node.vy * (1 + Math.cos(node.pulse) * 0.2);

        // Boundary bounce with soft damping
        if (node.x < 0) {
          node.x = 0;
          node.vx = Math.abs(node.vx);
        } else if (node.x > width) {
          node.x = width;
          node.vx = -Math.abs(node.vx);
        }
        if (node.y < 0) {
          node.y = 0;
          node.vy = Math.abs(node.vy);
        } else if (node.y > height) {
          node.y = height;
          node.vy = -Math.abs(node.vy);
        }

        // Pointer reaction (subtle spring / displacement)
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 1.8;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }
        }

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
          }
        }

        // Draw node point
        const isAccent = i % 3 === 0;
        const color = isAccent ? altNodeColor : nodeColor;
        const nodeAlpha = isDark ? (isAccent ? 0.45 : 0.35) : (isAccent ? 0.35 : 0.25);

        ctx.fillStyle = `rgba(${color}, ${nodeAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
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
