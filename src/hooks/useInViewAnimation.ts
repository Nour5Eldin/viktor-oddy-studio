import { useEffect, useRef, useState } from "react";

interface UseInViewAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Tracks whether an element has scrolled into view and reports it once.
 * Pair the returned `ref` with the `animate-fade-in-up` utility class:
 *
 *   const { ref, isInView } = useInViewAnimation();
 *   <div ref={ref} className={isInView ? "animate-fade-in-up" : "opacity-0"} />
 */
export function useInViewAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewAnimationOptions = {},
) {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion users by revealing content immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isInView };
}
