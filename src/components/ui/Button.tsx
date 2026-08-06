"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

const variants = {
  // Gradient across the accent pair rather than a flat fill.
  primary:
    "[background-image:var(--accent-gradient)] text-[var(--bg)] border border-[var(--accent-glow)] hover:brightness-110 active:brightness-95",
  secondary:
    "glass border-[var(--glass-border)] hover:glass-strong hover:border-[var(--glass-highlight)] text-[var(--text)]",
  ghost:
    "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--glass-bg)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[44px]",
  lg: "px-8 py-4 text-lg min-h-[48px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const inert = disabled || isLoading;

    return (
      <motion.button
        ref={ref}
        className={`relative inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={inert ? undefined : { scale: 1.03 }}
        whileTap={inert ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        disabled={inert}
        {...props}
      >
        {isLoading && (
          <motion.span
            className="absolute w-5 h-5 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
        )}
        <span className={`inline-flex items-center gap-2 ${isLoading ? "opacity-0" : ""}`}>
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";