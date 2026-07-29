import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import StyleEstimator from './components/StyleEstimator';
import TrustSection from './components/TrustSection';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [customSpec, setCustomSpec] = useState(null);

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
        <TrustSection />
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
