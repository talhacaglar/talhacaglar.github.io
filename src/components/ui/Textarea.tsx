"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="block font-mono text-[0.6875rem] uppercase tracking-[0.14em] font-medium text-[var(--text-muted)] mb-2"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={`w-full px-4 py-3 rounded-xl glass text-[var(--text)] placeholder-[var(--text-faint)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-none ${
            error ? "border-red-500/60 focus:ring-red-500" : ""
          } ${className}`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <motion.p
            id={`${inputId}-error`}
            className="mt-1.5 text-sm text-red-400"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";