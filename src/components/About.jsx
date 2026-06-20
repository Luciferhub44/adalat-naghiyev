import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../data/constants';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="aspect-[4/5] relative overflow-hidden"
        >
          <img
            src="/Adalat.jpg"
            alt="Adalat Naghiyev"
            className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-[2s] hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-luxury-black/70 to-transparent" />
          {/* Floating label */}
          <div className="absolute bottom-6 left-6">
            <p className="text-[8px] uppercase tracking-[0.3em] text-luxury-gold/70">Adalat Naghiyev</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:pt-10 space-y-10"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-luxury-gold" />
              <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold">Philosophy</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Translating Identity<br />Into Imagery
            </h2>
          </div>

          <div className="space-y-5 text-luxury-cream/60 leading-relaxed text-sm md:text-base max-w-lg">
            <p>
              I view photography as the mechanism to articulate stories, feelings, and identities with absolute clarity. It is an exercise in observation and psychology — capturing the nuances that words cannot hold.
            </p>
            <p>
              Whether documenting a raw, personal connection or building a brand's complete visual identity, my focus remains the same: taking your internal concept and engineering it into an undeniable visual reality.
            </p>
            <p className="text-xs italic text-luxury-cream/35">
              I work across Poznań and Poland, moving between digital and analog photography — chosen for what each medium demands of the subject.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl text-luxury-gold leading-none mb-2">{stat.value}</p>
                <p className="text-[8px] uppercase tracking-[0.3em] text-luxury-cream/30">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Urban Mosaic CTA */}
          <button
            onClick={() => navigate('/um')}
            className="flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-luxury-gold hover:gap-6 transition-all duration-300 group cursor-pointer"
          >
            View Urban Mosaic
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
