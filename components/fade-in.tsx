"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: direction === "up" ? 20 : 0 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: direction === "up" ? 20 : 0 }
      }
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
