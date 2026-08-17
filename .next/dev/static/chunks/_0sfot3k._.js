(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/InteractiveMesh.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InteractiveMesh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function InteractiveMesh() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveMesh.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d', {
                alpha: true
            });
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
            const themeObserver = new MutationObserver({
                "InteractiveMesh.useEffect": ()=>{
                    isDark = document.documentElement.getAttribute('data-theme') !== 'light';
                }
            }["InteractiveMesh.useEffect"]);
            themeObserver.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    'data-theme'
                ]
            });
            // Particle nodes configuration
            let nodes = [];
            let pulses = [];
            let shockwaves = [];
            let orbs = [];
            const isMobile = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 768;
            const nodeCount = isMobile ? 24 : 48;
            const maxConnectionDistance = isMobile ? 110 : 140;
            const maxPulses = isMobile ? 8 : 16;
            const orbCount = isMobile ? 2 : 4;
            function initOrbs() {
                orbs = [];
                for(let i = 0; i < orbCount; i++){
                    const isGold = i % 2 === 0;
                    orbs.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * 0.15,
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
                    for(let i = 0; i < nodeCount; i++){
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
                    nodes.forEach({
                        "InteractiveMesh.useEffect.resize": (node)=>{
                            node.x = Math.min(Math.max(node.x, 0), width);
                            node.y = Math.min(Math.max(node.y, 0), height);
                        }
                    }["InteractiveMesh.useEffect.resize"]);
                }
                initOrbs();
            }
            resize();
            window.addEventListener('resize', resize, {
                passive: true
            });
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
            window.addEventListener('mousemove', onPointerMove, {
                passive: true
            });
            window.addEventListener('touchstart', onPointerMove, {
                passive: true
            });
            window.addEventListener('touchmove', onPointerMove, {
                passive: true
            });
            window.addEventListener('touchend', onPointerLeave, {
                passive: true
            });
            window.addEventListener('pointerdown', onPointerDown, {
                passive: true
            });
            document.addEventListener('mouseleave', onPointerLeave, {
                passive: true
            });
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
                orbs.forEach({
                    "InteractiveMesh.useEffect.loop": (orb)=>{
                        orb.pulse += 0.005;
                        orb.x += orb.vx * (1 + Math.sin(orb.pulse) * 0.1);
                        orb.y += orb.vy * (1 + Math.cos(orb.pulse) * 0.1);
                        // Soft screen wrapping
                        if (orb.x < -orb.radius) orb.x = width + orb.radius;
                        if (orb.x > width + orb.radius) orb.x = -orb.radius;
                        if (orb.y < -orb.radius) orb.y = height + orb.radius;
                        if (orb.y > height + orb.radius) orb.y = -orb.radius;
                        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
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
                    }
                }["InteractiveMesh.useEffect.loop"]);
                // 2. Subtle ambient cursor glow spot (multi-layered)
                if (mouse.active && mouse.x > -100 && mouse.y > -100) {
                    const outerGlowRadius = isMobile ? 150 : 250;
                    const innerGlowRadius = isMobile ? 50 : 80;
                    // Outer Navy/Blue Glow
                    const outerGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, outerGlowRadius);
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
                    const innerGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, innerGlowRadius);
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
                for(let s = shockwaves.length - 1; s >= 0; s--){
                    const sw = shockwaves[s];
                    sw.radius += dt * sw.speed;
                    sw.alpha = 1 - sw.radius / sw.maxRadius;
                    if (sw.alpha <= 0) {
                        shockwaves.splice(s, 1);
                        continue;
                    }
                    // Expanding primary ripple ring
                    ctx.strokeStyle = isDark ? `rgba(245, 166, 35, ${sw.alpha * 0.18})` : `rgba(217, 119, 6, ${sw.alpha * 0.15})`;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
                    ctx.stroke();
                    // Secondary subtle wave ring
                    ctx.strokeStyle = isDark ? `rgba(37, 99, 235, ${sw.alpha * 0.08})` : `rgba(27, 65, 146, ${sw.alpha * 0.06})`;
                    ctx.lineWidth = 1.0;
                    ctx.beginPath();
                    ctx.arc(sw.x, sw.y, Math.max(0, sw.radius - 20), 0, Math.PI * 2);
                    ctx.stroke();
                }
                // 4. Update nodes and collect connection coordinates
                const n = nodes.length;
                const connectionGroups = {};
                for(let i = 0; i < n; i++){
                    const node = nodes[i];
                    // Apply friction to dynamic impulse velocities
                    node.impulseVx *= 0.94;
                    node.impulseVy *= 0.94;
                    // Organic slight drift + dynamic impulses
                    node.pulse += 0.02;
                    node.x += node.baseVx * (1 + Math.sin(node.pulse) * 0.2) + node.impulseVx;
                    node.y += node.baseVy * (1 + Math.cos(node.pulse) * 0.2) + node.impulseVy;
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
                    shockwaves.forEach({
                        "InteractiveMesh.useEffect.loop": (sw)=>{
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
                        }
                    }["InteractiveMesh.useEffect.loop"]);
                    // Collect connections to nearby nodes
                    for(let j = i + 1; j < n; j++){
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
                            // Group lines by rounded opacity (0.05 increments) and thickness
                            const isBoosted = mouseBoost > 0;
                            const roundedAlpha = Math.round(finalAlpha * 20) / 20;
                            if (roundedAlpha > 0.01) {
                                const groupKey = `${isBoosted ? 'b' : 'r'}_${roundedAlpha}`;
                                if (!connectionGroups[groupKey]) {
                                    connectionGroups[groupKey] = {
                                        alpha: roundedAlpha,
                                        width: isBoosted ? 1.2 : 0.8,
                                        lines: []
                                    };
                                }
                                connectionGroups[groupKey].lines.push(node.x, node.y, node2.x, node2.y);
                            }
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
                                    const exists = pulses.some({
                                        "InteractiveMesh.useEffect.loop.exists": (p)=>p.from === node && p.to === node2 || p.from === node2 && p.to === node
                                    }["InteractiveMesh.useEffect.loop.exists"]);
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
                }
                // 4b. Draw all connection lines in grouped batches
                for(const key in connectionGroups){
                    const group = connectionGroups[key];
                    if (group.lines.length === 0) continue;
                    ctx.strokeStyle = `rgba(${lineColor}, ${group.alpha})`;
                    ctx.lineWidth = group.width;
                    ctx.beginPath();
                    for(let k = 0; k < group.lines.length; k += 4){
                        ctx.moveTo(group.lines[k], group.lines[k + 1]);
                        ctx.lineTo(group.lines[k + 2], group.lines[k + 3]);
                    }
                    ctx.stroke();
                }
                // 4c. Draw node points (so they layer cleanly on top of connections)
                for(let i = 0; i < n; i++){
                    const node = nodes[i];
                    const isAccent = i % 3 === 0;
                    const color = isAccent ? altNodeColor : nodeColor;
                    const nodeAlpha = isDark ? isAccent ? 0.6 : 0.4 : isAccent ? 0.45 : 0.3;
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
                for(let p = pulses.length - 1; p >= 0; p--){
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
            return ({
                "InteractiveMesh.useEffect": ()=>{
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
                }
            })["InteractiveMesh.useEffect"];
        }
    }["InteractiveMesh.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        id: "interactive-bg-mesh",
        className: "interactive-bg-mesh",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/InteractiveMesh.js",
        lineNumber: 536,
        columnNumber: 5
    }, this);
}
_s(InteractiveMesh, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = InteractiveMesh;
var _c;
__turbopack_context__.k.register(_c, "InteractiveMesh");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeToggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Navbar() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            function handleScroll() {
                // Find the hero or top section on the active page
                const heroEl = document.querySelector('.hero-section, .page-hero-header, .ge-hero-section, #home');
                const threshold = heroEl ? Math.max(heroEl.offsetHeight - 90, 200) : window.innerHeight * 0.7;
                if (window.scrollY > threshold) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            window.addEventListener('resize', handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('resize', handleScroll);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    // Close mobile menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMenuOpen(false);
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    // Prevent background scroll when mobile menu is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (menuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        menuOpen
    ]);
    const isActive = (href)=>{
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `site-header-wrap ${scrolled ? 'is-scrolled' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "navbar",
                className: "navbar",
                "aria-label": "Main Navigation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "nav-logo",
                            "aria-label": "Maktub Engineering Home",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-logo-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/maktub-logo.png",
                                        alt: "Maktub Engineering Logo",
                                        width: 40,
                                        height: 40,
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-logo-copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "nav-logo-title",
                                            children: "Maktub Engineering"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "nav-logo-sub",
                                            children: "& General Supply Limited"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-links",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `nav-link ${isActive(item.href) ? 'active' : ''}`,
                                    "aria-current": isActive(item.href) ? 'page' : undefined,
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "nav-cta-btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Get a Quote"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ti ti-arrow-right",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `hamburger ${menuOpen ? 'active' : ''}`,
                                    type: "button",
                                    "aria-label": menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu',
                                    "aria-expanded": menuOpen,
                                    "aria-controls": "mobileMenu",
                                    onClick: ()=>setMenuOpen(!menuOpen),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ham-bar"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ham-bar"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ham-bar"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-backdrop ${menuOpen ? 'open' : ''}`,
                onClick: ()=>setMenuOpen(false),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-menu-drawer ${menuOpen ? 'open' : ''}`,
                id: "mobileMenu",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Mobile Navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-menu-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-logo-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/maktub-logo.png",
                                        alt: "Maktub Engineering Logo",
                                        width: 34,
                                        height: 34
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mobile-logo-text",
                                        children: "Maktub Engineering"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "mobile-close-btn",
                                "aria-label": "Close menu",
                                onClick: ()=>setMenuOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ti ti-x",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-nav-links",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `mobile-nav-link ${isActive(item.href) ? 'active' : ''}`,
                                onClick: ()=>setMenuOpen(false),
                                "aria-current": isActive(item.href) ? 'page' : undefined,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-chevron-right",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-menu-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-theme-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Appearance"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "mobile-cta-btn",
                                onClick: ()=>setMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-mail",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    " Get In Touch"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-contact-quick",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+260978294747",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ti ti-phone",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            " +260 978 294 747"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:info@maktubengineering.com",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ti ti-mail",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, this),
                                            " info@maktubengineering.com"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.js",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(Navbar, "eVZomT4bP9ROjapNYBPQHqwMAgA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollReveal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function animateCounter(el) {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';
    const target = parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1400;
    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const currentVal = Math.round(eased * target);
        el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}
function ScrollReveal() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            // Re-run observer whenever route changes
            const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, [data-target]');
            if (!elements.length) return;
            const observer = new IntersectionObserver({
                "ScrollReveal.useEffect": (entries)=>{
                    entries.forEach({
                        "ScrollReveal.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                // Find counters inside or on the element itself
                                if (entry.target.hasAttribute('data-target')) {
                                    animateCounter(entry.target);
                                }
                                entry.target.querySelectorAll('[data-target]').forEach({
                                    "ScrollReveal.useEffect": (counter)=>{
                                        animateCounter(counter);
                                    }
                                }["ScrollReveal.useEffect"]);
                                observer.unobserve(entry.target);
                            }
                        }
                    }["ScrollReveal.useEffect"]);
                }
            }["ScrollReveal.useEffect"], {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            });
            elements.forEach({
                "ScrollReveal.useEffect": (el)=>observer.observe(el)
            }["ScrollReveal.useEffect"]);
            return ({
                "ScrollReveal.useEffect": ()=>observer.disconnect()
            })["ScrollReveal.useEffect"];
        }
    }["ScrollReveal.useEffect"], [
        pathname
    ]);
    return null;
}
_s(ScrollReveal, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ThemeToggle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ThemeToggle({ className = '' }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme);
                document.documentElement.setAttribute('data-theme', savedTheme);
            } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const initial = prefersDark ? 'dark' : 'light';
                setTheme(initial);
                document.documentElement.setAttribute('data-theme', initial);
            }
        }
    }["ThemeToggle.useEffect"], []);
    function toggleTheme() {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    }
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: `theme-toggle-btn ${className}`,
            "aria-label": "Toggle dark/light mode",
            disabled: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "theme-icon-placeholder"
            }, void 0, false, {
                fileName: "[project]/components/ThemeToggle.js",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ThemeToggle.js",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `theme-toggle-btn ${className}`,
        onClick: toggleTheme,
        "aria-label": `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
        title: `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
        children: theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "ti ti-sun theme-icon sun-icon",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/components/ThemeToggle.js",
            lineNumber: 52,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "ti ti-moon theme-icon moon-icon",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/components/ThemeToggle.js",
            lineNumber: 54,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ThemeToggle.js",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "L5R6nLrFtVbWds7hyTJfclq/XjM=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/navigation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navItems",
    ()=>navItems
]);
const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About Us',
        href: '/about'
    },
    {
        label: 'Services',
        href: '/services'
    },
    {
        label: 'Green Energy',
        href: '/green-energy'
    },
    {
        label: 'Credentials',
        href: '/credentials'
    },
    {
        label: 'Contact Us',
        href: '/contact'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0sfot3k._.js.map