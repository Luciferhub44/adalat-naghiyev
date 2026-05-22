import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import Exhibition from './components/Exhibition';

import { PORTFOLIO_ITEMS } from './data/constants';

export default function App() {
  const [view, setView] = useState('home'); // 'home' or 'exhibition'
  const [selectedItem, setSelectedItem] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNextItem = () => {
    const currentIndex = PORTFOLIO_ITEMS.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    setSelectedItem(PORTFOLIO_ITEMS[nextIndex]);
  };

  const handlePrevItem = () => {
    const currentIndex = PORTFOLIO_ITEMS.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setSelectedItem(PORTFOLIO_ITEMS[prevIndex]);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight' && selectedItem) handleNextItem();
      if (e.key === 'ArrowLeft' && selectedItem) handlePrevItem();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedItem]);

  if (view === 'exhibition') {
    return <Exhibition setView={setView} />;
  }

  return (
    <div className="bg-luxury-black selection:bg-luxury-gold/30">
      <Navbar setView={setView} />
      <Hero setView={setView} />
      <Portfolio setSelectedItem={setSelectedItem} />
      <About setView={setView} />
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
