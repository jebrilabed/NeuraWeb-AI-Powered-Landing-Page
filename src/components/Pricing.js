import React from 'react';

const PLANS = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    desc: 'For indie builders and small teams exploring AI-native development.',
    features: [
      '5M tokens / month',
      '2 AI pipelines',
      'Smart Analytics (Basic)',
      'Community support',
      'REST API access',
    ],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$199',
    period: '/mo',
    desc: 'For scaling teams that need enterprise-grade power without enterprise pricing.',
    features: [
      '50M tokens / month',
      'Unlimited pipelines',
      'Smart Analytics (Full)',
      'Neural Processing',
      'Priority support',
      'Webhooks & integrations',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Dedicated infrastructure, SLAs, and white-glove onboarding for mission-critical AI.',
    features: [
      'Unlimited tokens',
      'Private cloud deployment',
      'Custom model fine-tuning',
      '99.99% SLA',
      'Dedicated success manager',
      'SOC 2 & HIPAA ready',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

function CheckIcon({ highlight }) {
  return (
    <div style={{
      width: 18, height: 18, minWidth: 18, borderRadius: '50%',
      background: highlight ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.07)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg viewBox="0 0 10 8" fill="none" width="9" height="7">
        <path d="M1 4l2.5 3 5.5-6" stroke={highlight ? '#c4b5fd' : '#64748b'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" style={{ position: 'relative', padding: '112px 24px', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 65%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem',
            letterSpacing: '0.22em', color: '#8b5cf6', textTransform: 'uppercase', marginBottom: 12
          }}>Pricing</p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            background: 'linear-gradient(135deg,#fff,#a78bfa)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: 12
          }}>
            Scale with confidence
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, color: '#475569' }}>
            No surprise bills. No vendor lock-in. Cancel any time.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24, alignItems: 'start'
        }}>
          {PLANS.map(plan => (
            <div key={plan.name} style={{
              position: 'relative',
              borderRadius: 22,
              padding: '32px',
              background: plan.highlight ? 'rgba(139,92,246,0.1)' : 'rgba(255,255,255,0.025)',
              border: `1px solid ${plan.highlight ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.07)'}`,
              backdropFilter: 'blur(12px)',
              transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
              boxShadow: plan.highlight ? '0 0 60px rgba(139,92,246,0.25)' : 'none',
            }}>
              {/* Popular badge */}
              {plan.highlight && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
                  borderRadius: 999, padding: '4px 20px',
                  fontSize: '0.68rem', fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, color: 'white', letterSpacing: '0.1em',
                  textTransform: 'uppercase', whiteSpace: 'nowrap'
                }}>
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <div style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                color: plan.highlight ? '#c4b5fd' : '#94a3b8',
                fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14
              }}>
                {plan.name}
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 10 }}>
                <span style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: '2.6rem', color: '#f1f5f9'
                }}>{plan.price}</span>
                {plan.period && (
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#475569', fontSize: '0.9rem' }}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
                color: '#64748b', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: 26
              }}>
                {plan.desc}
              </p>

              {/* Features list */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckIcon highlight={plan.highlight} />
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
                      color: '#94a3b8', fontSize: '0.875rem'
                    }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                style={{
                  width: '100%', padding: '13px',
                  borderRadius: 14, border: 'none', cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: '0.9rem',
                  transition: 'all 0.2s',
                  ...(plan.highlight
                    ? { background: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', color: 'white', boxShadow: '0 0 24px rgba(139,92,246,0.35)' }
                    : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#94a3b8' }
                  )
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
