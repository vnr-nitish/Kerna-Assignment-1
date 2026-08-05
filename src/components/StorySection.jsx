import React from 'react';
import { Ruler, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container" style={{ width: '100%' }}>
        
        {/* Header - Flowing from Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2rem auto' }}>
          <span className="subheading" style={{ fontSize: '0.8rem', marginBottom: '0.4rem' }}>OUR CRAFTSMANSHIP</span>
          <h2 className="heading-md" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', marginBottom: '0.6rem' }}>
            Handmade detail, <span className="text-gold">fitted just for you.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            We work closely with you from initial sketch to final fitting so every saree blouse, lehenga, and custom drape sits comfortably and looks effortless.
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
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Personalized Measurement & Patterning</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  Every outfit is drafted from scratch based on your posture and preferences, avoiding standard size templates.
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
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>In-House Hand Embroidery</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  Our master artisans work on Maggam embroidery, Zardozi, and thread embellishments directly in our Hyderabad workshop.
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
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>In-Studio Trial Fitting</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  Try on your semi-stitched garment at our Kondapur or Moti Nagar studio before final hand finishing.
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

