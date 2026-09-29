import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { navLinks, studio } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1560px] px-6 py-20 md:px-10 md:py-28">
        <Reveal variant="clip" as="h2" className="display text-[2.6rem] sm:text-[4rem] lg:text-[5.4rem]">
          Let's make
          <br />
          something permanent.
        </Reveal>

        <Reveal variant="up" delay={160} className="mt-12 block">
          <Link to="/book" className="btn-accent">
            Book a session
          </Link>
        </Reveal>

        <div className="hairline my-16" />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label mb-5">Studio</p>
            {studio.address.map((line) => (
              <p key={line} className="body-copy text-sm">
                {line}
              </p>
            ))}
          </div>
          <div>
            <p className="label mb-5">Hours</p>
            {studio.hours.map((line) => (
              <p key={line} className="body-copy text-sm">
                {line}
              </p>
            ))}
          </div>
          <div>
            <p className="label mb-5">Contact</p>
            <a href={`mailto:${studio.email}`} className="body-copy link-reveal block text-sm">
              {studio.email}
            </a>
            <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="body-copy link-reveal mt-2 block text-sm">
              {studio.phone}
            </a>
            <p className="body-copy mt-2 text-sm">{studio.instagram}</p>
          </div>
          <div>
            <p className="label mb-5">Pages</p>
            <nav className="flex flex-col gap-2" aria-label="Footer">
              <Link to="/" className="body-copy link-reveal w-fit text-sm">
                Home
              </Link>
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="body-copy link-reveal w-fit text-sm">
                  {link.label}
                </Link>
              ))}
              <Link to="/book" className="body-copy link-reveal w-fit text-sm">
                Book
              </Link>
            </nav>
          </div>
        </div>

        <Reveal variant="up" className="mt-24 block overflow-hidden">
          <p
            aria-hidden="true"
            className="display select-none whitespace-nowrap text-center text-[clamp(3.4rem,12.5vw,12rem)] leading-none text-foreground/[0.07]"
          >
            NOIR INK
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
          <span className="label">
            © {new Date().getFullYear()} {studio.name}
          </span>
          <span className="label">Berlin — Est. {studio.established}</span>
        </div>
      </div>
    </footer>
  );
}
