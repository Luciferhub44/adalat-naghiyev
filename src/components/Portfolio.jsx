import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { PORTFOLIO_ITEMS, CATEGORIES } from '../data/constants';

const Portfolio = ({ setSelectedItem }) => {
  const [activeFolder, setActiveFolder] = useState(null);

  // Group items by category to create "Folders"
  // Exclude 'All' as we want specific categorical folders
  const folders = CATEGORIES.filter(cat => cat !== 'All').map(cat => {
    const items = PORTFOLIO_ITEMS.filter(item => item.category === cat);
    return {
      name: cat,
      coverItem: items[0], // Use the first item as the folder cover
      count: items.length
    };
  }).filter(folder => folder.count > 0); // Only show folders that have content

  const currentItems = activeFolder 
    ? PORTFOLIO_ITEMS.filter(item => item.category === activeFolder)
    : [];

  return (
    <section id="work" className="py-32 px-6 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] mb-4">
              {activeFolder ? `Archive / ${activeFolder}` : 'Discovery'}
            </p>
            <h2 className="font-serif text-5xl md:text-7xl">
              {activeFolder ? activeFolder : 'Selected Work'}
            </h2>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeFolder && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={() => setActiveFolder(null)}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] hover:text-luxury-gold transition-colors pb-4 border-b border-luxury-cream/10"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Collections
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {!activeFolder ? (
            // --- LEVEL 1: FOLDERS VIEW ---
            <motion.div 
              key="folders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {folders.map((folder, index) => (
                <motion.div
                  key={folder.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setActiveFolder(folder.name)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-white/5 border border-luxury-cream/10">
                    {folder.coverItem && (
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                        src={folder.coverItem.image || `https://picsum.photos/seed/${folder.coverItem.seed}/800/600`} 
                        alt={folder.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Folder "Tab" aesthetic element */}
                    <div className="absolute top-4 right-4 bg-luxury-black/80 backdrop-blur-sm border border-white/10 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-luxury-gold">
                      {folder.count} Frames
                    </div>
                  </div>
                  <div className="flex justify-between items-center pr-4">
                     <h3 className="font-serif text-3xl group-hover:text-luxury-gold transition-colors">{folder.name}</h3>
                     <span className="text-luxury-cream/30 text-xs font-serif italic">Archive Collection</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // --- LEVEL 2: MOODBOARD VIEW ---
            <motion.div 
              key="moodboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
            >
              {currentItems.map((item, index) => {
                // Randomize margins slightly for a moodboard feel
                const offsets = ['mt-0', 'mt-4', 'mt-8', 'mt-2'];
                const offsetClass = offsets[index % offsets.length];
                
                return (
                  <motion.div
                    layoutId={`item-${item.id}`}
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`break-inside-avoid relative group cursor-pointer overflow-hidden border-4 border-white/5 bg-white/5 hover:border-luxury-gold/30 hover:z-10 transition-all duration-500 ${offsetClass}`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <img 
                      src={item.image || `https://picsum.photos/seed/${item.seed}/${item.size === 'large' ? '600/900' : '600/600'}`} 
                      alt={item.title}
                      className="w-full h-auto transition-all duration-700 opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Tape/Pin effect overlay to mimic a physical moodboard */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/10 backdrop-blur-md -rotate-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;