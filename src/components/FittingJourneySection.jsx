import React from 'react';
import { motion } from 'framer-motion';

export default function FittingJourneySection() {
  const steps = [
    {
      num: '01',
      title: 'Initial Studio Consultation',
      desc: 'Visit our Kondapur or Moti Nagar studio. We talk through your ideas, fabric options, and event timeline.'
    },
    {
      num: '02',
      title: 'Design & Fabric Selection',
      desc: 'Pick fabrics from our in-studio collection or share your saree. We sketch necklines and embroidery layouts together.'
    },
    {
      num: '03',
      title: 'In-Studio Trial Fitting',
      desc: 'Try on the semi-stitched outfit at our studio so we can check armhole comfort, bust shaping, and waist length.'
    },
    {
      num: '04',
      title: 'Final Hand Finishing & Delivery',
      desc: 'Our tailors add tassels, press the outfit, and have it ready for your big day.'
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
          <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold-dark)', fontWeight: '700', marginBottom: '0.35rem' }}>
            HOW IT WORKS
          </div>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
            Our 4-step studio fitting process.
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
