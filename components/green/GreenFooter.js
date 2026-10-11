'use client';

export default function GreenFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#faf9f5] border-t border-[#141c18]/15 pt-20 pb-12 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto text-[#141c18]">
      {/* Top Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#141c18]/15">
        {/* Brand & Manifesto Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-3xl font-light tracking-[0.35em] uppercase font-editorial-display">
            GREEN
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-[#141c18]/70 font-light leading-relaxed">
            An architectural study in sustainable fibers, radical reduction, and circular luxury. Handcrafted with reverence for the soil.
          </p>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#141c18]/50">
            COPENHAGEN &bull; PARIS &bull; TOKYO &bull; NEW YORK
          </div>
        </div>

        {/* Minimal Nav Columns */}
        <div className="lg:col-span-2 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#141c18]/50">
            Navigation
          </div>
          <ul className="space-y-2.5 text-xs font-mono uppercase tracking-[0.18em]">
            <li>
              <a href="#collections" className="hover:text-[#263b31] transition-colors">
                Collections
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#263b31] transition-colors">
                About Green
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#263b31] transition-colors">
                Curated Pieces
              </a>
            </li>
            <li>
              <a href="#manifesto" className="hover:text-[#263b31] transition-colors">
                The Manifesto
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-[#263b31] transition-colors">
                Principles
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#141c18]/50">
            Transparency
          </div>
          <ul className="space-y-2.5 text-xs font-mono uppercase tracking-[0.18em] text-[#141c18]/80">
            <li>
              <a href="#manifesto" className="hover:text-[#263b31] transition-colors">
                Supply Audit
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-[#263b31] transition-colors">
                Fiber Traceability
              </a>
            </li>
            <li>
              <a href="#manifesto" className="hover:text-[#263b31] transition-colors">
                Carbon Accounting
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-[#263b31] transition-colors">
                Repair Atelier
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Connect */}
        <div className="lg:col-span-3 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#141c18]/50">
            Correspondence
          </div>
          <ul className="space-y-2.5 text-xs font-mono uppercase tracking-[0.18em]">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#263b31] transition-colors inline-flex items-center space-x-1"
              >
                <span>Instagram</span>
                <span className="text-[10px]">&nearr;</span>
              </a>
            </li>
            <li>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#263b31] transition-colors inline-flex items-center space-x-1"
              >
                <span>Pinterest Archive</span>
                <span className="text-[10px]">&nearr;</span>
              </a>
            </li>
            <li>
              <a
                href="https://substack.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#263b31] transition-colors inline-flex items-center space-x-1"
              >
                <span>Substack Journal</span>
                <span className="text-[10px]">&nearr;</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:atelier@green-studio.example"
                className="hover:text-[#263b31] transition-colors inline-flex items-center space-x-1"
              >
                <span>Direct Inquiry</span>
                <span className="text-[10px]">&rarr;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Back to Top */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#141c18]/50 gap-4">
        <div>
          &copy; {new Date().getFullYear()} GREEN Atelier Inc. All rights reserved.
        </div>

        <div className="flex items-center space-x-6">
          <a href="#privacy" className="hover:text-[#141c18] transition-colors">
            Privacy
          </a>
          <a href="#terms" className="hover:text-[#141c18] transition-colors">
            Terms
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-[#141c18] transition-colors inline-flex items-center space-x-1.5 focus:outline-none"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <span>&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
