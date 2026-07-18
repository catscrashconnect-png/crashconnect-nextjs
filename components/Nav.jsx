'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { href: '#technology', label: 'Technology' },
  { href: '#features', label: 'Features' },
  { href: '#vehicles', label: 'Vehicles' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between section-pad py-6 transition-all duration-300 ${
          scrolled ? 'bg-bg/70 backdrop-blur-xl border-b border-line py-4' : 'bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          CrashConnect
        </a>

        <nav className="hidden gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden rounded-full border border-lineStrong px-5 py-2.5 text-xs uppercase tracking-[0.1em] transition-colors hover:border-cyan hover:text-cyan md:inline-block"
        >
          Get CATS
        </a>

        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-soft transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-soft transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-soft transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[64px] z-30 flex flex-col gap-1 border-b border-line bg-bg/95 p-6 backdrop-blur-xl md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.1em] text-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 py-3 text-sm uppercase tracking-[0.1em] text-cyan"
            >
              Get CATS
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
