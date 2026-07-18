import React from 'react';
import { cn } from './Button';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function Badge({ children, icon, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5",
        "border border-(--color-forest) rounded-[4px]",
        "text-(--color-forest) font-mono text-[0.75rem]",
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </div>
  );
}
