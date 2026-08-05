import React from 'react';
import { Calendar, Sparkles, MapPin, Star, ShieldCheck, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenBooking }) {
  return (
    <section 
      style={{
        minHeight: '100dvh',
        paddingTop: '5rem',
        paddingBottom: '2rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 85% 20%, rgba(197, 160, 89, 0.08) 0%, rgba(255, 255, 255, 0) 60%), radial-gradient(circle at 15% 85%, rgba(13, 59, 54, 0.05) 0%, rgba(255, 255, 255, 0) 50%), #ffffff',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          
          {/* Main Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-text-col"
          >
            
            {/* Studio Rating Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(197, 160, 89, 0.08)',
              border: '1px solid var(--border-gold)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              color: 'var(--accent-gold-dark)',
              marginBottom: '0.75rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}>
              <Star size={14} style={{ fill: '#c5a059', color: '#c5a059' }} />
              <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>4.9/5 Star Rated Couture Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'clamp(2.2rem, 4vw, 3.6rem)' }}>
              Bespoke Fashion Tailored for Your <span className="text-gold" style={{ fontStyle: 'italic', fontWeight: '400' }}>Unique Grace.</span>
            </h1>

            {/* OFFICIAL BRAND TAGLINE */}
            <motion.div 
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: '1.18rem',
                fontFamily: 'var(--font-serif)',
                color: 'var(--accent-gold-dark)',
                fontStyle: 'italic',
                marginBottom: '0.85rem',
                fontWeight: '600'
              }}
            >
              "Custom made outfits for every story"
            </motion.div>

            {/* Business Description */}
            <p style={{
              fontSize: '0.96rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.4rem',
              maxWidth: '580px'
            }}>
              Saru’s Fashion Studio offers specialized bespoke designing across 4 core offerings: <strong>Fabrics, Designer Lehengas, Designer Sarees, and Bridal Blouses</strong> with precision in-house fitting trials.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <button onClick={onOpenBooking} className="btn btn-gold" style={{ padding: '0.7rem 1.35rem' }}>
                <Calendar size={16} />
                <span>Book Fitting Consultation</span>
              </button>
              
              <a href="#services" className="btn btn-outline" style={{ padding: '0.7rem 1.35rem' }}>
                <Sparkles size={16} style={{ color: 'var(--accent-gold-dark)' }} />
                <span>Explore 4 Core Services</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '0.85rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ padding: '0.4rem', background: 'rgba(197,160,89,0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-gold-dark)' }}>
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)' }}>100% Fit</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Guarantee</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ padding: '0.4rem', background: 'rgba(197,160,89,0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-gold-dark)' }}>
                  <Scissors size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)' }}>1,500+</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Stitched Fits</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ padding: '0.4rem', background: 'rgba(197,160,89,0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-gold-dark)' }}>
                  <MapPin size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)' }}>2 Branches</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Kondapur & Moti Nagar</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Borderless Organic Studio Photo Presentation (Constrained to Single Screen 100vh) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-visual-col"
          >
            <div style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxHeight: 'calc(100vh - 125px)'
            }}>
              {/* Ambient Studio Gold Radial Glow Backdrop */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                height: '90%',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }} />

              <div className="img-tint-gold" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.12)', zIndex: 1 }}>
                <img 
                  src="/Collections/Hero Sec.PNG" 
                  alt="Saru's Fashion Studio Hero Collection" 
                  style={{
                    maxWidth: '100%',
                    maxHeight: 'calc(100vh - 125px)',
                    height: 'auto',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-text-col { grid-column: span 6 !important; }
          .hero-visual-col { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
}

