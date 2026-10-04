import { marqueeImages } from "@/data/marquee";

export function Marquee() {
  // Duplicated once so the strip can loop seamlessly at translateX(-50%).
  const strip = [...marqueeImages, ...marqueeImages];

  return (
    <section className="mb-16 mt-16 w-full overflow-hidden md:mt-20">
      <div className="flex w-max animate-marquee">
        {strip.map((image, index) => (
          <img
            key={`${image.id}-${index}`}
            src={image.url}
            alt={image.alt}
            loading="lazy"
            className="mx-3 h-70 w-auto rounded-2xl object-cover shadow-lg md:h-125"
          />
        ))}
      </div>
    </section>
  );
}
