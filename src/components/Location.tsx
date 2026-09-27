import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

interface LocationProps {
  event?: string | null;
}

export const Location: React.FC<LocationProps> = ({ event = 'both' }) => {
  const venues = [
    {
      id: 'venue',
      name: "King's Court",
      liveLocationUrl: "https://maps.app.goo.gl/Fe5XG2hPFopH6QVB8",
      imageUrl: "https://q-xx.bstatic.com/xdata/images/hotel/max500/647785418.jpg?k=d38abebc82b022305b1f621bab8e6c76e2c198397966c64f70a7c38083cd80b1&o=",
      label: "The Venue"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {venues.map((venue) => (
        <div key={venue.id} className="flex flex-col items-center gap-10 w-full max-w-2xl mx-auto">
          
          {/* Embossed Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full bg-white/95 backdrop-blur-md p-10 sm:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(176,137,104,0.15)] border border-white/60 relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col w-full">
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="text-brand-plum uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold drop-shadow-sm">
                  {venue.label}
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-brand-plum/40 to-transparent" />
              </div>

              <div className="flex flex-row items-start gap-6 sm:gap-8 w-full">
                <div className="w-14 h-14 bg-stone-50 rounded-full border border-brand-lavender/50 shadow-sm flex items-center justify-center flex-shrink-0 mt-2">
                  <MapPin className="text-brand-plum w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-[1.75rem] sm:text-4xl text-stone-800 leading-snug">
                    King's Court, Cinnamon Lakeside, Colombo 02
                  </h3>
                </div>
              </div>
              
              <div className="mt-10 flex justify-center w-full">
                <a
                  href={venue.liveLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-stone-800 text-brand-rose px-10 py-4 rounded-full font-sans tracking-[0.2em] text-[11px] sm:text-xs uppercase hover:bg-stone-900 shadow-xl transition-all active:scale-95 group"
                >
                  <Navigation className="w-4 h-4 text-brand-plum group-hover:rotate-45 transition-transform duration-300" />
                  Map
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full aspect-[4/3] sm:aspect-video relative z-10 mt-4"
          >
            {/* The offset border */}
            <div className="absolute -inset-3 sm:-inset-4 border-[1.5px] sm:border-[2px] border-brand-lavender/50 rounded-[2.5rem] sm:rounded-[3rem] -z-10 translate-x-3 translate-y-3" />
            
            <div className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] relative">
              <img
                src={venue.imageUrl}
                alt={`${venue.name} Location`}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-in-out"
              />
            </div>
          </motion.div>

        </div>
      ))}
    </div>
  );
};
