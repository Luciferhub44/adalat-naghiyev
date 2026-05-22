import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight,
  Camera,
  Users,
  Briefcase,
  Award,
  ArrowDown
} from 'lucide-react';

// --- DATA ---

const PORTFOLIO_ITEMS = [
  { id: 1, category: 'Editorial', title: 'Julia Stachura', seed: 'portrait-1', size: 'large', desc: 'Deep studio tones and deliberate stillness. A collaboration built around character, not performance.' },
  { id: 2, category: 'Film', title: 'Fine Art on Film', seed: 'film-1', size: 'small', desc: "Shot on analog. The grain is not an accident — it's the point. Slow, considered, irreversible." },
  { id: 3, category: 'Fashion & Runway', title: 'PhilDBrand Show', seed: 'fashion-1', size: 'medium', desc: 'Three floors. Rooftop golden hour. A collection that rewrote the archive and refused to explain itself.' },
  { id: 4, category: 'Brand', title: 'Wyrobnia Brand', seed: 'craft-1', size: 'small', desc: "Close-up, tactile, honest. Making visible the craft behind an independent maker's identity." },
  { id: 5, category: 'Brand', title: 'Afro Sasa Brass', seed: 'jewelry-1', size: 'medium', desc: 'Jewellery as language. An object-led visual world built from texture, skin, and cultural weight.' },
  { id: 6, category: 'Editorial', title: 'Character Study', seed: 'portrait-2', size: 'large', desc: 'Translating identity into imagery through deep studio work.' },
  { id: 7, category: 'Film', title: 'Berlin Archive', seed: 'street-film', size: 'small', desc: 'Observations of light and movement captured on 35mm.' },
  { id: 8, category: 'Fashion & Runway', title: 'Rooftop Series', seed: 'fashion-2', size: 'medium', desc: 'Capturing the movement and energy of high fashion.' },
  { id: 9, category: 'Brand', title: 'Tactile Goods', seed: 'brand-1', size: 'small', desc: 'Visual identity for makers and independent brands.' },
  { id: 10, category: 'Editorial', title: 'MOMA Collab', seed: 'vogue-1', size: 'large', desc: 'Museum-grade whitespace and deliberate composition.' },
  { id: 11, category: 'Film', title: 'Analog Soul', seed: 'film-2', size: 'medium', desc: 'The irreversible beauty of analog photography.' },
  { id: 12, category: 'Brand', title: 'Skin & Texture', seed: 'brand-2', size: 'small', desc: 'Object-led visual worlds built from cultural weight.' },
];

const CATEGORIES = ['All', 'Editorial', 'Fashion & Runway', 'Brand', 'Film'];

const SERVICES = [
  {
    title: 'Editorial Portraiture',
    description: 'For individuals, artists, and creatives who need images that communicate identity rather than just appearance. Studio or location. Colour or film.',
    price: 'On request',
    icon: <Users className="w-8 h-8" />,
    features: ['Pre-shoot consultation', '2–4 hour session', 'Curated selection', 'Retouched originals']
  },
  {
    title: 'Fashion & Runway',
    description: 'Show coverage, lookbooks, and campaign work for independent designers and labels. Built for brands that don\'t want to look like everyone else.',
    price: 'On request',
    icon: <Camera className="w-8 h-8" />,
    features: ['On-site coverage', 'Full campaign documentation', 'Consistent visual language', 'Print & Digital formats']
  },
  {
    title: 'Brand & Commercial',
    description: 'Visual identity work for independent brands, makers, and product-led businesses. Imagery that communicates what your brand stands for.',
    price: 'On request',
    icon: <Briefcase className="w-8 h-8" />,
    features: ['Brand brief session', 'Product & Lifestyle', 'Full color grading', 'Usage rights package']
  }
];

