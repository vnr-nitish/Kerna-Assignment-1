import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: '"Saru did absolute magic on my bridal lehenga and 3 saree blouses for my reception! The fitting was 10/10 on the first trial itself. No armpit gaping or shoulder slipping. Highly recommended boutique in Kondapur!"',
      author: 'Priyanka Reddy',
      sub: 'Kondapur Studio Client',
      tag: 'Custom Bridal Lehenga Suite'
    },
    {
      quote: '"Extremely professional studio. I brought my own Banarasi saree fabric to their Moti Nagar branch for a heavy Maggam elbow blouse. They guided me on neck cuts that suit my posture and delivered right on time."',
      author: 'Sravanthi Rao',
      sub: 'Moti Nagar Studio Client',
      tag: 'Heavy Maggam Saree Blouse'
    },
    {
      quote: '"The interactive consultation made a huge difference. Saru listened carefully to how I wanted the cape drape for my designer saree. The finishing and stitching quality are top-tier."',
      author: 'Dr. Kavitha Menon',
      sub: 'Hitec City / Kondapur Client',
      tag: 'Designer Pre-Draped Saree'
    }
  ];

  return (
    <section 
      id="testimonials"
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
            CLIENT REVIEWS
          </div>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
            What clients say after their studio trials.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel-gold"
              style={{
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                background: '#ffffff',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lux)'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: 'var(--accent-gold-dark)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
                  ))}
                </div>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  margin: 0
                }}>
                  {item.quote}
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: '700' }}>
                    {item.author}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {item.sub}
                  </div>
                </div>

                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--accent-gold-dark)',
                  background: 'rgba(197,160,89,0.1)',
                  border: '1px solid var(--border-gold)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: '600'
                }}>
                  {item.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
