import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  href?: string;
}

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Button({ className, children, href, ...props }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center min-h-[44px] px-5",
    "bg-(--color-brass) text-(--color-ink) border-none rounded-[4px] no-underline",
    "font-body font-semibold text-[0.8125rem] tracking-[0.06em] uppercase",
    "cursor-pointer transition-shadow",
    "shadow-[0_2px_0_color-mix(in_srgb,var(--color-ink)_18%,transparent)]",
    "hover:shadow-[0_4px_0_color-mix(in_srgb,var(--color-ink)_22%,transparent)]",
    "active:translate-y-[2px] active:shadow-none",
    className
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={styles}
      {...props}
    >
      {children}
    </button>
  );
}
