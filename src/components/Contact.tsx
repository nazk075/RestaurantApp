/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const infoItems = [
    {
      icon: <MapPin className="w-5 h-5 text-gold-400" />,
      label: 'Atelier Address',
      value: '18 Place des Vosges, 75004 Paris, France',
    },
    {
      icon: <Clock className="w-5 h-5 text-gold-400" />,
      label: 'Opening Hours',
      value: 'Tuesday – Saturday \nLunch: 12:00 – 14:30\nDinner: 18:30 – 23:30',
      note: 'Closed Sunday & Monday',
    },
    {
      icon: <Phone className="w-5 h-5 text-gold-400" />,
      label: 'Direct Concierge Desk',
      value: '+33 1 42 78 51 45',
    },
    {
      icon: <Mail className="w-5 h-5 text-gold-400" />,
      label: 'Inquiries',
      value: 'concierge@aurelia-atelier.com',
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden border-t border-neutral-900/40">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Information */}
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] tracking-[0.5em] text-gold-500 uppercase mb-3 block">
              Join Our World
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-100 font-light tracking-wide mb-6">
              Establishment & Hours
            </h2>
            <p className="text-neutral-500 text-sm font-light leading-relaxed mb-12">
              Walk-ins are generally not permitted as ingredients are procured daily based on verified active reservation counts. For large parties or private atelier buyouts, please email our events manager directly.
            </p>

            {/* List of Contact Items */}
            <div className="flex flex-col gap-8">
              {infoItems.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-xl text-gold-400">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mb-1">
                      {item.label}
                    </h5>
                    <p className="font-serif text-base text-neutral-200 whitespace-pre-line font-light leading-relaxed">
                      {item.value}
                    </p>
                    {item.note && (
                      <span className="text-[10px] font-mono text-gold-500/70 uppercase tracking-wider mt-1 block">
                        {item.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-neutral-900/60">
              <h6 className="font-mono text-[9px] tracking-[0.3em] text-neutral-500 uppercase mb-4">
                Digital Chronicles
              </h6>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-3 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-gold-400 hover:border-gold-500/20 transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-gold-400 hover:border-gold-500/20 transition-all"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Styled Map Mockup */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video lg:aspect-auto lg:h-[550px] w-full rounded-3xl overflow-hidden border border-neutral-900/80 bg-neutral-950/40 p-8 flex flex-col justify-between"
            >
              {/* Decorative grid pattern mimicking high-tech maps */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              {/* Gold gradient glows */}
              <div className="absolute top-1/2 left-1/3 w-[150px] h-[150px] bg-gold-500/10 rounded-full blur-[40px] pointer-events-none" />

              {/* Abstract Map Roads Vector Graphics */}
              <svg className="absolute inset-0 w-full h-full text-neutral-900/30 opacity-70 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="0%" x2="10%" y2="100%" stroke="currentColor" strokeWidth="2" />
                <line x1="45%" y1="0%" x2="45%" y2="100%" stroke="currentColor" strokeWidth="1.5" />
                <line x1="85%" y1="0%" x2="85%" y2="100%" stroke="currentColor" strokeWidth="1" />
                
                <line x1="0%" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeWidth="1" />
                <line x1="0%" y1="55%" x2="100%" y2="55%" stroke="currentColor" strokeWidth="2" />
                <line x1="0%" y1="80%" x2="100%" y2="80%" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Seine River Curve Accent */}
                <path d="M 0,350 Q 250,250 500,450 T 1000,380" fill="none" stroke="rgba(212, 152, 53, 0.08)" strokeWidth="45" />
              </svg>

              {/* Top map info */}
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-gold-400 uppercase">
                    ATELIER COORDINATES
                  </span>
                  <p className="font-mono text-xs text-neutral-400 mt-1">
                    48.8553° N, 2.3655° E
                  </p>
                </div>
                <div className="px-3 py-1.5 bg-black/80 rounded-lg border border-neutral-800 text-[9px] font-mono tracking-wider text-neutral-400 uppercase flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-gold-500 animate-spin-slow" /> Paris IV
                </div>
              </div>

              {/* Breathing Pins Spotlight Pin */}
              <div className="absolute left-[45%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                {/* Outer concentric pulsing ring */}
                <motion.div
                  animate={{ scale: [1, 2.5], opacity: [0.7, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
                  className="absolute w-12 h-12 rounded-full border border-gold-400 bg-gold-500/10 pointer-events-none"
                />
                {/* Middle ring */}
                <motion.div
                  animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5, ease: 'easeOut' }}
                  className="absolute w-8 h-8 rounded-full border border-gold-500 bg-gold-500/5 pointer-events-none"
                />
                {/* Core Pin */}
                <div className="w-3.5 h-3.5 bg-gold-400 rounded-full border-2 border-black relative z-30 shadow-lg shadow-gold-500/50" />
                
                {/* Tooltip over pin */}
                <div className="bg-black border border-gold-500/20 px-3 py-1.5 rounded-lg text-[9px] font-mono tracking-widest uppercase mt-2 shadow-xl text-neutral-200">
                  AURELIA ATELIER
                </div>
              </div>

              {/* Bottom map metadata */}
              <div className="relative z-10 mt-auto flex justify-between items-end">
                <p className="text-[10px] font-mono text-neutral-600 max-w-xs leading-relaxed uppercase">
                  Map mock represents Place des Vosges, 4th Arrondissement. Near Le Marais.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-gold-400 text-[10px] font-mono tracking-widest uppercase rounded-lg transition-all"
                >
                  Get Directions
                </a>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Legal and fine print footer block */}
        <div className="mt-20 pt-8 border-t border-neutral-900/60 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            © 2026 Aurelia Gastronomy Atelier. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Booking Terms</a>
          </div>
        </div>

      </div>
    </section>
  );
}
