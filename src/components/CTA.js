import React from 'react';

export default function CTA() {
  return (
    <section style={{ position: 'relative', padding: '128px 24px', overflow: 'hidden' }}>
      {/* Glows */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(6,182,212,0.08) 40%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px', opacity: 0.4, pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          lineHeight: 1.05, marginBottom: 20,
          background: 'linear-gradient(160deg,#fff 0%,#e2d9f3 40%,#a78bfa 75%,#67e8f9 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          textShadow: '0 0 80px rgba(139,92,246,0.4)',
        }}>
          Ready to build the<br />next-generation web?
        </h2>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
          color: '#64748b', fontSize: '1.1rem', marginBottom: 40, lineHeight: 1.7
        }}>
          Join thousands of engineers shipping AI-native products with NeuraWeb.
          Your first 1M tokens are on us.
        </p>

        <button
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.05rem',
            background: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', color: 'white',
            border: 'none', padding: '18px 56px', borderRadius: 999, cursor: 'pointer',
            boxShadow: '0 0 36px rgba(139,92,246,0.5), 0 0 80px rgba(139,92,246,0.2)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05) translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 0 52px rgba(139,92,246,0.65), 0 0 100px rgba(139,92,246,0.25)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = '0 0 36px rgba(139,92,246,0.5), 0 0 80px rgba(139,92,246,0.2)';
          }}
        >
          Join the Future →
        </button>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", color: '#334155',
          fontSize: '0.8rem', marginTop: 18
        }}>
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>
    </section>
  );
}
