import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Send, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, customSpec }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Curated Fabrics',
    fittingType: 'Studio Visit - Kondapur Branch',
    preferredDate: '',
    preferredTime: '11:00 AM - 01:00 PM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Freeze background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (customSpec) {
      let matchedService = formData.service;
      const raw = (customSpec.silhouette || '').toLowerCase();
      if (raw.includes('fabric')) matchedService = 'Curated Fabrics';
      else if (raw.includes('lehenga')) matchedService = 'Designer Lehengas';
      else if (raw.includes('saree')) matchedService = 'Designer Sarees';
      else if (raw.includes('blouse')) matchedService = 'Bridal Blouses';

      setFormData(prev => ({
        ...prev,
        service: matchedService,
        notes: customSpec.fabric ? `Fabric: ${customSpec.fabric || ''} | Embroidery: ${customSpec.embroidery || ''} | Timeline: ${customSpec.timeline || ''} | Estimate: ${customSpec.estimatedPrice || ''}` : prev.notes
      }));
    }
  }, [customSpec]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Saru's Fashion Studio! I would like to book a fitting consultation.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Fitting Location:* ${formData.fittingType}\n*Preferred Date:* ${formData.preferredDate}\n*Time:* ${formData.preferredTime}\n${formData.notes ? `*Custom Specs:* ${formData.notes}` : ''}`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 10000,
      background: 'rgba(4, 29, 33, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      overflow: 'hidden'
    }}>
      <div className="glass-panel-gold" style={{
        maxWidth: '560px',
        width: '100%',
        maxHeight: '80vh',
        overflowY: 'auto',
        padding: '2.25rem',
        position: 'relative',
        boxShadow: '0 35px 70px rgba(0,0,0,0.95), 0 0 30px rgba(0, 107, 110, 0.4)'
      }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
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

        {!submitted ? (
          <div>
            <span className="subheading" style={{ marginBottom: '0.2rem' }}>Fitting & Consultation</span>
            <h3 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.5rem' }}>Book Your Studio Appointment</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
              Select your preferred branch for a personalized 1-on-1 style session and precise 18-point measurement mapping.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              
              <div>
                <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.35rem', display: 'block' }}>
                  Your Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.92rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.35rem', display: 'block' }}>
                    Phone / WhatsApp *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 xxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      outline: 'none',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.35rem', display: 'block' }}>
                    Garment Requirement
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(10,27,21,0.95)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      outline: 'none',
                      fontSize: '0.92rem'
                    }}
                  >
                    <option value="Curated Fabrics">Curated Fabrics</option>
                    <option value="Designer Lehengas">Designer Lehengas</option>
                    <option value="Designer Sarees">Designer Sarees</option>
                    <option value="Bridal Blouses">Bridal Blouses</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.35rem', display: 'block' }}>
                    Preferred Date
                  </label>
                  <input 
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      outline: 'none',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.35rem', display: 'block' }}>
                    Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(10,27,21,0.95)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      outline: 'none',
                      fontSize: '0.92rem'
                    }}
                  >
                    <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                    <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                    <option value="05:00 PM - 07:30 PM">05:00 PM - 07:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.35rem', display: 'block' }}>
                  Fitting Location & Branch
                </label>
                <select
                  value={formData.fittingType}
                  onChange={(e) => setFormData({...formData, fittingType: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(10,27,21,0.95)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.92rem'
                  }}
                >
                  <option value="Studio Visit - Kondapur Branch">Studio Visit - Kondapur Branch</option>
                  <option value="Studio Visit - Moti Nagar Branch">Studio Visit - Moti Nagar Branch</option>
                  <option value="Home Visit - Doorstep Measurement">Home Visit - Doorstep Measurement</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.35rem', display: 'block' }}>
                  Custom Design Specifications & Notes
                </label>
                <textarea 
                  rows={2}
                  placeholder="e.g. Preferred Fabric: Silk | Embroidery: Maggam Work | Timeline: 7 Days | Estimate: ₹5,000"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--accent-gold-light)',
                    outline: 'none',
                    fontSize: '0.82rem'
                  }}
                />
              </div>

              <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button type="submit" className="btn btn-gold" style={{ padding: '0.85rem' }}>
                  <Calendar size={18} />
                  <span>Confirm Consultation Request</span>
                </button>

                <button 
                  type="button" 
                  onClick={handleWhatsAppRedirect}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(37, 211, 102, 0.15)',
                    border: '1px solid rgba(37, 211, 102, 0.3)',
                    color: '#25d366',
                    fontSize: '0.88rem',
                    fontWeight: '600'
                  }}
                >
                  <MessageSquare size={16} />
                  <span>Instant WhatsApp Booking Request</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-gold)',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>Booking Request Received!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Thank you, <strong style={{ color: '#fff' }}>{formData.name}</strong>. Our lead master tailor at Saru's Fashion Studio will call you at <strong>{formData.phone}</strong> to confirm your slot for <strong>{formData.preferredDate || 'your selected date'}</strong>.
            </p>

            <div style={{
              background: 'rgba(0,0,0,0.3)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} /> Studio Address (Kondapur, Hyderabad)
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Saru's Fashion Studio, Kondapur Main Rd (Near Botanical Garden & Google Office), Hyderabad, Telangana 500084.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={handleWhatsAppRedirect} className="btn btn-gold">
                <MessageSquare size={16} />
                <span>Open WhatsApp Chat</span>
              </button>
              <button onClick={onClose} className="btn btn-outline">
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
