import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';
import { SERVICES } from '../data/constants';
import { useNavigate } from 'react-router-dom';

const FullServices = ({ initialServiceId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (initialServiceId) {
      const element = document.getElementById(initialServiceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [initialServiceId]);

  return (
    <div className="bg-luxury-black min-h-screen text-luxury-cream">
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-luxury-black/90 backdrop-blur-md py-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-luxury-gold transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <img src="/AN_Logo.png" alt="Adalat Naghiyev" className="h-8" />
          <div className="w-24"></div> {/* Spacer for symmetry */}
        </div>
      </nav>

      <main className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-4 font-bold">Offerings</p>
            <h1 className="font-serif text-6xl md:text-8xl mb-8 italic">Services & Specializations</h1>
            <p className="text-luxury-cream/40 text-lg max-w-2xl font-light leading-relaxed">
              Detailed breakdown of how we can collaborate to create imagery that serves your specific purpose.
            </p>
          </div>

          <div className="space-y-32">
            {SERVICES.map((service, index) => (
              <section 
                key={service.id} 
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-t border-white/5 first:border-t-0"
              >
                {/* Left Column: Title & Icon */}
                <div className="lg:col-span-4 space-y-8">
                  <div className="text-luxury-gold opacity-50">
                    {service.icon}
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl leading-tight italic">
                    {service.title}
                  </h2>
                  <p className="text-luxury-gold/60 text-sm uppercase tracking-[0.2em] font-medium">
                    {service.tagline}
                  </p>
                </div>

                {/* Right Column: Content */}
                <div className="lg:col-span-8 space-y-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h3 className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold">For:</h3>
                      <p className="text-luxury-cream/70 text-base leading-relaxed font-light">
                        {service.for}
                      </p>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold">Includes:</h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.includes.map((item, i) => (
                          <li key={i} className="text-xs text-luxury-cream/40 flex items-center gap-3">
                            <div className="w-1 h-[1px] bg-luxury-gold/30"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6 max-w-2xl">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold">Approach:</h3>
                    <p className="text-luxury-cream/80 text-lg leading-relaxed font-light italic">
                      "{service.approach}"
                    </p>
                  </div>

                  <div className="pt-8">
                    <button 
                      onClick={() => {
                        navigate('/');
                        setTimeout(() => {
                          const contact = document.getElementById('contact');
                          if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold border border-luxury-gold/20 px-8 py-4 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-500"
                    >
                      {service.fullCTA}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <img src="/AN_Logo.png" alt="Adalat Naghiyev" className="h-6 opacity-30" />
          <div className="flex gap-8">
            <Instagram className="w-5 h-5 text-luxury-cream/30 hover:text-luxury-gold transition-colors cursor-pointer" />
            <Linkedin className="w-5 h-5 text-luxury-cream/30 hover:text-luxury-gold transition-colors cursor-pointer" />
            <Mail className="w-5 h-5 text-luxury-cream/30 hover:text-luxury-gold transition-colors cursor-pointer" />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-luxury-cream/20">
            © 2026 Adalat Naghiyev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FullServices;