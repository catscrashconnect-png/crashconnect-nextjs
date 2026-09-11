'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const POINTS = [
  { id: 'engine', x: 34, y: 42, label: 'Engine Temp', value: 87, unit: '°C', detail: 'Running within normal range.' },
  { id: 'brakes', x: 68, y: 58, label: 'Brake Pads', value: 74, unit: '%', detail: 'Wear detected — inspection in ~2,000 km.' },
  { id: 'fuel', x: 50, y: 30, label: 'Fuel Level', value: 68, unit: '%', detail: 'Enough for approximately 310 km.' },
  { id: 'gps', x: 82, y: 24, label: 'GPS Lock', value: 100, unit: '%', detail: 'Live location accurate to 3 metres.' },
  { id: 'impact', x: 18, y: 22, label: 'Impact Sensor', value: 0, unit: 'g', detail: 'Idle — no impact events detected.' },
];

function usePoint(active) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) { setValue(0); return; }
    let raf;
    const start = performance.now();
    const duration = 900;
    const target = active.value;
    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);
  return value;
}

export default function SensorSimulator() {
  const [activeId, setActiveId] = useState(null);
  const [visited, setVisited] = useState(new Set());
  const active = POINTS.find((p) => p.id === activeId) || null;
  const value = usePoint(active);

  function handleTap(point) {
    setActiveId(point.id === activeId ? null : point.id);
    setVisited((prev) => new Set(prev).add(point.id));
  }

  const allVisited = visited.size === POINTS.length;

  return (
    <section className="relative z-10 bg-graphite/60 section-pad py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">Try It Yourself</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Tap a sensor to see what CATS sees.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-lg text-muted">
            This is a simplified view of what runs continuously in the
            background of every trip. Tap any point on the vehicle.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-14">
          <div className="relative mx-auto aspect-[16/9] max-w-3xl rounded-2xl border border-line bg-bg/50 p-6">
            {/* simple car silhouette */}
            <svg viewBox="0 0 100 56.25" className="h-full w-full opacity-70">
              <path
                d="M8 40 C6 32 10 27 18 25 L28 16 C30 14 34 13 38 13 L64 13 C69 13 73 15 76 19 L84 27 C90 28 94 32 94 38 L94 42 C94 44 92 46 90 46 L84 46 C84 42 80 39 76 39 C72 39 68 42 68 46 L34 46 C34 42 30 39 26 39 C22 39 18 42 18 46 L12 46 C10 46 8 44 8 42 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-lineStrong"
              />
              <circle cx="26" cy="46" r="5" fill="none" stroke="currentColor" strokeWidth="1" className="text-lineStrong" />
              <circle cx="76" cy="46" r="5" fill="none" stroke="currentColor" strokeWidth="1" className="text-lineStrong" />
            </svg>

            {POINTS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleTap(p)}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                aria-label={p.label}
              >
                <span
                  className={`relative flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                    activeId === p.id
                      ? 'border-cyan bg-cyan'
                      : visited.has(p.id)
                      ? 'border-cyan/60 bg-cyan/20'
                      : 'border-lineStrong bg-graphite2'
                  }`}
                >
                  {activeId !== p.id && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/30" />
                  )}
                </span>
              </button>
            ))}

            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-6 left-6 right-6 rounded-xl border border-lineStrong bg-graphite/90 p-5 md:left-auto md:w-72"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">{active.label}</p>
                  <p className="mt-2 text-2xl font-medium tracking-tight">
                    {value}
                    {active.unit}
                  </p>
                  <p className="mt-2 text-xs text-muted">{active.detail}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.15em] text-muted">
            {allVisited ? 'Full diagnostic complete — all systems checked.' : `${visited.size} of ${POINTS.length} sensors checked`}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
