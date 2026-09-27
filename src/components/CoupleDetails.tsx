import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-lavender/15 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />



      <div className="flex flex-col items-center justify-center gap-12 sm:gap-16 relative z-10 w-full min-h-[50vh] py-8">
        {/* Groom Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center w-full flex flex-col items-center"
        >
          <div className="mb-2 flex flex-col items-center">
            <p className="text-stone-700 font-['Cinzel'] font-semibold uppercase tracking-[0.15em] text-xs sm:text-sm drop-shadow-sm mb-2">Son of</p>
            <p className="text-stone-700 font-['Cinzel'] font-semibold uppercase tracking-[0.15em] text-[10px] sm:text-xs drop-shadow-sm leading-[1.8] max-w-[90%] sm:max-w-md mx-auto">Mr. Karunasena Abeysinghe &<br />Mrs. Sirima Abeysinghe</p>
            <h3 className="text-6xl sm:text-7xl font-display text-brand-gold drop-shadow-[1px_2px_2px_rgba(0,0,0,0.3)] mt-6">Denasa</h3>
          </div>
        </motion.div>

        {/* Bride Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center w-full flex flex-col items-center"
        >
          <div className="mb-2 flex flex-col items-center">
            <p className="text-stone-700 font-['Cinzel'] font-semibold uppercase tracking-[0.15em] text-xs sm:text-sm drop-shadow-sm mb-2">Daughter of</p>
            <p className="text-stone-700 font-['Cinzel'] font-semibold uppercase tracking-[0.15em] text-[10px] sm:text-xs drop-shadow-sm leading-[1.8] max-w-[90%] sm:max-w-md mx-auto">Late Mr. Francis Malawige &<br />Mrs. Prema Witharana Pathirana</p>
            <h3 className="text-6xl sm:text-7xl font-display text-brand-gold drop-shadow-[1px_2px_2px_rgba(0,0,0,0.3)] mt-6">Inoka</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
