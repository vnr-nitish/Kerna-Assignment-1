import React, { useState } from 'react';
import { Sparkles, Clock, Calendar, Check, Sliders, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeDStudioCanvas from './ThreeDStudioCanvas';

const SILHOUETTES = [
  { id: 'blouse', name: 'Bridal Blouse', basePrice: 1800, baseDays: 6 },
  { id: 'lehenga', name: 'Designer Lehenga', basePrice: 12000, baseDays: 14 },
  { id: 'saree', name: 'Designer Saree & Drape', basePrice: 4500, baseDays: 8 },
  { id: 'fabric', name: 'Curated Fabric Sourcing', basePrice: 1200, baseDays: 3 }
];

const FABRICS = [
  { id: 'silk', name: 'Pure Kanjeevaram / Silk', priceMultiplier: 1.25 },
  { id: 'velvet', name: 'Royal Silk Velvet', priceMultiplier: 1.35 },
  { id: 'organza', name: 'Pure Organza / Tissue', priceMultiplier: 1.15 },
  { id: 'georgette', name: 'Fine Georgette / Net', priceMultiplier: 1.0 }
];

const EMBROIDERIES = [
  { id: 'minimal', name: 'Minimal Neckline & Border Work', priceAdd: 600, daysAdd: 0 },
  { id: 'moderate', name: 'Thread & Pearl Elbow Maggam', priceAdd: 1800, daysAdd: 2 },
  { id: 'maggam', name: 'Intricate Maggam & Peacock Aari', priceAdd: 3500, daysAdd: 4 },
  { id: 'zardozi', name: 'Full Heavy Zardozi & Crystal Suite', priceAdd: 7500, daysAdd: 7 }
];

export default function StyleEstimator({ onLaunchCustomBooking }) {
  const [selectedSilhouette, setSelectedSilhouette] = useState(SILHOUETTES[0]);
  const [selectedFabric, setSelectedFabric] = useState(FABRICS[0]);
  const [selectedEmbroidery, setSelectedEmbroidery] = useState(EMBROIDERIES[1]);
  const [expressTimeline, setExpressTimeline] = useState(false);

  const expressMultiplier = expressTimeline ? 1.25 : 1.0;
  const baseCalcPrice = (selectedSilhouette.basePrice * selectedFabric.priceMultiplier) + selectedEmbroidery.priceAdd;
  const rawPrice = Math.round(baseCalcPrice * expressMultiplier);

  const minPrice = Math.round(rawPrice * 0.95);
  const maxPrice = Math.round(rawPrice * 1.15);
  
  let days = selectedSilhouette.baseDays + selectedEmbroidery.daysAdd;
  if (expressTimeline) days = Math.max(3, Math.round(days * 0.6));

  const handleBook = () => {
    onLaunchCustomBooking({
      silhouette: selectedSilhouette.name,
      fabric: selectedFabric.name,
      embroidery: selectedEmbroidery.name,
      timeline: expressTimeline ? `Express Priority (${days} Days)` : `Standard (${days} Days)`,
      estimatedPrice: `₹${minPrice.toLocaleString()} - ₹${maxPrice.toLocaleString()}`
    });
  };

  return (
    <section id="estimator" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="subheading" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} /> Style Estimator
          </span>
          <h2 className="heading-md">
            Interactive Outfit & <span className="text-gold">Fitting Estimator.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Select your preferred core service, fabric, and handwork intensity to see a real-time crafting timeline and estimated investment range.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          
          {/* Controls Column */}
          <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 7' } }} className="estimator-ctrls">
            
            {/* Step 1: Silhouette */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold-light)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '0.75rem' }}>
                Step 1: Choose Core Service
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                {SILHOUETTES.map((sil) => (
                  <button
                    key={sil.id}
                    onClick={() => setSelectedSilhouette(sil)}
                    className="glass-panel"
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      transition: 'var(--transition)',
                      borderColor: selectedSilhouette.id === sil.id ? 'var(--accent-gold)' : 'var(--border-subtle)',
                      background: selectedSilhouette.id === sil.id ? 'rgba(212,175,55,0.14)' : 'var(--bg-card)'
                    }}
                  >
                    <div style={{ fontSize: '0.95rem', fontWeight: '600', color: selectedSilhouette.id === sil.id ? '#fff' : 'var(--text-secondary)' }}>
                      {sil.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fabric */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold-light)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '0.75rem' }}>
                Step 2: Fabric Selection
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                {FABRICS.map((fab) => (
                  <button
                    key={fab.id}
                    onClick={() => setSelectedFabric(fab)}
                    className="glass-panel"
                    style={{
                      padding: '0.9rem',
                      textAlign: 'left',
                      transition: 'var(--transition)',
                      borderColor: selectedFabric.id === fab.id ? 'var(--accent-gold)' : 'var(--border-subtle)',
                      background: selectedFabric.id === fab.id ? 'rgba(212,175,55,0.14)' : 'var(--bg-card)'
                    }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: selectedFabric.id === fab.id ? '#fff' : 'var(--text-secondary)' }}>
                      {fab.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Embroidery */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold-light)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '0.75rem' }}>
                Step 3: Hand Embroidery Intensity
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {EMBROIDERIES.map((emb) => (
                  <button
                    key={emb.id}
                    onClick={() => setSelectedEmbroidery(emb)}
                    className="glass-panel"
                    style={{
                      padding: '0.95rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'var(--transition)',
                      borderColor: selectedEmbroidery.id === emb.id ? 'var(--accent-gold)' : 'var(--border-subtle)',
                      background: selectedEmbroidery.id === emb.id ? 'rgba(212,175,55,0.14)' : 'var(--bg-card)'
                    }}
                  >
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '0.92rem', fontWeight: '600', color: selectedEmbroidery.id === emb.id ? '#fff' : 'var(--text-secondary)' }}>
                        {emb.name}
                      </div>
                    </div>
                    {selectedEmbroidery.id === emb.id && <Check size={18} style={{ color: 'var(--accent-gold)' }} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Priority Express Toggle */}
            <div className="glass-panel" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: '600' }}>⚡ Priority Express Tailoring</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fast-track fitting for urgent wedding or event dates</div>
              </div>
              <input 
                type="checkbox" 
                checked={expressTimeline}
                onChange={(e) => setExpressTimeline(e.target.checked)}
                style={{ width: '20px', height: '20px', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
              />
            </div>

          </div>

          {/* Real-time Summary Card & 3D Visualizer */}
          <div style={{ gridColumn: 'span 12', '@media(min-width: 992px)': { gridColumn: 'span 5' } }} className="estimator-summary">
            
            {/* Interactive 360-Degree Revolving 3D Dress Mannequin Canvas */}
            <div className="glass-panel" style={{
              padding: '0.75rem',
              marginBottom: '1rem',
              border: '1px solid var(--border-gold)',
              background: 'rgba(4, 29, 33, 0.95)',
              textAlign: 'center',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{ height: '240px', width: '100%', borderRadius: 'var(--radius-sm)', overflow: 'hidden', position: 'relative' }}>
                <ThreeDStudioCanvas 
                  interactive={true} 
                  fabricColor={
                    selectedFabric.id === 'silk' ? 0xd4af37 :
                    selectedFabric.id === 'velvet' ? 0x800020 :
                    selectedFabric.id === 'organza' ? 0x006b6e : 0xb8860b
                  }
                  accentColor={0xf5d77f}
                />
                
                {/* Live Spec Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(4,29,33,0.95) 0%, rgba(4,29,33,0) 100%)',
                  padding: '1.25rem 0.75rem 0.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  fontSize: '0.75rem',
                  color: '#fff',
                  pointerEvents: 'none'
                }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: '700', color: 'var(--accent-gold-light)' }}>
                      {selectedSilhouette.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {selectedFabric.name} • {selectedEmbroidery.name.split(' ')[0]}
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(212, 175, 55, 0.2)',
                    border: '1px solid var(--border-gold)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--accent-gold)',
                    fontWeight: '700',
                    fontFamily: 'var(--font-display)'
                  }}>
                    {days} Days
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              layout
              className="glass-panel-gold" 
              style={{ padding: '1.75rem', boxShadow: '0 25px 50px rgba(0,0,0,0.6)' }}
            >
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--accent-gold)' }}>
                <Sliders size={18} />
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '700' }}>Custom Spec Summary</span>
              </div>

              <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Selected Offering</div>
                <div style={{ fontSize: '1.25rem', color: '#fff', fontWeight: '600', fontFamily: 'var(--font-serif)' }}>
                  {selectedSilhouette.name}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Fabric Type:</span>
                  <span style={{ color: '#fff', fontWeight: '500' }}>{selectedFabric.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Embroidery:</span>
                  <span style={{ color: '#fff', fontWeight: '500' }}>{selectedEmbroidery.name.split(' ')[0]}...</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Trial Locations:</span>
                  <span style={{ color: 'var(--accent-gold-light)', fontWeight: '600' }}>Kondapur / Moti Nagar</span>
                </div>
              </div>

              {/* Delivery Lead Time */}
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}>
                <Clock size={24} style={{ color: 'var(--accent-gold)' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Estimated Delivery</div>
                  <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '700' }}>
                    {days} Days Turnaround
                  </div>
                </div>
              </div>

              {/* Estimated Price Range */}
              <div style={{ marginBottom: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Estimated Investment Range</div>
                <div style={{ fontSize: '2.1rem', fontFamily: 'var(--font-display)', color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '0.02em' }}>
                  ₹{minPrice.toLocaleString()} – ₹{maxPrice.toLocaleString()}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>*Exact quote finalized during in-person studio trial.</div>
              </div>

              {/* Direct Booking CTA */}
              <button 
                onClick={handleBook}
                className="btn btn-gold" 
                style={{ width: '100%', padding: '0.9rem' }}
              >
                <Calendar size={18} />
                <span>Book Fitting with This Spec</span>
              </button>

            </motion.div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .estimator-ctrls { grid-column: span 7 !important; }
          .estimator-summary { grid-column: span 5 !important; }
        }
      `}</style>
    </section>
  );
}
