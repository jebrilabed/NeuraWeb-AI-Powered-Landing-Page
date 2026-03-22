import React from 'react';

const TESTIMONIALS = [
  {
    quote: 'NeuraWeb cut our inference latency by 80%. The neural processing layer is unlike anything we\'ve seen in the market.',
    name: 'Arjun Mehta',
    role: 'CTO, Syntherex Labs',
    avatar: 'AM',
    gradientFrom: '#8b5cf6',
    gradientTo: '#7c3aed',
    glowColor: 'rgba(139,92,246,0.12)',
  },
  {
    quote: 'We replaced three separate analytics tools with NeuraWeb\'s Smart Analytics. The depth of insight is extraordinary.',
    name: 'Sofia Reyes',
    role: 'Head of Data, Orbis Finance',
    avatar: 'SR',
    gradientFrom: '#06b6d4',
    gradientTo: '#0284c7',
    glowColor: 'rgba(6,182,212,0.1)',
  },
  {
    quote: 'The automation pipelines practically run themselves. We shipped an AI product in 6 weeks that would have taken a year.',
    name: 'Lena Hartmann',
    role: 'VP Engineering, Novalux',
    avatar: 'LH',
    gradientFrom: '#d946ef',
    gradientTo: '#a21caf',
    glowColor: 'rgba(217,70,239,0.1)',
  },
];

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="#facc15" width="15" height="15">
          <path d="M8 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L8 8.902l-3.09 1.607.59-3.44L3 4.632l3.455-.502z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ position: 'relative', padding: '112px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem',
            letterSpacing: '0.22em', color: '#d946ef', textTransform: 'uppercase', marginBottom: 12
          }}>Testimonials</p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            background: 'linear-gradient(135deg,#fff,#d946ef)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Trusted by builders
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {TESTIMONIALS.map(t => (
            <div key={t.name} style={{
              position: 'relative',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 20, padding: '28px',
              overflow: 'hidden',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Corner glow */}
              <div style={{
                position: 'absolute', top: 0, right: 0, width: 80, height: 80,
                background: `radial-gradient(circle at top right, ${t.glowColor}, transparent)`,
                pointerEvents: 'none'
              }} />

              <StarRating />

              <p style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
                color: '#94a3b8', lineHeight: 1.75, fontSize: '0.9rem',
                margin: '18px 0 22px', fontStyle: 'italic'
              }}>
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: `linear-gradient(135deg,${t.gradientFrom},${t.gradientTo})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: '0.75rem', color: 'white'
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, color: '#e2e8f0', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#475569', fontSize: '0.75rem' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
