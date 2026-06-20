import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Work',        href: '#work' },
    { name: 'About',       href: '#about' },
    { name: 'Urban Mosaic', onClick: () => navigate('/um') },
    { name: 'Services',    href: '#services' },
    { name: 'Contact',     href: '#contact' },
  ];

  // Portaled to <body> to escape the nav's backdrop-filter containing block
  const mobileMenu = (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          className="fixed inset-0 z-[100] flex flex-col px-8 py-8"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          {/* Close */}
          <div className="flex justify-between items-center mb-12">
            <img src="/AN_Logo.png" alt="Adalat Naghiyev" className="h-7 opacity-60" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-luxury-cream/50 hover:text-luxury-cream transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col justify-center flex-grow gap-2">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.07 }}
                onClick={() => {
                  if (link.onClick) link.onClick();
                  else window.location.href = link.href;
                  setMobileMenuOpen(false);
                }}
                className="font-serif text-4xl md:text-5xl text-left py-3 text-luxury-cream hover:text-luxury-gold hover:pl-3 transition-all duration-300 cursor-pointer border-b border-white/5 last:border-0"
              >
                {link.name}
              </motion.button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-6 pt-8 border-t border-white/5">
            <a
              href="https://www.instagram.com/adalatnaghiyev.art/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-cream/30 hover:text-luxury-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@adalatnaghiyev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-cream/30 hover:text-luxury-gold transition-colors"
              aria-label="Youtube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-luxury-black/95 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-7'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <a href="/" aria-label="Adalat Naghiyev — home">
            <img
              src="/AN_Logo.png"
              alt="Adalat Naghiyev"
              className={`w-auto transition-all duration-500 ${scrolled ? 'h-7' : 'h-8 md:h-9'}`}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link =>
              link.onClick ? (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="text-[9px] uppercase tracking-[0.3em] text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[9px] uppercase tracking-[0.3em] text-luxury-cream/60 hover:text-luxury-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-luxury-cream/60 hover:text-luxury-cream transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

        </div>
      </nav>

      {typeof document !== 'undefined' && createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Navbar;
