import React from 'react';

const FOOTER_LINKS = [
  {
    heading: 'Product',
    links: ['Features', 'Platform', 'Pricing', 'Changelog', 'Status'],
  },
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies'],
  },
];

const SOCIAL = [
  { label: 'X', name: 'Twitter' },
  { label: 'GH', name: 'GitHub' },
  { label: 'IN', name: 'LinkedIn' },
  { label: 'DC', name: 'Discord' },
];

const LogoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
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

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 24px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 40, marginBottom: 48
        }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 9,
                background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <LogoIcon />
              </div>
              <span style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.2rem',
                background: 'linear-gradient(90deg,#a78bfa,#67e8f9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>NeuraWeb</span>
            </div>

            <p style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
              color: '#475569', fontSize: '0.85rem', lineHeight: 1.75,
              maxWidth: 240, marginBottom: 20
            }}>
              The AI-native platform for teams building the next generation of intelligent web experiences.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIAL.map(s => (
                <a key={s.name} href="#" title={s.name}
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#64748b', textDecoration: 'none', transition: 'all 0.2s',
                    fontFamily: "'Syne', sans-serif", fontSize: '0.58rem', fontWeight: 700,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; e.currentTarget.style.color = '#a78bfa'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#64748b'; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(col => (
            <div key={col.heading}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                color: '#e2e8f0', fontSize: '0.85rem', marginBottom: 16,
                letterSpacing: '0.04em'
              }}>{col.heading}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
                        color: '#475569', fontSize: '0.85rem', textDecoration: 'none',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={e => e.target.style.color = '#94a3b8'}
                      onMouseLeave={e => e.target.style.color = '#475569'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, textAlign: 'center' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#334155', fontSize: '0.8rem', marginBottom: 6 }}>
            © 2025 NeuraWeb, Inc. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1e293b', fontSize: '0.75rem' }}>
            Built with <span style={{ color: '#8b5cf6' }}>♥</span> for the AI-native era
          </p>
        </div>
      </div>
    </footer>
  );
}
