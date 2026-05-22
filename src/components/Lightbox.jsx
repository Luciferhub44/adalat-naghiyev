import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Lightbox = ({ item, onClose, onPrev, onNext }) => {
  if (!item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex items-center z-[110]">
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="text-white/30 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
      </div>

      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center z-[110]">
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="text-white/30 hover:text-white transition-colors"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative max-w-5xl max-h-full aspect-auto flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={`/Hero.JPG`} 
          alt={item.title}
          className="object-contain max-h-[80vh] shadow-2xl border border-white/5"
        />
        <div className="mt-6 text-center">
          <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-2">{item.category}</p>
          <h3 className="font-serif text-3xl text-white">{item.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;