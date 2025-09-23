import React, { useRef, useState } from "react";

/**
 * Lightweight 3D tilt on hover.
 * - Props:
 *   - className: wrapper classes
 *   - maxTilt: degrees (default 10)
 *   - scale: zoom on hover (default 1.02)
 *   - shadow: extra shadow class on hover (optional)
 */
export default function TiltCard({
  className = "",
  maxTilt = 10,
  scale = 1.02,
  shadow = "shadow-[0_30px_120px_rgba(0,0,0,.35)]",
  children,
}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    // Respect reduced motion
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;   // 0..1
    const py = (e.clientY - rect.top) / rect.height;   // 0..1
    const rx = (py - 0.5) * -2 * maxTilt;              // tiltX
    const ry = (px - 0.5) *  2 * maxTilt;              // tiltY

    setStyle({
      transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`,
    });
  };

  const onLeave = () => setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)" });

  return (
    <div
      ref={ref}
      className={[
        "transform-gpu transition-transform duration-300 will-change-transform",
        "rounded-xl ring-1 ring-white/10 overflow-hidden",
        "bg-transparent",
        className,
      ].join(" ")}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onMove}
    >
      <div className={`h-full w-full ${shadow ? "transition-shadow duration-300" : ""}`}>
        {children}
      </div>
    </div>
  );
}
