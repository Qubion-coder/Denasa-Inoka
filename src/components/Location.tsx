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
      city: "Cinnamon Lakeside, Colombo 02",
      quote: `"A beautiful and sacred place where we will unite in holy matrimony and celebrate with joy and laughter."`,
      liveLocationUrl: "https://maps.app.goo.gl/Fe5XG2hPFopH6QVB8",
      imageUrl: "https://q-xx.bstatic.com/xdata/images/hotel/max500/647785418.jpg?k=d38abebc82b022305b1f621bab8e6c76e2c198397966c64f70a7c38083cd80b1&o=",
      label: "The Venue"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      {venues.map((venue) => (
        <motion.div 
          key={venue.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex flex-col items-center gap-8"
        >
          <div className="text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-brand-plum/40" />
              <span className="text-brand-plum uppercase tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                {venue.label}
              </span>
              <div className="w-10 h-[1px] bg-brand-plum/40" />
            </div>
            
            <div className="flex flex-col items-center gap-4 mt-2">
              <div className="w-12 h-12 bg-stone-50 rounded-full border border-brand-lavender/40 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <MapPin className="text-brand-plum w-5 h-5" />
              </div>
              <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.35em] font-bold text-stone-800 drop-shadow-sm text-center leading-relaxed mt-2 max-w-sm">
                {venue.city}
              </p>
              
              <a
                href={venue.liveLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-stone-800 text-brand-rose px-8 py-3 rounded-full font-sans tracking-[0.2em] text-xs uppercase hover:bg-stone-900 shadow-md hover:shadow-lg transition-all mt-6 active:scale-95 group"
              >
                <Navigation className="w-4 h-4 text-brand-plum group-hover:rotate-45 transition-transform duration-300" />
                Map
              </a>
            </div>
          </div>
          
          <div className="w-full max-w-2xl mt-4 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white relative aspect-video group">
            <div className="absolute inset-0 bg-brand-lavender/10 mix-blend-multiply pointer-events-none z-20 group-hover:opacity-0 transition-opacity duration-1000" />
            <img
              src={venue.imageUrl}
              alt={`${venue.name} Location`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-105"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
