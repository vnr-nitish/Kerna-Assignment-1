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
            
            {/* Studio Location Subheading */}
            <div style={{
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--accent-gold-dark)',
              fontWeight: '700',
              marginBottom: '0.65rem'
            }}>
              HYDERABAD • KONDAPUR & MOTI NAGAR
            </div>

            {/* Main Headline */}
            <h1 className="heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.15 }}>
              Custom Couture, <span className="text-gold" style={{ fontStyle: 'italic', fontWeight: '400' }}>Tailored to Your Story.</span>
            </h1>

            {/* Business Description */}
            <p style={{
              fontSize: '1.02rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.75rem',
              maxWidth: '520px'
            }}>
              From handpicked fabrics to Maggam embroidery and lehenga styling, we craft custom outfits for your special occasions with personalized in-studio trial fittings.
            </p>

            {/* Single Primary Action Button */}
            <div>
              <button onClick={onOpenBooking} className="btn btn-gold" style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}>
                <Calendar size={18} />
                <span>Book Studio Fitting</span>
              </button>
            </div>

          </motion.div>

          {/* Borderless Organic Studio Photo Presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-visual-col"
          >
            <div className="hero-img-container" style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
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

              <div className="img-tint-gold hero-img-wrapper" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.12)', zIndex: 1, width: '100%' }}>
                <img 
                  src="/Collections/Hero Sec.PNG" 
                  alt="Saru's Fashion Studio Hero Collection" 
                  className="hero-img-responsive"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-img-responsive {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: cover;
          display: block;
        }

        @media (min-width: 992px) {
          .hero-text-col { grid-column: span 6 !important; }
          .hero-visual-col { grid-column: span 6 !important; }
          .hero-img-container { max-height: calc(100vh - 125px) !important; }
          .hero-img-responsive {
            max-width: 100% !important;
            max-height: calc(100vh - 125px) !important;
            object-fit: contain !important;
            width: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

