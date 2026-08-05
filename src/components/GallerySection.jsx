import React, { useState, useEffect } from 'react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = filter === 'all' 
    ? STUDIO_COLLECTIONS 
    : STUDIO_COLLECTIONS.filter(item => item.category === filter);

  // Freeze background scrolling when Lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    }
  };

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
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
          marginBottom: '2.5rem'
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
              onClick={() => {
                setFilter(cat.id);
                setSelectedIndex(null);
              }}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'var(--transition)',
                background: filter === cat.id ? 'var(--accent-gold)' : '#ffffff',
                color: filter === cat.id ? '#ffffff' : 'var(--text-primary)',
                border: filter === cat.id ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                boxShadow: filter === cat.id ? '0 4px 15px rgba(197, 160, 89, 0.3)' : '0 2px 6px rgba(0,0,0,0.03)'
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
              onClick={() => setSelectedIndex(idx)}
            >
              <div className="img-tint-gold" style={{ width: '100%', aspectRatio: '3 / 4', overflow: 'hidden', position: 'relative' }}>
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
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                  opacity: 0.9,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem'
                }}>
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'var(--accent-gold-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.25rem'
                  }}>
                    {item.craftDetails}
                  </div>
                  <h3 style={{ fontSize: '1.18rem', color: '#ffffff', fontWeight: '600' }}>
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
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold-dark)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <Eye size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Clean Uncropped Lightbox Photo Viewer with In-Box Navigation Arrows */}
      {activeItem && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10000,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          overflow: 'hidden'
        }}>
          
          {/* Main Uncropped Lightbox Photo Box */}
          <motion.div 
            key={activeItem.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-panel-gold" 
            style={{
              maxWidth: '850px',
              width: '100%',
              maxHeight: '85vh',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              background: '#ffffff'
            }}
          >
            {/* Close Button Inside Pop-up Box */}
            <button 
              onClick={() => setSelectedIndex(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 310,
                color: 'var(--text-primary)',
                background: 'rgba(0,0,0,0.06)',
                border: '1px solid var(--border-gold)',
                padding: '0.45rem',
                borderRadius: '50%',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}
            >
              <X size={20} />
            </button>

            {/* Uncropped High-Res Studio Photo Container with In-Box Navigation Overlay */}
            <div style={{
              width: '100%',
              maxHeight: '70vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              background: '#f7f6f2',
              position: 'relative'
            }}>
              {/* Previous Arrow Button INSIDE Pop-up Box */}
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '0.85rem',
                  zIndex: 310,
                  color: 'var(--accent-gold-dark)',
                  background: 'rgba(255,255,255,0.92)',
                  border: '1px solid var(--border-gold)',
                  padding: '0.65rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Arrow Button INSIDE Pop-up Box */}
              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '0.85rem',
                  zIndex: 310,
                  color: 'var(--accent-gold-dark)',
                  background: 'rgba(255,255,255,0.92)',
                  border: '1px solid var(--border-gold)',
                  padding: '0.65rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <ChevronRight size={22} />
              </button>

              <img 
                src={activeItem.image} 
                alt={activeItem.title} 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '70vh', 
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  borderRadius: 'var(--radius-sm)'
                }}
              />
            </div>

            {/* Clean Minimal Caption Banner */}
            <div style={{
              width: '100%',
              paddingTop: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.15rem' }}>
                  {activeItem.title}
                </h3>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold-dark)' }}>
                  {activeItem.craftDetails}
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {selectedIndex + 1} of {filteredItems.length}
              </div>
            </div>

          </motion.div>
        </div>
      )}

    </section>
  );
}

