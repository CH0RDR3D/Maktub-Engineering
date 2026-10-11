'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';

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
      { icon: 'ti ti-shield-check', text: 'NCC Grade 5 Registered' },
      { icon: 'ti ti-building', text: 'EIZ Class C2 Licensed' },
      { icon: 'ti ti-map-pin', text: 'Nationwide Delivery' }
    ]
  },
  {
    badge: 'Zambian-Owned & Operated',
    title: 'Delivering Reliable & High-Quality',
    highlight: 'General Supplies Nationwide.',
    sub: 'From high-grade construction materials to essential office IT equipment, furniture, and certified PPE supplies.',
    chips: [
      { icon: 'ti ti-truck-delivery', text: '10 Provincial Coverage' },
      { icon: 'ti ti-package', text: 'Institutional Logistics' },
      { icon: 'ti ti-certificate', text: 'CEEC Citizen Certified' }
    ]
  },
  {
    badge: 'Fully Compliant & Certified',
    title: 'Pioneering Sustainable',
    highlight: 'Civil Engineering & Infrastructure.',
    sub: 'EIZ and NCC Grade 5 certified construction, road networks, earthworks, and institutional renovations built to last.',
    chips: [
      { icon: 'ti ti-road', text: 'Roads & Earthworks' },
      { icon: 'ti ti-checkup-list', text: 'Rigorous QA Standards' },
      { icon: 'ti ti-helmet', text: 'Zero Lost-Time HSE' }
    ]
  },
  {
    badge: 'Approved Defence & Public Vendor',
    title: 'A Dependable, Forward-Thinking',
    highlight: 'Partner For Your Next Project.',
    sub: 'Full compliance with PACRA, ZRA, ZPPA, NAPSA, and Workers’ Compensation regulatory frameworks.',
    chips: [
      { icon: 'ti ti-badge-ad', text: 'Ministry Cleared Vendor' },
      { icon: 'ti ti-file-text', text: 'ZPPA Registered' },
      { icon: 'ti ti-clock-check', text: 'Rapid Tender Execution' }
    ]
  }
];

// Configuration constants
const SLIDE_DURATION = 8000; // 8 seconds visible per media asset (equal viewing time)
const EXIT_TRANSITION_MS = 420; // Text exit slide duration before next entrance

