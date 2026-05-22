import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ setView }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="absolute inset-0 bg-black"
        >
          <img 
            src="/Hero.JPG" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/40" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-medium mb-6"
        >
          Independent Visual Storyteller
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 2 }}
          className="font-serif text-[15vw] leading-[0.85] text-luxury-cream tracking-tighter"
        >
          Adalat <br /> Naghiyev
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <p className="text-luxury-cream/60 max-w-xs text-sm tracking-wide italic">
            Translating identity into imagery.
          </p>
          
          <button 
            onClick={() => setView('exhibition')}
            className="group flex flex-col items-center gap-4"
          >
            <div className="px-8 py-4 border border-luxury-gold/30 bg-luxury-gold/10 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 pointer-events-auto">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Urban Mosaic Exhibition &apos;26</p>
            </div>
            <p className="text-luxury-gold/40 text-[10px] uppercase tracking-[0.4em]">
              ↓ View the work
            </p>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;