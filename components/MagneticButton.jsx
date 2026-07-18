'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ href, children, variant = 'primary', className = '', ...props }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  }

  const base =
    'inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-tight transition-transform duration-300 ease-out will-change-transform';
  const styles =
    variant === 'primary'
      ? 'bg-soft text-bg hover:shadow-[0_0_40px_-8px_rgba(245,245,247,0.5)]'
      : 'border border-lineStrong text-soft hover:border-cyan hover:text-cyan';

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
