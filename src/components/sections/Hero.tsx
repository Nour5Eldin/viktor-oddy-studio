import { cn } from "@/lib/utils";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { ref, isInView } = useInViewAnimation();

  /** Inline `animation-delay`, only applied once the section is in view. */
  const delay = (seconds: number) =>
    isInView ? { animationDelay: `${seconds}s` } : undefined;
  const reveal = isInView ? "animate-fade-in-up" : "opacity-0";

  return (
    <section
      ref={ref}
      className="mx-auto max-w-110 px-6 pt-12 text-center md:pt-16"
    >
      <p
        style={delay(0.1)}
        className={cn(
          "mb-4 font-display text-[32px] font-semibold tracking-tight text-ink-900 md:text-[40px] lg:text-[44px]",
          reveal,
        )}
      >
        Viktor Oddy
      </p>

      <p
        style={delay(0.2)}
        className={cn("mb-2 font-mono text-xs text-ink-900 md:text-sm", reveal)}
      >
        The creative studio of Viktor Oddy
      </p>

      <h1
        style={delay(0.3)}
        className={cn(
          "whitespace-nowrap text-[32px] leading-[1.1] tracking-tight text-ink-800 md:text-[40px] lg:text-[44px]",
          reveal,
        )}
      >
        Build <span className="font-display">the next wave,</span>
        <br />
        the <span className="font-display">bold way.</span>
      </h1>

      <div
        style={delay(0.4)}
        className={cn(
          "mt-5 flex flex-col gap-6 text-sm leading-relaxed text-ink-900 md:mt-6 md:text-base",
          reveal,
        )}
      >
        <p>
          I spent close to a decade inside fast-moving product teams before I
          wanted more control over the craft. Viktor Oddy is what came out of
          that — a studio built around doing fewer things, better.
        </p>
        <p>
          The studio is deliberately small. I lead the creative direction on
          every project myself, backed by a short list of senior designers
          and engineers who don't need close supervision.
        </p>
        <p>Projects start at $5,000 per month.</p>
      </div>

      <div
        style={delay(0.5)}
        className={cn("mt-5 flex flex-col gap-3 sm:flex-row md:mt-6 md:gap-4", reveal)}
      >
        <Button href="#book" variant="primary">
          Start a chat
        </Button>
        <Button href="#projects" variant="secondary">
          View projects
        </Button>
      </div>
    </section>
  );
}
