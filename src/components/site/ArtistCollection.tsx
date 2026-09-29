import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { artists, type Artist } from "@/lib/site-data";

export function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  return (
    <Reveal variant="zoom" delay={(index % 3) * 120}>
      <Link to="/artists" data-cursor="View" className="group block">
        <div className="image-frame aspect-[4/5] w-full">
          <img
            src={artist.image}
            alt={`Portrait of ${artist.name}, tattoo artist`}
            width={1024}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h3 className="display text-[1.9rem] transition-transform duration-700 group-hover:translate-x-1">
              {artist.name}
            </h3>
            <p className="label mt-3 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              {artist.specialty}
            </p>
          </div>
          <span className="label shrink-0">{artist.location}</span>
        </div>
        <p className="body-copy mt-4 text-sm">{artist.bio}</p>
        <span className="label link-reveal mt-6 inline-block group-hover:!text-foreground">
          View portfolio
        </span>
      </Link>
    </Reveal>
  );
}

export function ArtistCollection() {
  return (
    <section className="mx-auto max-w-[1560px] px-6 py-24 md:px-10 md:py-36">
      <SectionHeading index="04" label="Artists" title="The hands behind the ink.">
        Six resident artists. Each keeps their own book, their own waiting list, and their own
        way of working.
      </SectionHeading>

      <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist, i) => (
          <ArtistCard key={artist.slug} artist={artist} index={i} />
        ))}
      </div>
    </section>
  );
}
