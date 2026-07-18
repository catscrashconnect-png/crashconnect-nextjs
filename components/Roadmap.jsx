import Reveal from './Reveal';

const PHASES = [
  { time: 'Phase 1 · Now', title: 'Core CATS System', body: 'AI accident detection, GPS tracking, instant SOS to 5 contacts via WhatsApp + SMS. Full OBD-II diagnostics and Tamil + English voice assistant.', tags: ['Live', 'AI Detection', 'Voice Assistant'] },
  { time: 'Phase 2 · Near Future', title: 'Advanced AI Prediction', body: 'Predictive accident detection before impact, using models trained on Indian road conditions to flag risky driving early.', tags: ['AI Prediction', 'Early Warning', 'ML Models'] },
  { time: 'Phase 3 · Vision', title: 'Smart City Integration', body: 'Direct integration with traffic management, ambulance dispatch, and emergency services as part of city infrastructure.', tags: ['Smart Cities', 'Emergency Services'] },
  { time: 'Phase 4 · Global', title: 'Global Expansion', body: 'Scaling beyond India — multi-language support, international emergency protocols, and OEM partnerships.', tags: ['Global', 'OEM Partnerships'] },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative z-10 bg-bg/60 section-pad py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan">Where We&apos;re Headed</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          What&apos;s coming next.
        </h2>
      </Reveal>

      <div className="mt-16 divide-y divide-line border-y border-line">
        {PHASES.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="grid gap-4 py-10 md:grid-cols-[220px_1fr]">
              <span className="text-xs uppercase tracking-[0.15em] text-cyan">{p.time}</span>
              <div>
                <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{p.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-lineStrong px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
