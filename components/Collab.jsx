import Reveal from './Reveal';
import MagneticButton from './MagneticButton';

const PARTNERS = [
  ['Automotive Companies', 'OEM integration, hardware partnerships, and co-development of next-gen vehicle safety systems.'],
  ['Emergency Services', 'Direct API integration with ambulance dispatch, fire, and police for the fastest response possible.'],
  ['Smart City Initiatives', 'City-level deployments connecting CATS to urban traffic and public safety infrastructure.'],
  ['Investors & VCs', 'Actively seeking seed funding to accelerate hardware development and market launch.'],
  ['Mentors & Advisors', 'Industry veterans in automotive, AI, and public safety to help us scale to millions of vehicles.'],
  ['Research Partners', 'Universities and R&D labs working on road safety and embedded AI.'],
];

export default function Collab() {
  return (
    <section className="relative z-10 bg-bg/60 section-pad py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan">Collaboration & Investors</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Let&apos;s build safer roads together.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {PARTNERS.map(([title, body]) => (
          <Reveal key={title} y={16}>
            <div className="h-full rounded-2xl border border-line bg-graphite/40 p-7">
              <h3 className="text-base font-medium tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14 text-center">
        <MagneticButton href="#contact" variant="primary">
          Partner With Us
        </MagneticButton>
      </Reveal>
    </section>
  );
}
