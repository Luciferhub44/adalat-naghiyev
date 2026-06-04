import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Exhibition from './components/Exhibition';
import FullServices from './components/FullServices';
import Navbar from './components/Navbar';
import { PORTFOLIO_ITEMS } from './data/constants';

const FullServicesWrapper = () => {
  const { id } = useParams();
  return <FullServices initialServiceId={id} />;
};

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const location = useLocation();

  // Scroll to top when path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

  return (
    <div className="bg-luxury-black selection:bg-luxury-gold/30">
      {location.pathname === '/' && <Navbar />}
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              selectedItem={selectedItem} 
              setSelectedItem={setSelectedItem}
              handleNextItem={handleNextItem}
              handlePrevItem={handlePrevItem}
              testimonialIndex={testimonialIndex}
              setTestimonialIndex={setTestimonialIndex}
            />
          } 
        />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/services/:id" element={<FullServicesWrapper />} />
      </Routes>
    </div>
  );
}
