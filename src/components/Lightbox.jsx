import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ item, onClose, onPrev, onNext }) => {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-luxury-black/98 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 z-[110] w-10 h-10 border border-white/10 flex items-center justify-center text-luxury-cream/40 hover:text-luxury-cream hover:border-white/30 transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-[110]">
        <p className="text-[8px] uppercase tracking-[0.35em] text-luxury-cream/30">{item.category}</p>
      </div>

      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] w-10 h-10 border border-white/10 flex items-center justify-center text-luxury-cream/30 hover:text-luxury-gold hover:border-luxury-gold/30 transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] w-10 h-10 border border-white/10 flex items-center justify-center text-luxury-cream/30 hover:text-luxury-gold hover:border-luxury-gold/30 transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Image + caption */}
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col items-center px-16 md:px-24 max-w-5xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="object-contain max-h-[75vh] w-auto shadow-2xl"
        />
        <div className="mt-6 text-center space-y-1">
          <h3 className="font-serif text-2xl md:text-3xl text-luxury-cream">{item.title}</h3>
          {item.desc && (
            <p className="text-luxury-cream/35 text-xs italic max-w-md">{item.desc}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;
