import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/constants';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/10 pb-10 mb-0">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-luxury-gold" />
              <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold">Services</p>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl">Approach and Services</h2>
          </div>
          <p className="text-luxury-cream/25 text-xs hidden lg:block max-w-xs text-right leading-relaxed">
            Deliberate and cinematic photography across digital and analog formats.
          </p>
        </div>

        {/* Service rows */}
        <div className="divide-y divide-white/5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-12 py-10 md:py-12 hover:bg-white/[0.02] transition-colors -mx-6 px-6 cursor-pointer"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              {/* Index number */}
              <div className="shrink-0">
                <span className="font-serif text-4xl md:text-5xl text-luxury-gold/20 group-hover:text-luxury-gold/50 transition-colors duration-500 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl md:text-3xl group-hover:text-luxury-gold transition-colors duration-400">
                  {service.title}
                </h3>
                <p className="text-luxury-cream/40 text-sm leading-relaxed max-w-2xl group-hover:text-luxury-cream/60 transition-colors duration-400">
                  {service.homeDescription}
                </p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-gold/50 group-hover:text-luxury-gold transition-colors duration-400">
                  {service.tagline}
                </p>
              </div>

              {/* Arrow CTA */}
              <div className="flex items-center shrink-0">
                <div className="w-10 h-10 border border-luxury-cream/10 group-hover:border-luxury-gold group-hover:bg-luxury-gold flex items-center justify-center transition-all duration-400">
                  <ArrowRight className="w-4 h-4 text-luxury-cream/30 group-hover:text-luxury-black transition-colors duration-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer label */}
        <div className="border-t border-white/10 pt-8 mt-0 flex justify-between items-center">
          <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-cream/20">Based in Poznań — available across Europe</p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-cream/20">{SERVICES.length} disciplines</p>
        </div>

      </div>
    </section>
  );
};

export default Services;