export default function HeroSection() {
  const heroContainerRef = useRef(null);

  // Synchronized State Machine Counter
  // Even steps (0, 2, 4...) -> Image
  // Odd steps (1, 3, 5...)  -> Video
  const [step, setStep] = useState(0);
  const [isExitingText, setIsExitingText] = useState(false);

  // Visibility & Viewport Performance Tracking
  const [isTabActive, setIsTabActive] = useState(true);
  const [isInViewport, setIsInViewport] = useState(true);

  // Video Refs & Timestamp Memory System (Keep mounted in memory without restarting)
  const videoRefs = useRef([]);
  const videoTimestamps = useRef(HERO_VIDEOS.map(() => 0));

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
  const preloadNextAsset = useCallback((nextStep) => {
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
  }, []);

  // ── VIDEO PLAYBACK & MEMORY MANAGEMENT ────────────────────────────────────
  useEffect(() => {
    const shouldPlayVideo = currentMediaType === 'video' && isTabActive && isInViewport;

    HERO_VIDEOS.forEach((_, idx) => {
      const videoEl = videoRefs.current[idx];
      if (!videoEl) return;

      if (idx === currentVideoIdx && shouldPlayVideo) {
        // Restore timestamp memory so video does NOT restart from 0
        const savedTime = videoTimestamps.current[idx];
        if (savedTime > 0 && Math.abs(videoEl.currentTime - savedTime) > 0.5) {
          try {
            videoEl.currentTime = savedTime;
          } catch (_) { }
        }

        videoEl.playbackRate = 0.85;
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Browser autoplay policy caught smoothly
          });
        }
      } else {
        // Inactive video: save timestamp and pause immediately to halt decoding
        if (!videoEl.paused) {
          videoTimestamps.current[idx] = videoEl.currentTime;
          videoEl.pause();
        }
      }
    });
  }, [currentMediaType, currentVideoIdx, isTabActive, isInViewport]);

  // Periodic Timestamp Sync for Active Video
  useEffect(() => {
    if (currentMediaType !== 'video') return;

    const syncInterval = setInterval(() => {
      const activeVideoEl = videoRefs.current[currentVideoIdx];
      if (activeVideoEl && !activeVideoEl.paused) {
        videoTimestamps.current[currentVideoIdx] = activeVideoEl.currentTime;
      }
    }, 1000);

    return () => clearInterval(syncInterval);
  }, [currentMediaType, currentVideoIdx]);

  // ── DUAL QUEUE SYNCHRONIZED TIMER ENGINE ──────────────────────────────────
  useEffect(() => {
    // Only advance when tab is active and hero is in viewport
    if (!isTabActive || !isInViewport) return;

    // Trigger preloading 3.5s before the transition
    const preloadTimer = setTimeout(() => {
      preloadNextAsset(step + 1);
    }, SLIDE_DURATION - 3500);

    // Trigger text exit animation 420ms before step transition
    const exitTimer = setTimeout(() => {
      setIsExitingText(true);
    }, SLIDE_DURATION - EXIT_TRANSITION_MS);

    // Advance to next synchronized step after full SLIDE_DURATION
    const advanceTimer = setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsExitingText(false);
    }, SLIDE_DURATION);

    return () => {
      clearTimeout(preloadTimer);
      clearTimeout(exitTimer);
      clearTimeout(advanceTimer);
    };
  }, [step, isTabActive, isInViewport, preloadNextAsset]);

  // ── TAB VISIBILITY MANAGEMENT ─────────────────────────────────────────────
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsTabActive(false);
        // Pause all playing videos when tab is hidden
        videoRefs.current.forEach((el, idx) => {
          if (el && !el.paused) {
            videoTimestamps.current[idx] = el.currentTime;
            el.pause();
          }
        });
      } else {
        setIsTabActive(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // ── INTERSECTION OBSERVER (PAUSE OFFSCREEN) ───────────────────────────────
  useEffect(() => {
    const container = heroContainerRef.current;
    if (!container || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting;
          setIsInViewport(visible);
          if (!visible) {
            // Hero left viewport: pause all video playback immediately
            videoRefs.current.forEach((el, idx) => {
              if (el && !el.paused) {
                videoTimestamps.current[idx] = el.currentTime;
                el.pause();
              }
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const activeText = useMemo(() => HERO_TEXTS[currentTextIdx], [currentTextIdx]);

  return (
    <section
      ref={heroContainerRef}
      className="hero-section"
      aria-label="Hero Introduction"
    >
      {/* ── BACKGROUND MEDIA SYSTEM (DUAL QUEUE: IMAGES & VIDEOS) ── */}
      <div
        className="hero-media-wrapper"
        aria-hidden="true"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="hero-grid-overlay" />
        <div className="hero-gradient-overlay" />

        {/* 1. Image Queue (Ken Burns Smooth Zoom) */}
        {HERO_IMAGES.map((img, idx) => {
          const isImageActive = currentMediaType === 'image' && currentImageIdx === idx;
          return (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`hero-bg-image ${isImageActive ? 'is-active' : ''}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
              draggable="false"
            />
          );
        })}

        {/* 2. Video Queue (Persistent Memory, Cinematic Subtle Scale) */}
        {HERO_VIDEOS.map((vid, idx) => {
          const isVideoActive = currentMediaType === 'video' && currentVideoIdx === idx;
          return (
            <video
              key={vid.src}
              ref={(el) => { videoRefs.current[idx] = el; }}
              src={vid.src}
              poster={vid.poster}
              title={vid.title}
              className={`hero-bg-video ${isVideoActive ? 'is-active' : ''}`}
              muted
              playsInline
              loop
              preload="auto"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              tabIndex={-1}
              onContextMenu={(e) => e.preventDefault()}
            />
          );
        })}
      </div>

      {/* ── HERO CONTENT LAYER WITH BILATERAL ASYMMETRICAL CHOREOGRAPHY ── */}
      <div className="section-inner hero-inner">
        <div className="hero-slide-wrapper">
          {/* Centered Compliance / Governance Badge Tag throughout all slides */}
          <div
            key={`badge-${step}`}
            className={`hero-badge-pill hero-badge-centered hero-anim-item hero-anim-badge ${
              isExitingText ? 'hero-slide-exiting' : ''
            }`}
          >
            <i className="ti ti-sparkles" aria-hidden="true" />
            <span>{activeText.badge}</span>
          </div>

          <div
            key={step}
            className={`hero-bilateral-layout ${textDirectionClass} ${
              isExitingText ? 'hero-slide-exiting' : ''
            }`}
          >
            {/* 1. Hero Text Heading & Trust Certifications (Heading Side) */}
            <div className="hero-heading-block hero-anim-item hero-anim-heading">
              <h1 className="hero-title-main">
                {activeText.title}{' '}
                <span className="hero-highlight-gradient">{activeText.highlight}</span>
              </h1>
              <p className="hero-subtitle">
                {activeText.sub}
              </p>

              {/* Trust Credentials & Accreditations Chips (Returned to Heading side) */}
              <div className="hero-trust-chips">
                {activeText.chips.map((chip, cIdx) => (
                  <div key={cIdx} className="hero-trust-chip">
                    <i className={chip.icon} aria-hidden="true" />
                    <span>{chip.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Action Block (CTA Buttons ONLY on Opposite Side) */}
            <div className="hero-action-block hero-anim-item hero-anim-actions">
              <div className="hero-cta-group">
                <Link href="/contact" className="btn-hero-primary">
                  <i className="ti ti-mail" aria-hidden="true" />
                  <span>Get In Touch</span>
                </Link>
                <Link href="/services" className="btn-hero-outline">
                  <i className="ti ti-tools" aria-hidden="true" />
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#stats-overview"
          className="hero-scroll-indicator"
          aria-label="Scroll to explore Maktub Engineering"
        >
          <span>Scroll for More</span>
          <i className="ti ti-chevron-down" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
