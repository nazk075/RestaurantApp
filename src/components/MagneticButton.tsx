/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, ReactNode, MouseEvent } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function MagneticButton({
  children,
  className = '',
  id,
  onClick,
  type = 'button'
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = el.getBoundingClientRect();
    
    // Calculate distance from center
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Apply magnetic pull limit (e.g., 35% of bounds)
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.button
        id={id}
        type={type}
        onClick={onClick}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        className={`relative overflow-hidden group select-none ${className}`}
      >
        {/* Subtle glowing golden background wipe on hover */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-600 to-gold-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.76,0,0.24,1]" />
        
        {/* Children content (with group-hover offset text color shifts) */}
        <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-300">
          {children}
        </span>
      </motion.button>
    </div>
  );
}
