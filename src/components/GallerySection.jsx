import React, { useState } from 'react';
import { Eye, Sparkles, X } from 'lucide-react';
import { motion } from 'framer-motion';

const STUDIO_COLLECTIONS = [
  {
    id: 1,
    title: 'Bridal Lehengas & Zardozi Suite',
    category: 'bridal',
    craftDetails: 'In-House Hand Embroidery & Dupatta Styling',
    image: '/Collections/A.jpg'
  },
  {
    id: 2,
    title: 'Cut-Work Maggam Blouse Creation',
    category: 'blouses',
    craftDetails: 'Peacock & floral hand Aari embroidery',
    image: '/Collections/A2.jpg'
  },
  {
    id: 3,
    title: 'Classic Red Silk Bridal Outfit',
    category: 'bridal',
    craftDetails: 'Traditional Telangana bridal craftsmanship',
    image: '/Collections/B.jpg'
  },
  {
    id: 4,
    title: 'Elbow Sleeve Maggam Saree Blouse',
    category: 'blouses',
    craftDetails: 'Heavy stone work & gold thread piping',
    image: '/Collections/B2.jpg'
  },
  {
    id: 5,
    title: 'Pastel Designer Lehenga Ensemble',
    category: 'bridal',
    craftDetails: 'Organza dupatta & tailored bodice flare',
    image: '/Collections/C1.jpg'
  },
  {
    id: 6,
    title: 'Contemporary Saree Blouse Pattern',
    category: 'blouses',
    craftDetails: 'Boat neck cut & anti-shoulder slip fitting',
    image: '/Collections/C2.jpg'
  },
  {
    id: 7,
    title: 'Pre-Draped Designer Fusion Saree',
    category: 'sarees',
    craftDetails: 'Modern cocktail drape & embroidered belt',
    image: '/Collections/C3.jpg'
  },
  {
    id: 8,
    title: 'Custom Fabric & Lehenga Sourcing',
    category: 'fabrics',
    craftDetails: 'Pure Kanjeevaram silk & organza pairing',
    image: '/Collections/D.jpg'
  },
  {
    id: 9,
    title: 'Heirloom Restyled Saree Blouse',
    category: 'blouses',
    craftDetails: 'Precision sizing & border preservation',
    image: '/Collections/E.jpg'
  },
  {
    id: 10,
    title: 'Velvet Royal Bridal Silhouette',
    category: 'bridal',
    craftDetails: 'Dense Zardozi embroidery suite',
    image: '/Collections/F.jpg'
  },
  {
    id: 11,
    title: 'Organza Cape & Indo-Western Suit',
    category: 'sarees',
    craftDetails: 'Lightweight flare & festive embroidery',
    image: '/Collections/G.jpg'
  },
  {
    id: 12,
    title: 'Signature Blouse Neck Cut',
    category: 'blouses',
    craftDetails: 'Deep back with handcrafted latkan tassels',
    image: '/Collections/H.jpg'
  }
];

export default function GallerySection({ onOpenBooking }) {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all' 
    ? STUDIO_COLLECTIONS 
    : STUDIO_COLLECTIONS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span className="subheading">Studio Collections Showcase</span>
          <h2 className="heading-md">
            Authentic Studio Work by <span className="text-gold">Saru's Fashion Studio.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Explore actual custom outfits crafted at our Kondapur & Moti Nagar studios for real clients.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {[
            { id: 'all', label: 'All Collections' },
            { id: 'fabrics', label: 'Fabrics' },
            { id: 'bridal', label: 'Designer Lehengas' },
            { id: 'sarees', label: 'Designer Sarees' },
            { id: 'blouses', label: 'Bridal Blouses' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'var(--transition)',
                background: filter === cat.id ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                color: filter === cat.id ? '#0c1c15' : 'var(--text-secondary)',
                border: filter === cat.id ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Collections Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-panel"
              style={{
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={() => setSelectedImage(item)}
            >
              <div style={{ height: '340px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,27,21,0.92) 0%, transparent 60%)',
                  opacity: 0.9,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem'
                }}>
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'var(--accent-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.25rem'
                  }}>
                    {item.craftDetails}
                  </div>
                  <h3 style={{ fontSize: '1.18rem', color: '#fff', fontWeight: '600' }}>
                    {item.title}
                  </h3>
                </div>

                <div style={{
                  position: 'absolute',
                  top: '0.85rem',
                  right: '0.85rem',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(10,27,21,0.75)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)'
                }}>
                  <Eye size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          background: 'rgba(5, 15, 12, 0.92)',
          backdropFilter: 'blur(16px)',
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
              maxWidth: '750px',
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.9)'
            }}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 10,
                color: '#fff',
                background: 'rgba(0,0,0,0.6)',
                padding: '0.4rem',
                borderRadius: '50%'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ gridColumn: 'span 12', '@media(min-width: 768px)': { gridColumn: 'span 7' } }}>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>

            <div style={{ gridColumn: 'span 12', '@media(min-width: 768px)': { gridColumn: 'span 5' }, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="subheading">Studio Creation</span>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem' }}>{selectedImage.title}</h3>
              
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold-light)', marginBottom: '1.25rem', fontWeight: '600' }}>
                ✨ {selectedImage.craftDetails}
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Crafted at Saru's Fashion Studio with custom measurements and handwork fitting trial.
              </p>

              <button 
                onClick={() => {
                  setSelectedImage(null);
                  onOpenBooking();
                }}
                className="btn btn-gold"
                style={{ width: '100%' }}
              >
                <Sparkles size={16} />
                <span>Recreate This Outfit</span>
              </button>
            </div>

          </motion.div>
        </div>
      )}

    </section>
  );
}
