import Reveal from './Reveal';

const FEATURES = [
  { tag: 'VOICE', title: 'AI Voice Assistant', body: 'Talk to CATS hands-free — check vehicle health or trigger SOS, in Tamil or English.' },
  { tag: 'LIVE', title: 'Live GPS Map', body: 'Real-time vehicle location, shared with emergency contacts the moment it matters.' },
  { tag: 'OBD-II', title: 'Vehicle Diagnostics', body: 'Engine temperature, brakes, fuel, and speed monitored continuously.' },
  { tag: 'INSTANT', title: 'Multi-Contact SOS', body: 'Alerts up to 5 contacts via WhatsApp and SMS, automatically, on impact.' },
  { tag: 'FORENSIC', title: 'Accident Replay', body: 'Frame-by-frame sensor playback of any incident, exportable for insurance.' },
  { tag: 'BILINGUAL', title: 'Tamil + English', body: 'Full bilingual support, designed around how India actually drives.' },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 bg-graphite/60 section-pad py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan">Capabilities</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Everything the road can throw at you.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06} y={16}>
            <div className="h-full bg-graphite2/60 p-8 transition-colors hover:bg-graphite2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-cyan">{f.tag}</span>
              <h3 className="mt-5 text-lg font-medium tracking-tight">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
