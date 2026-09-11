'use client';

import { useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const STATES = {
  IDLE: 'idle',
  WAITING: 'waiting',
  READY: 'ready',
  RESULT: 'result',
  TOO_SOON: 'too_soon',
};

export default function ReactionGame() {
  const [state, setState] = useState(STATES.IDLE);
  const [reactionMs, setReactionMs] = useState(null);
  const startTimeRef = useRef(0);
  const timeoutRef = useRef(null);

  const start = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setReactionMs(null);
    setState(STATES.WAITING);
    const delay = 1200 + Math.random() * 2600;
    timeoutRef.current = setTimeout(() => {
      startTimeRef.current = performance.now();
      setState(STATES.READY);
    }, delay);
  }, []);

  const handleClick = useCallback(() => {
    if (state === STATES.IDLE || state === STATES.RESULT || state === STATES.TOO_SOON) {
      start();
      return;
    }
    if (state === STATES.WAITING) {
      clearTimeout(timeoutRef.current);
      setState(STATES.TOO_SOON);
      return;
    }
    if (state === STATES.READY) {
      const elapsed = Math.round(performance.now() - startTimeRef.current);
      setReactionMs(elapsed);
      setState(STATES.RESULT);
    }
  }, [state, start]);

  const label = {
    [STATES.IDLE]: 'Tap to start',
    [STATES.WAITING]: 'Wait for green…',
    [STATES.READY]: 'TAP NOW',
    [STATES.RESULT]: null,
    [STATES.TOO_SOON]: 'Too soon — tap to retry',
  }[state];

  const bg = {
    [STATES.IDLE]: 'bg-graphite2',
    [STATES.WAITING]: 'bg-graphite2',
    [STATES.READY]: 'bg-cyan',
    [STATES.RESULT]: 'bg-graphite2',
    [STATES.TOO_SOON]: 'bg-red-500/80',
  }[state];

  return (
    <section className="relative z-10 bg-bg/60 section-pad py-28 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">Try It Yourself</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            How fast is 800 milliseconds?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-muted">
            Tap the button, wait for it to turn cyan, then tap again as fast
            as you can. That&apos;s roughly how long CATS takes to detect a
            crash and send an alert — except it never blinks.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-14 flex flex-col items-center gap-8">
          <button
            onClick={handleClick}
            className={`flex h-56 w-56 items-center justify-center rounded-full text-center text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-150 md:h-64 md:w-64 ${bg} ${
              state === STATES.READY ? 'text-bg' : 'text-soft'
            }`}
          >
            <AnimatePresence mode="wait">
              {state === STATES.RESULT ? (
                <motion.span
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-4xl font-semibold normal-case tracking-tight">
                    {reactionMs}ms
                  </span>
                  <span className="text-[11px] tracking-[0.1em] text-muted">tap to try again</span>
                </motion.span>
              ) : (
                <motion.span key={state} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {state === STATES.RESULT && reactionMs !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-line bg-graphite/60 px-8 py-6 text-sm text-muted"
            >
              You reacted in <span className="text-soft">{reactionMs}ms</span>.
              CATS detects impact and sends an alert in{' '}
              <span className="text-cyan">~800ms</span> —{' '}
              {reactionMs > 800 ? (
                <>faster than your own reflexes just were.</>
              ) : (
                <>about the same speed as your best reaction, every single time.</>
              )}
            </motion.div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
