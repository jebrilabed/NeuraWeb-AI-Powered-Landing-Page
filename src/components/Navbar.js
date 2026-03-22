import React, { useState, useEffect } from 'react';

const NAV_LINKS = ['Home', 'Features', 'AI Platform', 'Pricing', 'Contact'];

const LogoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
    <circle cx="12" cy="12" r="3" fill="white" />
    <circle cx="4" cy="6" r="1.8" fill="rgba(255,255,255,0.7)" />
    <circle cx="20" cy="6" r="1.8" fill="rgba(255,255,255,0.7)" />
    <circle cx="4" cy="18" r="1.8" fill="rgba(255,255,255,0.7)" />
    <circle cx="20" cy="18" r="1.8" fill="rgba(255,255,255,0.7)" />
    <line x1="4" y1="6" x2="12" y2="12" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="20" y1="6" x2="12" y2="12" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="4" y1="18" x2="12" y2="12" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="20" y1="18" x2="12" y2="12" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    padding: scrolled ? '12px 0' : '20px 0',
    background: scrolled ? 'rgba(7,11,20,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LogoIcon />
          </div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.3rem', background: 'linear-gradient(90deg,#a78bfa,#67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            NeuraWeb
          </span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, fontSize: '0.9rem', color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s', position: 'relative' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="desktop-nav">
          <button
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '0.875rem', background: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', color: 'white', border: 'none', padding: '10px 24px', borderRadius: 999, cursor: 'pointer', boxShadow: '0 0 28px rgba(139,92,246,0.45)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 0 40px rgba(139,92,246,0.6)'; }}
            onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 0 28px rgba(139,92,246,0.45)'; }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 4 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            {menuOpen
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ margin: '12px 16px', borderRadius: 16, background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.08)', padding: '20px' }}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontFamily: "'Space Grotesk', sans-serif", borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              {link}
            </a>
          ))}
          <button style={{ width: '100%', marginTop: 16, padding: '12px', background: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', color: 'white', border: 'none', borderRadius: 12, cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
            Get Started
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
