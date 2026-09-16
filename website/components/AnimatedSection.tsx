
"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "flip";
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const directions = {
    left: { x: -50, y: 0, rotateY: 0 },
    right: { x: 50, y: 0, rotateY: 0 },
    up: { x: 0, y: 40, rotateY: 0 },
    flip: { x: 0, y: 0, rotateY: -15 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotateY: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: "easeOut",
      }}
      style={{
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}