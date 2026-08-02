import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import StyleEstimator from './components/StyleEstimator';
import FittingJourneySection from './components/FittingJourneySection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [customSpec, setCustomSpec] = useState(null);

  // Global Image Protection against Dragging and Right-Click Saving
  useEffect(() => {
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleOpenBooking = () => {
    setCustomSpec(null);
    setBookingOpen(true);
  };

  const handleSelectService = (serviceTitle) => {
    setCustomSpec({ silhouette: serviceTitle });
    setBookingOpen(true);
  };

  const handleLaunchCustomBooking = (spec) => {
    setCustomSpec(spec);
    setBookingOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Fixed Luxury Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero onOpenBooking={handleOpenBooking} />
        <StorySection />
        <ServicesSection onSelectService={handleSelectService} />
        <GallerySection onOpenBooking={handleOpenBooking} />
        <StyleEstimator onLaunchCustomBooking={handleLaunchCustomBooking} />
        <FittingJourneySection />
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking & Consultation Modal */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)} 
        customSpec={customSpec}
      />

    </div>
  );
}
