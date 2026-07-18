import Reveal from './Reveal';

const VEHICLES = [
  { code: '01', name: 'CATS Moto', tag: 'Bikes · Scooters', body: 'Impact detection and SOS built for the vehicles most exposed on Indian roads.' },
  { code: '02', name: 'CATS Auto', tag: 'Sedans · SUVs · Hatchbacks', body: 'Full OBD-II diagnostics, live dashboard, and AI voice assistant for everyday driving.', featured: true },
  { code: '03', name: 'CATS Fleet', tag: 'Trucks · Buses', body: 'Built for long-haul routes, multi-vehicle oversight, and fleet-wide safety reporting.' },
];

export default function Vehicles() {
  return (
    <section id="vehicles" className="relative z-10 bg-graphite/60 section-pad py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan">Choose Your Vehicle</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          One system. Every vehicle.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {VEHICLES.map((v, i) => (
          <Reveal key={v.code} delay={i * 0.08}>
            <div
              className={`h-full rounded-2xl border p-8 transition-colors ${
                v.featured
                  ? 'border-cyan/30 bg-graphite2'
                  : 'border-line bg-graphite2/40 hover:bg-graphite2/70'
              }`}
            >
              <span className="text-xs tracking-[0.2em] text-muted">LOG · {v.code}</span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{v.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-cyan">{v.tag}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
