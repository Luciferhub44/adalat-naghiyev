import React from 'react';
import { AnimatePresence } from 'framer-motion';

import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';

export default function Home({ 
  selectedItem, 
  setSelectedItem, 
  handleNextItem, 
  handlePrevItem, 
  testimonialIndex, 
  setTestimonialIndex 
}) {
  return (
    <div className="bg-luxury-black selection:bg-luxury-gold/30">
      <Hero />
      <Portfolio setSelectedItem={setSelectedItem} />
      <About />
      <Services />
      <Testimonials testimonialIndex={testimonialIndex} setTestimonialIndex={setTestimonialIndex} />
      <Contact />
      <Footer />

      {/* Lightbox Portal */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)}
            onNext={handleNextItem}
            onPrev={handlePrevItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
