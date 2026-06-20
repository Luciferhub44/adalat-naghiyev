import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { PORTFOLIO_ITEMS, CATEGORIES } from '../data/constants';

const Portfolio = ({ setSelectedItem }) => {
  const [activeFolder, setActiveFolder] = useState(null);

  const folders = CATEGORIES.filter(cat => cat !== 'All').map(cat => {
    const items = PORTFOLIO_ITEMS.filter(item => item.category === cat);
    return { name: cat, coverItem: items[0], count: items.length };
  }).filter(f => f.count > 0);

  const currentItems = activeFolder
    ? PORTFOLIO_ITEMS.filter(item => item.category === activeFolder)
    : [];

  return (
    <section id="work" className="py-24 md:py-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-luxury-gold" />
              <motion.p
                key={activeFolder || 'root'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold"
              >
                {activeFolder ? `Archive / ${activeFolder}` : 'Selected Work'}
              </motion.p>
            </div>
            <motion.h2
              key={activeFolder || 'root-title'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl"
            >
              {activeFolder ?? 'Collections'}
            </motion.h2>
          </div>

          <AnimatePresence>
            {activeFolder && (
              <motion.button
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                onClick={() => setActiveFolder(null)}
                className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-luxury-cream/40 hover:text-luxury-gold transition-colors group cursor-pointer mb-1"
              >
                <ChevronLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                All Collections
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">

          {/* Folder view */}
          {!activeFolder && (
            <motion.div
              key="folders"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {folders.map((folder, i) => (
                <motion.div
                  key={folder.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group cursor-pointer"
                  onClick={() => setActiveFolder(folder.name)}
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-white/5">
                    {folder.coverItem && (
                      <img
                        src={folder.coverItem.image}
                        alt={folder.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    {/* Frame count */}
                    <div className="absolute top-4 right-4 bg-luxury-black/80 border border-white/10 px-3 py-1.5">
                      <p className="text-[8px] uppercase tracking-[0.3em] text-luxury-gold">{folder.count} Frames</p>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl md:text-3xl group-hover:text-luxury-gold transition-colors duration-400">
                      {folder.name}
                    </h3>
                    <div className="w-7 h-7 border border-luxury-cream/10 group-hover:border-luxury-gold flex items-center justify-center transition-colors duration-300">
                      <ChevronLeft className="w-3 h-3 rotate-180 text-luxury-cream/20 group-hover:text-luxury-gold transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Moodboard view */}
          {activeFolder && (
            <motion.div
              key="moodboard"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4"
            >
              {currentItems.map((item, i) => (
                <motion.div
                  key={`${item.id}-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-white/5 hover:border-luxury-gold/30 transition-all duration-500 bg-white/5"
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto block opacity-85 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Hover caption */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-luxury-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <p className="text-luxury-cream text-xs font-serif">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
