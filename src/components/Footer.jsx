import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 px-6 border-t border-luxury-cream/10 relative overflow-hidden bg-luxury-black">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <a href="/" className="block group">
            <img 
              src="/AN_Logo.png" 
              alt="Adalat Naghiyev" 
              className="h-12 md:h-16 opacity-80 group-hover:opacity-100 transition-all duration-500" 
            />
          </a>
        </div>

        <div className="flex gap-12">
          <a href="#work" className="text-[9px] uppercase tracking-widest text-luxury-cream/40 hover:text-luxury-cream transition-colors">Work</a>
          <a href="#about" className="text-[9px] uppercase tracking-widest text-luxury-cream/40 hover:text-luxury-cream transition-colors">About</a>
          <a href="#contact" className="text-[9px] uppercase tracking-widest text-luxury-cream/40 hover:text-luxury-cream transition-colors">Contact</a>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-luxury-cream/40 hover:text-luxury-gold transition-colors font-sans text-[10px] uppercase tracking-widest">Instagram</a>
          <a href="#" className="text-luxury-cream/40 hover:text-luxury-gold transition-colors font-sans text-[10px] uppercase tracking-widest">Behance</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center mt-12">
        <p className="text-[8px] uppercase tracking-[0.3em] text-luxury-cream/20">
          Currently exhibiting: Urban Mosaic — WBPiCAK, Poznań, 2026.
        </p>
        <p className="text-[8px] uppercase tracking-[0.3em] text-luxury-cream/20 mt-4">
          &copy; 2026 Adalat Naghiyev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;