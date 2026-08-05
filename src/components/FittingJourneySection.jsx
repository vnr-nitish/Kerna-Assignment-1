import React from 'react';
import { motion } from 'framer-motion';

export default function FittingJourneySection() {
  const steps = [
    {
      num: '01',
      title: '1-on-1 Design Consultation',
      desc: 'Visit our Kondapur or Moti Nagar studio. We review your inspiration, body shape, and occasion requirements.'
    },
    {
      num: '02',
      title: 'Fabric Sourcing & Sketching',
      desc: 'Select from our in-studio silk & organza fabrics or bring your own saree. We outline the exact cut and Maggam work.'
    },
    {
      num: '03',
      title: 'In-Studio Trial Fitting',
      desc: 'You try on the semi-stitched garment at our studio to verify shoulder alignment, bust cup placement, and length.'
    },
    {
      num: '04',
      title: 'Final Hand Finishing & Pick-Up',
      desc: 'Master artisans add final tassels, press, and package your flawless outfit for your special event.'
    }
  ];

  return (
    <section 
      className="section-padding"
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        boxSizing: 'border-box'
      }}
    >
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
            The 4-Step Bespoke Fitting Journey
          </h2>
        </div>

        <div className="journey-grid">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel-gold"
              style={{
                padding: '1.75rem 1.35rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                background: '#ffffff',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lux)'
              }}
            >
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                fontWeight: '700',
                color: 'var(--accent-gold-dark)',
                lineHeight: 1
              }}>
                {step.num}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                color: 'var(--text-primary)',
                lineHeight: 1.2
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                margin: 0
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .journey-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.1rem;
        }
        @media (min-width: 640px) {
          .journey-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .journey-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
