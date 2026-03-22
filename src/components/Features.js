import React, { useState } from 'react';

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'AI Automation',
    desc: 'Orchestrate intelligent workflows that learn, adapt, and execute at machine speed — no human bottlenecks required.',
    accentColor: '#8b5cf6',
    glowColor: 'rgba(139,92,246,0.2)',
    borderColor: 'rgba(139,92,246,0.2)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Smart Analytics',
    desc: 'Real-time intelligence that transforms raw data into predictive signals, surfacing what matters before you ask.',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6,182,212,0.18)',
    borderColor: 'rgba(6,182,212,0.2)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Neural Processing',
    desc: 'Billion-parameter models running at the edge — ultra-low latency inference for applications that demand speed.',
    accentColor: '#d946ef',
    glowColor: 'rgba(217,70,239,0.18)',
    borderColor: 'rgba(217,70,239,0.2)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    ),
    title: 'Cloud Intelligence',
    desc: 'Globally distributed AI compute that scales elastically — from prototype to planet-scale without re-architecting.',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.18)',
    borderColor: 'rgba(59,130,246,0.2)',
  },
];

function FeatureCard({ feature }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.055)' : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.12)' : feature.borderColor}`,
        borderRadius: 20,
        padding: '28px',
        cursor: 'default',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 0 40px ${feature.glowColor}` : `0 0 20px ${feature.glowColor}`,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Icon */}
      <div style={{
        display: 'inline-flex', padding: 12, borderRadius: 14, marginBottom: 20,
        background: 'rgba(255,255,255,0.06)', color: feature.accentColor,
        boxShadow: `0 0 16px ${feature.glowColor}`,
      }}>
        {feature.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 700,
        fontSize: '1.1rem', color: '#f1f5f9', marginBottom: 10
      }}>
        {feature.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
        fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7
      }}>
        {feature.desc}
      </p>

      {/* Link */}
      <div style={{
        marginTop: 20, display: 'flex', alignItems: 'center', gap: 4,
        fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem',
        fontWeight: 500, color: feature.accentColor
      }}>
        Explore <span>→</span>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" style={{ position: 'relative', padding: '112px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem',
            letterSpacing: '0.22em', color: '#8b5cf6', textTransform: 'uppercase', marginBottom: 12
          }}>
            Capabilities
          </p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            background: 'linear-gradient(135deg,#fff,#c4b5fd)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: 16
          }}>
            Intelligence, built in
          </h2>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
            color: '#475569', maxWidth: 460, margin: '0 auto', lineHeight: 1.7
          }}>
            Four pillars of AI infrastructure, composable and production-ready from day one.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20
        }}>
          {FEATURES.map(f => <FeatureCard key={f.title} feature={f} />)}
        </div>
      </div>
    </section>
  );
}
