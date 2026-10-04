import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies a capped vertical parallax to an element as it crosses the
 * viewport, scrubbed to scroll position via GSAP's ScrollTrigger.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(maxOffset = 200) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        { y: -maxOffset / 2 },
        {
          y: maxOffset / 2,
          ease: "none",
          scrollTrigger: {
            trigger: node,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [maxOffset]);

  return ref;
}
