"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  chordName: string;
  className?: string;
}

export function SectionDivider({ chordName, className }: SectionDividerProps) {
  // Simple chord diagram visualization
  return (
    <div className={`flex flex-col items-center justify-center py-12 ${className || ''}`}>
      <motion.svg
        width="60"
        height="70"
        viewBox="0 0 60 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="text-(--color-rosewood)"
      >
        {/* Nut / Pestana base */}
        <motion.line
          x1="10" y1="10" x2="50" y2="10"
          stroke="currentColor" strokeWidth="4" strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 0.5 } }
          }}
        />
        
        {/* Strings */}
        {[10, 18, 26, 34, 42, 50].map((x, i) => (
          <motion.line
            key={`string-${i}`}
            x1={x} y1="10" x2={x} y2="60"
            stroke="currentColor" strokeWidth="1"
            variants={{
              hidden: { pathLength: 0 },
              visible: { pathLength: 1, transition: { duration: 0.3, delay: i * 0.1 } }
            }}
          />
        ))}

        {/* Frets */}
        {[25, 40, 55].map((y, i) => (
          <motion.line
            key={`fret-${i}`}
            x1="10" y1={y} x2="50" y2={y}
            stroke="currentColor" strokeWidth="1"
            variants={{
              hidden: { pathLength: 0 },
              visible: { pathLength: 1, transition: { duration: 0.3, delay: 0.5 + i * 0.1 } }
            }}
          />
        ))}

        {/* Example Chord Dots (Generic dots for Em style as placeholder) */}
        <motion.circle
          cx="26" cy="17.5" r="3" fill="currentColor"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.2, delay: 0.8 } }
          }}
        />
        <motion.circle
          cx="34" cy="17.5" r="3" fill="currentColor"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.2, delay: 0.9 } }
          }}
        />
      </motion.svg>
      <span className="font-mono uppercase text-[0.875rem] text-(--color-rosewood) mt-3">
        {chordName}
      </span>
    </div>
  );
}
