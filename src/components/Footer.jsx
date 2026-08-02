import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Calendar } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-gold)',
      paddingTop: '2.5rem',
      paddingBottom: '1.5rem',
      position: 'relative'
    }}>
      <div className="container">

        {/* Top CTA Banner */}
        <div className="glass-panel-gold" style={{
          padding: '2rem 2.25rem',
          marginBottom: '2.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          background: 'linear-gradient(135deg, rgba(8,44,49,0.95) 0%, rgba(10,55,61,0.95) 100%)'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold)', fontWeight: '700', marginBottom: '0.35rem' }}>
              STUDIOS IN KONDAPUR & MOTI NAGAR
            </div>
            <h3 style={{ fontSize: '1.85rem', color: '#fff', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
              Ready to Craft Your Custom Story?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '520px' }}>
              Schedule a 1-on-1 design consultation with Saru and experience high-precision master tailoring in Hyderabad.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-gold" style={{ padding: '0.8rem 1.4rem', fontSize: '0.92rem' }}>
              <Calendar size={16} />
              <span>Book Studio Fitting</span>
            </button>

            <a
              href="https://maps.google.com/?q=Kondapur+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass"
              style={{ padding: '0.8rem 1.25rem', fontSize: '0.9rem', color: '#fff', border: '1px solid var(--border-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <MapPin size={15} style={{ color: 'var(--accent-gold)' }} />
              <span>Kondapur Map</span>
            </a>

            <a
              href="https://maps.google.com/?q=Moti+Nagar+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass"
              style={{ padding: '0.8rem 1.25rem', fontSize: '0.9rem', color: '#fff', border: '1px solid var(--border-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <MapPin size={15} style={{ color: 'var(--accent-gold)' }} />
              <span>Moti Nagar Map</span>
            </a>
          </div>
        </div>

        {/* 3 Column Visually Equalized Footer Grid */}
        <div className="footer-equalized-grid">

          {/* Col 1: Brand Info & Socials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <img
                src="/logo.jpg"
                alt="Saru's Fashion Studio"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#fff', fontWeight: '700' }}>
                Saru's <span style={{ color: 'var(--accent-gold)' }}>Fashion Studio</span>
              </div>
            </div>

            <div style={{ fontSize: '0.88rem', color: 'var(--accent-gold)', fontStyle: 'italic', marginBottom: '0.75rem', fontWeight: '600' }}>
              "Custom made outfits for every story"
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '1.1rem' }}>
              Specialist bespoke studio across 4 core services: Curated Fabrics, Designer Lehengas, Designer Sarees, and Bridal Blouses.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://www.instagram.com/sarusfashionstudio"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://www.facebook.com/sarusfashions/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Direct Contact & Hours */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Get In Touch</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <a href="tel:+919989017733" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <Phone size={15} style={{ color: 'var(--accent-gold)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600' }}>+91 99890 17733</span>
              </a>

              <a href="mailto:contact@sarusfashionstudio.com" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <Mail size={15} style={{ color: 'var(--accent-gold)' }} />
                <span>contact@sarusfashionstudio.com</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <Clock size={15} style={{ color: 'var(--accent-gold)' }} />
                <span>Mon - Sat: 10:30 AM – 8:30 PM</span>
              </div>
            </div>
          </div>

          {/* Col 3: Core Offerings */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Core Offerings</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <a href="#services" style={{ color: 'var(--text-secondary)' }}>Curated Fabrics</a>
              <a href="#services" style={{ color: 'var(--text-secondary)' }}>Designer Lehengas</a>
              <a href="#services" style={{ color: 'var(--text-secondary)' }}>Designer Sarees</a>
              <a href="#services" style={{ color: 'var(--text-secondary)' }}>Bridal Blouses</a>
              <a href="#estimator" style={{ color: 'var(--accent-gold)' }}>✨ Interactive Customizer</a>
            </div>
          </div>

        </div>

        {/* Tightened Bottom Copyright Divider */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 Saru's Fashion Studio. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span>Built by KERNA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
