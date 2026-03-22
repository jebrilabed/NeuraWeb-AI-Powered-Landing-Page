import React from 'react';

const PLATFORM_POINTS = [
  {
    title: 'Model Hub',
    desc: 'Pre-trained and custom model registry with one-click deployment to any environment.',
  },
  {
    title: 'Stream Engine',
    desc: 'Sub-10ms token streaming over WebSockets to any frontend or client application.',
  },
  {
    title: 'Observability Suite',
    desc: 'Full lineage tracking, drift detection, and real-time cost attribution across all models.',
  },
];

const ORBIT_NODES = [
  { label: 'Models', angle: 0, color: '#8b5cf6' },
  { label: 'Data', angle: 72, color: '#06b6d4' },
  { label: 'Deploy', angle: 144, color: '#d946ef' },
  { label: 'Monitor', angle: 216, color: '#3b82f6' },
  { label: 'Scale', angle: 288, color: '#10b981' },
];

function OrbitalViz() {
  return (
    <div className="animate-float" style={{ width: '100%', maxWidth: 440, margin: '0 auto' }}>
      <div style={{ position: 'relative', aspectRatio: '1/1' }}>

        {/* Outer ring */}
        <div className="animate-spin-slow" style={{
          position: 'absolute', inset: 0,
          border: '1px solid rgba(139,92,246,0.2)',
          borderRadius: '50%',
        }} />

        {/* Mid ring */}
        <div className="animate-spin-reverse" style={{
          position: 'absolute', inset: '10%',
          border: '1px dashed rgba(6,182,212,0.18)',
          borderRadius: '50%',
        }} />

        {/* Core */}
        <div style={{
          position: 'absolute', inset: '28%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(7,11,20,0.95) 70%)',
          border: '1px solid rgba(139,92,246,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 60px rgba(139,92,246,0.4), 0 0 120px rgba(139,92,246,0.15)',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.6rem',
              background: 'linear-gradient(135deg,#a78bfa,#67e8f9)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>NW</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.58rem',
              color: '#475569', letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 2
            }}>Core AI</div>
          </div>
        </div>

        {/* Orbiting nodes */}
        {ORBIT_NODES.map(({ label, angle, color }) => {
          const rad = (angle - 90) * (Math.PI / 180);
          const r = 42;
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          return (
            <div key={label} style={{
              position: 'absolute',
              left: `${x}%`, top: `${y}%`,
              transform: 'translate(-50%,-50%)',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: `${color}1a`,
                border: `1px solid ${color}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backdropFilter: 'blur(8px)',
                boxShadow: `0 0 20px ${color}30`,
              }}>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.62rem', fontWeight: 600,
                  color, textAlign: 'center', lineHeight: 1.1
                }}>{label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Platform() {
  return (
    <section id="ai-platform" style={{ position: 'relative', padding: '112px 24px', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 60% 50%, rgba(139,92,246,0.14) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>

        {/* Text */}
        <div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem',
            letterSpacing: '0.22em', color: '#06b6d4', textTransform: 'uppercase', marginBottom: 14
          }}>Platform</p>

          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
            color: '#f1f5f9', lineHeight: 1.1, marginBottom: 20
          }}>
            One platform.<br />
            Infinite{' '}
            <span style={{
              background: 'linear-gradient(90deg,#8b5cf6,#06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>intelligence.</span>
          </h2>

          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
            color: '#64748b', lineHeight: 1.8, marginBottom: 36, fontSize: '0.95rem'
          }}>
            NeuraWeb's platform layers seamlessly — from model ingestion through fine-tuning,
            deployment, and real-time monitoring — giving your team a single control plane for all AI operations.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PLATFORM_POINTS.map(({ title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 22, height: 22, minWidth: 22,
                  background: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginTop: 2
                }}>
                  <svg viewBox="0 0 12 10" fill="none" width="11" height="9">
                    <path d="M1 5l3 4 7-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, color: '#e2e8f0', marginBottom: 3, fontSize: '0.95rem' }}>{title}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, color: '#64748b', fontSize: '0.85rem', lineHeight: 1.65 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orbital visualization */}
        <OrbitalViz />
      </div>
    </section>
  );
}
