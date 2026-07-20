import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Instagram, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

const mosaicEvents = [
  {
    date: '26.06',
    time: '17:00',
    title: 'Urban Mosaic: Exhibition Opening & Afterparty',
    pl: 'Inauguracja projektu oraz premierowy wernisaż wystawy fotograficznej „URBAN MOSAIC". Po części oficjalnej zapraszamy na muzyczne afterparty w swobodnej atmosferze.',
    en: 'The official launch and premier opening of the "URBAN MOSAIC" photography exhibition. Following the reception, join us for a relaxed musical afterparty.',
    details: 'Wstęp wolny / Free admission',
  },
  {
    date: '04.07',
    time: '10:00',
    title: 'Urban Mosaic: City Run with FLEK Running Club',
    pl: 'Wydarzenie łączące sztukę i ruch. Spotkanie rozpocznie się od oprowadzania po wystawie, po czym wyruszymy na wspólny bieg ulicami Poznania zakończony integracją.',
    en: 'An event bridging art and movement. The program begins with a guided exhibition tour, followed by a collective city run through Poznań and a social wrap-up.',
    details: 'Zapisy (limit miejsc) / Registration required',
  },
  {
    date: '18.07',
    time: '12:00',
    title: 'Urban Mosaic: Papercraft Workshop by Aimable Mugabo',
    pl: 'Kolektywne warsztaty upcyclingowe we współpracy z Harmonic Ventures. Uczestnicy stworzą unikalne papierowe formy przestrzenne z materiałów z odzysku.',
    en: 'A collaborative upcycling workshop partnership with Harmonic Ventures. Participants will transform recycled materials into unique paper sculptures.',
    details: 'Zapisy (limit miejsc) / Registration required (limited capacity)',
  },
  {
    date: '23.07',
    time: '17:00',
    title: 'Urban Mosaic: Gallery & Photo Walk + Darkroom Experience',
    pl: 'Kuratowany spacer fotograficzny oraz przegląd galerii sztuki współczesnej z Agatą Rodriguez, zwieńczony pokazem tradycyjnego procesu wywoływania odbitek w ciemni Darii Bielinkov.',
    en: "A curated contemporary art gallery tour and photo walk led by Agata Rodriguez, concluding with a live, traditional analog darkroom print demonstration at Daria Bielienkov's studio.",
    details: 'Zapisy (limit miejsc) / Registration required (limited capacity)',
  },
  {
    date: '25.07',
    time: '13:00',
    title: 'Urban Mosaic: Documentary Screening & Exhibition',
    pl: 'Pokaz filmu „Roots & Resonance" (BIG studio, reż. Oluwapelumi Osewa) połączony z rozmową z twórcami w Bibliotece Wielkopolskiej, a następnie wizyta w przestrzeni Mothrland na wystawie malarstwa „Prerequisite" autorstwa Easyblack.',
    en: 'A special screening of the documentary "Roots & Resonance" (BIG studio, dir. Oluwapelumi Osewa) followed by an artist talk, concluding with a visit to the Mothrland art space for the open studio exhibition "Prerequisite" by Easyblack.',
    details: 'Wstęp wolny / Free admission',
  },
  {
    date: '31.07',
    time: '17:00',
    title: 'Urban Mosaic: Artist Talk & Finissage',
    pl: 'Finisażowe podsumowanie festiwalu. Kameralne spotkanie z autorem Adalatem Naghiyevem, otwarta dyskusja oraz wspólne, uroczyste zamknięcie przestrzeni wystawowej.',
    en: 'The festival finissage and closing reception. An intimate gathering featuring an open dialogue and the collective closing of the exhibition space.',
    details: 'Wstęp wolny / Free admission',
  },
];

function eventToJSDate(dateStr, timeStr) {
  const [day, month] = dateStr.split('.').map((v) => parseInt(v, 10));
  const [hour, minute] = timeStr.split(':').map((v) => parseInt(v, 10));
  return new Date(2026, month - 1, day, hour, minute);
}

