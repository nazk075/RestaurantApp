/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChefHat, Flame, Info } from 'lucide-react';
import { signatureDishes } from '../data';

export default function SignatureDishes() {
  return (
    <section id="signature" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-neutral-900/40">
      {/* Background warm lights */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-amber-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
          <span className="font-mono text-[10px] tracking-[0.5em] text-gold-500 uppercase mb-3 block">
            The Atelier Masterpieces
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-100 font-light tracking-wide">
            Chef’s Signature Creations
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-5" />
          <p className="text-neutral-500 text-sm mt-4 font-light">
            A precise trilogy of our highly celebrated gastronomy, reimagining texture, scent, and temperature.
          </p>
        </div>

        {/* Alternating Dishes Cards */}
        <div className="flex flex-col gap-24 md:gap-32">
          {signatureDishes.map((dish, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={dish.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Image Block with hover effects & parallax container */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-3xl aspect-[4/3] group border border-neutral-900/80 cursor-pointer"
                  >
                    {/* Dark gradient mapping inside the card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-60" />
                    
                    {/* Parallax moving image on hover */}
                    <img
                      src={dish.image}
                      alt={dish.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Price Tag Floating Overlay */}
                    <div className="absolute top-6 right-6 z-20">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="px-5 py-2.5 bg-[#050505]/90 border border-gold-400/30 text-gold-400 font-mono text-sm font-medium tracking-widest uppercase rounded-full shadow-lg"
                      >
                        {dish.price}
                      </motion.div>
                    </div>

                    {/* Floating mini info block */}
                    <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-lg text-[9px] font-mono tracking-widest text-gold-400 uppercase border border-gold-500/10">
                        <ChefHat className="w-3 h-3 text-gold-400" /> Curated Plating
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-lg text-[9px] font-mono tracking-widest text-gold-400 uppercase border border-gold-500/10">
                        <Flame className="w-3 h-3 text-gold-400" /> Molecular Physics
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Narrative Details Block */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col"
                  >
                    <span className="font-mono text-[9px] tracking-[0.4em] text-gold-500 uppercase mb-2">
                      {dish.tagline}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-neutral-100 font-light mb-4 group-hover:text-gold-400 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-6">
                      {dish.description}
                    </p>

                    {/* Ingredients chip reveal */}
                    <div className="border-t border-neutral-900 pt-6">
                      <h5 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mb-4 flex items-center gap-2">
                        <Info className="w-3.5 h-3.5 text-gold-500/60" /> Culinary Composition
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {dish.ingredients.map((ing) => (
                          <span
                            key={ing}
                            className="px-3.5 py-1.5 bg-neutral-950 border border-neutral-900 rounded-full text-xs text-neutral-300 font-mono tracking-wider hover:border-gold-400/40 hover:text-gold-400 transition-all duration-300"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
