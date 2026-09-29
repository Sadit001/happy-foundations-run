import { useEffect, useRef, useState } from "react";

/** Small circular cursor that shows a label over elements with [data-cursor]. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let target = { x: -100, y: -100 };
    let current = { x: -100, y: -100 };

    const render = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY };
      setActive(true);
      const el = (e.target as HTMLElement | null)?.closest?.("[data-cursor]") as HTMLElement | null;
      setLabel(el?.dataset["cursor"] ?? null);
    };

    const onLeave = () => setActive(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden items-center justify-center rounded-full border border-foreground/60 text-[0.5rem] uppercase tracking-[0.2em] transition-[width,height,background-color,opacity,color] duration-500 lg:flex"
      style={{
        transitionTimingFunction: "var(--ease-editorial)",
        width: label ? 84 : 10,
        height: label ? 84 : 10,
        opacity: active ? (label ? 1 : 0.55) : 0,
        backgroundColor: label ? "var(--color-foreground)" : "transparent",
        color: "var(--color-primary-foreground)",
        mixBlendMode: label ? "normal" : "difference",
      }}
    >
      {label}
    </div>
  );
}
