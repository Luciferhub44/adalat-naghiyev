import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

// Urban Mosaic schedule for use in both schedule and the signup form
const mosaicEvents = [
  { 
    date: '26.06', 
    time: '17:00',
    title: 'Urban Mosaic: Exhibition Opening & Afterparty', 
    pl: 'Inauguracja projektu oraz premierowy wernisaż wystawy fotograficznej „URBAN MOSAIC”. Po części oficjalnej zapraszamy na muzyczne afterparty w swobodnej atmosferze.', 
    en: 'The official launch and premier opening of the "URBAN MOSAIC" photography exhibition. Following the reception, join us for a relaxed musical afterparty.', 
    details: 'Wstęp wolny / Free admission' 
  },
  { 
    date: '04.07', 
    time: '00:00',
    title: 'Urban Mosaic: City Run with FLEK Running Club', 
    pl: 'Wydarzenie łączące sztukę i ruch. Spotkanie rozpocznie się od oprowadzania po wystawie, po czym wyruszymy na wspólny bieg ulicami Poznania zakończony integracją.', 
    en: 'An event bridging art and movement. The program begins with a guided exhibition tour, followed by a collective city run through Poznań and a social wrap-up.', 
    details: 'Zapisy (limit miejsc) / Registration required' 
  },
  { 
    date: '18.07', 
    time: '12:00',
    title: 'Urban Mosaic: Papercraft Workshop by Aimable Mugabo', 
    pl: 'Kolektywne warsztaty upcyclingowe we współpracy z Harmonic Ventures. Uczestnicy stworzą unikalne papierowe formy przestrzenne z materiałów z odzysku.', 
    en: 'A collaborative upcycling workshop partnership with Harmonic Ventures. Participants will transform recycled materials into unique paper sculptures.', 
    details: 'Zapisy (limit miejsc) / Registration required (limited capacity)' 
  },
  { 
    date: '23.07', 
    time: '17:00',
    title: 'Urban Mosaic: Gallery & Photo Walk + Darkroom Experience', 
    pl: 'Kuratowany spacer fotograficzny oraz przegląd galerii sztuki współczesnej z Agatą Rodriguez, zwieńczony pokazem tradycyjnego procesu wywoływania odbitek w ciemni Darii Bielinkov.', 
    en: 'A curated contemporary art gallery tour and photo walk led by Agata Rodriguez, concluding with a live, traditional analog darkroom print demonstration at Daria Bielinkov\'s studio.', 
    details: 'Zapisy (limit miejsc) / Registration required (limited capacity)' 
  },
  { 
    date: '25.07', 
    time: '13:00',
    title: 'Urban Mosaic: Documentary Screening & Exhibition', 
    pl: 'Pokaz filmu „Roots & Resonance” (BIG studio, reż. Oluwapelumi Osewa) połączony z rozmową z twórcami w Bibliotece Wielkopolskiej, a następnie wizyta w przestrzeni Mothrland na wystawie malarstwa „Prerequisite” autorstwa Easyblack (format Open Studio).', 
    en: 'A special screening of the documentary "Roots & Resonance" (BIG studio, dir. Oluwapelumi Osewa) followed by an artist talk, concluding with a visit to the Mothrland art space for the open studio exhibition "Prerequisite" by Easyblack.', 
    details: 'Wstęp wolny / Free admission' 
  },
  { 
    date: '31.07', 
    time: '17:00',
    title: 'Urban Mosaic: Artist Talk & Finissage', 
    pl: 'Finisażowe podsumowanie festiwalu. Kameralne spotkanie z autorem Adalatem Naghiyevem, otwarta dyskusja oraz wspólne, uroczyste zamknięcie przestrzeni wystawowej.', 
    en: 'The festival finissage and closing reception. An intimate gathering featuring an open dialogue and the collective closing of the exhibition space.', 
    details: 'Wstęp wolny / Free admission' 
  },
];

