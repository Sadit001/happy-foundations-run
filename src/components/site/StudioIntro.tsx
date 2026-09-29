import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { useParallax } from "@/hooks/use-parallax";
import { studioTools, studioInterior } from "@/lib/site-data";

export function StudioIntro() {
  const smallRef = useParallax<HTMLDivElement>(0.1);

  return (
    <section className="relative mx-auto max-w-[1560px] px-6 py-28 md:px-10 md:py-44">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:pt-10">
          <Reveal variant="fade" className="label mb-8 block">
            01 / The studio
          </Reveal>
          <Reveal variant="clip" as="h2" className="display text-[2.4rem] sm:text-[3.2rem] lg:text-[3.9rem]">
            We don't follow
            <br />
            the skin.
            <br />
            <span className="text-accent">We follow the story.</span>
          </Reveal>
          <Reveal variant="line" delay={200} className="hairline my-12 max-w-[14rem]" />
          <Reveal variant="up" delay={120} className="body-copy max-w-md">
            Every piece begins as a conversation, not a catalogue. We design around the
            individual — their proportions, their history, the way they carry themselves — and
            then we commit to the drawing.
          </Reveal>
          <Reveal variant="up" delay={220} className="body-copy mt-6 max-w-md">
            Six artists, one room, no walk-in volume. We take fewer clients so each piece gets
            the hours it needs.
          </Reveal>
          <Reveal variant="up" delay={320} className="mt-12 block">
            <Link to="/studio" className="label link-reveal hover:!text-foreground">
              Inside the studio
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal variant="zoom" className="image-frame block aspect-[4/3] w-full">
            <img
              src={studioInterior}
              alt="Interior of the Noir Ink studio: concrete walls, black steel and warm low light"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>

          <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:items-end">
            <div ref={smallRef} className="w-full sm:w-1/2">
              <Reveal variant="zoom" delay={140} className="image-frame block aspect-[4/5] w-full">
                <img
                  src={studioTools}
                  alt="Tattoo machine, needles and ink on a steel tray"
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Reveal>
            </div>
            <dl className="grid w-full grid-cols-2 gap-8 sm:w-1/2">
              {[
                ["Est.", "2014"],
                ["Artists", "Six"],
                ["Sessions a day", "Four"],
                ["Touch-up", "Included"],
              ].map(([k, v], i) => (
                <Reveal key={k} variant="up" delay={i * 90}>
                  <dt className="label mb-3">{k}</dt>
                  <dd className="display text-2xl">{v}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
