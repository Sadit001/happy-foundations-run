import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { styles } from "@/lib/site-data";

export function StyleExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = styles[activeIndex]!;

  return (
    <section className="bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-[1560px] px-6 md:px-10">
        <SectionHeading index="03" label="Styles" title="Find your language.">
          Eight directions we work in. Most pieces end up somewhere between two of them.
        </SectionHeading>

        {/* Desktop: typography list + single transitioning image */}
        <div className="mt-20 hidden gap-16 lg:grid lg:grid-cols-12">
          <ul className="lg:col-span-7">
            {styles.map((style, i) => (
              <li key={style.slug} className="border-b border-border">
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  data-cursor="Explore"
                  className="group flex w-full items-baseline justify-between gap-8 py-7 text-left"
                >
                  <span
                    className="display text-[2.8rem] leading-none transition-[color,transform] duration-700"
                    style={{
                      transitionTimingFunction: "var(--ease-editorial)",
                      color: i === activeIndex ? "var(--color-foreground)" : "var(--color-subtle)",
                      transform: i === activeIndex ? "translateX(1.25rem)" : "none",
                    }}
                  >
                    {style.name}
                  </span>
                  <span className="label shrink-0">{String(i + 1).padStart(2, "0")}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5">
            <div className="image-frame sticky top-32 aspect-[4/5] w-full">
              {styles.map((style, i) => (
                <img
                  key={style.slug}
                  src={style.image}
                  alt={`${style.name} tattoo`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms]"
                  style={{
                    transitionTimingFunction: "var(--ease-editorial)",
                    opacity: i === activeIndex ? 1 : 0,
                  }}
                />
              ))}
            </div>
            <p className="body-copy mt-8 max-w-sm">{active.note}</p>
          </div>
        </div>

        {/* Mobile: stacked editorial pairs */}
        <div className="mt-16 flex flex-col gap-16 lg:hidden">
          {styles.map((style, i) => (
            <Reveal key={style.slug} variant="up" delay={40}>
              <div className="image-frame aspect-[4/5] w-full">
                <img
                  src={style.image}
                  alt={`${style.name} tattoo`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-6">
                <h3 className="display text-[2.1rem]">{style.name}</h3>
                <span className="label">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="body-copy mt-3 text-sm">{style.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
