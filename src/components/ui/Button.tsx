import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ButtonVariant } from "@/types";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink-900 text-mist-100 shadow-btn-primary",
  secondary: "bg-white text-ink-900 shadow-btn-secondary",
  tertiary: "bg-white text-ink-900 shadow-btn-tertiary",
};

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: "_blank";
}

/**
 * Shared pill button. Renders an <a> when `href` is passed, otherwise a
 * <button>. External links (target="_blank") get rel="noreferrer" for free.
 */
export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  target,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-transform",
    variantStyles[variant],
    className,
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15, ease: "easeOut" as const },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
