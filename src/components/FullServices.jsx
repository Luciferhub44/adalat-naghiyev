import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight, Instagram, Mail } from 'lucide-react';
import { SERVICES } from '../data/constants';
import { useNavigate, useParams } from 'react-router-dom';

const FullServices = () => {
  const navigate = useNavigate();
  const { id: initialServiceId } = useParams();
  const [activeId, setActiveId] = useState(initialServiceId || SERVICES[0].id);

  useEffect(() => {
    if (initialServiceId) {
      document.getElementById(initialServiceId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [initialServiceId]);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    SERVICES.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-luxury-black min-h-screen text-luxury-cream font-sans">

      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-luxury-black/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-luxury-cream/50 hover:text-luxury-gold transition-colors group cursor-pointer"
          >
            <ChevronLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            Back
          </button>
          <img src="/AN_Logo.png" alt="Adalat Naghiyev" className="h-7 w-auto" />
          <div className="w-16" />
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="pt-36 md:pt-48 pb-16 md:pb-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-luxury-gold" />
              <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold">Offerings</p>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-none tracking-tight mb-8 md:mb-12">
              Services &amp;<br />
              <span className="text-luxury-gold italic">Specializations</span>
            </h1>
            <p className="text-luxury-cream/40 text-base md:text-lg leading-relaxed max-w-2xl">
              Detailed breakdown of how we can collaborate to create imagery that serves your specific purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Body: sticky nav + service sections ─────────────── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">

          {/* Sticky sidebar nav (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 py-12">
              <p className="text-[8px] uppercase tracking-[0.35em] text-luxury-cream/25 mb-6">Disciplines</p>
              <nav className="space-y-1">
                {SERVICES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full text-left flex items-center gap-3 py-2.5 text-xs transition-colors duration-300 cursor-pointer group ${
                      activeId === s.id ? 'text-luxury-gold' : 'text-luxury-cream/30 hover:text-luxury-cream/70'
                    }`}
                  >
                    <span className={`font-mono text-[10px] transition-colors ${activeId === s.id ? 'text-luxury-gold' : 'text-luxury-cream/15'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-tight">{s.title}</span>
                    {activeId === s.id && (
                      <div className="ml-auto w-1 h-1 rounded-full bg-luxury-gold shrink-0" />
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-12 pt-8 border-t border-white/5 space-y-4">
                <p className="text-[8px] uppercase tracking-[0.35em] text-luxury-cream/25 mb-4">Contact</p>
                <a
                  href="https://www.instagram.com/adalatnaghiyev.art/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-luxury-cream/30 hover:text-luxury-gold transition-colors text-xs"
                >
                  <Instagram className="w-4 h-4" />
                  @adalatnaghiyev.art
                </a>
                <a
                  href="mailto:hello@adalatnaghiyev.com"
                  className="flex items-center gap-3 text-luxury-cream/30 hover:text-luxury-gold transition-colors text-xs"
                >
                  <Mail className="w-4 h-4" />
                  hello@adalatnaghiyev.com
                </a>
              </div>
            </div>
          </aside>

          {/* Service sections */}
          <main className="py-16 md:py-24 space-y-0">
            {SERVICES.map((service, index) => (
              <motion.section
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="py-16 md:py-24 border-b border-white/5 last:border-b-0"
              >
                {/* Service number + title */}
                <div className="mb-10 md:mb-14">
                  <div className="flex items-baseline gap-5 mb-4">
                    <span className="font-serif text-6xl md:text-7xl text-luxury-gold/15 leading-none select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-luxury-gold text-[9px] uppercase tracking-[0.35em] mt-2 md:ml-[calc(theme(fontSize.7xl)+1.25rem)] md:-mt-1">
                    {service.tagline}
                  </p>
                </div>

                {/* For + Includes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-12">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.35em] text-luxury-gold mb-4">For</p>
                    <p className="text-luxury-cream/60 text-sm leading-relaxed">
                      {service.for}
                    </p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.35em] text-luxury-gold mb-4">Includes</p>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs text-luxury-cream/40">
                          <div className="w-3 h-px bg-luxury-gold/30 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Approach */}
                <div className="border-l-2 border-luxury-gold/30 pl-6 mb-12">
                  <p className="text-[8px] uppercase tracking-[0.35em] text-luxury-gold mb-4">Approach</p>
                  <p className="text-luxury-cream/70 text-base md:text-lg leading-relaxed italic">
                    "{service.approach}"
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="group flex items-center gap-4 text-[9px] uppercase tracking-[0.35em] text-luxury-gold border border-luxury-gold/20 px-8 py-4 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-500 cursor-pointer"
                >
                  {service.fullCTA}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </motion.section>
            ))}
          </main>

        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-12 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/AN_Logo.png" alt="Adalat Naghiyev" className="h-6 opacity-30" />
          <p className="text-[9px] uppercase tracking-[0.3em] text-luxury-cream/20">
            © 2026 Adalat Naghiyev. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/adalatnaghiyev.art/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-cream/25 hover:text-luxury-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@adalatnaghiyev.com"
              className="text-luxury-cream/25 hover:text-luxury-gold transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default FullServices;
