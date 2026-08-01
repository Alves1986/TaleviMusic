"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionDividerProps {
  chordName: string;
  className?: string;
}

export function SectionDivider({ chordName, className }: SectionDividerProps) {
  const getChordDots = (chord: string) => {
    switch (chord) {
      case "C":
        return [
          { cx: 18, cy: 47.5 },
          { cx: 26, cy: 32.5 },
          { cx: 42, cy: 17.5 }
        ];
      case "D":
        return [
          { cx: 34, cy: 32.5 },
          { cx: 42, cy: 47.5 },
          { cx: 50, cy: 32.5 }
        ];
      case "G":
        return [
          { cx: 10, cy: 55 },
          { cx: 18, cy: 40 },
          { cx: 50, cy: 55 }
        ];
      case "Em":
        return [
          { cx: 18, cy: 32.5 },
          { cx: 26, cy: 32.5 }
        ];
      default:
        return [
          { cx: 26, cy: 17.5 },
          { cx: 34, cy: 17.5 }
        ];
    }
  };

  const dots = getChordDots(chordName);

  // Simple chord diagram visualization
  return (
    <div className={`flex flex-col items-center justify-center py-12 ${className || ""}`}>
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

        {/* Chord Dots */}
        {dots.map((dot, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={dot.cx} cy={dot.cy} r="3" fill="currentColor"
            style={{
              transformBox: "fill-box",
              transformOrigin: "50% 50%",
            }}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: 0.8 + i * 0.1, ease: "easeOut" } }
            }}
            animate={{
              scale: [1, 1.1, 1, 1.08, 1],
              transition: {
                duration: 1.6,
                delay: 1 + i * 0.15,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </motion.svg>
      <span className="font-mono uppercase text-[0.875rem] text-(--color-rosewood) mt-3">
        {chordName}
      </span>
    </div>
  );
}
