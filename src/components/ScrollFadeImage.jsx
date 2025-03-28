import React, { useRef } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";

function ScrollFadeImage({ src, alt, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      style={{ opacity, scale }}
      className={`w-full h-auto object-cover transition-all duration-300 ${className}`}
    />
  );
}

export default ScrollFadeImage;
