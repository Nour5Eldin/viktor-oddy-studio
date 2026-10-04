import { useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { marqueeImages } from "@/data/marquee";
import { Button } from "@/components/ui/Button";

interface TrailItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  imageUrl: string;
}

const SPAWN_INTERVAL_MS = 80;
const TRAIL_LIFETIME_MS = 1000;

export function Partner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);
  const nextIdRef = useRef(0);
  const [trail, setTrail] = useState<TrailItem[]>([]);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastSpawnRef.current < SPAWN_INTERVAL_MS) return;
    lastSpawnRef.current = now;

    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const id = nextIdRef.current++;
    const item: TrailItem = {
      id,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      rotation: Math.random() * 20 - 10,
      imageUrl: marqueeImages[id % marqueeImages.length].url,
    };

    setTrail((current) => [...current, item]);
    window.setTimeout(() => {
      setTrail((current) => current.filter((entry) => entry.id !== id));
    }, TRAIL_LIFETIME_MS);
  }, []);

  return (
    <section className="w-full px-6 py-12">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative mx-auto flex max-w-7xl items-center justify-center overflow-hidden rounded-[40px] bg-white py-48 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
      >
        <AnimatePresence>
          {trail.map((item) => (
            <motion.img
              key={item.id}
              src={item.imageUrl}
              alt=""
              aria-hidden="true"
              initial={{ opacity: 1, scale: 1, rotate: item.rotation }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: TRAIL_LIFETIME_MS / 1000, ease: "easeOut" }}
              className="pointer-events-none absolute h-32 w-24 -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover shadow-lg"
              style={{ left: item.x, top: item.y }}
            />
          ))}
        </AnimatePresence>

        <div className="relative z-10 flex flex-col items-center gap-12 text-center">
          <h2 className="font-display text-[48px] text-ink-800 md:text-[64px] lg:text-[80px]">
            Partner with us
          </h2>
          <Button href="#book" variant="primary" className="pl-2">
            <img
              src="https://picsum.photos/seed/viktor-oddy-portrait/100/100"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            Start chat with Viktor
          </Button>
        </div>
      </div>
    </section>
  );
}
