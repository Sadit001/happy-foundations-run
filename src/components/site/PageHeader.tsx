import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-[1560px] px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-56">
      <Reveal variant="fade" className="label mb-8 block !text-accent">
        {label}
      </Reveal>
      <Reveal
        variant="clip"
        as="h1"
        className="display max-w-[16ch] text-[clamp(2.8rem,8vw,7rem)]"
      >
        {title}
      </Reveal>
      {children && (
        <Reveal variant="up" delay={160} className="body-copy mt-10 max-w-xl">
          {children}
        </Reveal>
      )}
      <Reveal variant="line" delay={260} className="hairline mt-16" />
    </header>
  );
}
