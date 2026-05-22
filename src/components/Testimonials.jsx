import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/constants';

const Testimonials = ({ testimonialIndex, setTestimonialIndex }) => {
  return (
    <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[40vw] text-white/[0.02] select-none pointer-events-none">
        &ldquo;
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <blockquote className="font-serif text-2xl md:text-4xl italic text-luxury-cream leading-relaxed">
                "{TESTIMONIALS[testimonialIndex].quote}"
              </blockquote>
              <div>
                <p className="text-luxury-gold font-medium tracking-[0.2em] text-xs uppercase mb-1">
                  {TESTIMONIALS[testimonialIndex].author}
                </p>
                <p className="text-luxury-cream/30 text-[10px] uppercase tracking-widest">
                  {TESTIMONIALS[testimonialIndex].type}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-8 mt-16">
            <button 
              onClick={() => setTestimonialIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="text-luxury-cream/30 hover:text-luxury-cream transition-colors p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              {TESTIMONIALS.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-[1px] transition-all duration-500 ${i === testimonialIndex ? 'w-12 bg-luxury-gold' : 'w-4 bg-luxury-cream/10'}`} 
                />
              ))}
            </div>
            <button 
              onClick={() => setTestimonialIndex(prev => (prev + 1) % TESTIMONIALS.length)}
              className="text-luxury-cream/30 hover:text-luxury-cream transition-colors p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;