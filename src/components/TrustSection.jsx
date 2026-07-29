import React from 'react';
import { Star, MapPin, CheckCircle, ShieldCheck, HelpCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    id: 1,
    name: 'Priyanka Reddy',
    location: 'Kondapur Studio Client',
    rating: 5,
    date: '2 weeks ago',
    text: 'Saru did absolute magic on my bridal lehenga and 3 saree blouses for my reception! The fitting was 10/10 on the first trial itself. No armpit gaping or shoulder slipping. Highly recommended boutique in Kondapur!',
    outfit: 'Custom Bridal Lehenga Suite'
  },
  {
    id: 2,
    name: 'Sravanthi Rao',
    location: 'Moti Nagar Studio Client',
    rating: 5,
    date: '1 month ago',
    text: 'Extremely professional studio. I brought my own Banarasi saree fabric to their Moti Nagar branch for a heavy Maggam elbow blouse. They guided me on neck cuts that suit my posture and delivered right on time.',
    outfit: 'Heavy Maggam Saree Blouse'
  },
  {
    id: 3,
    name: 'Dr. Kavitha Menon',
    location: 'Hitec City / Kondapur Client',
    rating: 5,
    date: '3 weeks ago',
    text: 'The interactive consultation made a huge difference. Saru listened carefully to how I wanted the cape drape for my designer saree. The finishing and stitching quality are top-tier.',
    outfit: 'Designer Pre-Draped Saree'
  }
];

const JOURNEY_STEPS = [
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

export default function TrustSection() {
  return (
    <section id="trust" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="subheading">Building Total Trust</span>
          <h2 className="heading-md">
            Why Hyderabad Trusts <span className="text-gold">Saru's Fashion Studio.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Operating across two premier locations in <strong>Kondapur</strong> and <strong>Moti Nagar</strong> with authentic client experiences and fit guarantees.
          </p>
        </div>

        {/* Studio Locations Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4.5rem'
        }}>
          {/* Kondapur Studio Card */}
          <div className="glass-panel-gold" style={{ padding: '1.75rem', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
              <MapPin size={20} />
              <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>Kondapur Studio Branch</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Kondapur Main Road, Near Botanical Garden & Google Office Corridor, Kondapur, Hyderabad, 500084.
            </p>
            <a 
              href="https://share.google/59PMmjuLQWolqbRSG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ width: '100%', padding: '0.65rem', fontSize: '0.84rem' }}
            >
              <span>Get Google Maps Directions (Kondapur)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Moti Nagar Studio Card */}
          <div className="glass-panel-gold" style={{ padding: '1.75rem', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
              <MapPin size={20} />
              <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>Moti Nagar Studio Branch</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Main Road, Moti Nagar Area, Hyderabad, Telangana (Convenient access for West Hyderabad).
            </p>
            <a 
              href="https://g.co/kgs/MYXHRpJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ width: '100%', padding: '0.65rem', fontSize: '0.84rem' }}
            >
              <span>Get Google Maps Directions (Moti Nagar)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* 4-Step Fitting Journey */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#fff' }}>The 4-Step Bespoke Fitting Journey</h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem'
          }}>
            {JOURNEY_STEPS.map((step) => (
              <div key={step.num} className="glass-panel" style={{ padding: '1.75rem', position: 'relative' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--accent-gold)',
                  fontWeight: '700',
                  opacity: 0.8,
                  marginBottom: '0.5rem'
                }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.5rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Reviews */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="subheading" style={{ marginBottom: '0.2rem' }}>Authentic Feedback</span>
            <h3 style={{ fontSize: '1.75rem', color: '#fff' }}>Client Fitting Testimonials</h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="glass-panel" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
                
                <div style={{ display: 'flex', gap: '0.2rem', color: '#d4af37', marginBottom: '0.75rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} style={{ fill: '#d4af37' }} />
                  ))}
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  "{rev.text}"
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#fff' }}>{rev.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{rev.location}</div>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold-light)', background: 'rgba(212,175,55,0.1)', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                    {rev.outfit}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
