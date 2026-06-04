import React from 'react';
import { Users, Music, Briefcase, Home } from 'lucide-react';

export const PORTFOLIO_ITEMS = [
  { id: 1, category: 'Portraiture', title: 'Julia Stachura', image: '/Featured/Editorial/1.jpg', size: 'large', desc: 'Deep studio tones and deliberate stillness. A collaboration built around character, not performance.' },
  { id: 3, category: 'Commercial', title: 'PhilDBrand Show', image: '/Featured/Renaissance/1.jpg', size: 'medium', desc: 'Three floors. Rooftop golden hour. A collection that rewrote the archive and refused to explain itself.' },
  { id: 6, category: 'Portraiture', title: 'Character Study', image: '/Featured/Editorial/2.jpg', size: 'large', desc: 'Translating identity into imagery through deep studio work.' },
  { id: 8, category: 'Commercial', title: 'Rooftop Series', image: '/Featured/Renaissance/2.jpg', size: 'medium', desc: 'Capturing the movement and energy of high fashion.' },
  { id: 10, category: 'Portraiture', title: 'MOMA Collab', image: '/Featured/Editorial/4.jpg', size: 'large', desc: 'Museum-grade whitespace and deliberate composition.' },
  { id: 13, category: 'Portraiture', title: 'Spatial Dynamics', image: '/Featured/Editorial/3.jpg', size: 'medium', desc: 'Exploring the relationship between form and architectural space.' },
  { id: 14, category: 'Portraiture', title: 'Color Theory', image: '/Featured/Editorial/5.jpg', size: 'small', desc: 'Vibrant contrasts and saturated tones in studio.' },
  { id: 15, category: 'Portraiture', title: 'Motion Study', image: '/Featured/Editorial/6.jpg', size: 'large', desc: 'Capturing movement and fluidity in a static frame.' },
  { id: 16, category: 'Portraiture', title: 'Texture & Light', image: '/Featured/Editorial/7.jpg', size: 'medium', desc: 'Close-ups emphasizing material and lighting.' },
  { id: 17, category: 'Portraiture', title: 'The Subject', image: '/Featured/Editorial/8.jpg', size: 'large', desc: 'Intimate portraiture focused on the gaze.' },
  { id: 18, category: 'Commercial', title: 'Backstage Details', image: '/Featured/Renaissance/3.jpg', size: 'large', desc: 'The quiet moments before the rush of the runway.' },
  { id: 19, category: 'Commercial', title: 'Renaissance Line', image: '/Featured/Renaissance/4.jpg', size: 'medium', desc: 'Fluid fabrics and structural silhouettes.' },
  { id: 20, category: 'Commercial', title: 'The Walk', image: '/Featured/Renaissance/5.jpg', size: 'large', desc: 'A study in pacing and presentation.' },
  { id: 21, category: 'Commercial', title: 'Designer Portrait', image: '/Featured/Renaissance/6.jpg', size: 'small', desc: 'The creative mind behind the collection.' },
  { id: 22, category: 'Commercial', title: 'Designer Portrait', image: '/Featured/Renaissance/8.jpg', size: 'medium', desc: 'The creative mind behind the collection.' },
  { id: 22, category: 'Commercial', title: 'Final Look', image: '/Featured/Renaissance/7.jpg', size: 'medium', desc: 'The culmination of the runway show.' },
];

export const CATEGORIES = ['All', 'Portraiture', 'Concert & Event', 'Commercial', 'Interiors'];

