import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/constants';

const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-4">How we work together</p>
          <h2 className="font-serif text-5xl md:text-7xl">Collaboration</h2>
          <p className="mt-8 text-luxury-cream/40 text-xs tracking-widest">Every project begins with a conversation, not a price list.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-12 border border-luxury-cream/10 bg-transparent hover:bg-white/5 transition-all duration-500 flex flex-col"
            >
              <div className="text-luxury-gold/40 group-hover:text-luxury-gold transition-colors duration-500 mb-8">
                {service.icon}
              </div>
              <h3 className="font-serif text-3xl mb-6">{service.title}</h3>
              <p className="text-luxury-cream/50 text-sm leading-relaxed mb-12 flex-grow">
                {service.description}
              </p>
              <div className="flex justify-between items-center border-t border-luxury-cream/10 pt-8 mt-auto">
                <a 
                  href="#contact"
                  className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold hover:text-luxury-cream transition-all duration-300"
                >
                  Book Now
                </a>
                <div className="w-10 h-10 border border-luxury-cream/10 rounded-full flex items-center justify-center group-hover:border-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-500">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;