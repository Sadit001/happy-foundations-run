import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { socialGrid, featured, styles } from "@/lib/site-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — NOIR INK Tattoo Portfolio" },
      {
        name: "description",
        content:
          "A portfolio of recent tattoo work from Noir Ink Berlin: blackwork, Japanese, fine line, realism, ornamental, lettering and abstract pieces.",
      },
      { property: "og:title", content: "Selected Work — NOIR INK Tattoo Portfolio" },
      {
        property: "og:description",
        content: "Recent tattoo work from the Noir Ink studio, filterable by style.",
      },
    ],
  }),
  component: WorkPage,
});

const gallery = [...featured, ...socialGrid];

function WorkPage() {
  const [filter, setFilter] = useState<string>("All");

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.style === filter)),
    [filter],
  );

  return (
    <>
      <PageHeader label="Portfolio" title="A record of hours.">
        Pieces from the last two years, photographed in the studio the day they were finished.
        Filter by style to narrow it down.
      </PageHeader>

      <section className="mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {["All", ...styles.map((s) => s.name)].map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setFilter(name)}
              className={`label link-reveal ${filter === name ? "!text-accent" : "hover:!text-foreground"}`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {items.map((item, i) => (
            <Reveal key={`${item.style}-${i}`} variant="zoom" delay={(i % 3) * 100}>
              <figure data-cursor="View" className="image-frame group relative block w-full">
                <img
                  src={item.image}
                  alt={`${item.style} tattoo by ${item.artist}`}
                  loading="lazy"
                  className={`w-full object-cover ${i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}
                />
                <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/10 to-transparent p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <span className="label !text-accent">{item.style}</span>
                  <span className="display mt-2 text-2xl">{item.artist}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {items.length === 0 && (
          <p className="body-copy mt-16">No pieces in this style yet — check back soon.</p>
        )}
      </section>
    </>
  );
}
