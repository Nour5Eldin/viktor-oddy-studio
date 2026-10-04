import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const primaryLinks = [
  { label: "Services", href: "#pricing" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#" },
];

const socialLinks = [
  { label: "x.com", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer
      id="book"
      className="mx-auto flex w-full max-w-[1200px] scroll-mt-24 flex-col gap-12 px-6 py-12 md:flex-row md:items-center md:justify-between"
    >
      <Button href="#book" variant="primary">
        Start a chat
      </Button>

      <div className="flex items-start gap-10">
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-900" aria-hidden="true" />

        <nav className="flex gap-16">
          <ul className="flex flex-col gap-2">
            {primaryLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base text-ink-900 transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-ink-900 transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
