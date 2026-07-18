'use client';

import { FRAME_COUNT, framePath } from './frames';

const images = new Array(FRAME_COUNT + 1);
let loadedCount = 0;
let started = false;
const listeners = new Set();

function notify() {
  listeners.forEach((cb) => cb(loadedCount, FRAME_COUNT));
}

function loadFrame(i) {
  if (images[i]) return;
  const img = new Image();
  img.decoding = 'async';
  img.src = framePath(i);
  img.onload = () => {
    loadedCount += 1;
    notify();
  };
  images[i] = img;
}

export function startLoading() {
  if (started) return;
  started = true;

  // Priority pass: first frame, then a spread across the whole sequence
  loadFrame(1);
  for (let i = 1; i <= FRAME_COUNT; i += 5) loadFrame(i);

  // Background pass: fill in everything else during idle time
  let bgIndex = 1;
  function backgroundLoad() {
    let count = 0;
    while (count < 10 && bgIndex <= FRAME_COUNT) {
      loadFrame(bgIndex);
      bgIndex += 1;
      count += 1;
    }
    if (bgIndex <= FRAME_COUNT) {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(backgroundLoad);
      } else {
        setTimeout(backgroundLoad, 50);
      }
    }
  }
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(backgroundLoad);
  } else {
    setTimeout(backgroundLoad, 200);
  }
}

export function getFrame(index) {
  const clamped = Math.max(1, Math.min(FRAME_COUNT, Math.round(index)));
  let img = images[clamped];
  if (!img) {
    // fall back to the nearest already-loaded neighbour to avoid flicker
    for (let d = 1; d < FRAME_COUNT; d += 1) {
      if (images[clamped - d]) { img = images[clamped - d]; break; }
      if (images[clamped + d]) { img = images[clamped + d]; break; }
    }
  }
  return img || null;
}

export function subscribeProgress(cb) {
  listeners.add(cb);
  cb(loadedCount, FRAME_COUNT);
  return () => listeners.delete(cb);
}

export function getProgress() {
  return { loaded: loadedCount, total: FRAME_COUNT };
}
