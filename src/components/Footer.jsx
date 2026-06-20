import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 py-16 md:py-20 border-t border-white/10 bg-luxury-black">
      <div className="max-w-7xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12 pb-12 border-b border-white/5">
          <a href="/" aria-label="Adalat Naghiyev — home">
            <img
              src="/AN_Logo.png"
              alt="Adalat Naghiyev"
              className="h-10 md:h-12 opacity-70 hover:opacity-100 transition-opacity duration-500"
            />
          </a>

          <nav className="flex flex-wrap gap-8">
            {['#work', '#about', '#services', '#contact'].map((href) => (
              <a
                key={href}
                href={href}
                className="text-[9px] uppercase tracking-[0.35em] text-luxury-cream/35 hover:text-luxury-gold transition-colors duration-300"
              >
                {href.replace('#', '')}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/adalatnaghiyev.art/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-[0.35em] text-luxury-cream/35 hover:text-luxury-gold transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@adalatnaghiyev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-[0.35em] text-luxury-cream/35 hover:text-luxury-gold transition-colors duration-300"
            >
              Youtube
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[8px] uppercase tracking-[0.3em] text-luxury-cream/20">
            Currently exhibiting: Urban Mosaic — Biblioteka Wielkopolska im. Stanisława Barańczaka, Poznań, 2026.
          </p>
          <p className="text-[8px] uppercase tracking-[0.3em] text-luxury-cream/20 shrink-0">
            © 2026 Adalat Naghiyev
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
