import Reveal from './Reveal';
import MagneticButton from './MagneticButton';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative z-10 flex h-[90svh] items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/95 via-bg/50 to-bg/95" />
      <div className="relative z-10 section-pad">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">Ready?</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance text-5xl font-semibold leading-[0.95] tracking-tightest md:text-8xl">
            Drive safe.
            <br />
            Always.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-md text-muted">
            CATS is free, offline-first, and built for every Indian vehicle —
            bikes, cars, trucks. One system protects all of them.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticButton
            href="https://crashconnect.in/CATS_first_site.html"
            variant="primary"
            target="_blank"
            rel="noopener"
          >
            Launch CATS
          </MagneticButton>
          <MagneticButton href="#vehicles" variant="ghost">
            View Vehicles →
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
