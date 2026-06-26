/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Compass, Sparkles } from 'lucide-react';
import { CHEF_IMAGE } from '../data';

export default function About() {
  const values = [
    {
      icon: <Award className="w-5 h-5 text-gold-400" />,
      title: 'Michelin Standard',
      desc: 'Choreographing every recipe with artistic intent, extreme skill, and perfect timing.'
    },
    {
      icon: <Compass className="w-5 h-5 text-gold-400" />,
      title: 'Gastronomic Sourcing',
      desc: 'Collaborating directly with small heritage farms to source rare organic botanical variants.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold-400" />,
      title: 'Sensory Alchemy',
      desc: 'Structuring tasting cards to stimulate taste buds, texture feel, scent, and sight.'
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Block: Narrative text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <span className="font-mono text-[10px] tracking-[0.4em] text-gold-500 uppercase mb-3">
                Our Heritage & Vision
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-neutral-100 font-light leading-tight mb-8">
                Where Culinary Alchemy Meets Cinematic Art
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-neutral-400 font-light text-base md:text-lg leading-relaxed flex flex-col gap-6"
            >
              <p>
                At <span className="text-gold-400 font-normal">Aurelia</span>, we believe dining is not merely an act of consumption, but an intellectual choreography of sensory memories. Every plate is modeled as a living landscape, balancing classic European reduction formulas with cutting-edge culinary physics.
              </p>
              <p>
                Our curated salon seats only twenty guests nightly, offering an immersive, dimly-lit theater where cold steel tables, warm amber spotlights, and rare vintage pairings frame the ultimate gastronomic stage.
              </p>
            </motion.div>

            {/* Philosophy pillars list */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="p-5 rounded-2xl bg-neutral-950/40 border border-neutral-900/60"
                >
                  <div className="p-2 w-fit bg-gold-950/20 border border-gold-500/10 rounded-xl mb-4">
                    {v.icon}
                  </div>
                  <h4 className="font-serif text-base text-neutral-200 mb-2">{v.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Block: Chef representation */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-gold-500/15 group"
            >
              {/* Overlay golden shimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
              
              <img
                src={CHEF_IMAGE}
                alt="Chef Jean-Luc Plating"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Float narrative badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-gold-500/20"
                >
                  <p className="font-mono text-[9px] tracking-widest text-gold-400 uppercase mb-1">
                    EXECUTIVE HEAD CHEF
                  </p>
                  <h3 className="font-serif text-xl text-neutral-100 mb-1">
                    Jean-Luc Thorne
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    "Gastronomy is a fleeting sculpture. It exists only for a moment of flavor, but is etched forever in the imagination."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