const TESTIMONIALS = [
  {
    quote: "Adalat has an uncanny ability to capture the emotion of a moment before it even happens. His work isn't just photography; it's high art.",
    author: "Elena Rossi",
    type: "Editorial Portrait"
  },
  {
    quote: "Professionalism meets pure creativity. The brand shoot Adalat delivered exceeded our guidelines and brought a new level of sophistication.",
    author: "Jameson Vane",
    type: "Marketing Director"
  },
  {
    quote: "His Renaissance Fashion Show coverage was like stills from a classic film. Every frame is composed with such care.",
    author: "Phil D.",
    type: "Fashion Designer"
  }
];

const STATS = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Location Base', value: 'Poznań & Berlin' },
  { label: 'Mediums', value: 'Digital & Analog' },
  { label: 'Exhibition', value: 'Urban Mosaic \'26' }
];

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Exhibition', onClick: () => setView('exhibition') },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold tracking-widest text-luxury-cream">
          A.N<span className="text-luxury-gold">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            link.onClick ? (
              <button 
                key={link.name} 
                onClick={link.onClick}
                className="text-xs uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors duration-300 pointer-events-auto"
              >
                {link.name}
              </button>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase tracking-[0.2em] font-medium hover:text-luxury-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-luxury-cream" 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-luxury-black z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-luxury-cream p-2"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col justify-center flex-grow gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={link.name} 
                  onClick={() => {
                    if (link.onClick) link.onClick();
                    else window.location.href = link.href;
                    setMobileMenuOpen(false);
                  }}
                  className="font-serif text-5xl hover:italic hover:pl-4 transition-all duration-300 text-luxury-cream text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
            <div className="flex gap-6 mt-auto py-8 border-t border-luxury-cream/10">
              <Instagram className="w-5 h-5 opacity-60" />
              <Linkedin className="w-5 h-5 opacity-60" />
              <Mail className="w-5 h-5 opacity-60" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Lightbox = ({ item, onClose, onPrev, onNext }) => {
  if (!item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex items-center z-[110]">
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="text-white/30 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
      </div>

      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center z-[110]">
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="text-white/30 hover:text-white transition-colors"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative max-w-5xl max-h-full aspect-auto flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={`/Hero.JPG`} 
          alt={item.title}
          className="object-contain max-h-[80vh] shadow-2xl border border-white/5"
        />
        <div className="mt-6 text-center">
          <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-2">{item.category}</p>
          <h3 className="font-serif text-3xl text-white">{item.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [view, setView] = useState('home'); // 'home' or 'exhibition'
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const filteredItems = PORTFOLIO_ITEMS.filter(
    item => activeFilter === 'All' || item.category === activeFilter
  );

  const handleNextItem = () => {
    const currentIndex = PORTFOLIO_ITEMS.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    setSelectedItem(PORTFOLIO_ITEMS[nextIndex]);
  };

  const handlePrevItem = () => {
    const currentIndex = PORTFOLIO_ITEMS.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setSelectedItem(PORTFOLIO_ITEMS[prevIndex]);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight' && selectedItem) handleNextItem();
      if (e.key === 'ArrowLeft' && selectedItem) handlePrevItem();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedItem]);

  if (view === 'exhibition') {
    return (
      <div className="bg-luxury-black min-h-screen selection:bg-luxury-gold/30 font-sans text-luxury-cream">
        <nav className="fixed top-0 left-0 w-full z-50 bg-luxury-black/90 backdrop-blur-md py-6 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <button 
              onClick={() => setView('home')}
              className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-luxury-gold hover:text-white transition-all group"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
            </button>
            <img src="/Urban-Logo.png" alt="Urban Mosaic Logo" className="h-10 w-auto object-contain" />
          </div>
        </nav>

        {/* Exhibition Hero */}
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 flex flex-col items-center"
            >
              <img src="/Urban-Logo.png" alt="Urban Mosaic" className="h-32 md:h-48 w-auto mb-4" />
              <p className="text-luxury-gold uppercase tracking-[0.5em] text-xs">A Photographic Narrative</p>
              <h1 className="font-serif text-6xl md:text-8xl leading-none">Creativity, Movement, and Vibrancy</h1>
              <div className="w-20 h-[1px] bg-luxury-gold mx-auto my-12" />
              <p className="text-luxury-cream/60 leading-relaxed text-lg max-w-2xl mx-auto italic">
                "The idea for this exhibition came from an observation that many people who live and work in Poznań moved here from countries that seem very far away... We, new inhabitants, create an urban mosaic."
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Mosaic Implementation */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="relative aspect-square bg-luxury-black border border-white/10 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/mosaic-wall/1200/1200" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  alt="Large Scale Mosaic"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 bg-luxury-black/80 backdrop-blur-sm border border-luxury-gold/20">
                    <p className="font-serif text-4xl mb-2">250 × 230 cm</p>
                    <p className="text-[10px] uppercase tracking-widest text-luxury-gold">The Prologue Installation</p>
                  </div>
                </div>
             </div>
             <div className="space-y-8">
               <h2 className="font-serif text-4xl">The Symbolism of Space</h2>
               <p className="text-luxury-cream/60 leading-relaxed">
                 The exhibition opens with a large-format mosaic. It serves as a symbolic prologue, introducing the viewer to the network of human relationships that co-create the modern city. Poznań is revealed as a multicultural, heterogeneous city—a home-city that is also a living cultural scene.
               </p>
               <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/5">
                 <div>
                   <p className="text-luxury-gold text-2xl font-serif">WBPiCAK</p>
                   <p className="text-[9px] uppercase tracking-widest opacity-40">Gallery Venue</p>
                 </div>
                 <div>
                   <p className="text-luxury-gold text-2xl font-serif">2026</p>
                   <p className="text-[9px] uppercase tracking-widest opacity-40">Exhibition Year</p>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* The Stories */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            {[
              { name: 'Yukino', role: 'Japanese Ballerina', seed: 'ballet' },
              { name: 'Miki', role: 'Egyptian Musician', seed: 'jazz' },
              { name: 'Trang', role: 'Vietnamese Chef', seed: 'chef' },
              { name: 'Senamie', role: 'Nigerian Painter', seed: 'painter' },
            ].map((person, i) => (
              <motion.div 
                key={person.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden grayscale contrast-125">
                  <img 
                    src={`https://picsum.photos/seed/${person.seed}/800/1100`} 
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <p className="text-luxury-gold uppercase tracking-[0.4em] text-[10px]">Oral History • QR Enabled</p>
                  <h3 className="font-serif text-5xl">{person.name}</h3>
                  <p className="text-luxury-gold/60 uppercase tracking-widest text-xs">{person.role}</p>
                  <p className="text-luxury-cream/50 leading-relaxed italic">
                    "Being creative is not only about being an artist but also a way to create a home, a safe space, and a comfortable place."
                  </p>
                  <div className="flex gap-4 pt-4">
                    <div className="w-12 h-12 border border-luxury-gold/30 flex items-center justify-center">
                       <ArrowRight className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <p className="text-[9px] uppercase tracking-[0.3em] flex items-center leading-none opacity-40">View Full Narrative</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactivity Section */}
        <section className="py-32 px-6 bg-white/[0.02]">
           <div className="max-w-3xl mx-auto text-center space-y-12">
              <h2 className="font-serif text-4xl">The Chalkboard Question</h2>
              <div className="p-16 border-2 border-dashed border-white/10 bg-luxury-black relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-5" />
                <p className="font-serif text-5xl md:text-7xl text-luxury-gold/80 relative z-10">
                  "What are you trying to grow into?"
                </p>
              </div>
              <p className="text-luxury-cream/40 text-sm max-w-xl mx-auto">
                An interactive element of the exhibition—a space where the audience leaves reflections, affirmations, or personal stories written in chalk.
              </p>
           </div>
        </section>

        {/* Schedule */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-5xl mb-16">Harmonogram</h2>
            <div className="space-y-px bg-white/5 border border-white/5">
              {[
                { date: '26.06', title: 'Wernisaż & Jam Session', desc: 'Opening event with ROOSE Jazz Bar by Miki.' },
                { date: 'Lipiec', title: 'City Run z FLEK', desc: 'Active community run through Poznań streets.' },
                { date: 'Lipiec', title: 'Photo Walk', desc: 'Analog capture session with KN Fotolab.' },
                { date: '31.07', title: 'Finisaż Wystawy', desc: 'Closing meeting and project summary.' },
              ].map((event) => (
                <div key={event.title} className="bg-luxury-black p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-center hover:bg-white/[0.03] transition-all">
                  <p className="font-serif text-3xl text-luxury-gold min-w-[120px]">{event.date}</p>
                  <div>
                    <h4 className="text-lg uppercase tracking-widest mb-2">{event.title}</h4>
                    <p className="text-luxury-cream/40 text-sm">{event.desc}</p>
                  </div>
                  <button className="md:ml-auto text-[10px] uppercase tracking-widest text-luxury-gold/50 hover:text-luxury-gold transition-colors">
                    Add to Calendar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exhibition Footer */}
        <footer className="py-24 px-6 border-t border-luxury-cream/10 bg-luxury-black">
          <div className="max-w-7xl mx-auto text-center space-y-12">
            <h2 className="font-serif text-4xl">Experience the Mosaic.</h2>
            <button 
              onClick={() => setView('home')}
              className="px-12 py-5 bg-luxury-cream text-luxury-black uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-luxury-gold transition-all"
            >
              Back to Home Portfolio
            </button>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="bg-luxury-black selection:bg-luxury-gold/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "easeOut" }}
            className="absolute inset-0 bg-black"
          >
            <img 
              src="/Hero.JPG" 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-60"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/40" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-medium mb-6"
          >
            Independent Visual Storyteller
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 2 }}
            className="font-serif text-[15vw] leading-[0.85] text-luxury-cream tracking-tighter"
          >
            Adalat <br /> Naghiyev
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-12 flex flex-col items-center gap-6"
          >
            <p className="text-luxury-cream/60 max-w-xs text-sm tracking-wide italic">
              Translating identity into imagery.
            </p>
            
            <button 
              onClick={() => setView('exhibition')}
              className="group flex flex-col items-center gap-4"
            >
              <div className="px-8 py-4 border border-luxury-gold/30 bg-luxury-gold/10 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 pointer-events-auto">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Urban Mosaic Exhibition &apos;26</p>
              </div>
              <p className="text-luxury-gold/40 text-[10px] uppercase tracking-[0.4em]">
                ↓ View the work
              </p>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-4">Discovery</p>
              <h2 className="font-serif text-5xl md:text-7xl">Selected Work</h2>
            </motion.div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-luxury-cream/10 pb-4">
              {CATEGORIES.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${activeFilter === cat ? 'text-luxury-gold' : 'text-luxury-cream/40 hover:text-luxury-cream'}`}
                >
                  {cat}
                  {activeFilter === cat && (
                    <motion.div 
                      layoutId="filter-underline"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-luxury-cream/5"
                  onClick={() => setSelectedItem(item)}
                >
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={`https://picsum.photos/seed/${item.seed}/${item.size === 'large' ? '800/1200' : '800/800'}`} 
                    alt={item.title}
                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-luxury-gold uppercase tracking-[0.2em] text-[8px] mb-2">{item.category}</p>
                    <h3 className="font-serif text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] relative overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/adalat-bio/1000/1250" 
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
                I work across Poznań and Berlin, moving between digital and analog film — chosen for what each medium demands of the subject.
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

      {/* Services Section */}
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

      {/* Testimonials */}
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

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-6">Inquiry</p>
              <h2 className="font-serif text-6xl md:text-8xl leading-tight mb-12">Let&apos;s Build <br />Something <br />Unique.</h2>
              <p className="text-luxury-cream/40 max-w-sm mb-12 text-sm leading-relaxed">
                Based in Poznań. Available in Berlin and beyond. Let's build a unique visual universe for your brand or concept.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-luxury-cream/10 flex items-center justify-center text-luxury-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-widest text-luxury-cream/40 mb-1">Email Inquiry</p>
                    <p className="text-xl hover:text-luxury-gold transition-colors duration-300">hello@adalatnaghiyev.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-luxury-cream/10 flex items-center justify-center text-luxury-gold">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-widest text-luxury-cream/40 mb-1">Social Feed</p>
                    <p className="text-xl hover:text-luxury-gold transition-colors duration-300">@adalat.naghiyev</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 md:p-16 border border-luxury-cream/10"
            >
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                  <div className="w-20 h-20 border border-luxury-gold rounded-full flex items-center justify-center text-luxury-gold mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 10 }}
                    >
                      <Award className="w-10 h-10" />
                    </motion.div>
                  </div>
                  <h3 className="font-serif text-3xl">Inquiry Received</h3>
                  <p className="text-luxury-cream/50 max-w-xs">Thank you for reaching out. I will review your project details and get back to you within 48 hours.</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-luxury-gold text-[10px] uppercase tracking-[0.2em] pt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[9px] uppercase tracking-widest text-luxury-cream/40 ml-1">Full Name</label>
                       <input 
                         type="text" 
                         className="w-full bg-white/5 border-b border-luxury-cream/20 py-4 px-2 focus:outline-none focus:border-luxury-gold transition-colors duration-300" 
                         placeholder="Julianne V."
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] uppercase tracking-widest text-luxury-cream/40 ml-1">Email Address</label>
                       <input 
                         type="email" 
                         className="w-full bg-white/5 border-b border-luxury-cream/20 py-4 px-2 focus:outline-none focus:border-luxury-gold transition-colors duration-300" 
                         placeholder="hello@company.com"
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[9px] uppercase tracking-widest text-luxury-cream/40 ml-1">Project Category</label>
                     <select className="w-full bg-white/5 border-b border-luxury-cream/20 py-4 px-2 focus:outline-none focus:border-luxury-gold appearance-none transition-colors duration-300">
                        <option className="bg-luxury-black">Select Category</option>
                        <option className="bg-luxury-black">Portrait Session</option>
                        <option className="bg-luxury-black">Event Coverage</option>
                        <option className="bg-luxury-black">Commercial Work</option>
                        <option className="bg-luxury-black">Other</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[9px] uppercase tracking-widest text-luxury-cream/40 ml-1">Your Narrative</label>
                     <textarea 
                       rows="4"
                       className="w-full bg-white/5 border-b border-luxury-cream/20 py-4 px-2 focus:outline-none focus:border-luxury-gold transition-colors duration-300 resize-none" 
                       placeholder="Tell me about your vision..."
                     ></textarea>
                  </div>

                  <button 
                    onClick={() => setFormSubmitted(true)}
                    className="w-full py-6 mt-4 bg-luxury-cream text-luxury-black uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-luxury-gold transition-colors duration-500"
                  >
                    Send Inquiry
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-luxury-cream/10 relative overflow-hidden bg-luxury-black">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <a href="#" className="font-serif text-3xl font-bold tracking-widest text-luxury-cream">
              A.N<span className="text-luxury-gold">.</span>
            </a>
          </div>

          <div className="flex gap-12">
            <a href="#work" className="text-[9px] uppercase tracking-widest text-luxury-cream/40 hover:text-luxury-cream transition-colors">Work</a>
            <a href="#about" className="text-[9px] uppercase tracking-widest text-luxury-cream/40 hover:text-luxury-cream transition-colors">About</a>
            <a href="#contact" className="text-[9px] uppercase tracking-widest text-luxury-cream/40 hover:text-luxury-cream transition-colors">Contact</a>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-luxury-cream/40 hover:text-luxury-gold transition-colors font-sans text-[10px] uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-luxury-cream/40 hover:text-luxury-gold transition-colors font-sans text-[10px] uppercase tracking-widest">Behance</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center mt-12">
          <p className="text-[8px] uppercase tracking-[0.3em] text-luxury-cream/20">
            Currently exhibiting: Urban Mosaic — WBPiCAK, Poznań, 2026.
          </p>
          <p className="text-[8px] uppercase tracking-[0.3em] text-luxury-cream/20 mt-4">
            &copy; 2026 Adalat Naghiyev. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Lightbox Portal */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)}
            onNext={handleNextItem}
            onPrev={handlePrevItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
