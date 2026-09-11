'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const CITIES = [
  { name: 'Delhi', x: 46, y: 18 },
  { name: 'Mumbai', x: 28, y: 52 },
  { name: 'Chennai', x: 54, y: 82 },
  { name: 'Kolkata', x: 78, y: 42 },
  { name: 'Hyderabad', x: 50, y: 60 },
  { name: 'Pune', x: 32, y: 60 },
  { name: 'Bangalore', x: 44, y: 76 },
];

export default function LiveMap() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    let cancelled = false;

    function cycle() {
      const idx = Math.floor(Math.random() * CITIES.length);
      if (cancelled) return;
      setActiveIdx(idx);
      setToast({ city: CITIES[idx].name, ms: 700 + Math.floor(Math.random() * 200) });

      setTimeout(() => {
        if (cancelled) return;
        setToast(null);
      }, 2600);

      setTimeout(() => {
        if (cancelled) return;
        setActiveIdx(null);
        setTimeout(cycle, 1400 + Math.random() * 1400);
      }, 2600);
    }

    const initial = setTimeout(cycle, 1200);
    return () => {
      cancelled = true;
      clearTimeout(initial);
    };
  }, []);

  return (
    <section className="relative z-10 bg-bg/60 section-pad py-28 md:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">Network</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-lg text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Always watching, city to city.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-lg text-muted">
            A simulated look at how CATS responds across the network — every
            dot represents an active coverage zone, not a live feed.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-14">
          <div className="relative mx-auto aspect-[4/3] max-w-2xl rounded-2xl border border-line bg-graphite/40">
            {CITIES.map((city, i) => (
              <div
                key={city.name}
                style={{ left: `${city.x}%`, top: `${city.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <span
                  className={`relative flex h-2.5 w-2.5 items-center justify-center rounded-full transition-colors duration-300 ${
                    activeIdx === i ? 'bg-cyan' : 'bg-lineStrong'
                  }`}
                >
                  {activeIdx === i && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/60" />
                  )}
                </span>
                <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.1em] text-muted">
                  {city.name}
                </span>
              </div>
            ))}

            <AnimatePresence>
              {toast && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="absolute bottom-5 left-1/2 w-[calc(100%-2.5rem)] -translate-x-1/2 rounded-xl border border-lineStrong bg-graphite/90 px-5 py-3 text-center text-xs text-muted sm:w-auto"
                >
                  CATS responded near <span className="text-soft">{toast.city}</span> — alert sent in{' '}
                  <span className="text-cyan">{toast.ms}ms</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-5 text-center text-[11px] uppercase tracking-[0.15em] text-muted">
            Illustrative simulation, not live telemetry
          </p>
        </Reveal>
      </div>
    </section>
  );
}
