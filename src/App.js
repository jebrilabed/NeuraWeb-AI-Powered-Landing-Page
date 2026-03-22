import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Platform from './components/Platform';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: '#070B14', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Features />
      <Platform />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
