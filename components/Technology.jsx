'use client';

import Reveal from './Reveal';

const PILLARS = [
  {
    tag: 'Sense',
    title: 'IoT Hardware',
    body: 'A compact OBD-II device reads engine, brake, and impact data straight from the vehicle — no wiring, no workshop visit.',
  },
  {
    tag: 'Think',
    title: 'Edge AI Detection',
    body: 'Onboard models tell a real crash from a pothole or hard brake in milliseconds, without waiting on a server round-trip.',
  },
  {
    tag: 'Act',
    title: 'Instant Response',
    body: 'The moment impact is confirmed, GPS location and vehicle data go out to emergency contacts automatically.',
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative z-10 h-[240vh]">
      <div className="sticky top-0 flex h-[100svh] w-full items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-bg/95 via-bg/40 to-bg/95" />
        <div className="relative z-10 w-full section-pad">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan">Under The Hood</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              One small device.
              <br />
              A complete safety system.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.1}>
                <div className="rounded-2xl border border-line bg-bg/40 p-7 backdrop-blur-md">
                  <span className="text-xs uppercase tracking-[0.2em] text-cyan">{p.tag}</span>
                  <h3 className="mt-4 text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
