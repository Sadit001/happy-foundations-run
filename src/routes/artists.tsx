import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { artists } from "@/lib/site-data";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — NOIR INK Berlin" },
      {
        name: "description",
        content:
          "Meet the six resident tattoo artists at Noir Ink Berlin: blackwork, Japanese, fine line, realism, neo traditional and lettering specialists.",
      },
      { property: "og:title", content: "Artists — NOIR INK Berlin" },
      {
        property: "og:description",
        content: "Six resident artists, each with their own book and their own way of working.",
      },
    ],
  }),
  component: ArtistsPage,
});

function ArtistsPage() {
  return (
    <>
      <PageHeader label="The team" title="The hands behind the ink.">
        Six resident artists. Each keeps their own book, their own waiting list, and their own
        way of working. Requests go directly to the artist you choose.
      </PageHeader>

      <section className="mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="flex flex-col gap-24 md:gap-36">
          {artists.map((artist, i) => (
            <article
              key={artist.slug}
              className={`grid gap-10 lg:grid-cols-12 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal
                variant="zoom"
                className="image-frame block aspect-[4/5] w-full lg:col-span-6"
              >
                <img
                  src={artist.image}
                  alt={`Portrait of ${artist.name}, tattoo artist at Noir Ink`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Reveal>

              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal variant="fade" className="label !text-accent">
                  {String(i + 1).padStart(2, "0")}
                </Reveal>
                <Reveal variant="clip" as="h2" className="display mt-6 text-[2.6rem] md:text-[3.6rem]">
                  {artist.name}
                </Reveal>
                <Reveal variant="up" delay={120} className="label mt-5 block">
                  {artist.specialty} — {artist.location}
                </Reveal>
                <Reveal variant="line" delay={200} className="hairline my-9 max-w-[12rem]" />
                <Reveal variant="up" delay={180} className="body-copy">
                  {artist.bio}
                </Reveal>
                <Reveal variant="up" delay={260} className="mt-10 block">
                  <Link to="/book" search={{ artist: artist.slug }} className="btn-line">
                    Request {artist.name.split(" ")[0]}
                  </Link>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
