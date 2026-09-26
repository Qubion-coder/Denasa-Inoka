import { motion } from 'motion/react';
import { Music, VolumeX, Heart } from 'lucide-react';
import { Hero } from './Hero';
import { FloatingPetals } from './FloatingPetals';
import { CoupleDetails } from './CoupleDetails';
import { CeremonyDetails } from './CeremonyDetails';


import { Location } from './Location';
import { Timeline } from './Timeline';
import { Countdown } from './Countdown';
import { RSVPForm } from './RSVPForm';
import { WishesSection } from './WishesSection';
import { InviteeBanner } from './InviteeBanner';
import { DeferredMount } from './DeferredMount';

interface InvitationContentProps {
  active: boolean;
  eventParam: string;
  fullInviteeName: string;
  eventLabel: string;
  weddingDate: Date;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export function InvitationContent({
  active,
  eventParam,
  fullInviteeName,
  eventLabel,
  weddingDate,
  isMusicPlaying,
  onToggleMusic,
}: InvitationContentProps) {
  if (!active) return null;

  const CardWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="py-12 sm:py-24 px-4 sm:px-8 w-full flex justify-center">
      <div className="relative w-full max-w-4xl bg-[#f9f7f3]/95 backdrop-blur-md rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-white overflow-hidden py-16 sm:py-24 px-4 sm:px-8">
        {/* Background Watermark Mandala - Clipped within card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[90vw] sm:w-[60vw] max-w-[500px] aspect-square pointer-events-none z-0">
          <img 
            src="/mandala_gold.png" 
            alt="Mandala Watermark" 
            className="w-full h-full object-contain opacity-15 mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative font-sans text-stone-800 bg-brand-lavender selection:bg-brand-plum/20"
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={onToggleMusic}
        className="fixed top-6 right-6 z-50 w-12 sm:w-14 h-12 sm:h-14 bg-white/70 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(176,137,104,0.15)] flex items-center justify-center border border-brand-lavender/50 text-brand-plum hover:scale-105 transition-all duration-300"
      >
        {isMusicPlaying ? (
          <Music className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </motion.button>

      <FloatingPetals />
      <Hero event={eventParam} inviteeName={fullInviteeName} />

      {fullInviteeName && (
        <DeferredMount active={active} delay={80}>
          <InviteeBanner inviteeName={fullInviteeName} eventLabel={eventLabel} />
        </DeferredMount>
      )}

      <DeferredMount active={active} delay={120} minHeight="40vh">
        <div className="bg-brand-lavender relative overflow-hidden">
          <CardWrapper>
            <CoupleDetails />
          </CardWrapper>
        </div>
      </DeferredMount>



      <DeferredMount active={active} delay={180} minHeight="40vh">
        <div className="bg-brand-lavender relative overflow-hidden">
          <CardWrapper>
            <CeremonyDetails event={eventParam} />
          </CardWrapper>
        </div>
      </DeferredMount>



      <DeferredMount active={active} delay={240} minHeight="40vh">
        <div className="bg-brand-lavender relative overflow-hidden">
          <CardWrapper>
            <Location event={eventParam} />
          </CardWrapper>
        </div>
      </DeferredMount>



      <DeferredMount active={active} delay={360} minHeight="20vh">
        <div className="bg-brand-lavender relative overflow-hidden">
          <CardWrapper>
            <Countdown targetDate={weddingDate} />
          </CardWrapper>
        </div>
      </DeferredMount>

      <DeferredMount active={active} delay={420} minHeight="30vh">
        <div className="bg-brand-lavender relative overflow-hidden">
          <CardWrapper>
            <RSVPForm inviteeName={fullInviteeName} eventName={eventLabel} eventParam={eventParam} />
          </CardWrapper>
        </div>
      </DeferredMount>

      <DeferredMount active={active} delay={480} minHeight="30vh">
        <div className="bg-brand-lavender relative overflow-hidden">
          <CardWrapper>
            <WishesSection eventParam={eventParam} inviteeName={fullInviteeName} />
          </CardWrapper>
        </div>
      </DeferredMount>

      <DeferredMount active={active} delay={520}>
        <footer className="py-12 bg-brand-lavender border-t border-brand-lavender/20 text-center relative overflow-hidden mt-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-lavender/10 blur-[80px] rounded-full pointer-events-none" />
          <Heart className="w-6 h-6 mx-auto mb-6 text-brand-plum fill-brand-lavender/20" />
          <p className="font-names text-4xl sm:text-5xl text-stone-800 mb-2">Thank you</p>
          <p className="text-stone-500 text-[10px] sm:text-xs mt-2 font-sans tracking-wider">
            Want a beautiful wedding website like this? Create yours with <a target="_blank" rel="noreferrer" className="text-brand-plum font-bold hover:text-stone-800 transition-colors underline decoration-brand-plum/30 underline-offset-4" href="https://wa.me/94707819074">invitemint</a>
          </p>
        </footer>
      </DeferredMount>
    </motion.div>
  );
}
