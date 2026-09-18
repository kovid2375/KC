"use client";

import { motion } from "framer-motion";

interface BlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  blur?: string;
  yOffset?: number;
  className?: string;
}

export default function BlurReveal({
  children,
  delay = 0,
  duration = 0.9,
  blur = "16px",
  yOffset = 28,
  className = "",
}: BlurRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: `blur(${blur})`, y: yOffset }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

