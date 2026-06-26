/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Leaf, Info, Wine } from 'lucide-react';
import { menuItems } from '../data';
import { MenuItem } from '../types';

type CategoryFilter = 'all' | 'starters' | 'mains' | 'desserts' | 'drinks';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('starters');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories: { id: CategoryFilter; label: string; icon: string }[] = [
    { id: 'starters', label: 'Starters', icon: '✦' },
    { id: 'mains', label: 'Mains', icon: '⚜' },
    { id: 'desserts', label: 'Desserts', icon: '❦' },
    { id: 'drinks', label: 'Vintages & Elixirs', icon: '🍷' }
  ];

  // Derive unique tags from menu items for extra filter micro-interactions
  const allTags = Array.from(
    new Set(menuItems.flatMap((item) => item.tags || []))
  );

  // Filter items by category & chosen tag
  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = item.category === activeCategory;
    const tagMatch = !selectedTag || (item.tags && item.tags.includes(selectedTag));
    return categoryMatch && tagMatch;
  });

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-neutral-900/50">
      {/* Visual background lights */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-amber-700/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="font-mono text-[10px] tracking-[0.5em] text-gold-500 uppercase mb-3 block">
            ATELIER GASTRONOMY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-100 font-light tracking-wide">
            The Complete Tasting Menu
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-5" />
          <p className="text-neutral-500 text-sm mt-4 font-light">
            Indulge in our detailed offerings. Select a category below to explore individual compositions, rare vintages, and pastry creations.
          </p>
        </div>

        {/* Category Tab Selector with sliding motion indicator */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                id={`tab-${cat.id}`}
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedTag(null); // Reset tag filters when switching categories
                }}
                className="relative px-6 py-3 font-mono text-[11px] md:text-xs tracking-widest uppercase transition-colors duration-300 rounded-full z-10 border border-neutral-900"
              >
                {/* Background sliding indicator pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeMenuTab"
                    className="absolute inset-0 bg-gold-950/40 border border-gold-500/30 rounded-full z-[-1]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span className={`flex items-center gap-2 ${isActive ? 'text-gold-400 font-semibold' : 'text-neutral-400'}`}>
                  <span className="text-[10px] text-gold-500">{cat.icon}</span>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dietary/Tag Filters */}
        <AnimatePresence mode="wait">
          {allTags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex justify-center items-center flex-wrap gap-2 mb-12"
            >
              <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase mr-2 flex items-center gap-1">
                <Leaf className="w-3 h-3 text-gold-500/50" /> Filter:
              </span>
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 text-[10px] font-mono rounded-md border transition-all ${
                  !selectedTag 
                    ? 'bg-neutral-900 text-gold-400 border-gold-400/20' 
                    : 'bg-transparent text-neutral-500 border-neutral-950 hover:text-neutral-300'
                }`}
              >
                Show All
              </button>
              {allTags.map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 text-[10px] font-mono rounded-md border transition-all ${
                      isSelected 
                        ? 'bg-neutral-900 text-gold-400 border-gold-400/20' 
                        : 'bg-transparent text-neutral-500 border-neutral-950 hover:text-neutral-300'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                id={`menu-item-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="group p-6 rounded-2xl bg-neutral-950/40 border border-neutral-900/60 hover:bg-neutral-950/80 hover:border-gold-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top line with item name and price with dotted leader line */}
                  <div className="flex justify-between items-baseline gap-4 mb-2">
                    <h4 className="font-serif text-lg md:text-xl text-neutral-200 group-hover:text-gold-400 transition-colors duration-300">
                      {item.name}
                    </h4>
                    {/* Interactive dotted connector line */}
                    <span className="flex-1 border-b border-dashed border-neutral-900 group-hover:border-gold-500/20 transition-colors duration-300" />
                    <span className="font-mono text-sm md:text-base text-gold-400 group-hover:scale-105 transition-transform duration-300">
                      {item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed mb-4 group-hover:text-neutral-400 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Tags on bottom */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase bg-neutral-900/80 px-2.5 py-1 rounded-md border border-neutral-900 flex items-center gap-1 group-hover:border-gold-500/10 transition-colors duration-300"
                      >
                        <Sparkles className="w-2.5 h-2.5 text-gold-500/60" /> {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when filters don't match */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">
              No items match this selection
            </p>
            <button
              onClick={() => setSelectedTag(null)}
              className="mt-4 text-gold-400 font-mono text-xs underline uppercase tracking-widest hover:text-gold-300"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Michelin Note at bottom of Menu */}
        <div className="mt-16 text-center border-t border-neutral-900/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-xs font-mono tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <Wine className="w-4 h-4 text-gold-500" /> Chef Sommelier Pairing options available on demand
          </span>
          <span>
            * Tasting menus require full-table participation
          </span>
        </div>

      </div>
    </section>
  );
}
