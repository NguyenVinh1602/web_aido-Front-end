"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ScrollColorTextProps {
  text: string;
  highlightWords?: string[];
  highlightColor?: string;
  className?: string;
}

export default function ScrollColorText({ 
  text, 
  highlightWords = [], 
  highlightColor = "#ff6600", 
  className = "" 
}: ScrollColorTextProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <h1 
      ref={ref} 
      className={className} 
      style={{ textAlign: "center", fontSize: "40px", display: "flex", gap: "8px", flexWrap: "wrap" }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { color: "#000" }, // Màu mặc định
            visible: {
              color: highlightWords.includes(word) ? highlightColor : "#000", // Đổi màu nếu từ nằm trong danh sách
              transition: { delay: index * 0.1 }, // Hiệu ứng chậm từng từ
            },
          }}
          style={{ whiteSpace: "nowrap" }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
