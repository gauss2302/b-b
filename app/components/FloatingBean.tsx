"use client";

interface FloatingBeanProps {
  delay: number;
  size: number;
  left: number;
  duration: number;
}

export const FloatingBean = ({ delay, size, left, duration }: FloatingBeanProps) => (
  <div
    className="absolute opacity-[0.03]"
    style={{
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animation: `float ${duration}s ease-in-out infinite`,
    }}
  >
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 24 34"
      fill="currentColor"
    >
      <ellipse cx="12" cy="17" rx="10" ry="15" />
      <path
        d="M12 2C12 2 8 10 8 17C8 24 12 32 12 32"
        stroke="black"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
    </svg>
  </div>
);

