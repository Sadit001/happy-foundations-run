import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { journal } from "@/lib/site-data";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — NOIR INK Berlin" },
      {
        name: "description",
        content:
          "Notes from the Noir Ink studio: choosing a tattoo style, the healing process, blackwork design and life behind the needle.",
      },
      { property: "og:title", content: "Journal — NOIR INK Berlin" },
      {
        property: "og:description",
        content: "Writing about process, healing and the decisions behind a piece.",
      },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  const [lead, ...rest] = journal;

  return (
    <>
      <PageHeader label="Journal" title="Notes from the room.">
        Writing about process, healing and the decisions behind a piece — from the artists who
        make them.
      </PageHeader>

      <section className="mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40">
        {lead && (
          <Reveal variant="zoom">
            <article data-cursor="Read" className="group grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="image-frame aspect-[16/10] w-full lg:col-span-7">
                <img
                  src={lead.image}
                  alt={lead.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="lg:col-span-5">
                <div className="flex items-center gap-5">
                  <span className="label !text-accent">Latest</span>
                  <span className="label">{lead.date}</span>
                  <span className="label">{lead.readingTime}</span>
                </div>
                <h2 className="display mt-6 text-[2.6rem] transition-colors duration-700 group-hover:text-accent md:text-[3.4rem]">
                  {lead.title}
                </h2>
                <p className="body-copy mt-6">{lead.excerpt}</p>
              </div>
            </article>
          </Reveal>
        )}

        <div className="hairline my-20" />

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} variant="up" delay={i * 110}>
              <article data-cursor="Read" className="group">
                <div className="image-frame aspect-[4/3] w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 flex items-center gap-5">
                  <span className="label">{post.date}</span>
                  <span className="label">{post.readingTime}</span>
                </div>
                <h3 className="display mt-4 text-[1.9rem] transition-colors duration-700 group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="body-copy mt-4 text-sm">{post.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={160} className="mt-24 block">
          <div className="hairline mb-12" />
          <p className="body-copy max-w-xl">
            Read something that matches the piece you have in mind? Bring it to the
            consultation.
          </p>
          <Link to="/book" className="btn-accent mt-10">
            Book a session
          </Link>
        </Reveal>
      </section>
    </>
  );
}
