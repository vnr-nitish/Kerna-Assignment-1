import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" style={{
      background: '#071410',
      borderTop: '1px solid var(--border-gold)',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Top CTA Banner */}
        <div className="glass-panel-gold" style={{
          padding: '2.5rem 2rem',
          marginBottom: '4.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          background: 'linear-gradient(135deg, rgba(17,39,31,0.95) 0%, rgba(23,51,41,0.95) 100%)'
        }}>
          <div>
            <span className="subheading" style={{ marginBottom: '0.2rem' }}>Studios in Kondapur & Moti Nagar</span>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.4rem' }}>Ready to Craft Your Custom Story?</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '520px' }}>
              Schedule a 1-on-1 design consultation with Saru and experience high-precision master tailoring in Hyderabad.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn btn-gold">
              <span>Book Studio Fitting</span>
            </button>
            
            <a 
              href="https://share.google/59PMmjuLQWolqbRSG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MapPin size={16} style={{ color: 'var(--accent-gold)' }} />
              <span>Kondapur Map</span>
            </a>

            <a 
              href="https://g.co/kgs/MYXHRpJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MapPin size={16} style={{ color: 'var(--accent-gold)' }} />
              <span>Moti Nagar Map</span>
            </a>
          </div>
        </div>

        {/* 4 Column Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '4rem'
        }}>
          
          {/* Col 1: Brand Info & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #d4af37 0%, #8a6c17 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0a1b15',
                fontWeight: '700',
                fontFamily: 'var(--font-serif)'
              }}>
                S
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#fff', fontWeight: '700' }}>
                Saru's <span style={{ color: 'var(--accent-gold)' }}>Fashion Studio</span>
              </div>
            </div>

            <div style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', fontStyle: 'italic', marginBottom: '1rem', fontWeight: '600' }}>
              "Custom made outfits for every story🫶🏻"
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Specialist bespoke studio across 4 core services: Fabrics, Designer Lehengas, Designer Sarees, and Bridal Blouses.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href="https://www.instagram.com/sarusfashionstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Instagram size={18} />
              </a>

              <a 
                href="https://www.facebook.com/sarusfashions/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Studio Locations */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '1.25rem' }}>Studio Locations</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              <div>
                <div style={{ color: 'var(--accent-gold-light)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={14} /> Kondapur Branch:
                </div>
                <div>Kondapur Main Rd, Near Botanical Garden, Hyderabad 500084</div>
                <a href="https://share.google/59PMmjuLQWolqbRSG" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontSize: '0.78rem' }}>
                  View Google Map →
                </a>
              </div>

              <div>
                <div style={{ color: 'var(--accent-gold-light)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={14} /> Moti Nagar Branch:
                </div>
                <div>Main Road, Moti Nagar Area, Hyderabad, Telangana</div>
                <a href="https://g.co/kgs/MYXHRpJ" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontSize: '0.78rem' }}>
                  View Google Map →
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '1.25rem' }}>Get In Touch</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <Phone size={16} style={{ color: 'var(--accent-gold)' }} />
                <span>+91 98765 43210</span>
              </a>

              <a href="mailto:contact@sarusfashionstudio.com" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <Mail size={16} style={{ color: 'var(--accent-gold)' }} />
                <span>contact@sarusfashionstudio.com</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)' }}>
                <Clock size={16} style={{ color: 'var(--accent-gold)' }} />
                <span>Mon - Sat: 10:30 AM – 8:30 PM</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '1.25rem' }}>Core Offerings</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <a href="#services" style={{ color: 'var(--text-secondary)' }}>Curated Fabrics</a>
              <a href="#services" style={{ color: 'var(--text-secondary)' }}>Designer Lehengas</a>
              <a href="#services" style={{ color: 'var(--text-secondary)' }}>Designer Sarees</a>
              <a href="#services" style={{ color: 'var(--text-secondary)' }}>Bridal Blouses</a>
              <a href="#estimator" style={{ color: 'var(--accent-gold)' }}>✨ Interactive Customizer</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 Saru's Fashion Studio. All Rights Reserved. Kondapur & Moti Nagar, Hyderabad.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span>Built by KERNA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