// Signup Form for Urban Mosaic Events
function EventSignupForm() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showSummary, setShowSummary] = useState(false);

  // Using formspree
  const [state, handleSubmit] = useForm('xjgdozao');

  // Compose plain text summary of signup
  const summaryDetails = (
    <div className="space-y-2 text-center mb-6">
      <p><span className="font-serif text-xl md:text-2xl">Thank you for signing up!</span></p>
      <p>
        <b>Name:</b> {personalDetails.name || "-"}<br/>
        <b>Email:</b> {personalDetails.email || "-"}
      </p>
      <div>
        <b>Events Selected:</b>
        <ul className="list-disc list-inside text-luxury-gold pt-2">
          {selectedEvents.length === 0 ?
            <li className="text-luxury-cream/60">No events selected</li>
           : 
            mosaicEvents.filter((_, i) => selectedEvents.includes(i))
              .map(ev => (
                <li key={ev.title}>
                  <b>{ev.date} {ev.time}</b>: {ev.title}
                </li>
              ))
          }
        </ul>
      </div>
      {personalDetails.message && (
        <div className="pt-2 opacity-80 text-sm italic">
          <b>Your message:</b> <br/>{personalDetails.message}
        </div>
      )}
      <div className="pt-5">
        <span className="text-luxury-gold block">A confirmation email will be sent soon.</span>
      </div>
    </div>
  );

  // On form fields change
  const handleChangeDetails = e => {
    const {name, value} = e.target;
    setPersonalDetails(details => ({...details, [name]: value}));
  };

  // On checkboxes change
  const handleEventsChange = e => {
    const idx = parseInt(e.target.value, 10);
    setSelectedEvents(evts =>
      e.target.checked ? [...evts, idx] : evts.filter(i => i !== idx)
    );
  };

  // Enhance handleSubmit to also show the summary
  const wrappedHandleSubmit = async (e) => {
    e.preventDefault();

    // * Generate text for formspree about events
    const selectedEventDescriptions = selectedEvents.map(
      i => `[${mosaicEvents[i].date} ${mosaicEvents[i].time}] ${mosaicEvents[i].title}`
    ).join('; ');
    // use proxy name so formspree receives events choice!
    const eventProxy = document.createElement("input");
    eventProxy.type = "hidden";
    eventProxy.name = "Selected Events";
    eventProxy.value = selectedEventDescriptions;
    e.target.appendChild(eventProxy);

    await handleSubmit(e);
    e.target.removeChild(eventProxy);
    setShowSummary(true);
  };

  if (state.succeeded || showSummary) {
    // Show summary & "thanks"
    return (
      <div className="max-w-xl mx-auto my-10 p-8 md:p-12 bg-luxury-black/80 border border-luxury-gold/30 rounded-lg shadow-xl">
        {summaryDetails}
      </div>
    );
  }

  // Show form
  return (
    <form 
      onSubmit={wrappedHandleSubmit}
      className="max-w-xl mx-auto mt-16 mb-20 p-8 md:p-12 bg-luxury-black/80 border border-luxury-gold/30 rounded-lg shadow-xl space-y-8"
    >
      <h2 className="font-serif text-2xl md:text-3xl text-center mb-6">Sign up for Urban Mosaic Events</h2>
      <div>
        <label className="block text-xs font-bold mb-1" htmlFor="name">Name*</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={personalDetails.name}
          onChange={handleChangeDetails}
          className="w-full px-4 py-2 rounded bg-white/10 border border-luxury-gold/30 focus:border-luxury-gold outline-none text-luxury-cream transition-colors text-base"
        />
        <ValidationError field="name" errors={state.errors} />
      </div>
      <div>
        <label className="block text-xs font-bold mb-1" htmlFor="email">Email*</label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={personalDetails.email}
          onChange={handleChangeDetails}
          className="w-full px-4 py-2 rounded bg-white/10 border border-luxury-gold/30 focus:border-luxury-gold outline-none text-luxury-cream transition-colors text-base"
        />
        <ValidationError field="email" errors={state.errors} />
      </div>
      <div>
        <label className="block text-xs font-bold mb-2 mb-1">Which events would you like to attend?</label>
        <div className="space-y-3">
          {mosaicEvents.map((ev, i) => (
            <label key={ev.title} className="flex items-center space-x-2 cursor-pointer group">
              <input 
                type="checkbox" 
                name="events[]" 
                value={i} 
                checked={selectedEvents.includes(i)}
                onChange={handleEventsChange}
                className="accent-luxury-gold h-4 w-4 border rounded focus:ring-2 focus:ring-luxury-gold"
              />
              <span className="text-luxury-cream group-hover:text-luxury-gold transition">
                <span className="font-bold text-luxury-gold">{ev.date} {ev.time}</span> {ev.title}
              </span>
            </label>
          ))}
        </div>
        <ValidationError field="events" errors={state.errors} />
      </div>
      <div>
        <label className="block text-xs font-bold mb-1" htmlFor="message">
          Anything you'd like us to know? (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={personalDetails.message}
          onChange={handleChangeDetails}
          className="w-full px-4 py-2 rounded bg-white/10 border border-luxury-gold/30 focus:border-luxury-gold outline-none text-luxury-cream transition-colors text-base"
        />
        <ValidationError field="message" errors={state.errors} />
      </div>
      <div className="text-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-block px-8 py-3 rounded bg-luxury-gold text-luxury-black font-bold uppercase text-xs tracking-widest hover:bg-luxury-cream transition"
        >
          {state.submitting ? 'Submitting...' : 'Submit & Sign Up'}
        </button>
      </div>
    </form>
  );
}

