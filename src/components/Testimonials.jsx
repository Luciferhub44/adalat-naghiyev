import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/constants';

const Testimonials = ({ testimonialIndex, setTestimonialIndex }) => {
  const prev = () => setTestimonialIndex(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setTestimonialIndex(i => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="py-24 md:py-32 px-6 border-y border-white/5 relative overflow-hidden">

      {/* Decorative quote mark */}
      <div className="absolute top-0 right-8 font-serif text-[30vw] leading-none text-white/[0.025] select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 md:gap-20 items-start">

          {/* Left: label + controls */}
          <div className="flex lg:flex-col justify-between lg:justify-start gap-6 lg:pt-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-luxury-gold" />
                <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold">Testimonials</p>
              </div>
              <p className="text-luxury-cream/20 text-xs">
                {String(testimonialIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
              </p>
            </div>

            {/* Dot indicators */}
            <div className="flex lg:flex-col gap-2 items-center lg:items-start mt-auto lg:mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`transition-all duration-400 cursor-pointer ${
                    i === testimonialIndex
                      ? 'bg-luxury-gold w-6 h-[2px] lg:w-[2px] lg:h-6'
                      : 'bg-luxury-cream/15 w-3 h-[2px] lg:w-[2px] lg:h-3 hover:bg-luxury-cream/35'
                  }`}
                />
              ))}
            </div>

            {/* Prev/Next */}
            <div className="flex lg:flex-col gap-2 mt-auto">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-luxury-cream/30 hover:border-luxury-gold/40 hover:text-luxury-gold transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-luxury-cream/30 hover:border-luxury-gold/40 hover:text-luxury-gold transition-all duration-300 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: quote */}
          <div className="relative min-h-[260px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl italic text-luxury-cream leading-relaxed">
                  &ldquo;{TESTIMONIALS[testimonialIndex].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-luxury-gold/40" />
                  <div>
                    <p className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-medium">
                      {TESTIMONIALS[testimonialIndex].author}
                    </p>
                    <p className="text-luxury-cream/25 text-[9px] uppercase tracking-widest mt-0.5">
                      {TESTIMONIALS[testimonialIndex].type}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
