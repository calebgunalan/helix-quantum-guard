import { useEffect, useState, useCallback } from 'react';

export function useSlideAnimation(revealInstance: any) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isSlideActive, setIsSlideActive] = useState(true);

  useEffect(() => {
    if (!revealInstance) return;
    const handler = (e: any) => {
      setActiveSlideIndex(e.indexh);
      setIsSlideActive(true);
    };
    revealInstance.on('slidechanged', handler);
    return () => {
      try { revealInstance.off('slidechanged', handler); } catch {}
    };
  }, [revealInstance]);

  return { activeSlideIndex, isSlideActive };
}

export function useCountUp(end: number, duration: number = 1200, active: boolean = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) { setValue(0); return; }
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, active]);

  return value;
}
