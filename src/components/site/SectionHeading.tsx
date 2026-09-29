import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  label,
  title,
  align = "left",
  children,
}: {
  index?: string;
  label?: string;
  title: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {(index || label) && (
        <Reveal variant="fade" className="mb-7 flex items-center gap-4">
          {index && <span className="label !text-accent">{index}</span>}
          {label && <span className="label">{label}</span>}
        </Reveal>
      )}
      <Reveal variant="clip" as="h2" className="display text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem]">
        {title}
      </Reveal>
      {children && (
        <Reveal variant="up" delay={160} className="body-copy mt-8 max-w-xl">
          {children}
        </Reveal>
      )}
      <Reveal variant="line" delay={260} className="hairline mt-12" />
    </div>
  );
}
