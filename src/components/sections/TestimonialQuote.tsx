import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { useParallax } from "@/hooks/useParallax";

const pastClients = [
  { name: "Stackline", width: 92 },
  { name: "Ferrous", width: 78 },
  { name: "Bracket", width: 86 },
];

export function TestimonialQuote() {
  const { ref, isInView } = useInViewAnimation();
  const parallaxRef = useParallax<HTMLImageElement>(200);

  const delay = (seconds: number) =>
    isInView ? { animationDelay: `${seconds}s` } : undefined;
  const reveal = isInView ? "animate-fade-in-up" : "opacity-0";

  return (
    <section ref={ref} className="mx-auto max-w-2xl px-6 py-12 text-center">
      <Quote style={delay(0.1)} className={cn("mx-auto mb-6 h-6 w-6 text-ink-800", reveal)} />

      <p
        style={delay(0.2)}
        className={cn(
          "text-[32px] leading-[1.1] tracking-tight text-ink-800 md:text-[40px] lg:text-[44px]",
          reveal,
        )}
      >
        I left <span className="font-display">Halcyon</span> to build the
        studio I always wanted to work with.
      </p>

      <p
        style={delay(0.3)}
        className={cn("mt-6 text-sm italic text-slate-muted", reveal)}
      >
        Viktor Oddy
      </p>

      <div
        style={delay(0.4)}
        className={cn("mt-10 flex flex-wrap items-center justify-center gap-10", reveal)}
      >
        {pastClients.map((client) => (
          <span
            key={client.name}
            style={{ width: client.width }}
            className="text-center text-2xl font-medium text-ink-900"
          >
            {client.name}
          </span>
        ))}
      </div>

      <div style={delay(0.5)} className={cn("mt-10 flex justify-center", reveal)}>
        <img
          ref={parallaxRef}
          src="https://picsum.photos/seed/viktor-oddy-portrait/800/1000"
          alt="Viktor Oddy"
          loading="lazy"
          className="w-full max-w-xs rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
