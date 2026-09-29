import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { featured } from "@/lib/site-data";

export function FeaturedWork({ limit = 8 }: { limit?: number }) {
  const items = featured.slice(0, limit);

  return (
    <section className="mx-auto max-w-[1560px] px-6 py-24 md:px-10 md:py-36">
      <SectionHeading index="02" label="Selected work" title="A record of hours.">
        Pieces from the last two years, photographed in the studio the day they were finished.
      </SectionHeading>

      <div className="mt-20 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {items.map((item, i) => (
          <Reveal key={`${item.style}-${i}`} variant="zoom" delay={(i % 3) * 120}>
            <Link
              to="/work"
              data-cursor="View"
              className="image-frame group relative block w-full"
            >
              <img
                src={item.image}
                alt={`${item.style} tattoo by ${item.artist}`}
                loading="lazy"
                className={`w-full object-cover ${item.span === "tall" ? "aspect-[4/5]" : "aspect-square"}`}
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/10 to-transparent p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <span className="label !text-accent">{item.style}</span>
                <span className="display mt-2 text-2xl">{item.artist}</span>
                <span className="label mt-3 !text-foreground/80">View work</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
