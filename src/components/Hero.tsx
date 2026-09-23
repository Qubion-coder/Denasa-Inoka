import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { FloatingPetals } from './FloatingPetals';

interface HeroProps {
  event?: string | null;
  inviteeName?: string;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}

function useIsTouchDevice() {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }, []);

  return touch;
}

export const Hero: React.FC<HeroProps> = ({ event = 'both', inviteeName }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();
  const useParallax = !reducedMotion && !isTouch;

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#D6C1BC' }}>

      {/* Card Background for Hero */}
      <div className="absolute inset-4 sm:inset-8 bg-[#f9f7f3]/95 backdrop-blur-md rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-white overflow-hidden z-0">
        {/* Background Watermark Mandala - Clipped within card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[120vw] sm:w-[80vw] max-w-[800px] aspect-square">
          <img
            src="/mandala_gold.png"
            alt="Mandala Watermark"
            className="w-full h-full object-contain opacity-40 mix-blend-multiply"
          />
        </div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 w-full max-w-6xl mt-8 sm:mt-16"
        style={useParallax ? { opacity } : undefined}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 text-stone-800 w-full mt-4 sm:mt-8 px-4 z-10 relative">

            {/* Newly added DI Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="mb-6 sm:mb-8 w-64 sm:w-80"
            >
              <img 
                src="/hero_logo.png" 
                alt="Denasa & Inoka Logo" 
                className="w-full h-auto drop-shadow-md"
              />
            </motion.div>

            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-stone-800/90 leading-loose text-center max-w-[85%] mx-auto pb-4">
              TOGETHER WITH OUR FAMILIES WE INVITE YOU TO CELEBRATE THE
            </p>



            <h1 className="font-display text-7xl sm:text-[7rem] lg:text-[8.5rem] text-stone-800 font-normal drop-shadow-[1px_1px_2px_rgba(0,0,0,0.1)] py-2 sm:py-4 -my-4 leading-none">
              Wedding
            </h1>

            <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm mt-8 sm:mt-12 space-y-4">
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] font-bold text-stone-800">
                NOVEMBER
              </p>

              <div className="w-full flex items-center justify-between border-y-[1px] border-stone-800/30 py-4 sm:py-5 px-2 sm:px-6 relative">
                <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-stone-800 w-1/3 text-right">
                  WEDNESDAY
                </p>
                <div className="w-1/3 flex justify-center text-center">
                  <p className="font-serif text-6xl sm:text-7xl text-stone-800 font-normal leading-none">
                    11
                  </p>
                </div>
                <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-stone-800 w-1/3 text-left">
                  AT 10:00 AM
                </p>
              </div>

              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] font-bold text-stone-800">
                2026
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 mt-8 sm:mt-10">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-stone-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-stone-800">
                  KING'S COURT
                </p>
              </div>
              <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-stone-800/80">
                CINNAMON LAKESIDE
              </p>
              <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-stone-800/80">
                COLOMBO 2
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] font-bold text-stone-800 mt-10 sm:mt-12">
              RECEPTION TO FOLLOW
            </p>

            <div className="mt-4 sm:mt-6 opacity-70">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22C12 22 17 18 17 13C17 10 14.5 8 12 8C9.5 8 7 10 7 13C7 18 12 22 12 22Z" />
                <path d="M12 8V2" />
                <path d="M9 5H15" />
              </svg>
            </div>
          </div>        </motion.div>
      </motion.div>

      <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-30">
        <div className="w-[1px] h-28 bg-gradient-to-b from-transparent via-brand-plum to-transparent" />
        <div className="bg-stone-900/90 backdrop-blur-md px-2.5 py-6 rounded-full border border-brand-plum/40 shadow-xl">
          <p className="writing-mode-vertical text-[11px] uppercase tracking-[0.7em] text-brand-rose font-bold font-sans">
            King's Court • Colombo 2
          </p>
        </div>
        <div className="w-[1px] h-28 bg-gradient-to-t from-transparent via-brand-plum to-transparent" />
      </div>

      <div className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-30">
        <div className="w-[1px] h-28 bg-gradient-to-b from-transparent via-brand-plum to-transparent" />
        <div className="bg-stone-900/90 backdrop-blur-md px-2.5 py-6 rounded-full border border-brand-plum/40 shadow-xl">
          <p className="writing-mode-vertical text-[11px] uppercase tracking-[0.7em] text-brand-rose font-bold font-sans rotate-180">
            Save the Date • November 2026
          </p>
        </div>
        <div className="w-[1px] h-28 bg-gradient-to-t from-transparent via-brand-plum to-transparent" />
      </div>

      <motion.div
        className="absolute bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.5em] text-stone-900 font-extrabold bg-gradient-to-r from-brand-rose via-white to-brand-rose px-5 py-2 rounded-full border border-brand-plum/40 backdrop-blur-md shadow-lg">
          Discover
        </span>
        <div className="w-[1px] h-6 sm:h-16 bg-gradient-to-b from-brand-plum to-transparent animate-bounce" />
      </motion.div>
    </div>
  );
};
