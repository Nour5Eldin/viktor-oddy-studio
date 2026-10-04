import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const AUTOPLAY_MS = 3000;
const GAP_PX = 24;

/** Small decorative quote glyph used on each card. */
function QuoteMark() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <path
        d="M13.6 0v9.4c0 5.1-2.9 9.9-8.4 12.6L3 18.7c3.4-2 5-4.4 5-7H2V0h11.6ZM32 0v9.4c0 5.1-2.9 9.9-8.4 12.6l-2.2-3.3c3.4-2 5-4.4 5-7h-6V0H32Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TestimonialCarousel() {
  const { ref: sectionRef, isInView } = useInViewAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(427.5);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const count = testimonials.length;
  // Tripled list gives a buffer of real cards on either side of the
  // active window, so the strip never shows an empty edge.
  const looped = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const measure = () => {
      const first = trackRef.current?.querySelector<HTMLElement>("[data-carousel-card]");
      if (first) setCardWidth(first.getBoundingClientRect().width);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [isPaused, count]);

  const goTo = useCallback(
    (direction: 1 | -1) => {
      setIndex((current) => (current + direction + count) % count);
    },
    [count],
  );

  const offset = -(count + index) * (cardWidth + GAP_PX);
  const reveal = isInView ? "animate-fade-in-up" : "opacity-0";

  return (
    <section ref={sectionRef} className="w-full py-20">
      <div
        style={isInView ? { animationDelay: "0.1s" } : undefined}
        className={cn(
          "mb-10 flex flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between md:ml-auto md:max-w-4xl md:px-0",
          reveal,
        )}
      >
        <h2 className="text-[32px] leading-[1.1] tracking-tight text-ink-800 md:text-[40px] lg:text-[44px]">
          What <span className="font-display">builders</span> say
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-black text-black" />
            ))}
          </div>
          <span className="text-sm text-slate-muted">5.0 client rating</span>
        </div>
      </div>

      <div
        className="group relative overflow-hidden px-6 md:px-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-6"
          animate={{ x: offset }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {looped.map((testimonial, i) => {
            const isActive = i === count + index;
            return (
              <motion.article
                key={`${testimonial.id}-${i}`}
                data-carousel-card
                animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.94 }}
                transition={{ duration: 0.5 }}
                className="w-[calc(100%-48px)] shrink-0 rounded-4xl bg-white px-6 py-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:w-[427.5px] md:rounded-[40px] md:pl-10 md:pr-24"
              >
                <div className="mb-6 text-ink-800">
                  <QuoteMark />
                </div>
                <p className="text-base leading-relaxed text-ink-800">{testimonial.quote}</p>
                <div className="mt-8 flex items-center gap-3">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-muted">
                      <span aria-hidden="true">↳ </span>
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-8 flex justify-center gap-3 px-6 md:justify-end md:px-0">
        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous testimonial"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-800/20 transition-colors hover:bg-ink-800/5"
        >
          <ChevronLeft className="h-5 w-5 text-ink-800" />
        </button>
        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next testimonial"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-800/20 transition-colors hover:bg-ink-800/5"
        >
          <ChevronRight className="h-5 w-5 text-ink-800" />
        </button>
      </div>
    </section>
  );
}
