import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface CountdownProps {
  targetDate: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24));
      const minutes = Math.max(0, Math.floor((difference / 1000 / 60) % 60));
      const seconds = Math.max(0, Math.floor((difference / 1000) % 60));

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center w-full px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm sm:max-w-md bg-[#faf5f4]/95 backdrop-blur-md rounded-t-[12rem] rounded-b-[2.5rem] pt-20 sm:pt-24 pb-14 sm:pb-16 px-8 shadow-2xl border border-white/60 flex flex-col items-center text-center"
      >
        <h2 className="font-display text-5xl sm:text-6xl text-brand-gold mb-3 leading-tight drop-shadow-sm">
          Forever <br />
          <span className="text-4xl sm:text-5xl ml-8">Begins In</span>
        </h2>
        
        <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-stone-800 font-sans font-bold mb-12 sm:mb-16">
          A Grace-Filled Occasion
        </p>

        <div className="flex flex-col items-center gap-6 w-full">
          {/* Days & Hours */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 w-full">
            <div className="flex flex-col items-center w-20">
              <span className="text-4xl sm:text-5xl font-serif text-stone-800 tracking-wide">
                {timeLeft.days}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-600 mt-2 font-medium">
                Days
              </span>
            </div>
            <span className="text-3xl text-stone-800 font-serif pb-6">:</span>
            <div className="flex flex-col items-center w-20">
              <span className="text-4xl sm:text-5xl font-serif text-stone-800 tracking-wide">
                {timeLeft.hours}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-600 mt-2 font-medium">
                Hours
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center w-full max-w-[220px] justify-center gap-3 my-1">
            <div className="h-[1px] bg-stone-300/80 flex-1" />
            <div className="w-1.5 h-1.5 bg-stone-400/80 rotate-45" />
            <div className="h-[1px] bg-stone-300/80 flex-1" />
          </div>

          {/* Mins & Secs */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 w-full">
            <div className="flex flex-col items-center w-20">
              <span className="text-4xl sm:text-5xl font-serif text-stone-800 tracking-wide">
                {timeLeft.minutes}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-600 mt-2 font-medium">
                Mins
              </span>
            </div>
            <span className="text-3xl text-stone-800 font-serif pb-6">:</span>
            <div className="flex flex-col items-center w-20">
              <span className="text-4xl sm:text-5xl font-serif text-stone-800 tracking-wide">
                {timeLeft.seconds}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-600 mt-2 font-medium">
                Secs
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
