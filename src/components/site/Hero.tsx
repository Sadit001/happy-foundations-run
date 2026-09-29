import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-artist.jpg";
import { useParallax } from "@/hooks/use-parallax";
import { studio } from "@/lib/site-data";

const headline = ["Ink is", "a form of", "memory."];

export function Hero() {
  const [stage, setStage] = useState(0);
  const imageRef = useParallax<HTMLDivElement>(0.16, 0.04);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStage(9);
      return;
    }
    const timers = [200, 900, 1500, 2100, 2700, 3200].map((ms, i) =>
      window.setTimeout(() => setStage(i + 1), ms),
    );
    return () => timers.forEach(window.clearTimeout);
  }, []);

  return (
    <section className="grain relative h-[100svh] min-h-[620px] w-full overflow-hidden">
      {/* Image reveals through a mask, then drifts on scroll */}
      <div
        className="absolute inset-0 transition-[clip-path,opacity] duration-[1600ms]"
        style={{
          transitionTimingFunction: "var(--ease-editorial)",
          clipPath: stage >= 2 ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          opacity: stage >= 2 ? 1 : 0,
        }}
      >
        <div ref={imageRef} className="absolute inset-[-8%]">
          <img
            src={heroImage}
            alt="Tattoo artist working on a client's forearm in a dark studio"
            width={1920}
            height={1200}
            className="h-full w-full object-cover transition-transform duration-[2600ms]"
            style={{
              transitionTimingFunction: "var(--ease-editorial)",
              transform: stage >= 2 ? "scale(1)" : "scale(1.05)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Wordmark flash before the image */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000"
        style={{ opacity: stage === 1 ? 1 : 0 }}
      >
        <span className="display text-2xl tracking-[0.4em]">NOIR INK</span>
      </div>

      <div className="relative mx-auto flex h-full max-w-[1560px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
        <p
          className="label mb-8 transition-[opacity,transform] duration-1000"
          style={{
            transitionTimingFunction: "var(--ease-editorial)",
            opacity: stage >= 4 ? 1 : 0,
            transform: stage >= 4 ? "none" : "translateY(1rem)",
          }}
        >
          {studio.tagline} / Est. {studio.established}
        </p>

        <h1 className="display max-w-[15ch] text-[clamp(3rem,11vw,9.5rem)] md:ml-[6%]">
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                className="block transition-[transform,opacity] duration-[1200ms]"
                style={{
                  transitionTimingFunction: "var(--ease-editorial)",
                  transitionDelay: `${i * 150}ms`,
                  transform: stage >= 3 ? "none" : "translateY(105%)",
                  opacity: stage >= 3 ? 1 : 0,
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div
          className="mt-12 flex flex-wrap items-center gap-8 transition-[opacity,transform] duration-1000 md:ml-[6%]"
          style={{
            transitionTimingFunction: "var(--ease-editorial)",
            opacity: stage >= 5 ? 1 : 0,
            transform: stage >= 5 ? "none" : "translateY(1.25rem)",
          }}
        >
          <Link to="/book" className="btn-line">
            Book a session
          </Link>
          <Link to="/work" className="label link-reveal hover:!text-foreground">
            See the work
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-8 right-6 flex items-center gap-4 transition-opacity duration-1000 md:right-10"
        style={{ opacity: stage >= 6 ? 1 : 0 }}
      >
        <span className="label">Scroll to explore</span>
        <span className="block h-10 w-px bg-border-strong" />
      </div>
    </section>
  );
}
