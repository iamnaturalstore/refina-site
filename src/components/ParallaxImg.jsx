import { useEffect, useRef } from "react";

export default function ParallaxImg({ src, alt = "", speed = 0.15, className = "" }) {
  const ref = useRef(null);
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight || 0;
        // progress: -1 (above) to 1 (below)
        const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
        const y = progress * speed * 200; // adjust 200px max travel
        el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
        ticking = false;
      });
    };

    // Respect reduced motion
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`will-change-transform block ${className}`}
      style={{ transform: "translate3d(0,0,0)" }}
    />
  );
}
