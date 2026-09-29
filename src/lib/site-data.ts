import blackwork from "@/assets/style-blackwork.jpg";
import japanese from "@/assets/style-japanese.jpg";
import fineline from "@/assets/style-fineline.jpg";
import realism from "@/assets/style-realism.jpg";
import ornamental from "@/assets/style-ornamental.jpg";
import neotrad from "@/assets/style-neotrad.jpg";
import lettering from "@/assets/style-lettering.jpg";
import abstract from "@/assets/style-abstract.jpg";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";
import artist4 from "@/assets/artist-4.jpg";
import artist5 from "@/assets/artist-5.jpg";
import artist6 from "@/assets/artist-6.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import studioTools from "@/assets/studio-tools.jpg";

export const studio = {
  name: "NOIR INK",
  tagline: "Contemporary tattoo art",
  established: "2014",
  address: ["Noir Ink Studio", "123 Example Street", "Berlin"],
  hours: ["Monday — Saturday", "11:00 — 20:00", "Sunday by appointment"],
  email: "studio@noirink.example",
  phone: "+49 30 1234 5678",
  instagram: "@noirink",
};

export const navLinks = [
  { label: "Work", to: "/work" as const },
  { label: "Artists", to: "/artists" as const },
  { label: "Styles", to: "/styles" as const },
  { label: "Studio", to: "/studio" as const },
  { label: "Journal", to: "/journal" as const },
];

export type TattooStyle = {
  slug: string;
  name: string;
  image: string;
  note: string;
};

export const styles: TattooStyle[] = [
  {
    slug: "blackwork",
    name: "Blackwork",
    image: blackwork,
    note: "Solid black, negative space, weight and silence.",
  },
  {
    slug: "japanese",
    name: "Japanese",
    image: japanese,
    note: "Traditional structure, wind and water, built to last a lifetime.",
  },
  {
    slug: "fine-line",
    name: "Fine Line",
    image: fineline,
    note: "Single needle, quiet detail, drawn close to the skin.",
  },
  {
    slug: "realism",
    name: "Realism",
    image: realism,
    note: "Black and grey depth — light studied before it is tattooed.",
  },
  {
    slug: "ornamental",
    name: "Ornamental",
    image: ornamental,
    note: "Pattern mapped to the body rather than placed on it.",
  },
  {
    slug: "neo-traditional",
    name: "Neo Traditional",
    image: neotrad,
    note: "Bold line, muted palette, illustrative confidence.",
  },
  {
    slug: "lettering",
    name: "Lettering",
    image: lettering,
    note: "Letterforms drawn by hand, spaced for the body.",
  },
  {
    slug: "abstract",
    name: "Abstract",
    image: abstract,
    note: "Brush, gesture, accident — controlled on purpose.",
  },
];

export type Artist = {
  slug: string;
  name: string;
  specialty: string;
  location: string;
  bio: string;
  image: string;
};

export const artists: Artist[] = [
  {
    slug: "maya-kane",
    name: "Maya Kane",
    specialty: "Blackwork / Ornamental",
    location: "Berlin",
    bio: "Founded the studio in 2014. Draws large ornamental work directly on the body before a needle ever touches skin.",
    image: artist1,
  },
  {
    slug: "noah-vale",
    name: "Noah Vale",
    specialty: "Japanese / Traditional",
    location: "Berlin",
    bio: "Twelve years spent on structure: wind bars, water, seasonal composition. Works almost exclusively in full sleeves and backpieces.",
    image: artist2,
  },
  {
    slug: "elena-rose",
    name: "Elena Rose",
    specialty: "Fine Line / Botanical",
    location: "Berlin / Lisbon",
    bio: "Single-needle work with a botanist's patience. Draws from pressed flowers and old field guides.",
    image: artist3,
  },
  {
    slug: "jonas-reed",
    name: "Jonas Reed",
    specialty: "Realism / Black & Grey",
    location: "Berlin",
    bio: "Studies photographs for weeks before drawing. Believes a portrait is finished when it stops looking like a tattoo.",
    image: artist4,
  },
  {
    slug: "aria-voss",
    name: "Aria Voss",
    specialty: "Neo Traditional",
    location: "Berlin / Copenhagen",
    bio: "Bold outline, restrained palette, animals drawn with character rather than decoration.",
    image: artist5,
  },
  {
    slug: "leon-black",
    name: "Leon Black",
    specialty: "Lettering / Abstract",
    location: "Berlin",
    bio: "Hand-letters every piece. Spends as long on spacing as on the letters themselves.",
    image: artist6,
  },
];

