'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const HERO_TEXTS = [
  {
    badge: 'Est. January 2020 · Lusaka, Zambia',
    title: 'Empowering Your Vision By Helping You To',
    highlight: 'Build Stronger Structures.',
    sub: 'Integrated engineering solutions, dependable supply services, and civil construction for public and private sector clients across Zambia.'
  },
  {
    badge: 'Zambian-Owned & Operated',
    title: 'Delivering Reliable & High-Quality',
    highlight: 'General Supplies Nationwide.',
    sub: 'From high-grade construction materials to essential office IT equipment, furniture, and certified PPE supplies.'
  },
  {
    badge: 'Fully Compliant & Certified',
    title: 'Pioneering Sustainable',
    highlight: 'Civil Engineering & Infrastructure.',
    sub: 'EIZ and NCC Grade 5 certified construction, road networks, earthworks, and institutional renovations built to last.'
  },
  {
    badge: 'Approved Defence & Public Vendor',
    title: 'A Dependable, Forward-Thinking',
    highlight: 'Partner For Your Next Project.',
    sub: 'Full compliance with PACRA, ZRA, ZPPA, NAPSA, and Workers’ Compensation regulatory frameworks.'
  }
];

const HERO_VIDEOS = [
  '/resources/hero1.mp4',
  '/resources/hero2.mp4',
  '/resources/hero3.mp4'
];

export default function HeroSection() {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [activeVideoSlot, setActiveVideoSlot] = useState(1);

  // Cycling texts
  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentTextIdx((prev) => (prev + 1) % HERO_TEXTS.length);
        setTextVisible(true);
      }, 450);
    }, 7000);

    return () => clearInterval(textTimer);
  }, []);

  // Video cycle on ended
  const handleVideoEnded = () => {
    const nextIdx = (currentVideoIdx + 1) % HERO_VIDEOS.length;
    setCurrentVideoIdx(nextIdx);

    if (activeVideoSlot === 1) {
      if (videoRef2.current) {
        videoRef2.current.src = HERO_VIDEOS[nextIdx];
        videoRef2.current.playbackRate = 0.7;
        videoRef2.current.play().catch(() => { });
      }
      setActiveVideoSlot(2);
    } else {
      if (videoRef1.current) {
        videoRef1.current.src = HERO_VIDEOS[nextIdx];
        videoRef1.current.playbackRate = 0.7;
        videoRef1.current.play().catch(() => { });
      }
      setActiveVideoSlot(1);
    }
  };

  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.playbackRate = 0.7;
      videoRef1.current.play().catch(() => { });
    }
  }, []);

  const activeText = HERO_TEXTS[currentTextIdx];

  return (
    <section className="hero-section" aria-label="Hero Introduction">
      {/* Video Background Layer */}
      <div
        className="hero-media-wrapper"
        aria-hidden="true"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="hero-grid-overlay" />
        <div className="hero-gradient-overlay" />

        <video
          ref={videoRef1}
          className={`hero-video ${activeVideoSlot === 1 ? 'is-active' : ''}`}
          src={HERO_VIDEOS[0]}
          poster="/images/hero/hero1.webp"
          autoPlay
          muted
          playsInline
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          onEnded={handleVideoEnded}
        />
        <video
          ref={videoRef2}
          className={`hero-video ${activeVideoSlot === 2 ? 'is-active' : ''}`}
          poster="/images/hero/hero2.webp"
          muted
          playsInline
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          onEnded={handleVideoEnded}
        />
      </div>

      {/* Hero Content Layer */}
      <div className="section-inner hero-inner">
        <div className="hero-content-box">
          <div className={`hero-badge-pill ${textVisible ? 'fade-in' : 'fade-out'}`}>
            <i className="ti ti-sparkles" aria-hidden="true" />
            <span>{activeText.badge}</span>
          </div>

          <h1 className={`hero-title-main ${textVisible ? 'fade-in' : 'fade-out'}`}>
            {activeText.title}{' '}
            <span className="hero-highlight-gradient">{activeText.highlight}</span>
          </h1>

          <p className={`hero-subtitle ${textVisible ? 'fade-in' : 'fade-out'}`}>
            {activeText.sub}
          </p>

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

          {/* Quick Indicators / Trust Signals */}
          <div className="hero-trust-chips">
            <div className="hero-trust-chip">
              <i className="ti ti-shield-check" aria-hidden="true" />
              <span>NCC Grade 5 Registered</span>
            </div>
            <div className="hero-trust-chip">
              <i className="ti ti-building" aria-hidden="true" />
              <span>EIZ Class C2 Licensed</span>
            </div>
            <div className="hero-trust-chip">
              <i className="ti ti-map-pin" aria-hidden="true" />
              <span>Nationwide Delivery</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#stats-overview" className="hero-scroll-indicator" aria-label="Scroll to explore">
          <span>Scroll for More</span>
          <i className="ti ti-chevron-down" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
