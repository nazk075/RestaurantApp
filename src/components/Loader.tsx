/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Allow complete state to linger for smooth transition
          return 100;
        }
        // Randomly increment to simulate a premium loading process
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="app-loader"
        className="fixed inset-0 bg-[#030303] z-[9999] flex flex-col items-center justify-between p-8 md:p-16 select-none"
        exit={{ 
          y: '-100%',
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
        }}
      >
        {/* Top brand details */}
        <div className="w-full flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono">
          <span>ATELIER AURELIA</span>
          <span>EST. 2026</span>
        </div>

        {/* Center elegant reveal */}
        <div className="text-center flex flex-col items-center">
          <motion.div
            initial={{ letterSpacing: '0.1em', opacity: 0 }}
            animate={{ letterSpacing: '0.4em', opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="font-serif text-4xl md:text-7xl lg:text-8xl text-neutral-100 font-light"
          >
            AURELIA
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[11px] md:text-xs tracking-[0.6em] text-gold-400 font-mono uppercase mt-4"
          >
            gastronomy atelier
          </motion.div>
        </div>

        {/* Bottom progress bar & counter */}
        <div className="w-full max-w-md flex flex-col gap-3">
          <div className="flex justify-between items-end font-mono text-[10px] tracking-widest text-neutral-400">
            <span>PREPARING EXPERIENCE</span>
            <span className="text-gold-400 font-medium">{progress}%</span>
          </div>
          <div className="h-[2px] bg-neutral-900 w-full overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-600 to-gold-400"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
