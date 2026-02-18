"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "cta";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-charcoal active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed shadow-sm hover:shadow-md",
  secondary:
    "border border-gray-light text-charcoal hover:border-primary hover:text-primary active:scale-[0.98] bg-white",
  cta: "bg-primary text-white hover:bg-charcoal active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed shadow-sm hover:shadow-md",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-8 py-3 font-heading font-bold text-sm tracking-wide rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
