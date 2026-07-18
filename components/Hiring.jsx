import Reveal from './Reveal';
import MagneticButton from './MagneticButton';

const ROLES = [
  ['IoT Development', 'Hardware + Software'],
  ['Embedded Systems Engineering', 'Low-Level Systems'],
  ['Sensor Integration & Testing', 'Hardware Validation'],
  ['Low-Level Programming', 'C / C++'],
  ['Python Development', 'Automation & Logic'],
  ['AI / ML Engineering', 'Smart Decision Systems'],
];

export default function Hiring() {
  return (
    <section id="careers" className="relative z-10 bg-graphite/60 section-pad py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan">Join The Mission</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          We&apos;re building the future of safety.
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-2xl text-muted">
          We&apos;re looking for people who want to work on real-world
          problems and build technology that saves lives — IoT, embedded
          systems, and intelligent safety solutions.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-3 md:grid-cols-2">
        {ROLES.map(([role, tag]) => (
          <Reveal key={role} y={12}>
            <div className="flex items-center justify-between rounded-xl border border-line px-6 py-5 transition-colors hover:border-cyan/40">
              <span className="text-sm">{role}</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted">{tag}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-16 flex flex-wrap gap-4">
        <MagneticButton
          href="https://docs.google.com/forms/d/e/1FAIpQLSdl8Eqxbk5C3LSCcznULEQqcS2JkCvtNKk4v-SdI14Cch7iUg/viewform?pli=1"
          variant="primary"
          target="_blank"
          rel="noopener"
        >
          Apply Now
        </MagneticButton>
        <MagneticButton
          href="https://www.linkedin.com/in/crash-connect-pvt-ltd-5634bb351"
          variant="ghost"
          target="_blank"
          rel="noopener"
        >
          Connect on LinkedIn →
        </MagneticButton>
      </Reveal>
    </section>
  );
}
