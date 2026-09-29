import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { StudioIntro } from "@/components/site/StudioIntro";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { StyleExplorer } from "@/components/site/StyleExplorer";
import { ArtistCollection } from "@/components/site/ArtistCollection";
import { ArtistSpotlight } from "@/components/site/ArtistSpotlight";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { journal, processSteps } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOIR INK — Contemporary Tattoo Studio in Berlin" },
      {
        name: "description",
        content:
          "Custom tattoo work by six resident artists in Berlin. Blackwork, Japanese, fine line, realism and more — by appointment only.",
      },
      { property: "og:title", content: "NOIR INK — Contemporary Tattoo Studio in Berlin" },
      {
        property: "og:description",
        content: "Six resident artists. Custom work, designed for the body it lives on.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StudioIntro />
      <FeaturedWork />
      <StyleExplorer />
      <ArtistCollection />
      <ArtistSpotlight />

      <section className="mx-auto max-w-[1560px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeading index="05" label="Process" title="From idea to healed skin.">
          Five steps, no surprises. The same for a palm-sized piece and a full backpiece.
        </SectionHeading>

        <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} variant="up" delay={i * 90} className="bg-background p-8">
              <span className="label !text-accent">{step.number}</span>
              <h3 className="display mt-6 text-2xl">{step.title}</h3>
              <p className="body-copy mt-4 text-sm">{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24 md:py-36">
        <div className="mx-auto max-w-[1560px] px-6 md:px-10">
          <SectionHeading index="06" label="Journal" title="Notes from the room.">
            Writing about process, healing and the decisions behind a piece.
          </SectionHeading>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            {journal.slice(0, 2).map((post, i) => (
              <Reveal key={post.slug} variant="zoom" delay={i * 120}>
                <Link to="/journal" data-cursor="Read" className="group block">
                  <div className="image-frame aspect-[16/10] w-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="label">{post.date}</span>
                    <span className="label">{post.readingTime}</span>
                  </div>
                  <h3 className="display mt-4 text-[2rem] transition-colors duration-700 group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="body-copy mt-4 text-sm">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={200} className="mt-16 block">
            <Link to="/journal" className="label link-reveal hover:!text-foreground">
              Read the journal
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