const ParticipantCard = ({ person, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
    >
      <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden relative group border border-white/5">
        <img 
          src={person.image} 
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        <a 
          href={person.social} 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-luxury-cream text-luxury-black flex items-center justify-center opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 hover:bg-luxury-gold"
        >
          <Instagram className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
        <div className="space-y-2">
          <h3 className="font-serif text-4xl md:text-5xl">{person.name}</h3>
          <p className="text-luxury-gold/60 uppercase tracking-widest text-[10px] md:text-xs">{person.country}</p>
        </div>
        
        <div className="relative">
          <div 
            className={`text-luxury-cream/50 leading-relaxed italic transition-all duration-700 text-sm md:text-base overflow-hidden ${!isExpanded ? 'max-h-[7.2rem] md:max-h-[9.6rem]' : 'max-h-[1000px]'}`}
          >
            {person.bio.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''}>{para}</p>
            ))}
          </div>
          
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-luxury-black to-transparent pointer-events-none" />
          )}
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 md:mt-6 flex items-center gap-4 group/btn w-full md:w-auto"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 border border-luxury-gold/30 flex items-center justify-center group-hover/btn:border-luxury-gold transition-colors shrink-0">
               <ArrowRight className={`w-3 h-3 md:w-4 md:h-4 text-luxury-gold transition-transform duration-500 ${isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
            </div>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] opacity-60 group-hover/btn:opacity-100 transition-opacity text-left">
              {isExpanded ? 'Show Less' : 'See Full Narrative'}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Exhibition = () => {
  const navigate = useNavigate();
  const participants = [
    {
      name: 'Miki',
      country: 'Egypt',
      image: '/Mosaic/Participants/Miki.jpg',
      bio: "Miki’s departure from Egypt is rooted in the long-standing political conditions shaped by military control, which he describes as limiting both daily life and personal development. The environment is portrayed as increasingly restrictive, making adaptation difficult over time.\n\nAfter arriving in Poznań as a student, he gradually shifted from temporary residence to long-term settlement. What began as study evolved into permanence, as he grew attached to the city through everyday familiarity and comfort. He describes this shift as something intuitive rather than planned, emphasizing that belonging emerged through lived experience rather than intention. His migration therefore combines political constraint with a later stabilisation in a place that gradually became home.",
      social: "https://instagram.com/"
    },
    {
      name: 'Senamie',
      country: 'Nigeria',
      image: '/Mosaic/Participants/Senami.jpg',
      bio: "Senamie’s decision to leave Nigeria is tied to long-term structural limitations that made personal and creative development difficult to sustain. He frames migration as a search for conditions where self-realisation and stability would be more achievable, both for himself and those close to him.\n\nRather than responding to a single triggering event, his departure is shaped by accumulated barriers affecting young creatives in particular. Migration in his case is presented as a forward-looking move, driven by the need to access environments where aspiration could be translated into practice.",
      social: "https://instagram.com/"
    },
    {
      name: 'Alena',
      country: 'Belarus',
      image: '/Mosaic/Participants/Alena.jpg',
      bio: "Alena’s migration from Belarus is described as a conscious decision shaped by a perceived lack of safety and freedom. She does not present her experience as forced displacement, but rather as a deliberate step toward improving living conditions for herself and her family.\n\nHer account highlights agency within constraint: the decision to leave is framed as preventive rather than reactive. Migration becomes a strategy of safeguarding future stability rather than escaping immediate crisis.",
      social: "https://instagram.com/"
    },
    {
      name: 'Trang',
      country: 'Vietnam',
      image: '/Mosaic/Participants/Trang.jpg',
      bio: "Trang describes her departure from Vietnam as a response to persistent social pressure that limited her ability to develop independently. Expectations of conformity created a sense of restriction that made personal growth difficult.\n\nHer decision to migrate is linked to the desire for autonomy and the possibility of developing “in her own way.” Rather than a sudden rupture, migration appears as a considered move toward an environment where individuality is more possible.",
      social: "https://instagram.com/"
    },
    {
      name: 'Will',
      country: 'United States',
      image: '/Mosaic/Participants/Will.jpg',
      bio: "Will’s mobility originates in a combination of military service and earlier internal movement within the United States. His relocation abroad was enabled by institutional structures rather than a singular personal decision.\n\nExposure to different countries and contexts broadened his sense of scale, shifting his perception of the world beyond his hometown in New Orleans. Migration, in his case, is connected less to departure from constraint and more to expansion through structured mobility opportunities.",
      social: "https://instagram.com/"
    },
    {
      name: 'Yukino',
      country: 'Japan',
      image: '/Mosaic/Participants/Yukino.jpg',
      bio: "Yukino’s migration is shaped by professional constraints within the ballet system in Japan. The highly competitive nature of the field and its limited professional opportunities led her to seek training and work in Europe.\n\nHer move is framed as a professional necessity rather than a social or political decision. Europe, in her narrative, represents both historical and technical continuity within her discipline, making migration part of artistic development.",
      social: "https://instagram.com/"
    },
    {
      name: 'Jose Angel',
      country: 'Venezuela',
      image: '/Mosaic/Participants/Jose.jpg',
      bio: "Jose Angel’s migration unfolds gradually through a combination of political instability in Venezuela and personal family-related difficulties. His first move to Argentina in 2015 is described as the result of accumulated circumstances rather than a single decisive moment.\n\nHis trajectory reflects layered motivations where structural instability and intimate pressures intersect. Migration emerges as a process of alignment between external conditions and personal readiness to leave.",
      social: "https://instagram.com/"
    },
    {
      name: 'Peter',
      country: 'China',
      image: '/Mosaic/Participants/Peter.jpg',
      bio: "Peter’s migration begins in an unplanned and informal way, initially linked to a gap year and a spontaneous suggestion from his father to study music abroad. What begins as an opportunity quickly becomes a longer trajectory shaped by external events.\n\nLater relocation to Poznań is connected to geopolitical disruption following the war in Ukraine. His migration path combines chance, family influence, and forced adaptation to changing circumstances.",
      social: "https://instagram.com/"
    }
  ];

  return (
    <div className="bg-luxury-black min-h-screen selection:bg-luxury-gold/30 font-sans text-luxury-cream">
      <nav className="fixed top-0 left-0 w-full z-50 bg-luxury-black/90 backdrop-blur-md py-4 md:py-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 md:gap-4 text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-luxury-gold hover:text-white transition-all group"
          >
            <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:-translate-x-1" /> Back
          </button>
          <img src="/Mosaic/star.png" alt="Urban Mosaic Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>
      </nav>

      {/* Exhibition Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 md:space-y-8 flex flex-col items-center"
          >
            <img src="/Mosaic/Mosaic_White.png" alt="Urban Mosaic" className="h-24 md:h-48 w-auto mb-4" />
            <p className="text-luxury-gold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs">A Photographic Narrative</p>
            <h1 className="font-serif text-4xl md:text-8xl leading-tight md:leading-none px-4">Mobility, Creativity, and Belonging</h1>
            <div className="w-12 md:w-20 h-[1px] bg-luxury-gold mx-auto my-8 md:my-12" />
            <p className="text-luxury-cream/60 leading-relaxed text-base md:text-lg max-w-2xl mx-auto italic px-4">
              "The idea for this exhibition came from an observation that many people who live and work in Poznań moved here from countries that seem very far away..."
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Mosaic Implementation */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
           <div className="relative aspect-[3/4] bg-luxury-black border border-white/10 overflow-hidden group">
              <img 
                src="/Mosaic/Um_Poster.png" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                alt="Urban Mosaic Exhibition Poster"
              />
              <div className="absolute inset-0 bg-luxury-black/10 group-hover:bg-transparent transition-colors duration-500" />
           </div>
           <div className="space-y-6 md:space-y-8">
             <h2 className="font-serif text-3xl md:text-4xl">About the Project</h2>
             <p className="text-luxury-cream/60 leading-relaxed text-sm md:text-base">
             An exploration of mobility, creativity, and belonging in contemporary Poznań. Urban Mosaic documents the lives of those existing in the "in-between" spaces of migration, examining how different forms of creation are used to build a sense of home when physical borders remain fluid.
             </p>
             <div className="pt-6 md:pt-8 grid grid-cols-2 gap-6 md:gap-8 border-t border-white/5">
               <div>
                 <p className="text-luxury-gold text-xl md:text-2xl font-serif">Biblioteka Wielkopolska im. Stanisława Barańczaka</p>
                 <p className="text-[8px] md:text-[9px] uppercase tracking-widest opacity-40">Gallery Venue</p>
               </div>
               <div>
                 <p className="text-luxury-gold text-xl md:text-2xl font-serif">2026</p>
                 <p className="text-[8px] md:text-[9px] uppercase tracking-widest opacity-40">Exhibition Year</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* The Stories */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          {participants.map((person, i) => (
            <ParticipantCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </section>

      {/* Event Signup */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <EventSignupForm />
      </section>

      {/* Schedule */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 md:mb-16">PROGRAM WYDARZEŃ / EVENT CALENDAR</h2>
          <div className="space-y-px bg-white/5 border border-white/5">
            {mosaicEvents.map((event) => (
              <div key={event.title} className="bg-luxury-black p-6 md:p-12 flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center hover:bg-white/[0.03] transition-all">
                <p className="font-serif text-2xl md:text-3xl text-luxury-gold min-w-[140px] md:min-w-[170px]">
                  {event.date} <span className="ml-2 text-base md:text-lg text-luxury-cream/60">{event.time}</span>
                </p>
                <div className="flex-grow space-y-3">
                  <h4 className="text-base md:text-lg uppercase tracking-widest">{event.title}</h4>
                  <div className="text-luxury-cream/60 text-xs md:text-sm space-y-2 italic">
                    <p>{event.pl}</p>
                    <p className="opacity-60">{event.en}</p>
                  </div>
                  <p className="text-luxury-gold text-[10px] md:text-xs uppercase tracking-widest pt-2">
                    {event.details}
                  </p>
                </div>
                <button className="text-[8px] md:text-[10px] uppercase tracking-widest text-luxury-gold/50 hover:text-luxury-gold transition-colors mt-2 md:mt-0" tabIndex={-1}>
                  Add to Calendar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Footer */}
      <footer className="py-16 md:py-24 px-4 md:px-6 border-t border-luxury-cream/10 bg-luxury-black">
        <div className="max-w-7xl mx-auto text-center space-y-8 md:space-y-12">
          <h2 className="font-serif text-3xl md:text-4xl">Experience the Mosaic.</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-8 md:px-12 py-4 md:py-5 bg-luxury-cream text-luxury-black uppercase text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-bold hover:bg-luxury-gold transition-all"
          >
            Back to Home Portfolio
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Exhibition;