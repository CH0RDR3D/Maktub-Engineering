(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/HeroSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// ── DATA DEFINITIONS ────────────────────────────────────────────────────────
const HERO_IMAGES = [
    {
        src: '/images/hero/hero1.webp',
        alt: 'Civil Engineering and Structural Construction in Lusaka, Zambia'
    },
    {
        src: '/images/hero/hero2.webp',
        alt: 'Heavy Plant Machinery, Earthworks, and Equipment Supply Operations'
    },
    {
        src: '/images/hero/hero3.webp',
        alt: 'Institutional and Commercial Infrastructure Development'
    },
    {
        src: '/images/hero/hero4.webp',
        alt: 'Pioneering Sustainable Engineering and Infrastructure Works'
    }
];
const HERO_VIDEOS = [
    {
        src: '/resources/hero1.mp4',
        poster: '/images/hero/hero1.webp',
        title: 'Civil Construction & Earthworks'
    },
    {
        src: '/resources/hero2.mp4',
        poster: '/images/hero/hero2.webp',
        title: 'Heavy Plant Machinery & Supply Operations'
    },
    {
        src: '/resources/hero3.mp4',
        poster: '/images/hero/hero3.webp',
        title: 'Precision Structural Building'
    }
];
const HERO_TEXTS = [
    {
        badge: 'Est. January 2020 · Lusaka, Zambia',
        title: 'Empowering Your Vision By Helping You To',
        highlight: 'Build Stronger Structures.',
        sub: 'Integrated engineering solutions, dependable supply services, and civil construction for public and private sector clients across Zambia.',
        chips: [
            {
                icon: 'ti ti-shield-check',
                text: 'NCC Grade 5 Registered'
            },
            {
                icon: 'ti ti-building',
                text: 'EIZ Class C2 Licensed'
            },
            {
                icon: 'ti ti-map-pin',
                text: 'Nationwide Delivery'
            }
        ]
    },
    {
        badge: 'Zambian-Owned & Operated',
        title: 'Delivering Reliable & High-Quality',
        highlight: 'General Supplies Nationwide.',
        sub: 'From high-grade construction materials to essential office IT equipment, furniture, and certified PPE supplies.',
        chips: [
            {
                icon: 'ti ti-truck-delivery',
                text: '10 Provincial Coverage'
            },
            {
                icon: 'ti ti-package',
                text: 'Institutional Logistics'
            },
            {
                icon: 'ti ti-certificate',
                text: 'CEEC Citizen Certified'
            }
        ]
    },
    {
        badge: 'Fully Compliant & Certified',
        title: 'Pioneering Sustainable',
        highlight: 'Civil Engineering & Infrastructure.',
        sub: 'EIZ and NCC Grade 5 certified construction, road networks, earthworks, and institutional renovations built to last.',
        chips: [
            {
                icon: 'ti ti-road',
                text: 'Roads & Earthworks'
            },
            {
                icon: 'ti ti-checkup-list',
                text: 'Rigorous QA Standards'
            },
            {
                icon: 'ti ti-helmet',
                text: 'Zero Lost-Time HSE'
            }
        ]
    },
    {
        badge: 'Approved Defence & Public Vendor',
        title: 'A Dependable, Forward-Thinking',
        highlight: 'Partner For Your Next Project.',
        sub: 'Full compliance with PACRA, ZRA, ZPPA, NAPSA, and Workers’ Compensation regulatory frameworks.',
        chips: [
            {
                icon: 'ti ti-badge-ad',
                text: 'Ministry Cleared Vendor'
            },
            {
                icon: 'ti ti-file-text',
                text: 'ZPPA Registered'
            },
            {
                icon: 'ti ti-clock-check',
                text: 'Rapid Tender Execution'
            }
        ]
    }
];
// Configuration constants
const SLIDE_DURATION = 8000; // 8 seconds visible per media asset (equal viewing time)
const EXIT_TRANSITION_MS = 420; // Text exit slide duration before next entrance
function HeroSection() {
    _s();
    const heroContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Synchronized State Machine Counter
    // Even steps (0, 2, 4...) -> Image
    // Odd steps (1, 3, 5...)  -> Video
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isExitingText, setIsExitingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Visibility & Viewport Performance Tracking
    const [isTabActive, setIsTabActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isInViewport, setIsInViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Video Refs & Timestamp Memory System (Keep mounted in memory without restarting)
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const videoTimestamps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(HERO_VIDEOS.map({
        "HeroSection.useRef[videoTimestamps]": ()=>0
    }["HeroSection.useRef[videoTimestamps]"]));
    // Compute Active Slide Indices from Step
    const currentMediaType = step % 2 === 0 ? 'image' : 'video';
    const currentImageIdx = Math.floor(step / 2) % HERO_IMAGES.length;
    const currentVideoIdx = Math.floor(step / 2) % HERO_VIDEOS.length;
    const currentTextIdx = step % HERO_TEXTS.length;
    // Alternating Text Direction:
    // Step 0 (1st slide) -> 'from-left'
    // Step 1 (2nd slide) -> 'from-right'
    // Step 2 (3rd slide) -> 'from-left'
    // Step 3 (4th slide) -> 'from-right' ...
    const textDirectionClass = step % 2 === 0 ? 'hero-slide-enter-left' : 'hero-slide-enter-right';
    // ── PRELOAD NEXT MEDIA ASSET ──────────────────────────────────────────────
    const preloadNextAsset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSection.useCallback[preloadNextAsset]": (nextStep)=>{
            const nextMediaType = nextStep % 2 === 0 ? 'image' : 'video';
            if (nextMediaType === 'image') {
                const nextImageIndex = Math.floor(nextStep / 2) % HERO_IMAGES.length;
                const img = new window.Image();
                img.src = HERO_IMAGES[nextImageIndex].src;
            } else {
                const nextVideoIndex = Math.floor(nextStep / 2) % HERO_VIDEOS.length;
                const videoEl = videoRefs.current[nextVideoIndex];
                if (videoEl && videoEl.readyState < 2) {
                    // Prompt browser to buffer headers & initial frame
                    videoEl.load();
                }
            }
        }
    }["HeroSection.useCallback[preloadNextAsset]"], []);
    // ── VIDEO PLAYBACK & MEMORY MANAGEMENT ────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const shouldPlayVideo = currentMediaType === 'video' && isTabActive && isInViewport;
            HERO_VIDEOS.forEach({
                "HeroSection.useEffect": (_, idx)=>{
                    const videoEl = videoRefs.current[idx];
                    if (!videoEl) return;
                    if (idx === currentVideoIdx && shouldPlayVideo) {
                        // Restore timestamp memory so video does NOT restart from 0
                        const savedTime = videoTimestamps.current[idx];
                        if (savedTime > 0 && Math.abs(videoEl.currentTime - savedTime) > 0.5) {
                            try {
                                videoEl.currentTime = savedTime;
                            } catch (_) {}
                        }
                        videoEl.playbackRate = 0.85;
                        const playPromise = videoEl.play();
                        if (playPromise !== undefined) {
                            playPromise.catch({
                                "HeroSection.useEffect": ()=>{
                                // Browser autoplay policy caught smoothly
                                }
                            }["HeroSection.useEffect"]);
                        }
                    } else {
                        // Inactive video: save timestamp and pause immediately to halt decoding
                        if (!videoEl.paused) {
                            videoTimestamps.current[idx] = videoEl.currentTime;
                            videoEl.pause();
                        }
                    }
                }
            }["HeroSection.useEffect"]);
        }
    }["HeroSection.useEffect"], [
        currentMediaType,
        currentVideoIdx,
        isTabActive,
        isInViewport
    ]);
    // Periodic Timestamp Sync for Active Video
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (currentMediaType !== 'video') return;
            const syncInterval = setInterval({
                "HeroSection.useEffect.syncInterval": ()=>{
                    const activeVideoEl = videoRefs.current[currentVideoIdx];
                    if (activeVideoEl && !activeVideoEl.paused) {
                        videoTimestamps.current[currentVideoIdx] = activeVideoEl.currentTime;
                    }
                }
            }["HeroSection.useEffect.syncInterval"], 1000);
            return ({
                "HeroSection.useEffect": ()=>clearInterval(syncInterval)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        currentMediaType,
        currentVideoIdx
    ]);
    // ── DUAL QUEUE SYNCHRONIZED TIMER ENGINE ──────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            // Only advance when tab is active and hero is in viewport
            if (!isTabActive || !isInViewport) return;
            // Trigger preloading 3.5s before the transition
            const preloadTimer = setTimeout({
                "HeroSection.useEffect.preloadTimer": ()=>{
                    preloadNextAsset(step + 1);
                }
            }["HeroSection.useEffect.preloadTimer"], SLIDE_DURATION - 3500);
            // Trigger text exit animation 420ms before step transition
            const exitTimer = setTimeout({
                "HeroSection.useEffect.exitTimer": ()=>{
                    setIsExitingText(true);
                }
            }["HeroSection.useEffect.exitTimer"], SLIDE_DURATION - EXIT_TRANSITION_MS);
            // Advance to next synchronized step after full SLIDE_DURATION
            const advanceTimer = setTimeout({
                "HeroSection.useEffect.advanceTimer": ()=>{
                    setStep({
                        "HeroSection.useEffect.advanceTimer": (prev)=>prev + 1
                    }["HeroSection.useEffect.advanceTimer"]);
                    setIsExitingText(false);
                }
            }["HeroSection.useEffect.advanceTimer"], SLIDE_DURATION);
            return ({
                "HeroSection.useEffect": ()=>{
                    clearTimeout(preloadTimer);
                    clearTimeout(exitTimer);
                    clearTimeout(advanceTimer);
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        step,
        isTabActive,
        isInViewport,
        preloadNextAsset
    ]);
    // ── TAB VISIBILITY MANAGEMENT ─────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const handleVisibilityChange = {
                "HeroSection.useEffect.handleVisibilityChange": ()=>{
                    if (document.hidden) {
                        setIsTabActive(false);
                        // Pause all playing videos when tab is hidden
                        videoRefs.current.forEach({
                            "HeroSection.useEffect.handleVisibilityChange": (el, idx)=>{
                                if (el && !el.paused) {
                                    videoTimestamps.current[idx] = el.currentTime;
                                    el.pause();
                                }
                            }
                        }["HeroSection.useEffect.handleVisibilityChange"]);
                    } else {
                        setIsTabActive(true);
                    }
                }
            }["HeroSection.useEffect.handleVisibilityChange"];
            document.addEventListener('visibilitychange', handleVisibilityChange);
            return ({
                "HeroSection.useEffect": ()=>document.removeEventListener('visibilitychange', handleVisibilityChange)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    // ── INTERSECTION OBSERVER (PAUSE OFFSCREEN) ───────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const container = heroContainerRef.current;
            if (!container || typeof IntersectionObserver === 'undefined') return;
            const observer = new IntersectionObserver({
                "HeroSection.useEffect": (entries)=>{
                    entries.forEach({
                        "HeroSection.useEffect": (entry)=>{
                            const visible = entry.isIntersecting;
                            setIsInViewport(visible);
                            if (!visible) {
                                // Hero left viewport: pause all video playback immediately
                                videoRefs.current.forEach({
                                    "HeroSection.useEffect": (el, idx)=>{
                                        if (el && !el.paused) {
                                            videoTimestamps.current[idx] = el.currentTime;
                                            el.pause();
                                        }
                                    }
                                }["HeroSection.useEffect"]);
                            }
                        }
                    }["HeroSection.useEffect"]);
                }
            }["HeroSection.useEffect"], {
                threshold: 0.15
            });
            observer.observe(container);
            return ({
                "HeroSection.useEffect": ()=>observer.disconnect()
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    const activeText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroSection.useMemo[activeText]": ()=>HERO_TEXTS[currentTextIdx]
    }["HeroSection.useMemo[activeText]"], [
        currentTextIdx
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: heroContainerRef,
        className: "hero-section",
        "aria-label": "Hero Introduction",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-media-wrapper",
                "aria-hidden": "true",
                onContextMenu: (e)=>e.preventDefault(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-grid-overlay"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.js",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-gradient-overlay"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.js",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    HERO_IMAGES.map((img, idx)=>{
                        const isImageActive = currentMediaType === 'image' && currentImageIdx === idx;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img.src,
                            alt: img.alt,
                            className: `hero-bg-image ${isImageActive ? 'is-active' : ''}`,
                            loading: idx === 0 ? 'eager' : 'lazy',
                            decoding: "async",
                            draggable: "false"
                        }, img.src, false, {
                            fileName: "[project]/components/HeroSection.js",
                            lineNumber: 289,
                            columnNumber: 13
                        }, this);
                    }),
                    HERO_VIDEOS.map((vid, idx)=>{
                        const isVideoActive = currentMediaType === 'video' && currentVideoIdx === idx;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: (el)=>{
                                videoRefs.current[idx] = el;
                            },
                            src: vid.src,
                            poster: vid.poster,
                            title: vid.title,
                            className: `hero-bg-video ${isVideoActive ? 'is-active' : ''}`,
                            muted: true,
                            playsInline: true,
                            loop: true,
                            preload: "auto",
                            controlsList: "nodownload nofullscreen noremoteplayback",
                            disablePictureInPicture: true,
                            disableRemotePlayback: true,
                            tabIndex: -1,
                            onContextMenu: (e)=>e.preventDefault()
                        }, vid.src, false, {
                            fileName: "[project]/components/HeroSection.js",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroSection.js",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-inner hero-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-slide-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `hero-badge-pill hero-badge-centered hero-anim-item hero-anim-badge ${isExitingText ? 'hero-slide-exiting' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-sparkles",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.js",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: activeText.badge
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.js",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, `badge-${step}`, true, {
                                fileName: "[project]/components/HeroSection.js",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `hero-bilateral-layout ${textDirectionClass} ${isExitingText ? 'hero-slide-exiting' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-heading-block hero-anim-item hero-anim-heading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "hero-title-main",
                                                children: [
                                                    activeText.title,
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hero-highlight-gradient",
                                                        children: activeText.highlight
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroSection.js",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HeroSection.js",
                                                lineNumber: 348,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hero-subtitle",
                                                children: activeText.sub
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.js",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hero-trust-chips",
                                                children: activeText.chips.map((chip, cIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hero-trust-chip",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: chip.icon,
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/HeroSection.js",
                                                                lineNumber: 360,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: chip.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/HeroSection.js",
                                                                lineNumber: 361,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, cIdx, true, {
                                                        fileName: "[project]/components/HeroSection.js",
                                                        lineNumber: 359,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroSection.js",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroSection.js",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-action-block hero-anim-item hero-anim-actions",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hero-cta-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contact",
                                                    className: "btn-hero-primary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "ti ti-mail",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HeroSection.js",
                                                            lineNumber: 371,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Get In Touch"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HeroSection.js",
                                                            lineNumber: 372,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/HeroSection.js",
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services",
                                                    className: "btn-hero-outline",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "ti ti-tools",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HeroSection.js",
                                                            lineNumber: 375,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Explore Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HeroSection.js",
                                                            lineNumber: 376,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/HeroSection.js",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroSection.js",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.js",
                                        lineNumber: 368,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, step, true, {
                                fileName: "[project]/components/HeroSection.js",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.js",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#stats-overview",
                        className: "hero-scroll-indicator",
                        "aria-label": "Scroll to explore Maktub Engineering",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Scroll for More"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.js",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "ti ti-chevron-down",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.js",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.js",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroSection.js",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroSection.js",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "4lO7GAzcdlLEhNOeRHj738xbE9Q=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ServicesCarousel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
const FEATURED_SERVICES = [
    {
        title: 'Building Construction',
        category: 'Civil Engineering',
        img: '/resources/civileng.webp',
        href: '/services#services-section-civil',
        badge: 'NCC Grade 5'
    },
    {
        title: 'Road & Bridge Works',
        category: 'Civil Engineering',
        img: '/resources/road.webp',
        href: '/services#services-section-civil',
        badge: 'Category R'
    },
    {
        title: 'Equipment Supplies',
        category: 'Heavy Machinery',
        img: '/resources/equipment2.webp',
        href: '/services#services-section-equipment',
        badge: 'CAT / Komatsu'
    },
    {
        title: 'Machinery Repair & Servicing',
        category: 'Technical Support',
        img: '/resources/repairs2.webp',
        href: '/services#services-section-equipment',
        badge: 'Mobile Technicians'
    },
    {
        title: 'PPE & Safety Equipment',
        category: 'General Supplies',
        img: '/resources/ppe.webp',
        href: '/services#services-section-general',
        badge: 'EIZ & Labour Approved'
    },
    {
        title: 'Office & School Furniture',
        category: 'General Supplies',
        img: '/resources/office.webp',
        href: '/services#services-section-general',
        badge: 'Nationwide Delivery'
    },
    {
        title: 'Construction Materials',
        category: 'General Supplies',
        img: '/resources/construction.webp',
        href: '/services#services-section-general',
        badge: 'Bulk Supply'
    },
    {
        title: 'Spare Parts Supply',
        category: 'Heavy Machinery',
        img: '/resources/warehouse.webp',
        href: '/services#services-section-equipment',
        badge: 'OEM Components'
    }
];
function ServicesCarousel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "services-carousel-wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "services-carousel-track",
            children: [
                ...FEATURED_SERVICES,
                ...FEATURED_SERVICES
            ].map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: service.href,
                    className: "carousel-service-card",
                    "aria-label": `View details for ${service.title}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "carousel-service-img-box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: service.img,
                                    alt: service.title,
                                    fill: true,
                                    sizes: "(max-width: 768px) 280px, 340px",
                                    className: "carousel-service-img"
                                }, void 0, false, {
                                    fileName: "[project]/components/ServicesCarousel.js",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "carousel-service-overlay"
                                }, void 0, false, {
                                    fileName: "[project]/components/ServicesCarousel.js",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "carousel-service-pill",
                                    children: service.badge
                                }, void 0, false, {
                                    fileName: "[project]/components/ServicesCarousel.js",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ServicesCarousel.js",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "carousel-service-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "carousel-service-category",
                                    children: service.category
                                }, void 0, false, {
                                    fileName: "[project]/components/ServicesCarousel.js",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "carousel-service-title",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/components/ServicesCarousel.js",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "carousel-service-link-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Explore Details"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServicesCarousel.js",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ti ti-arrow-right",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ServicesCarousel.js",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ServicesCarousel.js",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ServicesCarousel.js",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    ]
                }, idx, true, {
                    fileName: "[project]/components/ServicesCarousel.js",
                    lineNumber: 71,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/ServicesCarousel.js",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ServicesCarousel.js",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c = ServicesCarousel;
var _c;
__turbopack_context__.k.register(_c, "ServicesCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_0pns5la._.js.map