import Reveal from './Reveal';

export default function Problem() {
  return (
    <section className="relative z-10 bg-graphite/60 section-pad py-28 md:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">The Problem</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Every year, thousands of lives are lost to delayed emergency response.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg text-muted">
            Many victims can&apos;t call for help — injury, shock, or unconsciousness
            takes that choice away. The gap between impact and rescue is where
            most of that risk lives.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