export const featured = [
  { image: blackwork, style: "Blackwork", artist: "Maya Kane", span: "tall" },
  { image: japanese, style: "Japanese", artist: "Noah Vale", span: "tall" },
  { image: fineline, style: "Fine Line", artist: "Elena Rose", span: "short" },
  { image: realism, style: "Realism", artist: "Jonas Reed", span: "tall" },
  { image: ornamental, style: "Ornamental", artist: "Maya Kane", span: "short" },
  { image: neotrad, style: "Neo Traditional", artist: "Aria Voss", span: "tall" },
  { image: lettering, style: "Lettering", artist: "Leon Black", span: "short" },
  { image: abstract, style: "Abstract", artist: "Leon Black", span: "tall" },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    copy: "We sit down — in the studio or on a call — and talk about placement, scale, and what the piece is actually for.",
  },
  {
    number: "02",
    title: "Concept",
    copy: "Your artist builds a direction: references, composition, the amount of black. Nothing is drawn before this is agreed.",
  },
  {
    number: "03",
    title: "Design",
    copy: "The drawing is made for your body, not for a catalogue. Adjustments happen on the stencil, on the day.",
  },
  {
    number: "04",
    title: "Tattoo",
    copy: "One session or several. Sterile, unhurried, with breaks whenever you need them.",
  },
  {
    number: "05",
    title: "Heal",
    copy: "Written aftercare, a check-in at two weeks, and a free touch-up within the first year.",
  },
];

export const journal = [
  {
    slug: "the-art-of-blackwork",
    title: "The Art of Blackwork",
    excerpt:
      "Why the strongest tattoos are often the ones with the least information — and how negative space carries a design for thirty years.",
    date: "March 2026",
    readingTime: "6 min",
    image: blackwork,
  },
  {
    slug: "choosing-your-style",
    title: "How to Choose Your Tattoo Style",
    excerpt:
      "A practical guide to narrowing an idea down: reference, placement, and the difference between an image you like and an image you can wear.",
    date: "February 2026",
    readingTime: "8 min",
    image: ornamental,
  },
  {
    slug: "behind-the-needle",
    title: "Behind the Needle",
    excerpt: "A day inside the studio, from the first stencil to the last line of a nine-hour session.",
    date: "January 2026",
    readingTime: "5 min",
    image: studioTools,
  },
  {
    slug: "the-healing-process",
    title: "The Healing Process",
    excerpt: "The first fourteen days decide how a tattoo looks for the next fourteen years. What to do, and what to leave alone.",
    date: "December 2025",
    readingTime: "4 min",
    image: studioInterior,
  },
];

export const socialGrid = [
  { image: blackwork, style: "Blackwork", artist: "Maya Kane" },
  { image: fineline, style: "Fine Line", artist: "Elena Rose" },
  { image: japanese, style: "Japanese", artist: "Noah Vale" },
  { image: realism, style: "Realism", artist: "Jonas Reed" },
  { image: lettering, style: "Lettering", artist: "Leon Black" },
  { image: neotrad, style: "Neo Traditional", artist: "Aria Voss" },
  { image: ornamental, style: "Ornamental", artist: "Maya Kane" },
  { image: abstract, style: "Abstract", artist: "Leon Black" },
];

export { studioInterior, studioTools };
