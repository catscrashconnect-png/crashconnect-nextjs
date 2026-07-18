'use client';

import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] w-full items-end">
      <div className="absolute inset-0 gradient-veil" />
      <div className="relative z-10 w-full section-pad pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-6 text-xs uppercase tracking-[0.3em] text-cyan"
        >
          Intelligent Road Safety
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-balance text-[13vw] font-semibold leading-[0.92] tracking-tightest text-soft md:text-[7.5vw]"
        >
          The moment
          <br />
          after impact
          <br />
          <span className="text-muted">now has a response.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 max-w-lg text-base text-muted md:text-lg"
        >
          CrashConnect builds CATS — an AI system that detects accidents the
          instant they happen and alerts help before you have to ask for it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="#cta" variant="primary">
            Get CATS
          </MagneticButton>
          <MagneticButton href="#technology" variant="ghost">
            See how it works ↓
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.3em] text-muted md:right-10 md:block"
      >
        Scroll
      </motion.div>
    </section>
  );
}
