import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { navLinks, studio } from "@/lib/site-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,padding] duration-700 ${
          scrolled
            ? "bg-background/90 py-4 backdrop-blur-md md:py-5"
            : "bg-transparent py-6 md:py-9"
        }`}
        style={{ transitionTimingFunction: "var(--ease-editorial)" }}
      >
        <div className="mx-auto flex max-w-[1560px] items-center justify-between px-6 md:px-10">
          <Link to="/" className="group flex items-baseline gap-3" aria-label={`${studio.name} home`}>
            <span className="display text-xl tracking-[0.18em] md:text-2xl">NOIR</span>
            <span className="label !text-foreground/70 !tracking-[0.42em]">INK</span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="label link-reveal hover:!text-foreground data-[status=active]:!text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link to="/book" className="label link-reveal hidden !text-accent hover:!text-accent lg:inline-block">
              Book a session
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="label link-reveal lg:hidden"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen editorial mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background transition-[opacity,clip-path] duration-[900ms] lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{
          transitionTimingFunction: "var(--ease-editorial)",
          clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
        }}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pb-12 pt-6">
          <div className="flex items-center justify-between">
            <span className="display text-xl tracking-[0.18em]">NOIR INK</span>
            <button type="button" onClick={() => setOpen(false)} className="label" aria-label="Close menu">
              Close
            </button>
          </div>

          <nav className="mt-auto flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className="display border-b border-border py-5 text-[3rem] leading-none transition-[color,transform] duration-700 hover:text-accent"
                style={{
                  transitionTimingFunction: "var(--ease-editorial)",
                  transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(1.5rem)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12">
            <Link to="/book" className="btn-accent w-full justify-center">
              Book a session
            </Link>
            <p className="label mt-8">
              {studio.instagram} — {studio.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
