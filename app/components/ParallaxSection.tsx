"use client";

import { useEffect, useState, useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
}

export const ParallaxSection = ({
  children,
  speed = 0.5,
}: ParallaxSectionProps) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.innerHeight - rect.top;
        setOffset(scrolled * speed * 0.1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  );
};

