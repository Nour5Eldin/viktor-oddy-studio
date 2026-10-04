import { cn } from "@/lib/utils";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  const { ref, isInView } = useInViewAnimation();
  const reveal = isInView ? "animate-fade-in-up" : "opacity-0";
  const delay = (seconds: number) =>
    isInView ? { animationDelay: `${seconds}s` } : undefined;

  return (
    <section ref={ref} className="w-full px-6 py-12">
      <div className="grid grid-cols-1 gap-8 md:ml-auto md:max-w-4xl md:grid-cols-2 md:justify-end">
        {/* Monthly partnership — dark card */}
        <div
          style={delay(0.1)}
          className={cn(
            "rounded-[40px] bg-ink-900 pb-10 pl-10 pr-10 pt-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:pr-24",
            reveal,
          )}
        >
          <h3 className="text-[22px] font-medium text-mist-100">Monthly Partnership</h3>
          <p className="mt-2 text-sm leading-relaxed text-mist-200">
            A dedicated creative design team.
            <br />
            You work directly with Viktor.
          </p>
          <div className="mt-8">
            <span className="text-2xl text-mist-100">$5,000</span>
            <p className="mt-1 text-sm text-mist-200">Monthly</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#book" variant="primary">
              Start a chat
            </Button>
            <Button href="#how-it-works" variant="secondary">
              How it works
            </Button>
          </div>
        </div>

        {/* Custom project — light card */}
        <div
          style={delay(0.2)}
          className={cn(
            "rounded-[40px] bg-white pb-10 pl-10 pr-10 pt-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:pr-24",
            reveal,
          )}
        >
          <h3 className="text-[22px] font-medium text-ink-800">Custom Project</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-900/70">
            Fixed scope, fixed timeline.
            <br />
            Same team, same standards.
          </p>
          <div className="mt-8">
            <span className="text-2xl text-ink-800">$5,000</span>
            <p className="mt-1 text-sm text-ink-900/70">Minimum</p>
          </div>
          <div className="mt-8">
            <Button href="#book" variant="tertiary">
              Start a chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
