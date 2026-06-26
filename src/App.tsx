/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Particles from './components/Particles';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-neutral-100 font-sans selection:bg-gold-500/20 selection:text-gold-300 antialiased">
      
      {/* Brand Preloader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Main application wrapper, revealed after loading */}
      {!isLoading && (
        <div id="app-root-container" className="relative w-full">
          
          {/* Floating background particles */}
          <Particles />

          {/* Sticky Navigation */}
          <Navbar onReserveClick={scrollToReservation} />

          {/* Cinematic Hero */}
          <Hero onReserveClick={scrollToReservation} />

          {/* About / Heritage Story */}
          <About />

          {/* Signature Masterpieces */}
          <SignatureDishes />

          {/* Interactive full menu */}
          <Menu />

          {/* Image Grid / Lightbox */}
          <Gallery />

          {/* Testimonial Carousel */}
          <Testimonials />

          {/* Reservation desk form */}
          <Reservation />

          {/* Location details, map, and footer */}
          <Contact />
          
        </div>
      )}
    </div>
  );
}
