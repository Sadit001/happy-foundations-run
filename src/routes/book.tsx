import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import bookingBg from "@/assets/booking-bg.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { artists, processSteps, studio, styles } from "@/lib/site-data";

type BookSearch = { artist?: string | undefined };

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): BookSearch => ({
    artist: typeof search["artist"] === "string" ? search["artist"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book a Session — NOIR INK Berlin" },
      {
        name: "description",
        content:
          "Request a tattoo consultation at Noir Ink Berlin. Tell us your idea, placement, size and preferred artist — we reply within two working days.",
      },
      { property: "og:title", content: "Book a Session — NOIR INK Berlin" },
      {
        property: "og:description",
        content: "Request a consultation with one of our six resident artists in Berlin.",
      },
    ],
  }),
  component: BookPage,
});

const fieldClass =
  "w-full border-b border-input bg-transparent py-4 text-base font-light text-foreground outline-none transition-colors duration-500 placeholder:text-subtle focus:border-accent";

function BookPage() {
  const { artist } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const idea = String(data.get("idea") ?? "").trim();

    if (!name || !email || !idea) {
      toast.error("Please add your name, email and a short description of the idea.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("That email address doesn't look right.");
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      form.reset();
      toast.success("Request received — we'll reply within two working days.");
    }, 600);
  }

  return (
    <>
      <PageHeader label="Booking" title="Tell us what you want to carry.">
        Every tattoo starts with a consultation. Fill this in with as much detail as you have —
        rough ideas are welcome. We reply within two working days.
      </PageHeader>

      <section className="mx-auto max-w-[1560px] px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            {sent ? (
              <Reveal variant="up" className="border border-border-strong p-10">
                <span className="label !text-accent">Request sent</span>
                <h2 className="display mt-6 text-[2.4rem]">Thank you — we have it.</h2>
                <p className="body-copy mt-6">
                  Your artist will come back to you at the email you gave us, usually within two
                  working days. If it's urgent, call {studio.phone}.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button type="button" onClick={() => setSent(false)} className="btn-line">
                    Send another
                  </button>
                  <Link to="/work" className="btn-accent">
                    Browse the work
                  </Link>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label mb-3 block">
                      Your name
                    </label>
                    <input id="name" name="name" className={fieldClass} placeholder="Full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="label mb-3 block">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={fieldClass}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label htmlFor="artist" className="label mb-3 block">
                      Preferred artist
                    </label>
                    <select
                      id="artist"
                      name="artist"
                      defaultValue={artist ?? ""}
                      className={`${fieldClass} [&>option]:bg-surface`}
                    >
                      <option value="">No preference</option>
                      {artists.map((a) => (
                        <option key={a.slug} value={a.slug}>
                          {a.name} — {a.specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="style" className="label mb-3 block">
                      Style
                    </label>
                    <select id="style" name="style" className={`${fieldClass} [&>option]:bg-surface`}>
                      <option value="">Not sure yet</option>
                      {styles.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-10 sm:grid-cols-3">
                  <div>
                    <label htmlFor="placement" className="label mb-3 block">
                      Placement
                    </label>
                    <input
                      id="placement"
                      name="placement"
                      className={fieldClass}
                      placeholder="Forearm, ribs…"
                    />
                  </div>
                  <div>
                    <label htmlFor="size" className="label mb-3 block">
                      Approx. size
                    </label>
                    <input id="size" name="size" className={fieldClass} placeholder="12 cm" />
                  </div>
                  <div>
                    <label htmlFor="date" className="label mb-3 block">
                      Earliest date
                    </label>
                    <input id="date" name="date" type="date" className={fieldClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="idea" className="label mb-3 block">
                    The idea
                  </label>
                  <textarea
                    id="idea"
                    name="idea"
                    rows={5}
                    className={`${fieldClass} resize-none`}
                    placeholder="Describe the piece, references, and anything the artist should know."
                  />
                </div>

                <div className="flex flex-wrap items-center gap-8">
                  <button type="submit" disabled={submitting} className="btn-accent disabled:opacity-50">
                    {submitting ? "Sending…" : "Send request"}
                  </button>
                  <span className="label">First consultation is free</span>
                </div>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5">
            <Reveal variant="zoom" className="image-frame block aspect-[4/5] w-full">
              <img
                src={bookingBg}
                alt="Close-up of a tattoo session in progress at Noir Ink"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>

            <div className="mt-12">
              <p className="label mb-6">What happens next</p>
              <ol className="flex flex-col">
                {processSteps.slice(0, 3).map((step) => (
                  <li key={step.number} className="border-t border-border py-6">
                    <span className="label !text-accent">{step.number}</span>
                    <h3 className="display mt-3 text-xl">{step.title}</h3>
                    <p className="body-copy mt-2 text-sm">{step.copy}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12">
              <p className="label mb-4">Or reach us directly</p>
              <a href={`mailto:${studio.email}`} className="body-copy link-reveal block text-sm">
                {studio.email}
              </a>
              <a
                href={`tel:${studio.phone.replace(/\s/g, "")}`}
                className="body-copy link-reveal mt-2 block text-sm"
              >
                {studio.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
