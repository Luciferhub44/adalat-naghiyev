import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/Hero.JPG"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between flex-1 px-6 pt-36 pb-12 max-w-7xl mx-auto w-full">

        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-8 bg-luxury-gold" />
          <p className="text-[9px] uppercase tracking-[0.45em] text-luxury-gold">
            Photographer — Poznań &amp; Europe
          </p>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.2 }}
          className="my-auto py-12"
        >
          <h1 className="font-serif text-[17vw] md:text-[13vw] leading-[0.85] tracking-tighter text-luxury-cream">
            Adalat<br />
            <span className="text-luxury-gold italic">Naghiyev</span>
          </h1>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-white/10 pt-8"
        >
          <p className="text-luxury-cream/50 text-sm italic max-w-xs leading-relaxed">
            Translating identity into imagery.
          </p>

          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate('/um')}
              className="text-[9px] uppercase tracking-[0.35em] text-luxury-gold border border-luxury-gold/30 px-6 py-3 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-400 cursor-pointer"
            >
              Urban Mosaic '26
            </button>

            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-[9px] uppercase tracking-[0.35em] text-luxury-cream/40 hover:text-luxury-cream transition-colors cursor-pointer group"
            >
              View the work
              <ArrowDown className="w-3 h-3 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
