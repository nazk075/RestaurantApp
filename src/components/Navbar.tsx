/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface NavbarProps {
  onReserveClick: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Signature', href: '#signature' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        id="main-navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-[#050505]/85 backdrop-blur-md border-b border-gold-500/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col group select-none">
            <span className="font-serif text-xl md:text-2xl tracking-[0.25em] text-neutral-100 group-hover:text-gold-400 transition-colors duration-300">
              AURELIA
            </span>
            <span className="font-mono text-[9px] tracking-[0.4em] text-gold-500/80 uppercase">
              Gastronomy Atelier
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-xs tracking-widest text-neutral-400 hover:text-gold-400 uppercase transition-colors duration-300 relative py-1"
                  whileHover={{ y: -1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <MagneticButton
              onClick={onReserveClick}
              className="px-6 py-2.5 bg-transparent border border-gold-400/30 text-gold-400 font-mono text-xs tracking-widest uppercase rounded-full"
            >
              Reserve Table <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-neutral-400 hover:text-gold-400 p-1 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-45 lg:hidden flex flex-col justify-center px-10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="font-serif text-3xl text-neutral-200 hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-6 pt-6 border-t border-neutral-900"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReserveClick();
                  }}
                  className="w-full py-4 px-6 bg-gold-500 hover:bg-gold-600 text-black font-mono tracking-widest text-xs uppercase flex items-center justify-center gap-3 rounded-full transition-colors font-medium"
                >
                  Reserve Table <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
