/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Reservation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const guestCounts = [1, 2, 3, 4, 5, 6, 8];

  const timeSlots = [
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !date || !time) return;

    setIsSubmitting(true);
    // Simulate luxury API booking response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setGuests(2);
    setNotes('');
    setIsSubmitted(false);
  };

  return (
    <section id="reservation" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-neutral-900/40">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-20">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-gold-500/10 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="booking-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Header text */}
                <div className="text-center mb-10 flex flex-col items-center">
                  <span className="font-mono text-[9px] tracking-[0.5em] text-gold-500 uppercase mb-3 block">
                    The Salon Atelier
                  </span>
                  <h2 className="font-serif text-2xl md:text-4xl text-neutral-100 font-light tracking-wide mb-3">
                    Reserve Your Gastronomy Stage
                  </h2>
                  <p className="text-neutral-500 text-xs md:text-sm max-w-lg font-light leading-relaxed">
                    Seats are incredibly limited. Secure your booking below to embark on our bespoke sensory dining sequence.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Guest count selector */}
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-3 block flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-gold-500" /> Number of Guests
                    </label>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {guestCounts.map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setGuests(num)}
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-xl border font-mono text-xs transition-all flex items-center justify-center ${
                            guests === num
                              ? 'bg-gold-500 border-gold-400 text-black font-semibold shadow-lg shadow-gold-500/10'
                              : 'bg-neutral-950/60 border-neutral-900 text-neutral-400 hover:border-neutral-800'
                          }`}
                        >
                          {num === 8 ? '8+' : num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time Picker Group */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    <div>
                      <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-3 block flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-gold-500" /> Preferred Date
                      </label>
                      <input
                        id="reserve-date-input"
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-neutral-950/60 border border-neutral-900 focus:border-gold-500/50 text-neutral-100 placeholder-neutral-600 rounded-xl px-5 py-3.5 text-sm outline-none transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-3 block flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-gold-500" /> Seating Session
                      </label>
                      <div className="relative">
                        <select
                          id="reserve-time-select"
                          required
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full bg-neutral-950/60 border border-neutral-900 focus:border-gold-500/50 text-neutral-100 rounded-xl px-5 py-3.5 text-sm outline-none transition-all font-mono appearance-none"
                        >
                          <option value="" disabled className="bg-neutral-950 text-neutral-500">Select sitting hour</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot} className="bg-neutral-950 text-neutral-200">{slot} PM</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500 font-mono text-[10px]">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Contact Credentials */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
                    <div className="sm:col-span-1">
                      <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-3 block">
                        Full Name
                      </label>
                      <input
                        id="reserve-name-input"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-neutral-950/60 border border-neutral-900 focus:border-gold-500/50 text-neutral-100 placeholder-neutral-700 rounded-xl px-5 py-3.5 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-3 block">
                        Email Address
                      </label>
                      <input
                        id="reserve-email-input"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-neutral-950/60 border border-neutral-900 focus:border-gold-500/50 text-neutral-100 placeholder-neutral-700 rounded-xl px-5 py-3.5 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-3 block">
                        Phone Number
                      </label>
                      <input
                        id="reserve-phone-input"
                        type="tel"
                        required
                        placeholder="+33 61 234 567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-neutral-950/60 border border-neutral-900 focus:border-gold-500/50 text-neutral-100 placeholder-neutral-700 rounded-xl px-5 py-3.5 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Allergen/Special Notes */}
                  <div className="mt-2">
                    <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-3 block flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-gold-500" /> Allergens or Special requests (Optional)
                    </label>
                    <textarea
                      id="reserve-notes-input"
                      rows={3}
                      placeholder="e.g., severe seafood allergies, vegan adjustments, wedding anniversary, private booth request"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-neutral-950/60 border border-neutral-900 focus:border-gold-500/50 text-neutral-100 placeholder-neutral-700 rounded-xl px-5 py-3.5 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="mt-4 flex justify-center">
                    <MagneticButton
                      id="btn-submit-reservation"
                      type="submit"
                      className="px-10 py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-semibold rounded-full font-mono text-xs tracking-widest uppercase shadow-xl shadow-gold-500/10 min-w-72 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="animate-spin h-3.5 w-3.5 border-2 border-black border-t-transparent rounded-full" />
                          CONFIRMING CODES...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          Request Reservation <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </MagneticButton>
                  </div>
                </form>
              </motion.div>
            ) : (
              // Success state container
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold-950/30 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-6 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-neutral-100 font-light mb-3">
                  Atelier Seating Requested
                </h3>
                <p className="font-mono text-xs text-gold-500 uppercase tracking-widest mb-6">
                  Reference: AUR-{(Math.random() * 9000 + 1000).toFixed(0)}
                </p>
                <div className="max-w-md bg-neutral-950/80 border border-neutral-900 rounded-2xl p-6 text-left text-xs text-neutral-400 font-light leading-relaxed flex flex-col gap-3 mb-8">
                  <p>
                    <strong>Guest:</strong> {name} ({guests} Guests)
                  </p>
                  <p>
                    <strong>Date & Session:</strong> {date} at {time} PM
                  </p>
                  <p className="border-t border-neutral-900/60 pt-3">
                    Thank you, {name}. A member of our concierge desk will contact you at <strong>{phone}</strong> or <strong>{email}</strong> within 3 hours to verify details and complete authorization.
                  </p>
                </div>
                
                <button
                  id="btn-reset-reservation"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-transparent border border-neutral-800 text-neutral-500 font-mono text-[10px] tracking-widest uppercase hover:text-gold-400 hover:border-gold-500/20 rounded-full transition-all"
                >
                  Book another session
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
