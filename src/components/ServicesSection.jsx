import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock, Check, X, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const CORE_SERVICES = [
  {
    id: 'fabrics',
    title: 'Curated Fabrics',
    category: 'Sourcing & Selection',
    shortDesc: 'Pure Kanjeevaram silks, organza, georgette, velvet, and embroidered nets.',
    fullDesc: 'We source pure raw silks, Kanjeevaram weaves, sheer organza, and rich velvets directly. Whether you need a matching blouse fabric or custom dyed tones for your lehenga, we help you pick the right material in our studio.',
    craftTime: 'Available In-Studio',
    priceEstimate: 'Custom Sourcing',
    image: '/Services/A.jpg',
    features: [
      'Pure Kanjeevaram & Banarasi weaves',
      'Custom color dyeing & tone matching',
      'Soft organza, net & velvet fabrics',
      'Touch and feel fabric swatches at studio'
    ]
  },
  {
    id: 'lehengas',
    title: 'Designer Lehengas',
    category: 'Bridal & Festivities',
    shortDesc: 'Bridal and festive lehengas with Zardozi handwork, dupattas, and tailored flare.',
    fullDesc: 'Tailored for your wedding, sangeet, or reception. Our lehengas feature custom can-can layering, comfortable waistline fitting, and hand embroidery designed around your vision.',
    craftTime: '10 - 21 Days',
    priceEstimate: 'Custom Outfit',
    image: '/Services/B.jpg',
    features: [
      'Dual dupatta styling setup',
      'Comfortable can-can flare',
      'In-house Maggam & Zardozi handwork',
      'Dedicated trial fitting at studio'
    ]
  },
  {
    id: 'sarees',
    title: 'Designer Sarees',
    category: 'Pre-Draped & Fusion',
    shortDesc: 'Pre-draped sarees, waist belts, cocktail drapes, and saree restyling.',
    fullDesc: 'Enjoy effortless wear with custom pre-draped sarees and pleated ensembles. We also restyle vintage family sarees into updated modern outfits for your events.',
    craftTime: '5 - 10 Days',
    priceEstimate: 'Custom Outfit',
    image: '/Services/C.jpg',
    features: [
      'Pre-stitched easy drapes',
      'Hand-embroidered waist belts',
      'Family saree restyling',
      'Pleat setting for easy movement'
    ]
  },
  {
    id: 'blouses',
    title: 'Bridal Blouses',
    category: 'Handwork & Fit',
    shortDesc: 'Handcrafted Maggam work, Aari embroidery, custom necklines, and secure shoulder fits.',
    fullDesc: 'Our studio specialty. Every blouse is cut to your exact shape to prevent shoulder slipping or awkward gaping. Custom embroidered with traditional motifs or contemporary necklines.',
    craftTime: '5 - 12 Days',
    priceEstimate: 'Custom Stitched',
    image: '/Services/D.jpg',
    features: [
      'Personalized body measurement cut',
      'Shoulder strap locks',
      'Hand-stitched Maggam & Zari embroidery',
      'Built-in cup support & neckline finish'
    ]
  }
];

export default function ServicesSection({ onSelectService }) {
  const [activeModalService, setActiveModalService] = useState(null);

  useEffect(() => {
    if (activeModalService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalService]);

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="subheading">WHAT WE DO</span>
          <h2 className="heading-md" style={{ marginBottom: '0.75rem' }}>
            Four core ways we bring <span className="text-gold">your design to life.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Choose from our four specialized services, or combine them to craft your complete occasion look.
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
              <div className="img-tint-teal" style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '0.85rem',
                  left: '0.85rem',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.72rem',
                  color: 'var(--accent-gold-dark)',
                  fontWeight: '600',
                  border: '1px solid var(--border-gold)',
                  zIndex: 3
                }}>
                  {srv.category}
                </div>
              </div>

              <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{srv.title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {srv.shortDesc}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <Clock size={13} style={{ color: 'var(--accent-gold-dark)' }} />
                    <span>{srv.craftTime}</span>
                  </div>

                  <button 
                    onClick={() => setActiveModalService(srv)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.82rem',
                      color: 'var(--accent-gold-dark)',
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
          zIndex: 10000,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          overflow: 'hidden'
        }}>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-panel-gold" 
            style={{
              maxWidth: '620px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              padding: '2rem',
              position: 'relative',
              background: '#ffffff',
              boxShadow: '0 25px 60px rgba(0,0,0,0.25)'
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
                background: 'rgba(0,0,0,0.04)'
              }}
            >
              <X size={20} />
            </button>

            <span className="subheading">{activeModalService.category}</span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{activeModalService.title}</h3>
            
            <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', height: '200px', marginBottom: '1.25rem' }}>
              <img src={activeModalService.image} alt={activeModalService.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {activeModalService.fullDesc}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.65rem' }}>Features & Craft Process:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {activeModalService.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                    <Check size={15} style={{ color: 'var(--accent-gold-dark)', flexShrink: 0 }} />
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
