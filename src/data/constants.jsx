import React from 'react';
import { Users, Music, Briefcase, Home } from 'lucide-react';

export const PORTFOLIO_ITEMS = [
  // Portraiture — Hanna (Studio Portrait)
  { id: 1,  category: 'Portraiture', title: 'Clean Studio Portraiture',          image: '/Featured/Portriats/_MG_4188.jpg',   size: 'large',  desc: 'A minimalist corporate and lifestyle portrait session focusing on high-key studio lighting and natural posing.' },
  { id: 2,  category: 'Portraiture', title: 'Clean Studio Portraiture',          image: '/Featured/Portriats/_MG_4230.jpg',   size: 'medium', desc: 'A minimalist corporate and lifestyle portrait session focusing on high-key studio lighting and natural posing.' },
  // Portraiture — High-Contrast Studio
  { id: 3,  category: 'Portraiture', title: 'Stylized Conceptual Portraiture',   image: '/Featured/Portriats/_MG_8657.jpg',   size: 'large',  desc: 'A dramatic, high-contrast studio session utilizing hard circular spotlighting to create bold, editorial-style shadows and a commanding human presence.' },
  { id: 4,  category: 'Portraiture', title: 'Stylized Conceptual Portraiture',   image: '/Featured/Portriats/_MG_8692.jpg',   size: 'medium', desc: 'A dramatic, high-contrast studio session utilizing hard circular spotlighting to create bold, editorial-style shadows and a commanding human presence.' },
  // Portraiture — Magdalena (Outdoor Film)
  { id: 5,  category: 'Portraiture', title: 'Editorial Outdoor Portraiture',     image: '/Featured/Portriats/000040.jpg',     size: 'medium', desc: 'A daylight location session utilizing 35mm analog film, blending architectural backdrops with classic styling.' },
  { id: 6,  category: 'Portraiture', title: 'Editorial Outdoor Portraiture',     image: '/Featured/Portriats/000044.jpg',     size: 'large',  desc: 'A daylight location session utilizing 35mm analog film, blending architectural backdrops with classic styling.' },
  // Portraiture — Ashley (B&W Night Film)
  { id: 7,  category: 'Portraiture', title: 'Cinematic Low-Light Portraiture',   image: '/Featured/Portriats/F2650016.jpg',   size: 'large',  desc: 'A nighttime, direct-flash b&w street portrait session captured on 35mm film, emphasizing mood and cinematic narrative.' },
  { id: 8,  category: 'Portraiture', title: 'Cinematic Low-Light Portraiture',   image: '/Featured/Portriats/F2650005.jpg',   size: 'medium', desc: 'A nighttime, direct-flash b&w street portrait session captured on 35mm film, emphasizing mood and cinematic narrative.' },
  // Editorial — Outdoor Location Shoot
  { id: 9,  category: 'Editorial',         title: 'Cinematic Portraiture',       image: '/Featured/Editorial/IMG_6307.JPG',  size: 'large',  desc: 'An outdoor fashion and portrait session captured on 35mm film, focusing on warm, natural tones and classic styling.' },
  { id: 10, category: 'Editorial',         title: 'Cinematic Portraiture',       image: '/Featured/Editorial/IMG_6308.JPG',  size: 'medium', desc: 'An outdoor fashion and portrait session captured on 35mm film, focusing on warm, natural tones and classic styling.' },
  // Editorial — TQ (Abandoned Library)
  { id: 11, category: 'Editorial',         title: 'Editorial Lookbook',          image: '/Featured/Editorial/_MG_4196.jpg',  size: 'large',  desc: 'A styled brand-focused session blending high-end sportswear styling with a raw, industrial backdrop, utilizing dynamic off-camera flash and natural lighting.' },
  { id: 12, category: 'Editorial',         title: 'Editorial Lookbook',          image: '/Featured/Editorial/_MG_4231.jpg',  size: 'medium', desc: 'A styled brand-focused session blending high-end sportswear styling with a raw, industrial backdrop, utilizing dynamic off-camera flash and natural lighting.' },
  // Editorial — "Feeling Blue" Creative Concept
  { id: 13, category: 'Editorial',         title: 'Conceptual Fashion Editorial', image: '/Featured/Editorial/_MG_7340.jpg',  size: 'medium', desc: 'A highly directed creative campaign utilizing saturated, atmospheric lighting and deliberate motion blur to evoke mood and emotional depth.' },
  { id: 14, category: 'Editorial',         title: 'Conceptual Fashion Editorial', image: '/Featured/Editorial/_MG_7372.jpg',  size: 'large',  desc: 'A highly directed creative campaign utilizing saturated, atmospheric lighting and deliberate motion blur to evoke mood and emotional depth.' },
  // Editorial — Julia Stachura (Graduation/Artistic Studio)
  { id: 15, category: 'Editorial',         title: 'Fine Art Studio Portraiture', image: '/Featured/Editorial/_MG_8448.jpg',  size: 'large',  desc: 'A stylized studio session blending professional achievement lookbooks with an avant-garde artistic aesthetic.' },
  { id: 16, category: 'Editorial',         title: 'Fine Art Studio Portraiture', image: '/Featured/Editorial/_MG_8384.jpg',  size: 'medium', desc: 'A stylized studio session blending professional achievement lookbooks with an avant-garde artistic aesthetic.' },
  // Commercial — Old Town Vintage
  { id: 17, category: 'Commercial',        title: 'Lifestyle Lookbook',           image: '/Featured/Commercial/000071.JPG',    size: 'large',  desc: 'A street-oriented brand campaign captured on 35mm film, showcasing apparel versatility across diverse style aesthetics for a curated vintage brand.' },
  { id: 18, category: 'Commercial',        title: 'Lifestyle Lookbook',           image: '/Featured/Commercial/000046.JPG',    size: 'medium', desc: 'A street-oriented brand campaign captured on 35mm film, showcasing apparel versatility across diverse style aesthetics for a curated vintage brand.' },
  // Commercial — Wyrobnia Jewelry
  { id: 19, category: 'Commercial',        title: 'Editorial Product Campaign',   image: '/Featured/Commercial/_MG_6293.jpg',  size: 'large',  desc: 'Detail-focused commercial imagery for an artisanal jewelry collection, balancing varied lighting techniques to emphasize raw textures and handcrafted materials.' },
  { id: 20, category: 'Commercial',        title: 'Editorial Product Campaign',   image: '/Featured/Commercial/_MG_6471.jpg',  size: 'medium', desc: 'Detail-focused commercial imagery for an artisanal jewelry collection, balancing varied lighting techniques to emphasize raw textures and handcrafted materials.' },
  // Commercial — Biblioteka Baku
  { id: 21, category: 'Commercial',        title: 'Hospitality & Culinary Content', image: '/Featured/Commercial/IMG_0297.JPG', size: 'medium', desc: 'Commercial culinary and lifestyle photography highlighting guest interaction, and premium menu presentation for a multi-concept venue.' },
  { id: 22, category: 'Commercial',        title: 'Hospitality & Culinary Content', image: '/Featured/Commercial/IMG_0312.JPG', size: 'large',  desc: 'Commercial culinary and lifestyle photography highlighting guest interaction, and premium menu presentation for a multi-concept venue.' },
  // Commercial — Afro Sasa Brass
  { id: 23, category: 'Commercial',        title: 'Sustainable Luxury Editorial', image: '/Featured/Commercial/_MG_0303.jpg',  size: 'large',  desc: 'An intentional outdoor lookbook session for an ethical jewelry brand, focusing on high-contrast lighting, product detail, and brand identity.' },
  { id: 24, category: 'Commercial',        title: 'Sustainable Luxury Editorial', image: '/Featured/Commercial/_MG_0313.jpg',  size: 'medium', desc: 'An intentional outdoor lookbook session for an ethical jewelry brand, focusing on high-contrast lighting, product detail, and brand identity.' },
  // Events & Concerts
  { id: 25, category: 'Events & Concerts', title: 'Live Performance',  image: '/Featured/Events/_MG_1407.jpg',   size: 'large',  desc: 'Atmospheric coverage of live performance — movement, energy, and the decisive moment.' },
  { id: 26, category: 'Events & Concerts', title: 'Live Performance',  image: '/Featured/Events/_MG_1468.jpg',   size: 'medium', desc: 'Atmospheric coverage of live performance — movement, energy, and the decisive moment.' },
  { id: 27, category: 'Events & Concerts', title: 'Concert & Performance Coverage',  image: '/Featured/Events/_MG_4826.JPG',   size: 'medium', desc: 'Low-light, high-contrast performance photography capturing artist engagement and real-time audience connection.' },
  { id: 28, category: 'Events & Concerts', title: 'Concert & Performance Coverage',  image: '/Featured/Events/_MG_4840.JPG',   size: 'large',  desc: 'Low-light, high-contrast performance photography capturing artist engagement and real-time audience connection.' },
  { id: 29, category: 'Events & Concerts', title: 'Album Premiere Documentation',    image: '/Featured/Events/_MG_5294.JPG',   size: 'large',  desc: 'Documentary coverage for creative album launch, emphasizing intimate venue tone, artist presence, and crowd energy.' },
  { id: 30, category: 'Events & Concerts', title: 'Album Premiere Documentation',    image: '/Featured/Events/_MG_5328.JPG',   size: 'medium', desc: 'Documentary coverage for creative album launch, emphasizing intimate venue tone, artist presence, and crowd energy.' },
  { id: 31, category: 'Events & Concerts', title: 'Experiential Nightlife',          image: '/Featured/Events/_MG_5896.jpg',   size: 'medium', desc: 'High-impact nightlife and lifestyle branding photography documenting curated cultural events, movement, and authentic guest interactions.' },
  { id: 32, category: 'Events & Concerts', title: 'Experiential Nightlife',          image: '/Featured/Events/_MG_5858.jpg',   size: 'large',  desc: 'High-impact nightlife and lifestyle branding photography documenting curated cultural events, movement, and authentic guest interactions.' },
];

export const CATEGORIES = ['All', 'Portraiture', 'Editorial', 'Commercial', 'Events & Concerts'];

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
