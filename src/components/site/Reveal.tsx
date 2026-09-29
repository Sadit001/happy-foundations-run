import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealVariant = "up" | "fade" | "clip" | "line" | "left" | "right" | "zoom";

export function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // One-way: once revealed, stay revealed — scrolling back up never
          // leaves content hidden or mid-transition.
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "-6% 0px -12% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-visible={visible ? "true" : "false"}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={className}
    >
      {/* clip-path lives on an inner wrapper: a fully clipped element has an
          empty intersection rect, so the observer would never fire on it. */}
      {variant === "clip" ? <span data-clip-inner>{children}</span> : children}
    </Tag>
  );
}
