import React from 'react';
import { Users, Camera, Briefcase } from 'lucide-react';

export const PORTFOLIO_ITEMS = [
  { id: 1, category: 'Editorial', title: 'Julia Stachura', image: '/Featured/Editorial/1.jpg', size: 'large', desc: 'Deep studio tones and deliberate stillness. A collaboration built around character, not performance.' },
  { id: 2, category: 'Film', title: 'Fine Art on Film', seed: 'film-1', size: 'small', desc: "Shot on analog. The grain is not an accident — it's the point. Slow, considered, irreversible." },
  { id: 3, category: 'Fashion & Runway', title: 'PhilDBrand Show', image: '/Featured/Renaissance/1.jpg', size: 'medium', desc: 'Three floors. Rooftop golden hour. A collection that rewrote the archive and refused to explain itself.' },
  { id: 4, category: 'Brand', title: 'Wyrobnia Brand', seed: 'craft-1', size: 'small', desc: "Close-up, tactile, honest. Making visible the craft behind an independent maker's identity." },
  { id: 5, category: 'Brand', title: 'Afro Sasa Brass', seed: 'jewelry-1', size: 'medium', desc: 'Jewellery as language. An object-led visual world built from texture, skin, and cultural weight.' },
  { id: 6, category: 'Editorial', title: 'Character Study', image: '/Featured/Editorial/2.jpg', size: 'large', desc: 'Translating identity into imagery through deep studio work.' },
  { id: 7, category: 'Film', title: 'Berlin Archive', seed: 'street-film', size: 'small', desc: 'Observations of light and movement captured on 35mm.' },
  { id: 8, category: 'Fashion & Runway', title: 'Rooftop Series', image: '/Featured/Renaissance/2.jpg', size: 'medium', desc: 'Capturing the movement and energy of high fashion.' },
  { id: 9, category: 'Brand', title: 'Tactile Goods', seed: 'brand-1', size: 'small', desc: 'Visual identity for makers and independent brands.' },
  { id: 10, category: 'Editorial', title: 'MOMA Collab', image: '/Featured/Editorial/4.jpg', size: 'large', desc: 'Museum-grade whitespace and deliberate composition.' },
  { id: 11, category: 'Film', title: 'Analog Soul', seed: 'film-2', size: 'medium', desc: 'The irreversible beauty of analog photography.' },
  { id: 12, category: 'Brand', title: 'Skin & Texture', seed: 'brand-2', size: 'small', desc: 'Object-led visual worlds built from cultural weight.' },
  { id: 13, category: 'Editorial', title: 'Spatial Dynamics', image: '/Featured/Editorial/3.jpg', size: 'medium', desc: 'Exploring the relationship between form and architectural space.' },
  { id: 14, category: 'Editorial', title: 'Color Theory', image: '/Featured/Editorial/5.jpg', size: 'small', desc: 'Vibrant contrasts and saturated tones in studio.' },
  { id: 15, category: 'Editorial', title: 'Motion Study', image: '/Featured/Editorial/6.jpg', size: 'large', desc: 'Capturing movement and fluidity in a static frame.' },
  { id: 16, category: 'Editorial', title: 'Texture & Light', image: '/Featured/Editorial/7.jpg', size: 'medium', desc: 'Close-ups emphasizing material and lighting.' },
  { id: 17, category: 'Editorial', title: 'The Subject', image: '/Featured/Editorial/8.jpg', size: 'large', desc: 'Intimate portraiture focused on the gaze.' },
  { id: 18, category: 'Fashion & Runway', title: 'Backstage Details', image: '/Featured/Renaissance/3.jpg', size: 'large', desc: 'The quiet moments before the rush of the runway.' },
  { id: 19, category: 'Fashion & Runway', title: 'Renaissance Line', image: '/Featured/Renaissance/4.jpg', size: 'medium', desc: 'Fluid fabrics and structural silhouettes.' },
  { id: 20, category: 'Fashion & Runway', title: 'The Walk', image: '/Featured/Renaissance/5.jpg', size: 'large', desc: 'A study in pacing and presentation.' },
  { id: 21, category: 'Fashion & Runway', title: 'Designer Portrait', image: '/Featured/Renaissance/6.jpg', size: 'small', desc: 'The creative mind behind the collection.' },
  { id: 22, category: 'Fashion & Runway', title: 'Final Look', image: '/Featured/Renaissance/7.jpg', size: 'medium', desc: 'The culmination of the runway show.' },
];

export const CATEGORIES = ['All', 'Editorial', 'Fashion & Runway', 'Brand', 'Film'];

export const SERVICES = [
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

export const TESTIMONIALS = [
  {
    quote: "Me and Adalat worked on a project with Old Town Vintage. What i liked the most was how every picture was an adventure. Adalat brought his vintage camera, and we had about 36 pictures total. That meant that we had to prepare everything to take one picture and move on to the next one in a different area. Working with Adalat didn't seem like work at all. When needed he knew how to make a joke when smile was necessary :) 100% recommend",
    author: "Wiktor Czechowski",
    type: "Old Town Vintage Project"
  },
  {
    quote: "Working with Adalat was an absolute pleasure. His creative eye, professionalism, and ability to capture genuine moments made the entire experience effortless and enjoyable.",
    author: "Angel Peres Affanchao",
    type: "Collaborator"
  },
  {
    quote: "Sesja była absolutnie wyjątkowa Klimat Poznania w połączeniu z paryskim stylem stworzył coś naprawdę magicznego. Czułam się bardzo kobieco, swobodnie i pięknie przez cały czas trwania i pełna pozytywnej energii, dzięki czemu stres zniknął już po kilku minutach. Zdjęcia wyszły przepięknie — naturalne, eleganckie i pełne emocji. Cała sesja była dopracowana w najmniejszych detalach, a efekt końcowy przerósł moje oczekiwania. To była nie tylko sesja zdjęciowa, ale też cudowne doświadczenie i chwila tylko dla siebie Z całego serca polecam każdej kobiecie, która chce poczuć się wyjątkowo i zobaczyć siebie w pięknym, subtelnym wydaniu",
    author: "Magdalena Wróż-Jankowska",
    type: "Editorial Session"
  },
  {
    quote: "My graduation photoshoot with Adalat was absolutely incredible! The inspiration, preparation, and execution all came together seamlessly. Throughout the shoot, Adalat kept the atmosphere relaxed while maintaining professionalism and keen attention to detail. He skillfully adjusted my gown, hair, and earrings—catching every little detail to ensure a flawless look. Each background was thoughtfully designed to match a specific outfit and mood—a doctor, a diva, and a curator. I can’t recommend him enough!",
    author: "Julia Stachura",
    type: "Graduation Photoshoot"
  }
];

export const STATS = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Location Base', value: 'Poznań & Europe' },
  { label: 'Formats', value: 'Digital & Analog' },
  { label: 'Upcoming Exhibition', value: 'Urban Mosaic \'26' }
];
