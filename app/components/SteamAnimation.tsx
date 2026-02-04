"use client";

export const SteamAnimation = () => {
  return (
    <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 bg-gradient-to-t from-white/30 to-transparent rounded-full animate-steam"
          style={{
            height: `${40 + i * 15}px`,
            left: `${i * 12 - 12}px`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
};
