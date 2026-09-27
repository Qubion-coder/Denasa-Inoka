import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

interface InviteeBannerProps {
  inviteeName: string;
  eventLabel: string;
}

export const InviteeBanner: React.FC<InviteeBannerProps> = ({ inviteeName, eventLabel }) => {
  const params = new URLSearchParams(window.location.search);
  const tableParam = params.get('table');

  return (
    <div className="w-full bg-gradient-to-r from-brand-rose/40 via-brand-rose/80 to-brand-rose/40 border-y border-brand-lavender/30 py-12 px-6 relative overflow-hidden shadow-sm">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-4 h-4 text-brand-plum animate-pulse" />
            <span className="text-brand-plum uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-xs font-bold drop-shadow-sm">
              Invitation
            </span>
            <Sparkles className="w-4 h-4 text-brand-plum animate-pulse" />
          </div>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-sans capitalize tracking-[0.2em] sm:tracking-[0.3em] font-bold text-stone-800 mb-6 drop-shadow-sm px-4 leading-relaxed">
            {inviteeName}
          </h2>

          <div className="flex items-center gap-4 justify-center max-w-xl mx-auto">
            <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-plum/40" />
            <p className="text-stone-600 font-serif italic text-lg sm:text-xl px-4">
              Together with our families we warmly invite you to celebrate with us!
            </p>
            <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-plum/40" />
          </div>

          {tableParam ? (
            <div className="mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/60 border border-brand-lavender/60 shadow-sm backdrop-blur-sm group hover:border-brand-plum/40 transition-colors">
              <span className="text-stone-500 uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold">
                Table
              </span>
              <div className="w-[1px] h-5 bg-brand-plum/20 group-hover:bg-brand-plum/40 transition-colors" />
              <span className="font-display text-2xl sm:text-3xl text-brand-gold leading-none pt-1 pr-1">
                {tableParam}
              </span>
            </div>
          ) : (
            <Heart className="w-5 h-5 text-brand-plum mt-6 fill-brand-lavender/20 animate-pulse" />
          )}
        </motion.div>
      </div>
    </div>
  );
};
