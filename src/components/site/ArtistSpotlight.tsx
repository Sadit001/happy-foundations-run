import { Link } from "@tanstack/react-router";
import spotlight from "@/assets/spotlight.jpg";
import { Reveal } from "./Reveal";
import { useParallax } from "@/hooks/use-parallax";

export function ArtistSpotlight() {
  const imgRef = useParallax<HTMLDivElement>(0.18, 0.03);

  return (
    <section className="grain relative h-[85svh] min-h-[560px] w-full overflow-hidden">
      <div ref={imgRef} className="absolute inset-[-10%]">
        <img
          src={spotlight}
          alt="Maya Kane drawing a tattoo design under a single warm lamp"
          width={1920}
          height={1088}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-background via-background/60 to-background/10" />

      <div className="relative mx-auto flex h-full max-w-[1560px] items-center justify-end px-6 md:px-10">
        <div className="max-w-md">
          <Reveal variant="fade" className="label mb-6 block !text-accent">
            Artist spotlight
          </Reveal>
          <Reveal variant="clip" as="h2" className="display text-[3rem] md:text-[4.2rem]">
            Maya Kane
          </Reveal>
          <Reveal variant="up" delay={140} className="label mt-5 block">
            Blackwork / Ornamental
          </Reveal>
          <Reveal variant="line" delay={220} className="hairline my-9 max-w-[10rem]" />
          <Reveal variant="up" delay={200} className="body-copy">
            Maya opened Noir Ink in 2014 after eight years between Berlin and Osaka. She draws
            ornamental work freehand on the body, following muscle and bone rather than a flat
            template — which is why her pieces still read cleanly a decade later.
          </Reveal>
          <Reveal variant="up" delay={300} className="mt-10 block">
            <Link to="/artists" data-cursor="View" className="btn-line">
              View Maya's work
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
