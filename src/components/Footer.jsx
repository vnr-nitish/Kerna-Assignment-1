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
          background: 'linear-gradient(135deg, #0d3b36 0%, #165b53 100%)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 15px 35px rgba(13, 59, 54, 0.2)'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold-light)', fontWeight: '700', marginBottom: '0.35rem' }}>
              STUDIOS IN KONDAPUR & MOTI NAGAR
            </div>
            <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
              Ready to Craft Your Custom Story?
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.92rem', maxWidth: '520px' }}>
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
              className="btn"
              style={{ padding: '0.8rem 1.25rem', fontSize: '0.9rem', color: '#ffffff', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.3)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <MapPin size={15} style={{ color: 'var(--accent-gold-light)' }} />
              <span>Kondapur Map</span>
            </a>

            <a
              href="https://maps.google.com/?q=Moti+Nagar+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ padding: '0.8rem 1.25rem', fontSize: '0.9rem', color: '#ffffff', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.3)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <MapPin size={15} style={{ color: 'var(--accent-gold-light)' }} />
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
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: '700' }}>
                Saru's <span style={{ color: 'var(--accent-gold-dark)' }}>Fashion Studio</span>
              </div>
            </div>

            <div style={{ fontSize: '0.88rem', color: 'var(--accent-gold-dark)', fontStyle: 'italic', marginBottom: '0.75rem', fontWeight: '600' }}>
              "Custom made outfits for every story"
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '1.1rem' }}>
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
                  background: 'rgba(197, 160, 89, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold-dark)',
                  border: '1px solid var(--border-gold)'
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
                  background: 'rgba(197, 160, 89, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold-dark)',
                  border: '1px solid var(--border-gold)'
                }}
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Direct Contact & Hours */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Get In Touch</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <a href="tel:+919989017733" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)' }}>
                <Phone size={15} style={{ color: 'var(--accent-gold-dark)' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600' }}>+91 99890 17733</span>
              </a>

              <a href="mailto:contact@sarusfashionstudio.com" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)' }}>
                <Mail size={15} style={{ color: 'var(--accent-gold-dark)' }} />
                <span>contact@sarusfashionstudio.com</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <Clock size={15} style={{ color: 'var(--accent-gold-dark)' }} />
                <span>Mon - Sat: 10:30 AM – 8:30 PM</span>
              </div>
            </div>
          </div>

          {/* Col 3: Core Offerings */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Core Offerings</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <a href="#services" style={{ color: 'var(--text-primary)' }}>Curated Fabrics</a>
              <a href="#services" style={{ color: 'var(--text-primary)' }}>Designer Lehengas</a>
              <a href="#services" style={{ color: 'var(--text-primary)' }}>Designer Sarees</a>
              <a href="#services" style={{ color: 'var(--text-primary)' }}>Bridal Blouses</a>
              <a href="#estimator" style={{ color: 'var(--accent-gold-dark)', fontWeight: '600' }}>✨ Interactive Customizer</a>
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

      <style>{`
        @supports (-webkit-touch-callout: none) {
          @media (max-width: 768px) {
            #contact {
              padding-top: 1.75rem !important;
              padding-bottom: 0.75rem !important;
            }

            #contact .glass-panel-gold {
              padding: 1.25rem 1rem !important;
              margin-bottom: 1.5rem !important;
            }

            #contact .glass-panel-gold h3 {
              font-size: 1.35rem !important;
              line-height: 1.2 !important;
            }

            #contact .glass-panel-gold > div:last-child {
              gap: 0.6rem !important;
            }

            #contact .footer-equalized-grid {
              gap: 1.25rem !important;
              margin-bottom: 1rem !important;
            }

            #contact .footer-equalized-grid > div {
              margin-bottom: 0 !important;
            }

            #contact .footer-equalized-grid h4 {
              margin-bottom: 0.65rem !important;
            }

            #contact .footer-equalized-grid p {
              margin-bottom: 0.8rem !important;
            }

            #contact .footer-equalized-grid a,
            #contact .footer-equalized-grid div {
              line-height: 1.45;
            }

            #contact > div > div:last-child {
              padding-top: 0.9rem !important;
              gap: 0.35rem !important;
              justify-content: center !important;
              text-align: center;
            }
          }
        }
      `}</style>
    </footer>
  );
}
