import Image from "next/image";
import PortfolioSection from "@/components/PortfolioSection";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

const R2 = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0a0a0a] pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={`${R2}/traditions/fisherman-octopus.jpg`}
              alt="Black and white photograph of fisherman hanging octopus to dry in Italian harbor"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
          <div className="mt-10 md:mt-14 text-center">
            <p className="font-sans text-[14px] font-medium tracking-[8px] uppercase text-white/40 mb-5">
              Matteo Mariotti
            </p>
            <h1 className="font-serif italic text-5xl md:text-7xl text-[#e8e6e1] leading-[1.1] max-w-2xl mx-auto">
              Capturing the soul of Italian life
            </h1>
            <div className="w-12 h-[1px] bg-white/20 mx-auto mt-7 mb-4" />
            <p className="font-sans text-[15px] tracking-widest text-white/35">
              Lifestyle photography
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <ScrollRevealWrapper>
        <section className="bg-[#f5f3ee] py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
            <p className="font-sans text-[13px] font-medium tracking-[8px] uppercase text-black/30 mb-8 fade-in">
              The Work
            </p>
            <blockquote className="font-serif italic text-4xl md:text-6xl text-[#1a1a1a] leading-[1.15] max-w-2xl mx-auto fade-in-up">
              Through my lens, Italy reveals its most authentic self
            </blockquote>
            <div className="w-12 h-[1px] bg-black/15 mx-auto my-8 fade-in" style={{ transitionDelay: '200ms' }} />
            <p className="font-sans text-[15px] leading-[1.9] text-black/45 max-w-md mx-auto fade-in" style={{ transitionDelay: '300ms' }}>
              Over 30 years of documenting traditions, craftsmanship, cuisine
              and the quiet beauty of everyday Italian life.
            </p>
          </div>
        </section>
      </ScrollRevealWrapper>

      {/* PORTFOLIO */}
      <PortfolioSection r2={R2 || ""} />

      {/* ABOUT */}
      <ScrollRevealWrapper>
        <section id="about" className="bg-[#f5f3ee] py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
            <p className="font-sans text-[13px] font-medium tracking-[8px] uppercase text-black/30 mb-8 fade-in">
              About
            </p>
            <blockquote className="font-serif italic text-3xl md:text-5xl text-[#1a1a1a] leading-[1.15] max-w-xl mx-auto mb-8 fade-in-up">
              Every photograph is a love letter to this country
            </blockquote>
            <div className="w-12 h-[1px] bg-black/15 mx-auto mb-10 fade-in" style={{ transitionDelay: '200ms' }} />
            <p className="font-sans text-[16px] md:text-[17px] leading-[2] text-black/50 max-w-2xl mx-auto text-left fade-in" style={{ transitionDelay: '300ms' }}>
              Matteo Mariotti is a Roman of the old school. For nearly twenty
              years he has been running MM Productions S.r.l., a production
              house that turns complex ideas into international campaigns for
              fashion, luxury and automotive, solving on the ground what seems
              impossible. When the set goes dark, he picks up his camera again.
              With over thirty years of experience, he dedicates himself to
              lifestyle photography: direct images, unfiltered, that tell the
              story of the Italy that has always been — a coffee at the bar, a
              table set according to tradition, the slow gesture of those who
              still know how to do things the way they were meant to be done.
              His eye evokes traditions and the true sense of Italian identity,
              stripping away the unnecessary and leaving only the essence. No
              poses, no effects: just natural light, authentic gestures and that
              practical elegance that comes from La Dolce Vita lived for real.
              For him, photography is work, observation and respect for the
              things that last. Producer by day, photographer when silence
              falls. Always with the same principles: a sharp eye, hands-on
              approach and zero unnecessary romanticism.
            </p>
          </div>
        </section>
      </ScrollRevealWrapper>

      {/* CONTACT */}
      <ScrollRevealWrapper>
        <section id="contact" className="bg-[#0a0a0a] py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
            <p className="font-sans text-[13px] font-medium tracking-[8px] uppercase text-white/30 mb-8 fade-in">
              Contact
            </p>
            <h2 className="font-serif italic text-3xl md:text-5xl text-[#e8e6e1] leading-[1.1] mb-4 fade-in-up">
              Let&apos;s create something together
            </h2>
            <p className="font-sans text-[14px] text-white/35 mb-10 fade-in" style={{ transitionDelay: '200ms' }}>
              Collaborations, commissions, editorial work
            </p>
            <div className="w-8 h-[1px] bg-white/15 mx-auto mb-6 fade-in" style={{ transitionDelay: '300ms' }} />
            <a
              href="mailto:info@themariotti.com"
              className="font-sans text-[15px] tracking-wider text-white/50 hover:text-white/80 transition-colors fade-in"
              style={{ transitionDelay: '400ms' }}
              data-cursor="pointer"
            >
              info@themariotti.com
            </a>
            <p className="font-sans text-[14px] text-white/30 mt-4 fade-in" style={{ transitionDelay: '500ms' }}>
              +39 335 623 2668
            </p>
          </div>
        </section>
      </ScrollRevealWrapper>
    </>
  );
}
