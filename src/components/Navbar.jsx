import React, { useState, useEffect, useRef } from 'react';
import { Phone, Calendar, Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkRefs = {
    about: useRef(null),
    services: useRef(null),
    gallery: useRef(null),
    estimator: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null)
  };

  const [indicatorWidth, setIndicatorWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scroll position detector
      const sections = ['about', 'services', 'gallery', 'estimator', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update exact pixel width of line ending at the last letter of active link
  useEffect(() => {
    const activeEl = linkRefs[activeSection]?.current;
    if (activeEl) {
      const exactRightEdge = activeEl.offsetLeft + activeEl.offsetWidth;
      setIndicatorWidth(exactRightEdge);
    }
  }, [activeSection]);

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
        width: '100%',
        zIndex: 1000,
        padding: '0.85rem 0',
        background: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        className="container" 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          width: '100%'
        }}
      >
        {/* 1. Unboxed Clean Brand Logo (Far Left) */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', flexShrink: 0 }}>
          <img 
            src="/logo.jpg" 
            alt="Saru's Fashion Studio Logo" 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '6px',
              objectFit: 'cover',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }} 
          />
          <div style={{ whiteSpace: 'nowrap' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '700', letterSpacing: '0.02em', color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Saru's <span style={{ color: 'var(--accent-gold-dark)' }}>Fashion Studio</span>
            </div>
          </div>
        </a>

        {/* 2. Desktop Pill Navigation Bar (Desktop Only > 1140px) */}
        <div 
          className="desktop-pill-nav"
          style={{
            alignItems: 'center',
            gap: '0.75rem',
            background: '#ffffff',
            border: '1px solid var(--border-gold)',
            borderRadius: '9999px',
            padding: '0.38rem 0.45rem 0.38rem 1.1rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
            flexShrink: 0,
            position: 'relative'
          }}
        >
          {/* Desktop Nav Links with Exact Letter Progress Line */}
          <nav 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.65rem', 
              whiteSpace: 'nowrap',
              position: 'relative',
              paddingBottom: '0.15rem'
            }} 
          >
            <a ref={linkRefs.about} href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a ref={linkRefs.services} href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</a>
            <a ref={linkRefs.gallery} href="#gallery" className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}>Gallery</a>
            <a ref={linkRefs.estimator} href="#estimator" className={`nav-link ${activeSection === 'estimator' ? 'active' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <Sparkles size={13} /> Customizer
            </a>
            <a ref={linkRefs.contact} href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>

            {/* Glowing Active Progress Bar strictly ending at final letter of active word */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-2px',
                left: 0,
                height: '2.5px',
                width: indicatorWidth > 0 ? `${indicatorWidth}px` : '18%',
                background: 'linear-gradient(90deg, #c5a059 0%, #d8b877 50%, #0d3b36 100%)',
                boxShadow: '0 0 8px rgba(197, 160, 89, 0.6)',
                borderRadius: '9999px',
                transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </nav>

          {/* Book Appointment Button */}
          <button 
            onClick={onOpenBooking} 
            className="btn btn-gold" 
            style={{ 
              padding: '0.45rem 1rem', 
              fontSize: '0.82rem',
              whiteSpace: 'nowrap'
            }}
          >
            <Calendar size={13} />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* 3. Mobile Header Actions (Mobile Devices & Tablets < 1140px) */}
        <div className="mobile-header-actions" style={{ alignItems: 'center', gap: '0.65rem' }}>
          <button 
            onClick={onOpenBooking} 
            className="btn btn-gold" 
            style={{ 
              padding: '0.45rem 0.85rem', 
              fontSize: '0.78rem',
              whiteSpace: 'nowrap'
            }}
          >
            <Calendar size={13} />
            <span>Book</span>
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            style={{ 
              color: 'var(--text-primary)', 
              padding: '0.5rem', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              border: '1px solid var(--border-gold)',
              borderRadius: '50%',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              cursor: 'pointer'
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Structured Full-Screen Glass Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          style={{
            position: 'fixed',
            top: '65px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '1.75rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
            zIndex: 999,
            overflowY: 'auto'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold-dark)', fontWeight: '700', marginBottom: '0.5rem' }}>
              Studio Navigation
            </div>

            {[
              { id: 'about', label: 'About Us' },
              { id: 'services', label: '4 Core Services' },
              { id: 'gallery', label: 'Gallery & Portfolio' },
              { id: 'estimator', label: '✨ Style Estimator & Customizer' },
              { id: 'testimonials', label: 'Client Fitting Experience' },
              { id: 'contact', label: 'Contact & Locations' }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={() => setMobileMenuOpen(false)} 
                style={{ 
                  fontSize: '1.05rem', 
                  color: activeSection === item.id ? 'var(--accent-gold-dark)' : 'var(--text-primary)',
                  fontWeight: activeSection === item.id ? '700' : '500',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: activeSection === item.id ? 'rgba(197, 160, 89, 0.12)' : 'rgba(0,0,0,0.02)',
                  border: activeSection === item.id ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span style={{ color: 'var(--accent-gold-dark)', fontSize: '0.85rem' }}>●</span>}
              </a>
            ))}
          </div>
          
          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <a 
              href="tel:+919989017733" 
              style={{ 
                fontSize: '0.95rem', 
                color: 'var(--accent-teal)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '0.5rem', 
                fontFamily: 'var(--font-display)', 
                fontWeight: '600',
                padding: '0.85rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(197, 160, 89, 0.08)',
                border: '1px solid var(--border-gold)',
                textDecoration: 'none'
              }}
            >
              <Phone size={16} style={{ color: 'var(--accent-gold-dark)' }} />
              <span>Call Studio: +91 99890 17733</span>
            </a>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn btn-gold"
              style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
            >
              <Calendar size={16} />
              <span>Book Fitting Consultation</span>
            </button>
          </div>
        </motion.div>
      )}

      <style>{`
        .nav-link {
          font-size: 0.84rem;
          color: var(--text-secondary);
          transition: var(--transition);
          font-weight: 500;
          white-space: nowrap;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-full);
          text-decoration: none;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--accent-gold-dark) !important;
          background: rgba(197, 160, 89, 0.1);
        }
        .desktop-pill-nav { display: none !important; }
        .mobile-header-actions { display: flex !important; }

        @media (min-width: 1140px) {
          .desktop-pill-nav { display: flex !important; }
          .mobile-header-actions { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}
