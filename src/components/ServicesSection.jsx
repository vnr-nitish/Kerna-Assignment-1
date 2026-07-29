import React, { useState } from 'react';
import { ArrowRight, Sparkles, Clock, Check, X, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const CORE_SERVICES = [
  {
    id: 'fabrics',
    title: 'Curated Fabrics',
    category: 'Sourcing & Selection',
    shortDesc: 'Handpicked pure Kanjeevaram silks, organzas, tissue, velvet, and embroidered net fabrics.',
    fullDesc: 'We curate and source high-grade raw silks, Kanjeevaram weaves, sheer organza, and textured velvets directly. Whether you need matching fabric for a blouse or custom dye-to-match tones for your lehenga, our fabric consultation ensures premium quality.',
    craftTime: 'Instant / 3-5 Days',
    priceEstimate: 'Custom Sourcing',
    image: '/Services/A.jpg',
    features: [
      'Pure Kanjeevaram & Banarasi weaves',
      'Custom color dyeing & tone matching',
      'Luxurious organza, net & velvet options',
      'In-studio tactile fabric swatches'
    ]
  },
  {
    id: 'lehengas',
    title: 'Designer Lehengas',
    category: 'Bridal & Festivities',
    shortDesc: 'Bespoke lehenga sets with opulent Zardozi, Aari handwork, dual dupattas, and tailored flare.',
    fullDesc: 'Crafted exclusively for your wedding, sangeet, or gala. Our designer lehengas feature custom can-can layering, ergonomic waistline fitting, and intricate hand embroidery customized around your personal love story.',
    craftTime: '10 - 21 Days',
    priceEstimate: 'Bespoke Order',
    image: '/Services/B.jpg',
    features: [
      'Dual dupatta styling & draping setup',
      'Integrated structural can-can flare',
      'In-house Maggam & Zardozi karigars',
      '2 stage fitting trials at studio'
    ]
  },
  {
    id: 'sarees',
    title: 'Designer Sarees',
    category: 'Pre-Draped & Fusion',
    shortDesc: 'Pre-stitched concept sarees, belt ensembles, cocktail drapes, and heirloom saree restyling.',
    fullDesc: 'Experience effortless elegance with our designer saree creations. We offer ready-to-wear pre-draped sarees, pleated jacket ensembles, and restyling of vintage family sarees into modern masterpieces.',
    craftTime: '5 - 10 Days',
    priceEstimate: 'Custom Couture',
    image: '/Services/C.jpg',
    features: [
      'Pre-stitched quick drape construction',
      'Designer embroidered waist belts',
      'Heirloom saree restoration & restyling',
      'Custom pleat setting for zero hassle'
    ]
  },
  {
    id: 'blouses',
    title: 'Bridal Blouses',
    category: 'Signature Handwork',
    shortDesc: 'Master Maggam work, Aari thread embroidery, boat necks, and zero-gap ergonomic pattern fitting.',
    fullDesc: 'Our signature specialty. Every blouse is drafted using 18 distinct body points to prevent armpit gaping or shoulder slipping. Customized with elbow-length Maggam work, peacock motifs, and sheer net backlines.',
    craftTime: '5 - 12 Days',
    priceEstimate: 'Master Tailored',
    image: '/Services/D.jpg',
    features: [
      '18-point body measurement mapping',
      'Anti-shoulder-slip inner strap locks',
      'Handcrafted Maggam, Aari & Zari work',
      'Custom cups & structural necklines'
    ]
  }
];

export default function ServicesSection({ onSelectService }) {
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section id="services" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="subheading">4 Core Offerings</span>
          <h2 className="heading-md" style={{ marginBottom: '0.75rem' }}>
            Our Specialized <span className="text-gold">Design Services.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Every outfit at Saru’s Fashion Studio is custom-crafted to tell your personal story with precision fitting and artisan detail.
          </p>
        </div>

        {/* 4 Core Services in 1 Single Horizontal Row on Desktop */}
        <div className="services-single-row">
          {CORE_SERVICES.map((srv, idx) => (
            <motion.div 
              key={srv.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-panel"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition)',
                border: '1px solid var(--border-subtle)',
                position: 'relative'
              }}
            >
              {/* Actual Local Studio Image from /Services/ */}
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '0.85rem',
                  left: '0.85rem',
                  background: 'rgba(10,27,21,0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.72rem',
                  color: 'var(--accent-gold)',
                  fontWeight: '600',
                  border: '1px solid rgba(212,175,55,0.3)'
                }}>
                  {srv.category}
                </div>
              </div>

              <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>{srv.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {srv.shortDesc}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    <Clock size={13} style={{ color: 'var(--accent-gold)' }} />
                    <span>{srv.craftTime}</span>
                  </div>

                  <button 
                    onClick={() => setActiveModalService(srv)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.82rem',
                      color: 'var(--accent-gold-light)',
                      fontWeight: '600'
                    }}
                  >
                    <span>Details</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: 'rgba(5, 15, 12, 0.88)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-panel-gold" 
            style={{
              maxWidth: '620px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 30px 60px rgba(0,0,0,0.85)'
            }}
          >
            <button 
              onClick={() => setActiveModalService(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                color: 'var(--text-muted)',
                padding: '0.4rem',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)'
              }}
            >
              <X size={20} />
            </button>

            <span className="subheading">{activeModalService.category}</span>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.75rem' }}>{activeModalService.title}</h3>
            
            <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', height: '200px', marginBottom: '1.25rem' }}>
              <img src={activeModalService.image} alt={activeModalService.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {activeModalService.fullDesc}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.88rem', color: '#fff', fontWeight: '600', marginBottom: '0.65rem' }}>Features & Craft Process:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {activeModalService.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    <Check size={15} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setActiveModalService(null)} 
                className="btn btn-outline" 
                style={{ padding: '0.6rem 1.15rem' }}
              >
                Close
              </button>
              <button 
                onClick={() => {
                  const srv = activeModalService;
                  setActiveModalService(null);
                  onSelectService(srv.title);
                }} 
                className="btn btn-gold" 
                style={{ padding: '0.6rem 1.15rem' }}
              >
                <Sparkles size={15} />
                <span>Book This Service</span>
              </button>
            </div>

          </motion.div>
        </div>
      )}

    </section>
  );
}
