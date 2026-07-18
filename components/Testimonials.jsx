import Reveal from './Reveal';

const TESTIMONIALS = [
  { name: 'Arjun R.', role: 'Bike Rider · Chennai', quote: 'CATS detected my accident before I even realised what happened. My family got the alert in seconds.' },
  { name: 'Priya S.', role: 'Car Driver · Coimbatore', quote: "The Tamil voice command is incredible. I just say 'Hey CATS' and it gives me my vehicle status." },
  { name: 'Ramu K.', role: 'Truck Driver · Salem', quote: 'Covering long highways, CATS gives me peace of mind. My family always knows where I am.' },
  { name: 'Karthik M.', role: 'SUV Driver · Bangalore', quote: 'Sent me an engine temperature warning before a breakdown. Saved me from being stranded at midnight.' },
  { name: 'Divya N.', role: 'Car Owner · Mumbai', quote: 'The accident replay feature helped me claim insurance. The sensor data was proof enough.' },
  { name: 'Vijay T.', role: 'Bike Rider · Madurai', quote: 'Setup took 5 minutes. My parents can use it easily. Best free safety tool out there.' },
];

export default function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative z-10 bg-graphite/60 py-28 md:py-40">
      <div className="section-pad">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">Trusted On The Road</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Drivers trust CATS.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 overflow-hidden">
        <div className="flex w-max animate-[marquee_46s_linear_infinite] gap-6 pl-6 hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div key={i} className="w-[340px] flex-none rounded-2xl border border-line bg-graphite2/60 p-7">
              <p className="mb-4 text-cyan">★★★★★</p>
              <p className="text-sm leading-relaxed text-soft/90">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
