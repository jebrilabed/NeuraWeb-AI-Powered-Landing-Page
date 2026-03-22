import React, { useRef, useEffect } from 'react';

function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.5 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.018;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.2;
            const hue = 260 + Math.sin(nodes[i].pulse) * 30;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${hue},80%,70%,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        const pulse = 0.5 + 0.5 * Math.sin(n.pulse);
        const hue = 250 + pulse * 40;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue},80%,75%,${0.5 + pulse * 0.4})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5, display: 'block' }}
    />
  );
}

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: 96, paddingBottom: 80 }}>

      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />

      {/* Neural canvas */}
      <NeuralCanvas />

      {/* Glow overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.22) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 70%, rgba(6,182,212,0.12) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%, rgba(217,70,239,0.1) 0%, transparent 50%)', pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 18px', borderRadius: 999, marginBottom: 32,
          background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)',
          fontFamily: "'Space Grotesk', sans-serif", color: '#c4b5fd', fontSize: '0.78rem', fontWeight: 500
        }}>
          <span className="animate-pulse-slow" style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', display: 'inline-block' }} />
          Now in Public Beta — Join 12,000+ developers
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2.4rem, 6vw, 5rem)',
          lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24,
          background: 'linear-gradient(160deg, #fff 0%, #e2d9f3 40%, #a78bfa 75%, #67e8f9 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          textShadow: '0 0 80px rgba(139,92,246,0.4)',
        }}>
          The Future of<br />AI-Powered Web<br />Experiences
        </h1>

        {/* Subtext */}
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300,
          fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#64748b',
          maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.75
        }}>
          NeuraWeb fuses neural intelligence with your web stack — delivering real-time automation,
          predictive analytics, and billion-parameter inference at the edge.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 64 }}>
          <button
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500,
              background: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', color: 'white',
              border: 'none', padding: '16px 40px', borderRadius: 999,
              fontSize: '1rem', cursor: 'pointer',
              boxShadow: '0 0 32px rgba(139,92,246,0.45), 0 0 64px rgba(139,92,246,0.15)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 48px rgba(139,92,246,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(139,92,246,0.45)'; }}
          >
            Start Now →
          </button>
          <button
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400,
              background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.75)',
              border: '1px solid rgba(255,255,255,0.14)', padding: '16px 40px', borderRadius: 999,
              fontSize: '1rem', cursor: 'pointer', backdropFilter: 'blur(8px)',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; }}
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[['99.9%', 'Uptime SLA'], ['< 8ms', 'Inference P99'], ['10B+', 'Daily Tokens']].map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.5rem',
                background: 'linear-gradient(135deg,#a78bfa,#67e8f9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>{val}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: '#475569', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="animate-float" style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, opacity: 0.35 }}>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, transparent, #8b5cf6)' }} />
        <svg viewBox="0 0 12 8" width="12" height="8"><path d="M0 0l6 8 6-8z" fill="#8b5cf6" /></svg>
      </div>
    </section>
  );
}
