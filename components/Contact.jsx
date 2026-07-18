import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-graphite/60 section-pad py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan">Get In Touch</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Let&apos;s talk.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        <div className="bg-graphite2/60 p-7">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">Phone</p>
          <a href="tel:+918600219012" className="mt-3 block text-lg">
            +91 86002 19012
          </a>
        </div>
        <div className="bg-graphite2/60 p-7">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">Email</p>
          <a
            href="https://crashconnect.in/#contact"
            target="_blank"
            rel="noopener"
            className="mt-3 block text-lg"
          >
            Reach us via crashconnect.in
          </a>
        </div>
        <div className="bg-graphite2/60 p-7">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">Location</p>
          <p className="mt-3 text-lg">Trichy, Tamil Nadu, India</p>
        </div>
      </div>

      <div className="mt-10 flex gap-8">
        <a
          href="https://www.instagram.com/crash_connect?igsh=a3JxZTM2ZzBhY2V0&utm_source=qr"
          target="_blank"
          rel="noopener"
          className="text-xs uppercase tracking-[0.15em] text-muted hover:text-cyan"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/share/1CMizqVFAF/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener"
          className="text-xs uppercase tracking-[0.15em] text-muted hover:text-cyan"
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/crash-connect-pvt-ltd-5634bb351"
          target="_blank"
          rel="noopener"
          className="text-xs uppercase tracking-[0.15em] text-muted hover:text-cyan"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
