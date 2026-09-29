import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { processSteps, studio, studioInterior, studioTools } from "@/lib/site-data";
import spotlight from "@/assets/spotlight.jpg";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "The Studio — NOIR INK Berlin" },
      {
        name: "description",
        content:
          "Inside Noir Ink: a six-artist tattoo studio in Berlin. Our process, hygiene standards, opening hours and how to find us.",
      },
      { property: "og:title", content: "The Studio — NOIR INK Berlin" },
      {
        property: "og:description",
        content: "Six artists, one room, no walk-in volume. Here's how we work.",
      },
    ],
  }),
  component: StudioPage,
});

const principles = [
  {
    title: "Single-use everything",
    copy: "Needles, tubes, ink caps and razors are sterile, single-use and opened in front of you.",
  },
  {
    title: "No walk-in volume",
    copy: "Four sessions a day across the whole studio. Nobody is rushed, including the artist.",
  },
  {
    title: "Drawn for you",
    copy: "We don't tattoo other artists' designs. Every piece is drawn for the body it lives on.",
  },
  {
    title: "Aftercare included",
    copy: "Written aftercare, a two-week check-in and a free touch-up within the first year.",
  },
];

function StudioPage() {
  return (
    <>
      <PageHeader label="The studio" title="We follow the story, not the skin.">
        Noir Ink opened in {studio.established} in a former workshop in Berlin. Concrete, black
        steel and warm low light — built so a nine-hour session still feels calm.
      </PageHeader>

      <section className="mx-auto max-w-[1560px] px-6 pb-24 md:px-10 md:pb-36">
        <Reveal variant="zoom" className="image-frame block aspect-[16/9] w-full">
          <img
            src={studioInterior}
            alt="Interior of the Noir Ink studio: concrete walls, black steel and warm low light"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <Reveal variant="zoom" delay={120} className="image-frame block aspect-[4/3] w-full">
            <img
              src={studioTools}
              alt="Tattoo machine, needles and ink on a steel tray"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal variant="zoom" delay={220} className="image-frame block aspect-[4/3] w-full">
            <img
              src={spotlight}
              alt="An artist drawing a design under a single warm lamp"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-36">
        <div className="mx-auto max-w-[1560px] px-6 md:px-10">
          <SectionHeading index="01" label="How we work" title="Four things we don't bend on.">
            The details that decide whether a tattoo still reads well in fifteen years.
          </SectionHeading>

          <div className="mt-20 grid gap-px bg-border sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={i * 90} className="bg-surface p-10">
                <span className="label !text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-6 text-[1.9rem]">{p.title}</h3>
                <p className="body-copy mt-4 text-sm">{p.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-6 py-24 md:px-10 md:py-36">
        <SectionHeading index="02" label="Process" title="From idea to healed skin.">
          Five steps, no surprises.
        </SectionHeading>

        <ol className="mt-20 flex flex-col">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} variant="up" delay={i * 70}>
              <li className="grid gap-6 border-t border-border py-10 md:grid-cols-12">
                <span className="label !text-accent md:col-span-2">{step.number}</span>
                <h3 className="display text-[2rem] md:col-span-4">{step.title}</h3>
                <p className="body-copy text-sm md:col-span-6">{step.copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="hairline mb-16" />
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal variant="up">
            <p className="label mb-5">Find us</p>
            {studio.address.map((line) => (
              <p key={line} className="body-copy text-sm">
                {line}
              </p>
            ))}
          </Reveal>
          <Reveal variant="up" delay={100}>
            <p className="label mb-5">Opening hours</p>
            {studio.hours.map((line) => (
              <p key={line} className="body-copy text-sm">
                {line}
              </p>
            ))}
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="label mb-5">Get in touch</p>
            <a href={`mailto:${studio.email}`} className="body-copy link-reveal block text-sm">
              {studio.email}
            </a>
            <a
              href={`tel:${studio.phone.replace(/\s/g, "")}`}
              className="body-copy link-reveal mt-2 block text-sm"
            >
              {studio.phone}
            </a>
            <Link to="/book" className="btn-accent mt-8">
              Book a session
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
