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
          // Reversible: state follows intersection in both scroll directions.
          setVisible(entry.isIntersecting);
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
      {children}
    </Tag>
  );
}
