"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface BounceTextProps {
  text: string;
  className?: string;
}

export default function BounceText({ text, className = "" }: BounceTextProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.h1 
      className={className} 
      style={{display: "flex", gap: "4px", flexWrap: "wrap" }}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 }, // Bắt đầu mờ và thấp hơn
            visible: { 
              opacity: 1, 
              y: [20, 0], // Nhảy lên
              transition: { type: "spring", stiffness: 300, damping: 10 }
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
