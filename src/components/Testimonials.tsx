/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="relative py-24 bg-black overflow-hidden border-t border-neutral-900/40">
      {/* Subtle gold spotlight background */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-20">
        
        {/* Quote Accent */}
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-neutral-950/80 border border-gold-500/10 rounded-full text-gold-400">
            <Quote className="w-6 h-6 rotate-180" />
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative min-h-[250px] md:min-h-[200px] flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col items-center max-w-3xl"
            >
              {/* Star Ratings */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[activeIdx].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Critic Review Text */}
              <blockquote className="font-serif text-lg md:text-2xl text-neutral-200 font-light italic leading-relaxed mb-6">
                "{testimonials[activeIdx].review}"
              </blockquote>

              {/* Author Credits */}
              <div>
                <cite className="not-italic font-serif text-lg text-neutral-100 font-medium block">
                  {testimonials[activeIdx].name}
                </cite>
                <span className="font-mono text-[9px] tracking-[0.25em] text-gold-500 uppercase mt-1 block">
                  {testimonials[activeIdx].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Indicators */}
        <div className="flex justify-between items-center mt-12 max-w-xs mx-auto">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-500 hover:text-gold-400 hover:border-gold-500/20 transition-all cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeIdx === idx ? 'w-6 bg-gold-400' : 'w-1.5 bg-neutral-800 hover:bg-neutral-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-500 hover:text-gold-400 hover:border-gold-500/20 transition-all cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