export const SERVICES = [
  {
    id: 'portraits',
    title: 'Portrait Photography',
    homeDescription: 'Cinematic and intentional portraiture for individuals, artists, couples, and creatives.',
    cta: 'View Portraits',
    icon: <Users className="w-8 h-8" />,
    tagline: 'A cinematic and editorial approach to human presence.',
    for: 'Individuals, artists, creatives, couples, graduates, and people who need portraits with direction, character, and atmosphere.',
    includes: [
      'Studio portraits', 'Outdoor portraits', 'Location-based portraits', 'Artist portraits', 
      'Creative portraits', 'Graduation sessions', 'Personal portraits', 'Couple sessions', 
      'Engagement sessions', 'Editorial-style love stories', 'Selected wedding commissions by request'
    ],
    approach: 'The session is built around light, location, styling, composition, and presence. It can be clean and minimal, cinematic and emotional, or more editorial depending on the person and purpose.',
    fullCTA: 'Inquire about a portrait session'
  },
  {
    id: 'events',
    title: 'Concert and Event Documentation',
    homeDescription: 'Atmospheric coverage of concerts, gigs, festivals, exhibitions, and live cultural moments.',
    cta: 'View Events',
    icon: <Music className="w-8 h-8" />,
    tagline: 'Unobtrusive and atmospheric coverage of live experiences.',
    for: 'Musicians, festival organizers, venues, galleries, cultural institutions, brands, and event organizers.',
    includes: [
      'Concerts', 'Gigs', 'Festivals', 'Exhibitions', 'Cultural events', 
      'Creative gatherings', 'Venue documentation', 'Atmosphere-focused event coverage'
    ],
    approach: 'The goal is to document the energy of the space without interrupting it. The final gallery should include wide environmental shots, people, movement, details, and decisive moments that show the real atmosphere of the event.',
    fullCTA: 'Book event coverage'
  },
  {
    id: 'commercial',
    title: 'Brand and Commercial Photography',
    homeDescription: 'Editorial visual content for independent brands, lifestyle businesses, products, campaigns, and launches.',
    cta: 'View Commercial',
    icon: <Briefcase className="w-8 h-8" />,
    tagline: 'Distinct visual content for product-led and lifestyle businesses.',
    for: 'Jewelry brands, clothing brands, accessories brands, cafes, restaurants, local brands, artists, makers, and independent businesses.',
    includes: [
      'Product and lifestyle imagery', 'Lookbooks', 'social media content', 'website content', 
      'Campaign launches', 'Brand storytelling', 'visual identity work', 'commercial photo sets'
    ],
    approach: 'Commercial photography is treated through an editorial lens. The focus is not only on the product, but also on texture, people, atmosphere, use, and the identity around the brand.',
    fullCTA: 'Discuss a commercial project'
  },
  {
    id: 'interiors',
    title: 'Real Estate and Interior Photography',
    homeDescription: 'Clean and inviting imagery for apartments, hostels, rental spaces, hospitality venues, and interiors.',
    cta: 'View Interiors',
    icon: <Home className="w-8 h-8" />,
    tagline: 'Clean, structured, and inviting imagery for interiors and commercial spaces.',
    for: 'Apartment owners, hostel owners, property managers, rental hosts, hospitality businesses, cafes, restaurants, and interior-focused brands.',
    includes: [
      'Apartments', 'Hostels', 'Rental spaces', 'Hospitality spaces', 'Cafes', 
      'Restaurants', 'Interiors', 'Commercial spaces', 'Spaces prepared for booking platforms or websites'
    ],
    approach: 'The work focuses on natural light, structure, clean framing, spatial clarity, and details that make the space feel accurate, attractive, and ready to be booked or presented professionally.',
    fullCTA: 'Schedule an interior shoot'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Me and Adalat worked on a project with Old Town Vintage. What I liked the most was how every picture was an adventure. Adalat brought his vintage camera, and we had about 36 pictures total. That meant that we had to prepare everything to take one picture and move on to the next one in a different area. Working with Adalat didn't seem like work at all. When needed he knew how to make a joke when smile was necessary :) 100% recommend",
    author: "Wiktor Czechowski",
    type: "Model"
  },
  {
    quote: "Working with Adalat was an absolute pleasure. His creative eye, professionalism, and ability to capture genuine moments made the entire experience effortless and enjoyable.",
    author: "Angel Peres Affanchao",
    type: "Model"
  },
  {
    quote: "Sesja była absolutnie wyjątkowa Klimat Poznania w połączeniu z paryskim stylem stworzył coś naprawdę magicznego. Czułam się bardzo kobieco, swobodnie i pięknie przez cały czas trwania i pełna pozytywnej energii, dzięki czemu stres zniknął już po kilku minutach. Zdjęcia wyszły przepięknie — naturalne, eleganckie i pełne emocji. Cała sesja była dopracowana w najmniejszych detalach, a efekt końcowy przerósł moje oczekiwania. To była nie tylko sesja zdjęciowa, ale też cudowne doświadczenie i chwila tylko dla siebie Z całego serca polecam każdej kobiecie, która chce poczuć się wyjątkowo i zobaczyć siebie w pięknym, subtelnym wydaniu",
    author: "Magdalena Wróż-Jankowska",
    type: "Private Commission"
  },
  {
    quote: "My graduation photoshoot with Adalat was absolutely incredible! The inspiration, preparation, and execution all came together seamlessly. Throughout the shoot, Adalat kept the atmosphere relaxed while maintaining professionalism and keen attention to detail. He skillfully adjusted my gown, hair, and earrings—catching every little detail to ensure a flawless look. Each background was thoughtfully designed to match a specific outfit and mood—a doctor, a diva, and a curator. I can’t recommend him enough!",
    author: "Julia Stachura",
    type: "Curator, PhD"
  }
];

export const STATS = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Location Base', value: 'Poznań & Europe' },
  { label: 'Formats', value: 'Digital & Analog' },
  { label: 'Upcoming Exhibition', value: 'Urban Mosaic \'26' }
];
