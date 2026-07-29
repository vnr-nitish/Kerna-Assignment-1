import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 27, 21, 0.95)' : 'rgba(10, 27, 21, 0.6)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
        padding: scrolled ? '0.7rem 0' : '1.1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap', gap: '1rem' }}>
        
        {/* Brand Logo & Studio Locations */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4af37 0%, #8a6c17 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0a1b15',
            fontWeight: '700',
            fontSize: '1.15rem',
            fontFamily: 'var(--font-serif)',
            boxShadow: '0 0 12px rgba(212, 175, 55, 0.35)',
            flexShrink: 0
          }}>
            S
          </div>
          <div style={{ whiteSpace: 'nowrap' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: '700', letterSpacing: '0.02em', color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Saru's <span style={{ color: 'var(--accent-gold)' }}>Fashion Studio</span>
            </div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--accent-gold-light)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span>📍 Kondapur</span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span>Moti Nagar</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation - Single Line Strictly */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.4rem', whiteSpace: 'nowrap', flexShrink: 1 }} className="desktop-nav">
          <a href="#about" className="nav-link">Our Story</a>
          <a href="#services" className="nav-link">4 Core Services</a>
          <a href="#gallery" className="nav-link">Studio Work</a>
          <a href="#estimator" className="nav-link" style={{ color: 'var(--accent-gold-light)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <Sparkles size={13} /> Style Estimator
          </a>
          <a href="#trust" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Locations</a>
        </nav>

        {/* Action Controls - Single Line Strictly */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0, whiteSpace: 'nowrap' }}>
          
          {/* Phone Number - Protected Single Line */}
          <a 
            href="tel:+919876543210" 
            style={{ 
              display: 'none', 
              alignItems: 'center', 
              gap: '0.4rem', 
              fontSize: '0.82rem', 
              color: 'var(--text-secondary)',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-gold)',
              background: 'rgba(212, 175, 55, 0.06)',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }} 
            className="desktop-phone"
          >
            <Phone size={13} style={{ color: 'var(--accent-gold)' }} />
            <span style={{ fontWeight: '600', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>+91 98765 43210</span>
          </a>

          <button 
            onClick={onOpenBooking} 
            className="btn btn-gold" 
            style={{ 
              padding: '0.55rem 1.15rem', 
              fontSize: '0.84rem',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <Calendar size={14} />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Drawer Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            style={{ color: 'var(--text-primary)', padding: '0.35rem', display: 'flex', flexShrink: 0 }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 27, 21, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-gold)',
            padding: '1.75rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.1rem',
            boxShadow: '0 20px 30px rgba(0,0,0,0.6)'
          }}
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Our Story</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>4 Core Services</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Collections & Portfolio</a>
          <a href="#estimator" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', color: 'var(--accent-gold)' }}>✨ Interactive Style Estimator</a>
          <a href="#trust" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Studio Locations & Reviews</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Kondapur & Moti Nagar Addresses</a>
          
          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} style={{ color: 'var(--accent-gold)' }} /> Studios in Kondapur & Moti Nagar
            </div>
            <a href="tel:+919876543210" style={{ fontSize: '0.88rem', color: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap' }}>
              <Phone size={14} /> Call Studio: +91 98765 43210
            </a>
          </div>
        </motion.div>
      )}

      <style>{`
        .nav-link {
          font-size: 0.86rem;
          color: var(--text-secondary);
          transition: var(--transition);
          font-weight: 500;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--accent-gold);
        }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-phone { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}
