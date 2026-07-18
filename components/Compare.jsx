import Reveal from './Reveal';
import MagneticButton from './MagneticButton';

const ROWS = [
  ['Accident Detection', 'Automatic, under 1 second', 'Manual only'],
  ['Emergency Alert', 'Auto WhatsApp + SMS', 'None'],
  ['Live GPS Sharing', 'Real-time location', 'Unknown location'],
  ['Vehicle Diagnostics', 'Engine, brakes, fuel', 'No monitoring'],
  ['AI Voice Assistant', 'Tamil & English', 'Not available'],
  ['Accident Replay', 'Full sensor playback', 'No record'],
  ['Cost', 'Free forever', '—'],
];

export default function Compare() {
  return (
    <section className="relative z-10 bg-bg/60 section-pad py-28 md:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">Why CrashConnect</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            CATS vs. no protection at all.
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-line">
            <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-graphite2 px-6 py-4 text-[11px] uppercase tracking-[0.15em] text-muted">
              <span>Feature</span>
              <span className="text-cyan">With CATS</span>
              <span>Without</span>
            </div>
            {ROWS.map((row, i) => (
              <div
                key={row[0]}
                className={`grid grid-cols-[1.6fr_1fr_1fr] px-6 py-4 text-sm ${
                  i % 2 === 0 ? 'bg-graphite/40' : 'bg-transparent'
                }`}
              >
                <span>{row[0]}</span>
                <span className="text-cyan">{row[1]}</span>
                <span className="text-muted">{row[2]}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 text-center">
          <MagneticButton href="#cta" variant="primary">
            Get CATS Free
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
