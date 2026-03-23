import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Sezione 1 — Hero (SCURO) */}
      <section className="relative min-h-screen bg-[#0a0a0a]">
        {/* Placeholder sfondo */}
        <div className="absolute inset-0 bg-[#1a1a1a]" />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
        {/* Testo */}
        <div className="absolute bottom-16 left-8 md:left-16">
          <p
            className="font-sans text-[10px] tracking-[5px] uppercase mb-3"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            MATTEO MARIOTTI
          </p>
          <h1
            className="font-serif text-[32px] md:text-5xl max-w-lg leading-tight"
            style={{ fontStyle: "italic", color: "#e8e6e1" }}
          >
            Capturing the soul of Italian life
          </h1>
          <div
            className="mt-4"
            style={{
              width: 40,
              height: 1,
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
          />
          <p
            className="font-sans text-[12px] mt-2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Black &amp; white lifestyle photography
          </p>
        </div>
      </section>

      {/* Sezione 2 — Intro (CHIARO) */}
      <section className="bg-[#f5f3ee] py-20 text-center px-6">
        <p
          className="font-sans text-[10px] tracking-[5px] uppercase mb-4"
          style={{ color: "rgba(0,0,0,0.4)" }}
        >
          THE WORK
        </p>
        <blockquote
          className="font-serif text-2xl md:text-3xl max-w-md mx-auto leading-relaxed"
          style={{ fontStyle: "italic", color: "#2a2a2a" }}
        >
          Through my lens, Italy reveals its most authentic self
        </blockquote>
        <div
          className="mx-auto my-5"
          style={{
            width: 40,
            height: 1,
            backgroundColor: "rgba(0,0,0,0.15)",
          }}
        />
        <p
          className="font-sans text-[13px] max-w-sm mx-auto leading-relaxed"
          style={{ color: "rgba(0,0,0,0.45)" }}
        >
          Over 30 years of documenting traditions, craftsmanship, cuisine and
          the quiet beauty of everyday Italian life.
        </p>
      </section>

      {/* Sezione 3 — Portfolio Categories (SCURO) */}
      <section className="bg-[#0a0a0a] py-16 px-2">
        <p
          className="font-sans text-[10px] tracking-[5px] uppercase text-center mb-6"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          PORTFOLIO
        </p>
        <div className="grid grid-cols-2 gap-1">
          {[
            { label: "Traditions", href: "/italian-traditions-photography" },
            { label: "Coastline", href: "/italian-coastline-photography" },
            { label: "Cuisine", href: "/italian-cuisine-photography" },
            { label: "Details", href: "/italian-details-photography" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} className="group block relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-[#1a1a1a]" />
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{ backgroundColor: "rgba(0,0,0,0.40)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-sans text-[13px] tracking-[3px] uppercase"
                  style={{ color: "#e8e6e1" }}
                >
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/italian-lifestyle-photography"
            className="font-sans text-[12px] tracking-[3px] uppercase py-3 px-8 transition-colors duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.20)",
              color: "#e8e6e1",
            }}
            onMouseEnter={undefined}
          >
            View all work
          </Link>
        </div>
      </section>

      {/* Sezione 4 — Selected Works (CHIARO) */}
      <section className="bg-[#f5f3ee] py-16 px-2">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-[#d8d4cc]" />
          ))}
        </div>
        <p
          className="font-sans text-[11px] tracking-[3px] uppercase text-center mt-6"
          style={{ color: "rgba(0,0,0,0.35)" }}
        >
          Selected works — a visual journey through Italy
        </p>
      </section>

      {/* Sezione 5 — About Preview (SCURO) */}
      <section className="bg-[#0a0a0a] py-20 text-center px-6">
        <p
          className="font-sans text-[10px] tracking-[5px] uppercase mb-4"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          ABOUT
        </p>
        <blockquote
          className="font-serif text-xl md:text-2xl max-w-sm mx-auto leading-relaxed"
          style={{ fontStyle: "italic", color: "#e8e6e1" }}
        >
          Every photograph is a love letter to this country
        </blockquote>
        <div
          className="mx-auto my-5"
          style={{
            width: 40,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
        />
        <p
          className="font-sans text-[13px] max-w-sm mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Matteo Mariotti has spent three decades photographing the Italian
          lifestyle — its rituals, its people, its timeless beauty. Based in
          Italy, working in black and white.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/about-photographer"
            className="font-sans text-[12px] tracking-[3px] uppercase py-3 px-8 transition-colors duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.20)",
              color: "#e8e6e1",
            }}
          >
            Read more
          </Link>
        </div>
      </section>

      {/* Sezione 6 — Contact CTA (CHIARO) */}
      <section className="bg-[#f5f3ee] py-20 text-center px-6">
        <p
          className="font-sans text-[10px] tracking-[5px] uppercase mb-4"
          style={{ color: "rgba(0,0,0,0.4)" }}
        >
          CONTACT
        </p>
        <h2
          className="font-serif text-xl"
          style={{ fontStyle: "italic", color: "#2a2a2a" }}
        >
          Let&apos;s create something together
        </h2>
        <p
          className="font-sans text-[13px] mt-2"
          style={{ color: "rgba(0,0,0,0.45)" }}
        >
          Collaborations, commissions, editorial work
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/contact-photographer"
            className="font-sans text-[12px] tracking-[3px] uppercase py-3 px-8 transition-colors duration-300"
            style={{
              border: "1px solid rgba(0,0,0,0.20)",
              color: "#1a1a1a",
            }}
          >
            Get in touch
          </Link>
        </div>
        <p
          className="font-sans text-[12px] mt-5"
          style={{ color: "rgba(0,0,0,0.35)" }}
        >
          +39 335 623 2668
        </p>
      </section>
    </>
  );
}
