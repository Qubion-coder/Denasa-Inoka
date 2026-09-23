import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin, Heart, Sparkles, Palette } from 'lucide-react';

const RingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="15" r="5" />
    <path d="M12 10 L10 7 C10 5 14 5 14 7 Z" />
  </svg>
);

const LocationPinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

interface CeremonyDetailsProps {
  event?: string | null;
}

export const CeremonyDetails: React.FC<CeremonyDetailsProps> = ({ event = 'both' }) => {
  const isHomecoming = event === 'homecoming';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Premium ambient backdrop */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-brand-lavender/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col items-center justify-center gap-16 lg:gap-24">
        {/* Center: Text Content */}
        <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-brand-gold drop-shadow-sm mb-12 text-center">
              Wedding Timeline
            </h2>

            {/* Premium Timeline */}
            <div className="relative space-y-12 ml-10 sm:ml-12 border-l-[1.5px] border-brand-lavender/30 pl-10 sm:pl-12 py-4 w-full max-w-md">



              {/* Guest arrival */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <Clock className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-3 group-hover:text-brand-plum transition-colors duration-500 drop-shadow-sm">
                    Guest arrival
                  </h4>
                  <div className="space-y-1.5 text-stone-700 font-serif text-xl sm:text-2xl font-bold">
                    <p>
                      10:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Church Ceremony */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <RingIcon className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-3 group-hover:text-brand-plum transition-colors duration-500 drop-shadow-sm">
                    Poruwa Ceremony
                  </h4>
                  <div className="space-y-1.5 text-stone-700 font-serif text-xl sm:text-2xl font-bold">
                    <p>
                      11:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Reception */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <LocationPinIcon className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-3 group-hover:text-brand-plum transition-colors duration-500 drop-shadow-sm">
                    Reception
                  </h4>
                  <div className="space-y-1.5 text-stone-700 font-serif text-xl sm:text-2xl font-bold">
                    <p>
                      11:30 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
};
