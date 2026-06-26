/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Calendar, UtensilsCrossed } from 'lucide-react';
import { HERO_IMAGE } from '../data';
import MagneticButton from './MagneticButton';

interface HeroProps {
  onReserveClick: () => void;
}

export default function Hero({ onReserveClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Maps scroll progress to vertical shift of the background
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex flex-col justify-between items-center bg-black"
    >
      {/* Parallax Background Container */}
      <motion.div 
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={HERO_IMAGE}
          alt="Aurelia Restaurant Atmosphere"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.05]"
        />
        {/* Cinematic atmospheric overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,152,53,0.1)_0%,transparent_70%)]" />
      </motion.div>

      {/* Top spacer */}
      <div className="h-20" />

      {/* Main Branding Center */}
      <motion.div
        style={{ opacity: opacityText }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 text-center flex flex-col items-center px-6"
      >
        {/* Michelin-Inspired Star Emblem Accent */}
        <motion.div
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, type: 'spring' }}
          className="flex gap-1 items-center justify-center text-gold-400 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <span className="w-2.5 h-2.5 bg-gold-400 rotate-45 mx-1 block" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
        </motion.div>

        {/* Brand Name Text Reveal */}
        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-neutral-100 font-extralight tracking-[0.25em] leading-tight select-none">
          AURELIA
        </h1>

        {/* Elegant Tagline */}
        <p className="font-mono text-xs md:text-sm tracking-[0.6em] text-gold-400 uppercase mt-4 mb-10 text-center font-light">
          A Gastronomic Atelier of Sensory Plating
        </p>

        {/* Interactive CTA Controls */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <MagneticButton
            onClick={() => {
              const menuSec = document.getElementById('menu');
              menuSec?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-transparent border border-gold-400/40 text-gold-400 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 w-56 hover:border-gold-400"
          >
            <UtensilsCrossed className="w-4 h-4" /> View Menu
          </MagneticButton>

          <MagneticButton
            onClick={onReserveClick}
            className="px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-medium rounded-full font-mono text-xs tracking-widest uppercase shadow-lg shadow-gold-500/10 w-56"
          >
            <Calendar className="w-4 h-4" /> Book Atelier Table
          </MagneticButton>
        </div>
      </motion.div>

      {/* Animated scroll down prompt */}
      <motion.a
        href="#about"
        style={{ opacity: opacityText }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="relative z-20 mb-8 flex flex-col items-center gap-2 group text-neutral-500 hover:text-gold-400 transition-colors duration-300 cursor-pointer"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase">Scroll to Discover</span>
        <ChevronDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
}
