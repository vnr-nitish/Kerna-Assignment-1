import React from 'react';
import { Ruler, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container" style={{ width: '100%' }}>
        
        {/* Header - Flowing from Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2rem auto' }}>
          <span className="subheading" style={{ fontSize: '0.8rem', marginBottom: '0.4rem' }}>The Bespoke Journey</span>
          <h2 className="heading-md" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', marginBottom: '0.6rem' }}>
            From Vision to Fit: How We Craft Your <span className="text-gold">Bespoke Outfit.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            After selecting your core offering, experience our signature 3-step crafting process—from 18-point ergonomic pattern drafting to in-house master embroidery and dedicated fitting trials.
          </p>
        </div>

        {/* Story Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2rem',
          alignItems: 'center'
        }}>
          
          {/* Left Craftsmanship Visual (Clean Photo - No Text Overlays) */}
          <div style={{ gridColumn: 'span 12' }} className="story-vis">
            <div className="glass-panel img-tint-teal" style={{ padding: '0.5rem', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-md)' }}>
              <img 
                src="/Collections/8.jpeg" 
                alt="Master Craftsmanship at Saru's Fashion Studio" 
                style={{ borderRadius: 'var(--radius-sm)', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Right Pillar Cards */}
          <div className="story-pillars" style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            
            <motion.div 
              whileHover={{ x: 4 }}
              className="glass-panel" 
              style={{ padding: '1.1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(197, 160, 89, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold-dark)',
                flexShrink: 0
              }}>
                <Ruler size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Zero-Gap Ergonomic Patterning</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  We don't rely on standard size charts. Every saree blouse and lehenga is drafted using 18 distinct body measurement points for a seamless fit.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 4 }}
              className="glass-panel" 
              style={{ padding: '1.1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(197, 160, 89, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold-dark)',
                flexShrink: 0
              }}>
                <Sparkles size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>In-House Master Embroidery</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  Our team of veteran karigars specialize in intricate Maggam work, Zardozi, thread work, and Swarovski embellishments tailored to your fabric.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 4 }}
              className="glass-panel" 
              style={{ padding: '1.1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(197, 160, 89, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold-dark)',
                flexShrink: 0
              }}>
                <Heart size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Personalized Trial & Fitting Session</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  We host dedicated fitting trials at our studio before final finishing touches, giving you complete peace of mind for your big event.
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

