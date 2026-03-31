"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { useScrollReveal } from "./useScrollReveal";

interface Photo {
  src: string;
  alt: string;
  category: string;
}

const categories = [
  {
    name: "Traditions",
    description: "The rituals and rhythms of Italian life",
    photos: [
      { file: "traditions/octopus-detail.jpg", alt: "Octopus tentacles drying in the Mediterranean sun" },
      { file: "traditions/fisherman-nets.jpg", alt: "Old fisherman mending nets by the harbor" },
      { file: "traditions/grape-harvest-crates.jpg", alt: "Freshly harvested grapes in wooden crates" },
      { file: "traditions/wine-press-group.jpg", alt: "Friends gathered around an old wine press" },
      { file: "traditions/wine-press-portrait.jpg", alt: "Winemaker operating a traditional press" },
      { file: "traditions/sicilian-cart-wheel.jpg", alt: "Hand-painted Sicilian cart wheel detail" },
      { file: "traditions/alpine-cow-mountains.jpg", alt: "Cow grazing in Alpine meadow with snow-capped mountains" },
    ],
  },
  {
    name: "Coastline",
    description: "Where the mountains meet the sea",
    photos: [
      { file: "coastline/positano-striped-umbrellas.jpg", alt: "Positano viewed through striped beach umbrellas" },
      { file: "coastline/positano-nautical-rope.jpg", alt: "Positano coastline with nautical rope in foreground" },
      { file: "coastline/positano-color.jpg", alt: "Colorful houses cascading down the cliffs of Positano" },
      { file: "coastline/capri-boat-fontelina.jpg", alt: "Traditional boat moored at Fontelina beach in Capri" },
      { file: "coastline/storm-cloud-sea-rays.jpg", alt: "Dramatic storm cloud with sun rays over the Mediterranean" },
      { file: "coastline/sculptural-cloud-bw.jpg", alt: "Sculptural cloud formation in black and white" },
    ],
  },
  {
    name: "Cuisine",
    description: "The art of Italian food and wine",
    photos: [
      { file: "cuisine/octopus-menu-blackboard.jpg", alt: "Hand-drawn octopus on Italian restaurant blackboard menu" },
      { file: "cuisine/handmade-ravioli.jpg", alt: "Handmade ravioli laid out on a kitchen cloth" },
      { file: "cuisine/mushroom-sign-forest.jpg", alt: "Old sign in the forest prohibiting mushroom picking" },
    ],
  },
  {
    name: "Details",
    description: "Beauty in the overlooked and forgotten",
    photos: [
      { file: "details/ferrari-spider-vintage.jpg", alt: "Vintage Ferrari spider parked on an Italian street" },
      { file: "details/spoke-wheel-classic-car.jpg", alt: "Wire spoke wheel of a classic Italian car" },
      { file: "details/trulli-rooftops-puglia.jpg", alt: "Man standing among trulli rooftops in Puglia" },
      { file: "details/friends-umbrella-puglia.jpg", alt: "Two friends with umbrella on a stone wall in Puglia" },
      { file: "details/masseria-gate-puglia.jpg", alt: "Ancient masseria gate with overgrown courtyard" },
      { file: "details/rusty-garage-sign.jpg", alt: "Rusty vintage garage sign on weathered stone wall" },
      { file: "details/child-toy-camera.jpg", alt: "Child holding a toy camera, future photographer" },
    ],
  },
];

export default function PortfolioSection({ r2 }: { r2: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const ref = useScrollReveal();

  const allPhotos: Photo[] = categories.flatMap((cat) =>
    cat.photos.map((p) => ({
      src: `${r2}/${p.file}`,
      alt: p.alt,
      category: cat.name,
    }))
  );

  const openLightbox = (categoryIndex: number, photoIndex: number) => {
    let globalIndex = 0;
    for (let i = 0; i < categoryIndex; i++) {
      globalIndex += categories[i].photos.length;
    }
    globalIndex += photoIndex;
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="portfolio" className="bg-[#0a0a0a] py-24 md:py-32">
        <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="font-sans text-[13px] font-medium tracking-[8px] uppercase text-white/30 text-center mb-16">
            Portfolio
          </p>

          {categories.map((category, catIndex) => {
            const isCuisine = category.name === "Cuisine";
            return (
              <div key={category.name} className={catIndex > 0 ? "mt-24 md:mt-32" : ""}>
                {/* Category header */}
                <div className="text-center mb-10 md:mb-14">
                  <h2 className="font-serif italic text-6xl md:text-8xl text-[#e8e6e1] leading-none mb-3 fade-in-up">
                    {category.name}
                  </h2>
                  <p className="font-sans text-[14px] tracking-wide text-white/30 fade-in-up" style={{ transitionDelay: '100ms' }}>
                    {category.description}
                  </p>
                </div>

                {/* Photo grid */}
                <div
                  className={`grid gap-4 md:gap-5 ${
                    isCuisine
                      ? "grid-cols-3"
                      : "grid-cols-1 md:grid-cols-2"
                  }`}
                >
                  {category.photos.map((photo, photoIndex) => (
                    <div
                      key={photo.file}
                      className="group cursor-pointer fade-in"
                      style={{ transitionDelay: `${photoIndex * 100}ms` }}
                      onClick={() => openLightbox(catIndex, photoIndex)}
                      data-cursor="pointer"
                    >
                      <div className="border border-white/[0.08] p-2 md:p-3 transition-all duration-700 group-hover:border-white/[0.20]">
                        <div
                          className={`relative overflow-hidden ${
                            isCuisine ? "aspect-square" : "aspect-[4/3]"
                          }`}
                        >
                          <Image
                            src={`${r2}/${photo.file}`}
                            alt={photo.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            loading="lazy"
                            quality={85}
                            sizes={
                              isCuisine
                                ? "33vw"
                                : "(max-width: 768px) 100vw, 50vw"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          photos={allPhotos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
