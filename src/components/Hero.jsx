import React from 'react';
import { Calendar, Sparkles, MapPin, Star, ShieldCheck, Scissors, ArrowRight, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeDStudioCanvas from './ThreeDStudioCanvas';

export default function Hero({ onOpenBooking }) {
  return (
    <section 
      style={{
        minHeight: '100vh',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.12) 0%, rgba(10, 27, 21, 0) 55%), radial-gradient(circle at 20% 80%, rgba(30, 74, 60, 0.35) 0%, rgba(10, 27, 21, 0) 50%)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Main Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 7' } }} 
            className="hero-text-col"
          >
            
            {/* Dual Studio Location & Rating Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              color: 'var(--accent-gold-light)',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
              flexWrap: 'wrap'
            }}>
              <MapPin size={15} style={{ color: 'var(--accent-gold)' }} />
              <span>Studios in <strong>Kondapur</strong> & <strong>Moti Nagar</strong></span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <Star size={14} style={{ fill: '#d4af37', color: '#d4af37' }} />
              <span style={{ fontWeight: '600', color: '#fff' }}>4.9/5 Star Rated</span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Bespoke Fashion Tailored for Your <span className="text-gold" style={{ fontStyle: 'italic', fontWeight: '400' }}>Unique Grace.</span>
            </h1>

            {/* OFFICIAL BRAND TAGLINE */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                fontSize: '1.35rem',
                fontFamily: 'var(--font-serif)',
                color: 'var(--accent-gold)',
                fontStyle: 'italic',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '600'
              }}
            >
              <span>"Custom made outfits for every story🫶🏻"</span>
            </motion.div>

            {/* Business Description */}
            <p style={{
              fontSize: '1.08rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '2.25rem',
              maxWidth: '600px'
            }}>
              Saru’s Fashion Studio offers specialized bespoke designing across 4 core offerings: <strong>Fabrics, Designer Lehengas, Designer Sarees, and Bridal Blouses</strong> with precision in-house fitting trials.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.75rem' }}>
              <button onClick={onOpenBooking} className="btn btn-gold">
                <Calendar size={17} />
                <span>Book Fitting Consultation</span>
              </button>
              
              <a href="#services" className="btn btn-outline">
                <Sparkles size={17} style={{ color: 'var(--accent-gold)' }} />
                <span>Explore 4 Core Services</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1.25rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ padding: '0.5rem', background: 'rgba(212,175,55,0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-gold)' }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#fff' }}>100% Fit</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Guarantee</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ padding: '0.5rem', background: 'rgba(212,175,55,0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-gold)' }}>
                  <Scissors size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#fff' }}>1,500+</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Stitched Fits</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ padding: '0.5rem', background: 'rgba(212,175,55,0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-gold)' }}>
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#fff' }}>2 Branches</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Kondapur & Moti Nagar</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Interactive 3D WebGL Mannequin + Studio Photo Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 5' } }} 
            className="hero-visual-col"
          >
            <div style={{ position: 'relative' }}>
              
              {/* Studio Showcase Photo */}
              <div className="glass-panel-gold" style={{
                padding: '0.75rem',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
              }}>
                <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '420px' }}>
                  <img 
                    src="/Collections/A.jpg" 
                    alt="Saru's Fashion Studio Bridal Collection" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,27,21,0.95) 0%, transparent 55%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem'
                  }}>
                    <span className="subheading" style={{ fontSize: '0.75rem', marginBottom: '0.2rem' }}>Authentic Creation</span>
                    <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: '600' }}>Custom Bridal & Maggam Work</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold-light)' }}>Created by Saru's Fashion Studio</p>
                  </div>
                </div>
              </div>

              {/* Floating Interactive 3D WebGL Canvas Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-panel-gold" 
                style={{
                  position: 'absolute',
                  top: '-2rem',
                  right: '-1.5rem',
                  width: '190px',
                  height: '190px',
                  padding: '0.5rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
                  background: 'rgba(10, 27, 21, 0.92)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <div style={{ width: '100%', height: '130px' }}>
                  <ThreeDStudioCanvas interactive={true} />
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>
                  ✨ Interactive 3D WebGL
                </div>
              </motion.div>

              {/* Location Badge */}
              <div className="glass-panel" style={{
                position: 'absolute',
                bottom: '-1.25rem',
                left: '-1.25rem',
                padding: '0.85rem 1.15rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
                border: '1px solid var(--border-gold)'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(212,175,55,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)'
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: '#fff', fontWeight: '600' }}>Hyderabad Studios</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold-light)' }}>Kondapur & Moti Nagar</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-text-col { grid-column: span 7 !important; }
          .hero-visual-col { grid-column: span 5 !important; }
        }
      `}</style>
    </section>
  );
}