function generateICS(event) {
  const pad = (n) => String(n).padStart(2, '0');
  const start = eventToJSDate(event.date, event.time);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  const dateTimeStr = (dt) =>
    `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}T${pad(dt.getHours())}${pad(dt.getMinutes())}00`;

  let ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Urban Mosaic//EN
BEGIN:VEVENT
UID:${event.title.replace(/[^a-zA-Z0-9]/g, '')}@urbanmosaic
DTSTAMP:${dateTimeStr(new Date())}
DTSTART:${dateTimeStr(start)}
DTEND:${dateTimeStr(end)}
SUMMARY:${event.title}
DESCRIPTION:${event.en.replace(/\n/g, ' ')}
LOCATION:Biblioteka Wielkopolska im. Stanisława Barańczaka, Poznań
END:VEVENT
END:VCALENDAR
`.replace(/\n/g, '\r\n');
  return ics;
}

function downloadICS(filename, content) {
  const url = URL.createObjectURL(new Blob([content], { type: 'text/calendar' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: filename });
  a.click();
  URL.revokeObjectURL(url);
}

function EventSignupForm() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, handleSubmit] = useForm('mykrwpql');

  const selectedEventDescriptions = selectedEvents
    .map(i => `[${mosaicEvents[i].date} ${mosaicEvents[i].time}] ${mosaicEvents[i].title}`)
    .join('; ');

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center py-20 px-8 border border-luxury-gold/20"
      >
        <div className="w-16 h-16 border border-luxury-gold mx-auto mb-8 flex items-center justify-center">
          <span className="text-luxury-gold text-2xl font-serif">✓</span>
        </div>
        <h3 className="font-serif text-3xl md:text-4xl mb-6">Thank you for signing up!</h3>
        <div className="text-luxury-cream/50 text-sm space-y-1 mb-8">
          <p><span className="text-luxury-gold">Name:</span> {name || '—'}</p>
          <p><span className="text-luxury-gold">Email:</span> {email || '—'}</p>
        </div>
        {selectedEvents.length > 0 && (
          <div className="text-left border-t border-white/5 pt-6 mb-8">
            <p className="text-[9px] uppercase tracking-widest text-luxury-gold mb-4">Events Selected</p>
            <ul className="space-y-2">
              {mosaicEvents.filter((_, i) => selectedEvents.includes(i)).map(ev => (
                <li key={ev.title} className="text-sm text-luxury-cream/70">
                  <span className="text-luxury-gold font-mono">{ev.date} {ev.time}</span> — {ev.title}
                </li>
              ))}
            </ul>
          </div>
        )}
        {message && (
          <p className="text-sm italic text-luxury-cream/40 border-t border-white/5 pt-6 mb-8">{message}</p>
        )}
        <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold">A confirmation email will be sent soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <input type="hidden" name="Selected Events" value={selectedEventDescriptions} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-2">
          <label className="text-[9px] uppercase tracking-widest text-luxury-gold block" htmlFor="su-name">Name *</label>
          <input
            id="su-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full bg-transparent border-b border-luxury-cream/20 py-3 focus:outline-none focus:border-luxury-gold transition-colors duration-300 text-sm"
          />
          <ValidationError field="name" errors={state.errors} />
        </div>
        <div className="space-y-2">
          <label className="text-[9px] uppercase tracking-widest text-luxury-gold block" htmlFor="su-email">Email *</label>
          <input
            id="su-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full bg-transparent border-b border-luxury-cream/20 py-3 focus:outline-none focus:border-luxury-gold transition-colors duration-300 text-sm"
          />
          <ValidationError field="email" errors={state.errors} />
        </div>
      </div>

      <div className="mb-8">
        <p className="text-[9px] uppercase tracking-widest text-luxury-gold mb-4">Which events would you like to attend?</p>
        <div className="space-y-3">
          {mosaicEvents.map((ev, i) => (
            <label key={ev.title} className="flex items-start gap-4 cursor-pointer group">
              <div className="relative mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  name="events[]"
                  value={i}
                  checked={selectedEvents.includes(i)}
                  onChange={e => {
                    const idx = parseInt(e.target.value, 10);
                    setSelectedEvents(evts => e.target.checked ? [...evts, idx] : evts.filter(v => v !== idx));
                  }}
                  className="sr-only"
                />
                <div className={`w-4 h-4 border transition-colors duration-200 flex items-center justify-center ${selectedEvents.includes(i) ? 'border-luxury-gold bg-luxury-gold/10' : 'border-luxury-cream/20 group-hover:border-luxury-gold/50'}`}>
                  {selectedEvents.includes(i) && <div className="w-2 h-2 bg-luxury-gold" />}
                </div>
              </div>
              <span className="text-sm text-luxury-cream/70 group-hover:text-luxury-cream transition-colors">
                <span className="text-luxury-gold font-mono text-xs">{ev.date} {ev.time}</span>
                <span className="mx-2 text-luxury-cream/20">—</span>
                {ev.title}
              </span>
            </label>
          ))}
        </div>
        <ValidationError field="events" errors={state.errors} />
      </div>

      <div className="mb-10 space-y-2">
        <label className="text-[9px] uppercase tracking-widest text-luxury-gold block" htmlFor="su-message">
          Anything you'd like us to know? (Optional)
        </label>
        <textarea
          id="su-message"
          name="message"
          rows={3}
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full bg-transparent border-b border-luxury-cream/20 py-3 focus:outline-none focus:border-luxury-gold transition-colors duration-300 text-sm resize-none"
        />
        <ValidationError field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-5 bg-luxury-gold text-luxury-black uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-luxury-cream transition-colors duration-500 disabled:opacity-50"
      >
        {state.submitting ? 'Submitting...' : 'Submit & Sign Up'}
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}

const ParticipantCard = ({ person }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col"
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-4">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        {/* Instagram overlay */}
        <a
          href={person.social}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} on Instagram`}
          className="absolute top-3 right-3 w-9 h-9 bg-luxury-black/80 border border-luxury-gold/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-luxury-gold hover:border-luxury-gold"
        >
          <Instagram className="w-4 h-4 text-luxury-gold group-hover:text-luxury-black transition-colors" />
        </a>
        {/* Country tag */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-luxury-black/90 to-transparent">
          <p className="text-[8px] uppercase tracking-[0.25em] text-luxury-gold">{person.country}</p>
        </div>
      </div>

      {/* Name */}
      <h3 className="font-serif text-xl mb-3">{person.name}</h3>

      {/* Bio */}
      <div className="flex-1">
        <AnimatePresence initial={false}>
          <motion.div
            key={isExpanded ? 'expanded' : 'collapsed'}
            initial={false}
            className={`text-luxury-cream/50 text-xs leading-relaxed italic overflow-hidden ${!isExpanded ? 'line-clamp-4' : ''}`}
          >
            {person.bio.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-3' : ''}>{para}</p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-3 flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-luxury-gold/60 hover:text-luxury-gold transition-colors cursor-pointer self-start"
      >
        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        {isExpanded ? 'Show Less' : 'See Full Narrative'}
      </button>
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
      bio: "Miki's departure from Egypt is rooted in the long-standing political conditions shaped by military control, which he describes as limiting both daily life and personal development. The environment is portrayed as increasingly restrictive, making adaptation difficult over time.\n\nAfter arriving in Poznań as a student, he gradually shifted from temporary residence to long-term settlement. What began as study evolved into permanence, as he grew attached to the city through everyday familiarity and comfort. He describes this shift as something intuitive rather than planned, emphasizing that belonging emerged through lived experience rather than intention. His migration therefore combines political constraint with a later stabilisation in a place that gradually became home.",
      social: 'https://www.instagram.com/mickeyismaiil',
    },
    {
      name: 'Senamie',
      country: 'Nigeria',
      image: '/Mosaic/Participants/Senami.jpg',
      bio: "Senamie's decision to leave Nigeria is tied to long-term structural limitations that made personal and creative development difficult to sustain. He frames migration as a search for conditions where self-realisation and stability would be more achievable, both for himself and those close to him.\n\nRather than responding to a single triggering event, his departure is shaped by accumulated barriers affecting young creatives in particular. Migration in his case is presented as a forward-looking move, driven by the need to access environments where aspiration could be translated into practice.",
      social: 'https://www.instagram.com/_senamie',
    },
    {
      name: 'Alena',
      country: 'Belarus',
      image: '/Mosaic/Participants/Alena.jpg',
      bio: "Alena's migration from Belarus is described as a conscious decision shaped by a perceived lack of safety and freedom. She does not present her experience as forced displacement, but rather as a deliberate step toward improving living conditions for herself and her family.\n\nHer account highlights agency within constraint: the decision to leave is framed as preventive rather than reactive. Migration becomes a strategy of safeguarding future stability rather than escaping immediate crisis.",
      social: 'https://www.instagram.com/alenakozel.photo',
    },
    {
      name: 'Trang',
      country: 'Vietnam',
      image: '/Mosaic/Participants/Trang.jpg',
      bio: 'Trang describes her departure from Vietnam as a response to persistent social pressure that limited her ability to develop independently. Expectations of conformity created a sense of restriction that made personal growth difficult.\n\nHer decision to migrate is linked to the desire for autonomy and the possibility of developing "in her own way." Rather than a sudden rupture, migration appears as a considered move toward an environment where individuality is more possible.',
      social: 'https://www.instagram.com/houseofhotpot_poznan',
    },
    {
      name: 'Will',
      country: 'United States',
      image: '/Mosaic/Participants/Will.jpg',
      bio: "Will's mobility originates in a combination of military service and earlier internal movement within the United States. His relocation abroad was enabled by institutional structures rather than a singular personal decision.\n\nExposure to different countries and contexts broadened his sense of scale, shifting his perception of the world beyond his hometown in New Orleans. Migration, in his case, is connected less to departure from constraint and more to expansion through structured mobility opportunities.",
      social: 'https://www.instagram.com/kingcurtiswilliams',
    },
    {
      name: 'Yukino',
      country: 'Japan',
      image: '/Mosaic/Participants/Yukino.jpg',
      bio: "Yukino's migration is shaped by professional constraints within the ballet system in Japan. The highly competitive nature of the field and its limited professional opportunities led her to seek training and work in Europe.\n\nHer move is framed as a professional necessity rather than a social or political decision. Europe, in her narrative, represents both historical and technical continuity within her discipline, making migration part of artistic development.",
      social: 'https://www.instagram.com/yukinotamai',
    },
    {
      name: 'Jose Angel',
      country: 'Venezuela',
      image: '/Mosaic/Participants/Jose.jpg',
      bio: "Jose Angel's migration unfolds gradually through a combination of political instability in Venezuela and personal family-related difficulties. His first move to Argentina in 2015 is described as the result of accumulated circumstances rather than a single decisive moment.\n\nHis trajectory reflects layered motivations where structural instability and intimate pressures intersect. Migration emerges as a process of alignment between external conditions and personal readiness to leave.",
      social: 'https://www.instagram.com/jose_angelart',
    },
    {
      name: 'Peter',
      country: 'China',
      image: '/Mosaic/Participants/Peter.jpg',
      bio: "Peter's migration begins in an unplanned and informal way, initially linked to a gap year and a spontaneous suggestion from his father to study music abroad. What begins as an opportunity quickly becomes a longer trajectory shaped by external events.\n\nLater relocation to Poznań is connected to geopolitical disruption following the war in Ukraine. His migration path combines chance, family influence, and forced adaptation to changing circumstances.",
      social: 'https://www.instagram.com/pt12.06_swing',
    },
  ];

  function handleAddToCalendar(event) {
    const ics = generateICS(event);
    const safeTitle = event.title.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 40) || 'Urban_Mosaic';
    downloadICS(`${safeTitle}_${event.date}.ics`, ics);
  }

  return (
    <div className="bg-luxury-black min-h-screen selection:bg-luxury-gold/30 font-sans text-luxury-cream">

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
          <img src="/Mosaic/star.png" alt="Urban Mosaic" className="h-8 w-auto object-contain" />
          <div className="w-16" /> {/* balance */}
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="h-px w-12 bg-luxury-gold" />
              <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold">A Photographic Narrative</p>
            </div>

            {/* Logo mark */}
            <img
              src="/Mosaic/Mosaic_White.png"
              alt="Urban Mosaic"
              className="h-20 md:h-28 w-auto mb-8 md:mb-12"
            />

            {/* Big heading */}
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none tracking-tight mb-12 md:mb-16">
              Mobility,<br />
              <span className="text-luxury-gold">Creativity,</span><br />
              and Belonging
            </h1>

            {/* Divider + quote */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-10">
              <p className="text-luxury-cream/50 leading-relaxed text-base md:text-lg italic max-w-xl">
                "The idea for this exhibition came from an observation that many people who live and work in Poznań moved here from countries that seem very far away..."
              </p>
              <div className="flex md:justify-end items-end gap-12">
                <div>
                  <p className="font-serif text-3xl text-luxury-gold">2026</p>
                  <p className="text-[8px] uppercase tracking-widest text-luxury-cream/30 mt-1">Exhibition Year</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-luxury-gold">8</p>
                  <p className="text-[8px] uppercase tracking-widest text-luxury-cream/30 mt-1">Participants</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-luxury-gold">6</p>
                  <p className="text-[8px] uppercase tracking-widest text-luxury-cream/30 mt-1">Events</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[3/4] border border-white/10 overflow-hidden bg-luxury-black"
          >
            <img
              src="/Mosaic/Poster.png"
              className="w-full h-full object-contain"
              alt="Urban Mosaic Exhibition Poster"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:pt-8"
          >
            <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold mb-6">About the Project</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              About the Project
            </h2>
            <p className="text-luxury-cream/60 leading-relaxed text-sm md:text-base mb-12">
              An exploration of mobility, creativity, and belonging in contemporary Poznań. Urban Mosaic documents the lives of those existing in the "in-between" spaces of migration, examining how different forms of creation are used to build a sense of home when physical borders remain fluid.
            </p>

            {/* Details grid */}
            <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-8">
              {[
                { label: 'Gallery Venue', value: 'Biblioteka Wielkopolska im. Stanisława Barańczaka' },
                { label: 'Location', value: 'ul. Prusa 3, Poznań, Poland' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-1 h-1 rounded-full bg-luxury-gold mt-2 shrink-0" />
                  <div>
                    <p className="text-[8px] uppercase tracking-widest text-luxury-cream/30 mb-1">{label}</p>
                    <p className="text-luxury-gold font-serif text-lg md:text-xl">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Participants ─────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-12 md:mb-16 border-b border-white/10 pb-8">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold mb-3">The Stories</p>
              <h2 className="font-serif text-3xl md:text-5xl">Participants</h2>
            </div>
            <p className="text-luxury-cream/30 text-sm hidden md:block">8 voices / 8 journeys</p>
          </div>

          {/* Grid: 1 → 2 → 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {participants.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <ParticipantCard person={person} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Signup Form ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold mb-3">Reserve Your Spot</p>
            <h2 className="font-serif text-3xl md:text-5xl">Sign up for Urban Mosaic Events</h2>
          </div>
          <EventSignupForm />
        </div>
      </section>

      {/* ── Schedule ─────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold mb-3">Calendar</p>
            <h2 className="font-serif text-3xl md:text-5xl">PROGRAM WYDARZEŃ / EVENT CALENDAR</h2>
          </div>

          <div className="divide-y divide-white/5">
            {mosaicEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group py-8 md:py-10 grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-4 md:gap-8 items-start hover:bg-white/[0.02] transition-colors -mx-6 px-6"
              >
                {/* Date + time */}
                <div className="shrink-0">
                  <p className="font-serif text-3xl md:text-4xl text-luxury-gold leading-none">{event.date}</p>
                  <p className="text-xs text-luxury-cream/40 mt-1 font-mono">{event.time}</p>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className="text-sm md:text-base uppercase tracking-wider font-medium">{event.title}</h4>
                  <div className="space-y-1.5">
                    <p className="text-luxury-cream/60 text-xs md:text-sm leading-relaxed italic">{event.pl}</p>
                    <p className="text-luxury-cream/35 text-xs md:text-sm leading-relaxed italic">{event.en}</p>
                  </div>
                  <p className="text-luxury-gold text-[9px] uppercase tracking-[0.25em]">{event.details}</p>
                </div>

                {/* Add to calendar */}
                <button
                  type="button"
                  onClick={() => handleAddToCalendar(event)}
                  aria-label={`Add ${event.title} to Calendar`}
                  className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-luxury-cream/30 hover:text-luxury-gold transition-colors shrink-0 group/btn cursor-pointer mt-1"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Add to Calendar</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <img src="/Mosaic/Mosaic_White.png" alt="Urban Mosaic" className="h-10 w-auto mb-4 opacity-60" />
            <p className="text-luxury-cream/25 text-xs">Poznań, 2026</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-10 py-4 border border-luxury-gold/30 text-luxury-gold uppercase text-[9px] tracking-[0.35em] hover:bg-luxury-gold hover:text-luxury-black transition-all duration-400 cursor-pointer"
          >
            Back to Home Portfolio
          </button>
        </div>
      </footer>

    </div>
  );
};

export default Exhibition;
