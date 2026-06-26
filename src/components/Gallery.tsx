/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { galleryItems } from '../data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const categories = ['All', 'Ambiance', 'Culinary', 'Behind the Scenes'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight' && selectedIdx !== null) handleNext();
      if (e.key === 'ArrowLeft' && selectedIdx !== null) handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-neutral-900/50">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="font-mono text-[10px] tracking-[0.5em] text-gold-500 uppercase mb-3 block">
              The Aesthetic Atelier
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-100 font-light tracking-wide">
              Cinematic Visual Gallery
            </h2>
          </div>

          {/* Gallery categories filter */}
          <div className="flex flex-wrap gap-2 border-b border-neutral-900/80 pb-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-colors"
                >
                  <span className={isActive ? 'text-gold-400 font-semibold' : 'text-neutral-500 hover:text-neutral-300'}>
                    {cat}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeGalleryCategory"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento-like Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                id={`gallery-item-${item.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedIdx(idx)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-900/45 cursor-pointer shadow-lg"
              >
                {/* Blur backdrop & hover text reveal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 opacity-60 group-hover:opacity-90 group-hover:backdrop-blur-[3px] transition-all duration-500" />
                
                <img
                  src={item.image}
                  alt={item.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Micro hover icon */}
                <div className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-md rounded-full border border-gold-500/10 text-gold-400/80 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom caption block */}
                <div className="absolute bottom-6 left-6 right-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-mono text-[8px] tracking-[0.3em] text-gold-400 uppercase bg-gold-950/40 border border-gold-500/10 px-2.5 py-1 rounded-md mb-2 inline-block">
                    {item.category}
                  </span>
                  <p className="font-serif text-lg text-neutral-100 font-light group-hover:text-gold-100 transition-colors">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal Carousel */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            id="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
          >
            {/* Close handler */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-gold-400 border border-neutral-800 hover:border-gold-500/20 transition-all z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Carousel navigation controls */}
            <button
              onClick={handlePrev}
              className="absolute left-6 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-gold-400 border border-neutral-800 transition-all z-30 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-gold-400 border border-neutral-800 transition-all z-30 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Lightbox Active Content */}
            <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center">
              <motion.img
                key={selectedIdx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                src={filteredItems[selectedIdx].image}
                alt={filteredItems[selectedIdx].caption}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[72vh] object-contain rounded-2xl border border-neutral-900/80 shadow-2xl"
              />

              {/* Bottom detail card */}
              <div className="mt-4 text-center">
                <span className="font-mono text-[9px] tracking-widest text-gold-500 uppercase">
                  {filteredItems[selectedIdx].category}
                </span>
                <p className="font-serif text-xl text-neutral-200 mt-1 font-light">
                  {filteredItems[selectedIdx].caption}
                </p>
                <p className="font-mono text-[10px] text-neutral-600 mt-1.5 tracking-wider">
                  IMAGE {selectedIdx + 1} OF {filteredItems.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
