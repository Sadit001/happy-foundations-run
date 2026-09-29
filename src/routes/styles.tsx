import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { styles } from "@/lib/site-data";

export const Route = createFileRoute("/styles")({
  head: () => ({
    meta: [
      { title: "Tattoo Styles — NOIR INK Berlin" },
      {
        name: "description",
        content:
          "Eight tattoo styles we work in at Noir Ink Berlin: blackwork, Japanese, fine line, realism, ornamental, neo traditional, lettering and abstract.",
      },
      { property: "og:title", content: "Tattoo Styles — NOIR INK Berlin" },
      {
        property: "og:description",
        content: "Eight directions we work in. Most pieces end up somewhere between two of them.",
      },
    ],
  }),
  component: StylesPage,
});

function StylesPage() {
  return (
    <>
      <PageHeader label="Styles" title="Find your language.">
        Eight directions we work in. Most pieces end up somewhere between two of them — bring a
        reference and we'll help you place it.
      </PageHeader>

      <section className="mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {styles.map((style, i) => (
            <Reveal key={style.slug} variant="zoom" delay={(i % 4) * 100}>
              <article data-cursor="Explore" className="group">
                <div className="image-frame aspect-[3/4] w-full">
                  <img
                    src={style.image}
                    alt={`${style.name} tattoo example`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h2 className="display text-[1.8rem] transition-colors duration-700 group-hover:text-accent">
                    {style.name}
                  </h2>
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="body-copy mt-3 text-sm">{style.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={160} className="mt-24 block">
          <div className="hairline mb-12" />
          <p className="body-copy max-w-xl">
            Not sure where your idea sits? Send us the reference and we'll tell you honestly
            which style — and which artist — it belongs to.
          </p>
          <Link to="/book" className="btn-accent mt-10">
            Start a consultation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
