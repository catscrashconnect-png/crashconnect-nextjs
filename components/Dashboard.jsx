'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Reveal from './Reveal';

function Metric({ label, target, suffix = '', fill }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted">{label}</span>
      <span className="text-2xl font-medium tracking-tight">
        {value}
        {suffix}
      </span>
      <div className="h-[3px] rounded-full bg-graphite2">
        <div className="h-full rounded-full bg-cyan" style={{ width: `${fill}%` }} />
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <section className="relative z-10 bg-bg/60 section-pad py-28 md:py-40">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan">Live Dashboard</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Your safety, in your pocket.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-muted">
              The CATS dashboard runs in any browser — vehicle health, live
              location, and one-tap SOS, all on one screen.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={32}>
          <div className="rounded-2xl border border-lineStrong bg-graphite/80 p-8 backdrop-blur-xl glow-cyan">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-muted">CATS</span>
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-cyan">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                Live
              </span>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <Metric label="Engine °C" target={87} fill={72} />
              <Metric label="Speed km/h" target={62} fill={52} />
              <Metric label="Fuel %" target={68} suffix="%" fill={68} />
            </div>

            <div className="mt-8 space-y-3">
              <div className="ml-auto max-w-[80%] rounded-xl rounded-tr-sm bg-graphite2 px-4 py-3 text-sm">
                Hey CATS, check brakes
              </div>
              <div className="max-w-[80%] rounded-xl rounded-tl-sm border border-cyan/25 bg-cyan/10 px-4 py-3 text-sm">
                Brake pads at 74%. Inspection recommended in 2,000 km.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
