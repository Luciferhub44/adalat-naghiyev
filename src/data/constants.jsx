import React from 'react';
import { Users, Camera, Briefcase } from 'lucide-react';

export const PORTFOLIO_ITEMS = [
  { id: 1, category: 'Editorial', title: 'Julia Stachura', image: '/Featured works/Editorial/1.jpg', size: 'large', desc: 'Deep studio tones and deliberate stillness. A collaboration built around character, not performance.' },
  { id: 2, category: 'Film', title: 'Fine Art on Film', seed: 'film-1', size: 'small', desc: "Shot on analog. The grain is not an accident — it's the point. Slow, considered, irreversible." },
  { id: 3, category: 'Fashion & Runway', title: 'PhilDBrand Show', seed: 'fashion-1', size: 'medium', desc: 'Three floors. Rooftop golden hour. A collection that rewrote the archive and refused to explain itself.' },
  { id: 4, category: 'Brand', title: 'Wyrobnia Brand', seed: 'craft-1', size: 'small', desc: "Close-up, tactile, honest. Making visible the craft behind an independent maker's identity." },
  { id: 5, category: 'Brand', title: 'Afro Sasa Brass', seed: 'jewelry-1', size: 'medium', desc: 'Jewellery as language. An object-led visual world built from texture, skin, and cultural weight.' },
  { id: 6, category: 'Editorial', title: 'Character Study', image: '/Featured works/Editorial/2.jpg', size: 'large', desc: 'Translating identity into imagery through deep studio work.' },
  { id: 7, category: 'Film', title: 'Berlin Archive', seed: 'street-film', size: 'small', desc: 'Observations of light and movement captured on 35mm.' },
  { id: 8, category: 'Fashion & Runway', title: 'Rooftop Series', seed: 'fashion-2', size: 'medium', desc: 'Capturing the movement and energy of high fashion.' },
  { id: 9, category: 'Brand', title: 'Tactile Goods', seed: 'brand-1', size: 'small', desc: 'Visual identity for makers and independent brands.' },
  { id: 10, category: 'Editorial', title: 'MOMA Collab', image: '/Featured works/Editorial/4.jpg', size: 'large', desc: 'Museum-grade whitespace and deliberate composition.' },
  { id: 11, category: 'Film', title: 'Analog Soul', seed: 'film-2', size: 'medium', desc: 'The irreversible beauty of analog photography.' },
  { id: 12, category: 'Brand', title: 'Skin & Texture', seed: 'brand-2', size: 'small', desc: 'Object-led visual worlds built from cultural weight.' },
  { id: 13, category: 'Editorial', title: 'Spatial Dynamics', image: '/Featured works/Editorial/3.jpg', size: 'medium', desc: 'Exploring the relationship between form and architectural space.' },
  { id: 14, category: 'Editorial', title: 'Color Theory', image: '/Featured works/Editorial/5.jpg', size: 'small', desc: 'Vibrant contrasts and saturated tones in studio.' },
  { id: 15, category: 'Editorial', title: 'Motion Study', image: '/Featured works/Editorial/6.jpg', size: 'large', desc: 'Capturing movement and fluidity in a static frame.' },
  { id: 16, category: 'Editorial', title: 'Texture & Light', image: '/Featured works/Editorial/7.jpg', size: 'medium', desc: 'Close-ups emphasizing material and lighting.' },
  { id: 17, category: 'Editorial', title: 'The Subject', image: '/Featured works/Editorial/8.jpg', size: 'large', desc: 'Intimate portraiture focused on the gaze.' },
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

export const STATS = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Location Base', value: 'Poznań & Europe' },
  { label: 'Formats', value: 'Digital & Analog' },
  { label: 'Upcoming Exhibition', value: 'Urban Mosaic \'26' }
];
