"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface BounceTextProps {
  text: string;
  className?: string;
}

export default function BounceText({ text, className = "" }: BounceTextProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.h1 
      ref={ref}
      className={className} 
      style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: [20, 0],
              transition: { type: "spring", stiffness: 300, damping: 20 }
            },
          }}
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
