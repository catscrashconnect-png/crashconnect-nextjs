'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { subscribeProgress } from '@/lib/frameStore';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const unsub = subscribeProgress((loaded, total) => {
      setProgress(Math.round((loaded / total) * 100));
    });

    // don't block the page indefinitely if something stalls
    const timeout = setTimeout(() => setDone(true), 4200);

    return () => {
      unsub();
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (progress >= 35) {
      const t = setTimeout(() => setDone(true), 250);
      return () => clearTimeout(t);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.p
              className="text-sm tracking-[0.35em] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              CRASHCONNECT
            </motion.p>
            <div className="h-px w-40 overflow-hidden bg-line">
              <motion.div
                className="h-full bg-cyan"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.max(progress, 6)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-muted">{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
