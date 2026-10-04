import { Button } from "@/components/ui/Button";

export function BottomNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full bg-white px-8 py-2 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]">
      <a href="#" aria-label="Viktor Oddy — back to top" className="font-display text-2xl font-semibold text-ink-900">
        V
      </a>
      <Button href="#book" variant="primary" className="px-5 py-2">
        Start a chat
      </Button>
    </nav>
  );
}
