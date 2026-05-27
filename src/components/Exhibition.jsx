import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ArrowRight, Instagram, ExternalLink } from 'lucide-react';

const ParticipantCard = ({ person, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
    >
      <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden grayscale contrast-125 relative group">
        <img 
          src={person.image} 
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors duration-500" />
        <a 
          href={person.social} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 w-12 h-12 bg-luxury-cream text-luxury-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-luxury-gold"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <div className="space-y-2">
          <p className="text-luxury-gold uppercase tracking-[0.4em] text-[10px]">Oral History • QR Enabled</p>
          <h3 className="font-serif text-5xl">{person.name}</h3>
          <p className="text-luxury-gold/60 uppercase tracking-widest text-xs">{person.role}</p>
        </div>
        
        <div className="relative">
          <div className={`text-luxury-cream/50 leading-relaxed italic transition-all duration-500 ${!isExpanded ? 'line-clamp-4' : ''}`}>
            {person.bio.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''}>{para}</p>
            ))}
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 flex items-center gap-4 group/btn"
          >
            <div className="w-10 h-10 border border-luxury-gold/30 flex items-center justify-center group-hover/btn:border-luxury-gold transition-colors">
               <ArrowRight className={`w-4 h-4 text-luxury-gold transition-transform duration-500 ${isExpanded ? 'rotate-90' : ''}`} />
            </div>
            <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 group-hover/btn:opacity-100 transition-opacity">
              {isExpanded ? 'Show Less' : 'See Full Narrative'}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Exhibition = ({ setView }) => {
  const participants = [
    {
      name: 'Miki',
      role: 'Egyptian Musician',
      image: '/Mosaic/Participants/Miki.jpg',
      bio: "Miki’s departure from Egypt is rooted in the long-standing political conditions shaped by military control, which he describes as limiting both daily life and personal development. The environment is portrayed as increasingly restrictive, making adaptation difficult over time.\n\nAfter arriving in Poznań as a student, he gradually shifted from temporary residence to long-term settlement. What began as study evolved into permanence, as he grew attached to the city through everyday familiarity and comfort. He describes this shift as something intuitive rather than planned, emphasizing that belonging emerged through lived experience rather than intention. His migration therefore combines political constraint with a later stabilisation in a place that gradually became home.",
      social: "https://instagram.com/"
    },
    {
      name: 'Senamie',
      role: 'Nigerian Painter',
      image: '/Mosaic/Participants/Senami.jpg',
      bio: "Senamie’s decision to leave Nigeria is tied to long-term structural limitations that made personal and creative development difficult to sustain. He frames migration as a search for conditions where self-realisation and stability would be more achievable, both for himself and those close to him.\n\nRather than responding to a single triggering event, his departure is shaped by accumulated barriers affecting young creatives in particular. Migration in his case is presented as a forward-looking move, driven by the need to access environments where aspiration could be translated into practice.",
      social: "https://instagram.com/"
    },
    {
      name: 'Alena',
      role: 'Belarusian Artist',
      image: '/Mosaic/Participants/Alena.jpg',
      bio: "Alena’s migration from Belarus is described as a conscious decision shaped by a perceived lack of safety and freedom. She does not present her experience as forced displacement, but rather as a deliberate step toward improving living conditions for herself and her family.\n\nHer account highlights agency within constraint: the decision to leave is framed as preventive rather than reactive. Migration becomes a strategy of safeguarding future stability rather than escaping immediate crisis.",
      social: "https://instagram.com/"
    },
    {
      name: 'Trang',
      role: 'Vietnamese Chef',
      image: '/Mosaic/Participants/Trang.jpg',
      bio: "Trang describes her departure from Vietnam as a response to persistent social pressure that limited her ability to develop independently. Expectations of conformity created a sense of restriction that made personal growth difficult.\n\nHer decision to migrate is linked to the desire for autonomy and the possibility of developing “in her own way.” Rather than a sudden rupture, migration appears as a considered move toward an environment where individuality is more possible.",
      social: "https://instagram.com/"
    },
    {
      name: 'Will',
      role: 'US Citizen',
      image: '/Mosaic/Participants/Will.jpg',
      bio: "Will’s mobility originates in a combination of military service and earlier internal movement within the United States. His relocation abroad was enabled by institutional structures rather than a singular personal decision.\n\nExposure to different countries and contexts broadened his sense of scale, shifting his perception of the world beyond his hometown in New Orleans. Migration, in his case, is connected less to departure from constraint and more to expansion through structured mobility opportunities.",
      social: "https://instagram.com/"
    },
    {
      name: 'Yukino',
      role: 'Japanese Ballerina',
      image: '/Mosaic/Participants/Yukino.jpg',
      bio: "Yukino’s migration is shaped by professional constraints within the ballet system in Japan. The highly competitive nature of the field and its limited professional opportunities led her to seek training and work in Europe.\n\nHer move is framed as a professional necessity rather than a social or political decision. Europe, in her narrative, represents both historical and technical continuity within her discipline, making migration part of artistic development.",
      social: "https://instagram.com/"
    },
    {
      name: 'Jose Angel',
      role: 'Venezuelan Creative',
      image: '/Mosaic/Participants/Jose.jpg',
      bio: "Jose Angel’s migration unfolds gradually through a combination of political instability in Venezuela and personal family-related difficulties. His first move to Argentina in 2015 is described as the result of accumulated circumstances rather than a single decisive moment.\n\nHis trajectory reflects layered motivations where structural instability and intimate pressures intersect. Migration emerges as a process of alignment between external conditions and personal readiness to leave.",
      social: "https://instagram.com/"
    },
    {
      name: 'Peter',
      role: 'Hungarian Musician',
      image: '/Mosaic/Participants/Peter.jpg',
      bio: "Peter’s migration begins in an unplanned and informal way, initially linked to a gap year and a spontaneous suggestion from his father to study music abroad. What begins as an opportunity quickly becomes a longer trajectory shaped by external events.\n\nLater relocation to Poznań is connected to geopolitical disruption following the war in Ukraine. His migration path combines chance, family influence, and forced adaptation to changing circumstances.",
      social: "https://instagram.com/"
    }
  ];

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
          <img src="/Mosaic/star.png" alt="Urban Mosaic Logo" className="h-10 w-auto object-contain" />
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
            <img src="/Mosaic/Mosaic_White.png" alt="Urban Mosaic" className="h-32 md:h-48 w-auto mb-4" />
            <p className="text-luxury-gold uppercase tracking-[0.5em] text-xs">A Photographic Narrative</p>
            <h1 className="font-serif text-6xl md:text-8xl leading-none">Mobility, Belonging, and Creativity</h1>
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
           <div className="relative aspect-[3/4] bg-luxury-black border border-white/10 overflow-hidden group">
              <img 
                src="/Mosaic/Masaic_Poster.png" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                alt="Urban Mosaic Exhibition Poster"
              />
              <div className="absolute inset-0 bg-luxury-black/10 group-hover:bg-transparent transition-colors duration-500" />
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
          {participants.map((person, i) => (
            <ParticipantCard key={person.name} person={person} index={i} />
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