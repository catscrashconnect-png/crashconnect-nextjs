'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FRAME_COUNT } from '@/lib/frames';
import { startLoading, getFrame } from '@/lib/frameStore';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FrameCanvas() {
  const canvasRef = useRef(null);
  const frameRef = useRef(1);

  useEffect(() => {
    startLoading();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function draw(index) {
      const img = getFrame(index);
      if (!img || !img.width) return;

      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const ir = img.width / img.height;
      const cr = cw / ch;
      let dw, dh, dx, dy;
      if (cr > ir) {
        dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2;
      } else {
        dh = ch; dw = ch * ir; dy = 0; dx = (cw - dw) / 2;
      }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(frameRef.current);
    }

    resize();
    window.addEventListener('resize', resize);

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.4,
      onUpdate: (self) => {
        const frame = 1 + self.progress * (FRAME_COUNT - 1);
        frameRef.current = frame;
        draw(frame);
      },
    });

    // redraw as more frames arrive so the current position sharpens over time
    const interval = setInterval(() => draw(frameRef.current), 400);

    return () => {
      window.removeEventListener('resize', resize);
      trigger.kill();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-bg">
      <canvas ref={canvasRef} className="h-full w-full object-cover [filter:saturate(0.9)_contrast(1.05)_brightness(0.8)]" />
    </div>
  );
}
