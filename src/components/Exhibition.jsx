import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight } from 'lucide-react';

const Exhibition = ({ setView }) => {
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
};

export default Exhibition;