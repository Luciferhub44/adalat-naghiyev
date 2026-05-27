import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';

const Navbar = ({ setView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Exhibition', onClick: () => setView('exhibition') },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src="/AN_Logo.png" 
            alt="Adalat Naghiyev" 
            className="h-8 md:h-10 transition-transform duration-300 hover:scale-105" 
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            link.onClick ? (
              <button 
                key={link.name} 
                onClick={link.onClick}
                className="text-xs uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors duration-300 pointer-events-auto"
              >
                {link.name}
              </button>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-luxury-cream" 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-luxury-black z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-luxury-cream p-2"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col justify-center flex-grow gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={link.name} 
                  onClick={() => {
                    if (link.onClick) link.onClick();
                    else window.location.href = link.href;
                    setMobileMenuOpen(false);
                  }}
                  className="font-serif text-5xl hover:italic hover:pl-4 transition-all duration-300 text-luxury-cream text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
            <div className="flex gap-6 mt-auto py-8 border-t border-luxury-cream/10">
              <Instagram className="w-5 h-5 opacity-60" />
              <Linkedin className="w-5 h-5 opacity-60" />
              <Mail className="w-5 h-5 opacity-60" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
