"use client";

import React from "react";
import { cn } from "./Button";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-(--color-parchment) border border-(--color-parchment-line) rounded-[4px] p-5",
        "relative overflow-hidden",
        className
      )}
    >
      {/* Decorative watermark/scroll hint */}
      <div className="absolute -right-4 -bottom-4 opacity-5 text-(--color-rosewood) pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0 C77.614 0 100 22.386 100 50 C100 77.614 77.614 100 50 100 C22.386 100 0 77.614 22.386 0 50 0 Z" />
        </svg>
      </div>

      <blockquote className="font-body text-(--color-ink) mb-4 relative z-10 italic">
        "{quote}"
      </blockquote>

      <div className="relative z-10">
        <p className="font-display text-(--color-primary) font-bold text-lg m-0">{author}</p>
        {role && (
          <p className="font-caption text-(--color-ink-muted) mt-1">{role}</p>
        )}
      </div>
    </div>
  );
}
