import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/constants';

const Services = ({ setView }) => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-4 font-bold">Services</p>
          <h2 className="font-serif text-5xl md:text-7xl mb-12 italic">Approach and Services</h2>
          <p className="text-luxury-cream/60 text-base md:text-lg leading-relaxed font-light">
            Deliberate and cinematic photography across digital and analog formats. My work focuses on atmosphere, 
            identity, and strong editorial direction, while keeping every project clear, professional, and purposeful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 border border-luxury-cream/10 bg-luxury-black/40 hover:bg-white/5 transition-all duration-700 flex flex-col min-h-[400px]"
            >
              <div className="text-luxury-gold/30 group-hover:text-luxury-gold transition-colors duration-500 mb-10 transform group-hover:scale-110 group-hover:-translate-y-2 origin-left transition-transform duration-700">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl mb-6 leading-tight group-hover:text-luxury-gold transition-colors duration-500">{service.title}</h3>
              <p className="text-luxury-cream/40 text-xs leading-relaxed mb-12 flex-grow font-light tracking-wide group-hover:text-luxury-cream/70 transition-colors duration-500">
                {service.homeDescription}
              </p>
              <div className="mt-auto">
                <button 
                  onClick={() => setView(`services-${service.id}`)}
                  className="group/btn flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold hover:text-luxury-cream transition-all duration-300"
                >
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">{service.cta}</span>
                    <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover/btn:translate-y-0 text-luxury-cream">{service.cta}</span>
                  </span>
                  <div className="w-8 h-8 border border-luxury-cream/10 rounded-full flex items-center justify-center group-hover/btn:border-luxury-gold group-hover/btn:bg-luxury-gold group-hover/btn:text-luxury-black transition-all duration-500">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;