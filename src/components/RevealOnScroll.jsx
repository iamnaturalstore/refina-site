import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children, className = "" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) { setShow(true); return; }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShow(true)),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  );
}
