import React from 'react';
import { Ruler, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="subheading">The Studio Philosophy</span>
          <h2 className="heading-md">
            Where Precision Tailoring Meets <span className="text-gold">Authentic Storytelling.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Operating in <strong>Kondapur</strong> & <strong>Moti Nagar</strong>, Hyderabad, Saru's Fashion Studio was founded with a clear mission: to eliminate generic fits and replace mass-produced garments with bespoke attire designed exclusively around your body shape and occasion.
          </p>
        </div>

        {/* Story Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Craftsmanship Visual with Guaranteed Local Image */}
          <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 6' } }} className="story-vis">
            <div style={{ position: 'relative' }}>
              <div className="glass-panel" style={{ padding: '0.75rem', border: '1px solid var(--border-gold)' }}>
                <img 
                  src="/Collections/8.jpeg" 
                  alt="Master Craftsmanship at Saru's Fashion Studio" 
                  style={{ borderRadius: 'var(--radius-sm)', width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
              
              {/* Floating Stat Card */}
              <div className="glass-panel-gold" style={{
                position: 'absolute',
                top: '2rem',
                right: '-1.5rem',
                padding: '1.25rem 1.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}>
                <div style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontWeight: '700', lineHeight: 1 }}>15+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Years Master Craftsmanship</div>
              </div>
            </div>
          </div>

          {/* Right Pillar Cards */}
          <div className="story-pillars" style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <motion.div 
              whileHover={{ x: 6 }}
              className="glass-panel" 
              style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem' }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)',
                flexShrink: 0
              }}>
                <Ruler size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.4rem' }}>Zero-Gap Ergonomic Patterning</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  We don't rely on standard size charts. Every saree blouse and lehenga is drafted using 18 distinct body measurement points for a seamless, wrinkle-free fit.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 6 }}
              className="glass-panel" 
              style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem' }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)',
                flexShrink: 0
              }}>
                <Sparkles size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.4rem' }}>In-House Master Embroidery</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Our team of veteran karigars specialize in intricate Maggam work, Zardozi, thread work, and Swarovski stone embellishments tailored to your fabric of choice.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 6 }}
              className="glass-panel" 
              style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem' }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)',
                flexShrink: 0
              }}>
                <Heart size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.4rem' }}>Personalized Trial & Fitting Session</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  We host dedicated fitting trials at our Kondapur & Moti Nagar studios before final finishing touches, giving you complete peace of mind for your big event.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .story-vis { grid-column: span 6 !important; }
          .story-pillars { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
}
