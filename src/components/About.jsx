import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../data/constants';

const About = ({ setView }) => {
  return (
    <section id="about" className="py-32 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="aspect-[4/5] relative overflow-hidden"
        >
          <img 
            src="/Adalat.jpg" 
            alt="Adalat Naghiyev" 
            className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-luxury-black/60 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-4">Philosophy</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">Translating Identity <br />Into Imagery</h2>
          </div>
          
          <div className="space-y-6 text-luxury-cream/70 leading-relaxed max-w-lg">
            <p>
              I view photography as the mechanism to articulate stories, feelings, and identities with absolute clarity. It is an exercise in observation and psychology — capturing the nuances that words cannot hold.
            </p>
            <p>
              Whether documenting a raw, personal connection or building a brand's complete visual identity, my focus remains the same: taking your internal concept and engineering it into an undeniable visual reality.
            </p>
            <p className="text-xs italic text-luxury-cream/40">
              I work across Poznań and Poland, moving between digital and analog film — chosen for what each medium demands of the subject.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-10 pt-8 border-t border-luxury-cream/10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl mb-1 text-luxury-gold">{stat.value}</p>
                <p className="text-[9px] uppercase tracking-widest text-luxury-cream/40">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button 
              onClick={() => setView('exhibition')}
              className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium group text-luxury-cream"
            >
              View Exhibition <div className="w-10 h-[1px] bg-luxury-gold group-hover:w-16 transition-all duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;